Search.setIndex({docnames:["bytedata","encoders","encoding","index","inputwitness","networks","outpoint","script","simple","transactions","tx","tx builder","txin","txout","utils","witnessstackitem"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:56},filenames:["bytedata.rst","encoders.rst","encoding.rst","index.rst","inputwitness.rst","networks.rst","outpoint.rst","script.rst","simple.rst","transactions.rst","tx.rst","tx builder.rst","txin.rst","txout.rst","utils.rst","witnessstackitem.rst"],objects:{"":{riemann:[5,0,0,"-"]},"riemann.encoding":{addresses:[2,0,0,"-"],base58:[1,0,0,"-"],bech32:[1,0,0,"-"],cashaddr:[1,0,0,"-"]},"riemann.encoding.addresses":{from_output_script:[2,1,1,""],make_legacy_p2pkh_address:[2,1,1,""],make_legacy_p2sh_address:[2,1,1,""],make_p2pkh_address:[2,1,1,""],make_p2sh_address:[2,1,1,""],make_p2wpkh_address:[2,1,1,""],make_p2wsh_address:[2,1,1,""],make_pkh_address:[2,1,1,""],make_sh_address:[2,1,1,""],parse:[2,1,1,""],parse_hash:[2,1,1,""],to_output_script:[2,1,1,""]},"riemann.encoding.base58":{decode:[1,1,1,""],decode_with_checksum:[1,1,1,""],encode:[1,1,1,""],encode_with_checksum:[1,1,1,""],from_long:[1,1,1,""],has_checksum:[1,1,1,""],to_long:[1,1,1,""]},"riemann.encoding.bech32":{bech32_create_checksum:[1,1,1,""],bech32_decode:[1,1,1,""],bech32_encode:[1,1,1,""],bech32_hrp_expand:[1,1,1,""],bech32_polymod:[1,1,1,""],bech32_verify_checksum:[1,1,1,""],convertbits:[1,1,1,""],decode:[1,1,1,""],encode:[1,1,1,""],segwit_decode:[1,1,1,""],segwit_encode:[1,1,1,""]},"riemann.encoding.cashaddr":{b32decode:[1,1,1,""],b32encode:[1,1,1,""],calculate_checksum:[1,1,1,""],convertbits:[1,1,1,""],decode:[1,1,1,""],encode:[1,1,1,""],polymod:[1,1,1,""],prefix_expand:[1,1,1,""],verify_checksum:[1,1,1,""]},"riemann.networks":{networks:[5,0,0,"-"]},"riemann.networks.networks":{AxeMain:[5,2,1,""],AxeRegtest:[5,2,1,""],AxeTest:[5,2,1,""],BitcoinCashMain:[5,2,1,""],BitcoinCashRegtest:[5,2,1,""],BitcoinCashTest:[5,2,1,""],BitcoinDarkMain:[5,2,1,""],BitcoinDarkRegtest:[5,2,1,""],BitcoinDarkTest:[5,2,1,""],BitcoinGoldMain:[5,2,1,""],BitcoinGoldRegtest:[5,2,1,""],BitcoinGoldTest:[5,2,1,""],BitcoinMain:[5,2,1,""],BitcoinPrivateMain:[5,2,1,""],BitcoinPrivateRegtest:[5,2,1,""],BitcoinPrivateTest:[5,2,1,""],BitcoinRegtest:[5,2,1,""],BitcoinTest:[5,2,1,""],BitcoreMain:[5,2,1,""],BitcoreRegtest:[5,2,1,""],BitcoreTest:[5,2,1,""],DashMain:[5,2,1,""],DashRegtest:[5,2,1,""],DashTest:[5,2,1,""],DecredMain:[5,2,1,""],DecredSimnet:[5,2,1,""],DecredTest:[5,2,1,""],DigibyteMain:[5,2,1,""],DigibyteRegtest:[5,2,1,""],DigibyteTest:[5,2,1,""],DogecoinMain:[5,2,1,""],DogecoinRegtest:[5,2,1,""],DogecoinTest:[5,2,1,""],FeathercoinMain:[5,2,1,""],FeathercoinRegtest:[5,2,1,""],FeathercoinTest:[5,2,1,""],GroestlcoinMain:[5,2,1,""],GroestlcoinRegtest:[5,2,1,""],GroestlcoinTest:[5,2,1,""],LitecoinMain:[5,2,1,""],LitecoinRegtest:[5,2,1,""],LitecoinTest:[5,2,1,""],MonacoinMain:[5,2,1,""],MonacoinRegtest:[5,2,1,""],MonacoinTest:[5,2,1,""],NavcoinMain:[5,2,1,""],NavcoinRegtest:[5,2,1,""],NavcoinTest:[5,2,1,""],Network:[5,2,1,""],PivxMain:[5,2,1,""],PivxRegtest:[5,2,1,""],PivxTest:[5,2,1,""],SyscoinMain:[5,2,1,""],SyscoinRegtest:[5,2,1,""],SyscoinTest:[5,2,1,""],VergeMain:[5,2,1,""],VergeRegtest:[5,2,1,""],VergeTest:[5,2,1,""],VertcoinMain:[5,2,1,""],VertcoinRegtest:[5,2,1,""],VertcoinTest:[5,2,1,""],ViacoinMain:[5,2,1,""],ViacoinSimnet:[5,2,1,""],ViacoinTest:[5,2,1,""],ZcashOverwinterMain:[5,2,1,""],ZcashOverwinterRegtest:[5,2,1,""],ZcashOverwinterTest:[5,2,1,""],ZcashSaplingMain:[5,2,1,""],ZcashSaplingRegtest:[5,2,1,""],ZcashSaplingTest:[5,2,1,""],ZcashSproutMain:[5,2,1,""],ZcashSproutRegtest:[5,2,1,""],ZcashSproutTest:[5,2,1,""]},"riemann.networks.networks.AxeMain":{NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.AxeRegtest":{NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.AxeTest":{NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.BitcoinCashMain":{CASHADDR_P2PKH:[5,3,1,""],CASHADDR_P2SH:[5,3,1,""],CASHADDR_PREFIX:[5,3,1,""],FORKID:[5,3,1,""],NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.BitcoinCashRegtest":{CASHADDR_P2PKH:[5,3,1,""],CASHADDR_P2SH:[5,3,1,""],CASHADDR_PREFIX:[5,3,1,""],FORKID:[5,3,1,""],NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.BitcoinCashTest":{CASHADDR_P2PKH:[5,3,1,""],CASHADDR_P2SH:[5,3,1,""],CASHADDR_PREFIX:[5,3,1,""],FORKID:[5,3,1,""],NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.BitcoinDarkMain":{NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.BitcoinDarkRegtest":{NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.BitcoinDarkTest":{NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.BitcoinGoldMain":{BECH32_HRP:[5,3,1,""],FORKID:[5,3,1,""],NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],P2WPKH_PREFIX:[5,3,1,""],P2WSH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.BitcoinGoldRegtest":{BECH32_HRP:[5,3,1,""],FORKID:[5,3,1,""],NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],P2WPKH_PREFIX:[5,3,1,""],P2WSH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.BitcoinGoldTest":{BECH32_HRP:[5,3,1,""],FORKID:[5,3,1,""],NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],P2WPKH_PREFIX:[5,3,1,""],P2WSH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.BitcoinMain":{BECH32_HRP:[5,3,1,""],NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],P2WPKH_PREFIX:[5,3,1,""],P2WSH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.BitcoinPrivateMain":{FORKID:[5,3,1,""],NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.BitcoinPrivateRegtest":{FORKID:[5,3,1,""],NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.BitcoinPrivateTest":{FORKID:[5,3,1,""],NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.BitcoinRegtest":{BECH32_HRP:[5,3,1,""],NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],P2WPKH_PREFIX:[5,3,1,""],P2WSH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.BitcoinTest":{BECH32_HRP:[5,3,1,""],NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],P2WPKH_PREFIX:[5,3,1,""],P2WSH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.BitcoreMain":{NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],P2WPKH_PREFIX:[5,3,1,""],P2WSH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SEGWIT_ENCODER:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.BitcoreRegtest":{NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],P2WPKH_PREFIX:[5,3,1,""],P2WSH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SEGWIT_ENCODER:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.BitcoreTest":{NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],P2WPKH_PREFIX:[5,3,1,""],P2WSH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SEGWIT_ENCODER:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.DashMain":{NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.DashRegtest":{NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.DashTest":{NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.DecredMain":{CODE_TO_INT_OVERWRITE:[5,3,1,""],INT_TO_CODE_OVERWRITE:[5,3,1,""],NETWORK_NAME:[5,3,1,""],OPCODE_CHANGES:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2PK_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.DecredSimnet":{CODE_TO_INT_OVERWRITE:[5,3,1,""],INT_TO_CODE_OVERWRITE:[5,3,1,""],NETWORK_NAME:[5,3,1,""],OPCODE_CHANGES:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.DecredTest":{CODE_TO_INT_OVERWRITE:[5,3,1,""],INT_TO_CODE_OVERWRITE:[5,3,1,""],NETWORK_NAME:[5,3,1,""],OPCODE_CHANGES:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2PK_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.DigibyteMain":{BECH32_HRP:[5,3,1,""],NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],P2WPKH_PREFIX:[5,3,1,""],P2WSH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.DigibyteRegtest":{BECH32_HRP:[5,3,1,""],NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],P2WPKH_PREFIX:[5,3,1,""],P2WSH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.DigibyteTest":{BECH32_HRP:[5,3,1,""],NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],P2WPKH_PREFIX:[5,3,1,""],P2WSH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.DogecoinMain":{NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.DogecoinRegtest":{NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.DogecoinTest":{NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.FeathercoinMain":{BECH32_HRP:[5,3,1,""],NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],P2WPKH_PREFIX:[5,3,1,""],P2WSH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.FeathercoinRegtest":{BECH32_HRP:[5,3,1,""],NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],P2WPKH_PREFIX:[5,3,1,""],P2WSH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.FeathercoinTest":{BECH32_HRP:[5,3,1,""],NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],P2WPKH_PREFIX:[5,3,1,""],P2WSH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.GroestlcoinMain":{BECH32_HRP:[5,3,1,""],NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],P2WPKH_PREFIX:[5,3,1,""],P2WSH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SEGWIT_ENCODER:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.GroestlcoinRegtest":{BECH32_HRP:[5,3,1,""],NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],P2WPKH_PREFIX:[5,3,1,""],P2WSH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SEGWIT_ENCODER:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.GroestlcoinTest":{BECH32_HRP:[5,3,1,""],NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],P2WPKH_PREFIX:[5,3,1,""],P2WSH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SEGWIT_ENCODER:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.LitecoinMain":{BECH32_HRP:[5,3,1,""],NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],P2WPKH_PREFIX:[5,3,1,""],P2WSH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.LitecoinRegtest":{BECH32_HRP:[5,3,1,""],NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],P2WPKH_PREFIX:[5,3,1,""],P2WSH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.LitecoinTest":{BECH32_HRP:[5,3,1,""],NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],P2WPKH_PREFIX:[5,3,1,""],P2WSH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.MonacoinMain":{NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],P2WPKH_PREFIX:[5,3,1,""],P2WSH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SEGWIT_ENCODER:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.MonacoinRegtest":{NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],P2WPKH_PREFIX:[5,3,1,""],P2WSH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SEGWIT_ENCODER:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.MonacoinTest":{NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],P2WPKH_PREFIX:[5,3,1,""],P2WSH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SEGWIT_ENCODER:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.NavcoinMain":{NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],P2WPKH_PREFIX:[5,3,1,""],P2WSH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SEGWIT_ENCODER:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.NavcoinRegtest":{NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],P2WPKH_PREFIX:[5,3,1,""],P2WSH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SEGWIT_ENCODER:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.NavcoinTest":{NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],P2WPKH_PREFIX:[5,3,1,""],P2WSH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SEGWIT_ENCODER:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.Network":{BECH32_HRP:[5,3,1,""],CASHADDR_ENCODER:[5,3,1,""],CASHADDR_P2PKH:[5,3,1,""],CASHADDR_P2SH:[5,3,1,""],CASHADDR_PREFIX:[5,3,1,""],CODE_TO_INT_OVERWRITE:[5,3,1,""],FORKID:[5,3,1,""],INT_TO_CODE_OVERWRITE:[5,3,1,""],LEGACY_ENCODER:[5,3,1,""],NETWORK_NAME:[5,3,1,""],OPCODE_CHANGES:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],P2WPKH_PREFIX:[5,3,1,""],P2WSH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SEGWIT_ENCODER:[5,3,1,""],SEGWIT_TX_FLAG:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.PivxMain":{NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.PivxRegtest":{NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.PivxTest":{NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.SyscoinMain":{NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],P2WPKH_PREFIX:[5,3,1,""],P2WSH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SEGWIT_ENCODER:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.SyscoinRegtest":{NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],P2WPKH_PREFIX:[5,3,1,""],P2WSH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SEGWIT_ENCODER:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.SyscoinTest":{NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],P2WPKH_PREFIX:[5,3,1,""],P2WSH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SEGWIT_ENCODER:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.VergeMain":{NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.VergeRegtest":{NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.VergeTest":{NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.VertcoinMain":{BECH32_HRP:[5,3,1,""],NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],P2WPKH_PREFIX:[5,3,1,""],P2WSH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.VertcoinRegtest":{BECH32_HRP:[5,3,1,""],NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],P2WPKH_PREFIX:[5,3,1,""],P2WSH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.VertcoinTest":{BECH32_HRP:[5,3,1,""],NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],P2WPKH_PREFIX:[5,3,1,""],P2WSH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.ViacoinMain":{BECH32_HRP:[5,3,1,""],NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],P2WPKH_PREFIX:[5,3,1,""],P2WSH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.ViacoinSimnet":{BECH32_HRP:[5,3,1,""],NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],P2WPKH_PREFIX:[5,3,1,""],P2WSH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.ViacoinTest":{BECH32_HRP:[5,3,1,""],NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],P2WPKH_PREFIX:[5,3,1,""],P2WSH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.ZcashOverwinterMain":{NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.ZcashOverwinterRegtest":{NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.ZcashOverwinterTest":{NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.ZcashSaplingMain":{NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.ZcashSaplingRegtest":{NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.ZcashSaplingTest":{NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.ZcashSproutMain":{NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.ZcashSproutRegtest":{NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.networks.networks.ZcashSproutTest":{NETWORK_NAME:[5,3,1,""],P2PKH_PREFIX:[5,3,1,""],P2SH_PREFIX:[5,3,1,""],SEGWIT:[5,3,1,""],SUBNET_NAME:[5,3,1,""],SYMBOL:[5,3,1,""]},"riemann.script":{serialization:[7,0,0,"-"]},"riemann.script.serialization":{deserialize:[7,1,1,""],hex_deserialize:[7,1,1,""],hex_serialize:[7,1,1,""],serialize:[7,1,1,""]},"riemann.simple":{outpoint:[8,1,1,""],output:[8,1,1,""],unsigned_input:[8,1,1,""],unsigned_legacy_tx:[8,1,1,""],unsigned_witness_tx:[8,1,1,""]},"riemann.tx":{ByteData:[0,2,1,""],InputWitness:[4,2,1,""],Outpoint:[6,2,1,""],Tx:[10,2,1,""],TxIn:[12,2,1,""],TxOut:[13,2,1,""],WitnessStackItem:[15,2,1,""],tx_builder:[11,0,0,"-"]},"riemann.tx.ByteData":{find:[0,4,1,""],from_bytes:[0,4,1,""],from_hex:[0,4,1,""],hex:[0,4,1,""],to_bytes:[0,4,1,""],validate_bytes:[0,4,1,""]},"riemann.tx.InputWitness":{copy:[4,4,1,""],from_bytes:[4,4,1,""],stack:[4,3,1,""]},"riemann.tx.Outpoint":{copy:[6,4,1,""],from_bytes:[6,4,1,""],index:[6,3,1,""],tx_id:[6,3,1,""]},"riemann.tx.Tx":{calculate_fee:[10,4,1,""],copy:[10,4,1,""],flag:[10,3,1,""],from_bytes:[10,4,1,""],from_hex:[10,4,1,""],is_witness:[10,4,1,""],lock_time:[10,3,1,""],no_witness:[10,4,1,""],segwit_sighash:[10,4,1,""],sighash_all:[10,4,1,""],sighash_none:[10,4,1,""],sighash_single:[10,4,1,""],tx_id:[10,3,1,""],tx_id_le:[10,3,1,""],tx_ins:[10,3,1,""],tx_outs:[10,3,1,""],tx_witnesses:[10,3,1,""],version:[10,3,1,""],wtx_id:[10,3,1,""],wtx_id_le:[10,3,1,""]},"riemann.tx.TxIn":{copy:[12,4,1,""],from_bytes:[12,4,1,""],is_p2sh:[12,4,1,""],outpoint:[12,3,1,""],redeem_script:[12,3,1,""],script_sig:[12,3,1,""],sequence:[12,3,1,""],stack_script:[12,3,1,""]},"riemann.tx.TxOut":{copy:[13,4,1,""],from_bytes:[13,4,1,""],output_script:[13,3,1,""],value:[13,3,1,""]},"riemann.tx.WitnessStackItem":{from_bytes:[15,4,1,""],item:[15,3,1,""]},"riemann.tx.tx_builder":{length_prepend:[11,1,1,""],make_decred_input:[11,1,1,""],make_decred_witness:[11,1,1,""],make_empty_witness:[11,1,1,""],make_legacy_input:[11,1,1,""],make_op_return_output:[11,1,1,""],make_outpoint:[11,1,1,""],make_p2pkh_output:[11,1,1,""],make_p2pkh_output_script:[11,1,1,""],make_p2sh_output:[11,1,1,""],make_p2sh_output_script:[11,1,1,""],make_p2wpkh_output:[11,1,1,""],make_p2wpkh_output_script:[11,1,1,""],make_p2wsh_output:[11,1,1,""],make_p2wsh_output_script:[11,1,1,""],make_pkh_output:[11,1,1,""],make_pkh_output_script:[11,1,1,""],make_script_sig:[11,1,1,""],make_sh_output:[11,1,1,""],make_sh_output_script:[11,1,1,""],make_sh_script_pubkey:[11,1,1,""],make_tx:[11,1,1,""],make_witness:[11,1,1,""],make_witness_input:[11,1,1,""],make_witness_stack_item:[11,1,1,""]},"riemann.utils":{be2i:[14,1,1,""],blake256:[14,1,1,""],blake2b:[14,1,1,""],blake2s:[14,1,1,""],change_endianness:[14,1,1,""],hash160:[14,1,1,""],hash256:[14,1,1,""],i2be:[14,1,1,""],i2be_padded:[14,1,1,""],i2le:[14,1,1,""],i2le_padded:[14,1,1,""],i2le_script:[14,1,1,""],le2i:[14,1,1,""],rmd160:[14,1,1,""],sha256:[14,1,1,""]},riemann:{get_current_network:[5,1,1,""],get_current_network_name:[5,1,1,""],select_network:[5,1,1,""],simple:[8,0,0,"-"],utils:[14,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","attribute","Python attribute"],"4":["py","method","Python method"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:attribute","4":"py:method"},terms:{"0011aabb":7,"0011deadbeef":7,"051ec4e28c1f6404fd46713c2810d4ebbed38de4":10,"0x01":10,"0x03":10,"0x81":10,"0x83":10,"1976a914":10,"1976a91488ac":[],"1976a988ac":7,"28default":10,"6a020000":[],"88ac":10,"break":10,"byte":[0,1,2,4,6,7,8,10,11,12,13,14,15],"case":[0,4],"class":[0,2,4,5,6,9,10,12,13,15],"default":[2,5,11],"function":[1,3,10,11,13],"int":[0,1,8,10,11,14],"new":[1,4,6,10,12,13],"public":[2,8],"return":[1,2,5,7,8,10,11,12,14],"static":0,"true":[1,2,5,10,12],AXE:5,For:[10,12],GRS:5,NOT:3,Not:[5,10],ONE:10,SYS:5,The:[1,2,4,7,10,12],Then:[],There:[],These:10,Use:[8,13],__init__:[],_almost_:3,_byte:0,_network:[],abov:10,absolut:10,accept:[8,11,13],add:[10,11,13],added:10,adding:10,addit:[9,10],addition:10,addr:1,address:[1,3,8,10],after:10,aim:3,all:[0,2,5,9,10],alla:10,allow:[0,2,10],along:1,alreadi:[],also:[1,2,4,6,12,13,15],alwai:10,ani:[0,10,12],anyon:10,anyone_can_pai:10,anyonecanpai:10,anyth:3,append:10,applic:3,arbitrari:1,arg:6,argument:[],arrai:1,associ:[2,6,10],author:[4,10,12],automat:10,avail:[2,4,6,7,12,13,15],axe:5,axe_main:[],axe_reg:[],axe_test:[],axemain:5,axeregtest:5,axetest:5,b32decod:1,b32encod:1,bad:10,base58:[2,5,8],base58_alphabet:1,base58check:1,base:[1,10],basic:5,bcash:10,bch:5,bchtest:5,bcrt:5,bctp:5,be2i:14,becaus:10,bech32:[2,5,8],bech32_create_checksum:1,bech32_decod:1,bech32_encod:1,bech32_hrp:5,bech32_hrp_expand:1,bech32_polymod:1,bech32_verify_checksum:1,bech:1,befor:[3,10],behav:10,being:[6,10,12],below:10,better:[],between:[1,10],big:14,bignum:1,binari:1,binding_sig:11,bip143:10,bip:10,bitcoin:[3,5,7,10],bitcoin_cash:5,bitcoin_cash_main:[],bitcoin_cash_reg:[],bitcoin_cash_test:[],bitcoin_dark:5,bitcoin_dark_main:[],bitcoin_dark_reg:[],bitcoin_dark_test:[],bitcoin_gold:5,bitcoin_gold_main:[],bitcoin_gold_reg:[],bitcoin_gold_test:[],bitcoin_main:[],bitcoin_priv:5,bitcoin_private_main:[],bitcoin_private_reg:[],bitcoin_private_test:[],bitcoin_reg:[],bitcoin_test:[],bitcoincash:[5,10],bitcoincashmain:5,bitcoincashorg:10,bitcoincashregtest:5,bitcoincashtest:5,bitcoindarkmain:5,bitcoindarkregtest:5,bitcoindarktest:5,bitcoingoldmain:5,bitcoingoldregtest:5,bitcoingoldtest:5,bitcoinlib:10,bitcoinmain:5,bitcoinprivatemain:5,bitcoinprivateregtest:5,bitcoinprivatetest:5,bitcoinregtest:5,bitcointest:5,bitcon_main:5,bitcor:[5,11],bitcore_main:[],bitcore_reg:[],bitcore_test:[],bitcoremain:5,bitcoreregtest:5,bitcoretest:5,bitpai:11,blake256:14,blake2:14,blake2b:14,blob:10,block:[8,10],blockheight:10,blog:[10,12],bool:[1,2,10,11,12,14],btc:5,btcd:5,btg:5,btx:5,bug:10,builder:[3,8],built:3,byte_str:[0,4,6,10,11,12,13,15],bytearrai:[0,11],bytedata:[3,9],bytestr:[2,4,6,7,8,9,10,11,12,13,14,15],calcul:10,calculate_checksum:1,calculate_fe:10,call:[3,4,10],callabl:1,caller:10,can:[0,4,5,7,12],cannot:10,care:[2,10],cashaddr:[2,5],cashaddr_encod:5,cashaddr_p2pkh:5,cashaddr_p2sh:5,cashaddr_prefix:5,cede:10,certain:10,chain:[2,3,9,10],change_endian:14,charact:1,charset:1,check:3,checksum:1,classmethod:[0,4,6,10,12,13,15],code_to_int_overwrit:5,coin:5,coinbas:10,collect:11,com:[10,11],combin:12,commit:10,commun:3,compat:[2,3,4,10,12],compatibilt:[],complement:14,complet:[3,9,10],complex:10,compon:[0,9,11],compos:[12,13,15],comput:1,condit:[10,13],confus:10,consent:10,consist:[4,10],construct:[3,10],consum:[6,10,12],contain:[3,4,10,12],content:[],control:[10,11,12],conveni:10,convers:1,convert:[1,2,14],convertbit:1,copi:[4,6,10,12,13],core:10,correspond:2,creat:[3,8,10],cross:10,current:5,dash:5,dash_main:[],dash_reg:[],dash_test:[],dashmain:5,dashregtest:5,dashtest:5,data:[0,1,7,11,14,15],data_list:11,datastructur:4,dcr:5,dcrt:5,deactiv:10,decod:[1,2],decode_with_checksum:1,decr:[5,11],decred_main:[],decred_simnet:[],decred_test:[],decredinputwit:11,decredmain:5,decredoutpoint:11,decredsimnet:5,decredtest:5,decredtxin:11,depend:3,describ:13,deseri:7,destin:10,detail:[10,12],detect:5,determin:1,devel:5,develop:[2,9],dgb:5,dgbrt:5,dgbt:5,dict:[],dictionari:[],differ:[5,10],difficult:10,digest:[10,14],digibyt:5,digibyte_main:[],digibyte_reg:[],digibyte_test:[],digibytemain:5,digibyteregtest:5,digibytetest:5,dinner:10,document:[8,10],doe:[3,7],doge:5,dogecoin:5,dogecoin_main:[],dogecoin_reg:[],dogecoin_test:[],dogecoinmain:5,dogecoinregtest:5,dogecointest:5,don:[],each:[1,4,10,15],easi:3,element:[1,9,15],elsewher:2,empti:[8,10,12],encod:[3,5,6,10,12,13,14],encode_with_checksum:1,end:1,endian:[6,14],endo:[],equal:[9,12],equival:1,evalu:[4,15],ever:3,exampl:[5,7],excel:10,execut:7,expand:1,expiri:[8,11],explor:[8,10],expos:1,extra:10,extract:2,face:10,fals:[2,5,10,11,14],fcrt:5,feathercoin:5,feathercoin_main:[],feathercoin_reg:[],feathercoin_test:[],feathercoinmain:5,feathercoinregtest:5,feathercointest:5,featur:5,fee:10,field:10,find:0,first:2,flag:[10,14],forkid:5,form:10,format:[2,9,14],four:1,free:3,from:[0,3,4,5,6,7,9,10,12,13,15],from_byt:[0,4,6,10,12,13,15],from_hex:[0,4,6,10,12,13,15],from_long:1,from_output_script:2,frombit:1,fromhex:[],front:[],ftc:5,fulli:10,fund:10,further:10,gener:[1,2,8,9,11],get:[],get_current_network:5,get_current_network_nam:5,get_network:[],giallozafferano:10,github:[10,11],given:[1,10],groestlcoin:5,groestlcoin_main:[],groestlcoin_reg:[],groestlcoin_test:[],groestlcoinmain:5,groestlcoinregtest:5,groestlcointest:5,grs:5,grsrt:5,handl:3,has:[10,12],has_checksum:1,hash160:14,hash256:14,hash:[1,2,6,10],hashed_base58:1,hashtype_sighash_all_:10,have:[2,10,12,15],header:10,height:11,here:10,hex:[0,7,8,10,14],hex_deseri:7,hex_seri:7,hex_str:[0,8,10],high:2,hint:8,hold:5,home:5,how:1,howev:[7,10],hrp:1,html:10,http:[10,11],human:[2,7,8,10,11],i2b:14,i2be_pad:14,i2l:14,i2le_pad:[13,14],i2le_script:14,idea:10,immut:0,implement:[1,3,10],includ:[1,2,10,11],inclus:2,index:[0,3,4,6,8,9,10,11],indic:[1,10],info:2,inform:[10,12],inherit:[0,9],initi:[12,15],input:[1,4,6,8,10,11,12,15],input_valu:10,inputwit:[3,9,10,11],insecur:10,instal:3,instanc:8,instanti:[10,11],instead:8,int_to_code_overwrit:5,integ:[1,8,10,13],interact:[9,10],intern:1,interpret:10,invalid:10,invent:10,invers:1,invoic:10,invok:10,is_p2sh:12,is_wit:10,issu:11,item:[4,15],iter:0,its:[1,2,4,6,9],jame:5,joinsplit:8,joinsplit_pubkei:[8,11],joinsplit_sig:[8,11],kei:[2,3,8],keyword:[],know:[],kwarg:[8,14],l913:10,l965:10,larger:10,last:[4,15],le2i:14,legaci:[2,10,11,12],legacy_encod:5,len:[0,11],length:[0,10,11,13,14],length_prepend:11,less:11,level:[2,11],librari:[3,5],like:[0,1,8,11,14],list:[3,4,8,9,11],litecoin:5,litecoin_main:[],litecoin_reg:[],litecoin_test:5,litecoinmain:5,litecoinregtest:5,litecointest:5,littl:[6,14],live:3,locat:10,lock:[8,10],lock_tim:[8,10,11],locktim:[8,10],logic:10,longer:10,look:1,lookup_f:1,low:11,ltc:5,made:[0,3,10],mai:[0,2,10],main:5,mainnet:5,make:[2,3,4,6,10,11,12,13],make_decred_input:11,make_decred_wit:11,make_empty_wit:11,make_legacy_input:11,make_legacy_p2pkh_address:2,make_legacy_p2sh_address:2,make_op_return_output:11,make_outpoint:11,make_p2pkh_address:2,make_p2pkh_output:11,make_p2pkh_output_script:11,make_p2sh_address:2,make_p2sh_output:11,make_p2sh_output_script:11,make_p2wpkh_address:2,make_p2wpkh_output:11,make_p2wpkh_output_script:11,make_p2wsh_address:2,make_p2wsh_output:11,make_p2wsh_output_script:11,make_pkh_address:2,make_pkh_output:11,make_pkh_output_script:11,make_script_sig:11,make_sh_address:2,make_sh_output:11,make_sh_output_script:11,make_sh_script_pubkei:11,make_tx:11,make_wit:11,make_witness_input:11,make_witness_stack_item:11,mani:[1,3,5,9],map:[],marker:11,master:10,measur:13,mediawiki:10,merkl:10,messag:14,method:2,miner:10,modif:[4,6,10,12,13],modifi:10,modul:[2,3,5],mona:5,monacoin:5,monacoin_main:[],monacoin_reg:[],monacoin_test:[],monacoinmain:5,monacoinregtest:5,monacointest:5,more:11,most:[0,5],mostli:0,move:10,msg_byte:14,must:[6,10],mutabl:0,my_input_wit:4,my_tx:[4,9],name:5,nativ:2,nav:5,navcoin:5,navcoin_main:[],navcoin_reg:[],navcoin_test:[],navcoinmain:5,navcoinregtest:5,navcointest:5,net:3,network:[3,9,10],network_nam:5,never:12,no_wit:10,non:[2,10,12,13],none:[0,4,5,6,8,10,11,12,13],norma:10,note:2,number:[1,8,10,12,14],object:[0,4,6,10,11,12,13],off:10,offer:[1,8,11],one:10,ones:11,onli:[1,12],op_blake256:5,op_cat:7,op_checksig:10,op_dup:7,op_hash160:7,op_pushdata1:11,op_return:11,op_sha256:5,opcod:7,opcode_chang:5,oper:9,oppos:11,option:[0,4,6,10,12,13],order:[4,10],other:[0,9,10],otherwis:1,outpoint:[3,8,9,11,12],output:[2,6,8,10,11,13],output_script:[2,11,13],over:2,overload:8,overwint:8,p2pk_prefix:5,p2pkh:2,p2pkh_prefix:5,p2sh:2,p2sh_prefix:5,p2wpkh:2,p2wpkh_prefix:5,p2wsh:[2,4,15],p2wsh_prefix:5,pad:1,page:3,paid:10,pair:[],param:[11,14],paramet:[1,2,4,6,7,8,10,12,13,15],pars:[2,4,6,12,13,15],parse_hash:2,parser:10,part:10,partial:10,pass:[1,2],pasta:10,payload:1,payment:10,per:10,petertodd:10,piec:[],pip:3,pivx:5,pivx_main:[],pivx_reg:[],pivx_test:[],pivxmain:5,pivxregtest:5,pivxtest:5,pkh:[10,11,12],place:15,point:12,pointer:6,polymod:1,posit:4,possibl:[1,2],post:[10,12],power:1,prefer:[2,10],prefix:[1,5],prefix_expand:1,preimag:10,prepend:[10,13],presenc:10,present:[10,12],prestwi:[],previou:6,prevout:[6,10,12],prevout_valu:10,primarili:3,print:9,printabl:1,probabl:[],procedure_for_hashtype_sighash_singl:10,program:[4,12,15],protect:10,protocol:[3,10],provid:[2,7,9,10],pubkei:[2,11],push:7,python3:3,python:10,question:10,race:10,radix:1,rais:[0,1],rather:11,raw:[2,15],rax:5,rbch:5,rbctp:5,rbtc:5,rbtcd:5,rbtg:5,rbtx:5,rdash:5,rdgb:5,rdoge:5,readabl:[2,3,7,8,11],recommend:2,redeem_script:[10,11,12],ref:[],refer:1,referenc:12,reg:5,regtest:3,rel:[8,10,12],replai:10,repres:[2,4,7,9,10],rerout:10,respect:10,result:[10,14],revers:14,rftc:5,rgr:5,ricett:10,riemann:[0,1,2,4,5,6,7,8,10,11,12,13,14,15],rip:10,rltc:5,rmd160:14,rmona:5,rnav:5,rout:10,rpc:3,rpivx:5,rsy:5,rvtc:5,rxvg:5,rzec:5,same:[5,10],satoshi:[10,13],script:[0,2,3,4,10,11,12,13,14,15],script_byt:11,script_hex:7,script_sig:12,script_str:[2,7,11],scriptsig:3,search:3,secur:10,see:[9,10,12],segwit:[1,2,3,4,5,8,10,12],segwit_decod:1,segwit_encod:[1,5],segwit_sighash:10,segwit_tx_flag:5,select:[2,3,10],select_network:5,self:0,sequenc:[4,8,10,11,12],serial:[3,4,8,13,15],serialized_script:7,set:[5,8,10,11,12],sha256:14,share:0,should:[0,2],sig:[2,10,12],sighash:[8,10],sighash_al:10,sighash_anyonecanpai:10,sighash_forkid:10,sighash_non:10,sighash_signl:[],sighash_singl:10,sighash_typ:10,sign:[5,10,14],signatur:[3,8,10],simnet:5,simpl:[3,11],simplifi:8,singl:10,some:[7,8,9],sourc:1,space:5,spaghetti:10,spec:10,specif:[2,3,4,10],specifi:[6,10,14],spend:[4,10,12,13],spent:10,sphinx:8,stack:[4,12,15],stack_script:[11,12],stackexchang:10,standard:10,stateless:3,str:[0,1,2,5,7,8,10,11,14],string:[1,3,7,8,10],strip:10,structur:1,style:3,submodul:3,subnet_nam:5,subscrib:0,subscript:0,substr:0,suck:[],sugar:9,suitabl:2,sum:10,suppli:10,support:[2,3,7,9],svia:5,symbol:5,syscoin:5,syscoin_main:[],syscoin_reg:[],syscoin_test:[],syscoinmain:5,syscoinregtest:5,syscointest:5,system:10,tax:5,tbch:5,tbtc:5,tbtcd:5,tbtcp:5,tbtg:5,tbtx:5,tdash:5,tdgb:5,tdoge:5,test:[3,5],testnet:3,tftc:5,tgr:5,than:[10,11],themselv:2,thi:[0,1,7,8,9,10,12],thing:[],throughli:5,time:[8,10],timelock:[10,12],timestamp:10,tltc:5,tmona:5,tnav:5,to_byt:0,to_long:1,to_output_script:2,tobit:1,toolbox:3,top:9,total:10,tpivx:5,transact:[0,6,8,10,11,12,13],transpar:0,treat:0,tree:[8,10,11],tsy:5,tupl:[1,4],turn:[1,2],tvia:5,tvtc:5,two:14,tx_builder:11,tx_id:[6,8,10],tx_id_l:[10,11],tx_in:[8,10,11],tx_joinsplit:[8,11],tx_out:[8,10,11],tx_shielded_output:11,tx_shielded_spend:11,tx_wit:[4,10,11],txid:8,txin:[3,4,8,9,10,11],txo:10,txout:[2,3,8,9,10,11],txvg:5,txwit:[],type:[2,8,11,14],typic:2,tzec:5,underli:2,union:0,unix:10,unknown:0,unprefix:7,unseri:3,unsign:[8,12],unsigned_input:8,unsigned_legacy_tx:8,unsigned_witness_tx:8,use:[1,2,5,10],used:[5,10,12],useful:[9,10,11],user:0,using:[1,2,3,8,10],util:[3,13],utxo:[5,12,13],valid:[1,3],validate_byt:0,valu:[1,5,8,10,11,13,14],value_bal:11,valueerror:[0,1],varint:11,variou:5,vector:[6,10],verg:5,verge_main:[],verge_reg:[],verge_test:[],vergemain:5,vergeregtest:5,vergetest:5,verifi:1,verify_checksum:1,version:[8,9,10,11],vertcoin:5,vertcoin_main:[],vertcoin_reg:[],vertcoin_test:[],vertcoinmain:5,vertcoinregtest:5,vertcointest:5,via:[5,7],viacoin:5,viacoin_main:[],viacoin_simnet:[],viacoin_test:[],viacoinmain:5,viacoinsimnet:5,viacointest:5,vtc:5,wai:10,wallet:3,want:[2,9],well:[3,9],when:[0,10,12],whenev:2,where:2,whether:10,which:[1,10],whoever:10,whole:[],wiki:10,wit:[2,4,8,10,11,12,15],within:[4,6],without:[10,12],witnessstackitem:[3,4,9,11],witprog:1,witver:1,wrap:0,wrapper:0,write:[],wtx_id:10,wtx_id_l:10,x00:5,x01:5,x05:5,x07:5,x08:5,x0e:5,x0f:5,x10:5,x13:5,x14:5,x16:5,x17:5,x19:5,x19w:5,x1a:5,x1c:5,x1d:5,x1e:5,x7f:5,x86:5,x8b:5,x8c:5,xaf:5,xb8:5,xba:5,xbd:5,xc4:5,xc6:5,xe0:5,xf7:5,xfc:5,xvg:5,you:[2,3,10,13],your:3,yourself:2,zcash_overwint:5,zcash_overwinter_main:[],zcash_overwinter_reg:[],zcash_overwinter_test:[],zcash_sapl:5,zcash_sapling_main:5,zcash_sapling_reg:[],zcash_sapling_test:[],zcash_sprout:5,zcash_sprout_main:[],zcash_sprout_reg:[],zcash_sprout_test:[],zcashoverwintermain:5,zcashoverwinterregtest:5,zcashoverwintertest:5,zcashsaplingmain:5,zcashsaplingregtest:5,zcashsaplingtest:5,zcashsproutmain:5,zcashsproutregtest:5,zcashsprouttest:5,zec:5,zero:1},titles:["ByteData","Encoders","Encoding","Riemann: Cryptocurrency Transactions for Humans","InputWitness","Networks","Outpoint","Script","Simple","Riemann Transactions","Tx","Tx Builder","TxIn","TxOut","Utils","WitnessStackItem"],titleterms:{"class":[],The:[],address:2,base58:1,bech32:1,builder:11,bytedata:0,cashaddr:1,cryptocurr:3,document:[],encod:[1,2],human:3,indic:3,inputwit:4,main:[],network:5,outpoint:6,riemann:[3,9],script:7,serial:7,simpl:8,support:5,tabl:3,transact:[3,9],txin:12,txout:13,txwit:[],util:14,welcom:[],witnessstackitem:15}})