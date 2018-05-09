# MIT License
#
# Copyright (c) 2017 Shammah Chancellor
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.


import riemann

CHARSET = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l'


def encode(data):
    '''
    bytes -> str
    '''
    if riemann.network.CASHADDR_PREFIX is None:
        raise ValueError('Network {} does not support cashaddresses.'
                         .format(riemann.get_current_network_name()))

    data = convertbits(data, 8, 5)
    checksum = calculate_checksum(riemann.network.CASHADDR_PREFIX, data)

    payload = b32encode(data + checksum)

    form = '{prefix}:{payload}'
    return form.format(
        prefix=riemann.network.CASHADDR_PREFIX,
        payload=payload)


def decode(data):
    '''
    str -> bytes
    '''
    if riemann.network.CASHADDR_PREFIX is None:
        raise ValueError('Network {} does not support cashaddresses.'
                         .format(riemann.get_current_network_name()))
    if data.find(riemann.network.CASHADDR_PREFIX) != 0:
        raise ValueError('Malformed cashaddr. Cannot locate prefix: {}'
                         .format(riemann.netowrk.CASHADDR_PREFIX))

    # the data is everything after the colon
    prefix, data = data.split(':')
    decoded = b32decode(data)
    if not verify_checksum(prefix, decoded):
            raise ValueError('Bad cash address checksum')
    converted = convertbits(decoded, 5, 8)

    return bytes(converted[:-6])  # remove the checksum from the end


def polymod(values):
    chk = 1
    generator = [
        (0x01, 0x98f2bc8e61),
        (0x02, 0x79b76d99e2),
        (0x04, 0xf33e5fb3c4),
        (0x08, 0xae2eabe2a8),
        (0x10, 0x1e4f43e470)]
    for value in values:
        top = chk >> 35
        chk = ((chk & 0x07ffffffff) << 5) ^ value
        for i in generator:
            if top & i[0] != 0:
                chk ^= i[1]
    return chk ^ 1


def prefix_expand(prefix):
    return [ord(x) & 0x1f for x in prefix] + [0]


def calculate_checksum(prefix, payload):
    poly = polymod(prefix_expand(prefix) + payload + [0, 0, 0, 0, 0, 0, 0, 0])
    out = list()
    for i in range(8):
        out.append((poly >> 5 * (7 - i)) & 0x1f)
    return out


def verify_checksum(prefix, payload):
    return polymod(prefix_expand(prefix) + payload) == 0


def b32decode(inputs):
    out = list()
    for letter in inputs:
        out.append(CHARSET.find(letter))
    return out


def b32encode(inputs):
    out = ''
    for char_code in inputs:
        out += CHARSET[char_code]
    return out


def convertbits(data, frombits, tobits, pad=True):
    acc = 0
    bits = 0
    ret = []
    maxv = (1 << tobits) - 1
    max_acc = (1 << (frombits + tobits - 1)) - 1
    for value in data:
        if value < 0 or (value >> frombits):
            return None
        acc = ((acc << frombits) | value) & max_acc
        bits += frombits
        while bits >= tobits:
            bits -= tobits
            ret.append((acc >> bits) & maxv)
    if pad:
        if bits:
            ret.append((acc << (tobits - bits)) & maxv)
    elif bits >= frombits or ((acc << (tobits - bits)) & maxv):
        return None
    return ret
