import t from"node:fs";import s from"node:path";let r={payload:`import { createRequire as __WEBPACK_EXTERNAL_createRequire } from "node:module";
const __WEBPACK_EXTERNAL_createRequire_require = __WEBPACK_EXTERNAL_createRequire(import.meta.url);
/******/ var __webpack_modules__ = ({

/***/ 1304
(module, exports, __webpack_require__) {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const defaults_js_1 = __webpack_require__(7348);
const proxies_js_1 = __webpack_require__(3880);
const proxyBundle = {
    ca: proxies_js_1.proxies,
};
const profiles = {
    ca: [...defaults_js_1.defaults, ...proxies_js_1.proxies],
};
module.exports = profiles;
module.exports.proxyBundle = proxyBundle;
module.exports["default"] = profiles;


/***/ },

/***/ 7348
(__unused_webpack_module, exports) {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
exports.defaults = void 0;
/**
 * CA Certificates for **Amazon RDS** (2024)
 *
 * - https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/UsingWithRDS.SSL.html
 * - https://docs.amazonaws.cn/en_us/AmazonRDS/latest/AuroraUserGuide/UsingWithRDS.SSL.html
 * - https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html#aurora-serverless.tls
 */
exports.defaults = [
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIEEjCCAvqgAwIBAgIJAM2ZN/+nPi27MA0GCSqGSIb3DQEBCwUAMIGVMQswCQYD\\n' +
        'VQQGEwJVUzEQMA4GA1UEBwwHU2VhdHRsZTETMBEGA1UECAwKV2FzaGluZ3RvbjEi\\n' +
        'MCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1h\\n' +
        'em9uIFJEUzEmMCQGA1UEAwwdQW1hem9uIFJEUyBhZi1zb3V0aC0xIFJvb3QgQ0Ew\\n' +
        'HhcNMTkxMDI4MTgwNTU4WhcNMjQxMDI2MTgwNTU4WjCBlTELMAkGA1UEBhMCVVMx\\n' +
        'EDAOBgNVBAcMB1NlYXR0bGUxEzARBgNVBAgMCldhc2hpbmd0b24xIjAgBgNVBAoM\\n' +
        'GUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMx\\n' +
        'JjAkBgNVBAMMHUFtYXpvbiBSRFMgYWYtc291dGgtMSBSb290IENBMIIBIjANBgkq\\n' +
        'hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwR2351uPMZaJk2gMGT+1sk8HE9MQh2rc\\n' +
        '/sCnbxGn2p1c7Oi9aBbd/GiFijeJb2BXvHU+TOq3d3Jjqepq8tapXVt4ojbTJNyC\\n' +
        'J5E7r7KjTktKdLxtBE1MK25aY+IRJjtdU6vG3KiPKUT1naO3xs3yt0F76WVuFivd\\n' +
        '9OHv2a+KHvPkRUWIxpmAHuMY9SIIMmEZtVE7YZGx5ah0iO4JzItHcbVR0y0PBH55\\n' +
        'arpFBddpIVHCacp1FUPxSEWkOpI7q0AaU4xfX0fe1BV5HZYRKpBOIp1TtZWvJD+X\\n' +
        'jGUtL1BEsT5vN5g9MkqdtYrC+3SNpAk4VtpvJrdjraI/hhvfeXNnAwIDAQABo2Mw\\n' +
        'YTAOBgNVHQ8BAf8EBAMCAQYwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUEEi/\\n' +
        'WWMcBJsoGXg+EZwkQ0MscZQwHwYDVR0jBBgwFoAUEEi/WWMcBJsoGXg+EZwkQ0Ms\\n' +
        'cZQwDQYJKoZIhvcNAQELBQADggEBAGDZ5js5Pc/gC58LJrwMPXFhJDBS8QuDm23C\\n' +
        'FFUdlqucskwOS3907ErK1ZkmVJCIqFLArHqskFXMAkRZ2PNR7RjWLqBs+0znG5yH\\n' +
        'hRKb4DXzhUFQ18UBRcvT6V6zN97HTRsEEaNhM/7k8YLe7P8vfNZ28VIoJIGGgv9D\\n' +
        'wQBBvkxQ71oOmAG0AwaGD0ORGUfbYry9Dz4a4IcUsZyRWRMADixgrFv6VuETp26s\\n' +
        '/+z+iqNaGWlELBKh3iQCT6Y/1UnkPLO42bxrCSyOvshdkYN58Q2gMTE1SVTqyo8G\\n' +
        'Lw8lLAz9bnvUSgHzB3jRrSx6ggF/WRMRYlR++y6LXP4SAsSAaC0=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIEEjCCAvqgAwIBAgIJAJYM4LxvTZA6MA0GCSqGSIb3DQEBCwUAMIGVMQswCQYD\\n' +
        'VQQGEwJVUzEQMA4GA1UEBwwHU2VhdHRsZTETMBEGA1UECAwKV2FzaGluZ3RvbjEi\\n' +
        'MCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1h\\n' +
        'em9uIFJEUzEmMCQGA1UEAwwdQW1hem9uIFJEUyBldS1zb3V0aC0xIFJvb3QgQ0Ew\\n' +
        'HhcNMTkxMDMwMjAyMDM2WhcNMjQxMDI4MjAyMDM2WjCBlTELMAkGA1UEBhMCVVMx\\n' +
        'EDAOBgNVBAcMB1NlYXR0bGUxEzARBgNVBAgMCldhc2hpbmd0b24xIjAgBgNVBAoM\\n' +
        'GUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMx\\n' +
        'JjAkBgNVBAMMHUFtYXpvbiBSRFMgZXUtc291dGgtMSBSb290IENBMIIBIjANBgkq\\n' +
        'hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqM921jXCXeqpRNCS9CBPOe5N7gMaEt+D\\n' +
        's5uR3riZbqzRlHGiF1jZihkXfHAIQewDwy+Yz+Oec1aEZCQMhUHxZJPusuX0cJfj\\n' +
        'b+UluFqHIijL2TfXJ3D0PVLLoNTQJZ8+GAPECyojAaNuoHbdVqxhOcznMsXIXVFq\\n' +
        'yVLKDGvyKkJjai/iSPDrQMXufg3kWt0ISjNLvsG5IFXgP4gttsM8i0yvRd4QcHoo\\n' +
        'DjvH7V3cS+CQqW5SnDrGnHToB0RLskE1ET+oNOfeN9PWOxQprMOX/zmJhnJQlTqD\\n' +
        'QP7jcf7SddxrKFjuziFiouskJJyNDsMjt1Lf60+oHZhed2ogTeifGwIDAQABo2Mw\\n' +
        'YTAOBgNVHQ8BAf8EBAMCAQYwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUFBAF\\n' +
        'cgJe/BBuZiGeZ8STfpkgRYQwHwYDVR0jBBgwFoAUFBAFcgJe/BBuZiGeZ8STfpkg\\n' +
        'RYQwDQYJKoZIhvcNAQELBQADggEBAKAYUtlvDuX2UpZW9i1QgsjFuy/ErbW0dLHU\\n' +
        'e/IcFtju2z6RLZ+uF+5A8Kme7IKG1hgt8s+w9TRVQS/7ukQzoK3TaN6XKXRosjtc\\n' +
        'o9Rm4gYWM8bmglzY1TPNaiI4HC7546hSwJhubjN0bXCuj/0sHD6w2DkiGuwKNAef\\n' +
        'yTu5vZhPkeNyXLykxkzz7bNp2/PtMBnzIp+WpS7uUDmWyScGPohKMq5PqvL59z+L\\n' +
        'ZI3CYeMZrJ5VpXUg3fNNIz/83N3G0sk7wr0ohs/kHTP7xPOYB0zD7Ku4HA0Q9Swf\\n' +
        'WX0qr6UQgTPMjfYDLffI7aEId0gxKw1eGYc6Cq5JAZ3ipi/cBFc=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIEEjCCAvqgAwIBAgIJANew34ehz5l8MA0GCSqGSIb3DQEBCwUAMIGVMQswCQYD\\n' +
        'VQQGEwJVUzEQMA4GA1UEBwwHU2VhdHRsZTETMBEGA1UECAwKV2FzaGluZ3RvbjEi\\n' +
        'MCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1h\\n' +
        'em9uIFJEUzEmMCQGA1UEAwwdQW1hem9uIFJEUyBtZS1zb3V0aC0xIFJvb3QgQ0Ew\\n' +
        'HhcNMTkwNTEwMjE0ODI3WhcNMjQwNTA4MjE0ODI3WjCBlTELMAkGA1UEBhMCVVMx\\n' +
        'EDAOBgNVBAcMB1NlYXR0bGUxEzARBgNVBAgMCldhc2hpbmd0b24xIjAgBgNVBAoM\\n' +
        'GUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMx\\n' +
        'JjAkBgNVBAMMHUFtYXpvbiBSRFMgbWUtc291dGgtMSBSb290IENBMIIBIjANBgkq\\n' +
        'hkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAp7BYV88MukcY+rq0r79+C8UzkT30fEfT\\n' +
        'aPXbx1d6M7uheGN4FMaoYmL+JE1NZPaMRIPTHhFtLSdPccInvenRDIatcXX+jgOk\\n' +
        'UA6lnHQ98pwN0pfDUyz/Vph4jBR9LcVkBbe0zdoKKp+HGbMPRU0N2yNrog9gM5O8\\n' +
        'gkU/3O2csJ/OFQNnj4c2NQloGMUpEmedwJMOyQQfcUyt9CvZDfIPNnheUS29jGSw\\n' +
        'ERpJe/AENu8Pxyc72jaXQuD+FEi2Ck6lBkSlWYQFhTottAeGvVFNCzKszCntrtqd\\n' +
        'rdYUwurYsLTXDHv9nW2hfDUQa0mhXf9gNDOBIVAZugR9NqNRNyYLHQIDAQABo2Mw\\n' +
        'YTAOBgNVHQ8BAf8EBAMCAQYwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQU54cf\\n' +
        'DjgwBx4ycBH8+/r8WXdaiqYwHwYDVR0jBBgwFoAU54cfDjgwBx4ycBH8+/r8WXda\\n' +
        'iqYwDQYJKoZIhvcNAQELBQADggEBAIIMTSPx/dR7jlcxggr+O6OyY49Rlap2laKA\\n' +
        'eC/XI4ySP3vQkIFlP822U9Kh8a9s46eR0uiwV4AGLabcu0iKYfXjPkIprVCqeXV7\\n' +
        'ny9oDtrbflyj7NcGdZLvuzSwgl9SYTJp7PVCZtZutsPYlbJrBPHwFABvAkMvRtDB\\n' +
        'hitIg4AESDGPoCl94sYHpfDfjpUDMSrAMDUyO6DyBdZH5ryRMAs3lGtsmkkNUrso\\n' +
        'aTW6R05681Z0mvkRdb+cdXtKOSuDZPoe2wJJIaz3IlNQNSrB5TImMYgmt6iAsFhv\\n' +
        '3vfTSTKrZDNTJn4ybG6pq1zWExoXsktZPylJly6R3RBwV6nwqBM=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIEBjCCAu6gAwIBAgIJAMc0ZzaSUK51MA0GCSqGSIb3DQEBCwUAMIGPMQswCQYD\\n' +
        'VQQGEwJVUzEQMA4GA1UEBwwHU2VhdHRsZTETMBEGA1UECAwKV2FzaGluZ3RvbjEi\\n' +
        'MCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1h\\n' +
        'em9uIFJEUzEgMB4GA1UEAwwXQW1hem9uIFJEUyBSb290IDIwMTkgQ0EwHhcNMTkw\\n' +
        'ODIyMTcwODUwWhcNMjQwODIyMTcwODUwWjCBjzELMAkGA1UEBhMCVVMxEDAOBgNV\\n' +
        'BAcMB1NlYXR0bGUxEzARBgNVBAgMCldhc2hpbmd0b24xIjAgBgNVBAoMGUFtYXpv\\n' +
        'biBXZWIgU2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMxIDAeBgNV\\n' +
        'BAMMF0FtYXpvbiBSRFMgUm9vdCAyMDE5IENBMIIBIjANBgkqhkiG9w0BAQEFAAOC\\n' +
        'AQ8AMIIBCgKCAQEArXnF/E6/Qh+ku3hQTSKPMhQQlCpoWvnIthzX6MK3p5a0eXKZ\\n' +
        'oWIjYcNNG6UwJjp4fUXl6glp53Jobn+tWNX88dNH2n8DVbppSwScVE2LpuL+94vY\\n' +
        '0EYE/XxN7svKea8YvlrqkUBKyxLxTjh+U/KrGOaHxz9v0l6ZNlDbuaZw3qIWdD/I\\n' +
        '6aNbGeRUVtpM6P+bWIoxVl/caQylQS6CEYUk+CpVyJSkopwJlzXT07tMoDL5WgX9\\n' +
        'O08KVgDNz9qP/IGtAcRduRcNioH3E9v981QO1zt/Gpb2f8NqAjUUCUZzOnij6mx9\\n' +
        'McZ+9cWX88CRzR0vQODWuZscgI08NvM69Fn2SQIDAQABo2MwYTAOBgNVHQ8BAf8E\\n' +
        'BAMCAQYwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUc19g2LzLA5j0Kxc0LjZa\\n' +
        'pmD/vB8wHwYDVR0jBBgwFoAUc19g2LzLA5j0Kxc0LjZapmD/vB8wDQYJKoZIhvcN\\n' +
        'AQELBQADggEBAHAG7WTmyjzPRIM85rVj+fWHsLIvqpw6DObIjMWokpliCeMINZFV\\n' +
        'ynfgBKsf1ExwbvJNzYFXW6dihnguDG9VMPpi2up/ctQTN8tm9nDKOy08uNZoofMc\\n' +
        'NUZxKCEkVKZv+IL4oHoeayt8egtv3ujJM6V14AstMQ6SwvwvA93EP/Ug2e4WAXHu\\n' +
        'cbI1NAbUgVDqp+DRdfvZkgYKryjTWd/0+1fS8X1bBZVWzl7eirNVnHbSH2ZDpNuY\\n' +
        '0SBd8dj5F6ld3t58ydZbrTHze7JJOd8ijySAp4/kiu9UfZWuTPABzDa/DSdz9Dk/\\n' +
        'zPW4CXXvhLmE02TA9/HeCw3KEHIwicNuEfw=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIEEDCCAvigAwIBAgIJAKFMXyltvuRdMA0GCSqGSIb3DQEBCwUAMIGUMQswCQYD\\n' +
        'VQQGEwJVUzEQMA4GA1UEBwwHU2VhdHRsZTETMBEGA1UECAwKV2FzaGluZ3RvbjEi\\n' +
        'MCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1h\\n' +
        'em9uIFJEUzElMCMGA1UEAwwcQW1hem9uIFJEUyBCZXRhIFJvb3QgMjAxOSBDQTAe\\n' +
        'Fw0xOTA4MTkxNzM4MjZaFw0yNDA4MTkxNzM4MjZaMIGUMQswCQYDVQQGEwJVUzEQ\\n' +
        'MA4GA1UEBwwHU2VhdHRsZTETMBEGA1UECAwKV2FzaGluZ3RvbjEiMCAGA1UECgwZ\\n' +
        'QW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEl\\n' +
        'MCMGA1UEAwwcQW1hem9uIFJEUyBCZXRhIFJvb3QgMjAxOSBDQTCCASIwDQYJKoZI\\n' +
        'hvcNAQEBBQADggEPADCCAQoCggEBAMkZdnIH9ndatGAcFo+DppGJ1HUt4x+zeO+0\\n' +
        'ZZ29m0sfGetVulmTlv2d5b66e+QXZFWpcPQMouSxxYTW08TbrQiZngKr40JNXftA\\n' +
        'atvzBqIImD4II0ZX5UEVj2h98qe/ypW5xaDN7fEa5e8FkYB1TEemPaWIbNXqchcL\\n' +
        'tV7IJPr3Cd7Z5gZJlmujIVDPpMuSiNaal9/6nT9oqN+JSM1fx5SzrU5ssg1Vp1vv\\n' +
        '5Xab64uOg7wCJRB9R2GC9XD04odX6VcxUAGrZo6LR64ZSifupo3l+R5sVOc5i8NH\\n' +
        'skdboTzU9H7+oSdqoAyhIU717PcqeDum23DYlPE2nGBWckE+eT8CAwEAAaNjMGEw\\n' +
        'DgYDVR0PAQH/BAQDAgEGMA8GA1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYEFK2hDBWl\\n' +
        'sbHzt/EHd0QYOooqcFPhMB8GA1UdIwQYMBaAFK2hDBWlsbHzt/EHd0QYOooqcFPh\\n' +
        'MA0GCSqGSIb3DQEBCwUAA4IBAQAO/718k8EnOqJDx6wweUscGTGL/QdKXUzTVRAx\\n' +
        'JUsjNUv49mH2HQVEW7oxszfH6cPCaupNAddMhQc4C/af6GHX8HnqfPDk27/yBQI+\\n' +
        'yBBvIanGgxv9c9wBbmcIaCEWJcsLp3HzXSYHmjiqkViXwCpYfkoV3Ns2m8bp+KCO\\n' +
        'y9XmcCKRaXkt237qmoxoh2sGmBHk2UlQtOsMC0aUQ4d7teAJG0q6pbyZEiPyKZY1\\n' +
        'XR/UVxMJL0Q4iVpcRS1kaNCMfqS2smbLJeNdsan8pkw1dvPhcaVTb7CvjhJtjztF\\n' +
        'YfDzAI5794qMlWxwilKMmUvDlPPOTen8NNHkLwWvyFCH7Doh\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIEFjCCAv6gAwIBAgIJAMzYZJ+R9NBVMA0GCSqGSIb3DQEBCwUAMIGXMQswCQYD\\n' +
        'VQQGEwJVUzEQMA4GA1UEBwwHU2VhdHRsZTETMBEGA1UECAwKV2FzaGluZ3RvbjEi\\n' +
        'MCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1h\\n' +
        'em9uIFJEUzEoMCYGA1UEAwwfQW1hem9uIFJEUyBQcmV2aWV3IFJvb3QgMjAxOSBD\\n' +
        'QTAeFw0xOTA4MjEyMjI5NDlaFw0yNDA4MjEyMjI5NDlaMIGXMQswCQYDVQQGEwJV\\n' +
        'UzEQMA4GA1UEBwwHU2VhdHRsZTETMBEGA1UECAwKV2FzaGluZ3RvbjEiMCAGA1UE\\n' +
        'CgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJE\\n' +
        'UzEoMCYGA1UEAwwfQW1hem9uIFJEUyBQcmV2aWV3IFJvb3QgMjAxOSBDQTCCASIw\\n' +
        'DQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAM7kkS6vjgKKQTPynC2NjdN5aPPV\\n' +
        'O71G0JJS/2ARVBVJd93JLiGovVJilfWYfwZCs4gTRSSjrUD4D4HyqCd6A+eEEtJq\\n' +
        'M0DEC7i0dC+9WNTsPszuB206Jy2IUmxZMIKJAA1NHSbIMjB+b6/JhbSUi7nKdbR/\\n' +
        'brj83bF+RoSA+ogrgX7mQbxhmFcoZN9OGaJgYKsKWUt5Wqv627KkGodUK8mDepgD\\n' +
        'S3ZfoRQRx3iceETpcmHJvaIge6+vyDX3d9Z22jmvQ4AKv3py2CmU2UwuhOltFDwB\\n' +
        '0ddtb39vgwrJxaGfiMRHpEP1DfNLWHAnA69/pgZPwIggidS+iBPUhgucMp8CAwEA\\n' +
        'AaNjMGEwDgYDVR0PAQH/BAQDAgEGMA8GA1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYE\\n' +
        'FGnTGpQuQ2H/DZlXMQijZEhjs7TdMB8GA1UdIwQYMBaAFGnTGpQuQ2H/DZlXMQij\\n' +
        'ZEhjs7TdMA0GCSqGSIb3DQEBCwUAA4IBAQC3xz1vQvcXAfpcZlngiRWeqU8zQAMQ\\n' +
        'LZPCFNv7PVk4pmqX+ZiIRo4f9Zy7TrOVcboCnqmP/b/mNq0gVF4O+88jwXJZD+f8\\n' +
        '/RnABMZcnGU+vK0YmxsAtYU6TIb1uhRFmbF8K80HHbj9vSjBGIQdPCbvmR2zY6VJ\\n' +
        'BYM+w9U9hp6H4DVMLKXPc1bFlKA5OBTgUtgkDibWJKFOEPW3UOYwp9uq6pFoN0AO\\n' +
        'xMTldqWFsOF3bJIlvOY0c/1EFZXu3Ns6/oCP//Ap9vumldYMUZWmbK+gK33FPOXV\\n' +
        '8BQ6jNC29icv7lLDpRPwjibJBXX+peDR5UK4FdYcswWEB1Tix5X8dYu6\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIECTCCAvGgAwIBAgICEAAwDQYJKoZIhvcNAQELBQAwgZUxCzAJBgNVBAYTAlVT\\n' +
        'MRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\\n' +
        'DBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\\n' +
        'MSYwJAYDVQQDDB1BbWF6b24gUkRTIGFmLXNvdXRoLTEgUm9vdCBDQTAeFw0xOTEw\\n' +
        'MjgxODA2NTNaFw0yNDEwMjgxODA2NTNaMIGQMQswCQYDVQQGEwJVUzETMBEGA1UE\\n' +
        'CAwKV2FzaGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9u\\n' +
        'IFdlYiBTZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEhMB8GA1UE\\n' +
        'AwwYQW1hem9uIFJEUyBhZi1zb3V0aC0xIENBMIIBIjANBgkqhkiG9w0BAQEFAAOC\\n' +
        'AQ8AMIIBCgKCAQEAvtV1OqmFa8zCVQSKOvPUJERLVFtd4rZmDpImc5rIoeBk7w/P\\n' +
        '9lcKUJjO8R/w1a2lJXx3oQ81tiY0Piw6TpT62YWVRMWrOw8+Vxq1dNaDSFp9I8d0\\n' +
        'UHillSSbOk6FOrPDp+R6AwbGFqUDebbN5LFFoDKbhNmH1BVS0a6YNKpGigLRqhka\\n' +
        'cClPslWtPqtjbaP3Jbxl26zWzLo7OtZl98dR225pq8aApNBwmtgA7Gh60HK/cX0t\\n' +
        '32W94n8D+GKSg6R4MKredVFqRTi9hCCNUu0sxYPoELuM+mHiqB5NPjtm92EzCWs+\\n' +
        '+vgWhMc6GxG+82QSWx1Vj8sgLqtE/vLrWddf5QIDAQABo2YwZDAOBgNVHQ8BAf8E\\n' +
        'BAMCAQYwEgYDVR0TAQH/BAgwBgEB/wIBADAdBgNVHQ4EFgQUuLB4gYVJrSKJj/Gz\\n' +
        'pqc6yeA+RcAwHwYDVR0jBBgwFoAUEEi/WWMcBJsoGXg+EZwkQ0MscZQwDQYJKoZI\\n' +
        'hvcNAQELBQADggEBABauYOZxUhe9/RhzGJ8MsWCz8eKcyDVd4FCnY6Qh+9wcmYNT\\n' +
        'LtnD88LACtJKb/b81qYzcB0Em6+zVJ3Z9jznfr6buItE6es9wAoja22Xgv44BTHL\\n' +
        'rimbgMwpTt3uEMXDffaS0Ww6YWb3pSE0XYI2ISMWz+xRERRf+QqktSaL39zuiaW5\\n' +
        'tfZMre+YhohRa/F0ZQl3RCd6yFcLx4UoSPqQsUl97WhYzwAxZZfwvLJXOc4ATt3u\\n' +
        'VlCUylNDkaZztDJc/yN5XQoK9W5nOt2cLu513MGYKbuarQr8f+gYU8S+qOyuSRSP\\n' +
        'NRITzwCRVnsJE+2JmcRInn/NcanB7uOGqTvJ9+c=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIECTCCAvGgAwIBAgICEAAwDQYJKoZIhvcNAQELBQAwgZUxCzAJBgNVBAYTAlVT\\n' +
        'MRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\\n' +
        'DBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\\n' +
        'MSYwJAYDVQQDDB1BbWF6b24gUkRTIGV1LXNvdXRoLTEgUm9vdCBDQTAeFw0xOTEw\\n' +
        'MzAyMDIxMzBaFw0yNDEwMzAyMDIxMzBaMIGQMQswCQYDVQQGEwJVUzETMBEGA1UE\\n' +
        'CAwKV2FzaGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9u\\n' +
        'IFdlYiBTZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEhMB8GA1UE\\n' +
        'AwwYQW1hem9uIFJEUyBldS1zb3V0aC0xIENBMIIBIjANBgkqhkiG9w0BAQEFAAOC\\n' +
        'AQ8AMIIBCgKCAQEAtEyjYcajx6xImJn8Vz1zjdmL4ANPgQXwF7+tF7xccmNAZETb\\n' +
        'bzb3I9i5fZlmrRaVznX+9biXVaGxYzIUIR3huQ3Q283KsDYnVuGa3mk690vhvJbB\\n' +
        'QIPgKa5mVwJppnuJm78KqaSpi0vxyCPe3h8h6LLFawVyWrYNZ4okli1/U582eef8\\n' +
        'RzJp/Ear3KgHOLIiCdPDF0rjOdCG1MOlDLixVnPn9IYOciqO+VivXBg+jtfc5J+L\\n' +
        'AaPm0/Yx4uELt1tkbWkm4BvTU/gBOODnYziITZM0l6Fgwvbwgq5duAtKW+h031lC\\n' +
        '37rEvrclqcp4wrsUYcLAWX79ZyKIlRxcAdvEhQIDAQABo2YwZDAOBgNVHQ8BAf8E\\n' +
        'BAMCAQYwEgYDVR0TAQH/BAgwBgEB/wIBADAdBgNVHQ4EFgQU7zPyc0azQxnBCe7D\\n' +
        'b9KAadH1QSEwHwYDVR0jBBgwFoAUFBAFcgJe/BBuZiGeZ8STfpkgRYQwDQYJKoZI\\n' +
        'hvcNAQELBQADggEBAFGaNiYxg7yC/xauXPlaqLCtwbm2dKyK9nIFbF/7be8mk7Q3\\n' +
        'MOA0of1vGHPLVQLr6bJJpD9MAbUcm4cPAwWaxwcNpxOjYOFDaq10PCK4eRAxZWwF\\n' +
        'NJRIRmGsl8NEsMNTMCy8X+Kyw5EzH4vWFl5Uf2bGKOeFg0zt43jWQVOX6C+aL3Cd\\n' +
        'pRS5MhmYpxMG8irrNOxf4NVFE2zpJOCm3bn0STLhkDcV/ww4zMzObTJhiIb5wSWn\\n' +
        'EXKKWhUXuRt7A2y1KJtXpTbSRHQxE++69Go1tWhXtRiULCJtf7wF2Ksm0RR/AdXT\\n' +
        '1uR1vKyH5KBJPX3ppYkQDukoHTFR0CpB+G84NLo=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIECTCCAvGgAwIBAgICEAAwDQYJKoZIhvcNAQELBQAwgZUxCzAJBgNVBAYTAlVT\\n' +
        'MRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\\n' +
        'DBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\\n' +
        'MSYwJAYDVQQDDB1BbWF6b24gUkRTIG1lLXNvdXRoLTEgUm9vdCBDQTAeFw0xOTA1\\n' +
        'MTAyMTU4NDNaFw0yNTA2MDExMjAwMDBaMIGQMQswCQYDVQQGEwJVUzETMBEGA1UE\\n' +
        'CAwKV2FzaGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9u\\n' +
        'IFdlYiBTZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEhMB8GA1UE\\n' +
        'AwwYQW1hem9uIFJEUyBtZS1zb3V0aC0xIENBMIIBIjANBgkqhkiG9w0BAQEFAAOC\\n' +
        'AQ8AMIIBCgKCAQEAudOYPZH+ihJAo6hNYMB5izPVBe3TYhnZm8+X3IoaaYiKtsp1\\n' +
        'JJhkTT0CEejYIQ58Fh4QrMUyWvU8qsdK3diNyQRoYLbctsBPgxBR1u07eUJDv38/\\n' +
        'C1JlqgHmMnMi4y68Iy7ymv50QgAMuaBqgEBRI1R6Lfbyrb2YvH5txjJyTVMwuCfd\\n' +
        'YPAtZVouRz0JxmnfsHyxjE+So56uOKTDuw++Ho4HhZ7Qveej7XB8b+PIPuroknd3\\n' +
        'FQB5RVbXRvt5ZcVD4F2fbEdBniF7FAF4dEiofVCQGQ2nynT7dZdEIPfPdH3n7ZmE\\n' +
        'lAOmwHQ6G83OsiHRBLnbp+QZRgOsjkHJxT20bQIDAQABo2YwZDAOBgNVHQ8BAf8E\\n' +
        'BAMCAQYwEgYDVR0TAQH/BAgwBgEB/wIBADAdBgNVHQ4EFgQUOEVDM7VomRH4HVdA\\n' +
        'QvIMNq2tXOcwHwYDVR0jBBgwFoAU54cfDjgwBx4ycBH8+/r8WXdaiqYwDQYJKoZI\\n' +
        'hvcNAQELBQADggEBAHhvMssj+Th8IpNePU6RH0BiL6o9c437R3Q4IEJeFdYL+nZz\\n' +
        'PW/rELDPvLRUNMfKM+KzduLZ+l29HahxefejYPXtvXBlq/E/9czFDD4fWXg+zVou\\n' +
        'uDXhyrV4kNmP4S0eqsAP/jQHPOZAMFA4yVwO9hlqmePhyDnszCh9c1PfJSBh49+b\\n' +
        '4w7i/L3VBOMt8j3EKYvqz0gVfpeqhJwL4Hey8UbVfJRFJMJzfNHpePqtDRAY7yjV\\n' +
        'PYquRaV2ab/E+/7VFkWMM4tazYz/qsYA2jSH+4xDHvYk8LnsbcrF9iuidQmEc5sb\\n' +
        'FgcWaSKG4DJjcI5k7AJLWcXyTDt21Ci43LE+I9Q=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIECDCCAvCgAwIBAgICVIYwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\\n' +
        'MRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\\n' +
        'DBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\\n' +
        'MSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MDQxNzEz\\n' +
        'MDRaFw0yNDA4MjIxNzA4NTBaMIGVMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\\n' +
        'aGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\\n' +
        'ZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEmMCQGA1UEAwwdQW1h\\n' +
        'em9uIFJEUyBhcC1zb3V0aC0xIDIwMTkgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IB\\n' +
        'DwAwggEKAoIBAQDUYOz1hGL42yUCrcsMSOoU8AeD/3KgZ4q7gP+vAz1WnY9K/kim\\n' +
        'eWN/2Qqzlo3+mxSFQFyD4MyV3+CnCPnBl9Sh1G/F6kThNiJ7dEWSWBQGAB6HMDbC\\n' +
        'BaAsmUc1UIz8sLTL3fO+S9wYhA63Wun0Fbm/Rn2yk/4WnJAaMZcEtYf6e0KNa0LM\\n' +
        'p/kN/70/8cD3iz3dDR8zOZFpHoCtf0ek80QqTich0A9n3JLxR6g6tpwoYviVg89e\\n' +
        'qCjQ4axxOkWWeusLeTJCcY6CkVyFvDAKvcUl1ytM5AiaUkXblE7zDFXRM4qMMRdt\\n' +
        'lPm8d3pFxh0fRYk8bIKnpmtOpz3RIctDrZZxAgMBAAGjZjBkMA4GA1UdDwEB/wQE\\n' +
        'AwIBBjASBgNVHRMBAf8ECDAGAQH/AgEAMB0GA1UdDgQWBBT99wKJftD3jb4sHoHG\\n' +
        'i3uGlH6W6TAfBgNVHSMEGDAWgBRzX2DYvMsDmPQrFzQuNlqmYP+8HzANBgkqhkiG\\n' +
        '9w0BAQsFAAOCAQEAZ17hhr3dII3hUfuHQ1hPWGrpJOX/G9dLzkprEIcCidkmRYl+\\n' +
        'hu1Pe3caRMh/17+qsoEErmnVq5jNY9X1GZL04IZH8YbHc7iRHw3HcWAdhN8633+K\\n' +
        'jYEB2LbJ3vluCGnCejq9djDb6alOugdLMJzxOkHDhMZ6/gYbECOot+ph1tQuZXzD\\n' +
        'tZ7prRsrcuPBChHlPjmGy8M9z8u+kF196iNSUGC4lM8vLkHM7ycc1/ZOwRq9aaTe\\n' +
        'iOghbQQyAEe03MWCyDGtSmDfr0qEk+CHN+6hPiaL8qKt4s+V9P7DeK4iW08ny8Ox\\n' +
        'AVS7u0OK/5+jKMAMrKwpYrBydOjTUTHScocyNw==\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIEBzCCAu+gAwIBAgICQ2QwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\\n' +
        'MRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\\n' +
        'DBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\\n' +
        'MSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MDUxODQ2\\n' +
        'MjlaFw0yNDA4MjIxNzA4NTBaMIGUMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\\n' +
        'aGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\\n' +
        'ZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzElMCMGA1UEAwwcQW1h\\n' +
        'em9uIFJEUyBzYS1lYXN0LTEgMjAxOSBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEP\\n' +
        'ADCCAQoCggEBAMMvR+ReRnOzqJzoaPipNTt1Z2VA968jlN1+SYKUrYM3No+Vpz0H\\n' +
        'M6Tn0oYB66ByVsXiGc28ulsqX1HbHsxqDPwvQTKvO7SrmDokoAkjJgLocOLUAeld\\n' +
        '5AwvUjxGRP6yY90NV7X786MpnYb2Il9DIIaV9HjCmPt+rjy2CZjS0UjPjCKNfB8J\\n' +
        'bFjgW6GGscjeyGb/zFwcom5p4j0rLydbNaOr9wOyQrtt3ZQWLYGY9Zees/b8pmcc\\n' +
        'Jt+7jstZ2UMV32OO/kIsJ4rMUn2r/uxccPwAc1IDeRSSxOrnFKhW3Cu69iB3bHp7\\n' +
        'JbawY12g7zshE4I14sHjv3QoXASoXjx4xgMCAwEAAaNmMGQwDgYDVR0PAQH/BAQD\\n' +
        'AgEGMBIGA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFI1Fc/Ql2jx+oJPgBVYq\\n' +
        'ccgP0pQ8MB8GA1UdIwQYMBaAFHNfYNi8ywOY9CsXNC42WqZg/7wfMA0GCSqGSIb3\\n' +
        'DQEBCwUAA4IBAQB4VVVabVp70myuYuZ3vltQIWqSUMhkaTzehMgGcHjMf9iLoZ/I\\n' +
        '93KiFUSGnek5cRePyS9wcpp0fcBT3FvkjpUdCjVtdttJgZFhBxgTd8y26ImdDDMR\\n' +
        '4+BUuhI5msvjL08f+Vkkpu1GQcGmyFVPFOy/UY8iefu+QyUuiBUnUuEDd49Hw0Fn\\n' +
        '/kIPII6Vj82a2mWV/Q8e+rgN8dIRksRjKI03DEoP8lhPlsOkhdwU6Uz9Vu6NOB2Q\\n' +
        'Ls1kbcxAc7cFSyRVJEhh12Sz9d0q/CQSTFsVJKOjSNQBQfVnLz1GwO/IieUEAr4C\\n' +
        'jkTntH0r1LX5b/GwN4R887LvjAEdTbg1his7\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIECDCCAvCgAwIBAgIDAIkHMA0GCSqGSIb3DQEBCwUAMIGPMQswCQYDVQQGEwJV\\n' +
        'UzEQMA4GA1UEBwwHU2VhdHRsZTETMBEGA1UECAwKV2FzaGluZ3RvbjEiMCAGA1UE\\n' +
        'CgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJE\\n' +
        'UzEgMB4GA1UEAwwXQW1hem9uIFJEUyBSb290IDIwMTkgQ0EwHhcNMTkwOTA2MTc0\\n' +
        'MDIxWhcNMjQwODIyMTcwODUwWjCBlDELMAkGA1UEBhMCVVMxEzARBgNVBAgMCldh\\n' +
        'c2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoMGUFtYXpvbiBXZWIg\\n' +
        'U2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMxJTAjBgNVBAMMHEFt\\n' +
        'YXpvbiBSRFMgdXMtd2VzdC0xIDIwMTkgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IB\\n' +
        'DwAwggEKAoIBAQDD2yzbbAl77OofTghDMEf624OvU0eS9O+lsdO0QlbfUfWa1Kd6\\n' +
        '0WkgjkLZGfSRxEHMCnrv4UPBSK/Qwn6FTjkDLgemhqBtAnplN4VsoDL+BkRX4Wwq\\n' +
        '/dSQJE2b+0hm9w9UMVGFDEq1TMotGGTD2B71eh9HEKzKhGzqiNeGsiX4VV+LJzdH\\n' +
        'uM23eGisNqmd4iJV0zcAZ+Gbh2zK6fqTOCvXtm7Idccv8vZZnyk1FiWl3NR4WAgK\\n' +
        'AkvWTIoFU3Mt7dIXKKClVmvssG8WHCkd3Xcb4FHy/G756UZcq67gMMTX/9fOFM/v\\n' +
        'l5C0+CHl33Yig1vIDZd+fXV1KZD84dEJfEvHAgMBAAGjZjBkMA4GA1UdDwEB/wQE\\n' +
        'AwIBBjASBgNVHRMBAf8ECDAGAQH/AgEAMB0GA1UdDgQWBBR+ap20kO/6A7pPxo3+\\n' +
        'T3CfqZpQWjAfBgNVHSMEGDAWgBRzX2DYvMsDmPQrFzQuNlqmYP+8HzANBgkqhkiG\\n' +
        '9w0BAQsFAAOCAQEAHCJky2tPjPttlDM/RIqExupBkNrnSYnOK4kr9xJ3sl8UF2DA\\n' +
        'PAnYsjXp3rfcjN/k/FVOhxwzi3cXJF/2Tjj39Bm/OEfYTOJDNYtBwB0VVH4ffa/6\\n' +
        'tZl87jaIkrxJcreeeHqYMnIxeN0b/kliyA+a5L2Yb0VPjt9INq34QDc1v74FNZ17\\n' +
        '4z8nr1nzg4xsOWu0Dbjo966lm4nOYIGBRGOKEkHZRZ4mEiMgr3YLkv8gSmeitx57\\n' +
        'Z6dVemNtUic/LVo5Iqw4n3TBS0iF2C1Q1xT/s3h+0SXZlfOWttzSluDvoMv5PvCd\\n' +
        'pFjNn+aXLAALoihL1MJSsxydtsLjOBro5eK0Vw==\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIEDDCCAvSgAwIBAgICOFAwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\\n' +
        'MRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\\n' +
        'DBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\\n' +
        'MSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MTAxNzQ2\\n' +
        'MjFaFw0yNDA4MjIxNzA4NTBaMIGZMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\\n' +
        'aGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\\n' +
        'ZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEqMCgGA1UEAwwhQW1h\\n' +
        'em9uIFJEUyBhcC1ub3J0aGVhc3QtMiAyMDE5IENBMIIBIjANBgkqhkiG9w0BAQEF\\n' +
        'AAOCAQ8AMIIBCgKCAQEAzU72e6XbaJbi4HjJoRNjKxzUEuChKQIt7k3CWzNnmjc5\\n' +
        '8I1MjCpa2W1iw1BYVysXSNSsLOtUsfvBZxi/1uyMn5ZCaf9aeoA9UsSkFSZBjOCN\\n' +
        'DpKPCmfV1zcEOvJz26+1m8WDg+8Oa60QV0ou2AU1tYcw98fOQjcAES0JXXB80P2s\\n' +
        '3UfkNcnDz+l4k7j4SllhFPhH6BQ4lD2NiFAP4HwoG6FeJUn45EPjzrydxjq6v5Fc\\n' +
        'cQ8rGuHADVXotDbEhaYhNjIrsPL+puhjWfhJjheEw8c4whRZNp6gJ/b6WEes/ZhZ\\n' +
        'h32DwsDsZw0BfRDUMgUn8TdecNexHUw8vQWeC181hwIDAQABo2YwZDAOBgNVHQ8B\\n' +
        'Af8EBAMCAQYwEgYDVR0TAQH/BAgwBgEB/wIBADAdBgNVHQ4EFgQUwW9bWgkWkr0U\\n' +
        'lrOsq2kvIdrECDgwHwYDVR0jBBgwFoAUc19g2LzLA5j0Kxc0LjZapmD/vB8wDQYJ\\n' +
        'KoZIhvcNAQELBQADggEBAEugF0Gj7HVhX0ehPZoGRYRt3PBuI2YjfrrJRTZ9X5wc\\n' +
        '9T8oHmw07mHmNy1qqWvooNJg09bDGfB0k5goC2emDiIiGfc/kvMLI7u+eQOoMKj6\\n' +
        'mkfCncyRN3ty08Po45vTLBFZGUvtQmjM6yKewc4sXiASSBmQUpsMbiHRCL72M5qV\\n' +
        'obcJOjGcIdDTmV1BHdWT+XcjynsGjUqOvQWWhhLPrn4jWe6Xuxll75qlrpn3IrIx\\n' +
        'CRBv/5r7qbcQJPOgwQsyK4kv9Ly8g7YT1/vYBlR3cRsYQjccw5ceWUj2DrMVWhJ4\\n' +
        'prf+E3Aa4vYmLLOUUvKnDQ1k3RGNu56V0tonsQbfsaM=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIECjCCAvKgAwIBAgICEzUwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\\n' +
        'MRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\\n' +
        'DBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\\n' +
        'MSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MTAyMDUy\\n' +
        'MjVaFw0yNDA4MjIxNzA4NTBaMIGXMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\\n' +
        'aGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\\n' +
        'ZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEoMCYGA1UEAwwfQW1h\\n' +
        'em9uIFJEUyBjYS1jZW50cmFsLTEgMjAxOSBDQTCCASIwDQYJKoZIhvcNAQEBBQAD\\n' +
        'ggEPADCCAQoCggEBAOxHqdcPSA2uBjsCP4DLSlqSoPuQ/X1kkJLusVRKiQE2zayB\\n' +
        'viuCBt4VB9Qsh2rW3iYGM+usDjltGnI1iUWA5KHcvHszSMkWAOYWLiMNKTlg6LCp\\n' +
        'XnE89tvj5dIH6U8WlDvXLdjB/h30gW9JEX7S8supsBSci2GxEzb5mRdKaDuuF/0O\\n' +
        'qvz4YE04pua3iZ9QwmMFuTAOYzD1M72aOpj+7Ac+YLMM61qOtU+AU6MndnQkKoQi\\n' +
        'qmUN2A9IFaqHFzRlSdXwKCKUA4otzmz+/N3vFwjb5F4DSsbsrMfjeHMo6o/nb6Nh\\n' +
        'YDb0VJxxPee6TxSuN7CQJ2FxMlFUezcoXqwqXD0CAwEAAaNmMGQwDgYDVR0PAQH/\\n' +
        'BAQDAgEGMBIGA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFDGGpon9WfIpsggE\\n' +
        'CxHq8hZ7E2ESMB8GA1UdIwQYMBaAFHNfYNi8ywOY9CsXNC42WqZg/7wfMA0GCSqG\\n' +
        'SIb3DQEBCwUAA4IBAQAvpeQYEGZvoTVLgV9rd2+StPYykMsmFjWQcyn3dBTZRXC2\\n' +
        'lKq7QhQczMAOhEaaN29ZprjQzsA2X/UauKzLR2Uyqc2qOeO9/YOl0H3qauo8C/W9\\n' +
        'r8xqPbOCDLEXlOQ19fidXyyEPHEq5WFp8j+fTh+s8WOx2M7IuC0ANEetIZURYhSp\\n' +
        'xl9XOPRCJxOhj7JdelhpweX0BJDNHeUFi0ClnFOws8oKQ7sQEv66d5ddxqqZ3NVv\\n' +
        'RbCvCtEutQMOUMIuaygDlMn1anSM8N7Wndx8G6+Uy67AnhjGx7jw/0YPPxopEj6x\\n' +
        'JXP8j0sJbcT9K/9/fPVLNT25RvQ/93T2+IQL4Ca2\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIEBzCCAu+gAwIBAgICYpgwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\\n' +
        'MRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\\n' +
        'DBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\\n' +
        'MSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MTExNzMx\\n' +
        'NDhaFw0yNDA4MjIxNzA4NTBaMIGUMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\\n' +
        'aGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\\n' +
        'ZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzElMCMGA1UEAwwcQW1h\\n' +
        'em9uIFJEUyBldS13ZXN0LTEgMjAxOSBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEP\\n' +
        'ADCCAQoCggEBAMk3YdSZ64iAYp6MyyKtYJtNzv7zFSnnNf6vv0FB4VnfITTMmOyZ\\n' +
        'LXqKAT2ahZ00hXi34ewqJElgU6eUZT/QlzdIu359TEZyLVPwURflL6SWgdG01Q5X\\n' +
        'O++7fSGcBRyIeuQWs9FJNIIqK8daF6qw0Rl5TXfu7P9dBc3zkgDXZm2DHmxGDD69\\n' +
        '7liQUiXzoE1q2Z9cA8+jirDioJxN9av8hQt12pskLQumhlArsMIhjhHRgF03HOh5\\n' +
        'tvi+RCfihVOxELyIRTRpTNiIwAqfZxxTWFTgfn+gijTmd0/1DseAe82aYic8JbuS\\n' +
        'EMbrDduAWsqrnJ4GPzxHKLXX0JasCUcWyMECAwEAAaNmMGQwDgYDVR0PAQH/BAQD\\n' +
        'AgEGMBIGA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFPLtsq1NrwJXO13C9eHt\\n' +
        'sLY11AGwMB8GA1UdIwQYMBaAFHNfYNi8ywOY9CsXNC42WqZg/7wfMA0GCSqGSIb3\\n' +
        'DQEBCwUAA4IBAQAnWBKj5xV1A1mYd0kIgDdkjCwQkiKF5bjIbGkT3YEFFbXoJlSP\\n' +
        '0lZZ/hDaOHI8wbLT44SzOvPEEmWF9EE7SJzkvSdQrUAWR9FwDLaU427ALI3ngNHy\\n' +
        'lGJ2hse1fvSRNbmg8Sc9GBv8oqNIBPVuw+AJzHTacZ1OkyLZrz1c1QvwvwN2a+Jd\\n' +
        'vH0V0YIhv66llKcYDMUQJAQi4+8nbRxXWv6Gq3pvrFoorzsnkr42V3JpbhnYiK+9\\n' +
        'nRKd4uWl62KRZjGkfMbmsqZpj2fdSWMY1UGyN1k+kDmCSWYdrTRDP0xjtIocwg+A\\n' +
        'J116n4hV/5mbA0BaPiS2krtv17YAeHABZcvz\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIECjCCAvKgAwIBAgICV2YwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\\n' +
        'MRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\\n' +
        'DBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\\n' +
        'MSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MTExOTM2\\n' +
        'MjBaFw0yNDA4MjIxNzA4NTBaMIGXMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\\n' +
        'aGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\\n' +
        'ZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEoMCYGA1UEAwwfQW1h\\n' +
        'em9uIFJEUyBldS1jZW50cmFsLTEgMjAxOSBDQTCCASIwDQYJKoZIhvcNAQEBBQAD\\n' +
        'ggEPADCCAQoCggEBAMEx54X2pHVv86APA0RWqxxRNmdkhAyp2R1cFWumKQRofoFv\\n' +
        'n+SPXdkpIINpMuEIGJANozdiEz7SPsrAf8WHyD93j/ZxrdQftRcIGH41xasetKGl\\n' +
        'I67uans8d+pgJgBKGb/Z+B5m+UsIuEVekpvgpwKtmmaLFC/NCGuSsJoFsRqoa6Gh\\n' +
        'm34W6yJoY87UatddCqLY4IIXaBFsgK9Q/wYzYLbnWM6ZZvhJ52VMtdhcdzeTHNW0\\n' +
        '5LGuXJOF7Ahb4JkEhoo6TS2c0NxB4l4MBfBPgti+O7WjR3FfZHpt18A6Zkq6A2u6\\n' +
        'D/oTSL6c9/3sAaFTFgMyL3wHb2YlW0BPiljZIqECAwEAAaNmMGQwDgYDVR0PAQH/\\n' +
        'BAQDAgEGMBIGA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFOcAToAc6skWffJa\\n' +
        'TnreaswAfrbcMB8GA1UdIwQYMBaAFHNfYNi8ywOY9CsXNC42WqZg/7wfMA0GCSqG\\n' +
        'SIb3DQEBCwUAA4IBAQA1d0Whc1QtspK496mFWfFEQNegLh0a9GWYlJm+Htcj5Nxt\\n' +
        'DAIGXb+8xrtOZFHmYP7VLCT5Zd2C+XytqseK/+s07iAr0/EPF+O2qcyQWMN5KhgE\\n' +
        'cXw2SwuP9FPV3i+YAm11PBVeenrmzuk9NrdHQ7TxU4v7VGhcsd2C++0EisrmquWH\\n' +
        'mgIfmVDGxphwoES52cY6t3fbnXmTkvENvR+h3rj+fUiSz0aSo+XZUGHPgvuEKM/W\\n' +
        'CBD9Smc9CBoBgvy7BgHRgRUmwtABZHFUIEjHI5rIr7ZvYn+6A0O6sogRfvVYtWFc\\n' +
        'qpyrW1YX8mD0VlJ8fGKM3G+aCOsiiPKDV/Uafrm+\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIECDCCAvCgAwIBAgICGAcwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\\n' +
        'MRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\\n' +
        'DBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\\n' +
        'MSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MTIxODE5\\n' +
        'NDRaFw0yNDA4MjIxNzA4NTBaMIGVMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\\n' +
        'aGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\\n' +
        'ZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEmMCQGA1UEAwwdQW1h\\n' +
        'em9uIFJEUyBldS1ub3J0aC0xIDIwMTkgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IB\\n' +
        'DwAwggEKAoIBAQCiIYnhe4UNBbdBb/nQxl5giM0XoVHWNrYV5nB0YukA98+TPn9v\\n' +
        'Aoj1RGYmtryjhrf01Kuv8SWO+Eom95L3zquoTFcE2gmxCfk7bp6qJJ3eHOJB+QUO\\n' +
        'XsNRh76fwDzEF1yTeZWH49oeL2xO13EAx4PbZuZpZBttBM5zAxgZkqu4uWQczFEs\\n' +
        'JXfla7z2fvWmGcTagX10O5C18XaFroV0ubvSyIi75ue9ykg/nlFAeB7O0Wxae88e\\n' +
        'uhiBEFAuLYdqWnsg3459NfV8Yi1GnaitTym6VI3tHKIFiUvkSiy0DAlAGV2iiyJE\\n' +
        'q+DsVEO4/hSINJEtII4TMtysOsYPpINqeEzRAgMBAAGjZjBkMA4GA1UdDwEB/wQE\\n' +
        'AwIBBjASBgNVHRMBAf8ECDAGAQH/AgEAMB0GA1UdDgQWBBRR0UpnbQyjnHChgmOc\\n' +
        'hnlc0PogzTAfBgNVHSMEGDAWgBRzX2DYvMsDmPQrFzQuNlqmYP+8HzANBgkqhkiG\\n' +
        '9w0BAQsFAAOCAQEAKJD4xVzSf4zSGTBJrmamo86jl1NHQxXUApAZuBZEc8tqC6TI\\n' +
        'T5CeoSr9CMuVC8grYyBjXblC4OsM5NMvmsrXl/u5C9dEwtBFjo8mm53rOOIm1fxl\\n' +
        'I1oYB/9mtO9ANWjkykuLzWeBlqDT/i7ckaKwalhLODsRDO73vRhYNjsIUGloNsKe\\n' +
        'pxw3dzHwAZx4upSdEVG4RGCZ1D0LJ4Gw40OfD69hfkDfRVVxKGrbEzqxXRvovmDc\\n' +
        'tKLdYZO/6REoca36v4BlgIs1CbUXJGLSXUwtg7YXGLSVBJ/U0+22iGJmBSNcoyUN\\n' +
        'cjPFD9JQEhDDIYYKSGzIYpvslvGc4T5ISXFiuQ==\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIEBzCCAu+gAwIBAgICZIEwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\\n' +
        'MRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\\n' +
        'DBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\\n' +
        'MSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MTIyMTMy\\n' +
        'MzJaFw0yNDA4MjIxNzA4NTBaMIGUMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\\n' +
        'aGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\\n' +
        'ZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzElMCMGA1UEAwwcQW1h\\n' +
        'em9uIFJEUyBldS13ZXN0LTIgMjAxOSBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEP\\n' +
        'ADCCAQoCggEBALGiwqjiF7xIjT0Sx7zB3764K2T2a1DHnAxEOr+/EIftWKxWzT3u\\n' +
        'PFwS2eEZcnKqSdRQ+vRzonLBeNLO4z8aLjQnNbkizZMBuXGm4BqRm1Kgq3nlLDQn\\n' +
        '7YqdijOq54SpShvR/8zsO4sgMDMmHIYAJJOJqBdaus2smRt0NobIKc0liy7759KB\\n' +
        '6kmQ47Gg+kfIwxrQA5zlvPLeQImxSoPi9LdbRoKvu7Iot7SOa+jGhVBh3VdqndJX\\n' +
        '7tm/saj4NE375csmMETFLAOXjat7zViMRwVorX4V6AzEg1vkzxXpA9N7qywWIT5Y\\n' +
        'fYaq5M8i6vvLg0CzrH9fHORtnkdjdu1y+0MCAwEAAaNmMGQwDgYDVR0PAQH/BAQD\\n' +
        'AgEGMBIGA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFFOhOx1yt3Z7mvGB9jBv\\n' +
        '2ymdZwiOMB8GA1UdIwQYMBaAFHNfYNi8ywOY9CsXNC42WqZg/7wfMA0GCSqGSIb3\\n' +
        'DQEBCwUAA4IBAQBehqY36UGDvPVU9+vtaYGr38dBbp+LzkjZzHwKT1XJSSUc2wqM\\n' +
        'hnCIQKilonrTIvP1vmkQi8qHPvDRtBZKqvz/AErW/ZwQdZzqYNFd+BmOXaeZWV0Q\\n' +
        'oHtDzXmcwtP8aUQpxN0e1xkWb1E80qoy+0uuRqb/50b/R4Q5qqSfJhkn6z8nwB10\\n' +
        '7RjLtJPrK8igxdpr3tGUzfAOyiPrIDncY7UJaL84GFp7WWAkH0WG3H8Y8DRcRXOU\\n' +
        'mqDxDLUP3rNuow3jnGxiUY+gGX5OqaZg4f4P6QzOSmeQYs6nLpH0PiN00+oS1BbD\\n' +
        'bpWdZEttILPI+vAYkU4QuBKKDjJL6HbSd+cn\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIECDCCAvCgAwIBAgIDAIVCMA0GCSqGSIb3DQEBCwUAMIGPMQswCQYDVQQGEwJV\\n' +
        'UzEQMA4GA1UEBwwHU2VhdHRsZTETMBEGA1UECAwKV2FzaGluZ3RvbjEiMCAGA1UE\\n' +
        'CgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJE\\n' +
        'UzEgMB4GA1UEAwwXQW1hem9uIFJEUyBSb290IDIwMTkgQ0EwHhcNMTkwOTEzMTcw\\n' +
        'NjQxWhcNMjQwODIyMTcwODUwWjCBlDELMAkGA1UEBhMCVVMxEzARBgNVBAgMCldh\\n' +
        'c2hpbmd0b24xEDAOBgNVBAcMB1NlYXR0bGUxIjAgBgNVBAoMGUFtYXpvbiBXZWIg\\n' +
        'U2VydmljZXMsIEluYy4xEzARBgNVBAsMCkFtYXpvbiBSRFMxJTAjBgNVBAMMHEFt\\n' +
        'YXpvbiBSRFMgdXMtZWFzdC0yIDIwMTkgQ0EwggEiMA0GCSqGSIb3DQEBAQUAA4IB\\n' +
        'DwAwggEKAoIBAQDE+T2xYjUbxOp+pv+gRA3FO24+1zCWgXTDF1DHrh1lsPg5k7ht\\n' +
        '2KPYzNc+Vg4E+jgPiW0BQnA6jStX5EqVh8BU60zELlxMNvpg4KumniMCZ3krtMUC\\n' +
        'au1NF9rM7HBh+O+DYMBLK5eSIVt6lZosOb7bCi3V6wMLA8YqWSWqabkxwN4w0vXI\\n' +
        '8lu5uXXFRemHnlNf+yA/4YtN4uaAyd0ami9+klwdkZfkrDOaiy59haOeBGL8EB/c\\n' +
        'dbJJlguHH5CpCscs3RKtOOjEonXnKXldxarFdkMzi+aIIjQ8GyUOSAXHtQHb3gZ4\\n' +
        'nS6Ey0CMlwkB8vUObZU9fnjKJcL5QCQqOfwvAgMBAAGjZjBkMA4GA1UdDwEB/wQE\\n' +
        'AwIBBjASBgNVHRMBAf8ECDAGAQH/AgEAMB0GA1UdDgQWBBQUPuRHohPxx4VjykmH\\n' +
        '6usGrLL1ETAfBgNVHSMEGDAWgBRzX2DYvMsDmPQrFzQuNlqmYP+8HzANBgkqhkiG\\n' +
        '9w0BAQsFAAOCAQEAUdR9Vb3y33Yj6X6KGtuthZ08SwjImVQPtknzpajNE5jOJAh8\\n' +
        'quvQnU9nlnMO85fVDU1Dz3lLHGJ/YG1pt1Cqq2QQ200JcWCvBRgdvH6MjHoDQpqZ\\n' +
        'HvQ3vLgOGqCLNQKFuet9BdpsHzsctKvCVaeBqbGpeCtt3Hh/26tgx0rorPLw90A2\\n' +
        'V8QSkZJjlcKkLa58N5CMM8Xz8KLWg3MZeT4DmlUXVCukqK2RGuP2L+aME8dOxqNv\\n' +
        'OnOz1zrL5mR2iJoDpk8+VE/eBDmJX40IJk6jBjWoxAO/RXq+vBozuF5YHN1ujE92\\n' +
        'tO8HItgTp37XT8bJBAiAnt5mxw+NLSqtxk2QdQ==\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIEDDCCAvSgAwIBAgICY4kwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\\n' +
        'MRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\\n' +
        'DBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\\n' +
        'MSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MTMyMDEx\\n' +
        'NDJaFw0yNDA4MjIxNzA4NTBaMIGZMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\\n' +
        'aGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\\n' +
        'ZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEqMCgGA1UEAwwhQW1h\\n' +
        'em9uIFJEUyBhcC1zb3V0aGVhc3QtMSAyMDE5IENBMIIBIjANBgkqhkiG9w0BAQEF\\n' +
        'AAOCAQ8AMIIBCgKCAQEAr5u9OuLL/OF/fBNUX2kINJLzFl4DnmrhnLuSeSnBPgbb\\n' +
        'qddjf5EFFJBfv7IYiIWEFPDbDG5hoBwgMup5bZDbas+ZTJTotnnxVJTQ6wlhTmns\\n' +
        'eHECcg2pqGIKGrxZfbQhlj08/4nNAPvyYCTS0bEcmQ1emuDPyvJBYDDLDU6AbCB5\\n' +
        '6Z7YKFQPTiCBblvvNzchjLWF9IpkqiTsPHiEt21sAdABxj9ityStV3ja/W9BfgxH\\n' +
        'wzABSTAQT6FbDwmQMo7dcFOPRX+hewQSic2Rn1XYjmNYzgEHisdUsH7eeXREAcTw\\n' +
        '61TRvaLH8AiOWBnTEJXPAe6wYfrcSd1pD0MXpoB62wIDAQABo2YwZDAOBgNVHQ8B\\n' +
        'Af8EBAMCAQYwEgYDVR0TAQH/BAgwBgEB/wIBADAdBgNVHQ4EFgQUytwMiomQOgX5\\n' +
        'Ichd+2lDWRUhkikwHwYDVR0jBBgwFoAUc19g2LzLA5j0Kxc0LjZapmD/vB8wDQYJ\\n' +
        'KoZIhvcNAQELBQADggEBACf6lRDpfCD7BFRqiWM45hqIzffIaysmVfr+Jr+fBTjP\\n' +
        'uYe/ba1omSrNGG23bOcT9LJ8hkQJ9d+FxUwYyICQNWOy6ejicm4z0C3VhphbTPqj\\n' +
        'yjpt9nG56IAcV8BcRJh4o/2IfLNzC/dVuYJV8wj7XzwlvjysenwdrJCoLadkTr1h\\n' +
        'eIdG6Le07sB9IxrGJL9e04afk37h7c8ESGSE4E+oS4JQEi3ATq8ne1B9DQ9SasXi\\n' +
        'IRmhNAaISDzOPdyLXi9N9V9Lwe/DHcja7hgLGYx3UqfjhLhOKwp8HtoZORixAmOI\\n' +
        'HfILgNmwyugAbuZoCazSKKBhQ0wgO0WZ66ZKTMG8Oho=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIEBzCCAu+gAwIBAgICUYkwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\\n' +
        'MRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\\n' +
        'DBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\\n' +
        'MSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MTYxODIx\\n' +
        'MTVaFw0yNDA4MjIxNzA4NTBaMIGUMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\\n' +
        'aGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\\n' +
        'ZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzElMCMGA1UEAwwcQW1h\\n' +
        'em9uIFJEUyB1cy13ZXN0LTIgMjAxOSBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEP\\n' +
        'ADCCAQoCggEBANCEZBZyu6yJQFZBJmSUZfSZd3Ui2gitczMKC4FLr0QzkbxY+cLa\\n' +
        'uVONIOrPt4Rwi+3h/UdnUg917xao3S53XDf1TDMFEYp4U8EFPXqCn/GXBIWlU86P\\n' +
        'PvBN+gzw3nS+aco7WXb+woTouvFVkk8FGU7J532llW8o/9ydQyDIMtdIkKTuMfho\\n' +
        'OiNHSaNc+QXQ32TgvM9A/6q7ksUoNXGCP8hDOkSZ/YOLiI5TcdLh/aWj00ziL5bj\\n' +
        'pvytiMZkilnc9dLY9QhRNr0vGqL0xjmWdoEXz9/OwjmCihHqJq+20MJPsvFm7D6a\\n' +
        '2NKybR9U+ddrjb8/iyLOjURUZnj5O+2+OPcCAwEAAaNmMGQwDgYDVR0PAQH/BAQD\\n' +
        'AgEGMBIGA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFEBxMBdv81xuzqcK5TVu\\n' +
        'pHj+Aor8MB8GA1UdIwQYMBaAFHNfYNi8ywOY9CsXNC42WqZg/7wfMA0GCSqGSIb3\\n' +
        'DQEBCwUAA4IBAQBZkfiVqGoJjBI37aTlLOSjLcjI75L5wBrwO39q+B4cwcmpj58P\\n' +
        '3sivv+jhYfAGEbQnGRzjuFoyPzWnZ1DesRExX+wrmHsLLQbF2kVjLZhEJMHF9eB7\\n' +
        'GZlTPdTzHErcnuXkwA/OqyXMpj9aghcQFuhCNguEfnROY9sAoK2PTfnTz9NJHL+Q\\n' +
        'UpDLEJEUfc0GZMVWYhahc0x38ZnSY2SKacIPECQrTI0KpqZv/P+ijCEcMD9xmYEb\\n' +
        'jL4en+XKS1uJpw5fIU5Sj0MxhdGstH6S84iAE5J3GM3XHklGSFwwqPYvuTXvANH6\\n' +
        'uboynxRgSae59jIlAK6Jrr6GWMwQRbgcaAlW\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIEDDCCAvSgAwIBAgICEkYwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\\n' +
        'MRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\\n' +
        'DBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\\n' +
        'MSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MTYxOTUz\\n' +
        'NDdaFw0yNDA4MjIxNzA4NTBaMIGZMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\\n' +
        'aGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\\n' +
        'ZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEqMCgGA1UEAwwhQW1h\\n' +
        'em9uIFJEUyBhcC1zb3V0aGVhc3QtMiAyMDE5IENBMIIBIjANBgkqhkiG9w0BAQEF\\n' +
        'AAOCAQ8AMIIBCgKCAQEAufodI2Flker8q7PXZG0P0vmFSlhQDw907A6eJuF/WeMo\\n' +
        'GHnll3b4S6nC3oRS3nGeRMHbyU2KKXDwXNb3Mheu+ox+n5eb/BJ17eoj9HbQR1cd\\n' +
        'gEkIciiAltf8gpMMQH4anP7TD+HNFlZnP7ii3geEJB2GGXSxgSWvUzH4etL67Zmn\\n' +
        'TpGDWQMB0T8lK2ziLCMF4XAC/8xDELN/buHCNuhDpxpPebhct0T+f6Arzsiswt2j\\n' +
        '7OeNeLLZwIZvVwAKF7zUFjC6m7/VmTQC8nidVY559D6l0UhhU0Co/txgq3HVsMOH\\n' +
        'PbxmQUwJEKAzQXoIi+4uZzHFZrvov/nDTNJUhC6DqwIDAQABo2YwZDAOBgNVHQ8B\\n' +
        'Af8EBAMCAQYwEgYDVR0TAQH/BAgwBgEB/wIBADAdBgNVHQ4EFgQUwaZpaCme+EiV\\n' +
        'M5gcjeHZSTgOn4owHwYDVR0jBBgwFoAUc19g2LzLA5j0Kxc0LjZapmD/vB8wDQYJ\\n' +
        'KoZIhvcNAQELBQADggEBAAR6a2meCZuXO2TF9bGqKGtZmaah4pH2ETcEVUjkvXVz\\n' +
        'sl+ZKbYjrun+VkcMGGKLUjS812e7eDF726ptoku9/PZZIxlJB0isC/0OyixI8N4M\\n' +
        'NsEyvp52XN9QundTjkl362bomPnHAApeU0mRbMDRR2JdT70u6yAzGLGsUwMkoNnw\\n' +
        '1VR4XKhXHYGWo7KMvFrZ1KcjWhubxLHxZWXRulPVtGmyWg/MvE6KF+2XMLhojhUL\\n' +
        '+9jB3Fpn53s6KMx5tVq1x8PukHmowcZuAF8k+W4gk8Y68wIwynrdZrKRyRv6CVtR\\n' +
        'FZ8DeJgoNZT3y/GT254VqMxxfuy2Ccb/RInd16tEvVk=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIEDDCCAvSgAwIBAgICOYIwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\\n' +
        'MRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\\n' +
        'DBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\\n' +
        'MSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MTcyMDA1\\n' +
        'MjlaFw0yNDA4MjIxNzA4NTBaMIGZMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\\n' +
        'aGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\\n' +
        'ZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEqMCgGA1UEAwwhQW1h\\n' +
        'em9uIFJEUyBhcC1ub3J0aGVhc3QtMyAyMDE5IENBMIIBIjANBgkqhkiG9w0BAQEF\\n' +
        'AAOCAQ8AMIIBCgKCAQEA4dMak8W+XW8y/2F6nRiytFiA4XLwePadqWebGtlIgyCS\\n' +
        'kbug8Jv5w7nlMkuxOxoUeD4WhI6A9EkAn3r0REM/2f0aYnd2KPxeqS2MrtdxxHw1\\n' +
        'xoOxk2x0piNSlOz6yog1idsKR5Wurf94fvM9FdTrMYPPrDabbGqiBMsZZmoHLvA3\\n' +
        'Z+57HEV2tU0Ei3vWeGIqnNjIekS+E06KhASxrkNU5vi611UsnYZlSi0VtJsH4UGV\\n' +
        'LhnHl53aZL0YFO5mn/fzuNG/51qgk/6EFMMhaWInXX49Dia9FnnuWXwVwi6uX1Wn\\n' +
        '7kjoHi5VtmC8ZlGEHroxX2DxEr6bhJTEpcLMnoQMqwIDAQABo2YwZDAOBgNVHQ8B\\n' +
        'Af8EBAMCAQYwEgYDVR0TAQH/BAgwBgEB/wIBADAdBgNVHQ4EFgQUsUI5Cb3SWB8+\\n' +
        'gv1YLN/ABPMdxSAwHwYDVR0jBBgwFoAUc19g2LzLA5j0Kxc0LjZapmD/vB8wDQYJ\\n' +
        'KoZIhvcNAQELBQADggEBAJAF3E9PM1uzVL8YNdzb6fwJrxxqI2shvaMVmC1mXS+w\\n' +
        'G0zh4v2hBZOf91l1EO0rwFD7+fxoI6hzQfMxIczh875T6vUXePKVOCOKI5wCrDad\\n' +
        'zQbVqbFbdhsBjF4aUilOdtw2qjjs9JwPuB0VXN4/jY7m21oKEOcnpe36+7OiSPjN\\n' +
        'xngYewCXKrSRqoj3mw+0w/+exYj3Wsush7uFssX18av78G+ehKPIVDXptOCP/N7W\\n' +
        '8iKVNeQ2QGTnu2fzWsGUSvMGyM7yqT+h1ILaT//yQS8er511aHMLc142bD4D9VSy\\n' +
        'DgactwPDTShK/PXqhvNey9v/sKXm4XatZvwcc8KYlW4=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIEDDCCAvSgAwIBAgICcEUwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\\n' +
        'MRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\\n' +
        'DBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\\n' +
        'MSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MTgxNjU2\\n' +
        'MjBaFw0yNDA4MjIxNzA4NTBaMIGZMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\\n' +
        'aGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\\n' +
        'ZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzEqMCgGA1UEAwwhQW1h\\n' +
        'em9uIFJEUyBhcC1ub3J0aGVhc3QtMSAyMDE5IENBMIIBIjANBgkqhkiG9w0BAQEF\\n' +
        'AAOCAQ8AMIIBCgKCAQEAndtkldmHtk4TVQAyqhAvtEHSMb6pLhyKrIFved1WO3S7\\n' +
        '+I+bWwv9b2W/ljJxLq9kdT43bhvzonNtI4a1LAohS6bqyirmk8sFfsWT3akb+4Sx\\n' +
        '1sjc8Ovc9eqIWJCrUiSvv7+cS7ZTA9AgM1PxvHcsqrcUXiK3Jd/Dax9jdZE1e15s\\n' +
        'BEhb2OEPE+tClFZ+soj8h8Pl2Clo5OAppEzYI4LmFKtp1X/BOf62k4jviXuCSst3\\n' +
        'UnRJzE/CXtjmN6oZySVWSe0rQYuyqRl6//9nK40cfGKyxVnimB8XrrcxUN743Vud\\n' +
        'QQVU0Esm8OVTX013mXWQXJHP2c0aKkog8LOga0vobQIDAQABo2YwZDAOBgNVHQ8B\\n' +
        'Af8EBAMCAQYwEgYDVR0TAQH/BAgwBgEB/wIBADAdBgNVHQ4EFgQULmoOS1mFSjj+\\n' +
        'snUPx4DgS3SkLFYwHwYDVR0jBBgwFoAUc19g2LzLA5j0Kxc0LjZapmD/vB8wDQYJ\\n' +
        'KoZIhvcNAQELBQADggEBAAkVL2P1M2/G9GM3DANVAqYOwmX0Xk58YBHQu6iiQg4j\\n' +
        'b4Ky/qsZIsgT7YBsZA4AOcPKQFgGTWhe9pvhmXqoN3RYltN8Vn7TbUm/ZVDoMsrM\\n' +
        'gwv0+TKxW1/u7s8cXYfHPiTzVSJuOogHx99kBW6b2f99GbP7O1Sv3sLq4j6lVvBX\\n' +
        'Fiacf5LAWC925nvlTzLlBgIc3O9xDtFeAGtZcEtxZJ4fnGXiqEnN4539+nqzIyYq\\n' +
        'nvlgCzyvcfRAxwltrJHuuRu6Maw5AGcd2Y0saMhqOVq9KYKFKuD/927BTrbd2JVf\\n' +
        '2sGWyuPZPCk3gq+5pCjbD0c6DkhcMGI6WwxvM5V/zSM=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIEBzCCAu+gAwIBAgICJDQwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\\n' +
        'MRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\\n' +
        'DBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\\n' +
        'MSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MTgxNzAz\\n' +
        'MTVaFw0yNDA4MjIxNzA4NTBaMIGUMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\\n' +
        'aGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\\n' +
        'ZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzElMCMGA1UEAwwcQW1h\\n' +
        'em9uIFJEUyBldS13ZXN0LTMgMjAxOSBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEP\\n' +
        'ADCCAQoCggEBAL9bL7KE0n02DLVtlZ2PL+g/BuHpMYFq2JnE2RgompGurDIZdjmh\\n' +
        '1pxfL3nT+QIVMubuAOy8InRfkRxfpxyjKYdfLJTPJG+jDVL+wDcPpACFVqoV7Prg\\n' +
        'pVYEV0lc5aoYw4bSeYFhdzgim6F8iyjoPnObjll9mo4XsHzSoqJLCd0QC+VG9Fw2\\n' +
        'q+GDRZrLRmVM2oNGDRbGpGIFg77aRxRapFZa8SnUgs2AqzuzKiprVH5i0S0M6dWr\\n' +
        'i+kk5epmTtkiDHceX+dP/0R1NcnkCPoQ9TglyXyPdUdTPPRfKCq12dftqll+u4mV\\n' +
        'ARdN6WFjovxax8EAP2OAUTi1afY+1JFMj+sCAwEAAaNmMGQwDgYDVR0PAQH/BAQD\\n' +
        'AgEGMBIGA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFLfhrbrO5exkCVgxW0x3\\n' +
        'Y2mAi8lNMB8GA1UdIwQYMBaAFHNfYNi8ywOY9CsXNC42WqZg/7wfMA0GCSqGSIb3\\n' +
        'DQEBCwUAA4IBAQAigQ5VBNGyw+OZFXwxeJEAUYaXVoP/qrhTOJ6mCE2DXUVEoJeV\\n' +
        'SxScy/TlFA9tJXqmit8JH8VQ/xDL4ubBfeMFAIAo4WzNWDVoeVMqphVEcDWBHsI1\\n' +
        'AETWzfsapRS9yQekOMmxg63d/nV8xewIl8aNVTHdHYXMqhhik47VrmaVEok1UQb3\\n' +
        'O971RadLXIEbVd9tjY5bMEHm89JsZDnDEw1hQXBb67Elu64OOxoKaHBgUH8AZn/2\\n' +
        'zFsL1ynNUjOhCSAA15pgd1vjwc0YsBbAEBPcHBWYBEyME6NLNarjOzBl4FMtATSF\\n' +
        'wWCKRGkvqN8oxYhwR2jf2rR5Mu4DWkK5Q8Ep\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIEBzCCAu+gAwIBAgICJVUwDQYJKoZIhvcNAQELBQAwgY8xCzAJBgNVBAYTAlVT\\n' +
        'MRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\\n' +
        'DBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\\n' +
        'MSAwHgYDVQQDDBdBbWF6b24gUkRTIFJvb3QgMjAxOSBDQTAeFw0xOTA5MTkxODE2\\n' +
        'NTNaFw0yNDA4MjIxNzA4NTBaMIGUMQswCQYDVQQGEwJVUzETMBEGA1UECAwKV2Fz\\n' +
        'aGluZ3RvbjEQMA4GA1UEBwwHU2VhdHRsZTEiMCAGA1UECgwZQW1hem9uIFdlYiBT\\n' +
        'ZXJ2aWNlcywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzElMCMGA1UEAwwcQW1h\\n' +
        'em9uIFJEUyB1cy1lYXN0LTEgMjAxOSBDQTCCASIwDQYJKoZIhvcNAQEBBQADggEP\\n' +
        'ADCCAQoCggEBAM3i/k2u6cqbMdcISGRvh+m+L0yaSIoOXjtpNEoIftAipTUYoMhL\\n' +
        'InXGlQBVA4shkekxp1N7HXe1Y/iMaPEyb3n+16pf3vdjKl7kaSkIhjdUz3oVUEYt\\n' +
        'i8Z/XeJJ9H2aEGuiZh3kHixQcZczn8cg3dA9aeeyLSEnTkl/npzLf//669Ammyhs\\n' +
        'XcAo58yvT0D4E0D/EEHf2N7HRX7j/TlyWvw/39SW0usiCrHPKDLxByLojxLdHzso\\n' +
        'QIp/S04m+eWn6rmD+uUiRteN1hI5ncQiA3wo4G37mHnUEKo6TtTUh+sd/ku6a8HK\\n' +
        'glMBcgqudDI90s1OpuIAWmuWpY//8xEG2YECAwEAAaNmMGQwDgYDVR0PAQH/BAQD\\n' +
        'AgEGMBIGA1UdEwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFPqhoWZcrVY9mU7tuemR\\n' +
        'RBnQIj1jMB8GA1UdIwQYMBaAFHNfYNi8ywOY9CsXNC42WqZg/7wfMA0GCSqGSIb3\\n' +
        'DQEBCwUAA4IBAQB6zOLZ+YINEs72heHIWlPZ8c6WY8MDU+Be5w1M+BK2kpcVhCUK\\n' +
        'PJO4nMXpgamEX8DIiaO7emsunwJzMSvavSPRnxXXTKIc0i/g1EbiDjnYX9d85DkC\\n' +
        'E1LaAUCmCZBVi9fIe0H2r9whIh4uLWZA41oMnJx/MOmo3XyMfQoWcqaSFlMqfZM4\\n' +
        '0rNoB/tdHLNuV4eIdaw2mlHxdWDtF4oH+HFm+2cVBUVC1jXKrFv/euRVtsTT+A6i\\n' +
        'h2XBHKxQ1Y4HgAn0jACP2QSPEmuoQEIa57bEKEcZsBR8SDY6ZdTd2HLRIApcCOSF\\n' +
        'MRM8CKLeF658I0XgF8D5EsYoKPsA+74Z+jDH\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIEETCCAvmgAwIBAgICEAAwDQYJKoZIhvcNAQELBQAwgZQxCzAJBgNVBAYTAlVT\\n' +
        'MRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\\n' +
        'DBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\\n' +
        'MSUwIwYDVQQDDBxBbWF6b24gUkRTIEJldGEgUm9vdCAyMDE5IENBMB4XDTE5MDgy\\n' +
        'MDE3MTAwN1oXDTI0MDgxOTE3MzgyNlowgZkxCzAJBgNVBAYTAlVTMRMwEQYDVQQI\\n' +
        'DApXYXNoaW5ndG9uMRAwDgYDVQQHDAdTZWF0dGxlMSIwIAYDVQQKDBlBbWF6b24g\\n' +
        'V2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRTMSowKAYDVQQD\\n' +
        'DCFBbWF6b24gUkRTIEJldGEgdXMtZWFzdC0xIDIwMTkgQ0EwggEiMA0GCSqGSIb3\\n' +
        'DQEBAQUAA4IBDwAwggEKAoIBAQDTNCOlotQcLP8TP82U2+nk0bExVuuMVOgFeVMx\\n' +
        'vbUHZQeIj9ikjk+jm6eTDnnkhoZcmJiJgRy+5Jt69QcRbb3y3SAU7VoHgtraVbxF\\n' +
        'QDh7JEHI9tqEEVOA5OvRrDRcyeEYBoTDgh76ROco2lR+/9uCvGtHVrMCtG7BP7ZB\\n' +
        'sSVNAr1IIRZZqKLv2skKT/7mzZR2ivcw9UeBBTUf8xsfiYVBvMGoEsXEycjYdf6w\\n' +
        'WV+7XS7teNOc9UgsFNN+9AhIBc1jvee5E//72/4F8pAttAg/+mmPUyIKtekNJ4gj\\n' +
        'OAR2VAzGx1ybzWPwIgOudZFHXFduxvq4f1hIRPH0KbQ/gkRrAgMBAAGjZjBkMA4G\\n' +
        'A1UdDwEB/wQEAwIBBjASBgNVHRMBAf8ECDAGAQH/AgEAMB0GA1UdDgQWBBTkvpCD\\n' +
        '6C43rar9TtJoXr7q8dkrrjAfBgNVHSMEGDAWgBStoQwVpbGx87fxB3dEGDqKKnBT\\n' +
        '4TANBgkqhkiG9w0BAQsFAAOCAQEAJd9fOSkwB3uVdsS+puj6gCER8jqmhd3g/J5V\\n' +
        'Zjk9cKS8H0e8pq/tMxeJ8kpurPAzUk5RkCspGt2l0BSwmf3ahr8aJRviMX6AuW3/\\n' +
        'g8aKplTvq/WMNGKLXONa3Sq8591J+ce8gtOX/1rDKmFI4wQ/gUzOSYiT991m7QKS\\n' +
        'Fr6HMgFuz7RNJbb3Fy5cnurh8eYWA7mMv7laiLwTNsaro5qsqErD5uXuot6o9beT\\n' +
        'a+GiKinEur35tNxAr47ax4IRubuIzyfCrezjfKc5raVV2NURJDyKP0m0CCaffAxE\\n' +
        'qn2dNfYc3v1D8ypg3XjHlOzRo32RB04o8ALHMD9LSwsYDLpMag==\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIEFzCCAv+gAwIBAgICFSUwDQYJKoZIhvcNAQELBQAwgZcxCzAJBgNVBAYTAlVT\\n' +
        'MRAwDgYDVQQHDAdTZWF0dGxlMRMwEQYDVQQIDApXYXNoaW5ndG9uMSIwIAYDVQQK\\n' +
        'DBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRT\\n' +
        'MSgwJgYDVQQDDB9BbWF6b24gUkRTIFByZXZpZXcgUm9vdCAyMDE5IENBMB4XDTE5\\n' +
        'MDgyMTIyMzk0N1oXDTI0MDgyMTIyMjk0OVowgZwxCzAJBgNVBAYTAlVTMRMwEQYD\\n' +
        'VQQIDApXYXNoaW5ndG9uMRAwDgYDVQQHDAdTZWF0dGxlMSIwIAYDVQQKDBlBbWF6\\n' +
        'b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYDVQQLDApBbWF6b24gUkRTMS0wKwYD\\n' +
        'VQQDDCRBbWF6b24gUkRTIFByZXZpZXcgdXMtZWFzdC0yIDIwMTkgQ0EwggEiMA0G\\n' +
        'CSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQD0dB/U7qRnSf05wOi7m10Pa2uPMTJv\\n' +
        'r6U/3Y17a5prq5Zr4++CnSUYarG51YuIf355dKs+7Lpzs782PIwCmLpzAHKWzix6\\n' +
        'pOaTQ+WZ0+vUMTxyqgqWbsBgSCyP7pVBiyqnmLC/L4az9XnscrbAX4pNaoJxsuQe\\n' +
        'mzBo6yofjQaAzCX69DuqxFkVTRQnVy7LCFkVaZtjNAftnAHJjVgQw7lIhdGZp9q9\\n' +
        'IafRt2gteihYfpn+EAQ/t/E4MnhrYs4CPLfS7BaYXBycEKC5Muj1l4GijNNQ0Efo\\n' +
        'xG8LSZz7SNgUvfVwiNTaqfLP3AtEAWiqxyMyh3VO+1HpCjT7uNBFtmF3AgMBAAGj\\n' +
        'ZjBkMA4GA1UdDwEB/wQEAwIBBjASBgNVHRMBAf8ECDAGAQH/AgEAMB0GA1UdDgQW\\n' +
        'BBQtinkdrj+0B2+qdXngV2tgHnPIujAfBgNVHSMEGDAWgBRp0xqULkNh/w2ZVzEI\\n' +
        'o2RIY7O03TANBgkqhkiG9w0BAQsFAAOCAQEAtJdqbCxDeMc8VN1/RzCabw9BIL/z\\n' +
        '73Auh8eFTww/sup26yn8NWUkfbckeDYr1BrXa+rPyLfHpg06kwR8rBKyrs5mHwJx\\n' +
        'bvOzXD/5WTdgreB+2Fb7mXNvWhenYuji1MF+q1R2DXV3I05zWHteKX6Dajmx+Uuq\\n' +
        'Yq78oaCBSV48hMxWlp8fm40ANCL1+gzQ122xweMFN09FmNYFhwuW+Ao+Vv90ZfQG\\n' +
        'PYwTvN4n/gegw2TYcifGZC2PNX74q3DH03DXe5fvNgRW5plgz/7f+9mS+YHd5qa9\\n' +
        'tYTPUvoRbi169ou6jicsMKUKPORHWhiTpSCWR1FMMIbsAcsyrvtIsuaGCQ==\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIID/jCCAuagAwIBAgIQdOCSuA9psBpQd8EI368/0DANBgkqhkiG9w0BAQsFADCB\\n' +
        'lzELMAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIElu\\n' +
        'Yy4xEzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTAwLgYDVQQDDCdB\\n' +
        'bWF6b24gUkRTIHNhLWVhc3QtMSBSb290IENBIFJTQTIwNDggRzExEDAOBgNVBAcM\\n' +
        'B1NlYXR0bGUwIBcNMjEwNTE5MTgwNjI2WhgPMjA2MTA1MTkxOTA2MjZaMIGXMQsw\\n' +
        'CQYDVQQGEwJVUzEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjET\\n' +
        'MBEGA1UECwwKQW1hem9uIFJEUzELMAkGA1UECAwCV0ExMDAuBgNVBAMMJ0FtYXpv\\n' +
        'biBSRFMgc2EtZWFzdC0xIFJvb3QgQ0EgUlNBMjA0OCBHMTEQMA4GA1UEBwwHU2Vh\\n' +
        'dHRsZTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAN6ftL6w8v3dB2yW\\n' +
        'LjCxSP1D7ZsOTeLZOSCz1Zv0Gkd0XLhil5MdHOHBvwH/DrXqFU2oGzCRuAy+aZis\\n' +
        'DardJU6ChyIQIciXCO37f0K23edhtpXuruTLLwUwzeEPdcnLPCX+sWEn9Y5FPnVm\\n' +
        'pCd6J8edH2IfSGoa9LdErkpuESXdidLym/w0tWG/O2By4TabkNSmpdrCL00cqI+c\\n' +
        'prA8Bx1jX8/9sY0gpAovtuFaRN+Ivg3PAnWuhqiSYyQ5nC2qDparOWuDiOhpY56E\\n' +
        'EgmTvjwqMMjNtExfYx6Rv2Ndu50TriiNKEZBzEtkekwXInTupmYTvc7U83P/959V\\n' +
        'UiQ+WSMCAwEAAaNCMEAwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQU4uYHdH0+\\n' +
        'bUeh81Eq2l5/RJbW+vswDgYDVR0PAQH/BAQDAgGGMA0GCSqGSIb3DQEBCwUAA4IB\\n' +
        'AQBhxcExJ+w74bvDknrPZDRgTeMLYgbVJjx2ExH7/Ac5FZZWcpUpFwWMIJJxtewI\\n' +
        'AnhryzM3tQYYd4CG9O+Iu0+h/VVfW7e4O3joWVkxNMb820kQSEwvZfA78aItGwOY\\n' +
        'WSaFNVRyloVicZRNJSyb1UL9EiJ9ldhxm4LTT0ax+4ontI7zTx6n6h8Sr6r/UOvX\\n' +
        'd9T5aUUENWeo6M9jGupHNn3BobtL7BZm2oS8wX8IVYj4tl0q5T89zDi2x0MxbsIV\\n' +
        '5ZjwqBQ5JWKv7ASGPb+z286RjPA9R2knF4lJVZrYuNV90rHvI/ECyt/JrDqeljGL\\n' +
        'BLl1W/UsvZo6ldLIpoMbbrb5\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIEBDCCAuygAwIBAgIQUfVbqapkLYpUqcLajpTJWzANBgkqhkiG9w0BAQsFADCB\\n' +
        'mjELMAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIElu\\n' +
        'Yy4xEzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTMwMQYDVQQDDCpB\\n' +
        'bWF6b24gUkRTIG1lLWNlbnRyYWwtMSBSb290IENBIFJTQTIwNDggRzExEDAOBgNV\\n' +
        'BAcMB1NlYXR0bGUwIBcNMjIwNTA2MjMyMDA5WhgPMjA2MjA1MDcwMDIwMDlaMIGa\\n' +
        'MQswCQYDVQQGEwJVUzEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5j\\n' +
        'LjETMBEGA1UECwwKQW1hem9uIFJEUzELMAkGA1UECAwCV0ExMzAxBgNVBAMMKkFt\\n' +
        'YXpvbiBSRFMgbWUtY2VudHJhbC0xIFJvb3QgQ0EgUlNBMjA0OCBHMTEQMA4GA1UE\\n' +
        'BwwHU2VhdHRsZTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAJIeovu3\\n' +
        'ewI9FVitXMQzvkh34aQ6WyI4NO3YepfJaePiv3cnyFGYHN2S1cR3UQcLWgypP5va\\n' +
        'j6bfroqwGbCbZZcb+6cyOB4ceKO9Ws1UkcaGHnNDcy5gXR7aCW2OGTUfinUuhd2d\\n' +
        '5bOGgV7JsPbpw0bwJ156+MwfOK40OLCWVbzy8B1kITs4RUPNa/ZJnvIbiMu9rdj4\\n' +
        '8y7GSFJLnKCjlOFUkNI5LcaYvI1+ybuNgphT3nuu5ZirvTswGakGUT/Q0J3dxP0J\\n' +
        'pDfg5Sj/2G4gXiaM0LppVOoU5yEwVewhQ250l0eQAqSrwPqAkdTg9ng360zqCFPE\\n' +
        'JPPcgI1tdGUgneECAwEAAaNCMEAwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQU\\n' +
        '/2AJVxWdZxc8eJgdpbwpW7b0f7IwDgYDVR0PAQH/BAQDAgGGMA0GCSqGSIb3DQEB\\n' +
        'CwUAA4IBAQBYm63jTu2qYKJ94gKnqc+oUgqmb1mTXmgmp/lXDbxonjszJDOXFbri\\n' +
        '3CCO7xB2sg9bd5YWY8sGKHaWmENj3FZpCmoefbUx++8D7Mny95Cz8R32rNcwsPTl\\n' +
        'ebpd9A/Oaw5ug6M0x/cNr0qzF8Wk9Dx+nFEimp8RYQdKvLDfNFZHjPa1itnTiD8M\\n' +
        'TorAqj+VwnUGHOYBsT/0NY12tnwXdD+ATWfpEHdOXV+kTMqFFwDyhfgRVNpTc+os\\n' +
        'ygr8SwhnSCpJPB/EYl2S7r+tgAbJOkuwUvGT4pTqrzDQEhwE7swgepnHC87zhf6l\\n' +
        'qN6mVpSnQKQLm6Ob5TeCEFgcyElsF5bH\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIICrjCCAjSgAwIBAgIRAOxu0I1QuMAhIeszB3fJIlkwCgYIKoZIzj0EAwMwgZYx\\n' +
        'CzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMu\\n' +
        'MRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTEvMC0GA1UEAwwmQW1h\\n' +
        'em9uIFJEUyB1cy13ZXN0LTIgUm9vdCBDQSBFQ0MzODQgRzExEDAOBgNVBAcMB1Nl\\n' +
        'YXR0bGUwIBcNMjEwNTI0MjIwNjU5WhgPMjEyMTA1MjQyMzA2NTlaMIGWMQswCQYD\\n' +
        'VQQGEwJVUzEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjETMBEG\\n' +
        'A1UECwwKQW1hem9uIFJEUzELMAkGA1UECAwCV0ExLzAtBgNVBAMMJkFtYXpvbiBS\\n' +
        'RFMgdXMtd2VzdC0yIFJvb3QgQ0EgRUNDMzg0IEcxMRAwDgYDVQQHDAdTZWF0dGxl\\n' +
        'MHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEz4bylRcGqqDWdP7gQIIoTHdBK6FNtKH1\\n' +
        '4SkEIXRXkYDmRvL9Bci1MuGrwuvrka5TDj4b7e+csY0llEzHpKfq6nJPFljoYYP9\\n' +
        'uqHFkv77nOpJJ633KOr8IxmeHW5RXgrZo0IwQDAPBgNVHRMBAf8EBTADAQH/MB0G\\n' +
        'A1UdDgQWBBQQikVz8wmjd9eDFRXzBIU8OseiGzAOBgNVHQ8BAf8EBAMCAYYwCgYI\\n' +
        'KoZIzj0EAwMDaAAwZQIwf06Mcrpw1O0EBLBBrp84m37NYtOkE/0Z0O+C7D41wnXi\\n' +
        'EQdn6PXUVgdD23Gj82SrAjEAklhKs+liO1PtN15yeZR1Io98nFve+lLptaLakZcH\\n' +
        '+hfFuUtCqMbaI8CdvJlKnPqT\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIGCTCCA/GgAwIBAgIRALyWMTyCebLZOGcZZQmkmfcwDQYJKoZIhvcNAQEMBQAw\\n' +
        'gZwxCzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJ\\n' +
        'bmMuMRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTE1MDMGA1UEAwws\\n' +
        'QW1hem9uIFJEUyBhcC1ub3J0aGVhc3QtMyBSb290IENBIFJTQTQwOTYgRzExEDAO\\n' +
        'BgNVBAcMB1NlYXR0bGUwIBcNMjEwNTI0MjAyODAzWhgPMjEyMTA1MjQyMTI4MDNa\\n' +
        'MIGcMQswCQYDVQQGEwJVUzEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywg\\n' +
        'SW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzELMAkGA1UECAwCV0ExNTAzBgNVBAMM\\n' +
        'LEFtYXpvbiBSRFMgYXAtbm9ydGhlYXN0LTMgUm9vdCBDQSBSU0E0MDk2IEcxMRAw\\n' +
        'DgYDVQQHDAdTZWF0dGxlMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA\\n' +
        'wGFiyDyCrGqgdn4fXG12cxKAAfVvhMea1mw5h9CVRoavkPqhzQpAitSOuMB9DeiP\\n' +
        'wQyqcsiGl/cTEau4L+AUBG8b9v26RlY48exUYBXj8CieYntOT9iNw5WtdYJa3kF/\\n' +
        'JxgI+HDMzE9cmHDs5DOO3S0uwZVyra/xE1ymfSlpOeUIOTpHRJv97CBUEpaZMUW5\\n' +
        'Sr6GruuOwFVpO5FX3A/jQlcS+UN4GjSRgDUJuqg6RRQldEZGCVCCmodbByvI2fGm\\n' +
        'reGpsPJD54KkmAX08nOR8e5hkGoHxq0m2DLD4SrOFmt65vG47qnuwplWJjtk9B3Z\\n' +
        '9wDoopwZLBOtlkPIkUllWm1P8EuHC1IKOA+wSP6XdT7cy8S77wgyHzR0ynxv7q/l\\n' +
        'vlZtH30wnNqFI0y9FeogD0TGMCHcnGqfBSicJXPy9T4fU6f0r1HwqKwPp2GArwe7\\n' +
        'dnqLTj2D7M9MyVtFjEs6gfGWXmu1y5uDrf+CszurE8Cycoma+OfjjuVQgWOCy7Nd\\n' +
        'jJswPxAroTzVfpgoxXza4ShUY10woZu0/J+HmNmqK7lh4NS75q1tz75in8uTZDkV\\n' +
        'be7GK+SEusTrRgcf3tlgPjSTWG3veNzFDF2Vn1GLJXmuZfhdlVQDBNXW4MNREExS\\n' +
        'dG57kJjICpT+r8X+si+5j51gRzkSnMYs7VHulpxfcwECAwEAAaNCMEAwDwYDVR0T\\n' +
        'AQH/BAUwAwEB/zAdBgNVHQ4EFgQU4JWOpDBmUBuWKvGPZelw87ezhL8wDgYDVR0P\\n' +
        'AQH/BAQDAgGGMA0GCSqGSIb3DQEBDAUAA4ICAQBRNLMql7itvXSEFQRAnyOjivHz\\n' +
        'l5IlWVQjAbOUr6ogZcwvK6YpxNAFW5zQr8F+fdkiypLz1kk5irx9TIpff0BWC9hQ\\n' +
        '/odMPO8Gxn8+COlSvc+dLsF2Dax3Hvz0zLeKMo+cYisJOzpdR/eKd0/AmFdkvQoM\\n' +
        'AOK9n0yYvVJU2IrSgeJBiiCarpKSeAktEVQ4rvyacQGr+QAPkkjRwm+5LHZKK43W\\n' +
        'nNnggRli9N/27qYtc5bgr3AaQEhEXMI4RxPRXCLsod0ehMGWyRRK728a+6PMMJAJ\\n' +
        'WHOU0x7LCEMPP/bvpLj3BdvSGqNor4ZtyXEbwREry1uzsgODeRRns5acPwTM6ff+\\n' +
        'CmxO2NZ0OktIUSYRmf6H/ZFlZrIhV8uWaIwEJDz71qvj7buhQ+RFDZ9CNL64C0X6\\n' +
        'mf0zJGEpddjANHaaVky+F4gYMtEy2K2Lcm4JGTdyIzUoIe+atzCnRp0QeIcuWtF+\\n' +
        's8AjDYCVFNypcMmqbRmNpITSnOoCHSRuVkY3gutVoYyMLbp8Jm9SJnCIlEWTA6Rm\\n' +
        'wADOMGZJVn5/XRTRuetVOB3KlQDjs9OO01XN5NzGSZO2KT9ngAUfh9Eqhf1iRWSP\\n' +
        'nZlRbQ2NRCuY/oJ5N59mLGxnNJSE7giEKEBRhTQ/XEPIUYAUPD5fca0arKRJwbol\\n' +
        'l9Se1Hsq0ZU5f+OZKQ==\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        '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\\n' +
        '5zT5+Bs=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        '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\\n' +
        'Hing\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIECTCCAvGgAwIBAgIRANxgyBbnxgTEOpDul2ZnC0UwDQYJKoZIhvcNAQELBQAw\\n' +
        'gZwxCzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJ\\n' +
        'bmMuMRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTE1MDMGA1UEAwws\\n' +
        'QW1hem9uIFJEUyBhcC1zb3V0aGVhc3QtMyBSb290IENBIFJTQTIwNDggRzExEDAO\\n' +
        'BgNVBAcMB1NlYXR0bGUwIBcNMjEwNjEwMTgxOTA3WhgPMjA2MTA2MTAxOTE5MDda\\n' +
        'MIGcMQswCQYDVQQGEwJVUzEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywg\\n' +
        'SW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzELMAkGA1UECAwCV0ExNTAzBgNVBAMM\\n' +
        'LEFtYXpvbiBSRFMgYXAtc291dGhlYXN0LTMgUm9vdCBDQSBSU0EyMDQ4IEcxMRAw\\n' +
        'DgYDVQQHDAdTZWF0dGxlMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA\\n' +
        'xnwSDAChrMkfk5TA4Dk8hKzStDlSlONzmd3fTG0Wqr5+x3EmFT6Ksiu/WIwEl9J2\\n' +
        'K98UI7vYyuZfCxUKb1iMPeBdVGqk0zb92GpURd+Iz/+K1ps9ZLeGBkzR8mBmAi1S\\n' +
        'OfpwKiTBzIv6E8twhEn4IUpHsdcuX/2Y78uESpJyM8O5CpkG0JaV9FNEbDkJeBUQ\\n' +
        'Ao2qqNcH4R0Qcr5pyeqA9Zto1RswgL06BQMI9dTpfwSP5VvkvcNUaLl7Zv5WzLQE\\n' +
        'JzORWePvdPzzvWEkY/3FPjxBypuYwssKaERW0fkPDmPtykktP9W/oJolKUFI6pXp\\n' +
        'y+Y6p6/AVdnQD2zZjW5FhQIDAQABo0IwQDAPBgNVHRMBAf8EBTADAQH/MB0GA1Ud\\n' +
        'DgQWBBT+jEKs96LC+/X4BZkUYUkzPfXdqTAOBgNVHQ8BAf8EBAMCAYYwDQYJKoZI\\n' +
        'hvcNAQELBQADggEBAIGQqgqcQ6XSGkmNebzR6DhadTbfDmbYeN5N0Vuzv+Tdmufb\\n' +
        'tMGjdjnYMg4B+IVnTKQb+Ox3pL9gbX6KglGK8HupobmIRtwKVth+gYYz3m0SL/Nk\\n' +
        'haWPYzOm0x3tJm8jSdufJcEob4/ATce9JwseLl76pSWdl5A4lLjnhPPKudUDfH+1\\n' +
        'BLNUi3lxpp6GkC8aWUPtupnhZuXddolTLOuA3GwTZySI44NfaFRm+o83N1jp+EwD\\n' +
        '6e94M4cTRzjUv6J3MZmSbdtQP/Tk1uz2K4bQZGP0PZC3bVpqiesdE/xr+wbu8uHr\\n' +
        'cM1JXH0AmXf1yIkTgyWzmvt0k1/vgcw5ixAqvvE=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIEATCCAumgAwIBAgIRAMhw98EQU18mIji+unM2YH8wDQYJKoZIhvcNAQELBQAw\\n' +
        'gZgxCzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJ\\n' +
        'bmMuMRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTExMC8GA1UEAwwo\\n' +
        'QW1hem9uIFJEUyBhcC1zb3V0aC0yIFJvb3QgQ0EgUlNBMjA0OCBHMTEQMA4GA1UE\\n' +
        'BwwHU2VhdHRsZTAgFw0yMjA2MDYyMTQyMjJaGA8yMDYyMDYwNjIyNDIyMlowgZgx\\n' +
        'CzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMu\\n' +
        'MRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTExMC8GA1UEAwwoQW1h\\n' +
        'em9uIFJEUyBhcC1zb3V0aC0yIFJvb3QgQ0EgUlNBMjA0OCBHMTEQMA4GA1UEBwwH\\n' +
        'U2VhdHRsZTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAIeeRoLfTm+7\\n' +
        'vqm7ZlFSx+1/CGYHyYrOOryM4/Z3dqYVHFMgWTR7V3ziO8RZ6yUanrRcWVX3PZbF\\n' +
        'AfX0KFE8OgLsXEZIX8odSrq86+/Th5eZOchB2fDBsUB7GuN2rvFBbM8lTI9ivVOU\\n' +
        'lbuTnYyb55nOXN7TpmH2bK+z5c1y9RVC5iQsNAl6IJNvSN8VCqXh31eK5MlKB4DT\\n' +
        '+Y3OivCrSGsjM+UR59uZmwuFB1h+icE+U0p9Ct3Mjq3MzSX5tQb6ElTNGlfmyGpW\\n' +
        'Kh7GQ5XU1KaKNZXoJ37H53woNSlq56bpVrKI4uv7ATpdpFubOnSLtpsKlpLdR3sy\\n' +
        'Ws245200pC8CAwEAAaNCMEAwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUp0ki\\n' +
        '6+eWvsnBjQhMxwMW5pwn7DgwDgYDVR0PAQH/BAQDAgGGMA0GCSqGSIb3DQEBCwUA\\n' +
        'A4IBAQB2V8lv0aqbYQpj/bmVv/83QfE4vOxKCJAHv7DQ35cJsTyBdF+8pBczzi3t\\n' +
        '3VNL5IUgW6WkyuUOWnE0eqAFOUVj0yTS1jSAtfl3vOOzGJZmWBbqm9BKEdu1D8O6\\n' +
        'sB8bnomwiab2tNDHPmUslpdDqdabbkWwNWzLJ97oGFZ7KNODMEPXWKWNxg33iHfS\\n' +
        '/nlmnrTVI3XgaNK9qLZiUrxu9Yz5gxi/1K+sG9/Dajd32ZxjRwDipOLiZbiXQrsd\\n' +
        'qzIMY4GcWf3g1gHL5mCTfk7dG22h/rhPyGV0svaDnsb+hOt6sv1McMN6Y3Ou0mtM\\n' +
        '/UaAXojREmJmTSCNvs2aBny3/2sy\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIICrjCCAjSgAwIBAgIRAMnRxsKLYscJV8Qv5pWbL7swCgYIKoZIzj0EAwMwgZYx\\n' +
        'CzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMu\\n' +
        'MRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTEvMC0GA1UEAwwmQW1h\\n' +
        'em9uIFJEUyBzYS1lYXN0LTEgUm9vdCBDQSBFQ0MzODQgRzExEDAOBgNVBAcMB1Nl\\n' +
        'YXR0bGUwIBcNMjEwNTE5MTgxNjAxWhgPMjEyMTA1MTkxOTE2MDFaMIGWMQswCQYD\\n' +
        'VQQGEwJVUzEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjETMBEG\\n' +
        'A1UECwwKQW1hem9uIFJEUzELMAkGA1UECAwCV0ExLzAtBgNVBAMMJkFtYXpvbiBS\\n' +
        'RFMgc2EtZWFzdC0xIFJvb3QgQ0EgRUNDMzg0IEcxMRAwDgYDVQQHDAdTZWF0dGxl\\n' +
        'MHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEjFOCZgTNVKxLKhUxffiDEvTLFhrmIqdO\\n' +
        'dKqVdgDoELEzIHWDdC+19aDPitbCYtBVHl65ITu/9pn6mMUl5hhUNtfZuc6A+Iw1\\n' +
        'sBe0v0qI3y9Q9HdQYrGgeHDh8M5P7E2ho0IwQDAPBgNVHRMBAf8EBTADAQH/MB0G\\n' +
        'A1UdDgQWBBS5L7/8M0TzoBZk39Ps7BkfTB4yJTAOBgNVHQ8BAf8EBAMCAYYwCgYI\\n' +
        'KoZIzj0EAwMDaAAwZQIwI43O0NtWKTgnVv9z0LO5UMZYgSve7GvGTwqktZYCMObE\\n' +
        'rUI4QerXM9D6JwLy09mqAjEAypfkdLyVWtaElVDUyHFkihAS1I1oUxaaDrynLNQK\\n' +
        'Ou/Ay+ns+J+GyvyDUjBpVVW1\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIF/jCCA+agAwIBAgIQR71Z8lTO5Sj+as2jB7IWXzANBgkqhkiG9w0BAQwFADCB\\n' +
        'lzELMAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIElu\\n' +
        'Yy4xEzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTAwLgYDVQQDDCdB\\n' +
        'bWF6b24gUkRTIHVzLXdlc3QtMiBSb290IENBIFJTQTQwOTYgRzExEDAOBgNVBAcM\\n' +
        'B1NlYXR0bGUwIBcNMjEwNTI0MjIwMzIwWhgPMjEyMTA1MjQyMzAzMjBaMIGXMQsw\\n' +
        'CQYDVQQGEwJVUzEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjET\\n' +
        'MBEGA1UECwwKQW1hem9uIFJEUzELMAkGA1UECAwCV0ExMDAuBgNVBAMMJ0FtYXpv\\n' +
        'biBSRFMgdXMtd2VzdC0yIFJvb3QgQ0EgUlNBNDA5NiBHMTEQMA4GA1UEBwwHU2Vh\\n' +
        'dHRsZTCCAiIwDQYJKoZIhvcNAQEBBQADggIPADCCAgoCggIBAM977bHIs1WJijrS\\n' +
        'XQMfUOhmlJjr2v0K0UjPl52sE1TJ76H8umo1yR4T7Whkd9IwBHNGKXCJtJmMr9zp\\n' +
        'fB38eLTu+5ydUAXdFuZpRMKBWwPVe37AdJRKqn5beS8HQjd3JXAgGKUNNuE92iqF\\n' +
        'qi2fIqFMpnJXWo0FIW6s2Dl2zkORd7tH0DygcRi7lgVxCsw1BJQhFJon3y+IV8/F\\n' +
        'bnbUXSNSDUnDW2EhvWSD8L+t4eiXYsozhDAzhBvojpxhPH9OB7vqFYw5qxFx+G0t\\n' +
        'lSLX5iWi1jzzc3XyGnB6WInZDVbvnvJ4BGZ+dTRpOCvsoMIn9bz4EQTvu243c7aU\\n' +
        'HbS/kvnCASNt+zk7C6lbmaq0AGNztwNj85Opn2enFciWZVnnJ/4OeefUWQxD0EPp\\n' +
        'SjEd9Cn2IHzkBZrHCg+lWZJQBKbUVS0lLIMSsLQQ6WvR38jY7D2nxM1A93xWxwpt\\n' +
        'ZtQnYRCVXH6zt2OwDAFePInWwxUjR5t/wu3XxPgpSfrmTi3WYtr1wFypAJ811e/P\\n' +
        'yBtswWUQ6BNJQvy+KnOEeGfOwmtdDFYR+GOCfvCihzrKJrxOtHIieehR5Iw3cbXG\\n' +
        'sm4pDzfMUVvDDz6C2M6PRlJhhClbatHCjik9hxFYEsAlqtVVK9pxaz9i8hOqSFQq\\n' +
        'kJSQsgWw+oM/B2CyjcSqkSQEu8RLAgMBAAGjQjBAMA8GA1UdEwEB/wQFMAMBAf8w\\n' +
        'HQYDVR0OBBYEFPmrdxpRRgu3IcaB5BTqlprcKdTsMA4GA1UdDwEB/wQEAwIBhjAN\\n' +
        'BgkqhkiG9w0BAQwFAAOCAgEAVdlxWjPvVKky3kn8ZizeM4D+EsLw9dWLau2UD/ls\\n' +
        'zwDCFoT6euagVeCknrn+YEl7g20CRYT9iaonGoMUPuMR/cdtPL1W/Rf40PSrGf9q\\n' +
        'QuxavWiHLEXOQTCtCaVZMokkvjuuLNDXyZnstgECuiZECTwhexUF4oiuhyGk9o01\\n' +
        'QMaiz4HX4lgk0ozALUvEzaNd9gWEwD2qe+rq9cQMTVq3IArUkvTIftZUaVUMzr0O\\n' +
        'ed1+zAsNa9nJhURJ/6anJPJjbQgb5qA1asFcp9UaMT1ku36U3gnR1T/BdgG2jX3X\\n' +
        'Um0UcaGNVPrH1ukInWW743pxWQb7/2sumEEMVh+jWbB18SAyLI4WIh4lkurdifzS\\n' +
        'IuTFp8TEx+MouISFhz/vJDWZ84tqoLVjkEcP6oDypq9lFoEzHDJv3V1CYcIgOusT\\n' +
        'k1jm9P7BXdTG7TYzUaTb9USb6bkqkD9EwJAOSs7DI94aE6rsSws2yAHavjAMfuMZ\\n' +
        'sDAZvkqS2Qg2Z2+CI6wUZn7mzkJXbZoqRjDvChDXEB1mIhzVXhiNW/CR5WKVDvlj\\n' +
        '9v1sdGByh2pbxcLQtVaq/5coM4ANgphoNz3pOYUPWHS+JUrIivBZ+JobjXcxr3SN\\n' +
        '9iDzcu5/FVVNbq7+KN/nvPMngT+gduEN5m+EBjm8GukJymFG0m6BENRA0QSDqZ7k\\n' +
        'zDY=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIECTCCAvGgAwIBAgIRAK5EYG3iHserxMqgg+0EFjgwDQYJKoZIhvcNAQELBQAw\\n' +
        'gZwxCzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJ\\n' +
        'bmMuMRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTE1MDMGA1UEAwws\\n' +
        'QW1hem9uIFJEUyBhcC1ub3J0aGVhc3QtMyBSb290IENBIFJTQTIwNDggRzExEDAO\\n' +
        'BgNVBAcMB1NlYXR0bGUwIBcNMjEwNTI0MjAyMzE2WhgPMjA2MTA1MjQyMTIzMTZa\\n' +
        'MIGcMQswCQYDVQQGEwJVUzEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywg\\n' +
        'SW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzELMAkGA1UECAwCV0ExNTAzBgNVBAMM\\n' +
        'LEFtYXpvbiBSRFMgYXAtbm9ydGhlYXN0LTMgUm9vdCBDQSBSU0EyMDQ4IEcxMRAw\\n' +
        'DgYDVQQHDAdTZWF0dGxlMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA\\n' +
        's1L6TtB84LGraLHVC+rGPhLBW2P0oN/91Rq3AnYwqDOuTom7agANwEjvLq7dSRG/\\n' +
        'sIfZsSV/ABTgArZ5sCmLjHFZAo8Kd45yA9byx20RcYtAG8IZl+q1Cri+s0XefzyO\\n' +
        'U6mlfXZkVe6lzjlfXBkrlE/+5ifVbJK4dqOS1t9cWIpgKqv5fbE6Qbq4LVT+5/WM\\n' +
        'Vd2BOljuBMGMzdZubqFKFq4mzTuIYfnBm7SmHlZfTdfBYPP1ScNuhpjuzw4n3NCR\\n' +
        'EdU6dQv04Q6th4r7eiOCwbWI9LkmVbvBe3ylhH63lApC7MiiPYLlB13xBubVHVhV\\n' +
        'q1NHoNTi+zA3MN9HWicRxQIDAQABo0IwQDAPBgNVHRMBAf8EBTADAQH/MB0GA1Ud\\n' +
        'DgQWBBSuxoqm0/wjNiZLvqv+JlQwsDvTPDAOBgNVHQ8BAf8EBAMCAYYwDQYJKoZI\\n' +
        'hvcNAQELBQADggEBAFfTK/j5kv90uIbM8VaFdVbr/6weKTwehafT0pAk1bfLVX+7\\n' +
        'uf8oHgYiyKTTl0DFQicXejghXTeyzwoEkWSR8c6XkhD5vYG3oESqmt/RGvvoxz11\\n' +
        'rHHy7yHYu7RIUc3VQG60c4qxXv/1mWySGwVwJrnuyNT9KZXPevu3jVaWOVHEILaK\\n' +
        'HvzQ2YEcWBPmde/zEseO2QeeGF8FL45Q1d66wqIP4nNUd2pCjeTS5SpB0MMx7yi9\\n' +
        'ki1OH1pv8tOuIdimtZ7wkdB8+JSZoaJ81b8sRrydRwJyvB88rftuI3YB4WwGuONT\\n' +
        'ZezUPsmaoK69B0RChB0ofDpAaviF9V3xOWvVZfo=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIGDzCCA/egAwIBAgIRAI0sMNG2XhaBMRN3zD7ZyoEwDQYJKoZIhvcNAQEMBQAw\\n' +
        'gZ8xCzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJ\\n' +
        'bmMuMRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTE4MDYGA1UEAwwv\\n' +
        'QW1hem9uIFJEUyBQcmV2aWV3IHVzLWVhc3QtMiBSb290IENBIFJTQTQwOTYgRzEx\\n' +
        'EDAOBgNVBAcMB1NlYXR0bGUwIBcNMjEwNTE4MjA1NzUwWhgPMjEyMTA1MTgyMTU3\\n' +
        'NTBaMIGfMQswCQYDVQQGEwJVUzEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNl\\n' +
        'cywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzELMAkGA1UECAwCV0ExODA2BgNV\\n' +
        'BAMML0FtYXpvbiBSRFMgUHJldmlldyB1cy1lYXN0LTIgUm9vdCBDQSBSU0E0MDk2\\n' +
        'IEcxMRAwDgYDVQQHDAdTZWF0dGxlMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIIC\\n' +
        'CgKCAgEAh/otSiCu4Uw3hu7OJm0PKgLsLRqBmUS6jihcrkxfN2SHmp2zuRflkweU\\n' +
        'BhMkebzL+xnNvC8okzbgPWtUxSmDnIRhE8J7bvSKFlqs/tmEdiI/LMqe/YIKcdsI\\n' +
        '20UYmvyLIjtDaJIh598SHHlF9P8DB5jD8snJfhxWY+9AZRN+YVTltgQAAgayxkWp\\n' +
        'M1BbvxpOnz4CC00rE0eqkguXIUSuobb1vKqdKIenlYBNxm2AmtgvQfpsBIQ0SB+8\\n' +
        '8Zip8Ef5rtjSw5J3s2Rq0aYvZPfCVIsKYepIboVwXtD7E9J31UkB5onLBQlaHaA6\\n' +
        'XlH4srsMmrew5d2XejQGy/lGZ1nVWNsKO0x/Az2QzY5Kjd6AlXZ8kq6H68hscA5i\\n' +
        'OMbNlXzeEQsZH0YkId3+UsEns35AAjZv4qfFoLOu8vDotWhgVNT5DfdbIWZW3ZL8\\n' +
        'qbmra3JnCHuaTwXMnc25QeKgVq7/rG00YB69tCIDwcf1P+tFJWxvaGtV0g2NthtB\\n' +
        'a+Xo09eC0L53gfZZ3hZw1pa3SIF5dIZ6RFRUQ+lFOux3Q/I3u+rYstYw7Zxc4Zeo\\n' +
        'Y8JiedpQXEAnbw2ECHix/L6mVWgiWCiDzBnNLLdbmXjJRnafNSndSfFtHCnY1SiP\\n' +
        'aCrNpzwZIJejoV1zDlWAMO+gyS28EqzuIq3WJK/TFE7acHkdKIcCAwEAAaNCMEAw\\n' +
        'DwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUrmV1YASnuudfmqAZP4sKGTvScaEw\\n' +
        'DgYDVR0PAQH/BAQDAgGGMA0GCSqGSIb3DQEBDAUAA4ICAQBGpEKeQoPvE85tN/25\\n' +
        'qHFkys9oHDl93DZ62EnOqAUKLd6v0JpCyEiop4nlrJe+4KrBYVBPyKOJDcIqE2Sp\\n' +
        '3cvgJXLhY4i46VM3Qxe8yuYF1ElqBpg3jJVj/sCQnYz9dwoAMWIJFaDWOvmU2E7M\\n' +
        'MRaKx+sPXFkIjiDA6Bv0m+VHef7aedSYIY7IDltEQHuXoqNacGrYo3I50R+fZs88\\n' +
        '/mB3e/V7967e99D6565yf9Lcjw4oQf2Hy7kl/6P9AuMz0LODnGITwh2TKk/Zo3RU\\n' +
        'Vgq25RDrT4xJK6nFHyjUF6+4cOBxVpimmFw/VP1zaXT8DN5r4HyJ9p4YuSK8ha5N\\n' +
        '2pJc/exvU8Nv2+vS/efcDZWyuEdZ7eh1IJWQZlOZKIAONfRDRTpeQHJ3zzv3QVYy\\n' +
        't78pYp/eWBHyVIfEE8p2lFKD4279WYe+Uvdb8c4Jm4TJwqkSJV8ifID7Ub80Lsir\\n' +
        'lPAU3OCVTBeVRFPXT2zpC4PB4W6KBSuj6OOcEu2y/HgWcoi7Cnjvp0vFTUhDFdus\\n' +
        'Wz3ucmJjfVsrkEO6avDKu4SwdbVHsk30TVAwPd6srIdi9U6MOeOQSOSE4EsrrS7l\\n' +
        'SVmu2QIDUVFpm8QAHYplkyWIyGkupyl3ashH9mokQhixIU/Pzir0byePxHLHrwLu\\n' +
        '1axqeKpI0F5SBUPsaVNYY2uNFg==\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIECDCCAvCgAwIBAgIQCREfzzVyDTMcNME+gWnTCTANBgkqhkiG9w0BAQsFADCB\\n' +
        'nDELMAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIElu\\n' +
        'Yy4xEzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTUwMwYDVQQDDCxB\\n' +
        'bWF6b24gUkRTIGFwLXNvdXRoZWFzdC0yIFJvb3QgQ0EgUlNBMjA0OCBHMTEQMA4G\\n' +
        'A1UEBwwHU2VhdHRsZTAgFw0yMTA1MjQyMDQyMzNaGA8yMDYxMDUyNDIxNDIzM1ow\\n' +
        'gZwxCzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJ\\n' +
        'bmMuMRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTE1MDMGA1UEAwws\\n' +
        'QW1hem9uIFJEUyBhcC1zb3V0aGVhc3QtMiBSb290IENBIFJTQTIwNDggRzExEDAO\\n' +
        'BgNVBAcMB1NlYXR0bGUwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDL\\n' +
        '1MT6br3L/4Pq87DPXtcjlXN3cnbNk2YqRAZHJayStTz8VtsFcGPJOpk14geRVeVk\\n' +
        'e9uKFHRbcyr/RM4owrJTj5X4qcEuATYZbo6ou/rW2kYzuWFZpFp7lqm0vasV4Z9F\\n' +
        'fChlhwkNks0UbM3G+psCSMNSoF19ERunj7w2c4E62LwujkeYLvKGNepjnaH10TJL\\n' +
        '2krpERd+ZQ4jIpObtRcMH++bTrvklc+ei8W9lqrVOJL+89v2piN3Ecdd389uphst\\n' +
        'qQdb1BBVXbhUrtuGHgVf7zKqN1SkCoktoWxVuOprVWhSvr7akaWeq0UmlvbEsujU\\n' +
        'vADqxGMcJFyCzxx3CkJjAgMBAAGjQjBAMA8GA1UdEwEB/wQFMAMBAf8wHQYDVR0O\\n' +
        'BBYEFFk8UJmlhoxFT3PP12PvhvazHjT4MA4GA1UdDwEB/wQEAwIBhjANBgkqhkiG\\n' +
        '9w0BAQsFAAOCAQEAfFtr2lGoWVXmWAsIo2NYre7kzL8Xb9Tx7desKxCCz5HOOvIr\\n' +
        '8JMB1YK6A7IOvQsLJQ/f1UnKRh3X3mJZjKIywfrMSh0FiDf+rjcEzXxw2dGtUem4\\n' +
        'A+WMvIA3jwxnJ90OQj5rQ8bg3iPtE6eojzo9vWQGw/Vu48Dtw1DJo9210Lq/6hze\\n' +
        'hPhNkFh8fMXNT7Q1Wz/TJqJElyAQGNOXhyGpHKeb0jHMMhsy5UNoW5hLeMS5ffao\\n' +
        'TBFWEJ1gVfxIU9QRxSh+62m46JIg+dwDlWv8Aww14KgepspRbMqDuaM2cinoejv6\\n' +
        't3dyOyHHrsOyv3ffZUKtQhQbQr+sUcL89lARsg==\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIID/zCCAuegAwIBAgIRAIJLTMpzGNxqHZ4t+c1MlCIwDQYJKoZIhvcNAQELBQAw\\n' +
        'gZcxCzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJ\\n' +
        'bmMuMRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTEwMC4GA1UEAwwn\\n' +
        'QW1hem9uIFJEUyBhcC1lYXN0LTEgUm9vdCBDQSBSU0EyMDQ4IEcxMRAwDgYDVQQH\\n' +
        'DAdTZWF0dGxlMCAXDTIxMDUyNTIxMzAzM1oYDzIwNjEwNTI1MjIzMDMzWjCBlzEL\\n' +
        'MAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4x\\n' +
        'EzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTAwLgYDVQQDDCdBbWF6\\n' +
        'b24gUkRTIGFwLWVhc3QtMSBSb290IENBIFJTQTIwNDggRzExEDAOBgNVBAcMB1Nl\\n' +
        'YXR0bGUwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDtdHut0ZhJ9Nn2\\n' +
        'MpVafFcwHdoEzx06okmmhjJsNy4l9QYVeh0UUoek0SufRNMRF4d5ibzpgZol0Y92\\n' +
        '/qKWNe0jNxhEj6sXyHsHPeYtNBPuDMzThfbvsLK8z7pBP7vVyGPGuppqW/6m4ZBB\\n' +
        'lcc9fsf7xpZ689iSgoyjiT6J5wlVgmCx8hFYc/uvcRtfd8jAHvheug7QJ3zZmIye\\n' +
        'V4htOW+fRVWnBjf40Q+7uTv790UAqs0Zboj4Yil+hER0ibG62y1g71XcCyvcVpto\\n' +
        '2/XW7Y9NCgMNqQ7fGN3wR1gjtSYPd7DO32LTzYhutyvfbpAZjsAHnoObmoljcgXI\\n' +
        'QjfBcCFpAgMBAAGjQjBAMA8GA1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYEFJI3aWLg\\n' +
        'CS5xqU5WYVaeT5s8lpO0MA4GA1UdDwEB/wQEAwIBhjANBgkqhkiG9w0BAQsFAAOC\\n' +
        'AQEAUwATpJOcGVOs3hZAgJwznWOoTzOVJKfrqBum7lvkVH1vBwxBl9CahaKj3ZOt\\n' +
        'YYp2qJzhDUWludL164DL4ZjS6eRedLRviyy5cRy0581l1MxPWTThs27z+lCC14RL\\n' +
        'PJZNVYYdl7Jy9Q5NsQ0RBINUKYlRY6OqGDySWyuMPgno2GPbE8aynMdKP+f6G/uE\\n' +
        'YHOf08gFDqTsbyfa70ztgVEJaRooVf5JJq4UQtpDvVswW2reT96qi6tXPKHN5qp3\\n' +
        '3wI0I1Mp4ePmiBKku2dwYzPfrJK/pQlvu0Gu5lKOQ65QdotwLAAoaFqrf9za1yYs\\n' +
        'INUkHLWIxDds+4OHNYcerGp5Dw==\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIGCTCCA/GgAwIBAgIRAIO6ldra1KZvNWJ0TA1ihXEwDQYJKoZIhvcNAQEMBQAw\\n' +
        'gZwxCzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJ\\n' +
        'bmMuMRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTE1MDMGA1UEAwws\\n' +
        'QW1hem9uIFJEUyBhcC1zb3V0aGVhc3QtMSBSb290IENBIFJTQTQwOTYgRzExEDAO\\n' +
        'BgNVBAcMB1NlYXR0bGUwIBcNMjEwNTIxMjE0NTA1WhgPMjEyMTA1MjEyMjQ1MDVa\\n' +
        'MIGcMQswCQYDVQQGEwJVUzEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywg\\n' +
        'SW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzELMAkGA1UECAwCV0ExNTAzBgNVBAMM\\n' +
        'LEFtYXpvbiBSRFMgYXAtc291dGhlYXN0LTEgUm9vdCBDQSBSU0E0MDk2IEcxMRAw\\n' +
        'DgYDVQQHDAdTZWF0dGxlMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA\\n' +
        'sDN52Si9pFSyZ1ruh3xAN0nVqEs960o2IK5CPu/ZfshFmzAwnx/MM8EHt/jMeZtj\\n' +
        'SM58LADAsNDL01ELpFZATjgZQ6xNAyXRXE7RiTRUvNkK7O3o2qAGbLnJq/UqF7Sw\\n' +
        'LRnB8V6hYOv+2EjVnohtGCn9SUFGZtYDjWXsLd4ML4Zpxv0a5LK7oEC7AHzbUR7R\\n' +
        'jsjkrXqSv7GE7bvhSOhMkmgxgj1F3J0b0jdQdtyyj109aO0ATUmIvf+Bzadg5AI2\\n' +
        'A9UA+TUcGeebhpHu8AP1Hf56XIlzPpaQv3ZJ4vzoLaVNUC7XKzAl1dlvCl7Klg/C\\n' +
        '84qmbD/tjZ6GHtzpLKgg7kQEV7mRoXq8X4wDX2AFPPQl2fv+Kbe+JODqm5ZjGegm\\n' +
        'uskABBi8IFv1hYx9jEulZPxC6uD/09W2+niFm3pirnlWS83BwVDTUBzF+CooUIMT\\n' +
        'jhWkIIZGDDgMJTzouBHfoSJtS1KpUZi99m2WyVs21MNKHeWAbs+zmI6TO5iiMC+T\\n' +
        'uB8spaOiHFO1573Fmeer4sy3YA6qVoqVl6jjTQqOdy3frAMbCkwH22/crV8YA+08\\n' +
        'hLeHXrMK+6XUvU+EtHAM3VzcrLbuYJUI2XJbzTj5g0Eb8I8JWsHvWHR5K7Z7gceR\\n' +
        '78AzxQmoGEfV6KABNWKsgoCQnfb1BidDJIe3BsI0A6UCAwEAAaNCMEAwDwYDVR0T\\n' +
        'AQH/BAUwAwEB/zAdBgNVHQ4EFgQUABp0MlB14MSHgAcuNSOhs3MOlUcwDgYDVR0P\\n' +
        'AQH/BAQDAgGGMA0GCSqGSIb3DQEBDAUAA4ICAQCv4CIOBSQi/QR9NxdRgVAG/pAh\\n' +
        'tFJhV7OWb/wqwsNKFDtg6tTxwaahdCfWpGWId15OUe7G9LoPiKiwM9C92n0ZeHRz\\n' +
        '4ewbrQVo7Eu1JI1wf0rnZJISL72hVYKmlvaWaacHhWxvsbKLrB7vt6Cknxa+S993\\n' +
        'Kf8i2Psw8j5886gaxhiUtzMTBwoDWak8ZaK7m3Y6C6hXQk08+3pnIornVSFJ9dlS\\n' +
        'PAqt5UPwWmrEfF+0uIDORlT+cvrAwgSp7nUF1q8iasledycZ/BxFgQqzNwnkBDwQ\\n' +
        'Z/aM52ArGsTzfMhkZRz9HIEhz1/0mJw8gZtDVQroD8778h8zsx2SrIz7eWQ6uWsD\\n' +
        'QEeSWXpcheiUtEfzkDImjr2DLbwbA23c9LoexUD10nwohhoiQQg77LmvBVxeu7WU\\n' +
        'E63JqaYUlOLOzEmNJp85zekIgR8UTkO7Gc+5BD7P4noYscI7pPOL5rP7YLg15ZFi\\n' +
        'ega+G53NTckRXz4metsd8XFWloDjZJJq4FfD60VuxgXzoMNT9wpFTNSH42PR2s9L\\n' +
        'I1vcl3w8yNccs9se2utM2nLsItZ3J0m/+QSRiw9hbrTYTcM9sXki0DtH2kyIOwYf\\n' +
        'lOrGJDiYOIrXSQK36H0gQ+8omlrUTvUj4msvkXuQjlfgx6sgp2duOAfnGxE7uHnc\\n' +
        'UhnJzzoe6M+LfGHkVQ==\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIICuDCCAj2gAwIBAgIQSAG6j2WHtWUUuLGJTPb1nTAKBggqhkjOPQQDAzCBmzEL\\n' +
        'MAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4x\\n' +
        'EzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTQwMgYDVQQDDCtBbWF6\\n' +
        'b24gUkRTIGFwLW5vcnRoZWFzdC0yIFJvb3QgQ0EgRUNDMzg0IEcxMRAwDgYDVQQH\\n' +
        'DAdTZWF0dGxlMCAXDTIxMDUyMDE2MzgyNloYDzIxMjEwNTIwMTczODI2WjCBmzEL\\n' +
        'MAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4x\\n' +
        'EzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTQwMgYDVQQDDCtBbWF6\\n' +
        'b24gUkRTIGFwLW5vcnRoZWFzdC0yIFJvb3QgQ0EgRUNDMzg0IEcxMRAwDgYDVQQH\\n' +
        'DAdTZWF0dGxlMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAE2eqwU4FOzW8RV1W381Bd\\n' +
        'olhDOrqoMqzWli21oDUt7y8OnXM/lmAuOS6sr8Nt61BLVbONdbr+jgCYw75KabrK\\n' +
        'ZGg3siqvMOgabIKkKuXO14wtrGyGDt7dnKXg5ERGYOZlo0IwQDAPBgNVHRMBAf8E\\n' +
        'BTADAQH/MB0GA1UdDgQWBBS1Acp2WYxOcblv5ikZ3ZIbRCCW+zAOBgNVHQ8BAf8E\\n' +
        'BAMCAYYwCgYIKoZIzj0EAwMDaQAwZgIxAJL84J08PBprxmsAKPTotBuVI3MyW1r8\\n' +
        'xQ0i8lgCQUf8GcmYjQ0jI4oZyv+TuYJAcwIxAP9Xpzq0Docxb+4N1qVhpiOfWt1O\\n' +
        'FnemFiy9m1l+wv6p3riQMPV7mBVpklmijkIv3Q==\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIECTCCAvGgAwIBAgIRALZLcqCVIJ25maDPE3sbPCIwDQYJKoZIhvcNAQELBQAw\\n' +
        'gZwxCzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJ\\n' +
        'bmMuMRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTE1MDMGA1UEAwws\\n' +
        'QW1hem9uIFJEUyBhcC1zb3V0aGVhc3QtMSBSb290IENBIFJTQTIwNDggRzExEDAO\\n' +
        'BgNVBAcMB1NlYXR0bGUwIBcNMjEwNTIxMjEzOTM5WhgPMjA2MTA1MjEyMjM5Mzla\\n' +
        'MIGcMQswCQYDVQQGEwJVUzEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywg\\n' +
        'SW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzELMAkGA1UECAwCV0ExNTAzBgNVBAMM\\n' +
        'LEFtYXpvbiBSRFMgYXAtc291dGhlYXN0LTEgUm9vdCBDQSBSU0EyMDQ4IEcxMRAw\\n' +
        'DgYDVQQHDAdTZWF0dGxlMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA\\n' +
        'ypKc+6FfGx6Gl6fQ78WYS29QoKgQiur58oxR3zltWeg5fqh9Z85K5S3UbRSTqWWu\\n' +
        'Xcfnkz0/FS07qHX+nWAGU27JiQb4YYqhjZNOAq8q0+ptFHJ6V7lyOqXBq5xOzO8f\\n' +
        '+0DlbJSsy7GEtJp7d7QCM3M5KVY9dENVZUKeJwa8PC5StvwPx4jcLeZRJC2rAVDG\\n' +
        'SW7NAInbATvr9ssSh03JqjXb+HDyywiqoQ7EVLtmtXWimX+0b3/2vhqcH5jgcKC9\\n' +
        'IGFydrjPbv4kwMrKnm6XlPZ9L0/3FMzanXPGd64LQVy51SI4d5Xymn0Mw2kMX8s6\\n' +
        'Nf05OsWcDzJ1n6/Q1qHSxQIDAQABo0IwQDAPBgNVHRMBAf8EBTADAQH/MB0GA1Ud\\n' +
        'DgQWBBRmaIc8eNwGP7i6P7AJrNQuK6OpFzAOBgNVHQ8BAf8EBAMCAYYwDQYJKoZI\\n' +
        'hvcNAQELBQADggEBAIBeHfGwz3S2zwIUIpqEEI5/sMySDeS+3nJR+woWAHeO0C8i\\n' +
        'BJdDh+kzzkP0JkWpr/4NWz84/IdYo1lqASd1Kopz9aT1+iROXaWr43CtbzjXb7/X\\n' +
        'Zv7eZZFC8/lS5SROq42pPWl4ekbR0w8XGQElmHYcWS41LBfKeHCUwv83ATF0XQ6I\\n' +
        '4t+9YSqZHzj4vvedrvcRInzmwWJaal9s7Z6GuwTGmnMsN3LkhZ+/GD6oW3pU/Pyh\\n' +
        'EtWqffjsLhfcdCs3gG8x9BbkcJPH5aPAVkPn4wc8wuXg6xxb9YGsQuY930GWTYRf\\n' +
        'schbgjsuqznW4HHakq4WNhs1UdTSTKkRdZz7FUQ=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIEDzCCAvegAwIBAgIRAM2zAbhyckaqRim63b+Tib8wDQYJKoZIhvcNAQELBQAw\\n' +
        'gZ8xCzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJ\\n' +
        'bmMuMRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTE4MDYGA1UEAwwv\\n' +
        'QW1hem9uIFJEUyBQcmV2aWV3IHVzLWVhc3QtMiBSb290IENBIFJTQTIwNDggRzEx\\n' +
        'EDAOBgNVBAcMB1NlYXR0bGUwIBcNMjEwNTE4MjA0OTQ1WhgPMjA2MTA1MTgyMTQ5\\n' +
        'NDVaMIGfMQswCQYDVQQGEwJVUzEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNl\\n' +
        'cywgSW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzELMAkGA1UECAwCV0ExODA2BgNV\\n' +
        'BAMML0FtYXpvbiBSRFMgUHJldmlldyB1cy1lYXN0LTIgUm9vdCBDQSBSU0EyMDQ4\\n' +
        'IEcxMRAwDgYDVQQHDAdTZWF0dGxlMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIB\\n' +
        'CgKCAQEA1ybjQMH1MkbvfKsWJaCTXeCSN1SG5UYid+Twe+TjuSqaXWonyp4WRR5z\\n' +
        'tlkqq+L2MWUeQQAX3S17ivo/t84mpZ3Rla0cx39SJtP3BiA2BwfUKRjhPwOjmk7j\\n' +
        '3zrcJjV5k1vSeLNOfFFSlwyDiVyLAE61lO6onBx+cRjelu0egMGq6WyFVidTdCmT\\n' +
        'Q9Zw3W6LTrnPvPmEyjHy2yCHzH3E50KSd/5k4MliV4QTujnxYexI2eR8F8YQC4m3\\n' +
        'DYjXt/MicbqA366SOoJA50JbgpuVv62+LSBu56FpzY12wubmDZsdn4lsfYKiWxUy\\n' +
        'uc83a2fRXsJZ1d3whxrl20VFtLFHFQIDAQABo0IwQDAPBgNVHRMBAf8EBTADAQH/\\n' +
        'MB0GA1UdDgQWBBRC0ytKmDYbfz0Bz0Psd4lRQV3aNTAOBgNVHQ8BAf8EBAMCAYYw\\n' +
        'DQYJKoZIhvcNAQELBQADggEBAGv8qZu4uaeoF6zsbumauz6ea6tdcWt+hGFuwGrb\\n' +
        'tRbI85ucAmVSX06x59DJClsb4MPhL1XmqO3RxVMIVVfRwRHWOsZQPnXm8OYQ2sny\\n' +
        'rYuFln1COOz1U/KflZjgJmxbn8x4lYiTPZRLarG0V/OsCmnLkQLPtEl/spMu8Un7\\n' +
        'r3K8SkbWN80gg17Q8EV5mnFwycUx9xsTAaFItuG0en9bGsMgMmy+ZsDmTRbL+lcX\\n' +
        'Fq8r4LT4QjrFz0shrzCwuuM4GmcYtBSxlacl+HxYEtAs5k10tmzRf6OYlY33tGf6\\n' +
        '1tkYvKryxDPF/EDgGp/LiBwx6ixYMBfISoYASt4V/ylAlHA=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIICtTCCAjqgAwIBAgIRAK9BSZU6nIe6jqfODmuVctYwCgYIKoZIzj0EAwMwgZkx\\n' +
        'CzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMu\\n' +
        'MRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTEyMDAGA1UEAwwpQW1h\\n' +
        'em9uIFJEUyBjYS1jZW50cmFsLTEgUm9vdCBDQSBFQ0MzODQgRzExEDAOBgNVBAcM\\n' +
        'B1NlYXR0bGUwIBcNMjEwNTIxMjIxMzA5WhgPMjEyMTA1MjEyMzEzMDlaMIGZMQsw\\n' +
        'CQYDVQQGEwJVUzEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjET\\n' +
        'MBEGA1UECwwKQW1hem9uIFJEUzELMAkGA1UECAwCV0ExMjAwBgNVBAMMKUFtYXpv\\n' +
        'biBSRFMgY2EtY2VudHJhbC0xIFJvb3QgQ0EgRUNDMzg0IEcxMRAwDgYDVQQHDAdT\\n' +
        'ZWF0dGxlMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEUkEERcgxneT5H+P+fERcbGmf\\n' +
        'bVx+M7rNWtgWUr6w+OBENebQA9ozTkeSg4c4M+qdYSObFqjxITdYxT1z/nHz1gyx\\n' +
        'OKAhLjWu+nkbRefqy3RwXaWT680uUaAP6ccnkZOMo0IwQDAPBgNVHRMBAf8EBTAD\\n' +
        'AQH/MB0GA1UdDgQWBBSN6fxlg0s5Wny08uRBYZcQ3TUoyzAOBgNVHQ8BAf8EBAMC\\n' +
        'AYYwCgYIKoZIzj0EAwMDaQAwZgIxAORaz+MBVoFBTmZ93j2G2vYTwA6T5hWzBWrx\\n' +
        'CrI54pKn5g6At56DBrkjrwZF5T1enAIxAJe/LZ9xpDkAdxDgGJFN8gZYLRWc0NRy\\n' +
        'Rb4hihy5vj9L+w9uKc9VfEBIFuhT7Z3ljg==\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIEADCCAuigAwIBAgIQB/57HSuaqUkLaasdjxUdPjANBgkqhkiG9w0BAQsFADCB\\n' +
        'mDELMAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIElu\\n' +
        'Yy4xEzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTEwLwYDVQQDDChB\\n' +
        'bWF6b24gUkRTIGFwLXNvdXRoLTEgUm9vdCBDQSBSU0EyMDQ4IEcxMRAwDgYDVQQH\\n' +
        'DAdTZWF0dGxlMCAXDTIxMDUxOTE3NDAzNFoYDzIwNjEwNTE5MTg0MDM0WjCBmDEL\\n' +
        'MAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4x\\n' +
        'EzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTEwLwYDVQQDDChBbWF6\\n' +
        'b24gUkRTIGFwLXNvdXRoLTEgUm9vdCBDQSBSU0EyMDQ4IEcxMRAwDgYDVQQHDAdT\\n' +
        'ZWF0dGxlMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAtbkaoVsUS76o\\n' +
        'TgLFmcnaB8cswBk1M3Bf4IVRcwWT3a1HeJSnaJUqWHCJ+u3ip/zGVOYl0gN1MgBb\\n' +
        'MuQRIJiB95zGVcIa6HZtx00VezDTr3jgGWRHmRjNVCCHGmxOZWvJjsIE1xavT/1j\\n' +
        'QYV/ph4EZEIZ/qPq7e3rHohJaHDe23Z7QM9kbyqp2hANG2JtU/iUhCxqgqUHNozV\\n' +
        'Zd0l5K6KnltZQoBhhekKgyiHqdTrH8fWajYl5seD71bs0Axowb+Oh0rwmrws3Db2\\n' +
        'Dh+oc2PwREnjHeca9/1C6J2vhY+V0LGaJmnnIuOANrslx2+bgMlyhf9j0Bv8AwSi\\n' +
        'dSWsobOhNQIDAQABo0IwQDAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBQb7vJT\\n' +
        'VciLN72yJGhaRKLn6Krn2TAOBgNVHQ8BAf8EBAMCAYYwDQYJKoZIhvcNAQELBQAD\\n' +
        'ggEBAAxEj8N9GslReAQnNOBpGl8SLgCMTejQ6AW/bapQvzxrZrfVOZOYwp/5oV0f\\n' +
        '9S1jcGysDM+DrmfUJNzWxq2Y586R94WtpH4UpJDGqZp+FuOVJL313te4609kopzO\\n' +
        'lDdmd+8z61+0Au93wB1rMiEfnIMkOEyt7D2eTFJfJRKNmnPrd8RjimRDlFgcLWJA\\n' +
        '3E8wca67Lz/G0eAeLhRHIXv429y8RRXDtKNNz0wA2RwURWIxyPjn1fHjA9SPDkeW\\n' +
        'E1Bq7gZj+tBnrqz+ra3yjZ2blss6Ds3/uRY6NYqseFTZWmQWT7FolZEnT9vMUitW\\n' +
        'I0VynUbShVpGf6946e0vgaaKw20=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIID/jCCAuagAwIBAgIQGyUVTaVjYJvWhroVEiHPpDANBgkqhkiG9w0BAQsFADCB\\n' +
        'lzELMAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIElu\\n' +
        'Yy4xEzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTAwLgYDVQQDDCdB\\n' +
        'bWF6b24gUkRTIHVzLXdlc3QtMSBSb290IENBIFJTQTIwNDggRzExEDAOBgNVBAcM\\n' +
        'B1NlYXR0bGUwIBcNMjEwNTE5MTkwNDA2WhgPMjA2MTA1MTkyMDA0MDZaMIGXMQsw\\n' +
        'CQYDVQQGEwJVUzEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjET\\n' +
        'MBEGA1UECwwKQW1hem9uIFJEUzELMAkGA1UECAwCV0ExMDAuBgNVBAMMJ0FtYXpv\\n' +
        'biBSRFMgdXMtd2VzdC0xIFJvb3QgQ0EgUlNBMjA0OCBHMTEQMA4GA1UEBwwHU2Vh\\n' +
        'dHRsZTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBANhyXpJ0t4nigRDZ\\n' +
        'EwNtFOem1rM1k8k5XmziHKDvDk831p7QsX9ZOxl/BT59Pu/P+6W6SvasIyKls1sW\\n' +
        'FJIjFF+6xRQcpoE5L5evMgN/JXahpKGeQJPOX9UEXVW5B8yi+/dyUitFT7YK5LZA\\n' +
        'MqWBN/LtHVPa8UmE88RCDLiKkqiv229tmwZtWT7nlMTTCqiAHMFcryZHx0pf9VPh\\n' +
        'x/iPV8p2gBJnuPwcz7z1kRKNmJ8/cWaY+9w4q7AYlAMaq/rzEqDaN2XXevdpsYAK\\n' +
        'TMMj2kji4x1oZO50+VPNfBl5ZgJc92qz1ocF95SAwMfOUsP8AIRZkf0CILJYlgzk\\n' +
        '/6u6qZECAwEAAaNCMEAwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUm5jfcS9o\\n' +
        '+LwL517HpB6hG+PmpBswDgYDVR0PAQH/BAQDAgGGMA0GCSqGSIb3DQEBCwUAA4IB\\n' +
        'AQAcQ6lsqxi63MtpGk9XK8mCxGRLCad51+MF6gcNz6i6PAqhPOoKCoFqdj4cEQTF\\n' +
        'F8dCfa3pvfJhxV6RIh+t5FCk/y6bWT8Ls/fYKVo6FhHj57bcemWsw/Z0XnROdVfK\\n' +
        'Yqbc7zvjCPmwPHEqYBhjU34NcY4UF9yPmlLOL8uO1JKXa3CAR0htIoW4Pbmo6sA4\\n' +
        '6P0co/clW+3zzsQ92yUCjYmRNeSbdXbPfz3K/RtFfZ8jMtriRGuO7KNxp8MqrUho\\n' +
        'HK8O0mlSUxGXBZMNicfo7qY8FD21GIPH9w5fp5oiAl7lqFzt3E3sCLD3IiVJmxbf\\n' +
        'fUwpGd1XZBBSdIxysRLM6j48\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIICrTCCAjOgAwIBAgIQU+PAILXGkpoTcpF200VD/jAKBggqhkjOPQQDAzCBljEL\\n' +
        'MAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4x\\n' +
        'EzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMS8wLQYDVQQDDCZBbWF6\\n' +
        'b24gUkRTIGFwLWVhc3QtMSBSb290IENBIEVDQzM4NCBHMTEQMA4GA1UEBwwHU2Vh\\n' +
        'dHRsZTAgFw0yMTA1MjUyMTQ1MTFaGA8yMTIxMDUyNTIyNDUxMVowgZYxCzAJBgNV\\n' +
        'BAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYD\\n' +
        'VQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTEvMC0GA1UEAwwmQW1hem9uIFJE\\n' +
        'UyBhcC1lYXN0LTEgUm9vdCBDQSBFQ0MzODQgRzExEDAOBgNVBAcMB1NlYXR0bGUw\\n' +
        'djAQBgcqhkjOPQIBBgUrgQQAIgNiAAT3tFKE8Kw1sGQAvNLlLhd8OcGhlc7MiW/s\\n' +
        'NXm3pOiCT4vZpawKvHBzD76Kcv+ZZzHRxQEmG1/muDzZGlKR32h8AAj+NNO2Wy3d\\n' +
        'CKTtYMiVF6Z2zjtuSkZQdjuQbe4eQ7qjQjBAMA8GA1UdEwEB/wQFMAMBAf8wHQYD\\n' +
        'VR0OBBYEFAiSQOp16Vv0Ohpvqcbd2j5RmhYNMA4GA1UdDwEB/wQEAwIBhjAKBggq\\n' +
        'hkjOPQQDAwNoADBlAjBVsi+5Ape0kOhMt/WFkANkslD4qXA5uqhrfAtH29Xzz2NV\\n' +
        'tR7akiA771OaIGB/6xsCMQCZt2egCtbX7J0WkuZ2KivTh66jecJr5DHvAP4X2xtS\\n' +
        'F/5pS+AUhcKTEGjI9jDH3ew=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIICuDCCAj2gAwIBAgIQT5mGlavQzFHsB7hV6Mmy6TAKBggqhkjOPQQDAzCBmzEL\\n' +
        'MAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4x\\n' +
        'EzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTQwMgYDVQQDDCtBbWF6\\n' +
        'b24gUkRTIGFwLXNvdXRoZWFzdC0yIFJvb3QgQ0EgRUNDMzg0IEcxMRAwDgYDVQQH\\n' +
        'DAdTZWF0dGxlMCAXDTIxMDUyNDIwNTAxNVoYDzIxMjEwNTI0MjE1MDE1WjCBmzEL\\n' +
        'MAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4x\\n' +
        'EzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTQwMgYDVQQDDCtBbWF6\\n' +
        'b24gUkRTIGFwLXNvdXRoZWFzdC0yIFJvb3QgQ0EgRUNDMzg0IEcxMRAwDgYDVQQH\\n' +
        'DAdTZWF0dGxlMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEcm4BBBjYK7clwm0HJRWS\\n' +
        'flt3iYwoJbIXiXn9c1y3E+Vb7bmuyKhS4eO8mwO4GefUcXObRfoHY2TZLhMJLVBQ\\n' +
        '7MN2xDc0RtZNj07BbGD3VAIFRTDX0mH9UNYd0JQM3t/Oo0IwQDAPBgNVHRMBAf8E\\n' +
        'BTADAQH/MB0GA1UdDgQWBBRrd5ITedfAwrGo4FA9UaDaGFK3rjAOBgNVHQ8BAf8E\\n' +
        'BAMCAYYwCgYIKoZIzj0EAwMDaQAwZgIxAPBNqmVv1IIA3EZyQ6XuVf4gj79/DMO8\\n' +
        'bkicNS1EcBpUqbSuU4Zwt2BYc8c/t7KVOQIxAOHoWkoKZPiKyCxfMtJpCZySUG+n\\n' +
        'sXgB/LOyWE5BJcXUfm+T1ckeNoWeUUMOLmnJjg==\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIECTCCAvGgAwIBAgIRAJcDeinvdNrDQBeJ8+t38WQwDQYJKoZIhvcNAQELBQAw\\n' +
        'gZwxCzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJ\\n' +
        'bmMuMRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTE1MDMGA1UEAwws\\n' +
        'QW1hem9uIFJEUyBhcC1zb3V0aGVhc3QtNCBSb290IENBIFJTQTIwNDggRzExEDAO\\n' +
        'BgNVBAcMB1NlYXR0bGUwIBcNMjIwNTI1MTY0OTE2WhgPMjA2MjA1MjUxNzQ5MTZa\\n' +
        'MIGcMQswCQYDVQQGEwJVUzEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywg\\n' +
        'SW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzELMAkGA1UECAwCV0ExNTAzBgNVBAMM\\n' +
        'LEFtYXpvbiBSRFMgYXAtc291dGhlYXN0LTQgUm9vdCBDQSBSU0EyMDQ4IEcxMRAw\\n' +
        'DgYDVQQHDAdTZWF0dGxlMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA\\n' +
        'k8DBNkr9tMoIM0NHoFiO7cQfSX0cOMhEuk/CHt0fFx95IBytx7GHCnNzpM27O5z6\\n' +
        'x6iRhfNnx+B6CrGyCzOjxvPizneY+h+9zfvNz9jj7L1I2uYMuiNyOKR6FkHR46CT\\n' +
        '1CiArfVLLPaTqgD/rQjS0GL2sLHS/0dmYipzynnZcs613XT0rAWdYDYgxDq7r/Yi\\n' +
        'Xge5AkWQFkMUq3nOYDLCyGGfQqWKkwv6lZUHLCDKf+Y0Uvsrj8YGCI1O8mF0qPCQ\\n' +
        'lmlfaDvbuBu1AV+aabmkvyFj3b8KRIlNLEtQ4N8KGYR2Jdb82S4YUGIOAt4wuuFt\\n' +
        '1B7AUDLk3V/u+HTWiwfoLQIDAQABo0IwQDAPBgNVHRMBAf8EBTADAQH/MB0GA1Ud\\n' +
        'DgQWBBSNpcjz6ArWBtAA+Gz6kyyZxrrgdDAOBgNVHQ8BAf8EBAMCAYYwDQYJKoZI\\n' +
        'hvcNAQELBQADggEBAGJEd7UgOzHYIcQRSF7nSYyjLROyalaIV9AX4WXW/Cqlul1c\\n' +
        'MblP5etDZm7A/thliZIWAuyqv2bNicmS3xKvNy6/QYi1YgxZyy/qwJ3NdFl067W0\\n' +
        't8nGo29B+EVK94IPjzFHWShuoktIgp+dmpijB7wkTIk8SmIoe9yuY4+hzgqk+bo4\\n' +
        'ms2SOXSN1DoQ75Xv+YmztbnZM8MuWhL1T7hA4AMorzTQLJ9Pof8SpSdMHeDsHp0R\\n' +
        '01jogNFkwy25nw7cL62nufSuH2fPYGWXyNDg+y42wKsKWYXLRgUQuDVEJ2OmTFMB\\n' +
        'T0Vf7VuNijfIA9hkN2d3K53m/9z5WjGPSdOjGhg=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIID/jCCAuagAwIBAgIQRiwspKyrO0xoxDgSkqLZczANBgkqhkiG9w0BAQsFADCB\\n' +
        'lzELMAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIElu\\n' +
        'Yy4xEzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTAwLgYDVQQDDCdB\\n' +
        'bWF6b24gUkRTIHVzLXdlc3QtMiBSb290IENBIFJTQTIwNDggRzExEDAOBgNVBAcM\\n' +
        'B1NlYXR0bGUwIBcNMjEwNTI0MjE1OTAwWhgPMjA2MTA1MjQyMjU5MDBaMIGXMQsw\\n' +
        'CQYDVQQGEwJVUzEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjET\\n' +
        'MBEGA1UECwwKQW1hem9uIFJEUzELMAkGA1UECAwCV0ExMDAuBgNVBAMMJ0FtYXpv\\n' +
        'biBSRFMgdXMtd2VzdC0yIFJvb3QgQ0EgUlNBMjA0OCBHMTEQMA4GA1UEBwwHU2Vh\\n' +
        'dHRsZTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAL53Jk3GsKiu+4bx\\n' +
        'jDfsevWbwPCNJ3H08Zp7GWhvI3Tgi39opfHYv2ku2BKFjK8N2L6RvNPSR8yplv5j\\n' +
        'Y0tK0U+XVNl8o0ibhqRDhbTuh6KL8CFINWYzAajuxFS+CF0U6c1Q3tXLBdALxA7l\\n' +
        'FlXJ71QrP06W31kRe7kvgrvO7qWU3/OzUf9qYw4LSiR1/VkvvRCTqcVNw09clw/M\\n' +
        'Jbw6FSgweN65M9j7zPbjGAXSHkXyxH1Erin2fa+B9PE4ZDgX9cp2C1DHewYJQL/g\\n' +
        'SepwwcudVNRN1ibKH7kpMrgPnaNIVNx5sXVsTjk6q2ZqYw3SVHegltJpLy/cZReP\\n' +
        'mlivF2kCAwEAAaNCMEAwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUmTcQd6o1\\n' +
        'CuS65MjBrMwQ9JJjmBwwDgYDVR0PAQH/BAQDAgGGMA0GCSqGSIb3DQEBCwUAA4IB\\n' +
        'AQAKSDSIzl956wVddPThf2VAzI8syw9ngSwsEHZvxVGHBvu5gg618rDyguVCYX9L\\n' +
        '4Kw/xJrk6S3qxOS2ZDyBcOpsrBskgahDFIunzoRP3a18ARQVq55LVgfwSDQiunch\\n' +
        'Bd05cnFGLoiLkR5rrkgYaP2ftn3gRBRaf0y0S3JXZ2XB3sMZxGxavYq9mfiEcwB0\\n' +
        'LMTMQ1NYzahIeG6Jm3LqRqR8HkzP/Ztq4dT2AtSLvFebbNMiWqeqT7OcYp94HTYT\\n' +
        'zqrtaVdUg9bwyAUCDgy0GV9RHDIdNAOInU/4LEETovrtuBU7Z1q4tcHXvN6Hd1H8\\n' +
        'gMb0mCG5I393qW5hFsA/diFb\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIECTCCAvGgAwIBAgIRAPQAvihfjBg/JDbj6U64K98wDQYJKoZIhvcNAQELBQAw\\n' +
        'gZwxCzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJ\\n' +
        'bmMuMRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTE1MDMGA1UEAwws\\n' +
        'QW1hem9uIFJEUyBhcC1ub3J0aGVhc3QtMiBSb290IENBIFJTQTIwNDggRzExEDAO\\n' +
        'BgNVBAcMB1NlYXR0bGUwIBcNMjEwNTIwMTYyODQxWhgPMjA2MTA1MjAxNzI4NDFa\\n' +
        'MIGcMQswCQYDVQQGEwJVUzEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywg\\n' +
        'SW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzELMAkGA1UECAwCV0ExNTAzBgNVBAMM\\n' +
        'LEFtYXpvbiBSRFMgYXAtbm9ydGhlYXN0LTIgUm9vdCBDQSBSU0EyMDQ4IEcxMRAw\\n' +
        'DgYDVQQHDAdTZWF0dGxlMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA\\n' +
        'vJ9lgyksCxkBlY40qOzI1TCj/Q0FVGuPL/Z1Mw2YN0l+41BDv0FHApjTUkIKOeIP\\n' +
        'nwDwpXTa3NjYbk3cOZ/fpH2rYJ++Fte6PNDGPgKppVCUh6x3jiVZ1L7wOgnTdK1Q\\n' +
        'Trw8440IDS5eLykRHvz8OmwvYDl0iIrt832V0QyOlHTGt6ZJ/aTQKl12Fy3QBLv7\\n' +
        'stClPzvHTrgWqVU6uidSYoDtzHbU7Vda7YH0wD9IUoMBf7Tu0rqcE4uH47s2XYkc\\n' +
        'SdLEoOg/Ngs7Y9B1y1GCyj3Ux7hnyvCoRTw014QyNB7dTatFMDvYlrRDGG14KeiU\\n' +
        'UL7Vo/+EejWI31eXNLw84wIDAQABo0IwQDAPBgNVHRMBAf8EBTADAQH/MB0GA1Ud\\n' +
        'DgQWBBQkgTWFsNg6wA3HbbihDQ4vpt1E2zAOBgNVHQ8BAf8EBAMCAYYwDQYJKoZI\\n' +
        'hvcNAQELBQADggEBAGz1Asiw7hn5WYUj8RpOCzpE0h/oBZcnxP8wulzZ5Xd0YxWO\\n' +
        '0jYUcUk3tTQy1QvoY+Q5aCjg6vFv+oFBAxkib/SmZzp4xLisZIGlzpJQuAgRkwWA\\n' +
        '6BVMgRS+AaOMQ6wKPgz1x4v6T0cIELZEPq3piGxvvqkcLZKdCaeC3wCS6sxuafzZ\\n' +
        '4qA3zMwWuLOzRftgX2hQto7d/2YkRXga7jSvQl3id/EI+xrYoH6zIWgjdU1AUaNq\\n' +
        'NGT7DIo47vVMfnd9HFZNhREsd4GJE83I+JhTqIxiKPNxrKgESzyADmNPt0gXDnHo\\n' +
        'tbV1pMZz5HpJtjnP/qVZhEK5oB0tqlKPv9yx074=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIICuTCCAj6gAwIBAgIRAKp1Rn3aL/g/6oiHVIXtCq8wCgYIKoZIzj0EAwMwgZsx\\n' +
        'CzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMu\\n' +
        'MRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTE0MDIGA1UEAwwrQW1h\\n' +
        'em9uIFJEUyBhcC1ub3J0aGVhc3QtMyBSb290IENBIEVDQzM4NCBHMTEQMA4GA1UE\\n' +
        'BwwHU2VhdHRsZTAgFw0yMTA1MjQyMDMyMTdaGA8yMTIxMDUyNDIxMzIxN1owgZsx\\n' +
        'CzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMu\\n' +
        'MRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTE0MDIGA1UEAwwrQW1h\\n' +
        'em9uIFJEUyBhcC1ub3J0aGVhc3QtMyBSb290IENBIEVDQzM4NCBHMTEQMA4GA1UE\\n' +
        'BwwHU2VhdHRsZTB2MBAGByqGSM49AgEGBSuBBAAiA2IABGTYWPILeBJXfcL3Dz4z\\n' +
        'EWMUq78xB1HpjBwHoTURYfcMd5r96BTVG6yaUBWnAVCMeeD6yTG9a1eVGNhG14Hk\\n' +
        'ZAEjgLiNB7RRbEG5JZ/XV7W/vODh09WCst2y9SLKsdgeAaNCMEAwDwYDVR0TAQH/\\n' +
        'BAUwAwEB/zAdBgNVHQ4EFgQUoE0qZHmDCDB+Bnm8GUa/evpfPwgwDgYDVR0PAQH/\\n' +
        'BAQDAgGGMAoGCCqGSM49BAMDA2kAMGYCMQCnil5MMwhY3qoXv0xvcKZGxGPaBV15\\n' +
        '0CCssCKn0oVtdJQfJQ3Jrf3RSaEyijXIJsoCMQC35iJi4cWoNX3N/qfgnHohW52O\\n' +
        'B5dg0DYMqy5cNZ40+UcAanRMyqNQ6P7fy3umGco=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIICtzCCAj2gAwIBAgIQPXnDTPegvJrI98qz8WxrMjAKBggqhkjOPQQDAzCBmzEL\\n' +
        'MAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4x\\n' +
        'EzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTQwMgYDVQQDDCtBbWF6\\n' +
        'b24gUkRTIEJldGEgdXMtZWFzdC0xIFJvb3QgQ0EgRUNDMzg0IEcxMRAwDgYDVQQH\\n' +
        'DAdTZWF0dGxlMCAXDTIxMDUxODIxNDAxMloYDzIxMjEwNTE4MjI0MDEyWjCBmzEL\\n' +
        'MAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4x\\n' +
        'EzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTQwMgYDVQQDDCtBbWF6\\n' +
        'b24gUkRTIEJldGEgdXMtZWFzdC0xIFJvb3QgQ0EgRUNDMzg0IEcxMRAwDgYDVQQH\\n' +
        'DAdTZWF0dGxlMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEI0sR7gwutK5AB46hM761\\n' +
        'gcLTGBIYlURSEoM1jcBwy56CL+3CJKZwLLyJ7qoOKfWbu5GsVLUTWS8MV6Nw33cx\\n' +
        '2KQD2svb694wi+Px2f4n9+XHkEFQw8BbiodDD7RZA70fo0IwQDAPBgNVHRMBAf8E\\n' +
        'BTADAQH/MB0GA1UdDgQWBBTQSioOvnVLEMXwNSDg+zgln/vAkjAOBgNVHQ8BAf8E\\n' +
        'BAMCAYYwCgYIKoZIzj0EAwMDaAAwZQIxAMwu1hqm5Bc98uE/E0B5iMYbBQ4kpMxO\\n' +
        'tP8FTfz5UR37HUn26nXE0puj6S/Ffj4oJgIwXI7s2c26tFQeqzq6u3lrNJHp5jC9\\n' +
        'Uxlo/hEJOLoDj5jnpxo8dMAtCNoQPaHdfL0P\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIICrjCCAjWgAwIBAgIQGKVv+5VuzEZEBzJ+bVfx2zAKBggqhkjOPQQDAzCBlzEL\\n' +
        'MAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4x\\n' +
        'EzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTAwLgYDVQQDDCdBbWF6\\n' +
        'b24gUkRTIGFwLXNvdXRoLTEgUm9vdCBDQSBFQ0MzODQgRzExEDAOBgNVBAcMB1Nl\\n' +
        'YXR0bGUwIBcNMjEwNTE5MTc1MDU5WhgPMjEyMTA1MTkxODUwNTlaMIGXMQswCQYD\\n' +
        'VQQGEwJVUzEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjETMBEG\\n' +
        'A1UECwwKQW1hem9uIFJEUzELMAkGA1UECAwCV0ExMDAuBgNVBAMMJ0FtYXpvbiBS\\n' +
        'RFMgYXAtc291dGgtMSBSb290IENBIEVDQzM4NCBHMTEQMA4GA1UEBwwHU2VhdHRs\\n' +
        'ZTB2MBAGByqGSM49AgEGBSuBBAAiA2IABMqdLJ0tZF/DGFZTKZDrGRJZID8ivC2I\\n' +
        'JRCYTWweZKCKSCAzoiuGGHzJhr5RlLHQf/QgmFcgXsdmO2n3CggzhA4tOD9Ip7Lk\\n' +
        'P05eHd2UPInyPCHRgmGjGb0Z+RdQ6zkitKNCMEAwDwYDVR0TAQH/BAUwAwEB/zAd\\n' +
        'BgNVHQ4EFgQUC1yhRgVqU5bR8cGzOUCIxRpl4EYwDgYDVR0PAQH/BAQDAgGGMAoG\\n' +
        'CCqGSM49BAMDA2cAMGQCMG0c/zLGECRPzGKJvYCkpFTCUvdP4J74YP0v/dPvKojL\\n' +
        't/BrR1Tg4xlfhaib7hPc7wIwFvgqHes20CubQnZmswbTKLUrgSUW4/lcKFpouFd2\\n' +
        't2/ewfi/0VhkeUW+IiHhOMdU\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIGCTCCA/GgAwIBAgIRAOXxJuyXVkbfhZCkS/dOpfEwDQYJKoZIhvcNAQEMBQAw\\n' +
        'gZwxCzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJ\\n' +
        'bmMuMRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTE1MDMGA1UEAwws\\n' +
        'QW1hem9uIFJEUyBhcC1ub3J0aGVhc3QtMSBSb290IENBIFJTQTQwOTYgRzExEDAO\\n' +
        'BgNVBAcMB1NlYXR0bGUwIBcNMjEwNTI1MjE1OTEwWhgPMjEyMTA1MjUyMjU5MTBa\\n' +
        'MIGcMQswCQYDVQQGEwJVUzEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywg\\n' +
        'SW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzELMAkGA1UECAwCV0ExNTAzBgNVBAMM\\n' +
        'LEFtYXpvbiBSRFMgYXAtbm9ydGhlYXN0LTEgUm9vdCBDQSBSU0E0MDk2IEcxMRAw\\n' +
        'DgYDVQQHDAdTZWF0dGxlMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA\\n' +
        'xiP4RDYm4tIS12hGgn1csfO8onQDmK5SZDswUpl0HIKXOUVVWkHNlINkVxbdqpqH\\n' +
        'FhbyZmNN6F/EWopotMDKe1B+NLrjNQf4zefv2vyKvPHJXhxoKmfyuTd5Wk8k1F7I\\n' +
        'lNwLQzznB+ElhrLIDJl9Ro8t31YBBNFRGAGEnxyACFGcdkjlsa52UwfYrwreEg2l\\n' +
        'gW5AzqHgjFfj9QRLydeU/n4bHm0F1adMsV7P3rVwilcUlqsENDwXnWyPEyv3sw6F\\n' +
        'wNemLEs1129mB77fwvySb+lLNGsnzr8w4wdioZ74co+T9z2ca+eUiP+EQccVw1Is\\n' +
        'D4Fh57IjPa6Wuc4mwiUYKkKY63+38aCfEWb0Qoi+zW+mE9nek6MOQ914cN12u5LX\\n' +
        'dBoYopphRO5YmubSN4xcBy405nIdSdbrAVWwxXnVVyjqjknmNeqQsPZaxAhdoKhV\\n' +
        'AqxNr8AUAdOAO6Sz3MslmcLlDXFihrEEOeUbpg/m1mSUUHGbu966ajTG1FuEHHwS\\n' +
        '7WB52yxoJo/tHvt9nAWnh3uH5BHmS8zn6s6CGweWKbX5yICnZ1QFR1e4pogxX39v\\n' +
        'XD6YcNOO+Vn+HY4nXmjgSYVC7l+eeP8eduMg1xJujzjrbmrXU+d+cBObgdTOAlpa\\n' +
        'JFHaGwYw1osAwPCo9cZ2f04yitBfj9aPFia8ASKldakCAwEAAaNCMEAwDwYDVR0T\\n' +
        'AQH/BAUwAwEB/zAdBgNVHQ4EFgQUqKS+ltlior0SyZKYAkJ/efv55towDgYDVR0P\\n' +
        'AQH/BAQDAgGGMA0GCSqGSIb3DQEBDAUAA4ICAQAdElvp8bW4B+Cv+1WSN87dg6TN\\n' +
        'wGyIjJ14/QYURgyrZiYpUmZpj+/pJmprSWXu4KNyqHftmaidu7cdjL5nCAvAfnY5\\n' +
        '/6eDDbX4j8Gt9fb/6H9y0O0dn3mUPSEKG0crR+JRFAtPhn/2FNvst2P82yguWLv0\\n' +
        'pHjHVUVcq+HqDMtUIJsTPYjSh9Iy77Q6TOZKln9dyDOWJpCSkiUWQtMAKbCSlvzd\\n' +
        'zTs/ahqpT+zLfGR1SR+T3snZHgQnbnemmz/XtlKl52NxccARwfcEEKaCRQyGq/pR\\n' +
        '0PVZasyJS9JY4JfQs4YOdeOt4UMZ8BmW1+BQWGSkkb0QIRl8CszoKofucAlqdPcO\\n' +
        'IT/ZaMVhI580LFGWiQIizWFskX6lqbCyHqJB3LDl8gJISB5vNTHOHpvpMOMs5PYt\\n' +
        'cRl5Mrksx5MKMqG7y5R734nMlZxQIHjL5FOoOxTBp9KeWIL/Ib89T2QDaLw1SQ+w\\n' +
        'ihqWBJ4ZdrIMWYpP3WqM+MXWk7WAem+xsFJdR+MDgOOuobVQTy5dGBlPks/6gpjm\\n' +
        'rO9TjfQ36ppJ3b7LdKUPeRfnYmlR5RU4oyYJ//uLbClI443RZAgxaCXX/nyc12lr\\n' +
        'eVLUMNF2abLX4/VF63m2/Z9ACgMRfqGshPssn1NN33OonrotQoj4S3N9ZrjvzKt8\\n' +
        'iHcaqd60QKpfiH2A3A==\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIICuDCCAj2gAwIBAgIQPaVGRuu86nh/ylZVCLB0MzAKBggqhkjOPQQDAzCBmzEL\\n' +
        'MAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4x\\n' +
        'EzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTQwMgYDVQQDDCtBbWF6\\n' +
        'b24gUkRTIGFwLW5vcnRoZWFzdC0xIFJvb3QgQ0EgRUNDMzg0IEcxMRAwDgYDVQQH\\n' +
        'DAdTZWF0dGxlMCAXDTIxMDUyNTIyMDMxNloYDzIxMjEwNTI1MjMwMzE2WjCBmzEL\\n' +
        'MAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4x\\n' +
        'EzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTQwMgYDVQQDDCtBbWF6\\n' +
        'b24gUkRTIGFwLW5vcnRoZWFzdC0xIFJvb3QgQ0EgRUNDMzg0IEcxMRAwDgYDVQQH\\n' +
        'DAdTZWF0dGxlMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEexNURoB9KE93MEtEAlJG\\n' +
        'obz4LS/pD2hc8Gczix1WhVvpJ8bN5zCDXaKdnDMCebetyRQsmQ2LYlfmCwpZwSDu\\n' +
        '0zowB11Pt3I5Avu2EEcuKTlKIDMBeZ1WWuOd3Tf7MEAMo0IwQDAPBgNVHRMBAf8E\\n' +
        'BTADAQH/MB0GA1UdDgQWBBSaYbZPBvFLikSAjpa8mRJvyArMxzAOBgNVHQ8BAf8E\\n' +
        'BAMCAYYwCgYIKoZIzj0EAwMDaQAwZgIxAOEJkuh3Zjb7Ih/zuNRd1RBqmIYcnyw0\\n' +
        'nwUZczKXry+9XebYj3VQxSRNadrarPWVqgIxAMg1dyGoDAYjY/L/9YElyMnvHltO\\n' +
        'PwpJShmqHvCLc/mXMgjjYb/akK7yGthvW6j/uQ==\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIGCDCCA/CgAwIBAgIQChu3v5W1Doil3v6pgRIcVzANBgkqhkiG9w0BAQwFADCB\\n' +
        'nDELMAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIElu\\n' +
        'Yy4xEzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTUwMwYDVQQDDCxB\\n' +
        'bWF6b24gUkRTIEJldGEgdXMtZWFzdC0xIFJvb3QgQ0EgUlNBNDA5NiBHMTEQMA4G\\n' +
        'A1UEBwwHU2VhdHRsZTAgFw0yMTA1MTgyMTM0MTVaGA8yMTIxMDUxODIyMzQxNVow\\n' +
        'gZwxCzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJ\\n' +
        'bmMuMRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTE1MDMGA1UEAwws\\n' +
        'QW1hem9uIFJEUyBCZXRhIHVzLWVhc3QtMSBSb290IENBIFJTQTQwOTYgRzExEDAO\\n' +
        'BgNVBAcMB1NlYXR0bGUwggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQC1\\n' +
        'FUGQ5tf3OwpDR6hGBxhUcrkwKZhaXP+1St1lSOQvjG8wXT3RkKzRGMvb7Ee0kzqI\\n' +
        'mzKKe4ASIhtV3UUWdlNmP0EA3XKnif6N79MismTeGkDj75Yzp5A6tSvqByCgxIjK\\n' +
        'JqpJrch3Dszoyn8+XhwDxMZtkUa5nQVdJgPzJ6ltsQ8E4SWLyLtTu0S63jJDkqYY\\n' +
        'S7cQblk7y7fel+Vn+LS5dGTdRRhMvSzEnb6mkVBaVzRyVX90FNUED06e8q+gU8Ob\\n' +
        'htvQlf9/kRzHwRAdls2YBhH40ZeyhpUC7vdtPwlmIyvW5CZ/QiG0yglixnL6xahL\\n' +
        'pbmTuTSA/Oqz4UGQZv2WzHe1lD2gRHhtFX2poQZeNQX8wO9IcUhrH5XurW/G9Xwl\\n' +
        'Sat9CMPERQn4KC3HSkat4ir2xaEUrjfg6c4XsGyh2Pk/LZ0gLKum0dyWYpWP4JmM\\n' +
        'RQNjrInXPbMhzQObozCyFT7jYegS/3cppdyy+K1K7434wzQGLU1gYXDKFnXwkX8R\\n' +
        'bRKgx2pHNbH5lUddjnNt75+e8m83ygSq/ZNBUz2Ur6W2s0pl6aBjwaDES4VfWYlI\\n' +
        'jokcmrGvJNDfQWygb1k00eF2bzNeNCHwgWsuo3HSxVgc/WGsbcGrTlDKfz+g3ich\\n' +
        'bXUeUidPhRiv5UQIVCLIHpHuin3bj9lQO/0t6p+tAQIDAQABo0IwQDAPBgNVHRMB\\n' +
        'Af8EBTADAQH/MB0GA1UdDgQWBBSFmMBgm5IsRv3hLrvDPIhcPweXYTAOBgNVHQ8B\\n' +
        'Af8EBAMCAYYwDQYJKoZIhvcNAQEMBQADggIBAAa2EuozymOsQDJlEi7TqnyA2OhT\\n' +
        'GXPfYqCyMJVkfrqNgcnsNpCAiNEiZbb+8sIPXnT8Ay8hrwJYEObJ5b7MHXpLuyft\\n' +
        'z0Pu1oFLKnQxKjNxrIsCvaB4CRRdYjm1q7EqGhMGv76se9stOxkOqO9it31w/LoU\\n' +
        'ENDk7GLsSqsV1OzYLhaH8t+MaNP6rZTSNuPrHwbV3CtBFl2TAZ7iKgKOhdFz1Hh9\\n' +
        'Pez0lG+oKi4mHZ7ajov6PD0W7njn5KqzCAkJR6OYmlNVPjir+c/vUtEs0j+owsMl\\n' +
        'g7KE5g4ZpTRShyh5BjCFRK2tv0tkqafzNtxrKC5XNpEkqqVTCnLcKG+OplIEadtr\\n' +
        'C7UWf4HyhCiR+xIyxFyR05p3uY/QQU/5uza7GlK0J+U1sBUytx7BZ+Fo8KQfPPqV\\n' +
        'CqDCaYUksoJcnJE/KeoksyqNQys7sDGJhkd0NeUGDrFLKHSLhIwAMbEWnqGxvhli\\n' +
        'E7sP2E5rI/I9Y9zTbLIiI8pfeZlFF8DBdoP/Hzg8pqsiE/yiXSFTKByDwKzGwNqz\\n' +
        'F0VoFdIZcIbLdDbzlQitgGpJtvEL7HseB0WH7B2PMMD8KPJlYvPveO3/6OLzCsav\\n' +
        '+CAkvk47NQViKMsUTKOA0JDCW+u981YRozxa3K081snhSiSe83zIPBz1ikldXxO9\\n' +
        '6YYLNPRrj3mi9T/f\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIICrjCCAjSgAwIBAgIRAMkvdFnVDb0mWWFiXqnKH68wCgYIKoZIzj0EAwMwgZYx\\n' +
        'CzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMu\\n' +
        'MRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTEvMC0GA1UEAwwmQW1h\\n' +
        'em9uIFJEUyB1cy13ZXN0LTEgUm9vdCBDQSBFQ0MzODQgRzExEDAOBgNVBAcMB1Nl\\n' +
        'YXR0bGUwIBcNMjEwNTE5MTkxMzI0WhgPMjEyMTA1MTkyMDEzMjRaMIGWMQswCQYD\\n' +
        'VQQGEwJVUzEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjETMBEG\\n' +
        'A1UECwwKQW1hem9uIFJEUzELMAkGA1UECAwCV0ExLzAtBgNVBAMMJkFtYXpvbiBS\\n' +
        'RFMgdXMtd2VzdC0xIFJvb3QgQ0EgRUNDMzg0IEcxMRAwDgYDVQQHDAdTZWF0dGxl\\n' +
        'MHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEy86DB+9th/0A5VcWqMSWDxIUblWTt/R0\\n' +
        'ao6Z2l3vf2YDF2wt1A2NIOGpfQ5+WAOJO/IQmnV9LhYo+kacB8sOnXdQa6biZZkR\\n' +
        'IyouUfikVQAKWEJnh1Cuo5YMM4E2sUt5o0IwQDAPBgNVHRMBAf8EBTADAQH/MB0G\\n' +
        'A1UdDgQWBBQ8u3OnecANmG8OoT7KLWDuFzZwBTAOBgNVHQ8BAf8EBAMCAYYwCgYI\\n' +
        'KoZIzj0EAwMDaAAwZQIwQ817qkb7mWJFnieRAN+m9W3E0FLVKaV3zC5aYJUk2fcZ\\n' +
        'TaUx3oLp3jPLGvY5+wgeAjEA6wAicAki4ZiDfxvAIuYiIe1OS/7H5RA++R8BH6qG\\n' +
        'iRzUBM/FItFpnkus7u/eTkvo\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIICrzCCAjWgAwIBAgIQS/+Ryfgb/IOVEa1pWoe8oTAKBggqhkjOPQQDAzCBlzEL\\n' +
        'MAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4x\\n' +
        'EzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTAwLgYDVQQDDCdBbWF6\\n' +
        'b24gUkRTIGFwLXNvdXRoLTIgUm9vdCBDQSBFQ0MzODQgRzExEDAOBgNVBAcMB1Nl\\n' +
        'YXR0bGUwIBcNMjIwNjA2MjE1NDQyWhgPMjEyMjA2MDYyMjU0NDJaMIGXMQswCQYD\\n' +
        'VQQGEwJVUzEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjETMBEG\\n' +
        'A1UECwwKQW1hem9uIFJEUzELMAkGA1UECAwCV0ExMDAuBgNVBAMMJ0FtYXpvbiBS\\n' +
        'RFMgYXAtc291dGgtMiBSb290IENBIEVDQzM4NCBHMTEQMA4GA1UEBwwHU2VhdHRs\\n' +
        'ZTB2MBAGByqGSM49AgEGBSuBBAAiA2IABDsX6fhdUWBQpYTdseBD/P3s96Dtw2Iw\\n' +
        'OrXKNToCnmX5nMkUGdRn9qKNiz1pw3EPzaPxShbYwQ7LYP09ENK/JN4QQjxMihxC\\n' +
        'jLFxS85nhBQQQGRCWikDAe38mD8fSvREQKNCMEAwDwYDVR0TAQH/BAUwAwEB/zAd\\n' +
        'BgNVHQ4EFgQUIh1xZiseQYFjPYKJmGbruAgRH+AwDgYDVR0PAQH/BAQDAgGGMAoG\\n' +
        'CCqGSM49BAMDA2gAMGUCMFudS4zLy+UUGrtgNLtRMcu/DZ9BUzV4NdHxo0bkG44O\\n' +
        'thnjl4+wTKI6VbyAbj2rkgIxAOHps8NMITU5DpyiMnKTxV8ubb/WGHrLl0BjB8Lw\\n' +
        'ETVJk5DNuZvsIIcm7ykk6iL4Tw==\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        '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\\n' +
        'cuLMVcQZceE=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIEADCCAuigAwIBAgIQAhAteLRCvizAElaWORFU2zANBgkqhkiG9w0BAQsFADCB\\n' +
        'mDELMAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIElu\\n' +
        'Yy4xEzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTEwLwYDVQQDDChB\\n' +
        'bWF6b24gUkRTIG1lLXNvdXRoLTEgUm9vdCBDQSBSU0EyMDQ4IEcxMRAwDgYDVQQH\\n' +
        'DAdTZWF0dGxlMCAXDTIxMDUyMDE3MDkxNloYDzIwNjEwNTIwMTgwOTE2WjCBmDEL\\n' +
        'MAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4x\\n' +
        'EzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTEwLwYDVQQDDChBbWF6\\n' +
        'b24gUkRTIG1lLXNvdXRoLTEgUm9vdCBDQSBSU0EyMDQ4IEcxMRAwDgYDVQQHDAdT\\n' +
        'ZWF0dGxlMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA+qg7JAcOVKjh\\n' +
        'N83SACnBFZPyB63EusfDr/0V9ZdL8lKcmZX9sv/CqoBo3N0EvBqHQqUUX6JvFb7F\\n' +
        'XrMUZ740kr28gSRALfXTFgNODjXeDsCtEkKRTkac/UM8xXHn+hR7UFRPHS3e0GzI\\n' +
        'iLiwQWDkr0Op74W8aM0CfaVKvh2bp4BI1jJbdDnQ9OKXpOxNHGUf0ZGb7TkNPkgI\\n' +
        'b2CBAc8J5o3H9lfw4uiyvl6Fz5JoP+A+zPELAioYBXDrbE7wJeqQDJrETWqR9VEK\\n' +
        'BXURCkVnHeaJy123MpAX2ozf4pqk0V0LOEOZRS29I+USF5DcWr7QIXR/w2I8ws1Q\\n' +
        '7ys+qbE+kQIDAQABo0IwQDAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBQFJ16n\\n' +
        '1EcCMOIhoZs/F9sR+Jy++zAOBgNVHQ8BAf8EBAMCAYYwDQYJKoZIhvcNAQELBQAD\\n' +
        'ggEBAOc5nXbT3XTDEZsxX2iD15YrQvmL5m13B3ImZWpx/pqmObsgx3/dg75rF2nQ\\n' +
        'qS+Vl+f/HLh516pj2BPP/yWCq12TRYigGav8UH0qdT3CAClYy2o+zAzUJHm84oiB\\n' +
        'ud+6pFVGkbqpsY+QMpJUbZWu52KViBpJMYsUEy+9cnPSFRVuRAHjYynSiLk2ZEjb\\n' +
        'Wkdc4x0nOZR5tP0FgrX0Ve2KcjFwVQJVZLgOUqmFYQ/G0TIIGTNh9tcmR7yp+xJR\\n' +
        'A2tbPV2Z6m9Yxx4E8lLEPNuoeouJ/GR4CkMEmF8cLwM310t174o3lKKUXJ4Vs2HO\\n' +
        'Wj2uN6R9oI+jGLMSswTzCNV1vgc=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIICuDCCAj6gAwIBAgIRAOocLeZWjYkG/EbHmscuy8gwCgYIKoZIzj0EAwMwgZsx\\n' +
        'CzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMu\\n' +
        'MRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTE0MDIGA1UEAwwrQW1h\\n' +
        'em9uIFJEUyBhcC1zb3V0aGVhc3QtMSBSb290IENBIEVDQzM4NCBHMTEQMA4GA1UE\\n' +
        'BwwHU2VhdHRsZTAgFw0yMTA1MjEyMTUwMDFaGA8yMTIxMDUyMTIyNTAwMVowgZsx\\n' +
        'CzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMu\\n' +
        'MRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTE0MDIGA1UEAwwrQW1h\\n' +
        'em9uIFJEUyBhcC1zb3V0aGVhc3QtMSBSb290IENBIEVDQzM4NCBHMTEQMA4GA1UE\\n' +
        'BwwHU2VhdHRsZTB2MBAGByqGSM49AgEGBSuBBAAiA2IABCEr3jq1KtRncnZfK5cq\\n' +
        'btY0nW6ZG3FMbh7XwBIR6Ca0f8llGZ4vJEC1pXgiM/4Dh045B9ZIzNrR54rYOIfa\\n' +
        '2NcYZ7mk06DjIQML64hbAxbQzOAuNzLPx268MrlL2uW2XaNCMEAwDwYDVR0TAQH/\\n' +
        'BAUwAwEB/zAdBgNVHQ4EFgQUln75pChychwN4RfHl+tOinMrfVowDgYDVR0PAQH/\\n' +
        'BAQDAgGGMAoGCCqGSM49BAMDA2gAMGUCMGiyPINRU1mwZ4Crw01vpuPvxZxb2IOr\\n' +
        'yX3RNlOIu4We1H+5dQk5tIvH8KGYFbWEpAIxAO9NZ6/j9osMhLgZ0yj0WVjb+uZx\\n' +
        'YlZR9fyFisY/jNfX7QhSk+nrc3SFLRUNtpXrng==\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIEBTCCAu2gAwIBAgIRAKiaRZatN8eiz9p0s0lu0rQwDQYJKoZIhvcNAQELBQAw\\n' +
        'gZoxCzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJ\\n' +
        'bmMuMRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTEzMDEGA1UEAwwq\\n' +
        'QW1hem9uIFJEUyBjYS1jZW50cmFsLTEgUm9vdCBDQSBSU0EyMDQ4IEcxMRAwDgYD\\n' +
        'VQQHDAdTZWF0dGxlMCAXDTIxMDUyMTIyMDIzNVoYDzIwNjEwNTIxMjMwMjM1WjCB\\n' +
        'mjELMAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIElu\\n' +
        'Yy4xEzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTMwMQYDVQQDDCpB\\n' +
        'bWF6b24gUkRTIGNhLWNlbnRyYWwtMSBSb290IENBIFJTQTIwNDggRzExEDAOBgNV\\n' +
        'BAcMB1NlYXR0bGUwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCygVMf\\n' +
        'qB865IR9qYRBRFHn4eAqGJOCFx+UbraQZmjr/mnRqSkY+nhbM7Pn/DWOrRnxoh+w\\n' +
        'q5F9ZxdZ5D5T1v6kljVwxyfFgHItyyyIL0YS7e2h7cRRscCM+75kMedAP7icb4YN\\n' +
        'LfWBqfKHbHIOqvvQK8T6+Emu/QlG2B5LvuErrop9K0KinhITekpVIO4HCN61cuOe\\n' +
        'CADBKF/5uUJHwS9pWw3uUbpGUwsLBuhJzCY/OpJlDqC8Y9aToi2Ivl5u3/Q/sKjr\\n' +
        '6AZb9lx4q3J2z7tJDrm5MHYwV74elGSXoeoG8nODUqjgklIWAPrt6lQ3WJpO2kug\\n' +
        '8RhCdSbWkcXHfX95AgMBAAGjQjBAMA8GA1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYE\\n' +
        'FOIxhqTPkKVqKBZvMWtKewKWDvDBMA4GA1UdDwEB/wQEAwIBhjANBgkqhkiG9w0B\\n' +
        'AQsFAAOCAQEAqoItII89lOl4TKvg0I1EinxafZLXIheLcdGCxpjRxlZ9QMQUN3yb\\n' +
        'y/8uFKBL0otbQgJEoGhxm4h0tp54g28M6TN1U0332dwkjYxUNwvzrMaV5Na55I2Z\\n' +
        '1hq4GB3NMXW+PvdtsgVOZbEN+zOyOZ5MvJHEQVkT3YRnf6avsdntltcRzHJ16pJc\\n' +
        'Y8rR7yWwPXh1lPaPkxddrCtwayyGxNbNmRybjR48uHRhwu7v2WuAMdChL8H8bp89\\n' +
        'TQLMrMHgSbZfee9hKhO4Zebelf1/cslRSrhkG0ESq6G5MUINj6lMg2g6F0F7Xz2v\\n' +
        'ncD/vuRN5P+vT8th/oZ0Q2Gc68Pun0cn/g==\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIID/zCCAuegAwIBAgIRAJYlnmkGRj4ju/2jBQsnXJYwDQYJKoZIhvcNAQELBQAw\\n' +
        'gZcxCzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJ\\n' +
        'bmMuMRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTEwMC4GA1UEAwwn\\n' +
        'QW1hem9uIFJEUyB1cy1lYXN0LTIgUm9vdCBDQSBSU0EyMDQ4IEcxMRAwDgYDVQQH\\n' +
        'DAdTZWF0dGxlMCAXDTIxMDUyMTIzMDQ0NFoYDzIwNjEwNTIyMDAwNDQ0WjCBlzEL\\n' +
        'MAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4x\\n' +
        'EzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTAwLgYDVQQDDCdBbWF6\\n' +
        'b24gUkRTIHVzLWVhc3QtMiBSb290IENBIFJTQTIwNDggRzExEDAOBgNVBAcMB1Nl\\n' +
        'YXR0bGUwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQC74V3eigv+pCj5\\n' +
        'nqDBqplY0Jp16pTeNB06IKbzb4MOTvNde6QjsZxrE1xUmprT8LxQqN9tI3aDYEYk\\n' +
        'b9v4F99WtQVgCv3Y34tYKX9NwWQgwS1vQwnIR8zOFBYqsAsHEkeJuSqAB12AYUSd\\n' +
        'Zv2RVFjiFmYJho2X30IrSLQfS/IE3KV7fCyMMm154+/K1Z2IJlcissydEAwgsUHw\\n' +
        'edrE6CxJVkkJ3EvIgG4ugK/suxd8eEMztaQYJwSdN8TdfT59LFuSPl7zmF3fIBdJ\\n' +
        '//WexcQmGabaJ7Xnx+6o2HTfkP8Zzzzaq8fvjAcvA7gyFH5EP26G2ZqMG+0y4pTx\\n' +
        'SPVTrQEXAgMBAAGjQjBAMA8GA1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYEFIWWuNEF\\n' +
        'sUMOC82XlfJeqazzrkPDMA4GA1UdDwEB/wQEAwIBhjANBgkqhkiG9w0BAQsFAAOC\\n' +
        'AQEAgClmxcJaQTGpEZmjElL8G2Zc8lGc+ylGjiNlSIw8X25/bcLRptbDA90nuP+q\\n' +
        'zXAMhEf0ccbdpwxG/P5a8JipmHgqQLHfpkvaXx+0CuP++3k+chAJ3Gk5XtY587jX\\n' +
        '+MJfrPgjFt7vmMaKmynndf+NaIJAYczjhJj6xjPWmGrjM3MlTa9XesmelMwP3jep\\n' +
        'bApIWAvCYVjGndbK9byyMq1nyj0TUzB8oJZQooaR3MMjHTmADuVBylWzkRMxbKPl\\n' +
        '4Nlsk4Ef1JvIWBCzsMt+X17nuKfEatRfp3c9tbpGlAE/DSP0W2/Lnayxr4RpE9ds\\n' +
        'ICF35uSis/7ZlsftODUe8wtpkQ==\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        '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\\n' +
        'Pqj2\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        '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\\n' +
        'KDPtFEk=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIICtzCCAj2gAwIBAgIQVZ5Y/KqjR4XLou8MCD5pOjAKBggqhkjOPQQDAzCBmzEL\\n' +
        'MAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4x\\n' +
        'EzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTQwMgYDVQQDDCtBbWF6\\n' +
        'b24gUkRTIGFwLXNvdXRoZWFzdC00IFJvb3QgQ0EgRUNDMzg0IEcxMRAwDgYDVQQH\\n' +
        'DAdTZWF0dGxlMCAXDTIyMDUyNTE2NTgzM1oYDzIxMjIwNTI1MTc1ODMzWjCBmzEL\\n' +
        'MAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4x\\n' +
        'EzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTQwMgYDVQQDDCtBbWF6\\n' +
        'b24gUkRTIGFwLXNvdXRoZWFzdC00IFJvb3QgQ0EgRUNDMzg0IEcxMRAwDgYDVQQH\\n' +
        'DAdTZWF0dGxlMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEbo473OmpD5vkckdJajXg\\n' +
        'brhmNFyoSa0WCY1njuZC2zMFp3zP6rX4I1r3imrYnJd9pFH/aSiV/r6L5ACE5RPx\\n' +
        '4qdg5SQ7JJUaZc3DWsTOiOed7BCZSzM+KTYK/2QzDMApo0IwQDAPBgNVHRMBAf8E\\n' +
        'BTADAQH/MB0GA1UdDgQWBBTmogc06+1knsej1ltKUOdWFvwgsjAOBgNVHQ8BAf8E\\n' +
        'BAMCAYYwCgYIKoZIzj0EAwMDaAAwZQIxAIs7TlLMbGTWNXpGiKf9DxaM07d/iDHe\\n' +
        'F/Vv/wyWSTGdobxBL6iArQNVXz0Gr4dvPAIwd0rsoa6R0x5mtvhdRPtM37FYrbHJ\\n' +
        'pbV+OMusQqcSLseunLBoCHenvJW0QOCQ8EDY\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIICvTCCAkOgAwIBAgIQCIY7E/bFvFN2lK9Kckb0dTAKBggqhkjOPQQDAzCBnjEL\\n' +
        'MAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4x\\n' +
        'EzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTcwNQYDVQQDDC5BbWF6\\n' +
        'b24gUkRTIFByZXZpZXcgdXMtZWFzdC0yIFJvb3QgQ0EgRUNDMzg0IEcxMRAwDgYD\\n' +
        'VQQHDAdTZWF0dGxlMCAXDTIxMDUxODIxMDUxMFoYDzIxMjEwNTE4MjIwNTEwWjCB\\n' +
        'njELMAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIElu\\n' +
        'Yy4xEzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTcwNQYDVQQDDC5B\\n' +
        'bWF6b24gUkRTIFByZXZpZXcgdXMtZWFzdC0yIFJvb3QgQ0EgRUNDMzg0IEcxMRAw\\n' +
        'DgYDVQQHDAdTZWF0dGxlMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEMI0hzf1JCEOI\\n' +
        'Eue4+DmcNnSs2i2UaJxHMrNGGfU7b42a7vwP53F7045ffHPBGP4jb9q02/bStZzd\\n' +
        'VHqfcgqkSRI7beBKjD2mfz82hF/wJSITTgCLs+NRpS6zKMFOFHUNo0IwQDAPBgNV\\n' +
        'HRMBAf8EBTADAQH/MB0GA1UdDgQWBBS8uF/6hk5mPLH4qaWv9NVZaMmyTjAOBgNV\\n' +
        'HQ8BAf8EBAMCAYYwCgYIKoZIzj0EAwMDaAAwZQIxAO7Pu9wzLyM0X7Q08uLIL+vL\\n' +
        'qaxe3UFuzFTWjM16MLJHbzLf1i9IDFKz+Q4hXCSiJwIwClMBsqT49BPUxVsJnjGr\\n' +
        'EbyEk6aOOVfY1p2yQL649zh3M4h8okLnwf+bYIb1YpeU\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIEADCCAuigAwIBAgIQY+JhwFEQTe36qyRlUlF8ozANBgkqhkiG9w0BAQsFADCB\\n' +
        'mDELMAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIElu\\n' +
        'Yy4xEzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTEwLwYDVQQDDChB\\n' +
        'bWF6b24gUkRTIGFmLXNvdXRoLTEgUm9vdCBDQSBSU0EyMDQ4IEcxMRAwDgYDVQQH\\n' +
        'DAdTZWF0dGxlMCAXDTIxMDUxOTE5MjQxNloYDzIwNjEwNTE5MjAyNDE2WjCBmDEL\\n' +
        'MAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4x\\n' +
        'EzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTEwLwYDVQQDDChBbWF6\\n' +
        'b24gUkRTIGFmLXNvdXRoLTEgUm9vdCBDQSBSU0EyMDQ4IEcxMRAwDgYDVQQHDAdT\\n' +
        'ZWF0dGxlMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAnIye77j6ev40\\n' +
        '8wRPyN2OdKFSUfI9jB20Or2RLO+RDoL43+USXdrze0Wv4HMRLqaen9BcmCfaKMp0\\n' +
        'E4SFo47bXK/O17r6G8eyq1sqnHE+v288mWtYH9lAlSamNFRF6YwA7zncmE/iKL8J\\n' +
        '0vePHMHP/B6svw8LULZCk+nZk3tgxQn2+r0B4FOz+RmpkoVddfqqUPMbKUxhM2wf\\n' +
        'fO7F6bJaUXDNMBPhCn/3ayKCjYr49ErmnpYV2ZVs1i34S+LFq39J7kyv6zAgbHv9\\n' +
        '+/MtRMoRB1CjpqW0jIOZkHBdYcd1o9p1zFn591Do1wPkmMsWdjIYj+6e7UXcHvOB\\n' +
        '2+ScIRAcnwIDAQABo0IwQDAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBQGtq2W\\n' +
        'YSyMMxpdQ3IZvcGE+nyZqTAOBgNVHQ8BAf8EBAMCAYYwDQYJKoZIhvcNAQELBQAD\\n' +
        'ggEBAEgoP3ixJsKSD5FN8dQ01RNHERl/IFbA7TRXfwC+L1yFocKnQh4Mp/msPRSV\\n' +
        '+OeHIvemPW/wtZDJzLTOFJ6eTolGekHK1GRTQ6ZqsWiU2fmiOP8ks4oSpI+tQ9Lw\\n' +
        'VrfZqTiEcS5wEIqyfUAZZfKDo7W1xp+dQWzfczSBuZJZwI5iaha7+ILM0r8Ckden\\n' +
        'TVTapc5pLSoO15v0ziRuQ2bT3V3nwu/U0MRK44z+VWOJdSiKxdnOYDs8hFNnKhfe\\n' +
        'klbTZF7kW7WbiNYB43OaAQBJ6BALZsIskEaqfeZT8FD71uN928TcEQyBDXdZpRN+\\n' +
        'iGQZDGhht0r0URGMDSs9waJtTfA=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIF/jCCA+agAwIBAgIQXY/dmS+72lZPranO2JM9jjANBgkqhkiG9w0BAQwFADCB\\n' +
        'lzELMAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIElu\\n' +
        'Yy4xEzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTAwLgYDVQQDDCdB\\n' +
        'bWF6b24gUkRTIGFwLWVhc3QtMSBSb290IENBIFJTQTQwOTYgRzExEDAOBgNVBAcM\\n' +
        'B1NlYXR0bGUwIBcNMjEwNTI1MjEzNDUxWhgPMjEyMTA1MjUyMjM0NTFaMIGXMQsw\\n' +
        'CQYDVQQGEwJVUzEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjET\\n' +
        'MBEGA1UECwwKQW1hem9uIFJEUzELMAkGA1UECAwCV0ExMDAuBgNVBAMMJ0FtYXpv\\n' +
        'biBSRFMgYXAtZWFzdC0xIFJvb3QgQ0EgUlNBNDA5NiBHMTEQMA4GA1UEBwwHU2Vh\\n' +
        'dHRsZTCCAiIwDQYJKoZIhvcNAQEBBQADggIPADCCAgoCggIBAMyW9kBJjD/hx8e8\\n' +
        'b5E1sF42bp8TXsz1htSYE3Tl3T1Aq379DfEhB+xa/ASDZxt7/vwa81BkNo4M6HYq\\n' +
        'okYIXeE7cu5SnSgjWXqcERhgPevtAwgmhdE3yREe8oz2DyOi2qKKZqah+1gpPaIQ\\n' +
        'fK0uAqoeQlyHosye3KZZKkDHBatjBsQ5kf8lhuf7wVulEZVRHY2bP2X7N98PfbpL\\n' +
        'QdH7mWXzDtJJ0LiwFwds47BrkgK1pkHx2p1mTo+HMkfX0P6Fq1atkVC2RHHtbB/X\\n' +
        'iYyH7paaHBzviFrhr679zNqwXIOKlbf74w3mS11P76rFn9rS1BAH2Qm6eY5S/Fxe\\n' +
        'HEKXm4kjPN63Zy0p3yE5EjPt54yPkvumOnT+RqDGJ2HCI9k8Ehcbve0ogfdRKNqQ\\n' +
        'VHWYTy8V33ndQRHZlx/CuU1yN61TH4WSoMly1+q1ihTX9sApmlQ14B2pJi/9DnKW\\n' +
        'cwECrPy1jAowC2UJ45RtC8UC05CbP9yrIy/7Noj8gQDiDOepm+6w1g6aNlWoiuQS\\n' +
        'kyI6nzz1983GcnOHya73ga7otXo0Qfg9jPghlYiMomrgshlSLDHZG0Ib/3hb8cnR\\n' +
        '1OcN9FpzNmVK2Ll1SmTMLrIhuCkyNYX9O/bOknbcf706XeESxGduSkHEjIw/k1+2\\n' +
        'Atteoq5dT6cwjnJ9hyhiueVlVkiDAgMBAAGjQjBAMA8GA1UdEwEB/wQFMAMBAf8w\\n' +
        'HQYDVR0OBBYEFLUI+DD7RJs+0nRnjcwIVWzzYSsFMA4GA1UdDwEB/wQEAwIBhjAN\\n' +
        'BgkqhkiG9w0BAQwFAAOCAgEAb1mcCHv4qMQetLGTBH9IxsB2YUUhr5dda0D2BcHr\\n' +
        'UtDbfd0VQs4tux6h/6iKwHPx0Ew8fuuYj99WknG0ffgJfNc5/fMspxR/pc1jpdyU\\n' +
        '5zMQ+B9wi0lOZPO9uH7/pr+d2odcNEy8zAwqdv/ihsTwLmGP54is9fVbsgzNW1cm\\n' +
        'HKAVL2t/Ope+3QnRiRilKCN1lzhav4HHdLlN401TcWRWKbEuxF/FgxSO2Hmx86pj\\n' +
        'e726lweCTMmnq/cTsPOVY0WMjs0or3eHDVlyLgVeV5ldyN+ptg3Oit60T05SRa58\\n' +
        'AJPTaVKIcGQ/gKkKZConpu7GDofT67P/ox0YNY57LRbhsx9r5UY4ROgz7WMQ1yoS\\n' +
        'Y+19xizm+mBm2PyjMUbfwZUyCxsdKMwVdOq5/UmTmdms+TR8+m1uBHPOTQ2vKR0s\\n' +
        'Pd/THSzPuu+d3dbzRyDSLQbHFFneG760CUlD/ZmzFlQjJ89/HmAmz8IyENq+Sjhx\\n' +
        'Jgzy+FjVZb8aRUoYLlnffpUpej1n87Ynlr1GrvC4GsRpNpOHlwuf6WD4W0qUTsC/\\n' +
        'C9JO+fBzUj/aWlJzNcLEW6pte1SB+EdkR2sZvWH+F88TxemeDrV0jKJw5R89CDf8\\n' +
        'ZQNfkxJYjhns+YeV0moYjqQdc7tq4i04uggEQEtVzEhRLU5PE83nlh/K2NZZm8Kj\\n' +
        'dIA=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIID/zCCAuegAwIBAgIRAPVSMfFitmM5PhmbaOFoGfUwDQYJKoZIhvcNAQELBQAw\\n' +
        'gZcxCzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJ\\n' +
        'bmMuMRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTEwMC4GA1UEAwwn\\n' +
        'QW1hem9uIFJEUyB1cy1lYXN0LTEgUm9vdCBDQSBSU0EyMDQ4IEcxMRAwDgYDVQQH\\n' +
        'DAdTZWF0dGxlMCAXDTIxMDUyNTIyMzQ1N1oYDzIwNjEwNTI1MjMzNDU3WjCBlzEL\\n' +
        'MAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4x\\n' +
        'EzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTAwLgYDVQQDDCdBbWF6\\n' +
        'b24gUkRTIHVzLWVhc3QtMSBSb290IENBIFJTQTIwNDggRzExEDAOBgNVBAcMB1Nl\\n' +
        'YXR0bGUwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDu9H7TBeGoDzMr\\n' +
        'dxN6H8COntJX4IR6dbyhnj5qMD4xl/IWvp50lt0VpmMd+z2PNZzx8RazeGC5IniV\\n' +
        '5nrLg0AKWRQ2A/lGGXbUrGXCSe09brMQCxWBSIYe1WZZ1iU1IJ/6Bp4D2YEHpXrW\\n' +
        'bPkOq5x3YPcsoitgm1Xh8ygz6vb7PsvJvPbvRMnkDg5IqEThapPjmKb8ZJWyEFEE\\n' +
        'QRrkCIRueB1EqQtJw0fvP4PKDlCJAKBEs/y049FoOqYpT3pRy0WKqPhWve+hScMd\\n' +
        '6obq8kxTFy1IHACjHc51nrGII5Bt76/MpTWhnJIJrCnq1/Uc3Qs8IVeb+sLaFC8K\\n' +
        'DI69Sw6bAgMBAAGjQjBAMA8GA1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYEFE7PCopt\\n' +
        'lyOgtXX0Y1lObBUxuKaCMA4GA1UdDwEB/wQEAwIBhjANBgkqhkiG9w0BAQsFAAOC\\n' +
        'AQEAFj+bX8gLmMNefr5jRJfHjrL3iuZCjf7YEZgn89pS4z8408mjj9z6Q5D1H7yS\\n' +
        'jNETVV8QaJip1qyhh5gRzRaArgGAYvi2/r0zPsy+Tgf7v1KGL5Lh8NT8iCEGGXwF\\n' +
        'g3Ir+Nl3e+9XUp0eyyzBIjHtjLBm6yy8rGk9p6OtFDQnKF5OxwbAgip42CD75r/q\\n' +
        'p421maEDDvvRFR4D+99JZxgAYDBGqRRceUoe16qDzbMvlz0A9paCZFclxeftAxv6\\n' +
        'QlR5rItMz/XdzpBJUpYhdzM0gCzAzdQuVO5tjJxmXhkSMcDP+8Q+Uv6FA9k2VpUV\\n' +
        'E/O5jgpqUJJ2Hc/5rs9VkAPXeA==\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIICrzCCAjWgAwIBAgIQW0yuFCle3uj4vWiGU0SaGzAKBggqhkjOPQQDAzCBlzEL\\n' +
        'MAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4x\\n' +
        'EzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTAwLgYDVQQDDCdBbWF6\\n' +
        'b24gUkRTIGFmLXNvdXRoLTEgUm9vdCBDQSBFQ0MzODQgRzExEDAOBgNVBAcMB1Nl\\n' +
        'YXR0bGUwIBcNMjEwNTE5MTkzNTE2WhgPMjEyMTA1MTkyMDM1MTZaMIGXMQswCQYD\\n' +
        'VQQGEwJVUzEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjETMBEG\\n' +
        'A1UECwwKQW1hem9uIFJEUzELMAkGA1UECAwCV0ExMDAuBgNVBAMMJ0FtYXpvbiBS\\n' +
        'RFMgYWYtc291dGgtMSBSb290IENBIEVDQzM4NCBHMTEQMA4GA1UEBwwHU2VhdHRs\\n' +
        'ZTB2MBAGByqGSM49AgEGBSuBBAAiA2IABDPiKNZSaXs3Un/J/v+LTsFDANHpi7en\\n' +
        'oL2qh0u0DoqNzEBTbBjvO23bLN3k599zh6CY3HKW0r2k1yaIdbWqt4upMCRCcUFi\\n' +
        'I4iedAmubgzh56wJdoMZztjXZRwDthTkJKNCMEAwDwYDVR0TAQH/BAUwAwEB/zAd\\n' +
        'BgNVHQ4EFgQUWbYkcrvVSnAWPR5PJhIzppcAnZIwDgYDVR0PAQH/BAQDAgGGMAoG\\n' +
        'CCqGSM49BAMDA2gAMGUCMCESGqpat93CjrSEjE7z+Hbvz0psZTHwqaxuiH64GKUm\\n' +
        'mYynIiwpKHyBrzjKBmeDoQIxANGrjIo6/b8Jl6sdIZQI18V0pAyLfLiZjlHVOnhM\\n' +
        'MOTVgr82ZuPoEHTX78MxeMnYlw==\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIECTCCAvGgAwIBAgIRAIbsx8XOl0sgTNiCN4O+18QwDQYJKoZIhvcNAQELBQAw\\n' +
        'gZwxCzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJ\\n' +
        'bmMuMRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTE1MDMGA1UEAwws\\n' +
        'QW1hem9uIFJEUyBhcC1ub3J0aGVhc3QtMSBSb290IENBIFJTQTIwNDggRzExEDAO\\n' +
        'BgNVBAcMB1NlYXR0bGUwIBcNMjEwNTI1MjE1NDU4WhgPMjA2MTA1MjUyMjU0NTha\\n' +
        'MIGcMQswCQYDVQQGEwJVUzEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywg\\n' +
        'SW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzELMAkGA1UECAwCV0ExNTAzBgNVBAMM\\n' +
        'LEFtYXpvbiBSRFMgYXAtbm9ydGhlYXN0LTEgUm9vdCBDQSBSU0EyMDQ4IEcxMRAw\\n' +
        'DgYDVQQHDAdTZWF0dGxlMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA\\n' +
        'tROxwXWCgn5R9gI/2Ivjzaxc0g95ysBjoJsnhPdJEHQb7w3y2kWrVWU3Y9fOitgb\\n' +
        'CEsnEC3PrhRnzNVW0fPsK6kbvOeCmjvY30rdbxbc8h+bjXfGmIOgAkmoULEr6Hc7\\n' +
        'G1Q/+tvv4lEwIs7bEaf+abSZxRJbZ0MBxhbHn7UHHDiMZYvzK+SV1MGCxx7JVhrm\\n' +
        'xWu3GC1zZCsGDhB9YqY9eR6PmjbqA5wy8vqbC57dZZa1QVtWIQn3JaRXn+faIzHx\\n' +
        'nLMN5CEWihsdmHBXhnRboXprE/OS4MFv1UrQF/XM/h5RBeCywpHePpC+Oe1T3LNC\\n' +
        'iP8KzRFrjC1MX/WXJnmOVQIDAQABo0IwQDAPBgNVHRMBAf8EBTADAQH/MB0GA1Ud\\n' +
        'DgQWBBS33XbXAUMs1znyZo4B0+B3D68WFTAOBgNVHQ8BAf8EBAMCAYYwDQYJKoZI\\n' +
        'hvcNAQELBQADggEBADuadd2EmlpueY2VlrIIPC30QkoA1EOSoCmZgN6124apkoY1\\n' +
        'HiV4r+QNPljN4WP8gmcARnNkS7ZeR4fvWi8xPh5AxQCpiaBMw4gcbTMCuKDV68Pw\\n' +
        'P2dZCTMspvR3CDfM35oXCufdtFnxyU6PAyINUqF/wyTHguO3owRFPz64+sk3r2pT\\n' +
        'WHmJjG9E7V+KOh0s6REgD17Gqn6C5ijLchSrPUHB0wOIkeLJZndHxN/76h7+zhMt\\n' +
        'fFeNxPWHY2MfpcaLjz4UREzZPSB2U9k+y3pW1omCIcl6MQU9itGx/LpQE+H3ZeX2\\n' +
        'M2bdYd5L+ow+bdbGtsVKOuN+R9Dm17YpswF+vyQ=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        '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\\n' +
        'Em4Hy3A=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        '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\\n' +
        'jGKc3k6UNxpg\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        '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\\n' +
        '0Ws=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIICtDCCAjqgAwIBAgIRAMyaTlVLN0ndGp4ffwKAfoMwCgYIKoZIzj0EAwMwgZkx\\n' +
        'CzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMu\\n' +
        'MRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTEyMDAGA1UEAwwpQW1h\\n' +
        'em9uIFJEUyBtZS1jZW50cmFsLTEgUm9vdCBDQSBFQ0MzODQgRzExEDAOBgNVBAcM\\n' +
        'B1NlYXR0bGUwIBcNMjIwNTA3MDA0NDM3WhgPMjEyMjA1MDcwMTQ0MzdaMIGZMQsw\\n' +
        'CQYDVQQGEwJVUzEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjET\\n' +
        'MBEGA1UECwwKQW1hem9uIFJEUzELMAkGA1UECAwCV0ExMjAwBgNVBAMMKUFtYXpv\\n' +
        'biBSRFMgbWUtY2VudHJhbC0xIFJvb3QgQ0EgRUNDMzg0IEcxMRAwDgYDVQQHDAdT\\n' +
        'ZWF0dGxlMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAE19nCV1nsI6CohSor13+B25cr\\n' +
        'zg+IHdi9Y3L7ziQnHWI6yjBazvnKD+oC71aRRlR8b5YXsYGUQxWzPLHN7EGPcSGv\\n' +
        'bzA9SLG1KQYCJaQ0m9Eg/iGrwKWOgylbhVw0bCxoo0IwQDAPBgNVHRMBAf8EBTAD\\n' +
        'AQH/MB0GA1UdDgQWBBS4KsknsJXM9+QPEkBdZxUPaLr11zAOBgNVHQ8BAf8EBAMC\\n' +
        'AYYwCgYIKoZIzj0EAwMDaAAwZQIxAJaRgrYIEfXQMZQQDxMTYS0azpyWSseQooXo\\n' +
        'L3nYq4OHGBgYyQ9gVjvRYWU85PXbfgIwdi82DtANQFkCu+j+BU0JBY/uRKPEeYzo\\n' +
        'JG92igKIcXPqCoxIJ7lJbbzmuf73gQu5\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        '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\\n' +
        'Tspdjbg=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIECTCCAvGgAwIBAgIRAJZFh4s9aZGzKaTMLrSb4acwDQYJKoZIhvcNAQELBQAw\\n' +
        'gZwxCzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJ\\n' +
        'bmMuMRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTE1MDMGA1UEAwws\\n' +
        'QW1hem9uIFJEUyBCZXRhIHVzLWVhc3QtMSBSb290IENBIFJTQTIwNDggRzExEDAO\\n' +
        'BgNVBAcMB1NlYXR0bGUwIBcNMjEwNTE4MjEyODQxWhgPMjA2MTA1MTgyMjI4NDFa\\n' +
        'MIGcMQswCQYDVQQGEwJVUzEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywg\\n' +
        'SW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzELMAkGA1UECAwCV0ExNTAzBgNVBAMM\\n' +
        'LEFtYXpvbiBSRFMgQmV0YSB1cy1lYXN0LTEgUm9vdCBDQSBSU0EyMDQ4IEcxMRAw\\n' +
        'DgYDVQQHDAdTZWF0dGxlMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA\\n' +
        '17i2yoU6diep+WrqxIn2CrDEO2NdJVwWTSckx4WMZlLpkQDoymSmkNHjq9ADIApD\\n' +
        'A31Cx+843apL7wub8QkFZD0Tk7/ThdHWJOzcAM3ov98QBPQfOC1W5zYIIRP2F+vQ\\n' +
        'TRETHQnLcW3rLv0NMk5oQvIKpJoC9ett6aeVrzu+4cU4DZVWYlJUoC/ljWzCluau\\n' +
        '8blfW0Vwin6OB7s0HCG5/wijQWJBU5SrP/KAIPeQi1GqG5efbqAXDr/ple0Ipwyo\\n' +
        'Xjjl73LenGUgqpANlC9EAT4i7FkJcllLPeK3NcOHjuUG0AccLv1lGsHAxZLgjk/x\\n' +
        'z9ZcnVV9UFWZiyJTKxeKPwIDAQABo0IwQDAPBgNVHRMBAf8EBTADAQH/MB0GA1Ud\\n' +
        'DgQWBBRWyMuZUo4gxCR3Luf9/bd2AqZ7CjAOBgNVHQ8BAf8EBAMCAYYwDQYJKoZI\\n' +
        'hvcNAQELBQADggEBAIqN2DlIKlvDFPO0QUZQVFbsi/tLdYM98/vvzBpttlTGVMyD\\n' +
        'gJuQeHVz+MnhGIwoCGOlGU3OOUoIlLAut0+WG74qYczn43oA2gbMd7HoD7oL/IGg\\n' +
        'njorBwJVcuuLv2G//SqM3nxGcLRtkRnQ+lvqPxMz9+0fKFUn6QcIDuF0QSfthLs2\\n' +
        'WSiGEPKO9c9RSXdRQ4pXA7c3hXng8P4A2ZmdciPne5Nu4I4qLDGZYRrRLRkNTrOi\\n' +
        'TyS6r2HNGUfgF7eOSeKt3NWL+mNChcYj71/Vycf5edeczpUgfnWy9WbPrK1svKyl\\n' +
        'aAs2xg+X6O8qB+Mnj2dNBzm+lZIS3sIlm+nO9sg=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIICrjCCAjSgAwIBAgIRAPAlEk8VJPmEzVRRaWvTh2AwCgYIKoZIzj0EAwMwgZYx\\n' +
        'CzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMu\\n' +
        'MRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTEvMC0GA1UEAwwmQW1h\\n' +
        'em9uIFJEUyB1cy1lYXN0LTEgUm9vdCBDQSBFQ0MzODQgRzExEDAOBgNVBAcMB1Nl\\n' +
        'YXR0bGUwIBcNMjEwNTI1MjI0MTU1WhgPMjEyMTA1MjUyMzQxNTVaMIGWMQswCQYD\\n' +
        'VQQGEwJVUzEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjETMBEG\\n' +
        'A1UECwwKQW1hem9uIFJEUzELMAkGA1UECAwCV0ExLzAtBgNVBAMMJkFtYXpvbiBS\\n' +
        'RFMgdXMtZWFzdC0xIFJvb3QgQ0EgRUNDMzg0IEcxMRAwDgYDVQQHDAdTZWF0dGxl\\n' +
        'MHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEx5xjrup8II4HOJw15NTnS3H5yMrQGlbj\\n' +
        'EDA5MMGnE9DmHp5dACIxmPXPMe/99nO7wNdl7G71OYPCgEvWm0FhdvVUeTb3LVnV\\n' +
        'BnaXt32Ek7/oxGk1T+Df03C+W0vmuJ+wo0IwQDAPBgNVHRMBAf8EBTADAQH/MB0G\\n' +
        'A1UdDgQWBBTGXmqBWN/1tkSea4pNw0oHrjk2UDAOBgNVHQ8BAf8EBAMCAYYwCgYI\\n' +
        'KoZIzj0EAwMDaAAwZQIxAIqqZWCSrIkZ7zsv/FygtAusW6yvlL935YAWYPVXU30m\\n' +
        'jkMFLM+/RJ9GMvnO8jHfCgIwB+whlkcItzE9CRQ6CsMo/d5cEHDUu/QW6jSIh9BR\\n' +
        'OGh9pTYPVkUbBiKPA7lVVhre\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        '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\\n' +
        'nWS0\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIGCTCCA/GgAwIBAgIRAOY7gfcBZgR2tqfBzMbFQCUwDQYJKoZIhvcNAQEMBQAw\\n' +
        'gZwxCzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJ\\n' +
        'bmMuMRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTE1MDMGA1UEAwws\\n' +
        'QW1hem9uIFJEUyBhcC1zb3V0aGVhc3QtNCBSb290IENBIFJTQTQwOTYgRzExEDAO\\n' +
        'BgNVBAcMB1NlYXR0bGUwIBcNMjIwNTI1MTY1NDU5WhgPMjEyMjA1MjUxNzU0NTla\\n' +
        'MIGcMQswCQYDVQQGEwJVUzEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywg\\n' +
        'SW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzELMAkGA1UECAwCV0ExNTAzBgNVBAMM\\n' +
        'LEFtYXpvbiBSRFMgYXAtc291dGhlYXN0LTQgUm9vdCBDQSBSU0E0MDk2IEcxMRAw\\n' +
        'DgYDVQQHDAdTZWF0dGxlMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA\\n' +
        'lfxER43FuLRdL08bddF0YhbCP+XXKj1A/TFMXmd2My8XDei8rPXFYyyjMig9+xZw\\n' +
        'uAsIxLwz8uiA26CKA8bCZKg5VG2kTeOJAfvBJaLv1CZefs3Z4Uf1Sjvm6MF2yqEj\\n' +
        'GoORfyfL9HiZFTDuF/hcjWoKYCfMuG6M/wO8IbdICrX3n+BiYQJu/pFO660Mg3h/\\n' +
        '8YBBWYDbHoCiH/vkqqJugQ5BM3OI5nsElW51P1icEEqti4AZ7JmtSv9t7fIFBVyR\\n' +
        'oaEyOgpp0sm193F/cDJQdssvjoOnaubsSYm1ep3awZAUyGN/X8MBrPY95d0hLhfH\\n' +
        'Ehc5Icyg+hsosBljlAyksmt4hFQ9iBnWIz/ZTfGMck+6p3HVL9RDgvluez+rWv59\\n' +
        '8q7omUGsiPApy5PDdwI/Wt/KtC34/2sjslIJfvgifdAtkRPkhff1WEwER00ADrN9\\n' +
        'eGGInaCpJfb1Rq8cV2n00jxg7DcEd65VR3dmIRb0bL+jWK62ni/WdEyomAOMfmGj\\n' +
        'aWf78S/4rasHllWJ+QwnaUYY3u6N8Cgio0/ep4i34FxMXqMV3V0/qXdfhyabi/LM\\n' +
        'wCxNo1Dwt+s6OtPJbwO92JL+829QAxydfmaMTeHBsgMPkG7RwAekeuatKGHNsc2Z\\n' +
        'x2Q4C2wVvOGAhcHwxfM8JfZs3nDSZJndtVVnFlUY0UECAwEAAaNCMEAwDwYDVR0T\\n' +
        'AQH/BAUwAwEB/zAdBgNVHQ4EFgQUpnG7mWazy6k97/tb5iduRB3RXgQwDgYDVR0P\\n' +
        'AQH/BAQDAgGGMA0GCSqGSIb3DQEBDAUAA4ICAQCDLqq1Wwa9Tkuv7vxBnIeVvvFF\\n' +
        'ecTn+P+wJxl9Qa2ortzqTHZsBDyJO62d04AgBwiDXkJ9a+bthgG0H1J7Xee8xqv1\\n' +
        'xyX2yKj24ygHjspLotKP4eDMdDi5TYq+gdkbPmm9Q69B1+W6e049JVGXvWG8/7kU\\n' +
        'igxeuCYwtCCdUPRLf6D8y+1XMGgVv3/DSOHWvTg3MJ1wJ3n3+eve3rjGdRYWZeJu\\n' +
        'k21HLSZYzVrCtUsh2YAeLnUbSxVuT2Xr4JehYe9zW5HEQ8Je/OUfnCy9vzoN/ITw\\n' +
        'osAH+EBJQey7RxEDqMwCaRefH0yeHFcnOll0OXg/urnQmwbEYzQ1uutJaBPsjU0J\\n' +
        'Qf06sMxI7GiB5nPE+CnI2sM6A9AW9kvwexGXpNJiLxF8dvPQthpOKGcYu6BFvRmt\\n' +
        '6ctfXd9b7JJoVqMWuf5cCY6ihpk1e9JTlAqu4Eb/7JNyGiGCR40iSLvV28un9wiE\\n' +
        'plrdYxwcNYq851BEu3r3AyYWw/UW1AKJ5tM+/Gtok+AphMC9ywT66o/Kfu44mOWm\\n' +
        'L3nSLSWEcgfUVgrikpnyGbUnGtgCmHiMlUtNVexcE7OtCIZoVAlCGKNu7tyuJf10\\n' +
        'Qlk8oIIzfSIlcbHpOYoN79FkLoDNc2er4Gd+7w1oPQmdAB0jBJnA6t0OUBPKdDdE\\n' +
        'Ufff2jrbfbzECn1ELg==\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        '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\\n' +
        'fejbXelUSJSzDIdY\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIGCTCCA/GgAwIBAgIRAN7Y9G9i4I+ZaslPobE7VL4wDQYJKoZIhvcNAQEMBQAw\\n' +
        'gZwxCzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJ\\n' +
        'bmMuMRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTE1MDMGA1UEAwws\\n' +
        'QW1hem9uIFJEUyBhcC1ub3J0aGVhc3QtMiBSb290IENBIFJTQTQwOTYgRzExEDAO\\n' +
        'BgNVBAcMB1NlYXR0bGUwIBcNMjEwNTIwMTYzMzIzWhgPMjEyMTA1MjAxNzMzMjNa\\n' +
        'MIGcMQswCQYDVQQGEwJVUzEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywg\\n' +
        'SW5jLjETMBEGA1UECwwKQW1hem9uIFJEUzELMAkGA1UECAwCV0ExNTAzBgNVBAMM\\n' +
        'LEFtYXpvbiBSRFMgYXAtbm9ydGhlYXN0LTIgUm9vdCBDQSBSU0E0MDk2IEcxMRAw\\n' +
        'DgYDVQQHDAdTZWF0dGxlMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA\\n' +
        '4BEPCiIfiK66Q/qa8k+eqf1Q3qsa6Xuu/fPkpuStXVBShhtXd3eqrM0iT4Xxs420\\n' +
        'Va0vSB3oZ7l86P9zYfa60n6PzRxdYFckYX330aI7L/oFIdaodB/C9szvROI0oLG+\\n' +
        '6RwmIF2zcprH0cTby8MiM7G3v9ykpq27g4WhDC1if2j8giOQL3oHpUaByekZNIHF\\n' +
        'dIllsI3RkXmR3xmmxoOxJM1B9MZi7e1CvuVtTGOnSGpNCQiqofehTGwxCN2wFSK8\\n' +
        'xysaWlw48G0VzZs7cbxoXMH9QbMpb4tpk0d+T8JfAPu6uWO9UwCLWWydf0CkmA/+\\n' +
        'D50/xd1t33X9P4FEaPSg5lYbHXzSLWn7oLbrN2UqMLaQrkoEBg/VGvzmfN0mbflw\\n' +
        '+T87bJ/VEOVNlG+gepyCTf89qIQVWOjuYMox4sK0PjzZGsYEuYiq1+OUT3vk/e5K\\n' +
        'ag1fCcq2Isy4/iwB2xcXrsQ6ljwdk1fc+EmOnjGKrhuOHJY3S+RFv4ToQBsVyYhC\\n' +
        'XGaC3EkqIX0xaCpDimxYhFjWhpDXAjG/zJ+hRLDAMCMhl/LPGRk/D1kzSbPmdjpl\\n' +
        'lEMK5695PeBvEBTQdBQdOiYgOU3vWU6tzwwHfiM2/wgvess/q0FDAHfJhppbgbb9\\n' +
        '3vgsIUcsvoC5o29JvMsUxsDRvsAfEmMSDGkJoA/X6GECAwEAAaNCMEAwDwYDVR0T\\n' +
        'AQH/BAUwAwEB/zAdBgNVHQ4EFgQUgEWm1mZCbGD6ytbwk2UU1aLaOUUwDgYDVR0P\\n' +
        'AQH/BAQDAgGGMA0GCSqGSIb3DQEBDAUAA4ICAQBb4+ABTGBGwxK1U/q4g8JDqTQM\\n' +
        '1Wh8Oz8yAk4XtPJMAmCctxbd81cRnSnePWw/hxViLVtkZ/GsemvXfqAQyOn1coN7\\n' +
        'QeYSw+ZOlu0j2jEJVynmgsR7nIRqE7QkCyZAU+d2FTJUfmee+IiBiGyFGgxz9n7A\\n' +
        'JhBZ/eahBbiuoOik/APW2JWLh0xp0W0GznfJ8lAlaQTyDa8iDXmVtbJg9P9qzkvl\\n' +
        'FgPXQttzEOyooF8Pb2LCZO4kUz+1sbU7tHdr2YE+SXxt6D3SBv+Yf0FlvyWLiqVk\\n' +
        'GDEOlPPTDSjAWgKnqST8UJ0RDcZK/v1ixs7ayqQJU0GUQm1I7LGTErWXHMnCuHKe\\n' +
        'UKYuiSZwmTcJ06NgdhcCnGZgPq13ryMDqxPeltQc3n5eO7f1cL9ERYLDLOzm6A9P\\n' +
        'oQ3MfcVOsbHgGHZWaPSeNrQRN9xefqBXH0ZPasgcH9WJdsLlEjVUXoultaHOKx3b\\n' +
        'UCCb+d3EfqF6pRT488ippOL6bk7zNubwhRa/+y4wjZtwe3kAX78ACJVcjPobH9jZ\\n' +
        'ErySads5zdQeaoee5wRKdp3TOfvuCe4bwLRdhOLCHWzEcXzY3g/6+ppLvNom8o+h\\n' +
        'Bh5X26G6KSfr9tqhQ3O9IcbARjnuPbvtJnoPY0gz3EHHGPhy0RNW8i2gl3nUp0ah\\n' +
        'PtjwbKW0hYAhIttT0Q==\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIICtzCCAj2gAwIBAgIQQRBQTs6Y3H1DDbpHGta3lzAKBggqhkjOPQQDAzCBmzEL\\n' +
        'MAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4x\\n' +
        'EzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTQwMgYDVQQDDCtBbWF6\\n' +
        'b24gUkRTIGFwLXNvdXRoZWFzdC0zIFJvb3QgQ0EgRUNDMzg0IEcxMRAwDgYDVQQH\\n' +
        'DAdTZWF0dGxlMCAXDTIxMDYxMTAwMTI0M1oYDzIxMjEwNjExMDExMjQzWjCBmzEL\\n' +
        'MAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4x\\n' +
        'EzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTQwMgYDVQQDDCtBbWF6\\n' +
        'b24gUkRTIGFwLXNvdXRoZWFzdC0zIFJvb3QgQ0EgRUNDMzg0IEcxMRAwDgYDVQQH\\n' +
        'DAdTZWF0dGxlMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEs0942Xj4m/gKA+WA6F5h\\n' +
        'AHYuek9eGpzTRoLJddM4rEV1T3eSueytMVKOSlS3Ub9IhyQrH2D8EHsLYk9ktnGR\\n' +
        'pATk0kCYTqFbB7onNo070lmMJmGT/Q7NgwC8cySChFxbo0IwQDAPBgNVHRMBAf8E\\n' +
        'BTADAQH/MB0GA1UdDgQWBBQ20iKBKiNkcbIZRu0y1uoF1yJTEzAOBgNVHQ8BAf8E\\n' +
        'BAMCAYYwCgYIKoZIzj0EAwMDaAAwZQIwYv0wTSrpQTaPaarfLN8Xcqrqu3hzl07n\\n' +
        'FrESIoRw6Cx77ZscFi2/MV6AFyjCV/TlAjEAhpwJ3tpzPXpThRML8DMJYZ3YgMh3\\n' +
        'CMuLqhPpla3cL0PhybrD27hJWl29C4el6aMO\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIICrDCCAjOgAwIBAgIQGcztRyV40pyMKbNeSN+vXTAKBggqhkjOPQQDAzCBljEL\\n' +
        'MAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4x\\n' +
        'EzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMS8wLQYDVQQDDCZBbWF6\\n' +
        'b24gUkRTIHVzLWVhc3QtMiBSb290IENBIEVDQzM4NCBHMTEQMA4GA1UEBwwHU2Vh\\n' +
        'dHRsZTAgFw0yMTA1MjEyMzE1NTZaGA8yMTIxMDUyMjAwMTU1NlowgZYxCzAJBgNV\\n' +
        'BAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYD\\n' +
        'VQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTEvMC0GA1UEAwwmQW1hem9uIFJE\\n' +
        'UyB1cy1lYXN0LTIgUm9vdCBDQSBFQ0MzODQgRzExEDAOBgNVBAcMB1NlYXR0bGUw\\n' +
        'djAQBgcqhkjOPQIBBgUrgQQAIgNiAAQfDcv+GGRESD9wT+I5YIPRsD3L+/jsiIis\\n' +
        'Tr7t9RSbFl+gYpO7ZbDXvNbV5UGOC5lMJo/SnqFRTC6vL06NF7qOHfig3XO8QnQz\\n' +
        '6T5uhhrhnX2RSY3/10d2kTyHq3ZZg3+jQjBAMA8GA1UdEwEB/wQFMAMBAf8wHQYD\\n' +
        'VR0OBBYEFLDyD3PRyNXpvKHPYYxjHXWOgfPnMA4GA1UdDwEB/wQEAwIBhjAKBggq\\n' +
        'hkjOPQQDAwNnADBkAjB20HQp6YL7CqYD82KaLGzgw305aUKw2aMrdkBR29J183jY\\n' +
        '6Ocj9+Wcif9xnRMS+7oCMAvrt03rbh4SU9BohpRUcQ2Pjkh7RoY0jDR4Xq4qzjNr\\n' +
        '5UFr3BXpFvACxXF51BksGQ==\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIICrjCCAjWgAwIBAgIQeKbS5zvtqDvRtwr5H48cAjAKBggqhkjOPQQDAzCBlzEL\\n' +
        'MAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4x\\n' +
        'EzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTAwLgYDVQQDDCdBbWF6\\n' +
        'b24gUkRTIG1lLXNvdXRoLTEgUm9vdCBDQSBFQ0MzODQgRzExEDAOBgNVBAcMB1Nl\\n' +
        'YXR0bGUwIBcNMjEwNTIwMTcxOTU1WhgPMjEyMTA1MjAxODE5NTVaMIGXMQswCQYD\\n' +
        'VQQGEwJVUzEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjETMBEG\\n' +
        'A1UECwwKQW1hem9uIFJEUzELMAkGA1UECAwCV0ExMDAuBgNVBAMMJ0FtYXpvbiBS\\n' +
        'RFMgbWUtc291dGgtMSBSb290IENBIEVDQzM4NCBHMTEQMA4GA1UEBwwHU2VhdHRs\\n' +
        'ZTB2MBAGByqGSM49AgEGBSuBBAAiA2IABEKjgUaAPmUlRMEQdBC7BScAGosJ1zRV\\n' +
        'LDd38qTBjzgmwBfQJ5ZfGIvyEK5unB09MB4e/3qqK5I/L6Qn5Px/n5g4dq0c7MQZ\\n' +
        'u7G9GBYm90U3WRJBf7lQrPStXaRnS4A/O6NCMEAwDwYDVR0TAQH/BAUwAwEB/zAd\\n' +
        'BgNVHQ4EFgQUNKcAbGEIn03/vkwd8g6jNyiRdD4wDgYDVR0PAQH/BAQDAgGGMAoG\\n' +
        'CCqGSM49BAMDA2cAMGQCMHIeTrjenCSYuGC6txuBt/0ZwnM/ciO9kHGWVCoK8QLs\\n' +
        'jGghb5/YSFGZbmQ6qpGlSAIwVOQgdFfTpEfe5i+Vs9frLJ4QKAfc27cTNYzRIM0I\\n' +
        'E+AJgK4C4+DiyyMzOpiCfmvq\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        '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\\n' +
        'WT1QcNdw7ntUJP/w\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIICrzCCAjWgAwIBAgIQARky6+5PNFRkFVOp3Ob1CTAKBggqhkjOPQQDAzCBlzEL\\n' +
        'MAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4x\\n' +
        'EzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTAwLgYDVQQDDCdBbWF6\\n' +
        'b24gUkRTIGV1LXNvdXRoLTIgUm9vdCBDQSBFQ0MzODQgRzExEDAOBgNVBAcMB1Nl\\n' +
        'YXR0bGUwIBcNMjIwNTIzMTg0MTI4WhgPMjEyMjA1MjMxOTQxMjdaMIGXMQswCQYD\\n' +
        'VQQGEwJVUzEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjETMBEG\\n' +
        'A1UECwwKQW1hem9uIFJEUzELMAkGA1UECAwCV0ExMDAuBgNVBAMMJ0FtYXpvbiBS\\n' +
        'RFMgZXUtc291dGgtMiBSb290IENBIEVDQzM4NCBHMTEQMA4GA1UEBwwHU2VhdHRs\\n' +
        'ZTB2MBAGByqGSM49AgEGBSuBBAAiA2IABNVGL5oF7cfIBxKyWd2PVK/S5yQfaJY3\\n' +
        'QFHWvEdt6951n9JhiiPrHzfVHsxZp1CBjILRMzjgRbYWmc8qRoLkgGE7htGdwudJ\\n' +
        'Fa/WuKzO574Prv4iZXUnVGTboC7JdvKbh6NCMEAwDwYDVR0TAQH/BAUwAwEB/zAd\\n' +
        'BgNVHQ4EFgQUgDeIIEKynwUbNXApdIPnmRWieZwwDgYDVR0PAQH/BAQDAgGGMAoG\\n' +
        'CCqGSM49BAMDA2gAMGUCMEOOJfucrST+FxuqJkMZyCM3gWGZaB+/w6+XUAJC6hFM\\n' +
        'uSTY0F44/bERkA4XhH+YGAIxAIpJQBakCA1/mXjsTnQ+0El9ty+LODp8ibkn031c\\n' +
        '8DKDS7pR9UK7ZYdR6zFg3ZCjQw==\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIICrjCCAjOgAwIBAgIQJvkWUcYLbnxtuwnyjMmntDAKBggqhkjOPQQDAzCBljEL\\n' +
        'MAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4x\\n' +
        'EzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMS8wLQYDVQQDDCZBbWF6\\n' +
        'b24gUkRTIGV1LXdlc3QtMyBSb290IENBIEVDQzM4NCBHMTEQMA4GA1UEBwwHU2Vh\\n' +
        'dHRsZTAgFw0yMTA1MjUyMjI2MTJaGA8yMTIxMDUyNTIzMjYxMlowgZYxCzAJBgNV\\n' +
        'BAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMwEQYD\\n' +
        'VQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTEvMC0GA1UEAwwmQW1hem9uIFJE\\n' +
        'UyBldS13ZXN0LTMgUm9vdCBDQSBFQ0MzODQgRzExEDAOBgNVBAcMB1NlYXR0bGUw\\n' +
        'djAQBgcqhkjOPQIBBgUrgQQAIgNiAARENn8uHCyjn1dFax4OeXxvbV861qsXFD9G\\n' +
        'DshumTmFzWWHN/69WN/AOsxy9XN5S7Cgad4gQgeYYYgZ5taw+tFo/jQvCLY//uR5\\n' +
        'uihcLuLJ78opvRPvD9kbWZ6oXfBtFkWjQjBAMA8GA1UdEwEB/wQFMAMBAf8wHQYD\\n' +
        'VR0OBBYEFKiK3LpoF+gDnqPldGSwChBPCYciMA4GA1UdDwEB/wQEAwIBhjAKBggq\\n' +
        'hkjOPQQDAwNpADBmAjEA+7qfvRlnvF1Aosyp9HzxxCbN7VKu+QXXPhLEBWa5oeWW\\n' +
        'UOcifunf/IVLC4/FGCsLAjEAte1AYp+iJyOHDB8UYkhBE/1sxnFaTiEPbvQBU0wZ\\n' +
        'SuwWVLhu2wWDuSW+K7tTuL8p\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIID/zCCAuegAwIBAgIRAKeDpqX5WFCGNo94M4v69sUwDQYJKoZIhvcNAQELBQAw\\n' +
        'gZcxCzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJ\\n' +
        'bmMuMRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTEwMC4GA1UEAwwn\\n' +
        'QW1hem9uIFJEUyBldS13ZXN0LTMgUm9vdCBDQSBSU0EyMDQ4IEcxMRAwDgYDVQQH\\n' +
        'DAdTZWF0dGxlMCAXDTIxMDUyNTIyMTgzM1oYDzIwNjEwNTI1MjMxODMzWjCBlzEL\\n' +
        'MAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4x\\n' +
        'EzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTAwLgYDVQQDDCdBbWF6\\n' +
        'b24gUkRTIGV1LXdlc3QtMyBSb290IENBIFJTQTIwNDggRzExEDAOBgNVBAcMB1Nl\\n' +
        'YXR0bGUwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCcKOTEMTfzvs4H\\n' +
        'WtJR8gI7GXN6xesulWtZPv21oT+fLGwJ+9Bv8ADCGDDrDxfeH/HxJmzG9hgVAzVn\\n' +
        '4g97Bn7q07tGZM5pVi96/aNp11velZT7spOJKfJDZTlGns6DPdHmx48whpdO+dOb\\n' +
        '6+eR0VwCIv+Vl1fWXgoACXYCoKjhxJs+R+fwY//0JJ1YG8yjZ+ghLCJmvlkOJmE1\\n' +
        'TCPUyIENaEONd6T+FHGLVYRRxC2cPO65Jc4yQjsXvvQypoGgx7FwD5voNJnFMdyY\\n' +
        '754JGPOOe/SZdepN7Tz7UEq8kn7NQSbhmCsgA/Hkjkchz96qN/YJ+H/okiQUTNB0\\n' +
        'eG9ogiVFAgMBAAGjQjBAMA8GA1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYEFFjayw9Y\\n' +
        'MjbxfF14XAhMM2VPl0PfMA4GA1UdDwEB/wQEAwIBhjANBgkqhkiG9w0BAQsFAAOC\\n' +
        'AQEAAtmx6d9+9CWlMoU0JCirtp4dSS41bBfb9Oor6GQ8WIr2LdfZLL6uES/ubJPE\\n' +
        '1Sh5Vu/Zon5/MbqLMVrfniv3UpQIof37jKXsjZJFE1JVD/qQfRzG8AlBkYgHNEiS\\n' +
        'VtD4lFxERmaCkY1tjKB4Dbd5hfhdrDy29618ZjbSP7NwAfnwb96jobCmMKgxVGiH\\n' +
        'UqsLSiEBZ33b2hI7PJ6iTJnYBWGuiDnsWzKRmheA4nxwbmcQSfjbrNwa93w3caL2\\n' +
        'v/4u54Kcasvcu3yFsUwJygt8z43jsGAemNZsS7GWESxVVlW93MJRn6M+MMakkl9L\\n' +
        'tWaXdHZ+KUV7LhfYLb0ajvb40w==\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIEBDCCAuygAwIBAgIQJ5oxPEjefCsaESSwrxk68DANBgkqhkiG9w0BAQsFADCB\\n' +
        'mjELMAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIElu\\n' +
        'Yy4xEzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTMwMQYDVQQDDCpB\\n' +
        'bWF6b24gUkRTIGV1LWNlbnRyYWwtMiBSb290IENBIFJTQTIwNDggRzExEDAOBgNV\\n' +
        'BAcMB1NlYXR0bGUwIBcNMjIwNjA2MjExNzA1WhgPMjA2MjA2MDYyMjE3MDVaMIGa\\n' +
        'MQswCQYDVQQGEwJVUzEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5j\\n' +
        'LjETMBEGA1UECwwKQW1hem9uIFJEUzELMAkGA1UECAwCV0ExMzAxBgNVBAMMKkFt\\n' +
        'YXpvbiBSRFMgZXUtY2VudHJhbC0yIFJvb3QgQ0EgUlNBMjA0OCBHMTEQMA4GA1UE\\n' +
        'BwwHU2VhdHRsZTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALTQt5eX\\n' +
        'g+VP3BjO9VBkWJhE0GfLrU/QIk32I6WvrnejayTrlup9H1z4QWlXF7GNJrqScRMY\\n' +
        'KhJHlcP05aPsx1lYco6pdFOf42ybXyWHHJdShj4A5glU81GTT+VrXGzHSarLmtua\\n' +
        'eozkQgPpDsSlPt0RefyTyel7r3Cq+5K/4vyjCTcIqbfgaGwTU36ffjM1LaPCuE4O\\n' +
        'nINMeD6YuImt2hU/mFl20FZ+IZQUIFZZU7pxGLqTRz/PWcH8tDDxnkYg7tNuXOeN\\n' +
        'JbTpXrw7St50/E9ZQ0llGS+MxJD8jGRAa/oL4G/cwnV8P2OEPVVkgN9xDDQeieo0\\n' +
        '3xkzolkDkmeKOnUCAwEAAaNCMEAwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQU\\n' +
        'bwu8635iQGQMRanekesORM8Hkm4wDgYDVR0PAQH/BAQDAgGGMA0GCSqGSIb3DQEB\\n' +
        'CwUAA4IBAQAgN6LE9mUgjsj6xGCX1afYE69fnmCjjb0rC6eEe1mb/QZNcyw4XBIW\\n' +
        '6+zTXo4mjZ4ffoxb//R0/+vdTE7IvaLgfAZgFsLKJCtYDDstXZj8ujQnGR9Pig3R\\n' +
        'W+LpNacvOOSJSawNQq0Xrlcu55AU4buyD5VjcICnfF1dqBMnGTnh27m/scd/ZMx/\\n' +
        'kapHZ/fMoK2mAgSX/NvUKF3UkhT85vSSM2BTtET33DzCPDQTZQYxFBa4rFRmFi4c\\n' +
        'BLlmIReiCGyh3eJhuUUuYAbK6wLaRyPsyEcIOLMQmZe1+gAFm1+1/q5Ke9ugBmjf\\n' +
        'PbTWjsi/lfZ5CdVAhc5lmZj/l5aKqwaS\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIICrjCCAjSgAwIBAgIRAKKPTYKln9L4NTx9dpZGUjowCgYIKoZIzj0EAwMwgZYx\\n' +
        'CzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMu\\n' +
        'MRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTEvMC0GA1UEAwwmQW1h\\n' +
        'em9uIFJEUyBldS13ZXN0LTIgUm9vdCBDQSBFQ0MzODQgRzExEDAOBgNVBAcMB1Nl\\n' +
        'YXR0bGUwIBcNMjEwNTIxMjI1NTIxWhgPMjEyMTA1MjEyMzU1MjFaMIGWMQswCQYD\\n' +
        'VQQGEwJVUzEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjETMBEG\\n' +
        'A1UECwwKQW1hem9uIFJEUzELMAkGA1UECAwCV0ExLzAtBgNVBAMMJkFtYXpvbiBS\\n' +
        'RFMgZXUtd2VzdC0yIFJvb3QgQ0EgRUNDMzg0IEcxMRAwDgYDVQQHDAdTZWF0dGxl\\n' +
        'MHYwEAYHKoZIzj0CAQYFK4EEACIDYgAE/owTReDvaRqdmbtTzXbyRmEpKCETNj6O\\n' +
        'hZMKH0F8oU9Tmn8RU7kQQj6xUKEyjLPrFBN7c+26TvrVO1KmJAvbc8bVliiJZMbc\\n' +
        'C0yV5PtJTalvlMZA1NnciZuhxaxrzlK1o0IwQDAPBgNVHRMBAf8EBTADAQH/MB0G\\n' +
        'A1UdDgQWBBT4i5HaoHtrs7Mi8auLhMbKM1XevDAOBgNVHQ8BAf8EBAMCAYYwCgYI\\n' +
        'KoZIzj0EAwMDaAAwZQIxAK9A+8/lFdX4XJKgfP+ZLy5ySXC2E0Spoy12Gv2GdUEZ\\n' +
        'p1G7c1KbWVlyb1d6subzkQIwKyH0Naf/3usWfftkmq8SzagicKz5cGcEUaULq4tO\\n' +
        'GzA/AMpr63IDBAqkZbMDTCmH\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIICrzCCAjWgAwIBAgIQTgIvwTDuNWQo0Oe1sOPQEzAKBggqhkjOPQQDAzCBlzEL\\n' +
        'MAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4x\\n' +
        'EzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTAwLgYDVQQDDCdBbWF6\\n' +
        'b24gUkRTIGV1LW5vcnRoLTEgUm9vdCBDQSBFQ0MzODQgRzExEDAOBgNVBAcMB1Nl\\n' +
        'YXR0bGUwIBcNMjEwNTI0MjEwNjM4WhgPMjEyMTA1MjQyMjA2MzhaMIGXMQswCQYD\\n' +
        'VQQGEwJVUzEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjETMBEG\\n' +
        'A1UECwwKQW1hem9uIFJEUzELMAkGA1UECAwCV0ExMDAuBgNVBAMMJ0FtYXpvbiBS\\n' +
        'RFMgZXUtbm9ydGgtMSBSb290IENBIEVDQzM4NCBHMTEQMA4GA1UEBwwHU2VhdHRs\\n' +
        'ZTB2MBAGByqGSM49AgEGBSuBBAAiA2IABJuzXLU8q6WwSKXBvx8BbdIi3mPhb7Xo\\n' +
        'rNJBfuMW1XRj5BcKH1ZoGaDGw+BIIwyBJg8qNmCK8kqIb4cH8/Hbo3Y+xBJyoXq/\\n' +
        'cuk8aPrxiNoRsKWwiDHCsVxaK9L7GhHHAqNCMEAwDwYDVR0TAQH/BAUwAwEB/zAd\\n' +
        'BgNVHQ4EFgQUYgcsdU4fm5xtuqLNppkfTHM2QMYwDgYDVR0PAQH/BAQDAgGGMAoG\\n' +
        'CCqGSM49BAMDA2gAMGUCMQDz/Rm89+QJOWJecYAmYcBWCcETASyoK1kbr4vw7Hsg\\n' +
        '7Ew3LpLeq4IRmTyuiTMl0gMCMAa0QSjfAnxBKGhAnYxcNJSntUyyMpaXzur43ec0\\n' +
        '3D8npJghwC4DuICtKEkQiI5cSg==\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        '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\\n' +
        'u3UBpZI=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIICtDCCAjmgAwIBAgIQenQbcP/Zbj9JxvZ+jXbRnTAKBggqhkjOPQQDAzCBmTEL\\n' +
        'MAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4x\\n' +
        'EzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTIwMAYDVQQDDClBbWF6\\n' +
        'b24gUkRTIGV1LWNlbnRyYWwtMSBSb290IENBIEVDQzM4NCBHMTEQMA4GA1UEBwwH\\n' +
        'U2VhdHRsZTAgFw0yMTA1MjEyMjMzMjRaGA8yMTIxMDUyMTIzMzMyNFowgZkxCzAJ\\n' +
        'BgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMuMRMw\\n' +
        'EQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTEyMDAGA1UEAwwpQW1hem9u\\n' +
        'IFJEUyBldS1jZW50cmFsLTEgUm9vdCBDQSBFQ0MzODQgRzExEDAOBgNVBAcMB1Nl\\n' +
        'YXR0bGUwdjAQBgcqhkjOPQIBBgUrgQQAIgNiAATlBHiEM9LoEb1Hdnd5j2VpCDOU\\n' +
        '5nGuFoBD8ROUCkFLFh5mHrHfPXwBc63heW9WrP3qnDEm+UZEUvW7ROvtWCTPZdLz\\n' +
        'Z4XaqgAlSqeE2VfUyZOZzBSgUUJk7OlznXfkCMOjQjBAMA8GA1UdEwEB/wQFMAMB\\n' +
        'Af8wHQYDVR0OBBYEFDT/ThjQZl42Nv/4Z/7JYaPNMly2MA4GA1UdDwEB/wQEAwIB\\n' +
        'hjAKBggqhkjOPQQDAwNpADBmAjEAnZWmSgpEbmq+oiCa13l5aGmxSlfp9h12Orvw\\n' +
        'Dq/W5cENJz891QD0ufOsic5oGq1JAjEAp5kSJj0MxJBTHQze1Aa9gG4sjHBxXn98\\n' +
        '4MP1VGsQuhfndNHQb4V0Au7OWnOeiobq\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIID/zCCAuegAwIBAgIRAMgnyikWz46xY6yRgiYwZ3swDQYJKoZIhvcNAQELBQAw\\n' +
        'gZcxCzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJ\\n' +
        'bmMuMRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTEwMC4GA1UEAwwn\\n' +
        'QW1hem9uIFJEUyBldS13ZXN0LTEgUm9vdCBDQSBSU0EyMDQ4IEcxMRAwDgYDVQQH\\n' +
        'DAdTZWF0dGxlMCAXDTIxMDUyMDE2NDkxMloYDzIwNjEwNTIwMTc0OTEyWjCBlzEL\\n' +
        'MAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4x\\n' +
        'EzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTAwLgYDVQQDDCdBbWF6\\n' +
        'b24gUkRTIGV1LXdlc3QtMSBSb290IENBIFJTQTIwNDggRzExEDAOBgNVBAcMB1Nl\\n' +
        'YXR0bGUwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCi8JYOc9cYSgZH\\n' +
        'gYPxLk6Xcc7HqzamvsnjYU98Dcb98y6iDqS46Ra2Ne02MITtU5MDL+qjxb8WGDZV\\n' +
        'RUA9ZS69tkTO3gldW8QdiSh3J6hVNJQW81F0M7ZWgV0gB3n76WCmfT4IWos0AXHM\\n' +
        '5v7M/M4tqVmCPViQnZb2kdVlM3/Xc9GInfSMCgNfwHPTXl+PXX+xCdNBePaP/A5C\\n' +
        '5S0oK3HiXaKGQAy3K7VnaQaYdiv32XUatlM4K2WS4AMKt+2cw3hTCjlmqKRHvYFQ\\n' +
        'veWCXAuc+U5PQDJ9SuxB1buFJZhT4VP3JagOuZbh5NWpIbOTxlAJOb5pGEDuJTKi\\n' +
        '1gQQQVEFAgMBAAGjQjBAMA8GA1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYEFNXm+N87\\n' +
        'OFxK9Af/bjSxDCiulGUzMA4GA1UdDwEB/wQEAwIBhjANBgkqhkiG9w0BAQsFAAOC\\n' +
        'AQEAkqIbkgZ45spvrgRQ6n9VKzDLvNg+WciLtmVrqyohwwJbj4pYvWwnKQCkVc7c\\n' +
        'hUOSBmlSBa5REAPbH5o8bdt00FPRrD6BdXLXhaECKgjsHe1WW08nsequRKD8xVmc\\n' +
        '8bEX6sw/utBeBV3mB+3Zv7ejYAbDFM4vnRsWtO+XqgReOgrl+cwdA6SNQT9oW3e5\\n' +
        'rSQ+VaXgJtl9NhkiIysq9BeYigxqS/A13pHQp0COMwS8nz+kBPHhJTsajHCDc8F4\\n' +
        'HfLi6cgs9G0gaRhT8FCH66OdGSqn196sE7Y3bPFFFs/3U+vxvmQgoZC6jegQXAg5\\n' +
        'Prxd+VNXtNI/azitTysQPumH7A==\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIEBTCCAu2gAwIBAgIRAO8bekN7rUReuNPG8pSTKtEwDQYJKoZIhvcNAQELBQAw\\n' +
        'gZoxCzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJ\\n' +
        'bmMuMRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTEzMDEGA1UEAwwq\\n' +
        'QW1hem9uIFJEUyBldS1jZW50cmFsLTEgUm9vdCBDQSBSU0EyMDQ4IEcxMRAwDgYD\\n' +
        'VQQHDAdTZWF0dGxlMCAXDTIxMDUyMTIyMjM0N1oYDzIwNjEwNTIxMjMyMzQ3WjCB\\n' +
        'mjELMAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIElu\\n' +
        'Yy4xEzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTMwMQYDVQQDDCpB\\n' +
        'bWF6b24gUkRTIGV1LWNlbnRyYWwtMSBSb290IENBIFJTQTIwNDggRzExEDAOBgNV\\n' +
        'BAcMB1NlYXR0bGUwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCTTYds\\n' +
        'Tray+Q9VA5j5jTh5TunHKFQzn68ZbOzdqaoi/Rq4ohfC0xdLrxCpfqn2TGDHN6Zi\\n' +
        '2qGK1tWJZEd1H0trhzd9d1CtGK+3cjabUmz/TjSW/qBar7e9MA67/iJ74Gc+Ww43\\n' +
        'A0xPNIWcL4aLrHaLm7sHgAO2UCKsrBUpxErOAACERScVYwPAfu79xeFcX7DmcX+e\\n' +
        'lIqY16pQAvK2RIzrekSYfLFxwFq2hnlgKHaVgZ3keKP+nmXcXmRSHQYUUr72oYNZ\\n' +
        'HcNYl2+gxCc9ccPEHM7xncVEKmb5cWEWvVoaysgQ+osi5f5aQdzgC2X2g2daKbyA\\n' +
        'XL/z5FM9GHpS5BJjAgMBAAGjQjBAMA8GA1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYE\\n' +
        'FBDAiJ7Py9/A9etNa/ebOnx5l5MGMA4GA1UdDwEB/wQEAwIBhjANBgkqhkiG9w0B\\n' +
        'AQsFAAOCAQEALMh/+81fFPdJV/RrJUeoUvFCGMp8iaANu97NpeJyKitNOv7RoeVP\\n' +
        'WjivS0KcCqZaDBs+p6IZ0sLI5ZH098LDzzytcfZg0PsGqUAb8a0MiU/LfgDCI9Ee\\n' +
        'jsOiwaFB8k0tfUJK32NPcIoQYApTMT2e26lPzYORSkfuntme2PTHUnuC7ikiQrZk\\n' +
        'P+SZjWgRuMcp09JfRXyAYWIuix4Gy0eZ4rpRuaTK6mjAb1/LYoNK/iZ/gTeIqrNt\\n' +
        'l70OWRsWW8jEmSyNTIubGK/gGGyfuZGSyqoRX6OKHESkP6SSulbIZHyJ5VZkgtXo\\n' +
        '2XvyRyJ7w5pFyoofrL3Wv0UF8yt/GDszmg==\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIF/zCCA+egAwIBAgIRAMDk/F+rrhdn42SfE+ghPC8wDQYJKoZIhvcNAQEMBQAw\\n' +
        'gZcxCzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJ\\n' +
        'bmMuMRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTEwMC4GA1UEAwwn\\n' +
        'QW1hem9uIFJEUyBldS13ZXN0LTIgUm9vdCBDQSBSU0E0MDk2IEcxMRAwDgYDVQQH\\n' +
        'DAdTZWF0dGxlMCAXDTIxMDUyMTIyNTEyMloYDzIxMjEwNTIxMjM1MTIyWjCBlzEL\\n' +
        'MAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4x\\n' +
        'EzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTAwLgYDVQQDDCdBbWF6\\n' +
        'b24gUkRTIGV1LXdlc3QtMiBSb290IENBIFJTQTQwOTYgRzExEDAOBgNVBAcMB1Nl\\n' +
        'YXR0bGUwggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQC2twMALVg9vRVu\\n' +
        'VNqsr6N8thmp3Dy8jEGTsm3GCQ+C5P2YcGlD/T/5icfWW84uF7Sx3ezcGlvsqFMf\\n' +
        'Ukj9sQyqtz7qfFFugyy7pa/eH9f48kWFHLbQYm9GEgbYBIrWMp1cy3vyxuMCwQN4\\n' +
        'DCncqU+yNpy0CprQJEha3PzY+3yJOjDQtc3zr99lyECCFJTDUucxHzyQvX89eL74\\n' +
        'uh8la0lKH3v9wPpnEoftbrwmm5jHNFdzj7uXUHUJ41N7af7z7QUfghIRhlBDiKtx\\n' +
        '5lYZemPCXajTc3ryDKUZC/b+B6ViXZmAeMdmQoPE0jwyEp/uaUcdp+FlUQwCfsBk\\n' +
        'ayPFEApTWgPiku2isjdeTVmEgL8bJTDUZ6FYFR7ZHcYAsDzcwHgIu3GGEMVRS3Uf\\n' +
        'ILmioiyly9vcK4Sa01ondARmsi/I0s7pWpKflaekyv5boJKD/xqwz9lGejmJHelf\\n' +
        '8Od2TyqJScMpB7Q8c2ROxBwqwB72jMCEvYigB+Wnbb8RipliqNflIGx938FRCzKL\\n' +
        'UQUBmNAznR/yRRL0wHf9UAE/8v9a09uZABeiznzOFAl/frHpgdAbC00LkFlnwwgX\\n' +
        'g8YfEFlkp4fLx5B7LtoO6uVNFVimLxtwirpyKoj3G4M/kvSTux8bTw0heBCmWmKR\\n' +
        '57MS6k7ODzbv+Kpeht2hqVZCNFMxoQIDAQABo0IwQDAPBgNVHRMBAf8EBTADAQH/\\n' +
        'MB0GA1UdDgQWBBRuMnDhJjoj7DcKALj+HbxEqj3r6jAOBgNVHQ8BAf8EBAMCAYYw\\n' +
        'DQYJKoZIhvcNAQEMBQADggIBALSnXfx72C3ldhBP5kY4Mo2DDaGQ8FGpTOOiD95d\\n' +
        '0rf7I9LrsBGVqu/Nir+kqqP80PB70+Jy9fHFFigXwcPBX3MpKGxK8Cel7kVf8t1B\\n' +
        '4YD6A6bqlzP+OUL0uGWfZpdpDxwMDI2Flt4NEldHgXWPjvN1VblEKs0+kPnKowyg\\n' +
        'jhRMgBbD/y+8yg0fIcjXUDTAw/+INcp21gWaMukKQr/8HswqC1yoqW9in2ijQkpK\\n' +
        '2RB9vcQ0/gXR0oJUbZQx0jn0OH8Agt7yfMAnJAdnHO4M3gjvlJLzIC5/4aGrRXZl\\n' +
        'JoZKfJ2fZRnrFMi0nhAYDeInoS+Rwx+QzaBk6fX5VPyCj8foZ0nmqvuYoydzD8W5\\n' +
        'mMlycgxFqS+DUmO+liWllQC4/MnVBlHGB1Cu3wTj5kgOvNs/k+FW3GXGzD3+rpv0\\n' +
        'QTLuwSbMr+MbEThxrSZRSXTCQzKfehyC+WZejgLb+8ylLJUA10e62o7H9PvCrwj+\\n' +
        'ZDVmN7qj6amzvndCP98sZfX7CFZPLfcBd4wVIjHsFjSNEwWHOiFyLPPG7cdolGKA\\n' +
        'lOFvonvo4A1uRc13/zFeP0Xi5n5OZ2go8aOOeGYdI2vB2sgH9R2IASH/jHmr0gvY\\n' +
        '0dfBCcfXNgrS0toq0LX/y+5KkKOxh52vEYsJLdhqrveuZhQnsFEm/mFwjRXkyO7c\\n' +
        '2jpC\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        '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\\n' +
        'FEv9Bg==\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIICsDCCAjagAwIBAgIRAMgApnfGYPpK/fD0dbN2U4YwCgYIKoZIzj0EAwMwgZcx\\n' +
        'CzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMu\\n' +
        'MRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTEwMC4GA1UEAwwnQW1h\\n' +
        'em9uIFJEUyBldS1zb3V0aC0xIFJvb3QgQ0EgRUNDMzg0IEcxMRAwDgYDVQQHDAdT\\n' +
        'ZWF0dGxlMCAXDTIxMDUxOTE4MzgxMVoYDzIxMjEwNTE5MTkzODExWjCBlzELMAkG\\n' +
        'A1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4xEzAR\\n' +
        'BgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTAwLgYDVQQDDCdBbWF6b24g\\n' +
        'UkRTIGV1LXNvdXRoLTEgUm9vdCBDQSBFQ0MzODQgRzExEDAOBgNVBAcMB1NlYXR0\\n' +
        'bGUwdjAQBgcqhkjOPQIBBgUrgQQAIgNiAAQfEWl6d4qSuIoECdZPp+39LaKsfsX7\\n' +
        'THs3/RrtT0+h/jl3bjZ7Qc68k16x+HGcHbaayHfqD0LPdzH/kKtNSfQKqemdxDQh\\n' +
        'Z4pwkixJu8T1VpXZ5zzCvBXCl75UqgEFS92jQjBAMA8GA1UdEwEB/wQFMAMBAf8w\\n' +
        'HQYDVR0OBBYEFFPrSNtWS5JU+Tvi6ABV231XbjbEMA4GA1UdDwEB/wQEAwIBhjAK\\n' +
        'BggqhkjOPQQDAwNoADBlAjEA+a7hF1IrNkBd2N/l7IQYAQw8chnRZDzh4wiGsZsC\\n' +
        '6A83maaKFWUKIb3qZYXFSi02AjAbp3wxH3myAmF8WekDHhKcC2zDvyOiKLkg9Y6v\\n' +
        'ZVmyMR043dscQbcsVoacOYv198c=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIICtDCCAjqgAwIBAgIRAPhVkIsQ51JFhD2kjFK5uAkwCgYIKoZIzj0EAwMwgZkx\\n' +
        'CzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMu\\n' +
        'MRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTEyMDAGA1UEAwwpQW1h\\n' +
        'em9uIFJEUyBldS1jZW50cmFsLTIgUm9vdCBDQSBFQ0MzODQgRzExEDAOBgNVBAcM\\n' +
        'B1NlYXR0bGUwIBcNMjIwNjA2MjEyOTE3WhgPMjEyMjA2MDYyMjI5MTdaMIGZMQsw\\n' +
        'CQYDVQQGEwJVUzEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjET\\n' +
        'MBEGA1UECwwKQW1hem9uIFJEUzELMAkGA1UECAwCV0ExMjAwBgNVBAMMKUFtYXpv\\n' +
        'biBSRFMgZXUtY2VudHJhbC0yIFJvb3QgQ0EgRUNDMzg0IEcxMRAwDgYDVQQHDAdT\\n' +
        'ZWF0dGxlMHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEA5xnIEBtG5b2nmbj49UEwQza\\n' +
        'yX0844fXjccYzZ8xCDUe9dS2XOUi0aZlGblgSe/3lwjg8fMcKXLObGGQfgIx1+5h\\n' +
        'AIBjORis/dlyN5q/yH4U5sjS8tcR0GDGVHrsRUZCo0IwQDAPBgNVHRMBAf8EBTAD\\n' +
        'AQH/MB0GA1UdDgQWBBRK+lSGutXf4DkTjR3WNfv4+KeNFTAOBgNVHQ8BAf8EBAMC\\n' +
        'AYYwCgYIKoZIzj0EAwMDaAAwZQIxAJ4NxQ1Gerqr70ZrnUqc62Vl8NNqTzInamCG\\n' +
        'Kce3FTsMWbS9qkgrjZkO9QqOcGIw/gIwSLrwUT+PKr9+H9eHyGvpq9/3AIYSnFkb\\n' +
        'Cf3dyWPiLKoAtLFwjzB/CkJlsAS1c8dS\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIF/jCCA+agAwIBAgIQGZH12Q7x41qIh9vDu9ikTjANBgkqhkiG9w0BAQwFADCB\\n' +
        'lzELMAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIElu\\n' +
        'Yy4xEzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTAwLgYDVQQDDCdB\\n' +
        'bWF6b24gUkRTIGV1LXdlc3QtMyBSb290IENBIFJTQTQwOTYgRzExEDAOBgNVBAcM\\n' +
        'B1NlYXR0bGUwIBcNMjEwNTI1MjIyMjMzWhgPMjEyMTA1MjUyMzIyMzNaMIGXMQsw\\n' +
        'CQYDVQQGEwJVUzEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjET\\n' +
        'MBEGA1UECwwKQW1hem9uIFJEUzELMAkGA1UECAwCV0ExMDAuBgNVBAMMJ0FtYXpv\\n' +
        'biBSRFMgZXUtd2VzdC0zIFJvb3QgQ0EgUlNBNDA5NiBHMTEQMA4GA1UEBwwHU2Vh\\n' +
        'dHRsZTCCAiIwDQYJKoZIhvcNAQEBBQADggIPADCCAgoCggIBAMqE47sHXWzdpuqj\\n' +
        'JHb+6jM9tDbQLDFnYjDWpq4VpLPZhb7xPNh9gnYYTPKG4avG421EblAHqzy9D2pN\\n' +
        '1z90yKbIfUb/Sy2MhQbmZomsObhONEra06fJ0Dydyjswf1iYRp2kwpx5AgkVoNo7\\n' +
        '3dlws73zFjD7ImKvUx2C7B75bhnw2pJWkFnGcswl8fZt9B5Yt95sFOKEz2MSJE91\\n' +
        'kZlHtya19OUxZ/cSGci4MlOySzqzbGwUqGxEIDlY8I39VMwXaYQ8uXUN4G780VcL\\n' +
        'u46FeyRGxZGz2n3hMc805WAA1V5uir87vuirTvoSVREET97HVRGVVNJJ/FM6GXr1\\n' +
        'VKtptybbo81nefYJg9KBysxAa2Ao2x2ry/2ZxwhS6VZ6v1+90bpZA1BIYFEDXXn/\\n' +
        'dW07HSCFnYSlgPtSc+Muh15mdr94LspYeDqNIierK9i4tB6ep7llJAnq0BU91fM2\\n' +
        'JPeqyoTtc3m06QhLf68ccSxO4l8Hmq9kLSHO7UXgtdjfRVaffngopTNk8qK7bIb7\\n' +
        'LrgkqhiQw/PRCZjUdyXL153/fUcsj9nFNe25gM4vcFYwH6c5trd2tUl31NTi1MfG\\n' +
        'Mgp3d2dqxQBIYANkEjtBDMy3SqQLIo9EymqmVP8xx2A/gCBgaxvMAsI6FSWRoC7+\\n' +
        'hqJ8XH4mFnXSHKtYMe6WPY+/XZgtAgMBAAGjQjBAMA8GA1UdEwEB/wQFMAMBAf8w\\n' +
        'HQYDVR0OBBYEFIkXqTnllT/VJnI2NqipA4XV8rh1MA4GA1UdDwEB/wQEAwIBhjAN\\n' +
        'BgkqhkiG9w0BAQwFAAOCAgEAKjSle8eenGeHgT8pltWCw/HzWyQruVKhfYIBfKJd\\n' +
        'MhV4EnH5BK7LxBIvpXGsFUrb0ThzSw0fn0zoA9jBs3i/Sj6KyeZ9qUF6b8ycDXd+\\n' +
        'wHonmJiQ7nk7UuMefaYAfs06vosgl1rI7eBHC0itexIQmKh0aX+821l4GEgEoSMf\\n' +
        'loMFTLXv2w36fPHHCsZ67ODldgcZbKNnpCTX0YrCwEYO3Pz/L398btiRcWGrewrK\\n' +
        'jdxAAyietra8DRno1Zl87685tfqc6HsL9v8rVw58clAo9XAQvT+fmSOFw/PogRZ7\\n' +
        'OMHUat3gu/uQ1M5S64nkLLFsKu7jzudBuoNmcJysPlzIbqJ7vYc82OUGe9ucF3wi\\n' +
        '3tbKQ983hdJiTExVRBLX/fYjPsGbG3JtPTv89eg2tjWHlPhCDMMxyRKl6isu2RTq\\n' +
        '6VT489Z2zQrC33MYF8ZqO1NKjtyMAMIZwxVu4cGLkVsqFmEV2ScDHa5RadDyD3Ok\\n' +
        'm+mqybhvEVm5tPgY6p0ILPMN3yvJsMSPSvuBXhO/X5ppNnpw9gnxpwbjQKNhkFaG\\n' +
        'M5pkADZ14uRguOLM4VthSwUSEAr5VQYCFZhEwK+UOyJAGiB/nJz6IxL5XBNUXmRM\\n' +
        'Hl8Xvz4riq48LMQbjcVQj0XvH941yPh+P8xOi00SGaQRaWp55Vyr4YKGbV0mEDz1\\n' +
        'r1o=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIF/zCCA+egAwIBAgIRAKwYju1QWxUZpn6D1gOtwgQwDQYJKoZIhvcNAQEMBQAw\\n' +
        'gZcxCzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJ\\n' +
        'bmMuMRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTEwMC4GA1UEAwwn\\n' +
        'QW1hem9uIFJEUyBldS13ZXN0LTEgUm9vdCBDQSBSU0E0MDk2IEcxMRAwDgYDVQQH\\n' +
        'DAdTZWF0dGxlMCAXDTIxMDUyMDE2NTM1NFoYDzIxMjEwNTIwMTc1MzU0WjCBlzEL\\n' +
        'MAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4x\\n' +
        'EzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTAwLgYDVQQDDCdBbWF6\\n' +
        'b24gUkRTIGV1LXdlc3QtMSBSb290IENBIFJTQTQwOTYgRzExEDAOBgNVBAcMB1Nl\\n' +
        'YXR0bGUwggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQCKdBP1U4lqWWkc\\n' +
        'Cb25/BKRTsvNVnISiKocva8GAzJyKfcGRa85gmgu41U+Hz6+39K+XkRfM0YS4BvQ\\n' +
        'F1XxWT0bNyypuvwCvmYShSTjN1TY0ltncDddahTajE/4MdSOZb/c98u0yt03cH+G\\n' +
        'hVwRyT50h0v/UEol50VfwcVAEZEgcQQYhf1IFUFlIvKpmDOqLuFakOnc7c9akK+i\\n' +
        'ivST+JO1tgowbnNkn2iLlSSgUWgb1gjaOsNfysagv1RXdlyPw3EyfwkFifAQvF2P\\n' +
        'Q0ayYZfYS640cccv7efM1MSVyFHR9PrrDsF/zr2S2sGPbeHr7R/HwLl+S5J/l9N9\\n' +
        'y0rk6IHAWV4dEkOvgpnuJKURwA48iu1Hhi9e4moNS6eqoK2KmY3VFpuiyWcA73nH\\n' +
        'GSmyaH+YuMrF7Fnuu7GEHZL/o6+F5cL3mj2SJJhL7sz0ryf5Cs5R4yN9BIEj/f49\\n' +
        'wh84pM6nexoI0Q4wiSFCxWiBpjSmOK6h7z6+2utaB5p20XDZHhxAlmlx4vMuWtjh\\n' +
        'XckgRFxc+ZpVMU3cAHUpVEoO49e/+qKEpPzp8Xg4cToKw2+AfTk3cmyyXQfGwXMQ\\n' +
        'ZUHNZ3w9ILMWihGCM2aGUsLcGDRennvNmnmin/SENsOQ8Ku0/a3teEzwV9cmmdYz\\n' +
        '5iYs1YtgPvKFobY6+T2RXXh+A5kprwIDAQABo0IwQDAPBgNVHRMBAf8EBTADAQH/\\n' +
        'MB0GA1UdDgQWBBSyUrsQVnKmA8z6/2Ech0rCvqpNmTAOBgNVHQ8BAf8EBAMCAYYw\\n' +
        'DQYJKoZIhvcNAQEMBQADggIBAFlj3IFmgiFz5lvTzFTRizhVofhTJsGr14Yfkuc7\\n' +
        'UrXPuXOwJomd4uot2d/VIeGJpfnuS84qGdmQyGewGTJ9inatHsGZgHl9NHNWRwKZ\\n' +
        'lTKTbBiq7aqgtUSFa06v202wpzU+1kadxJJePrbABxiXVfOmIW/a1a4hPNcT3syH\\n' +
        'FIEg1+CGsp71UNjBuwg3JTKWna0sLSKcxLOSOvX1fzxK5djzVpEsvQMB4PSAzXca\\n' +
        'vENgg2ErTwgTA+4s6rRtiBF9pAusN1QVuBahYP3ftrY6f3ycS4K65GnqscyfvKt5\\n' +
        'YgjtEKO3ZeeX8NpubMbzC+0Z6tVKfPFk/9TXuJtwvVeqow0YMrLLyRiYvK7EzJ97\\n' +
        'rrkxoKnHYQSZ+rH2tZ5SE392/rfk1PJL0cdHnkpDkUDO+8cKsFjjYKAQSNC52sKX\\n' +
        '74AVh6wMwxYwVZZJf2/2XxkjMWWhKNejsZhUkTISSmiLs+qPe3L67IM7GyKm9/m6\\n' +
        'R3r8x6NGjhTsKH64iYJg7AeKeax4b2e4hBb6GXFftyOs7unpEOIVkJJgM6gh3mwn\\n' +
        'R7v4gwFbLKADKt1vHuerSZMiTuNTGhSfCeDM53XI/mjZl2HeuCKP1mCDLlaO+gZR\\n' +
        'Q/G+E0sBKgEX4xTkAc3kgkuQGfExdGtnN2U2ehF80lBHB8+2y2E+xWWXih/ZyIcW\\n' +
        'wOx+\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        '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\\n' +
        '89cEIGdbjsA=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIEADCCAuigAwIBAgIQYjbPSg4+RNRD3zNxO1fuKDANBgkqhkiG9w0BAQsFADCB\\n' +
        'mDELMAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIElu\\n' +
        'Yy4xEzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTEwLwYDVQQDDChB\\n' +
        'bWF6b24gUkRTIGV1LW5vcnRoLTEgUm9vdCBDQSBSU0EyMDQ4IEcxMRAwDgYDVQQH\\n' +
        'DAdTZWF0dGxlMCAXDTIxMDUyNDIwNTkyMVoYDzIwNjEwNTI0MjE1OTIxWjCBmDEL\\n' +
        'MAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4x\\n' +
        'EzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTEwLwYDVQQDDChBbWF6\\n' +
        'b24gUkRTIGV1LW5vcnRoLTEgUm9vdCBDQSBSU0EyMDQ4IEcxMRAwDgYDVQQHDAdT\\n' +
        'ZWF0dGxlMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA179eQHxcV0YL\\n' +
        'XMkqEmhSBazHhnRVd8yICbMq82PitE3BZcnv1Z5Zs/oOgNmMkOKae4tCXO/41JCX\\n' +
        'wAgbs/eWWi+nnCfpQ/FqbLPg0h3dqzAgeszQyNl9IzTzX4Nd7JFRBVJXPIIKzlRf\\n' +
        '+GmFsAhi3rYgDgO27pz3ciahVSN+CuACIRYnA0K0s9lhYdddmrW/SYeWyoB7jPa2\\n' +
        'LmWpAs7bDOgS4LlP2H3eFepBPgNufRytSQUVA8f58lsE5w25vNiUSnrdlvDrIU5n\\n' +
        'Qwzc7NIZCx4qJpRbSKWrUtbyJriWfAkGU7i0IoainHLn0eHp9bWkwb9D+C/tMk1X\\n' +
        'ERZw2PDGkwIDAQABo0IwQDAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBSFmR7s\\n' +
        'dAblusFN+xhf1ae0KUqhWTAOBgNVHQ8BAf8EBAMCAYYwDQYJKoZIhvcNAQELBQAD\\n' +
        'ggEBAHsXOpjPMyH9lDhPM61zYdja1ebcMVgfUvsDvt+w0xKMKPhBzYDMs/cFOi1N\\n' +
        'Q8LV79VNNfI2NuvFmGygcvTIR+4h0pqqZ+wjWl3Kk5jVxCrbHg3RBX02QLumKd/i\\n' +
        'kwGcEtTUvTssn3SM8bgM0/1BDXgImZPC567ciLvWDo0s/Fe9dJJC3E0G7d/4s09n\\n' +
        'OMdextcxFuWBZrBm/KK3QF0ByA8MG3//VXaGO9OIeeOJCpWn1G1PjT1UklYhkg61\\n' +
        'EbsTiZVA2DLd1BGzfU4o4M5mo68l0msse/ndR1nEY6IywwpgIFue7+rEleDh6b9d\\n' +
        'PYkG1rHVw2I0XDG4o17aOn5E94I=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIEADCCAuigAwIBAgIQC6W4HFghUkkgyQw14a6JljANBgkqhkiG9w0BAQsFADCB\\n' +
        'mDELMAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIElu\\n' +
        'Yy4xEzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTEwLwYDVQQDDChB\\n' +
        'bWF6b24gUkRTIGV1LXNvdXRoLTIgUm9vdCBDQSBSU0EyMDQ4IEcxMRAwDgYDVQQH\\n' +
        'DAdTZWF0dGxlMCAXDTIyMDUyMzE4MTYzMloYDzIwNjIwNTIzMTkxNjMyWjCBmDEL\\n' +
        'MAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4x\\n' +
        'EzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTEwLwYDVQQDDChBbWF6\\n' +
        'b24gUkRTIGV1LXNvdXRoLTIgUm9vdCBDQSBSU0EyMDQ4IEcxMRAwDgYDVQQHDAdT\\n' +
        'ZWF0dGxlMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAiM/t4FV2R9Nx\\n' +
        'UQG203UY83jInTa/6TMq0SPyg617FqYZxvz2kkx09x3dmxepUg9ttGMlPgjsRZM5\\n' +
        'LCFEi1FWk+hxHzt7vAdhHES5tdjwds3aIkgNEillmRDVrUsbrDwufLaa+MMDO2E1\\n' +
        'wQ/JYFXw16WBCCi2g1EtyQ2Xp+tZDX5IWOTnvhZpW8vVDptZ2AcJ5rMhfOYO3OsK\\n' +
        '5EF0GGA5ldzuezP+BkrBYGJ4wVKGxeaq9+5AT8iVZrypjwRkD7Y5CurywK3+aBwm\\n' +
        's9Q5Nd8t45JCOUzYp92rFKsCriD86n/JnEvgDfdP6Hvtm0/DkwXK40Wz2q0Zrd0k\\n' +
        'mjP054NRPwIDAQABo0IwQDAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBRR7yqd\\n' +
        'SfKcX2Q8GzhcVucReIpewTAOBgNVHQ8BAf8EBAMCAYYwDQYJKoZIhvcNAQELBQAD\\n' +
        'ggEBAEszBRDwXcZyNm07VcFwI1Im94oKwKccuKYeJEsizTBsVon8VpEiMwDs+yGu\\n' +
        '3p8kBhvkLwWybkD/vv6McH7T5b9jDX2DoOudqYnnaYeypsPH/00Vh3LvKagqzQza\\n' +
        'orWLx+0tLo8xW4BtU+Wrn3JId8LvAhxyYXTn9bm+EwPcStp8xGLwu53OPD1RXYuy\\n' +
        'uu+3ps/2piP7GVfou7H6PRaqbFHNfiGg6Y+WA0HGHiJzn8uLmrRJ5YRdIOOG9/xi\\n' +
        'qTmAZloUNM7VNuurcMM2hWF494tQpsQ6ysg2qPjbBqzlGoOt3GfBTOZmqmwmqtam\\n' +
        'K7juWM/mdMQAJ3SMlE5wI8nVdx4=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIICrjCCAjSgAwIBAgIRAL9SdzVPcpq7GOpvdGoM80IwCgYIKoZIzj0EAwMwgZYx\\n' +
        'CzAJBgNVBAYTAlVTMSIwIAYDVQQKDBlBbWF6b24gV2ViIFNlcnZpY2VzLCBJbmMu\\n' +
        'MRMwEQYDVQQLDApBbWF6b24gUkRTMQswCQYDVQQIDAJXQTEvMC0GA1UEAwwmQW1h\\n' +
        'em9uIFJEUyBldS13ZXN0LTEgUm9vdCBDQSBFQ0MzODQgRzExEDAOBgNVBAcMB1Nl\\n' +
        'YXR0bGUwIBcNMjEwNTIwMTY1ODA3WhgPMjEyMTA1MjAxNzU4MDdaMIGWMQswCQYD\\n' +
        'VQQGEwJVUzEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjETMBEG\\n' +
        'A1UECwwKQW1hem9uIFJEUzELMAkGA1UECAwCV0ExLzAtBgNVBAMMJkFtYXpvbiBS\\n' +
        'RFMgZXUtd2VzdC0xIFJvb3QgQ0EgRUNDMzg0IEcxMRAwDgYDVQQHDAdTZWF0dGxl\\n' +
        'MHYwEAYHKoZIzj0CAQYFK4EEACIDYgAEJWDgXebvwjR+Ce+hxKOLbnsfN5W5dOlP\\n' +
        'Zn8kwWnD+SLkU81Eac/BDJsXGrMk6jFD1vg16PEkoSevsuYWlC8xR6FmT6F6pmeh\\n' +
        'fsMGOyJpfK4fyoEPhKeQoT23lFIc5Orjo0IwQDAPBgNVHRMBAf8EBTADAQH/MB0G\\n' +
        'A1UdDgQWBBSVNAN1CHAz0eZ77qz2adeqjm31TzAOBgNVHQ8BAf8EBAMCAYYwCgYI\\n' +
        'KoZIzj0EAwMDaAAwZQIxAMlQeHbcjor49jqmcJ9gRLWdEWpXG8thIf6zfYQ/OEAg\\n' +
        'd7GDh4fR/OUk0VfjsBUN/gIwZB0bGdXvK38s6AAE/9IT051cz/wMe9GIrX1MnL1T\\n' +
        '1F5OqnXJdiwfZRRTHsRQ/L00\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        '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\\n' +
        '1YfpdH2jp30=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIID/jCCAuagAwIBAgIQTDc+UgTRtYO7ZGTQ8UWKDDANBgkqhkiG9w0BAQsFADCB\\n' +
        'lzELMAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIElu\\n' +
        'Yy4xEzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTAwLgYDVQQDDCdB\\n' +
        'bWF6b24gUkRTIGV1LXdlc3QtMiBSb290IENBIFJTQTIwNDggRzExEDAOBgNVBAcM\\n' +
        'B1NlYXR0bGUwIBcNMjEwNTIxMjI0NjI0WhgPMjA2MTA1MjEyMzQ2MjRaMIGXMQsw\\n' +
        'CQYDVQQGEwJVUzEiMCAGA1UECgwZQW1hem9uIFdlYiBTZXJ2aWNlcywgSW5jLjET\\n' +
        'MBEGA1UECwwKQW1hem9uIFJEUzELMAkGA1UECAwCV0ExMDAuBgNVBAMMJ0FtYXpv\\n' +
        'biBSRFMgZXUtd2VzdC0yIFJvb3QgQ0EgUlNBMjA0OCBHMTEQMA4GA1UEBwwHU2Vh\\n' +
        'dHRsZTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAM1oGtthQ1YiVIC2\\n' +
        'i4u4swMAGxAjc/BZp0yq0eP5ZQFaxnxs7zFAPabEWsrjeDzrRhdVO0h7zskrertP\\n' +
        'gblGhfD20JfjvCHdP1RUhy/nzG+T+hn6Takan/GIgs8grlBMRHMgBYHW7tklhjaH\\n' +
        '3F7LujhceAHhhgp6IOrpb6YTaTTaJbF3GTmkqxSJ3l1LtEoWz8Al/nL/Ftzxrtez\\n' +
        'Vs6ebpvd7sw37sxmXBWX2OlvUrPCTmladw9OrllGXtCFw4YyLe3zozBlZ3cHzQ0q\\n' +
        'lINhpRcajTMfZrsiGCkQtoJT+AqVJPS2sHjqsEH8yiySW9Jbq4zyMbM1yqQ2vnnx\\n' +
        'MJgoYMcCAwEAAaNCMEAwDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUaQG88UnV\\n' +
        'JPTI+Pcti1P+q3H7pGYwDgYDVR0PAQH/BAQDAgGGMA0GCSqGSIb3DQEBCwUAA4IB\\n' +
        'AQBAkgr75V0sEJimC6QRiTVWEuj2Khy7unjSfudbM6zumhXEU2/sUaVLiYy6cA/x\\n' +
        '3v0laDle6T07x9g64j5YastE/4jbzrGgIINFlY0JnaYmR3KZEjgi1s1fkRRf3llL\\n' +
        'PJm9u4Q1mbwAMQK/ZjLuuRcL3uRIHJek18nRqT5h43GB26qXyvJqeYYpYfIjL9+/\\n' +
        'YiZAbSRRZG+Li23cmPWrbA1CJY121SB+WybCbysbOXzhD3Sl2KSZRwSw4p2HrFtV\\n' +
        '1Prk0dOBtZxCG9luf87ultuDZpfS0w6oNBAMXocgswk24ylcADkkFxBWW+7BETn1\\n' +
        'EpK+t1Lm37mU4sxtuha00XAi\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIEADCCAuigAwIBAgIQcY44/8NUvBwr6LlHfRy7KjANBgkqhkiG9w0BAQsFADCB\\n' +
        'mDELMAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIElu\\n' +
        'Yy4xEzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTEwLwYDVQQDDChB\\n' +
        'bWF6b24gUkRTIGV1LXNvdXRoLTEgUm9vdCBDQSBSU0EyMDQ4IEcxMRAwDgYDVQQH\\n' +
        'DAdTZWF0dGxlMCAXDTIxMDUxOTE4MjcxOFoYDzIwNjEwNTE5MTkyNzE4WjCBmDEL\\n' +
        'MAkGA1UEBhMCVVMxIjAgBgNVBAoMGUFtYXpvbiBXZWIgU2VydmljZXMsIEluYy4x\\n' +
        'EzARBgNVBAsMCkFtYXpvbiBSRFMxCzAJBgNVBAgMAldBMTEwLwYDVQQDDChBbWF6\\n' +
        'b24gUkRTIGV1LXNvdXRoLTEgUm9vdCBDQSBSU0EyMDQ4IEcxMRAwDgYDVQQHDAdT\\n' +
        'ZWF0dGxlMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0UaBeC+Usalu\\n' +
        'EtXnV7+PnH+gi7/71tI/jkKVGKuhD2JDVvqLVoqbMHRh3+wGMvqKCjbHPcC2XMWv\\n' +
        '566fpAj4UZ9CLB5fVzss+QVNTl+FH2XhEzigopp+872ajsNzcZxrMkifxGb4i0U+\\n' +
        't0Zi+UrbL5tsfP2JonKR1crOrbS6/DlzHBjIiJazGOQcMsJjNuTOItLbMohLpraA\\n' +
        '/nApa3kOvI7Ufool1/34MG0+wL3UUA4YkZ6oBJVxjZvvs6tI7Lzz/SnhK2widGdc\\n' +
        'snbLqBpHNIZQSorVoiwcFaRBGYX/uzYkiw44Yfa4cK2V/B5zgu1Fbr0gbI2am4eh\\n' +
        'yVYyg4jPawIDAQABo0IwQDAPBgNVHRMBAf8EBTADAQH/MB0GA1UdDgQWBBS9gM1m\\n' +
        'IIjyh9O5H/7Vj0R/akI7UzAOBgNVHQ8BAf8EBAMCAYYwDQYJKoZIhvcNAQELBQAD\\n' +
        'ggEBAF0Sm9HC2AUyedBVnwgkVXMibnYChOzz7T+0Y+fOLXYAEXex2s8oqGeZdGYX\\n' +
        'JHkjBn7JXu7LM+TpTbPbFFDoc1sgMguD/ls+8XsqAl1CssW+amryIL+jfcfbgQ+P\\n' +
        'ICwEUD9hGdjBgJ5WcuS+qqxHsEIlFNci3HxcxfBa9VsWs5TjI7Vsl4meL5lf7ZyL\\n' +
        'wDV7dHRuU+cImqG1MIvPRIlvPnT7EghrCYi2VCPhP2pM/UvShuwVnkz4MJ29ebIk\\n' +
        'WR9kpblFxFdE92D5UUvMCjC2kmtgzNiErvTcwIvOO9YCbBHzRB1fFiWrXUHhJWq9\\n' +
        'IkaxR5icb/IpAV0A1lYZEWMVsfQ=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        '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\\n' +
        'rM2p0kk=\\n' +
        '-----END CERTIFICATE-----\\n',
];


/***/ },

/***/ 3880
(__unused_webpack_module, exports) {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
exports.proxies = void 0;
/**
 * CA Certificates for **Amazon RDS Proxy** (2024)
 *
 * - https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/rds-proxy.howitworks.html#rds-proxy-security.tls
 * - https://www.amazontrust.com/repository/
 */
exports.proxies = [
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIDQTCCAimgAwIBAgITBmyfz5m/jAo54vB4ikPmljZbyjANBgkqhkiG9w0BAQsF\\n' +
        'ADA5MQswCQYDVQQGEwJVUzEPMA0GA1UEChMGQW1hem9uMRkwFwYDVQQDExBBbWF6\\n' +
        'b24gUm9vdCBDQSAxMB4XDTE1MDUyNjAwMDAwMFoXDTM4MDExNzAwMDAwMFowOTEL\\n' +
        'MAkGA1UEBhMCVVMxDzANBgNVBAoTBkFtYXpvbjEZMBcGA1UEAxMQQW1hem9uIFJv\\n' +
        'b3QgQ0EgMTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALJ4gHHKeNXj\\n' +
        'ca9HgFB0fW7Y14h29Jlo91ghYPl0hAEvrAIthtOgQ3pOsqTQNroBvo3bSMgHFzZM\\n' +
        '9O6II8c+6zf1tRn4SWiw3te5djgdYZ6k/oI2peVKVuRF4fn9tBb6dNqcmzU5L/qw\\n' +
        'IFAGbHrQgLKm+a/sRxmPUDgH3KKHOVj4utWp+UhnMJbulHheb4mjUcAwhmahRWa6\\n' +
        'VOujw5H5SNz/0egwLX0tdHA114gk957EWW67c4cX8jJGKLhD+rcdqsq08p8kDi1L\\n' +
        '93FcXmn/6pUCyziKrlA4b9v7LWIbxcceVOF34GfID5yHI9Y/QCB/IIDEgEw+OyQm\\n' +
        'jgSubJrIqg0CAwEAAaNCMEAwDwYDVR0TAQH/BAUwAwEB/zAOBgNVHQ8BAf8EBAMC\\n' +
        'AYYwHQYDVR0OBBYEFIQYzIU07LwMlJQuCFmcx7IQTgoIMA0GCSqGSIb3DQEBCwUA\\n' +
        'A4IBAQCY8jdaQZChGsV2USggNiMOruYou6r4lK5IpDB/G/wkjUu0yKGX9rbxenDI\\n' +
        'U5PMCCjjmCXPI6T53iHTfIUJrU6adTrCC2qJeHZERxhlbI1Bjjt/msv0tadQ1wUs\\n' +
        'N+gDS63pYaACbvXy8MWy7Vu33PqUXHeeE6V/Uq2V8viTO96LXFvKWlJbYK8U90vv\\n' +
        'o/ufQJVtMVT8QtPHRh8jrdkPSHCa2XV4cdFyQzR1bldZwgJcJmApzyMZFo6IQ6XU\\n' +
        '5MsI+yMRQ+hDKXJioaldXgjUkK642M4UwtBV8ob2xJNDd2ZhwLnoQdeXeGADbkpy\\n' +
        'rqXRfboQnoZsG4q5WTP468SQvvG5\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        '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\\n' +
        '4PsJYGw=\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIBtjCCAVugAwIBAgITBmyf1XSXNmY/Owua2eiedgPySjAKBggqhkjOPQQDAjA5\\n' +
        'MQswCQYDVQQGEwJVUzEPMA0GA1UEChMGQW1hem9uMRkwFwYDVQQDExBBbWF6b24g\\n' +
        'Um9vdCBDQSAzMB4XDTE1MDUyNjAwMDAwMFoXDTQwMDUyNjAwMDAwMFowOTELMAkG\\n' +
        'A1UEBhMCVVMxDzANBgNVBAoTBkFtYXpvbjEZMBcGA1UEAxMQQW1hem9uIFJvb3Qg\\n' +
        'Q0EgMzBZMBMGByqGSM49AgEGCCqGSM49AwEHA0IABCmXp8ZBf8ANm+gBG1bG8lKl\\n' +
        'ui2yEujSLtf6ycXYqm0fc4E7O5hrOXwzpcVOho6AF2hiRVd9RFgdszflZwjrZt6j\\n' +
        'QjBAMA8GA1UdEwEB/wQFMAMBAf8wDgYDVR0PAQH/BAQDAgGGMB0GA1UdDgQWBBSr\\n' +
        'ttvXBp43rDCGB5Fwx5zEGbF4wDAKBggqhkjOPQQDAgNJADBGAiEA4IWSoxe3jfkr\\n' +
        'BqWTrBqYaGFy+uGh0PsceGCmQ5nFuMQCIQCcAu/xlJyzlvnrxir4tiz+OpAUFteM\\n' +
        'YyRIHN8wfdVoOw==\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIIB8jCCAXigAwIBAgITBmyf18G7EEwpQ+Vxe3ssyBrBDjAKBggqhkjOPQQDAzA5\\n' +
        'MQswCQYDVQQGEwJVUzEPMA0GA1UEChMGQW1hem9uMRkwFwYDVQQDExBBbWF6b24g\\n' +
        'Um9vdCBDQSA0MB4XDTE1MDUyNjAwMDAwMFoXDTQwMDUyNjAwMDAwMFowOTELMAkG\\n' +
        'A1UEBhMCVVMxDzANBgNVBAoTBkFtYXpvbjEZMBcGA1UEAxMQQW1hem9uIFJvb3Qg\\n' +
        'Q0EgNDB2MBAGByqGSM49AgEGBSuBBAAiA2IABNKrijdPo1MN/sGKe0uoe0ZLY7Bi\\n' +
        '9i0b2whxIdIA6GO9mif78DluXeo9pcmBqqNbIJhFXRbb/egQbeOc4OO9X4Ri83Bk\\n' +
        'M6DLJC9wuoihKqB1+IGuYgbEgds5bimwHvouXKNCMEAwDwYDVR0TAQH/BAUwAwEB\\n' +
        '/zAOBgNVHQ8BAf8EBAMCAYYwHQYDVR0OBBYEFNPsxzplbszh2naaVvuc84ZtV+WB\\n' +
        'MAoGCCqGSM49BAMDA2gAMGUCMDqLIfG9fhGt0O9Yli/W651+kI0rz2ZVwyzjKKlw\\n' +
        'CkcO8DdZEv8tmZQoTipPNU0zWgIxAOp1AE47xDqUEpHJWEadIRNyp4iciuRMStuW\\n' +
        '1KyLa2tJElMzrdfkviT8tQp21KW8EA==\\n' +
        '-----END CERTIFICATE-----\\n',
    '-----BEGIN CERTIFICATE-----\\n' +
        'MIID7zCCAtegAwIBAgIBADANBgkqhkiG9w0BAQsFADCBmDELMAkGA1UEBhMCVVMx\\n' +
        'EDAOBgNVBAgTB0FyaXpvbmExEzARBgNVBAcTClNjb3R0c2RhbGUxJTAjBgNVBAoT\\n' +
        'HFN0YXJmaWVsZCBUZWNobm9sb2dpZXMsIEluYy4xOzA5BgNVBAMTMlN0YXJmaWVs\\n' +
        'ZCBTZXJ2aWNlcyBSb290IENlcnRpZmljYXRlIEF1dGhvcml0eSAtIEcyMB4XDTA5\\n' +
        'MDkwMTAwMDAwMFoXDTM3MTIzMTIzNTk1OVowgZgxCzAJBgNVBAYTAlVTMRAwDgYD\\n' +
        'VQQIEwdBcml6b25hMRMwEQYDVQQHEwpTY290dHNkYWxlMSUwIwYDVQQKExxTdGFy\\n' +
        'ZmllbGQgVGVjaG5vbG9naWVzLCBJbmMuMTswOQYDVQQDEzJTdGFyZmllbGQgU2Vy\\n' +
        'dmljZXMgUm9vdCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkgLSBHMjCCASIwDQYJKoZI\\n' +
        'hvcNAQEBBQADggEPADCCAQoCggEBANUMOsQq+U7i9b4Zl1+OiFOxHz/Lz58gE20p\\n' +
        'OsgPfTz3a3Y4Y9k2YKibXlwAgLIvWX/2h/klQ4bnaRtSmpDhcePYLQ1Ob/bISdm2\\n' +
        '8xpWriu2dBTrz/sm4xq6HZYuajtYlIlHVv8loJNwU4PahHQUw2eeBGg6345AWh1K\\n' +
        'Ts9DkTvnVtYAcMtS7nt9rjrnvDH5RfbCYM8TWQIrgMw0R9+53pBlbQLPLJGmpufe\\n' +
        'hRhJfGZOozptqbXuNC66DQO4M99H67FrjSXZm86B0UVGMpZwh94CDklDhbZsc7tk\\n' +
        '6mFBrMnUVN+HL8cisibMn1lUaJ/8viovxFUcdUBgF4UCVTmLfwUCAwEAAaNCMEAw\\n' +
        'DwYDVR0TAQH/BAUwAwEB/zAOBgNVHQ8BAf8EBAMCAQYwHQYDVR0OBBYEFJxfAN+q\\n' +
        'AdcwKziIorhtSpzyEZGDMA0GCSqGSIb3DQEBCwUAA4IBAQBLNqaEd2ndOxmfZyMI\\n' +
        'bw5hyf2E3F/YNoHN2BtBLZ9g3ccaaNnRbobhiCPPE95Dz+I0swSdHynVv/heyNXB\\n' +
        've6SbzJ08pGCL72CQnqtKrcgfU28elUSwhXqvfdqlS5sdJ/PHLTyxQGjhdByPq1z\\n' +
        'qwubdQxtRbeOlKyWN7Wg0I8VRw7j6IPdj/3vQQF3zCepYoUz8jcI73HPdwbeyBkd\\n' +
        'iEDPfUYd/x7H4c7/I9vG+o1VTqkC50cRRj70/b17KSa7qWFiNyi2LSr2EIZkyXCn\\n' +
        '0q23KXB56jzaYyWf/Wi3MOxw+3WKt21gZ7IeyLnp2KhvAotnDU0mV3HaIPzBSlCN\\n' +
        'sSi6\\n' +
        '-----END CERTIFICATE-----\\n',
];


/***/ },

/***/ 783
(module, __unused_webpack_exports, __webpack_require__) {

var util = __webpack_require__(9023)
var isProperty = __webpack_require__(4325)

var INDENT_START = /[\\{\\[]/
var INDENT_END = /[\\}\\]]/

// from https://mathiasbynens.be/notes/reserved-keywords
var RESERVED = [
  'do',
  'if',
  'in',
  'for',
  'let',
  'new',
  'try',
  'var',
  'case',
  'else',
  'enum',
  'eval',
  'null',
  'this',
  'true',
  'void',
  'with',
  'await',
  'break',
  'catch',
  'class',
  'const',
  'false',
  'super',
  'throw',
  'while',
  'yield',
  'delete',
  'export',
  'import',
  'public',
  'return',
  'static',
  'switch',
  'typeof',
  'default',
  'extends',
  'finally',
  'package',
  'private',
  'continue',
  'debugger',
  'function',
  'arguments',
  'interface',
  'protected',
  'implements',
  'instanceof',
  'NaN',
  'undefined'
]

var RESERVED_MAP = {}

for (var i = 0; i < RESERVED.length; i++) {
  RESERVED_MAP[RESERVED[i]] = true
}

var isVariable = function (name) {
  return isProperty(name) && !RESERVED_MAP.hasOwnProperty(name)
}

var formats = {
  s: function(s) {
    return '' + s
  },
  d: function(d) {
    return '' + Number(d)
  },
  o: function(o) {
    return JSON.stringify(o)
  }
}

var genfun = function() {
  var lines = []
  var indent = 0
  var vars = {}

  var push = function(str) {
    var spaces = ''
    while (spaces.length < indent*2) spaces += '  '
    lines.push(spaces+str)
  }

  var pushLine = function(line) {
    if (INDENT_END.test(line.trim()[0]) && INDENT_START.test(line[line.length-1])) {
      indent--
      push(line)
      indent++
      return
    }
    if (INDENT_START.test(line[line.length-1])) {
      push(line)
      indent++
      return
    }
    if (INDENT_END.test(line.trim()[0])) {
      indent--
      push(line)
      return
    }

    push(line)
  }

  var line = function(fmt) {
    if (!fmt) return line

    if (arguments.length === 1 && fmt.indexOf('\\n') > -1) {
      var lines = fmt.trim().split('\\n')
      for (var i = 0; i < lines.length; i++) {
        pushLine(lines[i].trim())
      }
    } else {
      pushLine(util.format.apply(util, arguments))
    }

    return line
  }

  line.scope = {}
  line.formats = formats

  line.sym = function(name) {
    if (!name || !isVariable(name)) name = 'tmp'
    if (!vars[name]) vars[name] = 0
    return name + (vars[name]++ || '')
  }

  line.property = function(obj, name) {
    if (arguments.length === 1) {
      name = obj
      obj = ''
    }

    name = name + ''

    if (isProperty(name)) return (obj ? obj + '.' + name : name)
    return obj ? obj + '[' + JSON.stringify(name) + ']' : JSON.stringify(name)
  }

  line.toString = function() {
    return lines.join('\\n')
  }

  line.toFunction = function(scope) {
    if (!scope) scope = {}

    var src = 'return ('+line.toString()+')'

    Object.keys(line.scope).forEach(function (key) {
      if (!scope[key]) scope[key] = line.scope[key]
    })

    var keys = Object.keys(scope).map(function(key) {
      return key
    })

    var vals = keys.map(function(key) {
      return scope[key]
    })

    return Function.apply(null, keys.concat(src)).apply(null, vals)
  }

  if (arguments.length) line.apply(null, arguments)

  return line
}

genfun.formats = formats
module.exports = genfun


/***/ },

/***/ 4325
(module) {


function isProperty(str) {
  return /^[$A-Z\\_a-z\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc][$A-Z\\_a-z\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc0-9\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u064b-\\u0669\\u0670\\u06d6-\\u06dc\\u06df-\\u06e4\\u06e7\\u06e8\\u06ea-\\u06ed\\u06f0-\\u06f9\\u0711\\u0730-\\u074a\\u07a6-\\u07b0\\u07c0-\\u07c9\\u07eb-\\u07f3\\u0816-\\u0819\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0859-\\u085b\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09cb-\\u09cd\\u09d7\\u09e2\\u09e3\\u09e6-\\u09ef\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b62\\u0b63\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c3e-\\u0c44\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d3e-\\u0d44\\u0d46-\\u0d48\\u0d4a-\\u0d4d\\u0d57\\u0d62\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e31\\u0e34-\\u0e3a\\u0e47-\\u0e4e\\u0e50-\\u0e59\\u0eb1\\u0eb4-\\u0eb9\\u0ebb\\u0ebc\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f3e\\u0f3f\\u0f71-\\u0f84\\u0f86\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u102b-\\u103e\\u1040-\\u1049\\u1056-\\u1059\\u105e-\\u1060\\u1062-\\u1064\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u1712-\\u1714\\u1732-\\u1734\\u1752\\u1753\\u1772\\u1773\\u17b4-\\u17d3\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u18a9\\u1920-\\u192b\\u1930-\\u193b\\u1946-\\u194f\\u19b0-\\u19c0\\u19c8\\u19c9\\u19d0-\\u19d9\\u1a17-\\u1a1b\\u1a55-\\u1a5e\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b00-\\u1b04\\u1b34-\\u1b44\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1b80-\\u1b82\\u1ba1-\\u1bad\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c24-\\u1c37\\u1c40-\\u1c49\\u1c50-\\u1c59\\u1cd0-\\u1cd2\\u1cd4-\\u1ce8\\u1ced\\u1cf2-\\u1cf4\\u1dc0-\\u1de6\\u1dfc-\\u1dff\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2cef-\\u2cf1\\u2d7f\\u2de0-\\u2dff\\u302a-\\u302f\\u3099\\u309a\\ua620-\\ua629\\ua66f\\ua674-\\ua67d\\ua69f\\ua6f0\\ua6f1\\ua802\\ua806\\ua80b\\ua823-\\ua827\\ua880\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8e0-\\ua8f1\\ua900-\\ua909\\ua926-\\ua92d\\ua947-\\ua953\\ua980-\\ua983\\ua9b3-\\ua9c0\\ua9d0-\\ua9d9\\uaa29-\\uaa36\\uaa43\\uaa4c\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaab0\\uaab2-\\uaab4\\uaab7\\uaab8\\uaabe\\uaabf\\uaac1\\uaaeb-\\uaaef\\uaaf5\\uaaf6\\uabe3-\\uabea\\uabec\\uabed\\uabf0-\\uabf9\\ufb1e\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f]*$/.test(str)
}
module.exports = isProperty

/***/ },

/***/ 2016
(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// GENERATED FILE. DO NOT EDIT.
(function (global, factory) {
  function preferDefault(exports) {
    return exports.default || exports;
  }
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      var exports = {};
      factory(exports);
      return preferDefault(exports);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else // removed by dead control flow
{}
})(
  typeof globalThis !== "undefined"
    ? globalThis
    : typeof self !== "undefined"
      ? self
      : this,
  function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
      value: true,
    });
    _exports.default = void 0;
    /**
     * @license
     * Copyright 2009 The Closure Library Authors
     * Copyright 2020 Daniel Wirtz / The long.js Authors.
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *     http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     *
     * SPDX-License-Identifier: Apache-2.0
     */

    // WebAssembly optimizations to do native i64 multiplication and divide
    var wasm = null;
    try {
      wasm = new WebAssembly.Instance(
        new WebAssembly.Module(
          new Uint8Array([
            // \\0asm
            0, 97, 115, 109,
            // version 1
            1, 0, 0, 0,
            // section "type"
            1, 13, 2,
            // 0, () => i32
            96, 0, 1, 127,
            // 1, (i32, i32, i32, i32) => i32
            96, 4, 127, 127, 127, 127, 1, 127,
            // section "function"
            3, 7, 6,
            // 0, type 0
            0,
            // 1, type 1
            1,
            // 2, type 1
            1,
            // 3, type 1
            1,
            // 4, type 1
            1,
            // 5, type 1
            1,
            // section "global"
            6, 6, 1,
            // 0, "high", mutable i32
            127, 1, 65, 0, 11,
            // section "export"
            7, 50, 6,
            // 0, "mul"
            3, 109, 117, 108, 0, 1,
            // 1, "div_s"
            5, 100, 105, 118, 95, 115, 0, 2,
            // 2, "div_u"
            5, 100, 105, 118, 95, 117, 0, 3,
            // 3, "rem_s"
            5, 114, 101, 109, 95, 115, 0, 4,
            // 4, "rem_u"
            5, 114, 101, 109, 95, 117, 0, 5,
            // 5, "get_high"
            8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0,
            // section "code"
            10, 191, 1, 6,
            // 0, "get_high"
            4, 0, 35, 0, 11,
            // 1, "mul"
            36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173,
            32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0,
            32, 4, 167, 11,
            // 2, "div_s"
            36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173,
            32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0,
            32, 4, 167, 11,
            // 3, "div_u"
            36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173,
            32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0,
            32, 4, 167, 11,
            // 4, "rem_s"
            36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173,
            32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0,
            32, 4, 167, 11,
            // 5, "rem_u"
            36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173,
            32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0,
            32, 4, 167, 11,
          ]),
        ),
        {},
      ).exports;
    } catch {
      // no wasm support :(
    }

    /**
     * Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as *signed* integers.
     *  See the from* functions below for more convenient ways of constructing Longs.
     * @exports Long
     * @class A Long class for representing a 64 bit two's-complement integer value.
     * @param {number} low The low (signed) 32 bits of the long
     * @param {number} high The high (signed) 32 bits of the long
     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
     * @constructor
     */
    function Long(low, high, unsigned) {
      /**
       * The low 32 bits as a signed value.
       * @type {number}
       */
      this.low = low | 0;

      /**
       * The high 32 bits as a signed value.
       * @type {number}
       */
      this.high = high | 0;

      /**
       * Whether unsigned or not.
       * @type {boolean}
       */
      this.unsigned = !!unsigned;
    }

    // The internal representation of a long is the two given signed, 32-bit values.
    // We use 32-bit pieces because these are the size of integers on which
    // Javascript performs bit-operations.  For operations like addition and
    // multiplication, we split each number into 16 bit pieces, which can easily be
    // multiplied within Javascript's floating-point representation without overflow
    // or change in sign.
    //
    // In the algorithms below, we frequently reduce the negative case to the
    // positive case by negating the input(s) and then post-processing the result.
    // Note that we must ALWAYS check specially whether those values are MIN_VALUE
    // (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
    // a positive number, it overflows back into a negative).  Not handling this
    // case would often result in infinite recursion.
    //
    // Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the from*
    // methods on which they depend.

    /**
     * An indicator used to reliably determine if an object is a Long or not.
     * @type {boolean}
     * @const
     * @private
     */
    Long.prototype.__isLong__;
    Object.defineProperty(Long.prototype, "__isLong__", {
      value: true,
    });

    /**
     * @function
     * @param {*} obj Object
     * @returns {boolean}
     * @inner
     */
    function isLong(obj) {
      return (obj && obj["__isLong__"]) === true;
    }

    /**
     * @function
     * @param {*} value number
     * @returns {number}
     * @inner
     */
    function ctz32(value) {
      var c = Math.clz32(value & -value);
      return value ? 31 - c : c;
    }

    /**
     * Tests if the specified object is a Long.
     * @function
     * @param {*} obj Object
     * @returns {boolean}
     */
    Long.isLong = isLong;

    /**
     * A cache of the Long representations of small integer values.
     * @type {!Object}
     * @inner
     */
    var INT_CACHE = {};

    /**
     * A cache of the Long representations of small unsigned integer values.
     * @type {!Object}
     * @inner
     */
    var UINT_CACHE = {};

    /**
     * @param {number} value
     * @param {boolean=} unsigned
     * @returns {!Long}
     * @inner
     */
    function fromInt(value, unsigned) {
      var obj, cachedObj, cache;
      if (unsigned) {
        value >>>= 0;
        if ((cache = 0 <= value && value < 256)) {
          cachedObj = UINT_CACHE[value];
          if (cachedObj) return cachedObj;
        }
        obj = fromBits(value, 0, true);
        if (cache) UINT_CACHE[value] = obj;
        return obj;
      } else {
        value |= 0;
        if ((cache = -128 <= value && value < 128)) {
          cachedObj = INT_CACHE[value];
          if (cachedObj) return cachedObj;
        }
        obj = fromBits(value, value < 0 ? -1 : 0, false);
        if (cache) INT_CACHE[value] = obj;
        return obj;
      }
    }

    /**
     * Returns a Long representing the given 32 bit integer value.
     * @function
     * @param {number} value The 32 bit integer in question
     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
     * @returns {!Long} The corresponding Long value
     */
    Long.fromInt = fromInt;

    /**
     * @param {number} value
     * @param {boolean=} unsigned
     * @returns {!Long}
     * @inner
     */
    function fromNumber(value, unsigned) {
      if (isNaN(value)) return unsigned ? UZERO : ZERO;
      if (unsigned) {
        if (value < 0) return UZERO;
        if (value >= TWO_PWR_64_DBL) return MAX_UNSIGNED_VALUE;
      } else {
        if (value <= -TWO_PWR_63_DBL) return MIN_VALUE;
        if (value + 1 >= TWO_PWR_63_DBL) return MAX_VALUE;
      }
      if (value < 0) return fromNumber(-value, unsigned).neg();
      return fromBits(
        value % TWO_PWR_32_DBL | 0,
        (value / TWO_PWR_32_DBL) | 0,
        unsigned,
      );
    }

    /**
     * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
     * @function
     * @param {number} value The number in question
     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
     * @returns {!Long} The corresponding Long value
     */
    Long.fromNumber = fromNumber;

    /**
     * @param {number} lowBits
     * @param {number} highBits
     * @param {boolean=} unsigned
     * @returns {!Long}
     * @inner
     */
    function fromBits(lowBits, highBits, unsigned) {
      return new Long(lowBits, highBits, unsigned);
    }

    /**
     * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is
     *  assumed to use 32 bits.
     * @function
     * @param {number} lowBits The low 32 bits
     * @param {number} highBits The high 32 bits
     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
     * @returns {!Long} The corresponding Long value
     */
    Long.fromBits = fromBits;

    /**
     * @function
     * @param {number} base
     * @param {number} exponent
     * @returns {number}
     * @inner
     */
    var pow_dbl = Math.pow; // Used 4 times (4*8 to 15+4)

    /**
     * @param {string} str
     * @param {(boolean|number)=} unsigned
     * @param {number=} radix
     * @returns {!Long}
     * @inner
     */
    function fromString(str, unsigned, radix) {
      if (str.length === 0) throw Error("empty string");
      if (typeof unsigned === "number") {
        // For goog.math.long compatibility
        radix = unsigned;
        unsigned = false;
      } else {
        unsigned = !!unsigned;
      }
      if (
        str === "NaN" ||
        str === "Infinity" ||
        str === "+Infinity" ||
        str === "-Infinity"
      )
        return unsigned ? UZERO : ZERO;
      radix = radix || 10;
      if (radix < 2 || 36 < radix) throw RangeError("radix");
      var p;
      if ((p = str.indexOf("-")) > 0) throw Error("interior hyphen");
      else if (p === 0) {
        return fromString(str.substring(1), unsigned, radix).neg();
      }

      // Do several (8) digits each time through the loop, so as to
      // minimize the calls to the very expensive emulated div.
      var radixToPower = fromNumber(pow_dbl(radix, 8));
      var result = ZERO;
      for (var i = 0; i < str.length; i += 8) {
        var size = Math.min(8, str.length - i),
          value = parseInt(str.substring(i, i + size), radix);
        if (size < 8) {
          var power = fromNumber(pow_dbl(radix, size));
          result = result.mul(power).add(fromNumber(value));
        } else {
          result = result.mul(radixToPower);
          result = result.add(fromNumber(value));
        }
      }
      result.unsigned = unsigned;
      return result;
    }

    /**
     * Returns a Long representation of the given string, written using the specified radix.
     * @function
     * @param {string} str The textual representation of the Long
     * @param {(boolean|number)=} unsigned Whether unsigned or not, defaults to signed
     * @param {number=} radix The radix in which the text is written (2-36), defaults to 10
     * @returns {!Long} The corresponding Long value
     */
    Long.fromString = fromString;

    /**
     * @function
     * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val
     * @param {boolean=} unsigned
     * @returns {!Long}
     * @inner
     */
    function fromValue(val, unsigned) {
      if (typeof val === "number") return fromNumber(val, unsigned);
      if (typeof val === "string") return fromString(val, unsigned);
      // Throws for non-objects, converts non-instanceof Long:
      return fromBits(
        val.low,
        val.high,
        typeof unsigned === "boolean" ? unsigned : val.unsigned,
      );
    }

    /**
     * Converts the specified value to a Long using the appropriate from* function for its type.
     * @function
     * @param {!Long|number|bigint|string|!{low: number, high: number, unsigned: boolean}} val Value
     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
     * @returns {!Long}
     */
    Long.fromValue = fromValue;

    // NOTE: the compiler should inline these constant values below and then remove these variables, so there should be
    // no runtime penalty for these.

    /**
     * @type {number}
     * @const
     * @inner
     */
    var TWO_PWR_16_DBL = 1 << 16;

    /**
     * @type {number}
     * @const
     * @inner
     */
    var TWO_PWR_24_DBL = 1 << 24;

    /**
     * @type {number}
     * @const
     * @inner
     */
    var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;

    /**
     * @type {number}
     * @const
     * @inner
     */
    var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;

    /**
     * @type {number}
     * @const
     * @inner
     */
    var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;

    /**
     * @type {!Long}
     * @const
     * @inner
     */
    var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);

    /**
     * @type {!Long}
     * @inner
     */
    var ZERO = fromInt(0);

    /**
     * Signed zero.
     * @type {!Long}
     */
    Long.ZERO = ZERO;

    /**
     * @type {!Long}
     * @inner
     */
    var UZERO = fromInt(0, true);

    /**
     * Unsigned zero.
     * @type {!Long}
     */
    Long.UZERO = UZERO;

    /**
     * @type {!Long}
     * @inner
     */
    var ONE = fromInt(1);

    /**
     * Signed one.
     * @type {!Long}
     */
    Long.ONE = ONE;

    /**
     * @type {!Long}
     * @inner
     */
    var UONE = fromInt(1, true);

    /**
     * Unsigned one.
     * @type {!Long}
     */
    Long.UONE = UONE;

    /**
     * @type {!Long}
     * @inner
     */
    var NEG_ONE = fromInt(-1);

    /**
     * Signed negative one.
     * @type {!Long}
     */
    Long.NEG_ONE = NEG_ONE;

    /**
     * @type {!Long}
     * @inner
     */
    var MAX_VALUE = fromBits(0xffffffff | 0, 0x7fffffff | 0, false);

    /**
     * Maximum signed value.
     * @type {!Long}
     */
    Long.MAX_VALUE = MAX_VALUE;

    /**
     * @type {!Long}
     * @inner
     */
    var MAX_UNSIGNED_VALUE = fromBits(0xffffffff | 0, 0xffffffff | 0, true);

    /**
     * Maximum unsigned value.
     * @type {!Long}
     */
    Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;

    /**
     * @type {!Long}
     * @inner
     */
    var MIN_VALUE = fromBits(0, 0x80000000 | 0, false);

    /**
     * Minimum signed value.
     * @type {!Long}
     */
    Long.MIN_VALUE = MIN_VALUE;

    /**
     * @alias Long.prototype
     * @inner
     */
    var LongPrototype = Long.prototype;

    /**
     * Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.
     * @this {!Long}
     * @returns {number}
     */
    LongPrototype.toInt = function toInt() {
      return this.unsigned ? this.low >>> 0 : this.low;
    };

    /**
     * Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).
     * @this {!Long}
     * @returns {number}
     */
    LongPrototype.toNumber = function toNumber() {
      if (this.unsigned)
        return (this.high >>> 0) * TWO_PWR_32_DBL + (this.low >>> 0);
      return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
    };

    /**
     * Converts the Long to a string written in the specified radix.
     * @this {!Long}
     * @param {number=} radix Radix (2-36), defaults to 10
     * @returns {string}
     * @override
     * @throws {RangeError} If \`radix\` is out of range
     */
    LongPrototype.toString = function toString(radix) {
      radix = radix || 10;
      if (radix < 2 || 36 < radix) throw RangeError("radix");
      if (this.isZero()) return "0";
      if (this.isNegative()) {
        // Unsigned Longs are never negative
        if (this.eq(MIN_VALUE)) {
          // We need to change the Long value before it can be negated, so we remove
          // the bottom-most digit in this base and then recurse to do the rest.
          var radixLong = fromNumber(radix),
            div = this.div(radixLong),
            rem1 = div.mul(radixLong).sub(this);
          return div.toString(radix) + rem1.toInt().toString(radix);
        } else return "-" + this.neg().toString(radix);
      }

      // Do several (6) digits each time through the loop, so as to
      // minimize the calls to the very expensive emulated div.
      var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned),
        rem = this;
      var result = "";
      while (true) {
        var remDiv = rem.div(radixToPower),
          intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0,
          digits = intval.toString(radix);
        rem = remDiv;
        if (rem.isZero()) return digits + result;
        else {
          while (digits.length < 6) digits = "0" + digits;
          result = "" + digits + result;
        }
      }
    };

    /**
     * Gets the high 32 bits as a signed integer.
     * @this {!Long}
     * @returns {number} Signed high bits
     */
    LongPrototype.getHighBits = function getHighBits() {
      return this.high;
    };

    /**
     * Gets the high 32 bits as an unsigned integer.
     * @this {!Long}
     * @returns {number} Unsigned high bits
     */
    LongPrototype.getHighBitsUnsigned = function getHighBitsUnsigned() {
      return this.high >>> 0;
    };

    /**
     * Gets the low 32 bits as a signed integer.
     * @this {!Long}
     * @returns {number} Signed low bits
     */
    LongPrototype.getLowBits = function getLowBits() {
      return this.low;
    };

    /**
     * Gets the low 32 bits as an unsigned integer.
     * @this {!Long}
     * @returns {number} Unsigned low bits
     */
    LongPrototype.getLowBitsUnsigned = function getLowBitsUnsigned() {
      return this.low >>> 0;
    };

    /**
     * Gets the number of bits needed to represent the absolute value of this Long.
     * @this {!Long}
     * @returns {number}
     */
    LongPrototype.getNumBitsAbs = function getNumBitsAbs() {
      if (this.isNegative())
        // Unsigned Longs are never negative
        return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
      var val = this.high != 0 ? this.high : this.low;
      for (var bit = 31; bit > 0; bit--) if ((val & (1 << bit)) != 0) break;
      return this.high != 0 ? bit + 33 : bit + 1;
    };

    /**
     * Tests if this Long can be safely represented as a JavaScript number.
     * @this {!Long}
     * @returns {boolean}
     */
    LongPrototype.isSafeInteger = function isSafeInteger() {
      // 2^53-1 is the maximum safe value
      var top11Bits = this.high >> 21;
      // [0, 2^53-1]
      if (!top11Bits) return true;
      // > 2^53-1
      if (this.unsigned) return false;
      // [-2^53, -1] except -2^53
      return top11Bits === -1 && !(this.low === 0 && this.high === -0x200000);
    };

    /**
     * Tests if this Long's value equals zero.
     * @this {!Long}
     * @returns {boolean}
     */
    LongPrototype.isZero = function isZero() {
      return this.high === 0 && this.low === 0;
    };

    /**
     * Tests if this Long's value equals zero. This is an alias of {@link Long#isZero}.
     * @returns {boolean}
     */
    LongPrototype.eqz = LongPrototype.isZero;

    /**
     * Tests if this Long's value is negative.
     * @this {!Long}
     * @returns {boolean}
     */
    LongPrototype.isNegative = function isNegative() {
      return !this.unsigned && this.high < 0;
    };

    /**
     * Tests if this Long's value is positive or zero.
     * @this {!Long}
     * @returns {boolean}
     */
    LongPrototype.isPositive = function isPositive() {
      return this.unsigned || this.high >= 0;
    };

    /**
     * Tests if this Long's value is odd.
     * @this {!Long}
     * @returns {boolean}
     */
    LongPrototype.isOdd = function isOdd() {
      return (this.low & 1) === 1;
    };

    /**
     * Tests if this Long's value is even.
     * @this {!Long}
     * @returns {boolean}
     */
    LongPrototype.isEven = function isEven() {
      return (this.low & 1) === 0;
    };

    /**
     * Tests if this Long's value equals the specified's.
     * @this {!Long}
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.equals = function equals(other) {
      if (!isLong(other)) other = fromValue(other);
      if (
        this.unsigned !== other.unsigned &&
        this.high >>> 31 === 1 &&
        other.high >>> 31 === 1
      )
        return false;
      return this.high === other.high && this.low === other.low;
    };

    /**
     * Tests if this Long's value equals the specified's. This is an alias of {@link Long#equals}.
     * @function
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.eq = LongPrototype.equals;

    /**
     * Tests if this Long's value differs from the specified's.
     * @this {!Long}
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.notEquals = function notEquals(other) {
      return !this.eq(/* validates */ other);
    };

    /**
     * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
     * @function
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.neq = LongPrototype.notEquals;

    /**
     * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
     * @function
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.ne = LongPrototype.notEquals;

    /**
     * Tests if this Long's value is less than the specified's.
     * @this {!Long}
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.lessThan = function lessThan(other) {
      return this.comp(/* validates */ other) < 0;
    };

    /**
     * Tests if this Long's value is less than the specified's. This is an alias of {@link Long#lessThan}.
     * @function
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.lt = LongPrototype.lessThan;

    /**
     * Tests if this Long's value is less than or equal the specified's.
     * @this {!Long}
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
      return this.comp(/* validates */ other) <= 0;
    };

    /**
     * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
     * @function
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.lte = LongPrototype.lessThanOrEqual;

    /**
     * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
     * @function
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.le = LongPrototype.lessThanOrEqual;

    /**
     * Tests if this Long's value is greater than the specified's.
     * @this {!Long}
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.greaterThan = function greaterThan(other) {
      return this.comp(/* validates */ other) > 0;
    };

    /**
     * Tests if this Long's value is greater than the specified's. This is an alias of {@link Long#greaterThan}.
     * @function
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.gt = LongPrototype.greaterThan;

    /**
     * Tests if this Long's value is greater than or equal the specified's.
     * @this {!Long}
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
      return this.comp(/* validates */ other) >= 0;
    };

    /**
     * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
     * @function
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.gte = LongPrototype.greaterThanOrEqual;

    /**
     * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
     * @function
     * @param {!Long|number|bigint|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.ge = LongPrototype.greaterThanOrEqual;

    /**
     * Compares this Long's value with the specified's.
     * @this {!Long}
     * @param {!Long|number|bigint|string} other Other value
     * @returns {number} 0 if they are the same, 1 if the this is greater and -1
     *  if the given one is greater
     */
    LongPrototype.compare = function compare(other) {
      if (!isLong(other)) other = fromValue(other);
      if (this.eq(other)) return 0;
      var thisNeg = this.isNegative(),
        otherNeg = other.isNegative();
      if (thisNeg && !otherNeg) return -1;
      if (!thisNeg && otherNeg) return 1;
      // At this point the sign bits are the same
      if (!this.unsigned) return this.sub(other).isNegative() ? -1 : 1;
      // Both are positive if at least one is unsigned
      return other.high >>> 0 > this.high >>> 0 ||
        (other.high === this.high && other.low >>> 0 > this.low >>> 0)
        ? -1
        : 1;
    };

    /**
     * Compares this Long's value with the specified's. This is an alias of {@link Long#compare}.
     * @function
     * @param {!Long|number|bigint|string} other Other value
     * @returns {number} 0 if they are the same, 1 if the this is greater and -1
     *  if the given one is greater
     */
    LongPrototype.comp = LongPrototype.compare;

    /**
     * Negates this Long's value.
     * @this {!Long}
     * @returns {!Long} Negated Long
     */
    LongPrototype.negate = function negate() {
      if (!this.unsigned && this.eq(MIN_VALUE)) return MIN_VALUE;
      return this.not().add(ONE);
    };

    /**
     * Negates this Long's value. This is an alias of {@link Long#negate}.
     * @function
     * @returns {!Long} Negated Long
     */
    LongPrototype.neg = LongPrototype.negate;

    /**
     * Returns the sum of this and the specified Long.
     * @this {!Long}
     * @param {!Long|number|bigint|string} addend Addend
     * @returns {!Long} Sum
     */
    LongPrototype.add = function add(addend) {
      if (!isLong(addend)) addend = fromValue(addend);

      // Divide each number into 4 chunks of 16 bits, and then sum the chunks.

      var a48 = this.high >>> 16;
      var a32 = this.high & 0xffff;
      var a16 = this.low >>> 16;
      var a00 = this.low & 0xffff;
      var b48 = addend.high >>> 16;
      var b32 = addend.high & 0xffff;
      var b16 = addend.low >>> 16;
      var b00 = addend.low & 0xffff;
      var c48 = 0,
        c32 = 0,
        c16 = 0,
        c00 = 0;
      c00 += a00 + b00;
      c16 += c00 >>> 16;
      c00 &= 0xffff;
      c16 += a16 + b16;
      c32 += c16 >>> 16;
      c16 &= 0xffff;
      c32 += a32 + b32;
      c48 += c32 >>> 16;
      c32 &= 0xffff;
      c48 += a48 + b48;
      c48 &= 0xffff;
      return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
    };

    /**
     * Returns the difference of this and the specified Long.
     * @this {!Long}
     * @param {!Long|number|bigint|string} subtrahend Subtrahend
     * @returns {!Long} Difference
     */
    LongPrototype.subtract = function subtract(subtrahend) {
      if (!isLong(subtrahend)) subtrahend = fromValue(subtrahend);
      return this.add(subtrahend.neg());
    };

    /**
     * Returns the difference of this and the specified Long. This is an alias of {@link Long#subtract}.
     * @function
     * @param {!Long|number|bigint|string} subtrahend Subtrahend
     * @returns {!Long} Difference
     */
    LongPrototype.sub = LongPrototype.subtract;

    /**
     * Returns the product of this and the specified Long.
     * @this {!Long}
     * @param {!Long|number|bigint|string} multiplier Multiplier
     * @returns {!Long} Product
     */
    LongPrototype.multiply = function multiply(multiplier) {
      if (this.isZero()) return this;
      if (!isLong(multiplier)) multiplier = fromValue(multiplier);

      // use wasm support if present
      if (wasm) {
        var low = wasm["mul"](
          this.low,
          this.high,
          multiplier.low,
          multiplier.high,
        );
        return fromBits(low, wasm["get_high"](), this.unsigned);
      }
      if (multiplier.isZero()) return this.unsigned ? UZERO : ZERO;
      if (this.eq(MIN_VALUE)) return multiplier.isOdd() ? MIN_VALUE : ZERO;
      if (multiplier.eq(MIN_VALUE)) return this.isOdd() ? MIN_VALUE : ZERO;
      if (this.isNegative()) {
        if (multiplier.isNegative()) return this.neg().mul(multiplier.neg());
        else return this.neg().mul(multiplier).neg();
      } else if (multiplier.isNegative())
        return this.mul(multiplier.neg()).neg();

      // If both longs are small, use float multiplication
      if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24))
        return fromNumber(
          this.toNumber() * multiplier.toNumber(),
          this.unsigned,
        );

      // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
      // We can skip products that would overflow.

      var a48 = this.high >>> 16;
      var a32 = this.high & 0xffff;
      var a16 = this.low >>> 16;
      var a00 = this.low & 0xffff;
      var b48 = multiplier.high >>> 16;
      var b32 = multiplier.high & 0xffff;
      var b16 = multiplier.low >>> 16;
      var b00 = multiplier.low & 0xffff;
      var c48 = 0,
        c32 = 0,
        c16 = 0,
        c00 = 0;
      c00 += a00 * b00;
      c16 += c00 >>> 16;
      c00 &= 0xffff;
      c16 += a16 * b00;
      c32 += c16 >>> 16;
      c16 &= 0xffff;
      c16 += a00 * b16;
      c32 += c16 >>> 16;
      c16 &= 0xffff;
      c32 += a32 * b00;
      c48 += c32 >>> 16;
      c32 &= 0xffff;
      c32 += a16 * b16;
      c48 += c32 >>> 16;
      c32 &= 0xffff;
      c32 += a00 * b32;
      c48 += c32 >>> 16;
      c32 &= 0xffff;
      c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
      c48 &= 0xffff;
      return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
    };

    /**
     * Returns the product of this and the specified Long. This is an alias of {@link Long#multiply}.
     * @function
     * @param {!Long|number|bigint|string} multiplier Multiplier
     * @returns {!Long} Product
     */
    LongPrototype.mul = LongPrototype.multiply;

    /**
     * Returns this Long divided by the specified. The result is signed if this Long is signed or
     *  unsigned if this Long is unsigned.
     * @this {!Long}
     * @param {!Long|number|bigint|string} divisor Divisor
     * @returns {!Long} Quotient
     */
    LongPrototype.divide = function divide(divisor) {
      if (!isLong(divisor)) divisor = fromValue(divisor);
      if (divisor.isZero()) throw Error("division by zero");

      // use wasm support if present
      if (wasm) {
        // guard against signed division overflow: the largest
        // negative number / -1 would be 1 larger than the largest
        // positive number, due to two's complement.
        if (
          !this.unsigned &&
          this.high === -0x80000000 &&
          divisor.low === -1 &&
          divisor.high === -1
        ) {
          // be consistent with non-wasm code path
          return this;
        }
        var low = (this.unsigned ? wasm["div_u"] : wasm["div_s"])(
          this.low,
          this.high,
          divisor.low,
          divisor.high,
        );
        return fromBits(low, wasm["get_high"](), this.unsigned);
      }
      if (this.isZero()) return this.unsigned ? UZERO : ZERO;
      var approx, rem, res;
      if (!this.unsigned) {
        // This section is only relevant for signed longs and is derived from the
        // closure library as a whole.
        if (this.eq(MIN_VALUE)) {
          if (divisor.eq(ONE) || divisor.eq(NEG_ONE))
            return MIN_VALUE; // recall that -MIN_VALUE == MIN_VALUE
          else if (divisor.eq(MIN_VALUE)) return ONE;
          else {
            // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
            var halfThis = this.shr(1);
            approx = halfThis.div(divisor).shl(1);
            if (approx.eq(ZERO)) {
              return divisor.isNegative() ? ONE : NEG_ONE;
            } else {
              rem = this.sub(divisor.mul(approx));
              res = approx.add(rem.div(divisor));
              return res;
            }
          }
        } else if (divisor.eq(MIN_VALUE)) return this.unsigned ? UZERO : ZERO;
        if (this.isNegative()) {
          if (divisor.isNegative()) return this.neg().div(divisor.neg());
          return this.neg().div(divisor).neg();
        } else if (divisor.isNegative()) return this.div(divisor.neg()).neg();
        res = ZERO;
      } else {
        // The algorithm below has not been made for unsigned longs. It's therefore
        // required to take special care of the MSB prior to running it.
        if (!divisor.unsigned) divisor = divisor.toUnsigned();
        if (divisor.gt(this)) return UZERO;
        if (divisor.gt(this.shru(1)))
          // 15 >>> 1 = 7 ; with divisor = 8 ; true
          return UONE;
        res = UZERO;
      }

      // Repeat the following until the remainder is less than other:  find a
      // floating-point that approximates remainder / other *from below*, add this
      // into the result, and subtract it from the remainder.  It is critical that
      // the approximate value is less than or equal to the real value so that the
      // remainder never becomes negative.
      rem = this;
      while (rem.gte(divisor)) {
        // Approximate the result of division. This may be a little greater or
        // smaller than the actual value.
        approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));

        // We will tweak the approximate result by changing it in the 48-th digit or
        // the smallest non-fractional digit, whichever is larger.
        var log2 = Math.ceil(Math.log(approx) / Math.LN2),
          delta = log2 <= 48 ? 1 : pow_dbl(2, log2 - 48),
          // Decrease the approximation until it is smaller than the remainder.  Note
          // that if it is too large, the product overflows and is negative.
          approxRes = fromNumber(approx),
          approxRem = approxRes.mul(divisor);
        while (approxRem.isNegative() || approxRem.gt(rem)) {
          approx -= delta;
          approxRes = fromNumber(approx, this.unsigned);
          approxRem = approxRes.mul(divisor);
        }

        // We know the answer can't be zero... and actually, zero would cause
        // infinite recursion since we would make no progress.
        if (approxRes.isZero()) approxRes = ONE;
        res = res.add(approxRes);
        rem = rem.sub(approxRem);
      }
      return res;
    };

    /**
     * Returns this Long divided by the specified. This is an alias of {@link Long#divide}.
     * @function
     * @param {!Long|number|bigint|string} divisor Divisor
     * @returns {!Long} Quotient
     */
    LongPrototype.div = LongPrototype.divide;

    /**
     * Returns this Long modulo the specified.
     * @this {!Long}
     * @param {!Long|number|bigint|string} divisor Divisor
     * @returns {!Long} Remainder
     */
    LongPrototype.modulo = function modulo(divisor) {
      if (!isLong(divisor)) divisor = fromValue(divisor);

      // use wasm support if present
      if (wasm) {
        var low = (this.unsigned ? wasm["rem_u"] : wasm["rem_s"])(
          this.low,
          this.high,
          divisor.low,
          divisor.high,
        );
        return fromBits(low, wasm["get_high"](), this.unsigned);
      }
      return this.sub(this.div(divisor).mul(divisor));
    };

    /**
     * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
     * @function
     * @param {!Long|number|bigint|string} divisor Divisor
     * @returns {!Long} Remainder
     */
    LongPrototype.mod = LongPrototype.modulo;

    /**
     * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
     * @function
     * @param {!Long|number|bigint|string} divisor Divisor
     * @returns {!Long} Remainder
     */
    LongPrototype.rem = LongPrototype.modulo;

    /**
     * Returns the bitwise NOT of this Long.
     * @this {!Long}
     * @returns {!Long}
     */
    LongPrototype.not = function not() {
      return fromBits(~this.low, ~this.high, this.unsigned);
    };

    /**
     * Returns count leading zeros of this Long.
     * @this {!Long}
     * @returns {!number}
     */
    LongPrototype.countLeadingZeros = function countLeadingZeros() {
      return this.high ? Math.clz32(this.high) : Math.clz32(this.low) + 32;
    };

    /**
     * Returns count leading zeros. This is an alias of {@link Long#countLeadingZeros}.
     * @function
     * @param {!Long}
     * @returns {!number}
     */
    LongPrototype.clz = LongPrototype.countLeadingZeros;

    /**
     * Returns count trailing zeros of this Long.
     * @this {!Long}
     * @returns {!number}
     */
    LongPrototype.countTrailingZeros = function countTrailingZeros() {
      return this.low ? ctz32(this.low) : ctz32(this.high) + 32;
    };

    /**
     * Returns count trailing zeros. This is an alias of {@link Long#countTrailingZeros}.
     * @function
     * @param {!Long}
     * @returns {!number}
     */
    LongPrototype.ctz = LongPrototype.countTrailingZeros;

    /**
     * Returns the bitwise AND of this Long and the specified.
     * @this {!Long}
     * @param {!Long|number|bigint|string} other Other Long
     * @returns {!Long}
     */
    LongPrototype.and = function and(other) {
      if (!isLong(other)) other = fromValue(other);
      return fromBits(
        this.low & other.low,
        this.high & other.high,
        this.unsigned,
      );
    };

    /**
     * Returns the bitwise OR of this Long and the specified.
     * @this {!Long}
     * @param {!Long|number|bigint|string} other Other Long
     * @returns {!Long}
     */
    LongPrototype.or = function or(other) {
      if (!isLong(other)) other = fromValue(other);
      return fromBits(
        this.low | other.low,
        this.high | other.high,
        this.unsigned,
      );
    };

    /**
     * Returns the bitwise XOR of this Long and the given one.
     * @this {!Long}
     * @param {!Long|number|bigint|string} other Other Long
     * @returns {!Long}
     */
    LongPrototype.xor = function xor(other) {
      if (!isLong(other)) other = fromValue(other);
      return fromBits(
        this.low ^ other.low,
        this.high ^ other.high,
        this.unsigned,
      );
    };

    /**
     * Returns this Long with bits shifted to the left by the given amount.
     * @this {!Long}
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */
    LongPrototype.shiftLeft = function shiftLeft(numBits) {
      if (isLong(numBits)) numBits = numBits.toInt();
      if ((numBits &= 63) === 0) return this;
      else if (numBits < 32)
        return fromBits(
          this.low << numBits,
          (this.high << numBits) | (this.low >>> (32 - numBits)),
          this.unsigned,
        );
      else return fromBits(0, this.low << (numBits - 32), this.unsigned);
    };

    /**
     * Returns this Long with bits shifted to the left by the given amount. This is an alias of {@link Long#shiftLeft}.
     * @function
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */
    LongPrototype.shl = LongPrototype.shiftLeft;

    /**
     * Returns this Long with bits arithmetically shifted to the right by the given amount.
     * @this {!Long}
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */
    LongPrototype.shiftRight = function shiftRight(numBits) {
      if (isLong(numBits)) numBits = numBits.toInt();
      if ((numBits &= 63) === 0) return this;
      else if (numBits < 32)
        return fromBits(
          (this.low >>> numBits) | (this.high << (32 - numBits)),
          this.high >> numBits,
          this.unsigned,
        );
      else
        return fromBits(
          this.high >> (numBits - 32),
          this.high >= 0 ? 0 : -1,
          this.unsigned,
        );
    };

    /**
     * Returns this Long with bits arithmetically shifted to the right by the given amount. This is an alias of {@link Long#shiftRight}.
     * @function
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */
    LongPrototype.shr = LongPrototype.shiftRight;

    /**
     * Returns this Long with bits logically shifted to the right by the given amount.
     * @this {!Long}
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */
    LongPrototype.shiftRightUnsigned = function shiftRightUnsigned(numBits) {
      if (isLong(numBits)) numBits = numBits.toInt();
      if ((numBits &= 63) === 0) return this;
      if (numBits < 32)
        return fromBits(
          (this.low >>> numBits) | (this.high << (32 - numBits)),
          this.high >>> numBits,
          this.unsigned,
        );
      if (numBits === 32) return fromBits(this.high, 0, this.unsigned);
      return fromBits(this.high >>> (numBits - 32), 0, this.unsigned);
    };

    /**
     * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
     * @function
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */
    LongPrototype.shru = LongPrototype.shiftRightUnsigned;

    /**
     * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
     * @function
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */
    LongPrototype.shr_u = LongPrototype.shiftRightUnsigned;

    /**
     * Returns this Long with bits rotated to the left by the given amount.
     * @this {!Long}
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Rotated Long
     */
    LongPrototype.rotateLeft = function rotateLeft(numBits) {
      var b;
      if (isLong(numBits)) numBits = numBits.toInt();
      if ((numBits &= 63) === 0) return this;
      if (numBits === 32) return fromBits(this.high, this.low, this.unsigned);
      if (numBits < 32) {
        b = 32 - numBits;
        return fromBits(
          (this.low << numBits) | (this.high >>> b),
          (this.high << numBits) | (this.low >>> b),
          this.unsigned,
        );
      }
      numBits -= 32;
      b = 32 - numBits;
      return fromBits(
        (this.high << numBits) | (this.low >>> b),
        (this.low << numBits) | (this.high >>> b),
        this.unsigned,
      );
    };
    /**
     * Returns this Long with bits rotated to the left by the given amount. This is an alias of {@link Long#rotateLeft}.
     * @function
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Rotated Long
     */
    LongPrototype.rotl = LongPrototype.rotateLeft;

    /**
     * Returns this Long with bits rotated to the right by the given amount.
     * @this {!Long}
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Rotated Long
     */
    LongPrototype.rotateRight = function rotateRight(numBits) {
      var b;
      if (isLong(numBits)) numBits = numBits.toInt();
      if ((numBits &= 63) === 0) return this;
      if (numBits === 32) return fromBits(this.high, this.low, this.unsigned);
      if (numBits < 32) {
        b = 32 - numBits;
        return fromBits(
          (this.high << b) | (this.low >>> numBits),
          (this.low << b) | (this.high >>> numBits),
          this.unsigned,
        );
      }
      numBits -= 32;
      b = 32 - numBits;
      return fromBits(
        (this.low << b) | (this.high >>> numBits),
        (this.high << b) | (this.low >>> numBits),
        this.unsigned,
      );
    };
    /**
     * Returns this Long with bits rotated to the right by the given amount. This is an alias of {@link Long#rotateRight}.
     * @function
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Rotated Long
     */
    LongPrototype.rotr = LongPrototype.rotateRight;

    /**
     * Converts this Long to signed.
     * @this {!Long}
     * @returns {!Long} Signed long
     */
    LongPrototype.toSigned = function toSigned() {
      if (!this.unsigned) return this;
      return fromBits(this.low, this.high, false);
    };

    /**
     * Converts this Long to unsigned.
     * @this {!Long}
     * @returns {!Long} Unsigned long
     */
    LongPrototype.toUnsigned = function toUnsigned() {
      if (this.unsigned) return this;
      return fromBits(this.low, this.high, true);
    };

    /**
     * Converts this Long to its byte representation.
     * @param {boolean=} le Whether little or big endian, defaults to big endian
     * @this {!Long}
     * @returns {!Array.<number>} Byte representation
     */
    LongPrototype.toBytes = function toBytes(le) {
      return le ? this.toBytesLE() : this.toBytesBE();
    };

    /**
     * Converts this Long to its little endian byte representation.
     * @this {!Long}
     * @returns {!Array.<number>} Little endian byte representation
     */
    LongPrototype.toBytesLE = function toBytesLE() {
      var hi = this.high,
        lo = this.low;
      return [
        lo & 0xff,
        (lo >>> 8) & 0xff,
        (lo >>> 16) & 0xff,
        lo >>> 24,
        hi & 0xff,
        (hi >>> 8) & 0xff,
        (hi >>> 16) & 0xff,
        hi >>> 24,
      ];
    };

    /**
     * Converts this Long to its big endian byte representation.
     * @this {!Long}
     * @returns {!Array.<number>} Big endian byte representation
     */
    LongPrototype.toBytesBE = function toBytesBE() {
      var hi = this.high,
        lo = this.low;
      return [
        hi >>> 24,
        (hi >>> 16) & 0xff,
        (hi >>> 8) & 0xff,
        hi & 0xff,
        lo >>> 24,
        (lo >>> 16) & 0xff,
        (lo >>> 8) & 0xff,
        lo & 0xff,
      ];
    };

    /**
     * Creates a Long from its byte representation.
     * @param {!Array.<number>} bytes Byte representation
     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
     * @param {boolean=} le Whether little or big endian, defaults to big endian
     * @returns {Long} The corresponding Long value
     */
    Long.fromBytes = function fromBytes(bytes, unsigned, le) {
      return le
        ? Long.fromBytesLE(bytes, unsigned)
        : Long.fromBytesBE(bytes, unsigned);
    };

    /**
     * Creates a Long from its little endian byte representation.
     * @param {!Array.<number>} bytes Little endian byte representation
     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
     * @returns {Long} The corresponding Long value
     */
    Long.fromBytesLE = function fromBytesLE(bytes, unsigned) {
      return new Long(
        bytes[0] | (bytes[1] << 8) | (bytes[2] << 16) | (bytes[3] << 24),
        bytes[4] | (bytes[5] << 8) | (bytes[6] << 16) | (bytes[7] << 24),
        unsigned,
      );
    };

    /**
     * Creates a Long from its big endian byte representation.
     * @param {!Array.<number>} bytes Big endian byte representation
     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
     * @returns {Long} The corresponding Long value
     */
    Long.fromBytesBE = function fromBytesBE(bytes, unsigned) {
      return new Long(
        (bytes[4] << 24) | (bytes[5] << 16) | (bytes[6] << 8) | bytes[7],
        (bytes[0] << 24) | (bytes[1] << 16) | (bytes[2] << 8) | bytes[3],
        unsigned,
      );
    };

    // Support conversion to/from BigInt where available
    if (typeof BigInt === "function") {
      /**
       * Returns a Long representing the given big integer.
       * @function
       * @param {number} value The big integer value
       * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
       * @returns {!Long} The corresponding Long value
       */
      Long.fromBigInt = function fromBigInt(value, unsigned) {
        var lowBits = Number(BigInt.asIntN(32, value));
        var highBits = Number(BigInt.asIntN(32, value >> BigInt(32)));
        return fromBits(lowBits, highBits, unsigned);
      };

      // Override
      Long.fromValue = function fromValueWithBigInt(value, unsigned) {
        if (typeof value === "bigint") return Long.fromBigInt(value, unsigned);
        return fromValue(value, unsigned);
      };

      /**
       * Converts the Long to its big integer representation.
       * @this {!Long}
       * @returns {bigint}
       */
      LongPrototype.toBigInt = function toBigInt() {
        var lowBigInt = BigInt(this.low >>> 0);
        var highBigInt = BigInt(this.unsigned ? this.high >>> 0 : this.high);
        return (highBigInt << BigInt(32)) | lowBigInt;
      };
    }
    var _default = (_exports.default = Long);
  },
);


/***/ },

/***/ 7438
(__unused_webpack_module, exports) {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
exports.createLRU = void 0;
const createLRU = (options) => {
    let { max } = options;
    if (!(Number.isInteger(max) && max > 0))
        throw new TypeError('\`max\` must be a positive integer');
    let size = 0;
    let head = 0;
    let tail = 0;
    let free = [];
    const { onEviction } = options;
    const keyMap = new Map();
    const keyList = new Array(max).fill(undefined);
    const valList = new Array(max).fill(undefined);
    const next = new Array(max).fill(0);
    const prev = new Array(max).fill(0);
    const linkTail = (index) => {
        next[tail] = index;
        prev[index] = tail;
        next[index] = 0;
        tail = index;
    };
    const moveToTail = (index) => {
        if (index === tail)
            return;
        const nextIndex = next[index];
        const prevIndex = prev[index];
        if (index === head)
            head = nextIndex;
        else
            next[prevIndex] = nextIndex;
        prev[nextIndex] = prevIndex;
        linkTail(index);
    };
    const _shrink = (newMax) => {
        let current = tail;
        const preserve = Math.min(size, newMax);
        const remove = size - preserve;
        const newKeyList = new Array(preserve);
        const newValList = new Array(preserve);
        for (let i = 0; i < remove; i++) {
            const key = keyList[head];
            onEviction === null || onEviction === void 0 ? void 0 : onEviction(key, valList[head]);
            keyMap.delete(key);
            head = next[head];
        }
        for (let i = preserve - 1; i >= 0; i--) {
            newKeyList[i] = keyList[current];
            newValList[i] = valList[current];
            keyMap.set(keyList[current], i);
            current = prev[current];
        }
        head = 0;
        tail = preserve - 1;
        size = preserve;
        keyList.length = newMax;
        valList.length = newMax;
        next.length = newMax;
        prev.length = newMax;
        for (let i = 0; i < preserve; i++) {
            keyList[i] = newKeyList[i];
            valList[i] = newValList[i];
            next[i] = i + 1;
            prev[i] = i - 1;
        }
        free = [];
        for (let i = preserve; i < newMax; i++)
            free.push(i);
    };
    const _grow = (newMax) => {
        keyList.length = newMax;
        valList.length = newMax;
        next.length = newMax;
        prev.length = newMax;
        keyList.fill(undefined, max);
        valList.fill(undefined, max);
        next.fill(0, max);
        prev.fill(0, max);
    };
    return {
        /** Adds a key-value pair to the cache. Updates the value if the key already exists. */
        set(key, value) {
            if (key === undefined)
                return;
            let index = keyMap.get(key);
            if (index === undefined) {
                if (size === max) {
                    index = head;
                    const evictKey = keyList[index];
                    onEviction === null || onEviction === void 0 ? void 0 : onEviction(evictKey, valList[index]);
                    keyMap.delete(evictKey);
                    head = next[index];
                    prev[head] = 0;
                }
                else {
                    index = free.length > 0 ? free.pop() : size;
                    size++;
                }
                keyMap.set(key, index);
                keyList[index] = key;
                valList[index] = value;
                if (size === 1)
                    head = tail = index;
                else
                    linkTail(index);
            }
            else {
                onEviction === null || onEviction === void 0 ? void 0 : onEviction(key, valList[index]);
                valList[index] = value;
                moveToTail(index);
            }
        },
        /** Retrieves the value for a given key and moves the key to the most recent position. */
        get(key) {
            const index = keyMap.get(key);
            if (index === undefined)
                return;
            if (index !== tail)
                moveToTail(index);
            return valList[index];
        },
        /** Retrieves the value for a given key without changing its position. */
        peek: (key) => {
            const index = keyMap.get(key);
            return index !== undefined ? valList[index] : undefined;
        },
        /** Checks if a key exists in the cache. */
        has: (key) => keyMap.has(key),
        /** Iterates over all keys in the cache, from most recent to least recent. */
        *keys() {
            let current = tail;
            for (let i = 0; i < size; i++) {
                yield keyList[current];
                current = prev[current];
            }
        },
        /** Iterates over all values in the cache, from most recent to least recent. */
        *values() {
            let current = tail;
            for (let i = 0; i < size; i++) {
                yield valList[current];
                current = prev[current];
            }
        },
        /** Iterates over \`[key, value]\` pairs in the cache, from most recent to least recent. */
        *entries() {
            let current = tail;
            for (let i = 0; i < size; i++) {
                yield [keyList[current], valList[current]];
                current = prev[current];
            }
        },
        /** Iterates over each value-key pair in the cache, from most recent to least recent. */
        forEach: (callback) => {
            let current = tail;
            for (let i = 0; i < size; i++) {
                const key = keyList[current];
                const value = valList[current];
                callback(value, key);
                current = prev[current];
            }
        },
        /** Deletes a key-value pair from the cache. */
        delete(key) {
            const index = keyMap.get(key);
            if (index === undefined)
                return false;
            onEviction === null || onEviction === void 0 ? void 0 : onEviction(key, valList[index]);
            keyMap.delete(key);
            free.push(index);
            keyList[index] = undefined;
            valList[index] = undefined;
            const prevIndex = prev[index];
            const nextIndex = next[index];
            if (index === head)
                head = nextIndex;
            else
                next[prevIndex] = nextIndex;
            if (index === tail)
                tail = prevIndex;
            else
                prev[nextIndex] = prevIndex;
            size--;
            return true;
        },
        /** Evicts the oldest item or the specified number of the oldest items from the cache. */
        evict: (number) => {
            let toPrune = Math.min(number, size);
            while (toPrune > 0) {
                const evictHead = head;
                const key = keyList[evictHead];
                onEviction === null || onEviction === void 0 ? void 0 : onEviction(key, valList[evictHead]);
                keyMap.delete(key);
                keyList[evictHead] = undefined;
                valList[evictHead] = undefined;
                head = next[evictHead];
                prev[head] = 0;
                size--;
                free.push(evictHead);
                toPrune--;
            }
            if (size === 0)
                head = tail = 0;
        },
        /** Clears all key-value pairs from the cache. */
        clear() {
            if (onEviction) {
                let current = head;
                for (let i = 0; i < size; i++) {
                    onEviction(keyList[current], valList[current]);
                    current = next[current];
                }
            }
            keyMap.clear();
            keyList.fill(undefined);
            valList.fill(undefined);
            free = [];
            size = 0;
            head = tail = 0;
        },
        /** Resizes the cache to a new maximum size, evicting items if necessary. */
        resize: (newMax) => {
            if (!(Number.isInteger(newMax) && newMax > 0))
                throw new TypeError('\`max\` must be a positive integer');
            if (newMax === max)
                return;
            if (newMax < max)
                _shrink(newMax);
            else
                _grow(newMax);
            max = newMax;
        },
        /** Returns the maximum number of items that can be stored in the cache. */
        get max() {
            return max;
        },
        /** Returns the number of items currently stored in the cache. */
        get size() {
            return size;
        },
        /** Returns the number of currently available slots in the cache before reaching the maximum size. */
        get available() {
            return max - size;
        },
    };
};
exports.createLRU = createLRU;


/***/ },

/***/ 3247
(__unused_webpack_module, exports, __webpack_require__) {



/*
4.1 authentication: (http://bazaar.launchpad.net/~mysql/mysql-server/5.5/view/head:/sql/password.c)

  SERVER:  public_seed=create_random_string()
           send(public_seed)

  CLIENT:  recv(public_seed)
           hash_stage1=sha1("password")
           hash_stage2=sha1(hash_stage1)
           reply=xor(hash_stage1, sha1(public_seed,hash_stage2)

           // this three steps are done in scramble()

           send(reply)


  SERVER:  recv(reply)
           hash_stage1=xor(reply, sha1(public_seed,hash_stage2))
           candidate_hash2=sha1(hash_stage1)
           check(candidate_hash2==hash_stage2)

server stores sha1(sha1(password)) ( hash_stag2)
*/

const crypto = __webpack_require__(6982);

function sha1(msg, msg1, msg2) {
  const hash = crypto.createHash('sha1');
  hash.update(msg);
  if (msg1) {
    hash.update(msg1);
  }

  if (msg2) {
    hash.update(msg2);
  }

  return hash.digest();
}

function xor(a, b) {
  const result = Buffer.allocUnsafe(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = a[i] ^ b[i];
  }
  return result;
}

exports.xor = xor;

function token(password, scramble1, scramble2) {
  if (!password) {
    return Buffer.alloc(0);
  }
  const stage1 = sha1(password);
  return exports.calculateTokenFromPasswordSha(stage1, scramble1, scramble2);
}

exports.calculateTokenFromPasswordSha = function (
  passwordSha,
  scramble1,
  scramble2
) {
  // we use AUTH 41 here, and we need only the bytes we just need.
  const authPluginData1 = scramble1.slice(0, 8);
  const authPluginData2 = scramble2.slice(0, 12);
  const stage2 = sha1(passwordSha);
  const stage3 = sha1(authPluginData1, authPluginData2, stage2);
  return xor(stage3, passwordSha);
};

exports.calculateToken = token;

exports.verifyToken = function (publicSeed1, publicSeed2, token, doubleSha) {
  const hashStage1 = xor(token, sha1(publicSeed1, publicSeed2, doubleSha));
  const candidateHash2 = sha1(hashStage1);
  return candidateHash2.compare(doubleSha) === 0;
};

exports.doubleSha1 = function (password) {
  return sha1(sha1(password));
};

function xorRotating(a, seed) {
  const result = Buffer.allocUnsafe(a.length);
  const seedLen = seed.length;

  for (let i = 0; i < a.length; i++) {
    result[i] = a[i] ^ seed[i % seedLen];
  }
  return result;
}
exports.xorRotating = xorRotating;


/***/ },

/***/ 3339
(module, __unused_webpack_exports, __webpack_require__) {



// https://mysqlserverteam.com/mysql-8-0-4-new-default-authentication-plugin-caching_sha2_password/

const PLUGIN_NAME = 'caching_sha2_password';
const crypto = __webpack_require__(6982);
const { xor, xorRotating } = __webpack_require__(3247);

const REQUEST_SERVER_KEY_PACKET = Buffer.from([2]);
const FAST_AUTH_SUCCESS_PACKET = Buffer.from([3]);
const PERFORM_FULL_AUTHENTICATION_PACKET = Buffer.from([4]);

const STATE_INITIAL = 0;
const STATE_TOKEN_SENT = 1;
const STATE_WAIT_SERVER_KEY = 2;
const STATE_FINAL = -1;

function sha256(msg) {
  const hash = crypto.createHash('sha256');
  hash.update(msg);
  return hash.digest();
}

function calculateToken(password, scramble) {
  if (!password) {
    return Buffer.alloc(0);
  }
  const stage1 = sha256(Buffer.from(password));
  const stage2 = sha256(stage1);
  const stage3 = sha256(Buffer.concat([stage2, scramble]));
  return xor(stage1, stage3);
}

function encrypt(password, scramble, key) {
  const stage1 = xorRotating(Buffer.from(\`\${password}\\0\`, 'utf8'), scramble);
  return crypto.publicEncrypt(
    {
      key,
      oaepHash: 'sha1',
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
    },
    stage1
  );
}

const pluginFactory =
  (pluginOptions = {}) =>
  ({ connection }) => {
    let state = 0;
    let scramble = null;

    const password = connection.config.password;

    const authWithKey = (serverKey) => {
      const _password = encrypt(password, scramble, serverKey);
      state = STATE_FINAL;
      return _password;
    };

    return (data) => {
      switch (state) {
        case STATE_INITIAL:
          scramble = data.slice(0, 20);
          state = STATE_TOKEN_SENT;
          return calculateToken(password, scramble);

        case STATE_TOKEN_SENT:
          if (FAST_AUTH_SUCCESS_PACKET.equals(data)) {
            state = STATE_FINAL;
            return null;
          }

          if (PERFORM_FULL_AUTHENTICATION_PACKET.equals(data)) {
            const isSecureConnection =
              typeof pluginOptions.overrideIsSecure === 'undefined'
                ? connection.config.ssl || connection.config.socketPath
                : pluginOptions.overrideIsSecure;
            if (isSecureConnection) {
              state = STATE_FINAL;
              return Buffer.from(\`\${password}\\0\`, 'utf8');
            }

            // if client provides key we can save one extra roundrip on first connection
            if (pluginOptions.serverPublicKey) {
              return authWithKey(pluginOptions.serverPublicKey);
            }

            state = STATE_WAIT_SERVER_KEY;
            return REQUEST_SERVER_KEY_PACKET;
          }
          throw new Error(
            \`Invalid AuthMoreData packet received by \${PLUGIN_NAME} plugin in STATE_TOKEN_SENT state.\`
          );
        case STATE_WAIT_SERVER_KEY:
          if (pluginOptions.onServerPublicKey) {
            pluginOptions.onServerPublicKey(data);
          }
          return authWithKey(data);
        case STATE_FINAL:
          throw new Error(
            \`Unexpected data in AuthMoreData packet received by \${PLUGIN_NAME} plugin in STATE_FINAL state.\`
          );
      }

      throw new Error(
        \`Unexpected data in AuthMoreData packet received by \${PLUGIN_NAME} plugin in state \${state}\`
      );
    };
  };

// Export the plugin factory as default
module.exports = pluginFactory;

// Export calculateToken for reuse in initial handshake optimization
module.exports.calculateToken = calculateToken;


/***/ },

/***/ 669
(module) {



function bufferFromStr(str) {
  return Buffer.from(\`\${str}\\0\`);
}

const create_mysql_clear_password_plugin = (pluginOptions) =>
  function mysql_clear_password_plugin({ connection, command }) {
    const password =
      command.password || pluginOptions.password || connection.config.password;

    return function (/* pluginData */) {
      return bufferFromStr(password);
    };
  };

module.exports = create_mysql_clear_password_plugin;


/***/ },

/***/ 1749
(module, __unused_webpack_exports, __webpack_require__) {



//const PLUGIN_NAME = 'mysql_native_password';
const auth41 = __webpack_require__(3247);

module.exports =
  (pluginOptions) =>
  ({ connection, command }) => {
    const password =
      command.password || pluginOptions.password || connection.config.password;
    const passwordSha1 =
      command.passwordSha1 ||
      pluginOptions.passwordSha1 ||
      connection.config.passwordSha1;
    return (data) => {
      const authPluginData1 = data.slice(0, 8);
      const authPluginData2 = data.slice(8, 20);
      let authToken;
      if (passwordSha1) {
        authToken = auth41.calculateTokenFromPasswordSha(
          passwordSha1,
          authPluginData1,
          authPluginData2
        );
      } else {
        authToken = auth41.calculateToken(
          password,
          authPluginData1,
          authPluginData2
        );
      }
      return authToken;
    };
  };


/***/ },

/***/ 7284
(module, __unused_webpack_exports, __webpack_require__) {



const PLUGIN_NAME = 'sha256_password';
const crypto = __webpack_require__(6982);
const { xorRotating } = __webpack_require__(3247);
const Tls = __webpack_require__(4756);

const REQUEST_SERVER_KEY_PACKET = Buffer.from([1]);

const STATE_INITIAL = 0;
const STATE_WAIT_SERVER_KEY = 1;
const STATE_FINAL = -1;

function encrypt(password, scramble, key) {
  const stage1 = xorRotating(Buffer.from(\`\${password}\\0\`, 'utf8'), scramble);
  return crypto.publicEncrypt(
    {
      key,
      oaepHash: 'sha1',
    },
    stage1
  );
}

module.exports =
  (pluginOptions = {}) =>
  ({ connection }) => {
    let state = 0;
    let scramble = null;

    const password = connection.config.password;

    const authWithKey = (serverKey) => {
      const _password = encrypt(password, scramble, serverKey);
      state = STATE_FINAL;
      return _password;
    };

    return (data) => {
      switch (state) {
        case STATE_INITIAL:
          if (
            connection.stream instanceof Tls.TLSSocket &&
            connection.stream.encrypted === true
          ) {
            // We don't need to encrypt passwords over TLS connection
            return Buffer.from(\`\${password}\\0\`, 'utf8');
          }

          scramble = data.slice(0, 20);
          // if client provides key we can save one extra roundrip on first connection
          if (pluginOptions.serverPublicKey) {
            return authWithKey(pluginOptions.serverPublicKey);
          }

          state = STATE_WAIT_SERVER_KEY;
          return REQUEST_SERVER_KEY_PACKET;

        case STATE_WAIT_SERVER_KEY:
          if (pluginOptions.onServerPublicKey) {
            pluginOptions.onServerPublicKey(data);
          }
          return authWithKey(data);
        case STATE_FINAL:
          throw new Error(
            \`Unexpected data in AuthMoreData packet received by \${PLUGIN_NAME} plugin in STATE_FINAL state.\`
          );
      }

      throw new Error(
        \`Unexpected data in AuthMoreData packet received by \${PLUGIN_NAME} plugin in state \${state}\`
      );
    };
  };


/***/ },

/***/ 2041
(module, __unused_webpack_exports, __webpack_require__) {

// This file was modified by Oracle on June 1, 2021.
// The changes involve new logic to handle an additional ERR Packet sent by
// the MySQL server when the connection is closed unexpectedly.
// Modifications copyright (c) 2021, Oracle and/or its affiliates.

// This file was modified by Oracle on June 17, 2021.
// The changes involve logic to ensure the socket connection is closed when
// there is a fatal error.
// Modifications copyright (c) 2021, Oracle and/or its affiliates.

// This file was modified by Oracle on September 21, 2021.
// The changes involve passing additional authentication factor passwords
// to the ChangeUser Command instance.
// Modifications copyright (c) 2021, Oracle and/or its affiliates.



const Net = __webpack_require__(9278);
const Tls = __webpack_require__(4756);
const Timers = __webpack_require__(3557);
const EventEmitter = (__webpack_require__(4434).EventEmitter);
const Readable = (__webpack_require__(2203).Readable);
const Queue = __webpack_require__(1469);
const SqlString = __webpack_require__(2263);
const { createLRU } = __webpack_require__(7438);
const PacketParser = __webpack_require__(7593);
const Packets = __webpack_require__(3205);
const Commands = __webpack_require__(7454);
const ConnectionConfig = __webpack_require__(2928);
const CharsetToEncoding = __webpack_require__(3160);
const {
  traceCallback,
  tracePromise,
  getServerContext,
  shouldTrace,
  queryChannel,
  executeChannel,
  connectChannel,
} = __webpack_require__(5385);

let _connectionId = 0;

let convertNamedPlaceholders = null;

class BaseConnection extends EventEmitter {
  constructor(opts) {
    super();
    this.config = opts.config;
    // TODO: fill defaults
    // if no params, connect to /var/lib/mysql/mysql.sock ( /tmp/mysql.sock on OSX )
    // if host is given, connect to host:3306
    // TODO: use \`/usr/local/mysql/bin/mysql_config --socket\` output? as default socketPath
    // if there is no host/port and no socketPath parameters?
    if (!opts.config.stream) {
      if (opts.config.socketPath) {
        this.stream = Net.connect(opts.config.socketPath);
      } else {
        this.stream = Net.connect(opts.config.port, opts.config.host);

        // Optionally enable keep-alive on the socket.
        if (this.config.enableKeepAlive) {
          this.stream.on('connect', () => {
            this.stream.setKeepAlive(true, this.config.keepAliveInitialDelay);
          });
        }

        // Enable TCP_NODELAY flag. This is needed so that the network packets
        // are sent immediately to the server
        this.stream.setNoDelay(true);
      }
      // if stream is a function, treat it as "stream agent / factory"
    } else if (typeof opts.config.stream === 'function') {
      this.stream = opts.config.stream(opts);
    } else {
      this.stream = opts.config.stream;
    }

    this._internalId = _connectionId++;
    this._commands = new Queue();
    this._command = null;
    this._paused = false;
    this._paused_packets = new Queue();
    this._statements = createLRU({
      max: this.config.maxPreparedStatements,
      onEviction: function (_, statement) {
        statement.close();
      },
    });
    this.serverCapabilityFlags = 0;
    this._isMariaDB = false;
    this._mariadbExtendedMetadata = false;
    this.authorized = false;
    this.sequenceId = 0;
    this.compressedSequenceId = 0;
    this.threadId = null;
    this._handshakePacket = null;
    this._fatalError = null;
    this._protocolError = null;
    this._outOfOrderPackets = [];
    this.clientEncoding = CharsetToEncoding[this.config.charsetNumber];
    this.stream.on('error', this._handleNetworkError.bind(this));
    // see https://gist.github.com/khoomeister/4985691#use-that-instead-of-bind
    this.packetParser = new PacketParser((p) => {
      this.handlePacket(p);
    });
    this.stream.on('data', (data) => {
      // Server-side connections do not run ClientHandshake.
      if (this.connectTimeout && this.config.isServer) {
        Timers.clearTimeout(this.connectTimeout);
        this.connectTimeout = null;
      }
      this.packetParser.execute(data);
    });
    this.stream.on('end', () => {
      // emit the end event so that the pooled connection can close the connection
      this.emit('end');
    });
    this.stream.on('close', () => {
      // we need to set this flag everywhere where we want connection to close
      if (this._closing) {
        return;
      }
      if (!this._protocolError) {
        // no particular error message before disconnect
        this._protocolError = new Error(
          'Connection lost: The server closed the connection.'
        );
        this._protocolError.fatal = true;
        this._protocolError.code = 'PROTOCOL_CONNECTION_LOST';
      }
      this._notifyError(this._protocolError);
    });
    let handshakeCommand;
    if (!this.config.isServer) {
      handshakeCommand = new Commands.ClientHandshake(this.config.clientFlags);
      handshakeCommand.on('end', () => {
        if (this.connectTimeout) {
          Timers.clearTimeout(this.connectTimeout);
          this.connectTimeout = null;
        }
        // this happens when handshake finishes early either because there was
        // some fatal error or the server sent an error packet instead of
        // an hello packet (for example, 'Too many connections' error)
        if (
          !handshakeCommand.handshake ||
          this._fatalError ||
          this._protocolError
        ) {
          return;
        }
        this._handshakePacket = handshakeCommand.handshake;
        this.threadId = handshakeCommand.handshake.connectionId;
        this.emit('connect', handshakeCommand.handshake);
      });
      handshakeCommand.on('error', (err) => {
        this._closing = true;
        this._notifyError(err);
      });
      this.addCommand(handshakeCommand);

      // Trace the connection handshake
      if (shouldTrace(connectChannel)) {
        const config = this.config;
        tracePromise(
          connectChannel,
          () =>
            new Promise((resolve, reject) => {
              let onConnect, onError;
              onConnect = (param) => {
                this.removeListener('error', onError);
                resolve(param);
              };
              onError = (err) => {
                this.removeListener('connect', onConnect);
                reject(err);
              };
              this.once('connect', onConnect);
              this.once('error', onError);
            }),
          () => {
            const server = getServerContext(config);
            return {
              database: config.database || '',
              serverAddress: server.serverAddress,
              serverPort: server.serverPort,
              user: config.user || '',
            };
          }
        ).catch(() => {
          // errors are already handled by the handshake error listener
        });
      }
    }
    // in case there was no initial handshake but we need to read string, assume it utf-8
    // most common example: "Too many connections" error ( packet is sent immediately on connection attempt, we don't know server encoding yet)
    // will be overwritten with actual encoding value as soon as server handshake packet is received
    this.serverEncoding = 'utf8';
    if (this.config.connectTimeout) {
      const timeoutHandler = this._handleTimeoutError.bind(this);
      this.connectTimeout = Timers.setTimeout(
        timeoutHandler,
        this.config.connectTimeout
      );
    }
  }

  _addCommandClosedState(cmd) {
    const err = new Error(
      "Can't add new command when connection is in closed state"
    );
    err.fatal = true;
    if (cmd.onResult) {
      cmd.onResult(err);
    } else {
      this.emit('error', err);
    }
  }

  _handleFatalError(err) {
    err.fatal = true;
    // stop receiving packets
    this.stream.removeAllListeners('data');
    this.addCommand = this._addCommandClosedState;
    this.write = () => {
      this.emit('error', new Error("Can't write in closed state"));
    };
    this._notifyError(err);
    this._fatalError = err;
  }

  _handleNetworkError(err) {
    if (this.connectTimeout) {
      Timers.clearTimeout(this.connectTimeout);
      this.connectTimeout = null;
    }
    // Do not throw an error when a connection ends with a RST,ACK packet
    if (err.code === 'ECONNRESET' && this._closing) {
      return;
    }
    this._handleFatalError(err);
  }

  _handleTimeoutError() {
    if (this.connectTimeout) {
      Timers.clearTimeout(this.connectTimeout);
      this.connectTimeout = null;
    }
    this.stream.destroy && this.stream.destroy();
    const err = new Error('connect ETIMEDOUT');
    err.errorno = 'ETIMEDOUT';
    err.code = 'ETIMEDOUT';
    err.syscall = 'connect';
    this._handleNetworkError(err);
  }

  // notify all commands in the queue and bubble error as connection "error"
  // called on stream error or unexpected termination
  _notifyError(err) {
    if (this.connectTimeout) {
      Timers.clearTimeout(this.connectTimeout);
      this.connectTimeout = null;
    }
    // prevent from emitting 'PROTOCOL_CONNECTION_LOST' after EPIPE or ECONNRESET
    if (this._fatalError) {
      return;
    }
    let command;
    // if there is no active command, notify connection
    // if there are commands and all of them have callbacks, pass error via callback
    let bubbleErrorToConnection = !this._command;
    if (this._command && this._command.onResult) {
      this._command.onResult(err);
      this._command = null;
      // connection handshake is special because we allow it to be implicit
      // if error happened during handshake, but there are others commands in queue
      // then bubble error to other commands and not to connection
    } else if (!(
      this._command &&
      this._command.constructor === Commands.ClientHandshake &&
      this._commands.length > 0
    )) {
      bubbleErrorToConnection = true;
    }
    while ((command = this._commands.shift())) {
      if (command.onResult) {
        command.onResult(err);
      } else {
        bubbleErrorToConnection = true;
      }
    }
    // notify connection if some commands in the queue did not have callbacks
    // or if this is pool connection ( so it can be removed from pool )
    if (bubbleErrorToConnection || this._pool) {
      this.emit('error', err);
    }
    // close connection after emitting the event in case of a fatal error
    if (err.fatal) {
      this.close();
    }
  }

  write(buffer) {
    const result = this.stream.write(buffer, (err) => {
      if (err) {
        this._handleNetworkError(err);
      }
    });

    if (!result) {
      this.stream.emit('pause');
    }
  }

  // http://dev.mysql.com/doc/internals/en/sequence-id.html
  //
  // The sequence-id is incremented with each packet and may wrap around.
  // It starts at 0 and is reset to 0 when a new command
  // begins in the Command Phase.
  // http://dev.mysql.com/doc/internals/en/example-several-mysql-packets.html
  _resetSequenceId() {
    this.sequenceId = 0;
    this.compressedSequenceId = 0;
  }

  _bumpCompressedSequenceId(numPackets) {
    this.compressedSequenceId += numPackets;
    this.compressedSequenceId %= 256;
  }

  _bumpSequenceId(numPackets) {
    this.sequenceId += numPackets;
    this.sequenceId %= 256;
  }

  writePacket(packet) {
    const MAX_PACKET_LENGTH = 16777215;
    const length = packet.length();
    let chunk, offset, header;
    if (length < MAX_PACKET_LENGTH) {
      packet.writeHeader(this.sequenceId);
      if (this.config.debug) {
        console.log(
          \`\${this._internalId} \${this.connectionId} <== \${this._command._commandName}#\${this._command.stateName()}(\${[this.sequenceId, packet._name, packet.length()].join(',')})\`
        );
        console.log(
          \`\${this._internalId} \${this.connectionId} <== \${packet.buffer.toString('hex')}\`
        );
      }
      this._bumpSequenceId(1);
      this.write(packet.buffer);
    } else {
      if (this.config.debug) {
        console.log(
          \`\${this._internalId} \${this.connectionId} <== Writing large packet, raw content not written:\`
        );
        console.log(
          \`\${this._internalId} \${this.connectionId} <== \${this._command._commandName}#\${this._command.stateName()}(\${[this.sequenceId, packet._name, packet.length()].join(',')})\`
        );
      }
      for (offset = 4; offset < 4 + length; offset += MAX_PACKET_LENGTH) {
        chunk = packet.buffer.slice(offset, offset + MAX_PACKET_LENGTH);
        if (chunk.length === MAX_PACKET_LENGTH) {
          header = Buffer.from([0xff, 0xff, 0xff, this.sequenceId]);
        } else {
          header = Buffer.from([
            chunk.length & 0xff,
            (chunk.length >> 8) & 0xff,
            (chunk.length >> 16) & 0xff,
            this.sequenceId,
          ]);
        }
        this._bumpSequenceId(1);
        this.write(header);
        this.write(chunk);
      }
    }
  }

  // 0.11+ environment
  startTLS(onSecure) {
    if (this.config.debug) {
      console.log('Upgrading connection to TLS');
    }
    const secureContext = Tls.createSecureContext({
      ca: this.config.ssl.ca,
      cert: this.config.ssl.cert,
      ciphers: this.config.ssl.ciphers,
      key: this.config.ssl.key,
      passphrase: this.config.ssl.passphrase,
      minVersion: this.config.ssl.minVersion,
      maxVersion: this.config.ssl.maxVersion,
    });
    const rejectUnauthorized = this.config.ssl.rejectUnauthorized;
    const verifyIdentity = this.config.ssl.verifyIdentity;
    const servername = Net.isIP(this.config.host)
      ? undefined
      : this.config.host;

    let secureEstablished = false;
    this.stream.removeAllListeners('data');
    const secureSocket = Tls.connect(
      {
        rejectUnauthorized,
        requestCert: rejectUnauthorized,
        checkServerIdentity: verifyIdentity
          ? Tls.checkServerIdentity
          : function () {
              return undefined;
            },
        secureContext,
        isServer: false,
        socket: this.stream,
        servername,
      },
      () => {
        secureEstablished = true;
        if (rejectUnauthorized) {
          if (typeof servername === 'string' && verifyIdentity) {
            const cert = secureSocket.getPeerCertificate(true);
            const serverIdentityCheckError = Tls.checkServerIdentity(
              servername,
              cert
            );
            if (serverIdentityCheckError) {
              onSecure(serverIdentityCheckError);
              return;
            }
          }
        }
        onSecure();
      }
    );
    // error handler for secure socket
    secureSocket.on('error', (err) => {
      if (secureEstablished) {
        this._handleNetworkError(err);
      } else {
        onSecure(err);
      }
    });
    secureSocket.on('data', (data) => {
      this.packetParser.execute(data);
    });
    this.stream = secureSocket;
  }

  protocolError(message, code) {
    // Starting with MySQL 8.0.24, if the client closes the connection
    // unexpectedly, the server will send a last ERR Packet, which we can
    // safely ignore.
    // https://dev.mysql.com/worklog/task/?id=12999
    if (this._closing) {
      return;
    }

    const err = new Error(message);
    err.fatal = true;
    err.code = code || 'PROTOCOL_ERROR';
    this.emit('error', err);
  }

  get state() {
    // Error state has highest priority
    if (this._fatalError || this._protocolError) {
      return 'error';
    }

    // Closing state has second priority
    if (this._closing || (this.stream && this.stream.destroyed)) {
      return 'disconnected';
    }

    // Authenticated state has third priority
    if (this.authorized) {
      return 'authenticated';
    }

    // Connected state: handshake completed but not yet authorized
    // This matches the original mysql driver's 'connected' state
    if (this._handshakePacket) {
      return 'connected';
    }

    // Protocol handshake state: connection established, handshake in progress
    if (this.stream && !this.stream.destroyed) {
      return 'protocol_handshake';
    }

    // Default: not connected
    return 'disconnected';
  }

  get fatalError() {
    return this._fatalError;
  }

  handlePacket(packet) {
    if (this._paused) {
      // the parser reuses its packet instance; keep a stable copy when
      // queueing for later
      this._paused_packets.push(packet ? packet.clone() : packet);
      return;
    }
    if (this.config.debug) {
      if (packet) {
        console.log(
          \` raw: \${packet.buffer
            .slice(packet.offset, packet.offset + packet.length())
            .toString('hex')}\`
        );
        console.trace();
        const commandName = this._command
          ? this._command._commandName
          : '(no command)';
        const stateName = this._command
          ? this._command.stateName()
          : '(no command)';
        console.log(
          \`\${this._internalId} \${this.connectionId} ==> \${commandName}#\${stateName}(\${[packet.sequenceId, packet.type(), packet.length()].join(',')})\`
        );
      }
    }
    if (!this._command) {
      const marker = packet.peekByte();
      // If it's an Err Packet, we should use it.
      if (marker === 0xff) {
        const error = Packets.Error.fromPacket(packet);
        this.protocolError(error.message, error.code);
      } else {
        // Otherwise, it means it's some other unexpected packet.
        this.protocolError(
          'Unexpected packet while no commands in the queue',
          'PROTOCOL_UNEXPECTED_PACKET'
        );
      }
      this.close();
      return;
    }
    if (packet) {
      // Note: when server closes connection due to inactivity, Err packet ER_CLIENT_INTERACTION_TIMEOUT from MySQL 8.0.24, sequenceId will be 0
      if (this.sequenceId !== packet.sequenceId) {
        const err = new Error(
          \`Warning: got packets out of order. Expected \${this.sequenceId} but received \${packet.sequenceId}\`
        );
        err.expected = this.sequenceId;
        err.received = packet.sequenceId;
        this.emit('warn', err); // REVIEW
        console.error(err.message);
      }
      this._bumpSequenceId(packet.numPackets);
    }
    try {
      if (this._fatalError) {
        // skip remaining packets after client is in the error state
        return;
      }
      const done = this._command.execute(packet, this);
      if (done) {
        this._command = this._commands.shift();
        if (this._command) {
          this.sequenceId = 0;
          this.compressedSequenceId = 0;
          this.handlePacket();
        }
      }
    } catch (err) {
      this._handleFatalError(err);
      this.stream.destroy();
    }
  }

  addCommand(cmd) {
    // this.compressedSequenceId = 0;
    // this.sequenceId = 0;
    if (this.config.debug) {
      const commandName = cmd.constructor.name;
      console.log(\`Add command: \${commandName}\`);
      cmd._commandName = commandName;
    }
    if (!this._command) {
      this._command = cmd;
      this.handlePacket();
    } else {
      this._commands.push(cmd);
    }
    return cmd;
  }

  format(sql, values, namedPlaceholders) {
    if (typeof this.config.queryFormat === 'function') {
      return this.config.queryFormat.call(
        this,
        sql,
        values,
        this.config.timezone
      );
    }
    const opts = {
      sql: sql,
      values: values,
    };
    if (typeof namedPlaceholders !== 'undefined') {
      opts.namedPlaceholders = namedPlaceholders;
    }
    this._resolveNamedPlaceholders(opts);
    return SqlString.format(
      opts.sql,
      opts.values,
      this.config.stringifyObjects,
      this.config.timezone
    );
  }

  escape(value) {
    return SqlString.escape(value, false, this.config.timezone);
  }

  escapeId(value) {
    return SqlString.escapeId(value, false);
  }

  raw(sql) {
    return SqlString.raw(sql);
  }

  _resolveNamedPlaceholders(options) {
    let unnamed;
    if (typeof options.namedPlaceholders === 'undefined') {
      options.namedPlaceholders = this.config.namedPlaceholders;
    }
    if (options.namedPlaceholders) {
      if (Array.isArray(options.values)) {
        // if an array is provided as the values, assume the conversion is not necessary.
        // this allows the usage of unnamed placeholders even if the namedPlaceholders flag is enabled.
        return;
      }
      if (convertNamedPlaceholders === null) {
        convertNamedPlaceholders = __webpack_require__(2161)();
      }
      unnamed = convertNamedPlaceholders(options.sql, options.values);
      options.sql = unnamed[0];
      options.values = unnamed[1];
    }
  }

  query(sql, values, cb) {
    let cmdQuery;
    if (sql.constructor === Commands.Query) {
      cmdQuery = sql;
    } else {
      cmdQuery = BaseConnection.createQuery(sql, values, cb, this.config);
    }
    this._resolveNamedPlaceholders(cmdQuery);
    const rawSql = this.format(
      cmdQuery.sql,
      cmdQuery.values !== undefined ? cmdQuery.values : [],
      cmdQuery.namedPlaceholders
    );
    cmdQuery.sql = rawSql;

    if (cmdQuery.onResult) {
      // Callback mode: traceCallback wraps the callback with tracing lifecycle, or calls through directly when no subscribers are registered
      traceCallback(
        queryChannel,
        (wrappedCb) => {
          cmdQuery.onResult = wrappedCb;
          this.addCommand(cmdQuery);
        },
        0,
        () => {
          const server = getServerContext(this.config);
          return {
            query: cmdQuery.sql,
            values: cmdQuery.values,
            database: this.config.database || '',
            serverAddress: server.serverAddress,
            serverPort: server.serverPort,
          };
        },
        null,
        cmdQuery.onResult
      );
    } else if (shouldTrace(queryChannel)) {
      // Event-emitter mode: tracePromise wraps the async lifecycle
      tracePromise(
        queryChannel,
        () =>
          new Promise((resolve, reject) => {
            cmdQuery.once('error', reject);
            cmdQuery.once('end', () => resolve());
            this.addCommand(cmdQuery);
          }),
        () => {
          const server = getServerContext(this.config);
          return {
            query: cmdQuery.sql,
            values: cmdQuery.values,
            database: this.config.database || '',
            serverAddress: server.serverAddress,
            serverPort: server.serverPort,
          };
        }
      ).catch(() => {
        // errors are already emitted on the command
      });
    } else {
      this.addCommand(cmdQuery);
    }

    return cmdQuery;
  }

  pause() {
    this._paused = true;
    this.stream.pause();
  }

  resume() {
    let packet;
    this._paused = false;
    while ((packet = this._paused_packets.shift())) {
      this.handlePacket(packet);
      // don't resume if packet handler paused connection
      if (this._paused) {
        return;
      }
    }
    this.stream.resume();
  }

  // TODO: named placeholders support
  prepare(options, cb) {
    if (typeof options === 'string') {
      options = { sql: options };
    }
    return this.addCommand(new Commands.Prepare(options, cb));
  }

  unprepare(sql) {
    let options = {};
    if (typeof sql === 'object') {
      options = sql;
    } else {
      options.sql = sql;
    }
    const key = BaseConnection.statementKey(options);
    const stmt = this._statements.get(key);
    if (stmt) {
      this._statements.delete(key);
      stmt.close();
    }
    return stmt;
  }

  execute(sql, values, cb) {
    let options = {
      infileStreamFactory: this.config.infileStreamFactory,
    };
    if (typeof sql === 'object') {
      // execute(options, cb)
      options = {
        ...options,
        ...sql,
        sql: sql.sql,
        values: sql.values,
      };
      if (typeof values === 'function') {
        cb = values;
      } else {
        options.values = options.values || values;
      }
    } else if (typeof values === 'function') {
      // execute(sql, cb)
      cb = values;
      options.sql = sql;
      options.values = undefined;
    } else {
      // execute(sql, values, cb)
      options.sql = sql;
      options.values = values;
    }
    this._resolveNamedPlaceholders(options);
    // check for values containing undefined
    if (options.values) {
      //If namedPlaceholder is not enabled and object is passed as bind parameters
      if (!Array.isArray(options.values)) {
        throw new TypeError(
          'Bind parameters must be array if namedPlaceholders parameter is not enabled'
        );
      }
      options.values.forEach((val) => {
        //If namedPlaceholder is not enabled and object is passed as bind parameters
        if (!Array.isArray(options.values)) {
          throw new TypeError(
            'Bind parameters must be array if namedPlaceholders parameter is not enabled'
          );
        }
        if (val === undefined) {
          throw new TypeError(
            'Bind parameters must not contain undefined. To pass SQL NULL specify JS null'
          );
        }
        if (typeof val === 'function') {
          throw new TypeError(
            'Bind parameters must not contain function(s). To pass the body of a function as a string call .toString() first'
          );
        }
      });
    }
    const executeCommand = new Commands.Execute(options, cb);

    const prepareAndExecute = (errorCb) => {
      const prepareCommand = new Commands.Prepare(options, (err, stmt) => {
        if (err) {
          // skip execute command if prepare failed
          executeCommand.start = function () {
            return null;
          };
          errorCb(err);
          executeCommand.emit('end');
          return;
        }
        executeCommand.statement = stmt;
      });
      this.addCommand(prepareCommand);
      this.addCommand(executeCommand);
    };

    if (executeCommand.onResult) {
      // Callback mode: traceCallback wraps the callback with tracing lifecycle, or calls through directly when no subscribers are registered
      const origExecCb = executeCommand.onResult;
      traceCallback(
        executeChannel,
        (wrappedCb) => {
          executeCommand.onResult = wrappedCb;
          prepareAndExecute(wrappedCb);
        },
        0,
        () => {
          const server = getServerContext(this.config);
          return {
            query: options.sql,
            values: options.values,
            database: this.config.database || '',
            serverAddress: server.serverAddress,
            serverPort: server.serverPort,
          };
        },
        null,
        origExecCb
      );
    } else if (shouldTrace(executeChannel)) {
      // Event-emitter mode: tracePromise wraps the async lifecycle
      tracePromise(
        executeChannel,
        () =>
          new Promise((resolve, reject) => {
            prepareAndExecute((err) => {
              executeCommand.emit('error', err);
            });
            executeCommand.once('error', reject);
            executeCommand.once('end', () => resolve());
          }),
        () => {
          const server = getServerContext(this.config);
          return {
            query: options.sql,
            values: options.values,
            database: this.config.database || '',
            serverAddress: server.serverAddress,
            serverPort: server.serverPort,
          };
        }
      ).catch(() => {
        // errors are already emitted on the command
      });
    } else {
      prepareAndExecute((err) => {
        executeCommand.emit('error', err);
      });
    }

    return executeCommand;
  }

  changeUser(options, callback) {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = {};
    }
    const charsetNumber = options.charset
      ? ConnectionConfig.getCharsetNumber(options.charset)
      : this.config.charsetNumber;
    return this.addCommand(
      new Commands.ChangeUser(
        {
          user: options.user || this.config.user,
          // for the purpose of multi-factor authentication, or not, the main
          // password (used for the 1st authentication factor) can also be
          // provided via the "password1" option
          password:
            options.password ||
            options.password1 ||
            this.config.password ||
            this.config.password1,
          password2: options.password2 || this.config.password2,
          password3: options.password3 || this.config.password3,
          passwordSha1: options.passwordSha1 || this.config.passwordSha1,
          database: options.database || this.config.database,
          timeout: options.timeout,
          charsetNumber: charsetNumber,
          currentConfig: this.config,
        },
        (err) => {
          if (err) {
            err.fatal = true;
          }
          if (callback) {
            callback(err);
          }
        }
      )
    );
  }

  // transaction helpers
  beginTransaction(cb) {
    return this.query('START TRANSACTION', cb);
  }

  commit(cb) {
    return this.query('COMMIT', cb);
  }

  rollback(cb) {
    return this.query('ROLLBACK', cb);
  }

  ping(cb) {
    return this.addCommand(new Commands.Ping(cb));
  }

  reset(cb) {
    return this.addCommand(new Commands.ResetConnection(cb));
  }

  _registerSlave(opts, cb) {
    return this.addCommand(new Commands.RegisterSlave(opts, cb));
  }

  _binlogDump(opts, cb) {
    return this.addCommand(new Commands.BinlogDump(opts, cb));
  }

  // currently just alias to close
  destroy() {
    this.close();
  }

  close() {
    if (this.connectTimeout) {
      Timers.clearTimeout(this.connectTimeout);
      this.connectTimeout = null;
    }
    this._closing = true;
    this.stream.end();
    this.addCommand = this._addCommandClosedState;
  }

  createBinlogStream(opts) {
    // TODO: create proper stream class
    // TODO: use through2
    let test = 1;
    const stream = new Readable({ objectMode: true });
    stream._read = function () {
      return {
        data: test++,
      };
    };
    this._registerSlave(opts, () => {
      const dumpCmd = this._binlogDump(opts);
      dumpCmd.on('event', (ev) => {
        stream.push(ev);
      });
      dumpCmd.on('eof', () => {
        stream.push(null);
        // if non-blocking, then close stream to prevent errors
        if (opts.flags && opts.flags & 0x01) {
          this.close();
        }
      });
      // TODO: pipe errors as well
    });
    return stream;
  }

  connect(cb) {
    if (!cb) {
      return;
    }

    if (this._fatalError || this._protocolError) {
      return cb(this._fatalError || this._protocolError);
    }

    if (this._handshakePacket) {
      return cb(null, this);
    }

    let onError, onConnect;

    onError = (param) => {
      this.removeListener('connect', onConnect);
      cb(param);
    };

    onConnect = (param) => {
      this.removeListener('error', onError);
      cb(null, param);
    };

    this.once('error', onError);
    this.once('connect', onConnect);
  }

  // ===================================
  // outgoing server connection methods
  // ===================================
  writeColumns(columns) {
    this.writePacket(Packets.ResultSetHeader.toPacket(columns.length));
    columns.forEach((column) => {
      this.writePacket(
        Packets.ColumnDefinition.toPacket(column, this.serverConfig.encoding)
      );
    });
    this.writeEof();
  }

  // row is array of columns, not hash
  writeTextRow(column) {
    this.writePacket(
      Packets.TextRow.toPacket(column, this.serverConfig.encoding)
    );
  }

  writeBinaryRow(column) {
    this.writePacket(
      Packets.BinaryRow.toPacket(column, this.serverConfig.encoding)
    );
  }

  writeTextResult(rows, columns, binary = false) {
    this.writeColumns(columns);
    rows.forEach((row) => {
      const arrayRow = new Array(columns.length);
      columns.forEach((column) => {
        arrayRow.push(row[column.name]);
      });
      if (binary) {
        this.writeBinaryRow(arrayRow);
      } else this.writeTextRow(arrayRow);
    });
    this.writeEof();
  }

  writeEof(warnings, statusFlags) {
    this.writePacket(Packets.EOF.toPacket(warnings, statusFlags));
  }

  writeOk(args) {
    if (!args) {
      args = { affectedRows: 0 };
    }
    this.writePacket(Packets.OK.toPacket(args, this.serverConfig.encoding));
  }

  writeError(args) {
    // if we want to send error before initial hello was sent, use default encoding
    const encoding = this.serverConfig ? this.serverConfig.encoding : 'cesu8';
    this.writePacket(Packets.Error.toPacket(args, encoding));
  }

  serverHandshake(args) {
    this.serverConfig = args;
    this.serverConfig.encoding =
      CharsetToEncoding[this.serverConfig.characterSet];
    return this.addCommand(new Commands.ServerHandshake(args));
  }

  [Symbol.dispose]() {
    if (!this._closing) {
      this.end();
    }
  }

  // ===============================================================
  end(callback) {
    if (this.config.isServer) {
      this._closing = true;
      const quitCmd = new EventEmitter();
      setImmediate(() => {
        this.stream.end();
        quitCmd.emit('end');
      });
      return quitCmd;
    }
    // trigger error if more commands enqueued after end command
    const quitCmd = this.addCommand(new Commands.Quit(callback));
    this.addCommand = this._addCommandClosedState;
    return quitCmd;
  }

  static createQuery(sql, values, cb, config) {
    let options = {
      rowsAsArray: config.rowsAsArray,
      infileStreamFactory: config.infileStreamFactory,
    };
    if (typeof sql === 'object') {
      // query(options, cb)
      options = {
        ...options,
        ...sql,
        sql: sql.sql,
        values: sql.values,
      };
      if (typeof values === 'function') {
        cb = values;
      } else if (values !== undefined) {
        options.values = values;
      }
    } else if (typeof values === 'function') {
      // query(sql, cb)
      cb = values;
      options.sql = sql;
      options.values = undefined;
    } else {
      // query(sql, values, cb)
      options.sql = sql;
      options.values = values;
    }
    return new Commands.Query(options, cb);
  }

  static statementKey(options) {
    return \`\${typeof options.nestTables}/\${options.nestTables}/\${options.rowsAsArray}\${options.sql}\`;
  }
}

module.exports = BaseConnection;


/***/ },

/***/ 8599
(module, __unused_webpack_exports, __webpack_require__) {



const process = __webpack_require__(932);
const SqlString = __webpack_require__(2263);
const EventEmitter = (__webpack_require__(4434).EventEmitter);
const PoolConnection = __webpack_require__(8148);
const Queue = __webpack_require__(1469);
const BaseConnection = __webpack_require__(2041);
const Errors = __webpack_require__(5014);
const {
  traceCallback,
  getServerContext,
  poolConnectChannel,
} = __webpack_require__(5385);

// Source: https://github.com/go-sql-driver/mysql/blob/76c00e35a8d48f8f70f0e7dffe584692bd3fa612/packets.go#L598-L613
function isReadOnlyError(err) {
  if (!err || !err.errno) {
    return false;
  }
  // 1792: ER_CANT_EXECUTE_IN_READ_ONLY_TRANSACTION
  // 1290: ER_OPTION_PREVENTS_STATEMENT (returned by Aurora during failover)
  // 1836: ER_READ_ONLY_MODE
  return (
    err.errno === Errors.ER_OPTION_PREVENTS_STATEMENT ||
    err.errno === Errors.ER_CANT_EXECUTE_IN_READ_ONLY_TRANSACTION ||
    err.errno === Errors.ER_READ_ONLY_MODE
  );
}

function spliceConnection(queue, connection) {
  const len = queue.length;
  for (let i = 0; i < len; i++) {
    if (queue.get(i) === connection) {
      queue.removeOne(i);
      break;
    }
  }
}

class BasePool extends EventEmitter {
  constructor(options) {
    super();
    this.config = options.config;
    this.config.connectionConfig.pool = this;
    this._allConnections = new Queue();
    this._freeConnections = new Queue();
    this._connectionQueue = new Queue();
    this._closed = false;
    if (this.config.maxIdle < this.config.connectionLimit) {
      // create idle connection timeout automatically release job
      this._removeIdleTimeoutConnections();
    }
  }

  /**
   * Creates a per-connection copy of the pool connection config.
   *
   * Commands like \`changeUser\` mutate \`connection.config\` in place. Sharing a
   * single config object between every pooled connection made those mutations
   * leak into connections created later. The prototype is preserved so the
   * copy is still a \`ConnectionConfig\`.
   */
  _createConnectionConfig() {
    const { connectionConfig } = this.config;

    return Object.create(
      Object.getPrototypeOf(connectionConfig),
      Object.getOwnPropertyDescriptors(connectionConfig)
    );
  }

  getConnection(cb) {
    const _getConnection = (cb) => {
      if (this._closed) {
        return process.nextTick(() => cb(new Error('Pool is closed.')));
      }
      let connection;
      if (this._freeConnections.length > 0) {
        connection = this._freeConnections.pop();
        this.emit('acquire', connection);
        return process.nextTick(() => {
          connection._released = false;
          cb(null, connection);
        });
      }
      if (
        this.config.connectionLimit === 0 ||
        this._allConnections.length < this.config.connectionLimit
      ) {
        connection = new PoolConnection(this, {
          config: this._createConnectionConfig(),
        });
        this._allConnections.push(connection);
        return connection.connect((err) => {
          if (this._closed) {
            return cb(new Error('Pool is closed.'));
          }
          if (err) {
            return cb(err);
          }
          this.emit('connection', connection);
          this.emit('acquire', connection);
          return cb(null, connection);
        });
      }
      if (!this.config.waitForConnections) {
        return process.nextTick(() =>
          cb(new Error('No connections available.'))
        );
      }
      if (
        this.config.queueLimit &&
        this._connectionQueue.length >= this.config.queueLimit
      ) {
        return cb(new Error('Queue limit reached.'));
      }
      this.emit('enqueue');
      return this._connectionQueue.push(cb);
    };
    const config = this.config.connectionConfig;
    traceCallback(
      poolConnectChannel,
      _getConnection,
      0,
      () => {
        const server = getServerContext(config);
        return {
          database: config.database || '',
          serverAddress: server.serverAddress,
          serverPort: server.serverPort,
        };
      },
      null,
      cb
    );
  }

  releaseConnection(connection) {
    let cb;
    if (!connection._pool) {
      // The connection has been removed from the pool and is no longer good.
      if (this._connectionQueue.length) {
        cb = this._connectionQueue.shift();
        process.nextTick(this.getConnection.bind(this, cb));
      }
      return;
    }

    // Reset connection state if configured
    if (this.config.resetOnRelease && connection.reset) {
      connection.reset((err) => {
        if (err) {
          // If reset fails, remove connection from pool
          connection._pool = null;
          spliceConnection(this._allConnections, connection);
          connection.destroy();

          // Try to create a new connection for waiting callbacks
          if (this._connectionQueue.length) {
            cb = this._connectionQueue.shift();
            process.nextTick(this.getConnection.bind(this, cb));
          }
          return;
        }

        // Reset successful, continue with normal release flow
        this._handleSuccessfulRelease(connection);
      });
    } else {
      this._handleSuccessfulRelease(connection);
    }
  }

  _handleSuccessfulRelease(connection) {
    let cb;
    if (this._connectionQueue.length) {
      cb = this._connectionQueue.shift();
      process.nextTick(() => {
        connection._released = false;
        cb(null, connection);
      });
    } else {
      this._freeConnections.push(connection);
      this.emit('release', connection);
    }
  }

  [Symbol.dispose]() {
    if (!this._closed) {
      this.end();
    }
  }

  end(cb) {
    this._closed = true;
    clearTimeout(this._removeIdleTimeoutConnectionsTimer);
    if (typeof cb !== 'function') {
      cb = function (err) {
        if (err) {
          throw err;
        }
      };
    }
    while (this._connectionQueue.length > 0) {
      const queuedCallback = this._connectionQueue.shift();
      process.nextTick(() => queuedCallback(new Error('Pool is closed.')));
    }
    let calledBack = false;
    let closedConnections = 0;
    let connection;
    const endCB = function (err) {
      if (calledBack) {
        return;
      }
      if (err || ++closedConnections >= this._allConnections.length) {
        calledBack = true;
        cb(err);
        return;
      }
    }.bind(this);
    if (this._allConnections.length === 0) {
      endCB();
      return;
    }
    for (let i = 0; i < this._allConnections.length; i++) {
      connection = this._allConnections.get(i);
      connection._realEnd(endCB);
    }
  }

  query(sql, values, cb) {
    const cmdQuery = BaseConnection.createQuery(
      sql,
      values,
      cb,
      this.config.connectionConfig
    );
    if (typeof cmdQuery.namedPlaceholders === 'undefined') {
      cmdQuery.namedPlaceholders =
        this.config.connectionConfig.namedPlaceholders;
    }
    this.getConnection((err, conn) => {
      if (err) {
        if (typeof cmdQuery.onResult === 'function') {
          cmdQuery.onResult(err);
        } else {
          cmdQuery.emit('error', err);
        }
        return;
      }
      try {
        let queryError = null;
        const origOnResult = cmdQuery.onResult;
        if (origOnResult) {
          cmdQuery.onResult = function (err, rows, fields) {
            queryError = err || null;
            origOnResult(err, rows, fields);
          };
        } else {
          cmdQuery.once('error', (err) => {
            queryError = err;
          });
        }
        conn.query(cmdQuery).once('end', () => {
          if (isReadOnlyError(queryError)) {
            conn.destroy();
          } else {
            conn.release();
          }
        });
      } catch (e) {
        conn.release();
        if (typeof cmdQuery.onResult === 'function') {
          cmdQuery.onResult(e);
        } else {
          cmdQuery.emit('error', e);
        }
      }
    });
    return cmdQuery;
  }

  execute(sql, values, cb) {
    // TODO construct execute command first here and pass it to connection.execute
    // so that polymorphic arguments logic is there in one place
    if (typeof values === 'function') {
      cb = values;
      values = [];
    }
    this.getConnection((err, conn) => {
      if (err) {
        return cb(err);
      }
      try {
        conn
          .execute(sql, values, (err, rows, fields) => {
            if (isReadOnlyError(err)) {
              conn.destroy();
            }
            cb(err, rows, fields);
          })
          .once('end', () => {
            conn.release();
          });
      } catch (e) {
        conn.release();
        return cb(e);
      }
    });
  }

  _removeConnection(connection) {
    // Remove connection from all connections
    spliceConnection(this._allConnections, connection);
    // Remove connection from free connections
    spliceConnection(this._freeConnections, connection);
    this.releaseConnection(connection);
  }

  _removeIdleTimeoutConnections() {
    if (this._removeIdleTimeoutConnectionsTimer) {
      clearTimeout(this._removeIdleTimeoutConnectionsTimer);
    }

    this._removeIdleTimeoutConnectionsTimer = setTimeout(() => {
      try {
        while (
          this._freeConnections.length > this.config.maxIdle ||
          (this._freeConnections.length > 0 &&
            Date.now() - this._freeConnections.get(0).lastActiveTime >
              this.config.idleTimeout)
        ) {
          if (this.config.connectionConfig.gracefulEnd) {
            this._freeConnections.get(0).end();
          } else {
            this._freeConnections.get(0).destroy();
          }
        }
      } finally {
        this._removeIdleTimeoutConnections();
      }
    }, 1000);
  }

  format(sql, values) {
    return SqlString.format(
      sql,
      values,
      this.config.connectionConfig.stringifyObjects,
      this.config.connectionConfig.timezone
    );
  }

  escape(value) {
    return SqlString.escape(
      value,
      this.config.connectionConfig.stringifyObjects,
      this.config.connectionConfig.timezone
    );
  }

  escapeId(value) {
    return SqlString.escapeId(value, false);
  }
}

module.exports = BasePool;


/***/ },

/***/ 1125
(module, __unused_webpack_exports, __webpack_require__) {

// This file was modified by Oracle on July 5, 2021.
// Errors generated by asynchronous authentication plugins are now being
// handled and subsequently emitted at the command level.
// Modifications copyright (c) 2021, Oracle and/or its affiliates.



const Packets = __webpack_require__(3205);
const sha256_password = __webpack_require__(7284);
const caching_sha2_password = __webpack_require__(3339);
const mysql_native_password = __webpack_require__(1749);
const mysql_clear_password = __webpack_require__(669);

// Use Object.create(null) to avoid prototype pollution
// This prevents server-controlled pluginName values like "toString" or "__proto__"
// from resolving to prototype properties
const standardAuthPlugins = Object.assign(Object.create(null), {
  sha256_password: sha256_password({}),
  caching_sha2_password: caching_sha2_password({}),
  mysql_native_password: mysql_native_password({}),
  mysql_clear_password: mysql_clear_password({}),
});

// Helper function to get auth plugin (custom or standard)
function getAuthPlugin(pluginName, connection) {
  const customPlugins = connection.config.authPlugins;

  // Check custom plugins with hasOwnProperty for safety
  if (
    customPlugins &&
    Object.prototype.hasOwnProperty.call(customPlugins, pluginName)
  ) {
    return customPlugins[pluginName];
  }

  // Safe to access standardAuthPlugins directly since it has no prototype
  return standardAuthPlugins[pluginName];
}

function warnLegacyAuthSwitch() {
  console.warn(
    'WARNING! authSwitchHandler api is deprecated, please use new authPlugins api'
  );
}

function authSwitchPluginError(error, command) {
  // Authentication errors are fatal
  error.code = 'AUTH_SWITCH_PLUGIN_ERROR';
  error.fatal = true;

  command.emit('error', error);
}

function authSwitchRequest(packet, connection, command) {
  const { pluginName, pluginData } =
    Packets.AuthSwitchRequest.fromPacket(packet);

  // legacy plugin api don't allow to override mysql_native_password
  // if pluginName is mysql_native_password it's using standard auth4.1 auth
  if (
    connection.config.authSwitchHandler &&
    pluginName !== 'mysql_native_password'
  ) {
    const legacySwitchHandler = connection.config.authSwitchHandler;
    warnLegacyAuthSwitch();
    legacySwitchHandler({ pluginName, pluginData }, (err, data) => {
      if (err) {
        return authSwitchPluginError(err, command);
      }
      connection.writePacket(new Packets.AuthSwitchResponse(data).toPacket());
    });
    return;
  }

  if (pluginName === 'mysql_clear_password') {
    const hasCustomPlugin =
      connection.config.authPlugins &&
      Object.prototype.hasOwnProperty.call(
        connection.config.authPlugins,
        'mysql_clear_password'
      );
    if (!hasCustomPlugin && !connection.config.enableCleartextPlugin) {
      const err = new Error(
        'Server requested authentication using mysql_clear_password, ' +
          'which sends the password in plaintext over the network and is ' +
          'disabled by default. To enable it, set the \`enableCleartextPlugin\` ' +
          'option to \`true\` in your connection configuration, or provide a ' +
          'custom \`mysql_clear_password\` auth plugin via the \`authPlugins\` ' +
          'option. Only use this over a secure connection (TLS/SSL).'
      );
      err.code = 'MYSQL_CLEAR_PASSWORD_NOT_ENABLED';
      err.fatal = true;
      throw err;
    }
  }

  const authPlugin = getAuthPlugin(pluginName, connection);
  if (!authPlugin) {
    throw new Error(
      \`Server requests authentication using unknown plugin \${pluginName}. See \${'TODO: add plugins doco here'} on how to configure or author authentication plugins.\`
    );
  }
  connection._authPlugin = authPlugin({ connection, command });
  Promise.resolve(connection._authPlugin(pluginData))
    .then((data) => {
      if (data) {
        connection.writePacket(new Packets.AuthSwitchResponse(data).toPacket());
      }
    })
    .catch((err) => {
      authSwitchPluginError(err, command);
    });
}

function authSwitchRequestMoreData(packet, connection, command) {
  const { data } = Packets.AuthSwitchRequestMoreData.fromPacket(packet);

  if (connection.config.authSwitchHandler) {
    const legacySwitchHandler = connection.config.authSwitchHandler;
    warnLegacyAuthSwitch();
    legacySwitchHandler({ pluginData: data }, (err, data) => {
      if (err) {
        return authSwitchPluginError(err, command);
      }
      connection.writePacket(new Packets.AuthSwitchResponse(data).toPacket());
    });
    return;
  }

  if (!connection._authPlugin) {
    throw new Error(
      'AuthPluginMoreData received but no auth plugin instance found'
    );
  }
  Promise.resolve(connection._authPlugin(data))
    .then((data) => {
      if (data) {
        connection.writePacket(new Packets.AuthSwitchResponse(data).toPacket());
      }
    })
    .catch((err) => {
      authSwitchPluginError(err, command);
    });
}

module.exports = {
  authSwitchRequest,
  authSwitchRequestMoreData,
  getAuthPlugin,
  ...void (standardAuthPlugins),
};


/***/ },

/***/ 7990
(module, __unused_webpack_exports, __webpack_require__) {



const Command = __webpack_require__(4219);
const Packets = __webpack_require__(3205);

const eventParsers = [];

class BinlogEventHeader {
  constructor(packet) {
    this.timestamp = packet.readInt32();
    this.eventType = packet.readInt8();
    this.serverId = packet.readInt32();
    this.eventSize = packet.readInt32();
    this.logPos = packet.readInt32();
    this.flags = packet.readInt16();
  }
}

class BinlogDump extends Command {
  constructor(opts) {
    super();
    // this.onResult = callback;
    this.opts = opts;
  }

  start(packet, connection) {
    const newPacket = new Packets.BinlogDump(this.opts);
    connection.writePacket(newPacket.toPacket(1));
    return BinlogDump.prototype.binlogData;
  }

  binlogData(packet) {
    // ok - continue consuming events
    // error - error
    // eof - end of binlog
    if (packet.isEOF()) {
      this.emit('eof');
      return null;
    }
    // binlog event header
    packet.readInt8();
    const header = new BinlogEventHeader(packet);
    const EventParser = eventParsers[header.eventType];
    let event;
    if (EventParser) {
      event = new EventParser(packet);
    } else {
      event = {
        name: 'UNKNOWN',
      };
    }
    event.header = header;
    this.emit('event', event);
    return BinlogDump.prototype.binlogData;
  }
}

class RotateEvent {
  constructor(packet) {
    this.pposition = packet.readInt32();
    // TODO: read uint64 here
    packet.readInt32(); // positionDword2
    this.nextBinlog = packet.readString();
    this.name = 'RotateEvent';
  }
}

class FormatDescriptionEvent {
  constructor(packet) {
    this.binlogVersion = packet.readInt16();
    // biome-ignore lint/suspicious/noControlCharactersInRegex: the server version string is NUL-terminated
    this.serverVersion = packet.readString(50).replace(/\\u0000.*/, '');
    this.createTimestamp = packet.readInt32();
    this.eventHeaderLength = packet.readInt8(); // should be 19
    this.eventsLength = packet.readBuffer();
    this.name = 'FormatDescriptionEvent';
  }
}

class QueryEvent {
  constructor(packet) {
    const parseStatusVars = __webpack_require__(894);
    this.slaveProxyId = packet.readInt32();
    this.executionTime = packet.readInt32();
    const schemaLength = packet.readInt8();
    this.errorCode = packet.readInt16();
    const statusVarsLength = packet.readInt16();
    const statusVars = packet.readBuffer(statusVarsLength);
    this.schema = packet.readString(schemaLength);
    packet.readInt8(); // should be zero
    this.statusVars = parseStatusVars(statusVars);
    this.query = packet.readString();
    this.name = 'QueryEvent';
  }
}

class XidEvent {
  constructor(packet) {
    this.binlogVersion = packet.readInt16();
    this.xid = packet.readInt64();
    this.name = 'XidEvent';
  }
}

eventParsers[2] = QueryEvent;
eventParsers[4] = RotateEvent;
eventParsers[15] = FormatDescriptionEvent;
eventParsers[16] = XidEvent;

module.exports = BinlogDump;


/***/ },

/***/ 3564
(module, __unused_webpack_exports, __webpack_require__) {

// This file was modified by Oracle on September 21, 2021.
// The changes involve saving additional authentication factor passwords
// in the command scope and enabling multi-factor authentication in the
// client-side when the server supports it.
// Modifications copyright (c) 2021, Oracle and/or its affiliates.



const Command = __webpack_require__(4219);
const Packets = __webpack_require__(3205);
const ClientConstants = __webpack_require__(3930);
const ClientHandshake = __webpack_require__(3489);
const CharsetToEncoding = __webpack_require__(3160);

class ChangeUser extends Command {
  constructor(options, callback) {
    super();
    this.onResult = callback;
    this.user = options.user;
    this.password = options.password;
    // "password1" is an alias of "password"
    this.password1 = options.password;
    this.password2 = options.password2;
    this.password3 = options.password3;
    this.database = options.database;
    this.passwordSha1 = options.passwordSha1;
    this.charsetNumber = options.charsetNumber;
    this.currentConfig = options.currentConfig;
    this.authenticationFactor = 0;
  }
  start(packet, connection) {
    const newPacket = new Packets.ChangeUser({
      flags: connection.config.clientFlags,
      user: this.user,
      database: this.database,
      charsetNumber: this.charsetNumber,
      password: this.password,
      passwordSha1: this.passwordSha1,
      authPluginData1: connection._handshakePacket.authPluginData1,
      authPluginData2: connection._handshakePacket.authPluginData2,
    });
    this.currentConfig.user = this.user;
    this.currentConfig.password = this.password;
    this.currentConfig.database = this.database;
    this.currentConfig.charsetNumber = this.charsetNumber;
    connection.clientEncoding = CharsetToEncoding[this.charsetNumber];
    // clear prepared statements cache as all statements become invalid after changeUser
    connection._statements.clear();
    connection.writePacket(newPacket.toPacket());
    // check if the server supports multi-factor authentication
    const multiFactorAuthentication =
      connection.serverCapabilityFlags &
      ClientConstants.MULTI_FACTOR_AUTHENTICATION;
    if (multiFactorAuthentication) {
      // if the server supports multi-factor authentication, we enable it in
      // the client
      this.authenticationFactor = 1;
    }
    return ChangeUser.prototype.handshakeResult;
  }
}

ChangeUser.prototype.handshakeResult =
  ClientHandshake.prototype.handshakeResult;
ChangeUser.prototype.calculateNativePasswordAuthToken =
  ClientHandshake.prototype.calculateNativePasswordAuthToken;

module.exports = ChangeUser;


/***/ },

/***/ 3489
(module, __unused_webpack_exports, __webpack_require__) {

// This file was modified by Oracle on June 17, 2021.
// Handshake errors are now marked as fatal and the corresponding events are
// emitted in the command instance itself.
// Modifications copyright (c) 2021, Oracle and/or its affiliates.

// This file was modified by Oracle on September 21, 2021.
// Handshake workflow now supports additional authentication factors requested
// by the server.
// Modifications copyright (c) 2021, Oracle and/or its affiliates.



const Command = __webpack_require__(4219);
const Packets = __webpack_require__(3205);
const ClientConstants = __webpack_require__(3930);
const MariaDBClientConstants = __webpack_require__(7703);
const CharsetToEncoding = __webpack_require__(3160);
const auth41 = __webpack_require__(3247);
const { getAuthPlugin } = __webpack_require__(1125);
const {
  calculateToken: calculateSha2Token,
} = __webpack_require__(3339);

function flagNames(flags) {
  const res = [];
  for (const c in ClientConstants) {
    if (flags & ClientConstants[c]) {
      res.push(c.replace(/_/g, ' ').toLowerCase());
    }
  }
  return res;
}

class ClientHandshake extends Command {
  constructor(clientFlags) {
    super();
    this.handshake = null;
    this.clientFlags = clientFlags;
    this.mariadbExtendedClientFlags = 0;
    this.authenticationFactor = 0;
  }

  start() {
    return ClientHandshake.prototype.handshakeInit;
  }

  sendSSLRequest(connection) {
    const sslRequest = new Packets.SSLRequest(
      this.clientFlags,
      connection.config.charsetNumber,
      this.mariadbExtendedClientFlags
    );
    connection.writePacket(sslRequest.toPacket());
  }

  sendCredentials(connection) {
    if (connection.config.debug) {
      console.log(
        'Sending handshake packet: flags:%d=(%s)',
        this.clientFlags,
        flagNames(this.clientFlags).join(', ')
      );
    }
    this.user = connection.config.user;
    this.password = connection.config.password;
    // "password1" is an alias to the original "password" value
    // to make it easier to integrate multi-factor authentication
    this.password1 = connection.config.password;
    // "password2" and "password3" are the 2nd and 3rd factor authentication
    // passwords, which can be undefined depending on the authentication
    // plugin being used
    this.password2 = connection.config.password2;
    this.password3 = connection.config.password3;
    this.passwordSha1 = connection.config.passwordSha1;
    this.database = connection.config.database;
    this.authPluginName = this.handshake.authPluginName;

    // Optimization: Try to use the server's preferred authentication method
    // to avoid an unnecessary auth switch roundtrip
    const serverAuthMethod = this.handshake.authPluginName;
    const isSecureConnection =
      connection.config.ssl || connection.config.socketPath;

    // Combine auth plugin data for easier handling
    // Note: authPluginData2 can include a trailing NUL byte when PLUGIN_AUTH is set
    // We must ensure exactly 20 bytes for the scramble
    const authPluginData =
      this.handshake.authPluginData1 && this.handshake.authPluginData2
        ? Buffer.concat([
            this.handshake.authPluginData1,
            this.handshake.authPluginData2,
          ]).slice(0, 20)
        : Buffer.alloc(20);

    // Check if user has custom auth plugin or legacy handler for the server-advertised method
    // If so, we must not bypass the auth switch flow with our built-in implementation
    const hasCustomAuthPlugin =
      connection.config.authPlugins &&
      Object.prototype.hasOwnProperty.call(
        connection.config.authPlugins,
        serverAuthMethod
      );
    const hasLegacyAuthSwitchHandler =
      typeof connection.config.authSwitchHandler === 'function';

    // Determine which auth method to use
    // Try to use server's preferred method if we can, otherwise fallback to native
    const canUseDirectAuth =
      !hasCustomAuthPlugin &&
      !hasLegacyAuthSwitchHandler &&
      this.canUseAuthMethodDirectly(serverAuthMethod, isSecureConnection) &&
      (serverAuthMethod !== 'mysql_clear_password' ||
        connection.config.enableCleartextPlugin);

    const clientAuthMethod = canUseDirectAuth
      ? serverAuthMethod
      : 'mysql_native_password';

    // Calculate the auth token for the chosen method
    const authToken = this.calculateAuthToken(
      clientAuthMethod,
      this.password,
      authPluginData
    );

    if (connection.config.debug) {
      console.log(
        'Server auth method: %s, Using auth method: %s',
        serverAuthMethod,
        clientAuthMethod
      );
    }

    const handshakeResponse = new Packets.HandshakeResponse({
      flags: this.clientFlags,
      mariadbExtendedClientFlags: this.mariadbExtendedClientFlags,
      user: this.user,
      database: this.database,
      password: this.password,
      passwordSha1: this.passwordSha1,
      charsetNumber: connection.config.charsetNumber,
      authPluginData1: this.handshake.authPluginData1,
      authPluginData2: this.handshake.authPluginData2,
      compress: connection.config.compress,
      connectAttributes: connection.config.connectAttributes,
      authToken: authToken,
      authPluginName: clientAuthMethod,
    });
    connection.writePacket(handshakeResponse.toPacket());

    // If we used a non-native auth method in the initial handshake response,
    // we need to prepare for potential AuthMoreData packets by creating
    // the appropriate auth plugin instance
    if (clientAuthMethod !== 'mysql_native_password') {
      this.initializeAuthPlugin(clientAuthMethod, authPluginData, connection);
    }
  }

  calculateNativePasswordAuthToken(authPluginData) {
    // TODO: dont split into authPluginData1 and authPluginData2, instead join when 1 & 2 received
    const authPluginData1 = authPluginData.slice(0, 8);
    const authPluginData2 = authPluginData.slice(8, 20);
    let authToken;
    if (this.passwordSha1) {
      authToken = auth41.calculateTokenFromPasswordSha(
        this.passwordSha1,
        authPluginData1,
        authPluginData2
      );
    } else {
      authToken = auth41.calculateToken(
        this.password,
        authPluginData1,
        authPluginData2
      );
    }
    return authToken;
  }

  calculateSha256Token(password, scramble) {
    // Reuse the token calculation from caching_sha2_password plugin
    // to avoid code duplication and ensure consistency
    return calculateSha2Token(password, scramble);
  }

  // Helper: Calculate auth token for a specific auth method
  calculateAuthToken(authMethod, password, authPluginData) {
    switch (authMethod) {
      case 'mysql_native_password':
        return this.calculateNativePasswordAuthToken(authPluginData);

      case 'caching_sha2_password':
        return this.calculateSha256Token(password, authPluginData);

      case 'sha256_password':
      case 'mysql_clear_password':
        // These methods send plaintext password over secure connections
        return password
          ? Buffer.from(\`\${password}\\0\`, 'utf8')
          : Buffer.alloc(0);

      default:
        // Unknown method - use native password as fallback
        return this.calculateNativePasswordAuthToken(authPluginData);
    }
  }

  // Helper: Determine if we can use a specific auth method directly
  canUseAuthMethodDirectly(authMethod, isSecureConnection) {
    switch (authMethod) {
      case 'mysql_native_password':
      case 'caching_sha2_password':
        // These methods work with or without SSL
        return true;

      case 'sha256_password':
      case 'mysql_clear_password':
        // These methods require secure connection for direct use
        return isSecureConnection;

      default:
        // Unknown methods - fallback to native password
        return false;
    }
  }

  // Helper: Initialize auth plugin for handling subsequent AuthMoreData packets
  initializeAuthPlugin(authMethod, authPluginData, connection) {
    const authPlugin = getAuthPlugin(authMethod, connection);
    if (!authPlugin) {
      return; // Plugin not found, will fallback to auth switch if needed
    }

    // Initialize the plugin with connection and command context
    const pluginHandler = authPlugin({ connection, command: this });
    connection._authPlugin = pluginHandler;

    // Prime the plugin by calling it with the scramble data
    // This advances the plugin's state machine (e.g., to STATE_TOKEN_SENT)
    // We don't send the result because we already included it in the handshake response
    try {
      Promise.resolve(pluginHandler(authPluginData)).catch((err) => {
        // Ignore errors during initialization since we already sent the token
        if (connection.config.debug) {
          console.log('Auth plugin initialization:', err.message);
        }
      });
    } catch (err) {
      // Ignore synchronous errors during initialization
      if (connection.config.debug) {
        console.log('Auth plugin initialization error:', err.message);
      }
    }
  }

  handshakeInit(helloPacket, connection) {
    this.on('error', (e) => {
      connection._fatalError = e;
      connection._protocolError = e;
    });
    this.handshake = Packets.Handshake.fromPacket(helloPacket);
    if (connection.config.debug) {
      console.log(
        'Server hello packet: capability flags:%d=(%s)',
        this.handshake.capabilityFlags,
        flagNames(this.handshake.capabilityFlags).join(', ')
      );
    }
    connection.serverCapabilityFlags = this.handshake.capabilityFlags;
    connection.serverEncoding = CharsetToEncoding[this.handshake.characterSet];
    connection.connectionId = this.handshake.connectionId;
    // MariaDB needs a few protocol deviations, e.g. it rejects the JSON
    // parameter type in COM_STMT_EXECUTE
    connection._isMariaDB = /mariadb/i.test(this.handshake.serverVersion);
    // If a MariaDB server offers extended column metadata, request it so
    // MariaDB-specific column types (UUID, INET4, INET6, VECTOR and the JSON
    // alias) can be identified. The server only reads the extended client
    // capability bytes when the client leaves CLIENT_MYSQL (LONG_PASSWORD)
    // unset, mirroring the server side of the negotiation.
    if (
      this.handshake.mariadbExtendedCapabilityFlags &
      MariaDBClientConstants.MARIADB_CLIENT_EXTENDED_METADATA
    ) {
      this.clientFlags &= ~ClientConstants.LONG_PASSWORD;
      this.mariadbExtendedClientFlags |=
        MariaDBClientConstants.MARIADB_CLIENT_EXTENDED_METADATA;
    }
    connection._mariadbExtendedMetadata = Boolean(
      this.mariadbExtendedClientFlags &
      MariaDBClientConstants.MARIADB_CLIENT_EXTENDED_METADATA
    );
    const serverSSLSupport =
      this.handshake.capabilityFlags & ClientConstants.SSL;
    // multi factor authentication is enabled with the
    // "MULTI_FACTOR_AUTHENTICATION" capability and should only be used if it
    // is supported by the server
    const multiFactorAuthentication =
      this.handshake.capabilityFlags &
      ClientConstants.MULTI_FACTOR_AUTHENTICATION;
    this.clientFlags = this.clientFlags | multiFactorAuthentication;
    // use compression only if requested by client and supported by server
    connection.config.compress =
      connection.config.compress &&
      this.handshake.capabilityFlags & ClientConstants.COMPRESS;
    this.clientFlags = this.clientFlags | connection.config.compress;
    if (connection.config.ssl) {
      // client requires SSL but server does not support it
      if (!serverSSLSupport) {
        const err = new Error('Server does not support secure connection');
        err.code = 'HANDSHAKE_NO_SSL_SUPPORT';
        err.fatal = true;
        this.emit('error', err);
        return false;
      }
      // send ssl upgrade request and immediately upgrade connection to secure
      this.clientFlags |= ClientConstants.SSL;
      this.sendSSLRequest(connection);
      connection.startTLS((err) => {
        // after connection is secure
        if (err) {
          // SSL negotiation error are fatal
          err.code = 'HANDSHAKE_SSL_ERROR';
          err.fatal = true;
          this.emit('error', err);
          return;
        }
        // rest of communication is encrypted
        this.sendCredentials(connection);
      });
    } else {
      this.sendCredentials(connection);
    }
    if (multiFactorAuthentication) {
      // if the server supports multi-factor authentication, we enable it in
      // the client
      this.authenticationFactor = 1;
    }
    return ClientHandshake.prototype.handshakeResult;
  }

  handshakeResult(packet, connection) {
    const marker = packet.peekByte();
    // packet can be OK_Packet, ERR_Packet, AuthSwitchRequest, AuthNextFactor
    // or AuthMoreData
    if (marker === 0xfe || marker === 1 || marker === 0x02) {
      const authSwitch = __webpack_require__(1125);
      try {
        if (marker === 1) {
          authSwitch.authSwitchRequestMoreData(packet, connection, this);
        } else {
          // if authenticationFactor === 0, it means the server does not support
          // the multi-factor authentication capability
          if (this.authenticationFactor !== 0) {
            // if we are past the first authentication factor, we should use the
            // corresponding password (if there is one)
            connection.config.password =
              this[\`password\${this.authenticationFactor}\`];
            // update the current authentication factor
            this.authenticationFactor += 1;
          }
          // if marker === 0x02, it means it is an AuthNextFactor packet,
          // which is similar in structure to an AuthSwitchRequest packet,
          // so, we can use it directly
          authSwitch.authSwitchRequest(packet, connection, this);
        }
        return ClientHandshake.prototype.handshakeResult;
      } catch (err) {
        if (!err.code) {
          err.code = 'AUTH_SWITCH_PLUGIN_ERROR';
        }
        err.fatal = true;

        if (this.onResult) {
          this.onResult(err);
        } else {
          this.emit('error', err);
        }
        return null;
      }
    }
    if (marker !== 0) {
      const err = new Error('Unexpected packet during handshake phase');
      // Unknown handshake errors are fatal
      err.code = 'HANDSHAKE_UNKNOWN_ERROR';
      err.fatal = true;

      if (this.onResult) {
        this.onResult(err);
      } else {
        this.emit('error', err);
      }
      return null;
    }
    // this should be called from ClientHandshake command only
    // and skipped when called from ChangeUser command
    if (!connection.authorized) {
      connection.authorized = true;
      if (connection.config.compress) {
        const enableCompression =
          (__webpack_require__(7957)/* .enableCompression */ .K);
        enableCompression(connection);
      }
    }
    if (this.onResult) {
      this.onResult(null);
    }
    return null;
  }
}
module.exports = ClientHandshake;


/***/ },

/***/ 7116
(module, __unused_webpack_exports, __webpack_require__) {



const Command = __webpack_require__(4219);
const Packets = __webpack_require__(3205);

class CloseStatement extends Command {
  constructor(id) {
    super();
    this.id = id;
  }

  start(packet, connection) {
    connection.writePacket(new Packets.CloseStatement(this.id).toPacket(1));
    return null;
  }
}

module.exports = CloseStatement;


/***/ },

/***/ 4219
(module, __unused_webpack_exports, __webpack_require__) {



const EventEmitter = (__webpack_require__(4434).EventEmitter);
const Timers = __webpack_require__(3557);

class Command extends EventEmitter {
  constructor() {
    super();
    this.next = null;
  }

  // slow. debug only
  stateName() {
    const state = this.next;
    for (const i in this) {
      if (this[i] === state && i !== 'next') {
        return i;
      }
    }
    return 'unknown name';
  }

  execute(packet, connection) {
    if (!this.next) {
      this.next = this.start;
      connection._resetSequenceId();
    }
    if (packet && packet.isError()) {
      const err = packet.asError(connection.clientEncoding);
      err.sql = this.sql || this.query;
      if (this.queryTimeout) {
        Timers.clearTimeout(this.queryTimeout);
        this.queryTimeout = null;
      }
      if (this.onResult) {
        this.onResult(err);
        this.emit('end');
      } else {
        this.emit('error', err);
        this.emit('end');
      }
      return true;
    }
    // TODO: don't return anything from execute, it's ugly and error-prone. Listen for 'end' event in connection
    this.next = this.next(packet, connection);
    if (this.next) {
      return false;
    }
    this.emit('end');
    return true;
  }
}

module.exports = Command;


/***/ },

/***/ 7485
(module, __unused_webpack_exports, __webpack_require__) {



const Timers = __webpack_require__(3557);

const Command = __webpack_require__(4219);
const Query = __webpack_require__(6);
const Packets = __webpack_require__(3205);

const getBinaryParser = __webpack_require__(4137);
const getStaticBinaryParser = __webpack_require__(3918);

class Execute extends Command {
  constructor(options, callback) {
    super();
    this.statement = options.statement;
    this.sql = options.sql;
    this.values = options.values;
    this.onResult = callback;
    this.parameters = options.values;
    this.insertId = 0;
    this.timeout = options.timeout;
    this.queryTimeout = null;
    this._rows = [];
    this._fields = [];
    this._currentRows = null;
    this._currentFields = null;
    this._result = [];
    this._fieldCount = 0;
    this._rowParser = null;
    this._executeOptions = options;
    this._resultIndex = 0;
    this._localStream = null;
    this._unpipeStream = function () {};
    this._streamFactory = options.infileStreamFactory;
    this._connection = null;
  }

  buildParserFromFields(fields, connection) {
    if (this.options.disableEval) {
      return getStaticBinaryParser(fields, this.options, connection.config);
    }

    return getBinaryParser(fields, this.options, connection.config);
  }

  start(packet, connection) {
    this._connection = connection;
    this.options = Object.assign({}, connection.config, this._executeOptions);
    this._setTimeout();
    const clientFlags =
      connection.config.clientFlags & (connection.serverCapabilityFlags || 0);
    const executePacket = new Packets.Execute(
      this.statement.id,
      this.parameters,
      connection.config.charsetNumber,
      connection.config.timezone,
      this._executeOptions.attributes,
      clientFlags,
      connection._isMariaDB,
      this.statement.parameters
    );
    //For reasons why this try-catch is here, please see
    // https://github.com/sidorares/node-mysql2/pull/689
    //For additional discussion, see
    // 1. https://github.com/sidorares/node-mysql2/issues/493
    // 2. https://github.com/sidorares/node-mysql2/issues/187
    // 3. https://github.com/sidorares/node-mysql2/issues/480
    try {
      connection.writePacket(executePacket.toPacket(1));
    } catch (error) {
      if (this.queryTimeout) {
        Timers.clearTimeout(this.queryTimeout);
        this.queryTimeout = null;
      }
      if (this.onResult) {
        this.onResult(error);
      } else {
        this.emit('error', error);
      }
      return null;
    }
    return Execute.prototype.resultsetHeader;
  }

  readField(packet, connection) {
    let fields;
    // disabling for now, but would be great to find reliable way to parse fields only once
    // fields reported by prepare can be empty at all or just incorrect - see #169
    //
    // performance optimisation: if we already have this field parsed in statement header, use one from header
    // const field = this.statement.columns.length == this._fieldCount ?
    //  this.statement.columns[this._receivedFieldsCount] : new Packets.ColumnDefinition(packet);
    const field = new Packets.ColumnDefinition(
      packet,
      connection.clientEncoding,
      connection._mariadbExtendedMetadata
    );
    this._receivedFieldsCount++;
    this._fields[this._resultIndex].push(field);
    if (this._receivedFieldsCount === this._fieldCount) {
      fields = this._fields[this._resultIndex];
      this.emit('fields', fields, this._resultIndex);
      return Execute.prototype.fieldsEOF;
    }
    return Execute.prototype.readField;
  }

  fieldsEOF(packet, connection) {
    // check EOF
    if (!packet.isEOF()) {
      return connection.protocolError('Expected EOF packet');
    }
    this._rowParser = new (this.buildParserFromFields(
      this._fields[this._resultIndex],
      connection
    ))();
    return Execute.prototype.row;
  }
}

Execute.prototype.done = Query.prototype.done;
Execute.prototype.doneInsert = Query.prototype.doneInsert;
Execute.prototype.resultsetHeader = Query.prototype.resultsetHeader;
Execute.prototype._findOrCreateReadStream =
  Query.prototype._findOrCreateReadStream;
Execute.prototype._streamLocalInfile = Query.prototype._streamLocalInfile;
Execute.prototype._setTimeout = Query.prototype._setTimeout;
Execute.prototype._handleTimeoutError = Query.prototype._handleTimeoutError;
Execute.prototype.row = Query.prototype.row;
Execute.prototype.stream = Query.prototype.stream;

module.exports = Execute;


/***/ },

/***/ 7454
(module, __unused_webpack_exports, __webpack_require__) {



const ClientHandshake = __webpack_require__(3489);
const ServerHandshake = __webpack_require__(3717);
const Query = __webpack_require__(6);
const Prepare = __webpack_require__(3837);
const CloseStatement = __webpack_require__(7116);
const Execute = __webpack_require__(7485);
const Ping = __webpack_require__(5328);
const RegisterSlave = __webpack_require__(4353);
const BinlogDump = __webpack_require__(7990);
const ChangeUser = __webpack_require__(3564);
const ResetConnection = __webpack_require__(392);
const Quit = __webpack_require__(7967);

module.exports = {
  ClientHandshake,
  ServerHandshake,
  Query,
  Prepare,
  ...void (CloseStatement),
  Execute,
  Ping,
  RegisterSlave,
  BinlogDump,
  ChangeUser,
  ResetConnection,
  Quit,
};


/***/ },

/***/ 5328
(module, __unused_webpack_exports, __webpack_require__) {



const Command = __webpack_require__(4219);
const CommandCode = __webpack_require__(7015);
const Packet = __webpack_require__(5777);

// TODO: time statistics?
// useful for queue size and network latency monitoring
// store created,sent,reply timestamps
class Ping extends Command {
  constructor(callback) {
    super();
    this.onResult = callback;
  }

  start(packet, connection) {
    const ping = new Packet(
      0,
      Buffer.from([1, 0, 0, 0, CommandCode.PING]),
      0,
      5
    );
    connection.writePacket(ping);
    return Ping.prototype.pingResponse;
  }

  pingResponse() {
    // TODO: check it's OK packet. error check already done in caller
    if (this.onResult) {
      process.nextTick(this.onResult.bind(this));
    }
    return null;
  }
}

module.exports = Ping;


/***/ },

/***/ 3837
(module, __unused_webpack_exports, __webpack_require__) {



const Packets = __webpack_require__(3205);
const Command = __webpack_require__(4219);
const CloseStatement = __webpack_require__(7116);
const Execute = __webpack_require__(7485);

class PreparedStatementInfo {
  constructor(query, id, columns, parameters, connection) {
    this.query = query;
    this.id = id;
    this.columns = columns;
    this.parameters = parameters;
    this.rowParser = null;
    this._connection = connection;
  }

  close() {
    return this._connection.addCommand(new CloseStatement(this.id));
  }

  execute(parameters, callback) {
    if (typeof parameters === 'function') {
      callback = parameters;
      parameters = [];
    }
    return this._connection.addCommand(
      new Execute({ statement: this, values: parameters }, callback)
    );
  }
}

class Prepare extends Command {
  constructor(options, callback) {
    super();
    this.query = options.sql;
    this.onResult = callback;
    this.id = 0;
    this.fieldCount = 0;
    this.parameterCount = 0;
    this.fields = [];
    this.parameterDefinitions = [];
    this.options = options;
  }

  start(packet, connection) {
    const Connection = connection.constructor;
    this.key = Connection.statementKey(this.options);
    const statement = connection._statements.get(this.key);
    if (statement) {
      if (this.onResult) {
        this.onResult(null, statement);
      }
      return null;
    }
    const cmdPacket = new Packets.PrepareStatement(
      this.query,
      connection.config.charsetNumber,
      this.options.values
    );
    connection.writePacket(cmdPacket.toPacket(1));
    return Prepare.prototype.prepareHeader;
  }

  prepareHeader(packet, connection) {
    const header = new Packets.PreparedStatementHeader(packet);
    this.id = header.id;
    this.fieldCount = header.fieldCount;
    this.parameterCount = header.parameterCount;
    if (this.parameterCount > 0) {
      return Prepare.prototype.readParameter;
    }
    if (this.fieldCount > 0) {
      return Prepare.prototype.readField;
    }
    return this.prepareDone(connection);
  }

  readParameter(packet, connection) {
    // there might be scenarios when mysql server reports more parameters than
    // are actually present in the array of parameter definitions.
    // if EOF packet is received we switch to "read fields" state if there are
    // any fields reported by the server, otherwise we finish the command.
    if (packet.isEOF()) {
      if (this.fieldCount > 0) {
        return Prepare.prototype.readField;
      }
      return this.prepareDone(connection);
    }
    const def = new Packets.ColumnDefinition(
      packet,
      connection.clientEncoding,
      connection._mariadbExtendedMetadata
    );
    this.parameterDefinitions.push(def);
    if (this.parameterDefinitions.length === this.parameterCount) {
      return Prepare.prototype.parametersEOF;
    }
    return this.readParameter;
  }

  readField(packet, connection) {
    if (packet.isEOF()) {
      return this.prepareDone(connection);
    }
    const def = new Packets.ColumnDefinition(
      packet,
      connection.clientEncoding,
      connection._mariadbExtendedMetadata
    );
    this.fields.push(def);
    if (this.fields.length === this.fieldCount) {
      return Prepare.prototype.fieldsEOF;
    }
    return Prepare.prototype.readField;
  }

  parametersEOF(packet, connection) {
    if (!packet.isEOF()) {
      return connection.protocolError('Expected EOF packet after parameters');
    }
    if (this.fieldCount > 0) {
      return Prepare.prototype.readField;
    }
    return this.prepareDone(connection);
  }

  fieldsEOF(packet, connection) {
    if (!packet.isEOF()) {
      return connection.protocolError('Expected EOF packet after fields');
    }
    return this.prepareDone(connection);
  }

  prepareDone(connection) {
    const statement = new PreparedStatementInfo(
      this.query,
      this.id,
      this.fields,
      this.parameterDefinitions,
      connection
    );
    connection._statements.set(this.key, statement);
    if (this.onResult) {
      this.onResult(null, statement);
    }
    return null;
  }
}

module.exports = Prepare;


/***/ },

/***/ 6
(module, __unused_webpack_exports, __webpack_require__) {



const process = __webpack_require__(932);
const Timers = __webpack_require__(3557);

const Readable = (__webpack_require__(2203).Readable);

const Command = __webpack_require__(4219);
const Packets = __webpack_require__(3205);
const getTextParser = __webpack_require__(6267);
const staticParser = __webpack_require__(1624);
const ServerStatus = __webpack_require__(2127);

const EmptyPacket = new Packets.Packet(0, Buffer.allocUnsafe(4), 0, 4);

// http://dev.mysql.com/doc/internals/en/com-query.html
class Query extends Command {
  constructor(options, callback) {
    super();
    this.sql = options.sql;
    this.values = options.values;
    this._queryOptions = options;
    this.namedPlaceholders = Object.prototype.hasOwnProperty.call(
      options,
      'namedPlaceholders'
    )
      ? options.namedPlaceholders
      : undefined;
    this.onResult = callback;
    this.timeout = options.timeout;
    this.queryTimeout = null;
    this._fieldCount = 0;
    this._rowParser = null;
    this._fields = [];
    this._rows = [];
    this._currentRows = null;
    this._currentFields = null;
    this._receivedFieldsCount = 0;
    this._resultIndex = 0;
    this._localStream = null;
    this._unpipeStream = function () {};
    this._streamFactory = options.infileStreamFactory;
    this._connection = null;
  }

  then() {
    const err =
      "You have tried to call .then(), .catch(), or invoked await on the result of query that is not a promise, which is a programming error. Try calling con.promise().query(), or require('mysql2/promise') instead of 'mysql2' for a promise-compatible version of the query interface. To learn how to use async/await or Promises check out documentation at https://sidorares.github.io/node-mysql2/docs#using-promise-wrapper, or the mysql2 documentation at https://sidorares.github.io/node-mysql2/docs/documentation/promise-wrapper";

    console.log(err);
    throw new Error(err);
  }

  start(_packet, connection) {
    if (connection.config.debug) {
      console.log('        Sending query command: %s', this.sql);
    }
    this._connection = connection;
    this.options = Object.assign({}, connection.config, this._queryOptions);
    this._setTimeout();

    const clientFlags =
      connection.config.clientFlags & (connection.serverCapabilityFlags || 0);
    const cmdPacket = new Packets.Query(
      this.sql,
      connection.config.charsetNumber,
      this._queryOptions.attributes,
      clientFlags
    );
    connection.writePacket(cmdPacket.toPacket(1));
    return Query.prototype.resultsetHeader;
  }

  done() {
    this._unpipeStream();
    // if all ready timeout, return null directly
    if (this.timeout && !this.queryTimeout) {
      return null;
    }
    // else clear timer
    if (this.queryTimeout) {
      Timers.clearTimeout(this.queryTimeout);
      this.queryTimeout = null;
    }
    if (this.onResult) {
      let rows, fields;
      if (this._resultIndex === 0) {
        rows = this._rows[0];
        fields = this._fields[0];
      } else {
        rows = this._rows;
        fields = this._fields;
      }
      if (fields) {
        process.nextTick(() => {
          this.onResult(null, rows, fields);
        });
      } else {
        process.nextTick(() => {
          this.onResult(null, rows);
        });
      }
    }
    return null;
  }

  doneInsert(rs) {
    if (this._localStreamError) {
      if (this.onResult) {
        this.onResult(this._localStreamError, rs);
      } else {
        this.emit('error', this._localStreamError);
      }
      return null;
    }
    this._rows.push(rs);
    this._fields.push(void 0);
    this.emit('fields', void 0);
    this.emit('result', rs);
    if (rs.serverStatus & ServerStatus.SERVER_MORE_RESULTS_EXISTS) {
      this._resultIndex++;
      return this.resultsetHeader;
    }
    return this.done();
  }

  resultsetHeader(packet, connection) {
    const rs = new Packets.ResultSetHeader(packet, connection);
    this._fieldCount = rs.fieldCount;
    if (connection.config.debug) {
      console.log(
        \`        Resultset header received, expecting \${rs.fieldCount} column definition packets\`
      );
    }
    if (this._fieldCount === 0) {
      return this.doneInsert(rs);
    }
    if (this._fieldCount === null) {
      return this._streamLocalInfile(connection, rs.infileName);
    }
    this._receivedFieldsCount = 0;
    this._currentRows = [];
    this._currentFields = [];
    this._rows.push(this._currentRows);
    this._fields.push(this._currentFields);
    return this.readField;
  }

  _streamLocalInfile(connection, path) {
    if (this._streamFactory) {
      this._localStream = this._streamFactory(path);
    } else {
      this._localStreamError = new Error(
        \`As a result of LOCAL INFILE command server wants to read \${path} file, but as of v2.0 you must provide streamFactory option returning ReadStream.\`
      );
      connection.writePacket(EmptyPacket);
      return this.infileOk;
    }

    const onConnectionError = () => {
      this._unpipeStream();
    };
    const onDrain = () => {
      this._localStream.resume();
    };
    const onPause = () => {
      this._localStream.pause();
    };
    const onData = function (data) {
      const dataWithHeader = Buffer.allocUnsafe(data.length + 4);
      data.copy(dataWithHeader, 4);
      connection.writePacket(
        new Packets.Packet(0, dataWithHeader, 0, dataWithHeader.length)
      );
    };
    const onEnd = () => {
      connection.removeListener('error', onConnectionError);
      connection.writePacket(EmptyPacket);
    };
    const onError = (err) => {
      this._localStreamError = err;
      connection.removeListener('error', onConnectionError);
      connection.writePacket(EmptyPacket);
    };
    this._unpipeStream = () => {
      connection.stream.removeListener('pause', onPause);
      connection.stream.removeListener('drain', onDrain);
      this._localStream.removeListener('data', onData);
      this._localStream.removeListener('end', onEnd);
      this._localStream.removeListener('error', onError);
    };
    connection.stream.on('pause', onPause);
    connection.stream.on('drain', onDrain);
    this._localStream.on('data', onData);
    this._localStream.on('end', onEnd);
    this._localStream.on('error', onError);
    connection.once('error', onConnectionError);
    return this.infileOk;
  }

  readField(packet, connection) {
    this._receivedFieldsCount++;
    // Often there is much more data in the column definition than in the row itself
    // If you set manually _fields[0] to array of ColumnDefinition's (from previous call)
    // you can 'cache' result of parsing. Field packets still received, but ignored in that case
    // this is the reason _receivedFieldsCount exist (otherwise we could just use current length of fields array)
    if (this._fields[this._resultIndex].length !== this._fieldCount) {
      const field = new Packets.ColumnDefinition(
        packet,
        connection.clientEncoding,
        connection._mariadbExtendedMetadata
      );
      this._fields[this._resultIndex].push(field);
      if (connection.config.debug) {
        console.log('        Column definition:');
        console.log(\`          name: \${field.name}\`);
        console.log(\`          type: \${field.columnType}\`);
        console.log(\`         flags: \${field.flags}\`);
      }
    }
    // last field received
    if (this._receivedFieldsCount === this._fieldCount) {
      const fields = this._fields[this._resultIndex];
      this.emit('fields', fields);
      if (this.options.disableEval) {
        this._rowParser = staticParser(fields, this.options, connection.config);
      } else {
        this._rowParser = new (getTextParser(
          fields,
          this.options,
          connection.config
        ))(fields);
      }
      return Query.prototype.fieldsEOF;
    }
    return Query.prototype.readField;
  }

  fieldsEOF(packet, connection) {
    // check EOF
    if (!packet.isEOF()) {
      return connection.protocolError('Expected EOF packet');
    }
    return this.row;
  }

  row(packet, _connection) {
    if (packet.isEOF()) {
      const status = packet.eofStatusFlags();
      const moreResults = status & ServerStatus.SERVER_MORE_RESULTS_EXISTS;
      if (moreResults) {
        this._resultIndex++;
        return Query.prototype.resultsetHeader;
      }
      return this.done();
    }
    let row;
    try {
      row = this._rowParser.next(packet, this._currentFields, this.options);
    } catch (err) {
      this._localStreamError = err;
      return this.doneInsert(null);
    }
    if (this.onResult) {
      this._currentRows.push(row);
    } else {
      this.emit('result', row, this._resultIndex);
    }
    return Query.prototype.row;
  }

  infileOk(packet, connection) {
    const rs = new Packets.ResultSetHeader(packet, connection);
    return this.doneInsert(rs);
  }

  stream(options) {
    options = options || Object.create(null);
    options.objectMode = true;

    const stream = new Readable({
      ...options,
      emitClose: true,
      autoDestroy: true,
      read: () => {
        this._connection && this._connection.resume();
      },
    });

    // Prevent a breaking change for users that rely on \`end\` event
    stream.once('close', () => {
      if (!stream.readableEnded) {
        stream.emit('end');
      }
    });

    const onResult = (row, index) => {
      if (stream.destroyed) return;

      if (!stream.push(row)) {
        this._connection && this._connection.pause();
      }

      stream.emit('result', row, index); // replicate old emitter
    };

    const onFields = (fields) => {
      if (stream.destroyed) return;

      stream.emit('fields', fields); // replicate old emitter
    };

    const onEnd = () => {
      if (stream.destroyed) return;

      stream.push(null); // pushing null, indicating EOF
    };

    const onError = (err) => {
      stream.destroy(err);
    };

    stream._destroy = (err, cb) => {
      this._connection && this._connection.resume();

      this.removeListener('result', onResult);
      this.removeListener('fields', onFields);
      this.removeListener('end', onEnd);
      this.removeListener('error', onError);

      cb(err); // Pass on any errors
    };

    this.on('result', onResult);
    this.on('fields', onFields);
    this.on('end', onEnd);
    this.on('error', onError);

    return stream;
  }

  _setTimeout() {
    if (this.timeout) {
      const timeoutHandler = this._handleTimeoutError.bind(this);
      this.queryTimeout = Timers.setTimeout(timeoutHandler, this.timeout);
    }
  }

  _handleTimeoutError() {
    if (this.queryTimeout) {
      Timers.clearTimeout(this.queryTimeout);
      this.queryTimeout = null;
    }

    const err = new Error('Query inactivity timeout');
    err.errorno = 'PROTOCOL_SEQUENCE_TIMEOUT';
    err.code = 'PROTOCOL_SEQUENCE_TIMEOUT';
    err.syscall = 'query';

    if (this.onResult) {
      this.onResult(err);
    } else {
      this.emit('error', err);
    }
  }
}

Query.prototype.catch = Query.prototype.then;

module.exports = Query;


/***/ },

/***/ 7967
(module, __unused_webpack_exports, __webpack_require__) {



const Command = __webpack_require__(4219);
const CommandCode = __webpack_require__(7015);
const Packet = __webpack_require__(5777);

class Quit extends Command {
  constructor(callback) {
    super();
    this.onResult = callback;
  }

  start(packet, connection) {
    connection._closing = true;
    const quit = new Packet(
      0,
      Buffer.from([1, 0, 0, 0, CommandCode.QUIT]),
      0,
      5
    );
    if (this.onResult) {
      this.onResult();
    }
    connection.writePacket(quit);
    return null;
  }
}

module.exports = Quit;


/***/ },

/***/ 4353
(module, __unused_webpack_exports, __webpack_require__) {



const Command = __webpack_require__(4219);
const Packets = __webpack_require__(3205);

class RegisterSlave extends Command {
  constructor(opts, callback) {
    super();
    this.onResult = callback;
    this.opts = opts;
  }

  start(packet, connection) {
    const newPacket = new Packets.RegisterSlave(this.opts);
    connection.writePacket(newPacket.toPacket(1));
    return RegisterSlave.prototype.registerResponse;
  }

  registerResponse() {
    if (this.onResult) {
      process.nextTick(this.onResult.bind(this));
    }
    return null;
  }
}

module.exports = RegisterSlave;


/***/ },

/***/ 392
(module, __unused_webpack_exports, __webpack_require__) {



const Command = __webpack_require__(4219);
const Packets = __webpack_require__(3205);

class ResetConnection extends Command {
  constructor(callback) {
    super();
    this.onResult = callback;
  }

  start(packet, connection) {
    const req = new Packets.ResetConnection();
    connection.writePacket(req.toPacket());
    return ResetConnection.prototype.resetConnectionResponse;
  }

  resetConnectionResponse(packet, connection) {
    if (connection._statements) {
      connection._statements.clear();
    }
    if (this.onResult) {
      process.nextTick(this.onResult.bind(this, null));
    }
    return null;
  }
}

module.exports = ResetConnection;


/***/ },

/***/ 3717
(module, __unused_webpack_exports, __webpack_require__) {



const CommandCode = __webpack_require__(7015);
const Errors = __webpack_require__(5014);

const Command = __webpack_require__(4219);
const Packets = __webpack_require__(3205);

class ServerHandshake extends Command {
  constructor(args) {
    super();
    this.args = args;
    /*
    this.protocolVersion = args.protocolVersion || 10;
    this.serverVersion   = args.serverVersion;
    this.connectionId    = args.connectionId,
    this.statusFlags     = args.statusFlags,
    this.characterSet    = args.characterSet,
    this.capabilityFlags = args.capabilityFlags || 512;
    */
  }

  start(packet, connection) {
    const serverHelloPacket = new Packets.Handshake(this.args);
    this.serverHello = serverHelloPacket;
    serverHelloPacket.setScrambleData((err) => {
      if (err) {
        connection.emit('error', new Error('Error generating random bytes'));
        return;
      }
      connection.writePacket(serverHelloPacket.toPacket(0));
    });
    return ServerHandshake.prototype.readClientReply;
  }

  readClientReply(packet, connection) {
    // check auth here
    const clientHelloReply = Packets.HandshakeResponse.fromPacket(
      packet,
      this.args.capabilityFlags
    );
    // TODO check we don't have something similar already
    connection.clientHelloReply = clientHelloReply;
    if (this.args.authCallback) {
      this.args.authCallback(
        {
          user: clientHelloReply.user,
          database: clientHelloReply.database,
          address: connection.stream.remoteAddress,
          authPluginData1: this.serverHello.authPluginData1,
          authPluginData2: this.serverHello.authPluginData2,
          authToken: clientHelloReply.authToken,
        },
        (err, mysqlError) => {
          // if (err)
          if (!mysqlError) {
            connection.writeOk();
          } else {
            // TODO create constants / errorToCode
            // 1045 = ER_ACCESS_DENIED_ERROR
            connection.writeError({
              message: mysqlError.message || '',
              code: mysqlError.code || 1045,
            });
            connection.close();
          }
        }
      );
    } else {
      connection.writeOk();
    }
    return ServerHandshake.prototype.dispatchCommands;
  }

  _isStatement(query, name) {
    const firstWord = query.split(' ')[0].toUpperCase();
    return firstWord === name;
  }

  dispatchCommands(packet, connection) {
    // command from client to server
    let knownCommand = true;
    const encoding = connection.clientHelloReply.encoding;
    const commandCode = packet.readInt8();
    switch (commandCode) {
      case CommandCode.STMT_PREPARE:
        if (connection.listeners('stmt_prepare').length) {
          const query = packet.readString(undefined, encoding);
          connection.emit('stmt_prepare', query);
        } else {
          connection.writeError({
            code: Errors.HA_ERR_INTERNAL_ERROR,
            message: 'No query handler for prepared statements.',
          });
        }
        break;
      case CommandCode.STMT_EXECUTE:
        if (connection.listeners('stmt_execute').length) {
          const { stmtId, flags, iterationCount, values } =
            Packets.Execute.fromPacket(packet, encoding);
          connection.emit(
            'stmt_execute',
            stmtId,
            flags,
            iterationCount,
            values
          );
        } else {
          connection.writeError({
            code: Errors.HA_ERR_INTERNAL_ERROR,
            message: 'No query handler for execute statements.',
          });
        }
        break;
      case CommandCode.QUIT:
        if (connection.listeners('quit').length) {
          connection.emit('quit');
        } else {
          connection.stream.end();
        }
        break;
      case CommandCode.INIT_DB:
        if (connection.listeners('init_db').length) {
          const schemaName = packet.readString(undefined, encoding);
          connection.emit('init_db', schemaName);
        } else {
          connection.writeOk();
        }
        break;
      case CommandCode.QUERY:
        if (connection.listeners('query').length) {
          const query = packet.readString(undefined, encoding);
          if (
            this._isStatement(query, 'PREPARE') ||
            this._isStatement(query, 'SET')
          ) {
            connection.emit('stmt_prepare', query);
          } else if (this._isStatement(query, 'EXECUTE')) {
            connection.emit('stmt_execute', null, null, null, null, query);
          } else connection.emit('query', query);
        } else {
          connection.writeError({
            code: Errors.HA_ERR_INTERNAL_ERROR,
            message: 'No query handler',
          });
        }
        break;
      case CommandCode.FIELD_LIST:
        if (connection.listeners('field_list').length) {
          const table = packet.readNullTerminatedString(encoding);
          const fields = packet.readString(undefined, encoding);
          connection.emit('field_list', table, fields);
        } else {
          connection.writeError({
            code: Errors.ER_WARN_DEPRECATED_SYNTAX,
            message:
              'As of MySQL 5.7.11, COM_FIELD_LIST is deprecated and will be removed in a future version of MySQL.',
          });
        }
        break;
      case CommandCode.PING:
        if (connection.listeners('ping').length) {
          connection.emit('ping');
        } else {
          connection.writeOk();
        }
        break;
      default:
        knownCommand = false;
    }
    if (connection.listeners('packet').length) {
      connection.emit('packet', packet.clone(), knownCommand, commandCode);
    } else if (!knownCommand) {
      console.log('Unknown command:', commandCode);
    }
    return ServerHandshake.prototype.dispatchCommands;
  }
}

module.exports = ServerHandshake;

// TODO: implement server-side 4.1 authentication
/*
4.1 authentication: (http://bazaar.launchpad.net/~mysql/mysql-server/5.5/view/head:/sql/password.c)

  SERVER:  public_seed=create_random_string()
           send(public_seed)

  CLIENT:  recv(public_seed)
           hash_stage1=sha1("password")
           hash_stage2=sha1(hash_stage1)
           reply=xor(hash_stage1, sha1(public_seed,hash_stage2)

           // this three steps are done in scramble()

           send(reply)


  SERVER:  recv(reply)
           hash_stage1=xor(reply, sha1(public_seed,hash_stage2))
           candidate_hash2=sha1(hash_stage1)
           check(candidate_hash2==hash_stage2)

server stores sha1(sha1(password)) ( hash_stag2)
*/


/***/ },

/***/ 7957
(module, __unused_webpack_exports, __webpack_require__) {



// connection mixins
// implementation of http://dev.mysql.com/doc/internals/en/compression.html

const zlib = __webpack_require__(3106);
const PacketParser = __webpack_require__(7593);

class Queue {
  constructor() {
    this._queue = [];
    this._running = false;
  }

  push(fn) {
    this._queue.push(fn);
    if (!this._running) {
      this._running = true;
      process.nextTick(() => this._next());
    }
  }

  _next() {
    const task = this._queue.shift();
    if (!task) {
      this._running = false;
      return;
    }
    task({
      done: () => process.nextTick(() => this._next()),
    });
  }
}

function handleCompressedPacket(packet) {
  const connection = this;
  const deflatedLength = packet.readInt24();
  const body = packet.readBuffer();
  // the packet parser reuses its packet instance, so everything needed after
  // the queued (asynchronous) inflate step must be read out now
  const numPackets = packet.numPackets;

  if (deflatedLength !== 0) {
    connection.inflateQueue.push((task) => {
      zlib.inflate(body, { maxOutputLength: deflatedLength }, (err, data) => {
        if (err) {
          connection._handleNetworkError(err);
          return;
        }
        connection._bumpCompressedSequenceId(numPackets);
        connection._inflatedPacketsParser.execute(data);
        task.done();
      });
    });
  } else {
    connection.inflateQueue.push((task) => {
      connection._bumpCompressedSequenceId(numPackets);
      connection._inflatedPacketsParser.execute(body);
      task.done();
    });
  }
}

function writeCompressed(buffer) {
  // http://dev.mysql.com/doc/internals/en/example-several-mysql-packets.html
  // note: sending a MySQL Packet of the size 2^24\u22125 to 2^24\u22121 via compression
  // leads to at least one extra compressed packet.
  // (this is because "length of the packet before compression" need to fit
  // into 3 byte unsigned int. "length of the packet before compression" includes
  // 4 byte packet header, hence 2^24\u22125)
  const MAX_COMPRESSED_LENGTH = 16777210;
  let start;
  if (buffer.length > MAX_COMPRESSED_LENGTH) {
    for (start = 0; start < buffer.length; start += MAX_COMPRESSED_LENGTH) {
      writeCompressed.call(
        this,
        buffer.slice(start, start + MAX_COMPRESSED_LENGTH)
      );
    }
    return;
  }

  const connection = this;

  let packetLen = buffer.length;
  const compressHeader = Buffer.allocUnsafe(7);

  // seqqueue is used here because zlib async execution is routed via thread pool
  // internally and when we have multiple compressed packets arriving we need
  // to assemble uncompressed result sequentially
  (function (seqId) {
    connection.deflateQueue.push((task) => {
      zlib.deflate(buffer, (err, compressed) => {
        if (err) {
          connection._handleFatalError(err);
          return;
        }
        let compressedLength = compressed.length;

        if (compressedLength < packetLen) {
          compressHeader.writeUInt8(compressedLength & 0xff, 0);
          compressHeader.writeUInt16LE(compressedLength >> 8, 1);
          compressHeader.writeUInt8(seqId, 3);
          compressHeader.writeUInt8(packetLen & 0xff, 4);
          compressHeader.writeUInt16LE(packetLen >> 8, 5);
          connection.writeUncompressed(compressHeader);
          connection.writeUncompressed(compressed);
        } else {
          // http://dev.mysql.com/doc/internals/en/uncompressed-payload.html
          // To send an uncompressed payload:
          //   - set length of payload before compression to 0
          //   - the compressed payload contains the uncompressed payload instead.
          compressedLength = packetLen;
          packetLen = 0;
          compressHeader.writeUInt8(compressedLength & 0xff, 0);
          compressHeader.writeUInt16LE(compressedLength >> 8, 1);
          compressHeader.writeUInt8(seqId, 3);
          compressHeader.writeUInt8(packetLen & 0xff, 4);
          compressHeader.writeUInt16LE(packetLen >> 8, 5);
          connection.writeUncompressed(compressHeader);
          connection.writeUncompressed(buffer);
        }
        task.done();
      });
    });
  })(connection.compressedSequenceId);
  connection._bumpCompressedSequenceId(1);
}

function enableCompression(connection) {
  connection._lastWrittenPacketId = 0;
  connection._lastReceivedPacketId = 0;

  connection._handleCompressedPacket = handleCompressedPacket;
  connection._inflatedPacketsParser = new PacketParser((p) => {
    connection.handlePacket(p);
  }, 4);
  connection._inflatedPacketsParser._lastPacket = 0;
  connection.packetParser = new PacketParser((packet) => {
    connection._handleCompressedPacket(packet);
  }, 7);

  connection.writeUncompressed = connection.write;
  connection.write = writeCompressed;

  connection.inflateQueue = new Queue();
  connection.deflateQueue = new Queue();
}

module.exports = {
  K: enableCompression,
  ...(/* unused pure expression */ null && (Queue)),
};


/***/ },

/***/ 3875
(module, __unused_webpack_exports, __webpack_require__) {



const BaseConnection = __webpack_require__(2041);

class Connection extends BaseConnection {
  promise(promiseImpl) {
    const PromiseConnection = __webpack_require__(8173);
    return new PromiseConnection(this, promiseImpl);
  }
}

module.exports = Connection;


/***/ },

/***/ 2928
(module, __unused_webpack_exports, __webpack_require__) {

// This file was modified by Oracle on September 21, 2021.
// New connection options for additional authentication factors were
// introduced.
// Multi-factor authentication capability is now enabled if one of these
// options is used.
// Modifications copyright (c) 2021, Oracle and/or its affiliates.



const { URL } = __webpack_require__(7016);
const ClientConstants = __webpack_require__(3930);
const Charsets = __webpack_require__(660);
const { version } = __webpack_require__(5604);
let SSLProfiles = null;

const validOptions = {
  authPlugins: 1,
  authSwitchHandler: 1,
  bigNumberStrings: 1,
  charset: 1,
  charsetNumber: 1,
  compress: 1,
  connectAttributes: 1,
  connectTimeout: 1,
  database: 1,
  dateStrings: 1,
  debug: 1,
  decimalNumbers: 1,
  enableKeepAlive: 1,
  flags: 1,
  host: 1,
  insecureAuth: 1,
  infileStreamFactory: 1,
  isServer: 1,
  keepAliveInitialDelay: 1,
  localAddress: 1,
  maxPreparedStatements: 1,
  multipleStatements: 1,
  namedPlaceholders: 1,
  nestTables: 1,
  password: 1,
  // with multi-factor authentication, the main password (used for the first
  // authentication factor) can be provided via password1
  password1: 1,
  password2: 1,
  password3: 1,
  passwordSha1: 1,
  pool: 1,
  port: 1,
  queryFormat: 1,
  rowsAsArray: 1,
  socketPath: 1,
  ssl: 1,
  stream: 1,
  stringifyObjects: 1,
  supportBigNumbers: 1,
  timezone: 1,
  trace: 1,
  typeCast: 1,
  uri: 1,
  user: 1,
  disableEval: 1,
  enableCleartextPlugin: 1,
  // These options are used for Pool
  connectionLimit: 1,
  maxIdle: 1,
  idleTimeout: 1,
  Promise: 1,
  queueLimit: 1,
  resetOnRelease: 1,
  waitForConnections: 1,
  jsonStrings: 1,
  gracefulEnd: 1,
};

class ConnectionConfig {
  constructor(options) {
    if (typeof options === 'string') {
      options = ConnectionConfig.parseUrl(options);
    } else if (options && options.uri) {
      const uriOptions = ConnectionConfig.parseUrl(options.uri);
      for (const key in uriOptions) {
        if (!Object.prototype.hasOwnProperty.call(uriOptions, key)) continue;
        if (options[key]) continue;
        options[key] = uriOptions[key];
      }
    }
    for (const key in options) {
      if (!Object.prototype.hasOwnProperty.call(options, key)) continue;
      if (validOptions[key] !== 1) {
        // REVIEW: Should this be emitted somehow?
        console.error(
          \`Ignoring invalid configuration option passed to Connection: \${key}. This is currently a warning, but in future versions of MySQL2, an error will be thrown if you pass an invalid configuration option to a Connection\`
        );
      }
    }
    this.isServer = options.isServer;
    this.stream = options.stream;
    this.host = options.host || 'localhost';
    this.port =
      (typeof options.port === 'string'
        ? parseInt(options.port, 10)
        : options.port) || 3306;
    this.localAddress = options.localAddress;
    this.socketPath = options.socketPath;
    this.user = options.user || undefined;
    // for the purpose of multi-factor authentication, or not, the main
    // password (used for the 1st authentication factor) can also be
    // provided via the "password1" option
    this.password = options.password || options.password1 || undefined;
    this.password2 = options.password2 || undefined;
    this.password3 = options.password3 || undefined;
    this.passwordSha1 = options.passwordSha1 || undefined;
    this.database = options.database;
    this.connectTimeout = isNaN(options.connectTimeout)
      ? 10 * 1000
      : options.connectTimeout;
    this.insecureAuth = options.insecureAuth || false;
    this.infileStreamFactory = options.infileStreamFactory || undefined;
    this.supportBigNumbers = options.supportBigNumbers || false;
    this.bigNumberStrings = options.bigNumberStrings || false;
    this.decimalNumbers = options.decimalNumbers || false;
    this.dateStrings = options.dateStrings || false;
    this.debug = options.debug;
    this.trace = options.trace !== false;
    this.stringifyObjects = options.stringifyObjects || false;
    this.enableKeepAlive = options.enableKeepAlive !== false;
    this.keepAliveInitialDelay = options.keepAliveInitialDelay;
    if (
      options.timezone &&
      !/^(?:local|Z|[ +-]\\d\\d:\\d\\d)$/.test(options.timezone)
    ) {
      // strictly supports timezones specified by mysqljs/mysql:
      // https://github.com/mysqljs/mysql#user-content-connection-options

      console.error(
        \`Ignoring invalid timezone passed to Connection: \${options.timezone}. This is currently a warning, but in future versions of MySQL2, an error will be thrown if you pass an invalid configuration option to a Connection\`
      );
      // SqlStrings falls back to UTC on invalid timezone
      this.timezone = 'Z';
    } else {
      this.timezone = options.timezone || 'local';
    }
    this.queryFormat = options.queryFormat;
    this.pool = options.pool || undefined;
    this.ssl =
      typeof options.ssl === 'string'
        ? ConnectionConfig.getSSLProfile(options.ssl)
        : options.ssl || false;
    this.multipleStatements = options.multipleStatements || false;
    this.rowsAsArray = options.rowsAsArray || false;
    this.namedPlaceholders = options.namedPlaceholders || false;
    this.nestTables =
      options.nestTables === undefined ? undefined : options.nestTables;
    this.typeCast = options.typeCast === undefined ? true : options.typeCast;
    this.disableEval = Boolean(options.disableEval);
    this.enableCleartextPlugin = Boolean(options.enableCleartextPlugin);
    if (this.timezone[0] === ' ') {
      // "+" is a url encoded char for space so it
      // gets translated to space when giving a
      // connection string..
      this.timezone = \`+\${this.timezone.slice(1)}\`;
    }
    if (this.ssl) {
      if (typeof this.ssl !== 'object') {
        throw new TypeError(
          \`SSL profile must be an object, instead it's a \${typeof this.ssl}\`
        );
      }
      // Default rejectUnauthorized to true
      this.ssl.rejectUnauthorized = this.ssl.rejectUnauthorized !== false;
    }
    this.maxPacketSize = 0;
    this.charsetNumber = options.charset
      ? ConnectionConfig.getCharsetNumber(options.charset)
      : options.charsetNumber || Charsets.UTF8MB4_UNICODE_CI;
    this.compress = options.compress || false;
    this.authPlugins = options.authPlugins;
    this.authSwitchHandler = options.authSwitchHandler;
    this.clientFlags = ConnectionConfig.mergeFlags(
      ConnectionConfig.getDefaultFlags(options),
      options.flags || ''
    );
    // Default connection attributes
    // https://dev.mysql.com/doc/refman/8.0/en/performance-schema-connection-attribute-tables.html
    const defaultConnectAttributes = {
      _client_name: 'Node-MySQL-2',
      _client_version: version,
    };
    this.connectAttributes = {
      ...defaultConnectAttributes,
      ...(options.connectAttributes || {}),
    };
    this.maxPreparedStatements = options.maxPreparedStatements || 16000;
    this.jsonStrings = options.jsonStrings || false;
    this.gracefulEnd = options.gracefulEnd || false;
  }

  static mergeFlags(default_flags, user_flags) {
    let flags = 0x0,
      i;
    if (!Array.isArray(user_flags)) {
      user_flags = String(user_flags || '')
        .toUpperCase()
        .split(/\\s*,+\\s*/);
    }
    // add default flags unless "blacklisted"
    for (i in default_flags) {
      if (user_flags.indexOf(\`-\${default_flags[i]}\`) >= 0) {
        continue;
      }
      flags |= ClientConstants[default_flags[i]] || 0x0;
    }
    // add user flags unless already already added
    for (i in user_flags) {
      if (user_flags[i][0] === '-') {
        continue;
      }
      if (default_flags.indexOf(user_flags[i]) >= 0) {
        continue;
      }
      flags |= ClientConstants[user_flags[i]] || 0x0;
    }
    return flags;
  }

  static getDefaultFlags(options) {
    const defaultFlags = [
      'LONG_PASSWORD',
      'FOUND_ROWS',
      'LONG_FLAG',
      'CONNECT_WITH_DB',
      'ODBC',
      'LOCAL_FILES',
      'IGNORE_SPACE',
      'PROTOCOL_41',
      'IGNORE_SIGPIPE',
      'TRANSACTIONS',
      'RESERVED',
      'SECURE_CONNECTION',
      'MULTI_RESULTS',
      'TRANSACTIONS',
      'SESSION_TRACK',
      'CONNECT_ATTRS',
      'CLIENT_QUERY_ATTRIBUTES',
    ];
    if (options && options.multipleStatements) {
      defaultFlags.push('MULTI_STATEMENTS');
    }
    defaultFlags.push('PLUGIN_AUTH');
    defaultFlags.push('PLUGIN_AUTH_LENENC_CLIENT_DATA');

    return defaultFlags;
  }

  static getCharsetNumber(charset) {
    const num = Charsets[charset.toUpperCase()];
    if (num === undefined) {
      throw new TypeError(\`Unknown charset '\${charset}'\`);
    }
    return num;
  }

  static getSSLProfile(name) {
    if (!SSLProfiles) {
      SSLProfiles = __webpack_require__(4632);
    }
    const ssl = SSLProfiles[name];
    if (ssl === undefined) {
      throw new TypeError(\`Unknown SSL profile '\${name}'\`);
    }
    return ssl;
  }

  static parseUrl(url) {
    const parsedUrl = new URL(url);
    const options = {
      host: decodeURIComponent(parsedUrl.hostname),
      port: parseInt(parsedUrl.port, 10),
      database: decodeURIComponent(parsedUrl.pathname.slice(1)),
      user: decodeURIComponent(parsedUrl.username),
      password: decodeURIComponent(parsedUrl.password),
    };
    for (const [key, value] of parsedUrl.searchParams) {
      if (key in options) {
        continue;
      }
      try {
        // Try to parse this as a JSON expression first
        options[key] = JSON.parse(value);
      } catch {
        // Otherwise assume it is a plain string
        options[key] = value;
      }
    }
    return options;
  }
}

module.exports = ConnectionConfig;


/***/ },

/***/ 3160
(module) {



// see tools/generate-charset-mapping.js
// basicalliy result of "SHOW COLLATION" query

const encodings = [
  'utf8',
  'big5',
  'latin2',
  'dec8',
  'cp850',
  'latin1',
  'hp8',
  'koi8r',
  'latin1',
  'latin2',
  'swe7',
  'ascii',
  'eucjp',
  'sjis',
  'cp1251',
  'latin1',
  'hebrew',
  'utf8',
  'tis620',
  'euckr',
  'latin7',
  'latin2',
  'koi8u',
  'cp1251',
  'gb2312',
  'greek',
  'cp1250',
  'latin2',
  'gbk',
  'cp1257',
  'latin5',
  'latin1',
  'armscii8',
  'cesu8',
  'cp1250',
  'ucs2',
  'cp866',
  'keybcs2',
  'macintosh',
  'macroman',
  'cp852',
  'latin7',
  'latin7',
  'macintosh',
  'cp1250',
  'utf8',
  'utf8',
  'latin1',
  'latin1',
  'latin1',
  'cp1251',
  'cp1251',
  'cp1251',
  'macroman',
  'utf16',
  'utf16',
  'utf16-le',
  'cp1256',
  'cp1257',
  'cp1257',
  'utf32',
  'utf32',
  'utf16-le',
  'binary',
  'armscii8',
  'ascii',
  'cp1250',
  'cp1256',
  'cp866',
  'dec8',
  'greek',
  'hebrew',
  'hp8',
  'keybcs2',
  'koi8r',
  'koi8u',
  'cesu8',
  'latin2',
  'latin5',
  'latin7',
  'cp850',
  'cp852',
  'swe7',
  'cesu8',
  'big5',
  'euckr',
  'gb2312',
  'gbk',
  'sjis',
  'tis620',
  'ucs2',
  'eucjp',
  'geostd8',
  'geostd8',
  'latin1',
  'cp932',
  'cp932',
  'eucjpms',
  'eucjpms',
  'cp1250',
  'utf16',
  'utf16',
  'utf16',
  'utf16',
  'utf16',
  'utf16',
  'utf16',
  'utf16',
  'utf16',
  'utf16',
  'utf16',
  'utf16',
  'utf16',
  'utf16',
  'utf16',
  'utf16',
  'utf16',
  'utf16',
  'utf16',
  'utf16',
  'utf16',
  'utf16',
  'utf16',
  'utf16',
  'utf16',
  'utf8',
  'utf8',
  'utf8',
  'ucs2',
  'ucs2',
  'ucs2',
  'ucs2',
  'ucs2',
  'ucs2',
  'ucs2',
  'ucs2',
  'ucs2',
  'ucs2',
  'ucs2',
  'ucs2',
  'ucs2',
  'ucs2',
  'ucs2',
  'ucs2',
  'ucs2',
  'ucs2',
  'ucs2',
  'ucs2',
  'ucs2',
  'ucs2',
  'ucs2',
  'ucs2',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'ucs2',
  'utf32',
  'utf32',
  'utf32',
  'utf32',
  'utf32',
  'utf32',
  'utf32',
  'utf32',
  'utf32',
  'utf32',
  'utf32',
  'utf32',
  'utf32',
  'utf32',
  'utf32',
  'utf32',
  'utf32',
  'utf32',
  'utf32',
  'utf32',
  'utf32',
  'utf32',
  'utf32',
  'utf32',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'cesu8',
  'cesu8',
  'cesu8',
  'cesu8',
  'cesu8',
  'cesu8',
  'cesu8',
  'cesu8',
  'cesu8',
  'cesu8',
  'cesu8',
  'cesu8',
  'cesu8',
  'cesu8',
  'cesu8',
  'cesu8',
  'cesu8',
  'cesu8',
  'cesu8',
  'cesu8',
  'cesu8',
  'cesu8',
  'cesu8',
  'cesu8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'cesu8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'gb18030',
  'gb18030',
  'gb18030',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
  'utf8',
];

// MariaDB NO PAD collations mirror their PAD SPACE counterparts:
// collation id = PAD SPACE collation id + 1024
const padSpaceLength = encodings.length;
for (let id = 1025; id < 1024 + padSpaceLength; id++) {
  encodings[id] = encodings[id - 1024];
}

// MariaDB UCA-14.0.0 (uca1400) collations use fixed 256-id blocks
// per character set, each covering the PAD SPACE and NO PAD variants
const uca1400Blocks = [
  [2048, 'cesu8'], // utf8mb3
  [2304, 'utf8'], // utf8mb4
  [2560, 'ucs2'], // ucs2
  [2816, 'utf16'], // utf16
  [3072, 'utf32'], // utf32
];
for (const [start, encoding] of uca1400Blocks) {
  for (let id = start; id < start + 256; id++) {
    encodings[id] = encoding;
  }
}

module.exports = encodings;


/***/ },

/***/ 660
(__unused_webpack_module, exports) {



exports.BIG5_CHINESE_CI = 1;
exports.LATIN2_CZECH_CS = 2;
exports.DEC8_SWEDISH_CI = 3;
exports.CP850_GENERAL_CI = 4;
exports.LATIN1_GERMAN1_CI = 5;
exports.HP8_ENGLISH_CI = 6;
exports.KOI8R_GENERAL_CI = 7;
exports.LATIN1_SWEDISH_CI = 8;
exports.LATIN2_GENERAL_CI = 9;
exports.SWE7_SWEDISH_CI = 10;
exports.ASCII_GENERAL_CI = 11;
exports.UJIS_JAPANESE_CI = 12;
exports.SJIS_JAPANESE_CI = 13;
exports.CP1251_BULGARIAN_CI = 14;
exports.LATIN1_DANISH_CI = 15;
exports.HEBREW_GENERAL_CI = 16;
exports.TIS620_THAI_CI = 18;
exports.EUCKR_KOREAN_CI = 19;
exports.LATIN7_ESTONIAN_CS = 20;
exports.LATIN2_HUNGARIAN_CI = 21;
exports.KOI8U_GENERAL_CI = 22;
exports.CP1251_UKRAINIAN_CI = 23;
exports.GB2312_CHINESE_CI = 24;
exports.GREEK_GENERAL_CI = 25;
exports.CP1250_GENERAL_CI = 26;
exports.LATIN2_CROATIAN_CI = 27;
exports.GBK_CHINESE_CI = 28;
exports.CP1257_LITHUANIAN_CI = 29;
exports.LATIN5_TURKISH_CI = 30;
exports.LATIN1_GERMAN2_CI = 31;
exports.ARMSCII8_GENERAL_CI = 32;
exports.UTF8_GENERAL_CI = 33;
exports.CP1250_CZECH_CS = 34;
exports.UCS2_GENERAL_CI = 35;
exports.CP866_GENERAL_CI = 36;
exports.KEYBCS2_GENERAL_CI = 37;
exports.MACCE_GENERAL_CI = 38;
exports.MACROMAN_GENERAL_CI = 39;
exports.CP852_GENERAL_CI = 40;
exports.LATIN7_GENERAL_CI = 41;
exports.LATIN7_GENERAL_CS = 42;
exports.MACCE_BIN = 43;
exports.CP1250_CROATIAN_CI = 44;
exports.UTF8MB4_GENERAL_CI = 45;
exports.UTF8MB4_BIN = 46;
exports.LATIN1_BIN = 47;
exports.LATIN1_GENERAL_CI = 48;
exports.LATIN1_GENERAL_CS = 49;
exports.CP1251_BIN = 50;
exports.CP1251_GENERAL_CI = 51;
exports.CP1251_GENERAL_CS = 52;
exports.MACROMAN_BIN = 53;
exports.UTF16_GENERAL_CI = 54;
exports.UTF16_BIN = 55;
exports.UTF16LE_GENERAL_CI = 56;
exports.CP1256_GENERAL_CI = 57;
exports.CP1257_BIN = 58;
exports.CP1257_GENERAL_CI = 59;
exports.UTF32_GENERAL_CI = 60;
exports.UTF32_BIN = 61;
exports.UTF16LE_BIN = 62;
exports.BINARY = 63;
exports.ARMSCII8_BIN = 64;
exports.ASCII_BIN = 65;
exports.CP1250_BIN = 66;
exports.CP1256_BIN = 67;
exports.CP866_BIN = 68;
exports.DEC8_BIN = 69;
exports.GREEK_BIN = 70;
exports.HEBREW_BIN = 71;
exports.HP8_BIN = 72;
exports.KEYBCS2_BIN = 73;
exports.KOI8R_BIN = 74;
exports.KOI8U_BIN = 75;
exports.UTF8_TOLOWER_CI = 76;
exports.LATIN2_BIN = 77;
exports.LATIN5_BIN = 78;
exports.LATIN7_BIN = 79;
exports.CP850_BIN = 80;
exports.CP852_BIN = 81;
exports.SWE7_BIN = 82;
exports.UTF8_BIN = 83;
exports.BIG5_BIN = 84;
exports.EUCKR_BIN = 85;
exports.GB2312_BIN = 86;
exports.GBK_BIN = 87;
exports.SJIS_BIN = 88;
exports.TIS620_BIN = 89;
exports.UCS2_BIN = 90;
exports.UJIS_BIN = 91;
exports.GEOSTD8_GENERAL_CI = 92;
exports.GEOSTD8_BIN = 93;
exports.LATIN1_SPANISH_CI = 94;
exports.CP932_JAPANESE_CI = 95;
exports.CP932_BIN = 96;
exports.EUCJPMS_JAPANESE_CI = 97;
exports.EUCJPMS_BIN = 98;
exports.CP1250_POLISH_CI = 99;
exports.UTF16_UNICODE_CI = 101;
exports.UTF16_ICELANDIC_CI = 102;
exports.UTF16_LATVIAN_CI = 103;
exports.UTF16_ROMANIAN_CI = 104;
exports.UTF16_SLOVENIAN_CI = 105;
exports.UTF16_POLISH_CI = 106;
exports.UTF16_ESTONIAN_CI = 107;
exports.UTF16_SPANISH_CI = 108;
exports.UTF16_SWEDISH_CI = 109;
exports.UTF16_TURKISH_CI = 110;
exports.UTF16_CZECH_CI = 111;
exports.UTF16_DANISH_CI = 112;
exports.UTF16_LITHUANIAN_CI = 113;
exports.UTF16_SLOVAK_CI = 114;
exports.UTF16_SPANISH2_CI = 115;
exports.UTF16_ROMAN_CI = 116;
exports.UTF16_PERSIAN_CI = 117;
exports.UTF16_ESPERANTO_CI = 118;
exports.UTF16_HUNGARIAN_CI = 119;
exports.UTF16_SINHALA_CI = 120;
exports.UTF16_GERMAN2_CI = 121;
exports.UTF16_CROATIAN_CI = 122;
exports.UTF16_UNICODE_520_CI = 123;
exports.UTF16_VIETNAMESE_CI = 124;
exports.UCS2_UNICODE_CI = 128;
exports.UCS2_ICELANDIC_CI = 129;
exports.UCS2_LATVIAN_CI = 130;
exports.UCS2_ROMANIAN_CI = 131;
exports.UCS2_SLOVENIAN_CI = 132;
exports.UCS2_POLISH_CI = 133;
exports.UCS2_ESTONIAN_CI = 134;
exports.UCS2_SPANISH_CI = 135;
exports.UCS2_SWEDISH_CI = 136;
exports.UCS2_TURKISH_CI = 137;
exports.UCS2_CZECH_CI = 138;
exports.UCS2_DANISH_CI = 139;
exports.UCS2_LITHUANIAN_CI = 140;
exports.UCS2_SLOVAK_CI = 141;
exports.UCS2_SPANISH2_CI = 142;
exports.UCS2_ROMAN_CI = 143;
exports.UCS2_PERSIAN_CI = 144;
exports.UCS2_ESPERANTO_CI = 145;
exports.UCS2_HUNGARIAN_CI = 146;
exports.UCS2_SINHALA_CI = 147;
exports.UCS2_GERMAN2_CI = 148;
exports.UCS2_CROATIAN_CI = 149;
exports.UCS2_UNICODE_520_CI = 150;
exports.UCS2_VIETNAMESE_CI = 151;
exports.UCS2_GENERAL_MYSQL500_CI = 159;
exports.UTF32_UNICODE_CI = 160;
exports.UTF32_ICELANDIC_CI = 161;
exports.UTF32_LATVIAN_CI = 162;
exports.UTF32_ROMANIAN_CI = 163;
exports.UTF32_SLOVENIAN_CI = 164;
exports.UTF32_POLISH_CI = 165;
exports.UTF32_ESTONIAN_CI = 166;
exports.UTF32_SPANISH_CI = 167;
exports.UTF32_SWEDISH_CI = 168;
exports.UTF32_TURKISH_CI = 169;
exports.UTF32_CZECH_CI = 170;
exports.UTF32_DANISH_CI = 171;
exports.UTF32_LITHUANIAN_CI = 172;
exports.UTF32_SLOVAK_CI = 173;
exports.UTF32_SPANISH2_CI = 174;
exports.UTF32_ROMAN_CI = 175;
exports.UTF32_PERSIAN_CI = 176;
exports.UTF32_ESPERANTO_CI = 177;
exports.UTF32_HUNGARIAN_CI = 178;
exports.UTF32_SINHALA_CI = 179;
exports.UTF32_GERMAN2_CI = 180;
exports.UTF32_CROATIAN_CI = 181;
exports.UTF32_UNICODE_520_CI = 182;
exports.UTF32_VIETNAMESE_CI = 183;
exports.UTF8_UNICODE_CI = 192;
exports.UTF8_ICELANDIC_CI = 193;
exports.UTF8_LATVIAN_CI = 194;
exports.UTF8_ROMANIAN_CI = 195;
exports.UTF8_SLOVENIAN_CI = 196;
exports.UTF8_POLISH_CI = 197;
exports.UTF8_ESTONIAN_CI = 198;
exports.UTF8_SPANISH_CI = 199;
exports.UTF8_SWEDISH_CI = 200;
exports.UTF8_TURKISH_CI = 201;
exports.UTF8_CZECH_CI = 202;
exports.UTF8_DANISH_CI = 203;
exports.UTF8_LITHUANIAN_CI = 204;
exports.UTF8_SLOVAK_CI = 205;
exports.UTF8_SPANISH2_CI = 206;
exports.UTF8_ROMAN_CI = 207;
exports.UTF8_PERSIAN_CI = 208;
exports.UTF8_ESPERANTO_CI = 209;
exports.UTF8_HUNGARIAN_CI = 210;
exports.UTF8_SINHALA_CI = 211;
exports.UTF8_GERMAN2_CI = 212;
exports.UTF8_CROATIAN_CI = 213;
exports.UTF8_UNICODE_520_CI = 214;
exports.UTF8_VIETNAMESE_CI = 215;
exports.UTF8_GENERAL_MYSQL500_CI = 223;
exports.UTF8MB4_UNICODE_CI = 224;
exports.UTF8MB4_ICELANDIC_CI = 225;
exports.UTF8MB4_LATVIAN_CI = 226;
exports.UTF8MB4_ROMANIAN_CI = 227;
exports.UTF8MB4_SLOVENIAN_CI = 228;
exports.UTF8MB4_POLISH_CI = 229;
exports.UTF8MB4_ESTONIAN_CI = 230;
exports.UTF8MB4_SPANISH_CI = 231;
exports.UTF8MB4_SWEDISH_CI = 232;
exports.UTF8MB4_TURKISH_CI = 233;
exports.UTF8MB4_CZECH_CI = 234;
exports.UTF8MB4_DANISH_CI = 235;
exports.UTF8MB4_LITHUANIAN_CI = 236;
exports.UTF8MB4_SLOVAK_CI = 237;
exports.UTF8MB4_SPANISH2_CI = 238;
exports.UTF8MB4_ROMAN_CI = 239;
exports.UTF8MB4_PERSIAN_CI = 240;
exports.UTF8MB4_ESPERANTO_CI = 241;
exports.UTF8MB4_HUNGARIAN_CI = 242;
exports.UTF8MB4_SINHALA_CI = 243;
exports.UTF8MB4_GERMAN2_CI = 244;
exports.UTF8MB4_CROATIAN_CI = 245;
exports.UTF8MB4_UNICODE_520_CI = 246;
exports.UTF8MB4_VIETNAMESE_CI = 247;
exports.GB18030_CHINESE_CI = 248;
exports.GB18030_BIN = 249;
exports.GB18030_UNICODE_520_CI = 250;
exports.UTF8_GENERAL50_CI = 253; // deprecated
exports.UTF8MB4_0900_AI_CI = 255;
exports.UTF8MB4_DE_PB_0900_AI_CI = 256;
exports.UTF8MB4_IS_0900_AI_CI = 257;
exports.UTF8MB4_LV_0900_AI_CI = 258;
exports.UTF8MB4_RO_0900_AI_CI = 259;
exports.UTF8MB4_SL_0900_AI_CI = 260;
exports.UTF8MB4_PL_0900_AI_CI = 261;
exports.UTF8MB4_ET_0900_AI_CI = 262;
exports.UTF8MB4_ES_0900_AI_CI = 263;
exports.UTF8MB4_SV_0900_AI_CI = 264;
exports.UTF8MB4_TR_0900_AI_CI = 265;
exports.UTF8MB4_CS_0900_AI_CI = 266;
exports.UTF8MB4_DA_0900_AI_CI = 267;
exports.UTF8MB4_LT_0900_AI_CI = 268;
exports.UTF8MB4_SK_0900_AI_CI = 269;
exports.UTF8MB4_ES_TRAD_0900_AI_CI = 270;
exports.UTF8MB4_LA_0900_AI_CI = 271;
exports.UTF8MB4_EO_0900_AI_CI = 273;
exports.UTF8MB4_HU_0900_AI_CI = 274;
exports.UTF8MB4_HR_0900_AI_CI = 275;
exports.UTF8MB4_VI_0900_AI_CI = 277;
exports.UTF8MB4_0900_AS_CS = 278;
exports.UTF8MB4_DE_PB_0900_AS_CS = 279;
exports.UTF8MB4_IS_0900_AS_CS = 280;
exports.UTF8MB4_LV_0900_AS_CS = 281;
exports.UTF8MB4_RO_0900_AS_CS = 282;
exports.UTF8MB4_SL_0900_AS_CS = 283;
exports.UTF8MB4_PL_0900_AS_CS = 284;
exports.UTF8MB4_ET_0900_AS_CS = 285;
exports.UTF8MB4_ES_0900_AS_CS = 286;
exports.UTF8MB4_SV_0900_AS_CS = 287;
exports.UTF8MB4_TR_0900_AS_CS = 288;
exports.UTF8MB4_CS_0900_AS_CS = 289;
exports.UTF8MB4_DA_0900_AS_CS = 290;
exports.UTF8MB4_LT_0900_AS_CS = 291;
exports.UTF8MB4_SK_0900_AS_CS = 292;
exports.UTF8MB4_ES_TRAD_0900_AS_CS = 293;
exports.UTF8MB4_LA_0900_AS_CS = 294;
exports.UTF8MB4_EO_0900_AS_CS = 296;
exports.UTF8MB4_HU_0900_AS_CS = 297;
exports.UTF8MB4_HR_0900_AS_CS = 298;
exports.UTF8MB4_VI_0900_AS_CS = 300;
exports.UTF8MB4_JA_0900_AS_CS = 303;
exports.UTF8MB4_JA_0900_AS_CS_KS = 304;
exports.UTF8MB4_0900_AS_CI = 305;
exports.UTF8MB4_RU_0900_AI_CI = 306;
exports.UTF8MB4_RU_0900_AS_CS = 307;
exports.UTF8MB4_ZH_0900_AS_CS = 308;
exports.UTF8MB4_0900_BIN = 309;

// short aliases
exports.BIG5 = exports.BIG5_CHINESE_CI;
exports.DEC8 = exports.DEC8_SWEDISH_CI;
exports.CP850 = exports.CP850_GENERAL_CI;
exports.HP8 = exports.HP8_ENGLISH_CI;
exports.KOI8R = exports.KOI8R_GENERAL_CI;
exports.LATIN1 = exports.LATIN1_SWEDISH_CI;
exports.LATIN2 = exports.LATIN2_GENERAL_CI;
exports.SWE7 = exports.SWE7_SWEDISH_CI;
exports.ASCII = exports.ASCII_GENERAL_CI;
exports.UJIS = exports.UJIS_JAPANESE_CI;
exports.SJIS = exports.SJIS_JAPANESE_CI;
exports.HEBREW = exports.HEBREW_GENERAL_CI;
exports.TIS620 = exports.TIS620_THAI_CI;
exports.EUCKR = exports.EUCKR_KOREAN_CI;
exports.KOI8U = exports.KOI8U_GENERAL_CI;
exports.GB2312 = exports.GB2312_CHINESE_CI;
exports.GREEK = exports.GREEK_GENERAL_CI;
exports.CP1250 = exports.CP1250_GENERAL_CI;
exports.GBK = exports.GBK_CHINESE_CI;
exports.LATIN5 = exports.LATIN5_TURKISH_CI;
exports.ARMSCII8 = exports.ARMSCII8_GENERAL_CI;
exports.UTF8 = exports.UTF8_GENERAL_CI;
exports.UCS2 = exports.UCS2_GENERAL_CI;
exports.CP866 = exports.CP866_GENERAL_CI;
exports.KEYBCS2 = exports.KEYBCS2_GENERAL_CI;
exports.MACCE = exports.MACCE_GENERAL_CI;
exports.MACROMAN = exports.MACROMAN_GENERAL_CI;
exports.CP852 = exports.CP852_GENERAL_CI;
exports.LATIN7 = exports.LATIN7_GENERAL_CI;
exports.UTF8MB4 = exports.UTF8MB4_GENERAL_CI;
exports.CP1251 = exports.CP1251_GENERAL_CI;
exports.UTF16 = exports.UTF16_GENERAL_CI;
exports.UTF16LE = exports.UTF16LE_GENERAL_CI;
exports.CP1256 = exports.CP1256_GENERAL_CI;
exports.CP1257 = exports.CP1257_GENERAL_CI;
exports.UTF32 = exports.UTF32_GENERAL_CI;
exports.CP932 = exports.CP932_JAPANESE_CI;
exports.EUCJPMS = exports.EUCJPMS_JAPANESE_CI;
exports.GB18030 = exports.GB18030_CHINESE_CI;
exports.GEOSTD8 = exports.GEOSTD8_GENERAL_CI;


/***/ },

/***/ 3930
(__unused_webpack_module, exports) {

// This file was modified by Oracle on September 21, 2021.
// New capability for multi-factor authentication based on mandatory session
// trackers, that are signaled with an extra single-byte prefix on new
// versions of the MySQL server.
// Modifications copyright (c) 2021, Oracle and/or its affiliates.



// Manually extracted from mysql-5.5.23/include/mysql_com.h
exports.LONG_PASSWORD = 0x00000001; /* new more secure passwords */
exports.FOUND_ROWS = 0x00000002; /* found instead of affected rows */
exports.LONG_FLAG = 0x00000004; /* get all column flags */
exports.CONNECT_WITH_DB = 0x00000008; /* one can specify db on connect */
exports.NO_SCHEMA = 0x00000010; /* don't allow database.table.column */
exports.COMPRESS = 0x00000020; /* can use compression protocol */
exports.ODBC = 0x00000040; /* odbc client */
exports.LOCAL_FILES = 0x00000080; /* can use LOAD DATA LOCAL */
exports.IGNORE_SPACE = 0x00000100; /* ignore spaces before '' */
exports.PROTOCOL_41 = 0x00000200; /* new 4.1 protocol */
exports.INTERACTIVE = 0x00000400; /* this is an interactive client */
exports.SSL = 0x00000800; /* switch to ssl after handshake */
exports.IGNORE_SIGPIPE = 0x00001000; /* IGNORE sigpipes */
exports.TRANSACTIONS = 0x00002000; /* client knows about transactions */
exports.RESERVED = 0x00004000; /* old flag for 4.1 protocol  */
exports.SECURE_CONNECTION = 0x00008000; /* new 4.1 authentication */
exports.MULTI_STATEMENTS = 0x00010000; /* enable/disable multi-stmt support */
exports.MULTI_RESULTS = 0x00020000; /* enable/disable multi-results */
exports.PS_MULTI_RESULTS = 0x00040000; /* multi-results in ps-protocol */
exports.PLUGIN_AUTH = 0x00080000; /* client supports plugin authentication */
exports.CONNECT_ATTRS = 0x00100000; /* permits connection attributes */
exports.PLUGIN_AUTH_LENENC_CLIENT_DATA = 0x00200000; /* Understands length-encoded integer for auth response data in Protocol::HandshakeResponse41. */
exports.CAN_HANDLE_EXPIRED_PASSWORDS = 0x00400000; /* Announces support for expired password extension. */
exports.SESSION_TRACK = 0x00800000; /* Can set SERVER_SESSION_STATE_CHANGED in the Status Flags and send session-state change data after a OK packet. */
exports.CLIENT_QUERY_ATTRIBUTES = 0x08000000; /* support query attributes in COM_QUERY and COM_STMT_EXECUTE */

exports.SSL_VERIFY_SERVER_CERT = 0x40000000;
exports.REMEMBER_OPTIONS = 0x80000000;

exports.MULTI_FACTOR_AUTHENTICATION = 0x10000000; /* multi-factor authentication */


/***/ },

/***/ 7015
(module) {



module.exports = {
  ...(/* unused pure expression */ null && (0x00)), // deprecated
  QUIT: 0x01,
  INIT_DB: 0x02,
  QUERY: 0x03,
  FIELD_LIST: 0x04,
  ...(/* unused pure expression */ null && (0x05)),
  ...(/* unused pure expression */ null && (0x06)),
  ...(/* unused pure expression */ null && (0x07)),
  ...(/* unused pure expression */ null && (0x08)),
  ...(/* unused pure expression */ null && (0x09)),
  ...(/* unused pure expression */ null && (0x0a)), // deprecated
  ...(/* unused pure expression */ null && (0x0b)), // deprecated
  ...(/* unused pure expression */ null && (0x0c)),
  ...(/* unused pure expression */ null && (0x0d)),
  PING: 0x0e,
  ...(/* unused pure expression */ null && (0x0f)), // deprecated
  ...(/* unused pure expression */ null && (0x10)), // deprecated
  CHANGE_USER: 0x11,
  BINLOG_DUMP: 0x12,
  ...(/* unused pure expression */ null && (0x13)),
  ...(/* unused pure expression */ null && (0x14)),
  REGISTER_SLAVE: 0x15,
  STMT_PREPARE: 0x16,
  STMT_EXECUTE: 0x17,
  ...(/* unused pure expression */ null && (0x18)),
  STMT_CLOSE: 0x19,
  ...(/* unused pure expression */ null && (0x1a)),
  ...(/* unused pure expression */ null && (0x1b)),
  ...(/* unused pure expression */ null && (0x1c)),
  ...(/* unused pure expression */ null && (0x1d)), // deprecated
  ...(/* unused pure expression */ null && (0x1e)),
  RESET_CONNECTION: 0x1f, // introduced in 5.7.3
  ...(/* unused pure expression */ null && (0xff)), // bad!
};


/***/ },

/***/ 7903
(module) {



module.exports = {
  NO_CURSOR: 0,
  ...(/* unused pure expression */ null && (1)),
  ...(/* unused pure expression */ null && (2)),
  ...(/* unused pure expression */ null && (3)),
  PARAMETER_COUNT_AVAILABLE: 8,
};


/***/ },

/***/ 1351
(module) {



// inverse of charset_encodings
// given encoding, get matching mysql charset number

module.exports = {
  big5: 1,
  latin2: 2,
  dec8: 3,
  cp850: 4,
  latin1: 5,
  hp8: 6,
  koi8r: 7,
  swe7: 10,
  ascii: 11,
  eucjp: 12,
  sjis: 13,
  cp1251: 14,
  hebrew: 16,
  tis620: 18,
  euckr: 19,
  latin7: 20,
  koi8u: 22,
  gb2312: 24,
  greek: 25,
  cp1250: 26,
  gbk: 28,
  cp1257: 29,
  latin5: 30,
  armscii8: 32,
  cesu8: 33,
  ucs2: 35,
  cp866: 36,
  keybcs2: 37,
  macintosh: 38,
  macroman: 39,
  cp852: 40,
  utf8: 45,
  utf8mb4: 45,
  utf16: 54,
  utf16le: 56,
  cp1256: 57,
  utf32: 60,
  binary: 63,
  geostd8: 92,
  cp932: 95,
  eucjpms: 97,
  gb18030: 248,
  utf8mb3: 192,
};


/***/ },

/***/ 5014
(__unused_webpack_module, exports) {

// This file was modified by Oracle on June 1, 2021.
// An entry was created for a new error reported by the MySQL server due to
// client inactivity.
// Modifications copyright (c) 2021, Oracle and/or its affiliates.



// originally copied from https://raw.githubusercontent.com/mysqljs/mysql/7770ee5bb13260c56a160b91fe480d9165dbeeba/lib/protocol/constants/errors.js
// (c) node-mysql authors

// updated to contain error codes as is contained in MySQL 8.0
// by adapting node-mysql: /.../generate-error-constants.js

/**
 * MySQL error constants
 *
 * Extracted from version 8.0.33
 *
 * !! Generated by generate-error-constants.js, do not modify by hand !!
 */

exports.EE_CANTCREATEFILE = 1;
exports.EE_READ = 2;
exports.EE_WRITE = 3;
exports.EE_BADCLOSE = 4;
exports.EE_OUTOFMEMORY = 5;
exports.EE_DELETE = 6;
exports.EE_LINK = 7;
exports.EE_EOFERR = 9;
exports.EE_CANTLOCK = 10;
exports.EE_CANTUNLOCK = 11;
exports.EE_DIR = 12;
exports.EE_STAT = 13;
exports.EE_CANT_CHSIZE = 14;
exports.EE_CANT_OPEN_STREAM = 15;
exports.EE_GETWD = 16;
exports.EE_SETWD = 17;
exports.EE_LINK_WARNING = 18;
exports.EE_OPEN_WARNING = 19;
exports.EE_DISK_FULL = 20;
exports.EE_CANT_MKDIR = 21;
exports.EE_UNKNOWN_CHARSET = 22;
exports.EE_OUT_OF_FILERESOURCES = 23;
exports.EE_CANT_READLINK = 24;
exports.EE_CANT_SYMLINK = 25;
exports.EE_REALPATH = 26;
exports.EE_SYNC = 27;
exports.EE_UNKNOWN_COLLATION = 28;
exports.EE_FILENOTFOUND = 29;
exports.EE_FILE_NOT_CLOSED = 30;
exports.EE_CHANGE_OWNERSHIP = 31;
exports.EE_CHANGE_PERMISSIONS = 32;
exports.EE_CANT_SEEK = 33;
exports.EE_CAPACITY_EXCEEDED = 34;
exports.EE_DISK_FULL_WITH_RETRY_MSG = 35;
exports.EE_FAILED_TO_CREATE_TIMER = 36;
exports.EE_FAILED_TO_DELETE_TIMER = 37;
exports.EE_FAILED_TO_CREATE_TIMER_QUEUE = 38;
exports.EE_FAILED_TO_START_TIMER_NOTIFY_THREAD = 39;
exports.EE_FAILED_TO_CREATE_TIMER_NOTIFY_THREAD_INTERRUPT_EVENT = 40;
exports.EE_EXITING_TIMER_NOTIFY_THREAD = 41;
exports.EE_WIN_LIBRARY_LOAD_FAILED = 42;
exports.EE_WIN_RUN_TIME_ERROR_CHECK = 43;
exports.EE_FAILED_TO_DETERMINE_LARGE_PAGE_SIZE = 44;
exports.EE_FAILED_TO_KILL_ALL_THREADS = 45;
exports.EE_FAILED_TO_CREATE_IO_COMPLETION_PORT = 46;
exports.EE_FAILED_TO_OPEN_DEFAULTS_FILE = 47;
exports.EE_FAILED_TO_HANDLE_DEFAULTS_FILE = 48;
exports.EE_WRONG_DIRECTIVE_IN_CONFIG_FILE = 49;
exports.EE_SKIPPING_DIRECTIVE_DUE_TO_MAX_INCLUDE_RECURSION = 50;
exports.EE_INCORRECT_GRP_DEFINITION_IN_CONFIG_FILE = 51;
exports.EE_OPTION_WITHOUT_GRP_IN_CONFIG_FILE = 52;
exports.EE_CONFIG_FILE_PERMISSION_ERROR = 53;
exports.EE_IGNORE_WORLD_WRITABLE_CONFIG_FILE = 54;
exports.EE_USING_DISABLED_OPTION = 55;
exports.EE_USING_DISABLED_SHORT_OPTION = 56;
exports.EE_USING_PASSWORD_ON_CLI_IS_INSECURE = 57;
exports.EE_UNKNOWN_SUFFIX_FOR_VARIABLE = 58;
exports.EE_SSL_ERROR_FROM_FILE = 59;
exports.EE_SSL_ERROR = 60;
exports.EE_NET_SEND_ERROR_IN_BOOTSTRAP = 61;
exports.EE_PACKETS_OUT_OF_ORDER = 62;
exports.EE_UNKNOWN_PROTOCOL_OPTION = 63;
exports.EE_FAILED_TO_LOCATE_SERVER_PUBLIC_KEY = 64;
exports.EE_PUBLIC_KEY_NOT_IN_PEM_FORMAT = 65;
exports.EE_DEBUG_INFO = 66;
exports.EE_UNKNOWN_VARIABLE = 67;
exports.EE_UNKNOWN_OPTION = 68;
exports.EE_UNKNOWN_SHORT_OPTION = 69;
exports.EE_OPTION_WITHOUT_ARGUMENT = 70;
exports.EE_OPTION_REQUIRES_ARGUMENT = 71;
exports.EE_SHORT_OPTION_REQUIRES_ARGUMENT = 72;
exports.EE_OPTION_IGNORED_DUE_TO_INVALID_VALUE = 73;
exports.EE_OPTION_WITH_EMPTY_VALUE = 74;
exports.EE_FAILED_TO_ASSIGN_MAX_VALUE_TO_OPTION = 75;
exports.EE_INCORRECT_BOOLEAN_VALUE_FOR_OPTION = 76;
exports.EE_FAILED_TO_SET_OPTION_VALUE = 77;
exports.EE_INCORRECT_INT_VALUE_FOR_OPTION = 78;
exports.EE_INCORRECT_UINT_VALUE_FOR_OPTION = 79;
exports.EE_ADJUSTED_SIGNED_VALUE_FOR_OPTION = 80;
exports.EE_ADJUSTED_UNSIGNED_VALUE_FOR_OPTION = 81;
exports.EE_ADJUSTED_ULONGLONG_VALUE_FOR_OPTION = 82;
exports.EE_ADJUSTED_DOUBLE_VALUE_FOR_OPTION = 83;
exports.EE_INVALID_DECIMAL_VALUE_FOR_OPTION = 84;
exports.EE_COLLATION_PARSER_ERROR = 85;
exports.EE_FAILED_TO_RESET_BEFORE_PRIMARY_IGNORABLE_CHAR = 86;
exports.EE_FAILED_TO_RESET_BEFORE_TERTIARY_IGNORABLE_CHAR = 87;
exports.EE_SHIFT_CHAR_OUT_OF_RANGE = 88;
exports.EE_RESET_CHAR_OUT_OF_RANGE = 89;
exports.EE_UNKNOWN_LDML_TAG = 90;
exports.EE_FAILED_TO_RESET_BEFORE_SECONDARY_IGNORABLE_CHAR = 91;
exports.EE_FAILED_PROCESSING_DIRECTIVE = 92;
exports.EE_PTHREAD_KILL_FAILED = 93;
exports.HA_ERR_KEY_NOT_FOUND = 120;
exports.HA_ERR_FOUND_DUPP_KEY = 121;
exports.HA_ERR_INTERNAL_ERROR = 122;
exports.HA_ERR_RECORD_CHANGED = 123;
exports.HA_ERR_WRONG_INDEX = 124;
exports.HA_ERR_ROLLED_BACK = 125;
exports.HA_ERR_CRASHED = 126;
exports.HA_ERR_WRONG_IN_RECORD = 127;
exports.HA_ERR_OUT_OF_MEM = 128;
exports.HA_ERR_NOT_A_TABLE = 130;
exports.HA_ERR_WRONG_COMMAND = 131;
exports.HA_ERR_OLD_FILE = 132;
exports.HA_ERR_NO_ACTIVE_RECORD = 133;
exports.HA_ERR_RECORD_DELETED = 134;
exports.HA_ERR_RECORD_FILE_FULL = 135;
exports.HA_ERR_INDEX_FILE_FULL = 136;
exports.HA_ERR_END_OF_FILE = 137;
exports.HA_ERR_UNSUPPORTED = 138;
exports.HA_ERR_TOO_BIG_ROW = 139;
exports.HA_WRONG_CREATE_OPTION = 140;
exports.HA_ERR_FOUND_DUPP_UNIQUE = 141;
exports.HA_ERR_UNKNOWN_CHARSET = 142;
exports.HA_ERR_WRONG_MRG_TABLE_DEF = 143;
exports.HA_ERR_CRASHED_ON_REPAIR = 144;
exports.HA_ERR_CRASHED_ON_USAGE = 145;
exports.HA_ERR_LOCK_WAIT_TIMEOUT = 146;
exports.HA_ERR_LOCK_TABLE_FULL = 147;
exports.HA_ERR_READ_ONLY_TRANSACTION = 148;
exports.HA_ERR_LOCK_DEADLOCK = 149;
exports.HA_ERR_CANNOT_ADD_FOREIGN = 150;
exports.HA_ERR_NO_REFERENCED_ROW = 151;
exports.HA_ERR_ROW_IS_REFERENCED = 152;
exports.HA_ERR_NO_SAVEPOINT = 153;
exports.HA_ERR_NON_UNIQUE_BLOCK_SIZE = 154;
exports.HA_ERR_NO_SUCH_TABLE = 155;
exports.HA_ERR_TABLE_EXIST = 156;
exports.HA_ERR_NO_CONNECTION = 157;
exports.HA_ERR_NULL_IN_SPATIAL = 158;
exports.HA_ERR_TABLE_DEF_CHANGED = 159;
exports.HA_ERR_NO_PARTITION_FOUND = 160;
exports.HA_ERR_RBR_LOGGING_FAILED = 161;
exports.HA_ERR_DROP_INDEX_FK = 162;
exports.HA_ERR_FOREIGN_DUPLICATE_KEY = 163;
exports.HA_ERR_TABLE_NEEDS_UPGRADE = 164;
exports.HA_ERR_TABLE_READONLY = 165;
exports.HA_ERR_AUTOINC_READ_FAILED = 166;
exports.HA_ERR_AUTOINC_ERANGE = 167;
exports.HA_ERR_GENERIC = 168;
exports.HA_ERR_RECORD_IS_THE_SAME = 169;
exports.HA_ERR_LOGGING_IMPOSSIBLE = 170;
exports.HA_ERR_CORRUPT_EVENT = 171;
exports.HA_ERR_NEW_FILE = 172;
exports.HA_ERR_ROWS_EVENT_APPLY = 173;
exports.HA_ERR_INITIALIZATION = 174;
exports.HA_ERR_FILE_TOO_SHORT = 175;
exports.HA_ERR_WRONG_CRC = 176;
exports.HA_ERR_TOO_MANY_CONCURRENT_TRXS = 177;
exports.HA_ERR_NOT_IN_LOCK_PARTITIONS = 178;
exports.HA_ERR_INDEX_COL_TOO_LONG = 179;
exports.HA_ERR_INDEX_CORRUPT = 180;
exports.HA_ERR_UNDO_REC_TOO_BIG = 181;
exports.HA_FTS_INVALID_DOCID = 182;
exports.HA_ERR_TABLE_IN_FK_CHECK = 183;
exports.HA_ERR_TABLESPACE_EXISTS = 184;
exports.HA_ERR_TOO_MANY_FIELDS = 185;
exports.HA_ERR_ROW_IN_WRONG_PARTITION = 186;
exports.HA_ERR_INNODB_READ_ONLY = 187;
exports.HA_ERR_FTS_EXCEED_RESULT_CACHE_LIMIT = 188;
exports.HA_ERR_TEMP_FILE_WRITE_FAILURE = 189;
exports.HA_ERR_INNODB_FORCED_RECOVERY = 190;
exports.HA_ERR_FTS_TOO_MANY_WORDS_IN_PHRASE = 191;
exports.HA_ERR_FK_DEPTH_EXCEEDED = 192;
exports.HA_MISSING_CREATE_OPTION = 193;
exports.HA_ERR_SE_OUT_OF_MEMORY = 194;
exports.HA_ERR_TABLE_CORRUPT = 195;
exports.HA_ERR_QUERY_INTERRUPTED = 196;
exports.HA_ERR_TABLESPACE_MISSING = 197;
exports.HA_ERR_TABLESPACE_IS_NOT_EMPTY = 198;
exports.HA_ERR_WRONG_FILE_NAME = 199;
exports.HA_ERR_NOT_ALLOWED_COMMAND = 200;
exports.HA_ERR_COMPUTE_FAILED = 201;
exports.HA_ERR_ROW_FORMAT_CHANGED = 202;
exports.HA_ERR_NO_WAIT_LOCK = 203;
exports.HA_ERR_DISK_FULL_NOWAIT = 204;
exports.HA_ERR_NO_SESSION_TEMP = 205;
exports.HA_ERR_WRONG_TABLE_NAME = 206;
exports.HA_ERR_TOO_LONG_PATH = 207;
exports.HA_ERR_SAMPLING_INIT_FAILED = 208;
exports.HA_ERR_FTS_TOO_MANY_NESTED_EXP = 209;
exports.ER_HASHCHK = 1000;
exports.ER_NISAMCHK = 1001;
exports.ER_NO = 1002;
exports.ER_YES = 1003;
exports.ER_CANT_CREATE_FILE = 1004;
exports.ER_CANT_CREATE_TABLE = 1005;
exports.ER_CANT_CREATE_DB = 1006;
exports.ER_DB_CREATE_EXISTS = 1007;
exports.ER_DB_DROP_EXISTS = 1008;
exports.ER_DB_DROP_DELETE = 1009;
exports.ER_DB_DROP_RMDIR = 1010;
exports.ER_CANT_DELETE_FILE = 1011;
exports.ER_CANT_FIND_SYSTEM_REC = 1012;
exports.ER_CANT_GET_STAT = 1013;
exports.ER_CANT_GET_WD = 1014;
exports.ER_CANT_LOCK = 1015;
exports.ER_CANT_OPEN_FILE = 1016;
exports.ER_FILE_NOT_FOUND = 1017;
exports.ER_CANT_READ_DIR = 1018;
exports.ER_CANT_SET_WD = 1019;
exports.ER_CHECKREAD = 1020;
exports.ER_DISK_FULL = 1021;
exports.ER_DUP_KEY = 1022;
exports.ER_ERROR_ON_CLOSE = 1023;
exports.ER_ERROR_ON_READ = 1024;
exports.ER_ERROR_ON_RENAME = 1025;
exports.ER_ERROR_ON_WRITE = 1026;
exports.ER_FILE_USED = 1027;
exports.ER_FILSORT_ABORT = 1028;
exports.ER_FORM_NOT_FOUND = 1029;
exports.ER_GET_ERRNO = 1030;
exports.ER_ILLEGAL_HA = 1031;
exports.ER_KEY_NOT_FOUND = 1032;
exports.ER_NOT_FORM_FILE = 1033;
exports.ER_NOT_KEYFILE = 1034;
exports.ER_OLD_KEYFILE = 1035;
exports.ER_OPEN_AS_READONLY = 1036;
exports.ER_OUTOFMEMORY = 1037;
exports.ER_OUT_OF_SORTMEMORY = 1038;
exports.ER_UNEXPECTED_EOF = 1039;
exports.ER_CON_COUNT_ERROR = 1040;
exports.ER_OUT_OF_RESOURCES = 1041;
exports.ER_BAD_HOST_ERROR = 1042;
exports.ER_HANDSHAKE_ERROR = 1043;
exports.ER_DBACCESS_DENIED_ERROR = 1044;
exports.ER_ACCESS_DENIED_ERROR = 1045;
exports.ER_NO_DB_ERROR = 1046;
exports.ER_UNKNOWN_COM_ERROR = 1047;
exports.ER_BAD_NULL_ERROR = 1048;
exports.ER_BAD_DB_ERROR = 1049;
exports.ER_TABLE_EXISTS_ERROR = 1050;
exports.ER_BAD_TABLE_ERROR = 1051;
exports.ER_NON_UNIQ_ERROR = 1052;
exports.ER_SERVER_SHUTDOWN = 1053;
exports.ER_BAD_FIELD_ERROR = 1054;
exports.ER_WRONG_FIELD_WITH_GROUP = 1055;
exports.ER_WRONG_GROUP_FIELD = 1056;
exports.ER_WRONG_SUM_SELECT = 1057;
exports.ER_WRONG_VALUE_COUNT = 1058;
exports.ER_TOO_LONG_IDENT = 1059;
exports.ER_DUP_FIELDNAME = 1060;
exports.ER_DUP_KEYNAME = 1061;
exports.ER_DUP_ENTRY = 1062;
exports.ER_WRONG_FIELD_SPEC = 1063;
exports.ER_PARSE_ERROR = 1064;
exports.ER_EMPTY_QUERY = 1065;
exports.ER_NONUNIQ_TABLE = 1066;
exports.ER_INVALID_DEFAULT = 1067;
exports.ER_MULTIPLE_PRI_KEY = 1068;
exports.ER_TOO_MANY_KEYS = 1069;
exports.ER_TOO_MANY_KEY_PARTS = 1070;
exports.ER_TOO_LONG_KEY = 1071;
exports.ER_KEY_COLUMN_DOES_NOT_EXITS = 1072;
exports.ER_BLOB_USED_AS_KEY = 1073;
exports.ER_TOO_BIG_FIELDLENGTH = 1074;
exports.ER_WRONG_AUTO_KEY = 1075;
exports.ER_READY = 1076;
exports.ER_NORMAL_SHUTDOWN = 1077;
exports.ER_GOT_SIGNAL = 1078;
exports.ER_SHUTDOWN_COMPLETE = 1079;
exports.ER_FORCING_CLOSE = 1080;
exports.ER_IPSOCK_ERROR = 1081;
exports.ER_NO_SUCH_INDEX = 1082;
exports.ER_WRONG_FIELD_TERMINATORS = 1083;
exports.ER_BLOBS_AND_NO_TERMINATED = 1084;
exports.ER_TEXTFILE_NOT_READABLE = 1085;
exports.ER_FILE_EXISTS_ERROR = 1086;
exports.ER_LOAD_INFO = 1087;
exports.ER_ALTER_INFO = 1088;
exports.ER_WRONG_SUB_KEY = 1089;
exports.ER_CANT_REMOVE_ALL_FIELDS = 1090;
exports.ER_CANT_DROP_FIELD_OR_KEY = 1091;
exports.ER_INSERT_INFO = 1092;
exports.ER_UPDATE_TABLE_USED = 1093;
exports.ER_NO_SUCH_THREAD = 1094;
exports.ER_KILL_DENIED_ERROR = 1095;
exports.ER_NO_TABLES_USED = 1096;
exports.ER_TOO_BIG_SET = 1097;
exports.ER_NO_UNIQUE_LOGFILE = 1098;
exports.ER_TABLE_NOT_LOCKED_FOR_WRITE = 1099;
exports.ER_TABLE_NOT_LOCKED = 1100;
exports.ER_BLOB_CANT_HAVE_DEFAULT = 1101;
exports.ER_WRONG_DB_NAME = 1102;
exports.ER_WRONG_TABLE_NAME = 1103;
exports.ER_TOO_BIG_SELECT = 1104;
exports.ER_UNKNOWN_ERROR = 1105;
exports.ER_UNKNOWN_PROCEDURE = 1106;
exports.ER_WRONG_PARAMCOUNT_TO_PROCEDURE = 1107;
exports.ER_WRONG_PARAMETERS_TO_PROCEDURE = 1108;
exports.ER_UNKNOWN_TABLE = 1109;
exports.ER_FIELD_SPECIFIED_TWICE = 1110;
exports.ER_INVALID_GROUP_FUNC_USE = 1111;
exports.ER_UNSUPPORTED_EXTENSION = 1112;
exports.ER_TABLE_MUST_HAVE_COLUMNS = 1113;
exports.ER_RECORD_FILE_FULL = 1114;
exports.ER_UNKNOWN_CHARACTER_SET = 1115;
exports.ER_TOO_MANY_TABLES = 1116;
exports.ER_TOO_MANY_FIELDS = 1117;
exports.ER_TOO_BIG_ROWSIZE = 1118;
exports.ER_STACK_OVERRUN = 1119;
exports.ER_WRONG_OUTER_JOIN = 1120;
exports.ER_NULL_COLUMN_IN_INDEX = 1121;
exports.ER_CANT_FIND_UDF = 1122;
exports.ER_CANT_INITIALIZE_UDF = 1123;
exports.ER_UDF_NO_PATHS = 1124;
exports.ER_UDF_EXISTS = 1125;
exports.ER_CANT_OPEN_LIBRARY = 1126;
exports.ER_CANT_FIND_DL_ENTRY = 1127;
exports.ER_FUNCTION_NOT_DEFINED = 1128;
exports.ER_HOST_IS_BLOCKED = 1129;
exports.ER_HOST_NOT_PRIVILEGED = 1130;
exports.ER_PASSWORD_ANONYMOUS_USER = 1131;
exports.ER_PASSWORD_NOT_ALLOWED = 1132;
exports.ER_PASSWORD_NO_MATCH = 1133;
exports.ER_UPDATE_INFO = 1134;
exports.ER_CANT_CREATE_THREAD = 1135;
exports.ER_WRONG_VALUE_COUNT_ON_ROW = 1136;
exports.ER_CANT_REOPEN_TABLE = 1137;
exports.ER_INVALID_USE_OF_NULL = 1138;
exports.ER_REGEXP_ERROR = 1139;
exports.ER_MIX_OF_GROUP_FUNC_AND_FIELDS = 1140;
exports.ER_NONEXISTING_GRANT = 1141;
exports.ER_TABLEACCESS_DENIED_ERROR = 1142;
exports.ER_COLUMNACCESS_DENIED_ERROR = 1143;
exports.ER_ILLEGAL_GRANT_FOR_TABLE = 1144;
exports.ER_GRANT_WRONG_HOST_OR_USER = 1145;
exports.ER_NO_SUCH_TABLE = 1146;
exports.ER_NONEXISTING_TABLE_GRANT = 1147;
exports.ER_NOT_ALLOWED_COMMAND = 1148;
exports.ER_SYNTAX_ERROR = 1149;
exports.ER_UNUSED1 = 1150;
exports.ER_UNUSED2 = 1151;
exports.ER_ABORTING_CONNECTION = 1152;
exports.ER_NET_PACKET_TOO_LARGE = 1153;
exports.ER_NET_READ_ERROR_FROM_PIPE = 1154;
exports.ER_NET_FCNTL_ERROR = 1155;
exports.ER_NET_PACKETS_OUT_OF_ORDER = 1156;
exports.ER_NET_UNCOMPRESS_ERROR = 1157;
exports.ER_NET_READ_ERROR = 1158;
exports.ER_NET_READ_INTERRUPTED = 1159;
exports.ER_NET_ERROR_ON_WRITE = 1160;
exports.ER_NET_WRITE_INTERRUPTED = 1161;
exports.ER_TOO_LONG_STRING = 1162;
exports.ER_TABLE_CANT_HANDLE_BLOB = 1163;
exports.ER_TABLE_CANT_HANDLE_AUTO_INCREMENT = 1164;
exports.ER_UNUSED3 = 1165;
exports.ER_WRONG_COLUMN_NAME = 1166;
exports.ER_WRONG_KEY_COLUMN = 1167;
exports.ER_WRONG_MRG_TABLE = 1168;
exports.ER_DUP_UNIQUE = 1169;
exports.ER_BLOB_KEY_WITHOUT_LENGTH = 1170;
exports.ER_PRIMARY_CANT_HAVE_NULL = 1171;
exports.ER_TOO_MANY_ROWS = 1172;
exports.ER_REQUIRES_PRIMARY_KEY = 1173;
exports.ER_NO_RAID_COMPILED = 1174;
exports.ER_UPDATE_WITHOUT_KEY_IN_SAFE_MODE = 1175;
exports.ER_KEY_DOES_NOT_EXITS = 1176;
exports.ER_CHECK_NO_SUCH_TABLE = 1177;
exports.ER_CHECK_NOT_IMPLEMENTED = 1178;
exports.ER_CANT_DO_THIS_DURING_AN_TRANSACTION = 1179;
exports.ER_ERROR_DURING_COMMIT = 1180;
exports.ER_ERROR_DURING_ROLLBACK = 1181;
exports.ER_ERROR_DURING_FLUSH_LOGS = 1182;
exports.ER_ERROR_DURING_CHECKPOINT = 1183;
exports.ER_NEW_ABORTING_CONNECTION = 1184;
exports.ER_DUMP_NOT_IMPLEMENTED = 1185;
exports.ER_FLUSH_MASTER_BINLOG_CLOSED = 1186;
exports.ER_INDEX_REBUILD = 1187;
exports.ER_SOURCE = 1188;
exports.ER_SOURCE_NET_READ = 1189;
exports.ER_SOURCE_NET_WRITE = 1190;
exports.ER_FT_MATCHING_KEY_NOT_FOUND = 1191;
exports.ER_LOCK_OR_ACTIVE_TRANSACTION = 1192;
exports.ER_UNKNOWN_SYSTEM_VARIABLE = 1193;
exports.ER_CRASHED_ON_USAGE = 1194;
exports.ER_CRASHED_ON_REPAIR = 1195;
exports.ER_WARNING_NOT_COMPLETE_ROLLBACK = 1196;
exports.ER_TRANS_CACHE_FULL = 1197;
exports.ER_SLAVE_MUST_STOP = 1198;
exports.ER_REPLICA_NOT_RUNNING = 1199;
exports.ER_BAD_REPLICA = 1200;
exports.ER_CONNECTION_METADATA = 1201;
exports.ER_REPLICA_THREAD = 1202;
exports.ER_TOO_MANY_USER_CONNECTIONS = 1203;
exports.ER_SET_CONSTANTS_ONLY = 1204;
exports.ER_LOCK_WAIT_TIMEOUT = 1205;
exports.ER_LOCK_TABLE_FULL = 1206;
exports.ER_READ_ONLY_TRANSACTION = 1207;
exports.ER_DROP_DB_WITH_READ_LOCK = 1208;
exports.ER_CREATE_DB_WITH_READ_LOCK = 1209;
exports.ER_WRONG_ARGUMENTS = 1210;
exports.ER_NO_PERMISSION_TO_CREATE_USER = 1211;
exports.ER_UNION_TABLES_IN_DIFFERENT_DIR = 1212;
exports.ER_LOCK_DEADLOCK = 1213;
exports.ER_TABLE_CANT_HANDLE_FT = 1214;
exports.ER_CANNOT_ADD_FOREIGN = 1215;
exports.ER_NO_REFERENCED_ROW = 1216;
exports.ER_ROW_IS_REFERENCED = 1217;
exports.ER_CONNECT_TO_SOURCE = 1218;
exports.ER_QUERY_ON_MASTER = 1219;
exports.ER_ERROR_WHEN_EXECUTING_COMMAND = 1220;
exports.ER_WRONG_USAGE = 1221;
exports.ER_WRONG_NUMBER_OF_COLUMNS_IN_SELECT = 1222;
exports.ER_CANT_UPDATE_WITH_READLOCK = 1223;
exports.ER_MIXING_NOT_ALLOWED = 1224;
exports.ER_DUP_ARGUMENT = 1225;
exports.ER_USER_LIMIT_REACHED = 1226;
exports.ER_SPECIFIC_ACCESS_DENIED_ERROR = 1227;
exports.ER_LOCAL_VARIABLE = 1228;
exports.ER_GLOBAL_VARIABLE = 1229;
exports.ER_NO_DEFAULT = 1230;
exports.ER_WRONG_VALUE_FOR_VAR = 1231;
exports.ER_WRONG_TYPE_FOR_VAR = 1232;
exports.ER_VAR_CANT_BE_READ = 1233;
exports.ER_CANT_USE_OPTION_HERE = 1234;
exports.ER_NOT_SUPPORTED_YET = 1235;
exports.ER_SOURCE_FATAL_ERROR_READING_BINLOG = 1236;
exports.ER_REPLICA_IGNORED_TABLE = 1237;
exports.ER_INCORRECT_GLOBAL_LOCAL_VAR = 1238;
exports.ER_WRONG_FK_DEF = 1239;
exports.ER_KEY_REF_DO_NOT_MATCH_TABLE_REF = 1240;
exports.ER_OPERAND_COLUMNS = 1241;
exports.ER_SUBQUERY_NO_1_ROW = 1242;
exports.ER_UNKNOWN_STMT_HANDLER = 1243;
exports.ER_CORRUPT_HELP_DB = 1244;
exports.ER_CYCLIC_REFERENCE = 1245;
exports.ER_AUTO_CONVERT = 1246;
exports.ER_ILLEGAL_REFERENCE = 1247;
exports.ER_DERIVED_MUST_HAVE_ALIAS = 1248;
exports.ER_SELECT_REDUCED = 1249;
exports.ER_TABLENAME_NOT_ALLOWED_HERE = 1250;
exports.ER_NOT_SUPPORTED_AUTH_MODE = 1251;
exports.ER_SPATIAL_CANT_HAVE_NULL = 1252;
exports.ER_COLLATION_CHARSET_MISMATCH = 1253;
exports.ER_SLAVE_WAS_RUNNING = 1254;
exports.ER_SLAVE_WAS_NOT_RUNNING = 1255;
exports.ER_TOO_BIG_FOR_UNCOMPRESS = 1256;
exports.ER_ZLIB_Z_MEM_ERROR = 1257;
exports.ER_ZLIB_Z_BUF_ERROR = 1258;
exports.ER_ZLIB_Z_DATA_ERROR = 1259;
exports.ER_CUT_VALUE_GROUP_CONCAT = 1260;
exports.ER_WARN_TOO_FEW_RECORDS = 1261;
exports.ER_WARN_TOO_MANY_RECORDS = 1262;
exports.ER_WARN_NULL_TO_NOTNULL = 1263;
exports.ER_WARN_DATA_OUT_OF_RANGE = 1264;
exports.WARN_DATA_TRUNCATED = 1265;
exports.ER_WARN_USING_OTHER_HANDLER = 1266;
exports.ER_CANT_AGGREGATE_2COLLATIONS = 1267;
exports.ER_DROP_USER = 1268;
exports.ER_REVOKE_GRANTS = 1269;
exports.ER_CANT_AGGREGATE_3COLLATIONS = 1270;
exports.ER_CANT_AGGREGATE_NCOLLATIONS = 1271;
exports.ER_VARIABLE_IS_NOT_STRUCT = 1272;
exports.ER_UNKNOWN_COLLATION = 1273;
exports.ER_REPLICA_IGNORED_SSL_PARAMS = 1274;
exports.ER_SERVER_IS_IN_SECURE_AUTH_MODE = 1275;
exports.ER_WARN_FIELD_RESOLVED = 1276;
exports.ER_BAD_REPLICA_UNTIL_COND = 1277;
exports.ER_MISSING_SKIP_REPLICA = 1278;
exports.ER_UNTIL_COND_IGNORED = 1279;
exports.ER_WRONG_NAME_FOR_INDEX = 1280;
exports.ER_WRONG_NAME_FOR_CATALOG = 1281;
exports.ER_WARN_QC_RESIZE = 1282;
exports.ER_BAD_FT_COLUMN = 1283;
exports.ER_UNKNOWN_KEY_CACHE = 1284;
exports.ER_WARN_HOSTNAME_WONT_WORK = 1285;
exports.ER_UNKNOWN_STORAGE_ENGINE = 1286;
exports.ER_WARN_DEPRECATED_SYNTAX = 1287;
exports.ER_NON_UPDATABLE_TABLE = 1288;
exports.ER_FEATURE_DISABLED = 1289;
exports.ER_OPTION_PREVENTS_STATEMENT = 1290;
exports.ER_DUPLICATED_VALUE_IN_TYPE = 1291;
exports.ER_TRUNCATED_WRONG_VALUE = 1292;
exports.ER_TOO_MUCH_AUTO_TIMESTAMP_COLS = 1293;
exports.ER_INVALID_ON_UPDATE = 1294;
exports.ER_UNSUPPORTED_PS = 1295;
exports.ER_GET_ERRMSG = 1296;
exports.ER_GET_TEMPORARY_ERRMSG = 1297;
exports.ER_UNKNOWN_TIME_ZONE = 1298;
exports.ER_WARN_INVALID_TIMESTAMP = 1299;
exports.ER_INVALID_CHARACTER_STRING = 1300;
exports.ER_WARN_ALLOWED_PACKET_OVERFLOWED = 1301;
exports.ER_CONFLICTING_DECLARATIONS = 1302;
exports.ER_SP_NO_RECURSIVE_CREATE = 1303;
exports.ER_SP_ALREADY_EXISTS = 1304;
exports.ER_SP_DOES_NOT_EXIST = 1305;
exports.ER_SP_DROP_FAILED = 1306;
exports.ER_SP_STORE_FAILED = 1307;
exports.ER_SP_LILABEL_MISMATCH = 1308;
exports.ER_SP_LABEL_REDEFINE = 1309;
exports.ER_SP_LABEL_MISMATCH = 1310;
exports.ER_SP_UNINIT_VAR = 1311;
exports.ER_SP_BADSELECT = 1312;
exports.ER_SP_BADRETURN = 1313;
exports.ER_SP_BADSTATEMENT = 1314;
exports.ER_UPDATE_LOG_DEPRECATED_IGNORED = 1315;
exports.ER_UPDATE_LOG_DEPRECATED_TRANSLATED = 1316;
exports.ER_QUERY_INTERRUPTED = 1317;
exports.ER_SP_WRONG_NO_OF_ARGS = 1318;
exports.ER_SP_COND_MISMATCH = 1319;
exports.ER_SP_NORETURN = 1320;
exports.ER_SP_NORETURNEND = 1321;
exports.ER_SP_BAD_CURSOR_QUERY = 1322;
exports.ER_SP_BAD_CURSOR_SELECT = 1323;
exports.ER_SP_CURSOR_MISMATCH = 1324;
exports.ER_SP_CURSOR_ALREADY_OPEN = 1325;
exports.ER_SP_CURSOR_NOT_OPEN = 1326;
exports.ER_SP_UNDECLARED_VAR = 1327;
exports.ER_SP_WRONG_NO_OF_FETCH_ARGS = 1328;
exports.ER_SP_FETCH_NO_DATA = 1329;
exports.ER_SP_DUP_PARAM = 1330;
exports.ER_SP_DUP_VAR = 1331;
exports.ER_SP_DUP_COND = 1332;
exports.ER_SP_DUP_CURS = 1333;
exports.ER_SP_CANT_ALTER = 1334;
exports.ER_SP_SUBSELECT_NYI = 1335;
exports.ER_STMT_NOT_ALLOWED_IN_SF_OR_TRG = 1336;
exports.ER_SP_VARCOND_AFTER_CURSHNDLR = 1337;
exports.ER_SP_CURSOR_AFTER_HANDLER = 1338;
exports.ER_SP_CASE_NOT_FOUND = 1339;
exports.ER_FPARSER_TOO_BIG_FILE = 1340;
exports.ER_FPARSER_BAD_HEADER = 1341;
exports.ER_FPARSER_EOF_IN_COMMENT = 1342;
exports.ER_FPARSER_ERROR_IN_PARAMETER = 1343;
exports.ER_FPARSER_EOF_IN_UNKNOWN_PARAMETER = 1344;
exports.ER_VIEW_NO_EXPLAIN = 1345;
exports.ER_FRM_UNKNOWN_TYPE = 1346;
exports.ER_WRONG_OBJECT = 1347;
exports.ER_NONUPDATEABLE_COLUMN = 1348;
exports.ER_VIEW_SELECT_DERIVED = 1349;
exports.ER_VIEW_SELECT_CLAUSE = 1350;
exports.ER_VIEW_SELECT_VARIABLE = 1351;
exports.ER_VIEW_SELECT_TMPTABLE = 1352;
exports.ER_VIEW_WRONG_LIST = 1353;
exports.ER_WARN_VIEW_MERGE = 1354;
exports.ER_WARN_VIEW_WITHOUT_KEY = 1355;
exports.ER_VIEW_INVALID = 1356;
exports.ER_SP_NO_DROP_SP = 1357;
exports.ER_SP_GOTO_IN_HNDLR = 1358;
exports.ER_TRG_ALREADY_EXISTS = 1359;
exports.ER_TRG_DOES_NOT_EXIST = 1360;
exports.ER_TRG_ON_VIEW_OR_TEMP_TABLE = 1361;
exports.ER_TRG_CANT_CHANGE_ROW = 1362;
exports.ER_TRG_NO_SUCH_ROW_IN_TRG = 1363;
exports.ER_NO_DEFAULT_FOR_FIELD = 1364;
exports.ER_DIVISION_BY_ZERO = 1365;
exports.ER_TRUNCATED_WRONG_VALUE_FOR_FIELD = 1366;
exports.ER_ILLEGAL_VALUE_FOR_TYPE = 1367;
exports.ER_VIEW_NONUPD_CHECK = 1368;
exports.ER_VIEW_CHECK_FAILED = 1369;
exports.ER_PROCACCESS_DENIED_ERROR = 1370;
exports.ER_RELAY_LOG_FAIL = 1371;
exports.ER_PASSWD_LENGTH = 1372;
exports.ER_UNKNOWN_TARGET_BINLOG = 1373;
exports.ER_IO_ERR_LOG_INDEX_READ = 1374;
exports.ER_BINLOG_PURGE_PROHIBITED = 1375;
exports.ER_FSEEK_FAIL = 1376;
exports.ER_BINLOG_PURGE_FATAL_ERR = 1377;
exports.ER_LOG_IN_USE = 1378;
exports.ER_LOG_PURGE_UNKNOWN_ERR = 1379;
exports.ER_RELAY_LOG_INIT = 1380;
exports.ER_NO_BINARY_LOGGING = 1381;
exports.ER_RESERVED_SYNTAX = 1382;
exports.ER_WSAS_FAILED = 1383;
exports.ER_DIFF_GROUPS_PROC = 1384;
exports.ER_NO_GROUP_FOR_PROC = 1385;
exports.ER_ORDER_WITH_PROC = 1386;
exports.ER_LOGGING_PROHIBIT_CHANGING_OF = 1387;
exports.ER_NO_FILE_MAPPING = 1388;
exports.ER_WRONG_MAGIC = 1389;
exports.ER_PS_MANY_PARAM = 1390;
exports.ER_KEY_PART_0 = 1391;
exports.ER_VIEW_CHECKSUM = 1392;
exports.ER_VIEW_MULTIUPDATE = 1393;
exports.ER_VIEW_NO_INSERT_FIELD_LIST = 1394;
exports.ER_VIEW_DELETE_MERGE_VIEW = 1395;
exports.ER_CANNOT_USER = 1396;
exports.ER_XAER_NOTA = 1397;
exports.ER_XAER_INVAL = 1398;
exports.ER_XAER_RMFAIL = 1399;
exports.ER_XAER_OUTSIDE = 1400;
exports.ER_XAER_RMERR = 1401;
exports.ER_XA_RBROLLBACK = 1402;
exports.ER_NONEXISTING_PROC_GRANT = 1403;
exports.ER_PROC_AUTO_GRANT_FAIL = 1404;
exports.ER_PROC_AUTO_REVOKE_FAIL = 1405;
exports.ER_DATA_TOO_LONG = 1406;
exports.ER_SP_BAD_SQLSTATE = 1407;
exports.ER_STARTUP = 1408;
exports.ER_LOAD_FROM_FIXED_SIZE_ROWS_TO_VAR = 1409;
exports.ER_CANT_CREATE_USER_WITH_GRANT = 1410;
exports.ER_WRONG_VALUE_FOR_TYPE = 1411;
exports.ER_TABLE_DEF_CHANGED = 1412;
exports.ER_SP_DUP_HANDLER = 1413;
exports.ER_SP_NOT_VAR_ARG = 1414;
exports.ER_SP_NO_RETSET = 1415;
exports.ER_CANT_CREATE_GEOMETRY_OBJECT = 1416;
exports.ER_FAILED_ROUTINE_BREAK_BINLOG = 1417;
exports.ER_BINLOG_UNSAFE_ROUTINE = 1418;
exports.ER_BINLOG_CREATE_ROUTINE_NEED_SUPER = 1419;
exports.ER_EXEC_STMT_WITH_OPEN_CURSOR = 1420;
exports.ER_STMT_HAS_NO_OPEN_CURSOR = 1421;
exports.ER_COMMIT_NOT_ALLOWED_IN_SF_OR_TRG = 1422;
exports.ER_NO_DEFAULT_FOR_VIEW_FIELD = 1423;
exports.ER_SP_NO_RECURSION = 1424;
exports.ER_TOO_BIG_SCALE = 1425;
exports.ER_TOO_BIG_PRECISION = 1426;
exports.ER_M_BIGGER_THAN_D = 1427;
exports.ER_WRONG_LOCK_OF_SYSTEM_TABLE = 1428;
exports.ER_CONNECT_TO_FOREIGN_DATA_SOURCE = 1429;
exports.ER_QUERY_ON_FOREIGN_DATA_SOURCE = 1430;
exports.ER_FOREIGN_DATA_SOURCE_DOESNT_EXIST = 1431;
exports.ER_FOREIGN_DATA_STRING_INVALID_CANT_CREATE = 1432;
exports.ER_FOREIGN_DATA_STRING_INVALID = 1433;
exports.ER_CANT_CREATE_FEDERATED_TABLE = 1434;
exports.ER_TRG_IN_WRONG_SCHEMA = 1435;
exports.ER_STACK_OVERRUN_NEED_MORE = 1436;
exports.ER_TOO_LONG_BODY = 1437;
exports.ER_WARN_CANT_DROP_DEFAULT_KEYCACHE = 1438;
exports.ER_TOO_BIG_DISPLAYWIDTH = 1439;
exports.ER_XAER_DUPID = 1440;
exports.ER_DATETIME_FUNCTION_OVERFLOW = 1441;
exports.ER_CANT_UPDATE_USED_TABLE_IN_SF_OR_TRG = 1442;
exports.ER_VIEW_PREVENT_UPDATE = 1443;
exports.ER_PS_NO_RECURSION = 1444;
exports.ER_SP_CANT_SET_AUTOCOMMIT = 1445;
exports.ER_MALFORMED_DEFINER = 1446;
exports.ER_VIEW_FRM_NO_USER = 1447;
exports.ER_VIEW_OTHER_USER = 1448;
exports.ER_NO_SUCH_USER = 1449;
exports.ER_FORBID_SCHEMA_CHANGE = 1450;
exports.ER_ROW_IS_REFERENCED_2 = 1451;
exports.ER_NO_REFERENCED_ROW_2 = 1452;
exports.ER_SP_BAD_VAR_SHADOW = 1453;
exports.ER_TRG_NO_DEFINER = 1454;
exports.ER_OLD_FILE_FORMAT = 1455;
exports.ER_SP_RECURSION_LIMIT = 1456;
exports.ER_SP_PROC_TABLE_CORRUPT = 1457;
exports.ER_SP_WRONG_NAME = 1458;
exports.ER_TABLE_NEEDS_UPGRADE = 1459;
exports.ER_SP_NO_AGGREGATE = 1460;
exports.ER_MAX_PREPARED_STMT_COUNT_REACHED = 1461;
exports.ER_VIEW_RECURSIVE = 1462;
exports.ER_NON_GROUPING_FIELD_USED = 1463;
exports.ER_TABLE_CANT_HANDLE_SPKEYS = 1464;
exports.ER_NO_TRIGGERS_ON_SYSTEM_SCHEMA = 1465;
exports.ER_REMOVED_SPACES = 1466;
exports.ER_AUTOINC_READ_FAILED = 1467;
exports.ER_USERNAME = 1468;
exports.ER_HOSTNAME = 1469;
exports.ER_WRONG_STRING_LENGTH = 1470;
exports.ER_NON_INSERTABLE_TABLE = 1471;
exports.ER_ADMIN_WRONG_MRG_TABLE = 1472;
exports.ER_TOO_HIGH_LEVEL_OF_NESTING_FOR_SELECT = 1473;
exports.ER_NAME_BECOMES_EMPTY = 1474;
exports.ER_AMBIGUOUS_FIELD_TERM = 1475;
exports.ER_FOREIGN_SERVER_EXISTS = 1476;
exports.ER_FOREIGN_SERVER_DOESNT_EXIST = 1477;
exports.ER_ILLEGAL_HA_CREATE_OPTION = 1478;
exports.ER_PARTITION_REQUIRES_VALUES_ERROR = 1479;
exports.ER_PARTITION_WRONG_VALUES_ERROR = 1480;
exports.ER_PARTITION_MAXVALUE_ERROR = 1481;
exports.ER_PARTITION_SUBPARTITION_ERROR = 1482;
exports.ER_PARTITION_SUBPART_MIX_ERROR = 1483;
exports.ER_PARTITION_WRONG_NO_PART_ERROR = 1484;
exports.ER_PARTITION_WRONG_NO_SUBPART_ERROR = 1485;
exports.ER_WRONG_EXPR_IN_PARTITION_FUNC_ERROR = 1486;
exports.ER_NO_CONST_EXPR_IN_RANGE_OR_LIST_ERROR = 1487;
exports.ER_FIELD_NOT_FOUND_PART_ERROR = 1488;
exports.ER_LIST_OF_FIELDS_ONLY_IN_HASH_ERROR = 1489;
exports.ER_INCONSISTENT_PARTITION_INFO_ERROR = 1490;
exports.ER_PARTITION_FUNC_NOT_ALLOWED_ERROR = 1491;
exports.ER_PARTITIONS_MUST_BE_DEFINED_ERROR = 1492;
exports.ER_RANGE_NOT_INCREASING_ERROR = 1493;
exports.ER_INCONSISTENT_TYPE_OF_FUNCTIONS_ERROR = 1494;
exports.ER_MULTIPLE_DEF_CONST_IN_LIST_PART_ERROR = 1495;
exports.ER_PARTITION_ENTRY_ERROR = 1496;
exports.ER_MIX_HANDLER_ERROR = 1497;
exports.ER_PARTITION_NOT_DEFINED_ERROR = 1498;
exports.ER_TOO_MANY_PARTITIONS_ERROR = 1499;
exports.ER_SUBPARTITION_ERROR = 1500;
exports.ER_CANT_CREATE_HANDLER_FILE = 1501;
exports.ER_BLOB_FIELD_IN_PART_FUNC_ERROR = 1502;
exports.ER_UNIQUE_KEY_NEED_ALL_FIELDS_IN_PF = 1503;
exports.ER_NO_PARTS_ERROR = 1504;
exports.ER_PARTITION_MGMT_ON_NONPARTITIONED = 1505;
exports.ER_FOREIGN_KEY_ON_PARTITIONED = 1506;
exports.ER_DROP_PARTITION_NON_EXISTENT = 1507;
exports.ER_DROP_LAST_PARTITION = 1508;
exports.ER_COALESCE_ONLY_ON_HASH_PARTITION = 1509;
exports.ER_REORG_HASH_ONLY_ON_SAME_NO = 1510;
exports.ER_REORG_NO_PARAM_ERROR = 1511;
exports.ER_ONLY_ON_RANGE_LIST_PARTITION = 1512;
exports.ER_ADD_PARTITION_SUBPART_ERROR = 1513;
exports.ER_ADD_PARTITION_NO_NEW_PARTITION = 1514;
exports.ER_COALESCE_PARTITION_NO_PARTITION = 1515;
exports.ER_REORG_PARTITION_NOT_EXIST = 1516;
exports.ER_SAME_NAME_PARTITION = 1517;
exports.ER_NO_BINLOG_ERROR = 1518;
exports.ER_CONSECUTIVE_REORG_PARTITIONS = 1519;
exports.ER_REORG_OUTSIDE_RANGE = 1520;
exports.ER_PARTITION_FUNCTION_FAILURE = 1521;
exports.ER_PART_STATE_ERROR = 1522;
exports.ER_LIMITED_PART_RANGE = 1523;
exports.ER_PLUGIN_IS_NOT_LOADED = 1524;
exports.ER_WRONG_VALUE = 1525;
exports.ER_NO_PARTITION_FOR_GIVEN_VALUE = 1526;
exports.ER_FILEGROUP_OPTION_ONLY_ONCE = 1527;
exports.ER_CREATE_FILEGROUP_FAILED = 1528;
exports.ER_DROP_FILEGROUP_FAILED = 1529;
exports.ER_TABLESPACE_AUTO_EXTEND_ERROR = 1530;
exports.ER_WRONG_SIZE_NUMBER = 1531;
exports.ER_SIZE_OVERFLOW_ERROR = 1532;
exports.ER_ALTER_FILEGROUP_FAILED = 1533;
exports.ER_BINLOG_ROW_LOGGING_FAILED = 1534;
exports.ER_BINLOG_ROW_WRONG_TABLE_DEF = 1535;
exports.ER_BINLOG_ROW_RBR_TO_SBR = 1536;
exports.ER_EVENT_ALREADY_EXISTS = 1537;
exports.ER_EVENT_STORE_FAILED = 1538;
exports.ER_EVENT_DOES_NOT_EXIST = 1539;
exports.ER_EVENT_CANT_ALTER = 1540;
exports.ER_EVENT_DROP_FAILED = 1541;
exports.ER_EVENT_INTERVAL_NOT_POSITIVE_OR_TOO_BIG = 1542;
exports.ER_EVENT_ENDS_BEFORE_STARTS = 1543;
exports.ER_EVENT_EXEC_TIME_IN_THE_PAST = 1544;
exports.ER_EVENT_OPEN_TABLE_FAILED = 1545;
exports.ER_EVENT_NEITHER_M_EXPR_NOR_M_AT = 1546;
exports.ER_COL_COUNT_DOESNT_MATCH_CORRUPTED = 1547;
exports.ER_CANNOT_LOAD_FROM_TABLE = 1548;
exports.ER_EVENT_CANNOT_DELETE = 1549;
exports.ER_EVENT_COMPILE_ERROR = 1550;
exports.ER_EVENT_SAME_NAME = 1551;
exports.ER_EVENT_DATA_TOO_LONG = 1552;
exports.ER_DROP_INDEX_FK = 1553;
exports.ER_WARN_DEPRECATED_SYNTAX_WITH_VER = 1554;
exports.ER_CANT_WRITE_LOCK_LOG_TABLE = 1555;
exports.ER_CANT_LOCK_LOG_TABLE = 1556;
exports.ER_FOREIGN_DUPLICATE_KEY = 1557;
exports.ER_COL_COUNT_DOESNT_MATCH_PLEASE_UPDATE = 1558;
exports.ER_TEMP_TABLE_PREVENTS_SWITCH_OUT_OF_RBR = 1559;
exports.ER_STORED_FUNCTION_PREVENTS_SWITCH_BINLOG_FORMAT = 1560;
exports.ER_NDB_CANT_SWITCH_BINLOG_FORMAT = 1561;
exports.ER_PARTITION_NO_TEMPORARY = 1562;
exports.ER_PARTITION_CONST_DOMAIN_ERROR = 1563;
exports.ER_PARTITION_FUNCTION_IS_NOT_ALLOWED = 1564;
exports.ER_DDL_LOG_ERROR = 1565;
exports.ER_NULL_IN_VALUES_LESS_THAN = 1566;
exports.ER_WRONG_PARTITION_NAME = 1567;
exports.ER_CANT_CHANGE_TX_CHARACTERISTICS = 1568;
exports.ER_DUP_ENTRY_AUTOINCREMENT_CASE = 1569;
exports.ER_EVENT_MODIFY_QUEUE_ERROR = 1570;
exports.ER_EVENT_SET_VAR_ERROR = 1571;
exports.ER_PARTITION_MERGE_ERROR = 1572;
exports.ER_CANT_ACTIVATE_LOG = 1573;
exports.ER_RBR_NOT_AVAILABLE = 1574;
exports.ER_BASE64_DECODE_ERROR = 1575;
exports.ER_EVENT_RECURSION_FORBIDDEN = 1576;
exports.ER_EVENTS_DB_ERROR = 1577;
exports.ER_ONLY_INTEGERS_ALLOWED = 1578;
exports.ER_UNSUPORTED_LOG_ENGINE = 1579;
exports.ER_BAD_LOG_STATEMENT = 1580;
exports.ER_CANT_RENAME_LOG_TABLE = 1581;
exports.ER_WRONG_PARAMCOUNT_TO_NATIVE_FCT = 1582;
exports.ER_WRONG_PARAMETERS_TO_NATIVE_FCT = 1583;
exports.ER_WRONG_PARAMETERS_TO_STORED_FCT = 1584;
exports.ER_NATIVE_FCT_NAME_COLLISION = 1585;
exports.ER_DUP_ENTRY_WITH_KEY_NAME = 1586;
exports.ER_BINLOG_PURGE_EMFILE = 1587;
exports.ER_EVENT_CANNOT_CREATE_IN_THE_PAST = 1588;
exports.ER_EVENT_CANNOT_ALTER_IN_THE_PAST = 1589;
exports.ER_SLAVE_INCIDENT = 1590;
exports.ER_NO_PARTITION_FOR_GIVEN_VALUE_SILENT = 1591;
exports.ER_BINLOG_UNSAFE_STATEMENT = 1592;
exports.ER_BINLOG_FATAL_ERROR = 1593;
exports.ER_SLAVE_RELAY_LOG_READ_FAILURE = 1594;
exports.ER_SLAVE_RELAY_LOG_WRITE_FAILURE = 1595;
exports.ER_SLAVE_CREATE_EVENT_FAILURE = 1596;
exports.ER_SLAVE_MASTER_COM_FAILURE = 1597;
exports.ER_BINLOG_LOGGING_IMPOSSIBLE = 1598;
exports.ER_VIEW_NO_CREATION_CTX = 1599;
exports.ER_VIEW_INVALID_CREATION_CTX = 1600;
exports.ER_SR_INVALID_CREATION_CTX = 1601;
exports.ER_TRG_CORRUPTED_FILE = 1602;
exports.ER_TRG_NO_CREATION_CTX = 1603;
exports.ER_TRG_INVALID_CREATION_CTX = 1604;
exports.ER_EVENT_INVALID_CREATION_CTX = 1605;
exports.ER_TRG_CANT_OPEN_TABLE = 1606;
exports.ER_CANT_CREATE_SROUTINE = 1607;
exports.ER_NEVER_USED = 1608;
exports.ER_NO_FORMAT_DESCRIPTION_EVENT_BEFORE_BINLOG_STATEMENT = 1609;
exports.ER_REPLICA_CORRUPT_EVENT = 1610;
exports.ER_LOAD_DATA_INVALID_COLUMN = 1611;
exports.ER_LOG_PURGE_NO_FILE = 1612;
exports.ER_XA_RBTIMEOUT = 1613;
exports.ER_XA_RBDEADLOCK = 1614;
exports.ER_NEED_REPREPARE = 1615;
exports.ER_DELAYED_NOT_SUPPORTED = 1616;
exports.WARN_NO_CONNECTION_METADATA = 1617;
exports.WARN_OPTION_IGNORED = 1618;
exports.ER_PLUGIN_DELETE_BUILTIN = 1619;
exports.WARN_PLUGIN_BUSY = 1620;
exports.ER_VARIABLE_IS_READONLY = 1621;
exports.ER_WARN_ENGINE_TRANSACTION_ROLLBACK = 1622;
exports.ER_SLAVE_HEARTBEAT_FAILURE = 1623;
exports.ER_REPLICA_HEARTBEAT_VALUE_OUT_OF_RANGE = 1624;
exports.ER_NDB_REPLICATION_SCHEMA_ERROR = 1625;
exports.ER_CONFLICT_FN_PARSE_ERROR = 1626;
exports.ER_EXCEPTIONS_WRITE_ERROR = 1627;
exports.ER_TOO_LONG_TABLE_COMMENT = 1628;
exports.ER_TOO_LONG_FIELD_COMMENT = 1629;
exports.ER_FUNC_INEXISTENT_NAME_COLLISION = 1630;
exports.ER_DATABASE_NAME = 1631;
exports.ER_TABLE_NAME = 1632;
exports.ER_PARTITION_NAME = 1633;
exports.ER_SUBPARTITION_NAME = 1634;
exports.ER_TEMPORARY_NAME = 1635;
exports.ER_RENAMED_NAME = 1636;
exports.ER_TOO_MANY_CONCURRENT_TRXS = 1637;
exports.WARN_NON_ASCII_SEPARATOR_NOT_IMPLEMENTED = 1638;
exports.ER_DEBUG_SYNC_TIMEOUT = 1639;
exports.ER_DEBUG_SYNC_HIT_LIMIT = 1640;
exports.ER_DUP_SIGNAL_SET = 1641;
exports.ER_SIGNAL_WARN = 1642;
exports.ER_SIGNAL_NOT_FOUND = 1643;
exports.ER_SIGNAL_EXCEPTION = 1644;
exports.ER_RESIGNAL_WITHOUT_ACTIVE_HANDLER = 1645;
exports.ER_SIGNAL_BAD_CONDITION_TYPE = 1646;
exports.WARN_COND_ITEM_TRUNCATED = 1647;
exports.ER_COND_ITEM_TOO_LONG = 1648;
exports.ER_UNKNOWN_LOCALE = 1649;
exports.ER_REPLICA_IGNORE_SERVER_IDS = 1650;
exports.ER_QUERY_CACHE_DISABLED = 1651;
exports.ER_SAME_NAME_PARTITION_FIELD = 1652;
exports.ER_PARTITION_COLUMN_LIST_ERROR = 1653;
exports.ER_WRONG_TYPE_COLUMN_VALUE_ERROR = 1654;
exports.ER_TOO_MANY_PARTITION_FUNC_FIELDS_ERROR = 1655;
exports.ER_MAXVALUE_IN_VALUES_IN = 1656;
exports.ER_TOO_MANY_VALUES_ERROR = 1657;
exports.ER_ROW_SINGLE_PARTITION_FIELD_ERROR = 1658;
exports.ER_FIELD_TYPE_NOT_ALLOWED_AS_PARTITION_FIELD = 1659;
exports.ER_PARTITION_FIELDS_TOO_LONG = 1660;
exports.ER_BINLOG_ROW_ENGINE_AND_STMT_ENGINE = 1661;
exports.ER_BINLOG_ROW_MODE_AND_STMT_ENGINE = 1662;
exports.ER_BINLOG_UNSAFE_AND_STMT_ENGINE = 1663;
exports.ER_BINLOG_ROW_INJECTION_AND_STMT_ENGINE = 1664;
exports.ER_BINLOG_STMT_MODE_AND_ROW_ENGINE = 1665;
exports.ER_BINLOG_ROW_INJECTION_AND_STMT_MODE = 1666;
exports.ER_BINLOG_MULTIPLE_ENGINES_AND_SELF_LOGGING_ENGINE = 1667;
exports.ER_BINLOG_UNSAFE_LIMIT = 1668;
exports.ER_UNUSED4 = 1669;
exports.ER_BINLOG_UNSAFE_SYSTEM_TABLE = 1670;
exports.ER_BINLOG_UNSAFE_AUTOINC_COLUMNS = 1671;
exports.ER_BINLOG_UNSAFE_UDF = 1672;
exports.ER_BINLOG_UNSAFE_SYSTEM_VARIABLE = 1673;
exports.ER_BINLOG_UNSAFE_SYSTEM_FUNCTION = 1674;
exports.ER_BINLOG_UNSAFE_NONTRANS_AFTER_TRANS = 1675;
exports.ER_MESSAGE_AND_STATEMENT = 1676;
exports.ER_SLAVE_CONVERSION_FAILED = 1677;
exports.ER_REPLICA_CANT_CREATE_CONVERSION = 1678;
exports.ER_INSIDE_TRANSACTION_PREVENTS_SWITCH_BINLOG_FORMAT = 1679;
exports.ER_PATH_LENGTH = 1680;
exports.ER_WARN_DEPRECATED_SYNTAX_NO_REPLACEMENT = 1681;
exports.ER_WRONG_NATIVE_TABLE_STRUCTURE = 1682;
exports.ER_WRONG_PERFSCHEMA_USAGE = 1683;
exports.ER_WARN_I_S_SKIPPED_TABLE = 1684;
exports.ER_INSIDE_TRANSACTION_PREVENTS_SWITCH_BINLOG_DIRECT = 1685;
exports.ER_STORED_FUNCTION_PREVENTS_SWITCH_BINLOG_DIRECT = 1686;
exports.ER_SPATIAL_MUST_HAVE_GEOM_COL = 1687;
exports.ER_TOO_LONG_INDEX_COMMENT = 1688;
exports.ER_LOCK_ABORTED = 1689;
exports.ER_DATA_OUT_OF_RANGE = 1690;
exports.ER_WRONG_SPVAR_TYPE_IN_LIMIT = 1691;
exports.ER_BINLOG_UNSAFE_MULTIPLE_ENGINES_AND_SELF_LOGGING_ENGINE = 1692;
exports.ER_BINLOG_UNSAFE_MIXED_STATEMENT = 1693;
exports.ER_INSIDE_TRANSACTION_PREVENTS_SWITCH_SQL_LOG_BIN = 1694;
exports.ER_STORED_FUNCTION_PREVENTS_SWITCH_SQL_LOG_BIN = 1695;
exports.ER_FAILED_READ_FROM_PAR_FILE = 1696;
exports.ER_VALUES_IS_NOT_INT_TYPE_ERROR = 1697;
exports.ER_ACCESS_DENIED_NO_PASSWORD_ERROR = 1698;
exports.ER_SET_PASSWORD_AUTH_PLUGIN = 1699;
exports.ER_GRANT_PLUGIN_USER_EXISTS = 1700;
exports.ER_TRUNCATE_ILLEGAL_FK = 1701;
exports.ER_PLUGIN_IS_PERMANENT = 1702;
exports.ER_REPLICA_HEARTBEAT_VALUE_OUT_OF_RANGE_MIN = 1703;
exports.ER_REPLICA_HEARTBEAT_VALUE_OUT_OF_RANGE_MAX = 1704;
exports.ER_STMT_CACHE_FULL = 1705;
exports.ER_MULTI_UPDATE_KEY_CONFLICT = 1706;
exports.ER_TABLE_NEEDS_REBUILD = 1707;
exports.WARN_OPTION_BELOW_LIMIT = 1708;
exports.ER_INDEX_COLUMN_TOO_LONG = 1709;
exports.ER_ERROR_IN_TRIGGER_BODY = 1710;
exports.ER_ERROR_IN_UNKNOWN_TRIGGER_BODY = 1711;
exports.ER_INDEX_CORRUPT = 1712;
exports.ER_UNDO_RECORD_TOO_BIG = 1713;
exports.ER_BINLOG_UNSAFE_INSERT_IGNORE_SELECT = 1714;
exports.ER_BINLOG_UNSAFE_INSERT_SELECT_UPDATE = 1715;
exports.ER_BINLOG_UNSAFE_REPLACE_SELECT = 1716;
exports.ER_BINLOG_UNSAFE_CREATE_IGNORE_SELECT = 1717;
exports.ER_BINLOG_UNSAFE_CREATE_REPLACE_SELECT = 1718;
exports.ER_BINLOG_UNSAFE_UPDATE_IGNORE = 1719;
exports.ER_PLUGIN_NO_UNINSTALL = 1720;
exports.ER_PLUGIN_NO_INSTALL = 1721;
exports.ER_BINLOG_UNSAFE_WRITE_AUTOINC_SELECT = 1722;
exports.ER_BINLOG_UNSAFE_CREATE_SELECT_AUTOINC = 1723;
exports.ER_BINLOG_UNSAFE_INSERT_TWO_KEYS = 1724;
exports.ER_TABLE_IN_FK_CHECK = 1725;
exports.ER_UNSUPPORTED_ENGINE = 1726;
exports.ER_BINLOG_UNSAFE_AUTOINC_NOT_FIRST = 1727;
exports.ER_CANNOT_LOAD_FROM_TABLE_V2 = 1728;
exports.ER_SOURCE_DELAY_VALUE_OUT_OF_RANGE = 1729;
exports.ER_ONLY_FD_AND_RBR_EVENTS_ALLOWED_IN_BINLOG_STATEMENT = 1730;
exports.ER_PARTITION_EXCHANGE_DIFFERENT_OPTION = 1731;
exports.ER_PARTITION_EXCHANGE_PART_TABLE = 1732;
exports.ER_PARTITION_EXCHANGE_TEMP_TABLE = 1733;
exports.ER_PARTITION_INSTEAD_OF_SUBPARTITION = 1734;
exports.ER_UNKNOWN_PARTITION = 1735;
exports.ER_TABLES_DIFFERENT_METADATA = 1736;
exports.ER_ROW_DOES_NOT_MATCH_PARTITION = 1737;
exports.ER_BINLOG_CACHE_SIZE_GREATER_THAN_MAX = 1738;
exports.ER_WARN_INDEX_NOT_APPLICABLE = 1739;
exports.ER_PARTITION_EXCHANGE_FOREIGN_KEY = 1740;
exports.ER_NO_SUCH_KEY_VALUE = 1741;
exports.ER_RPL_INFO_DATA_TOO_LONG = 1742;
exports.ER_NETWORK_READ_EVENT_CHECKSUM_FAILURE = 1743;
exports.ER_BINLOG_READ_EVENT_CHECKSUM_FAILURE = 1744;
exports.ER_BINLOG_STMT_CACHE_SIZE_GREATER_THAN_MAX = 1745;
exports.ER_CANT_UPDATE_TABLE_IN_CREATE_TABLE_SELECT = 1746;
exports.ER_PARTITION_CLAUSE_ON_NONPARTITIONED = 1747;
exports.ER_ROW_DOES_NOT_MATCH_GIVEN_PARTITION_SET = 1748;
exports.ER_NO_SUCH_PARTITION = 1749;
exports.ER_CHANGE_RPL_INFO_REPOSITORY_FAILURE = 1750;
exports.ER_WARNING_NOT_COMPLETE_ROLLBACK_WITH_CREATED_TEMP_TABLE = 1751;
exports.ER_WARNING_NOT_COMPLETE_ROLLBACK_WITH_DROPPED_TEMP_TABLE = 1752;
exports.ER_MTA_FEATURE_IS_NOT_SUPPORTED = 1753;
exports.ER_MTA_UPDATED_DBS_GREATER_MAX = 1754;
exports.ER_MTA_CANT_PARALLEL = 1755;
exports.ER_MTA_INCONSISTENT_DATA = 1756;
exports.ER_FULLTEXT_NOT_SUPPORTED_WITH_PARTITIONING = 1757;
exports.ER_DA_INVALID_CONDITION_NUMBER = 1758;
exports.ER_INSECURE_PLAIN_TEXT = 1759;
exports.ER_INSECURE_CHANGE_SOURCE = 1760;
exports.ER_FOREIGN_DUPLICATE_KEY_WITH_CHILD_INFO = 1761;
exports.ER_FOREIGN_DUPLICATE_KEY_WITHOUT_CHILD_INFO = 1762;
exports.ER_SQLTHREAD_WITH_SECURE_REPLICA = 1763;
exports.ER_TABLE_HAS_NO_FT = 1764;
exports.ER_VARIABLE_NOT_SETTABLE_IN_SF_OR_TRIGGER = 1765;
exports.ER_VARIABLE_NOT_SETTABLE_IN_TRANSACTION = 1766;
exports.ER_GTID_NEXT_IS_NOT_IN_GTID_NEXT_LIST = 1767;
exports.ER_CANT_CHANGE_GTID_NEXT_IN_TRANSACTION = 1768;
exports.ER_SET_STATEMENT_CANNOT_INVOKE_FUNCTION = 1769;
exports.ER_GTID_NEXT_CANT_BE_AUTOMATIC_IF_GTID_NEXT_LIST_IS_NON_NULL = 1770;
exports.ER_SKIPPING_LOGGED_TRANSACTION = 1771;
exports.ER_MALFORMED_GTID_SET_SPECIFICATION = 1772;
exports.ER_MALFORMED_GTID_SET_ENCODING = 1773;
exports.ER_MALFORMED_GTID_SPECIFICATION = 1774;
exports.ER_GNO_EXHAUSTED = 1775;
exports.ER_BAD_REPLICA_AUTO_POSITION = 1776;
exports.ER_AUTO_POSITION_REQUIRES_GTID_MODE_NOT_OFF = 1777;
exports.ER_CANT_DO_IMPLICIT_COMMIT_IN_TRX_WHEN_GTID_NEXT_IS_SET = 1778;
exports.ER_GTID_MODE_ON_REQUIRES_ENFORCE_GTID_CONSISTENCY_ON = 1779;
exports.ER_GTID_MODE_REQUIRES_BINLOG = 1780;
exports.ER_CANT_SET_GTID_NEXT_TO_GTID_WHEN_GTID_MODE_IS_OFF = 1781;
exports.ER_CANT_SET_GTID_NEXT_TO_ANONYMOUS_WHEN_GTID_MODE_IS_ON = 1782;
exports.ER_CANT_SET_GTID_NEXT_LIST_TO_NON_NULL_WHEN_GTID_MODE_IS_OFF = 1783;
exports.ER_FOUND_GTID_EVENT_WHEN_GTID_MODE_IS_OFF = 1784;
exports.ER_GTID_UNSAFE_NON_TRANSACTIONAL_TABLE = 1785;
exports.ER_GTID_UNSAFE_CREATE_SELECT = 1786;
exports.ER_GTID_UNSAFE_CREATE_DROP_TEMP_TABLE_IN_TRANSACTION = 1787;
exports.ER_GTID_MODE_CAN_ONLY_CHANGE_ONE_STEP_AT_A_TIME = 1788;
exports.ER_SOURCE_HAS_PURGED_REQUIRED_GTIDS = 1789;
exports.ER_CANT_SET_GTID_NEXT_WHEN_OWNING_GTID = 1790;
exports.ER_UNKNOWN_EXPLAIN_FORMAT = 1791;
exports.ER_CANT_EXECUTE_IN_READ_ONLY_TRANSACTION = 1792;
exports.ER_TOO_LONG_TABLE_PARTITION_COMMENT = 1793;
exports.ER_REPLICA_CONFIGURATION = 1794;
exports.ER_INNODB_FT_LIMIT = 1795;
exports.ER_INNODB_NO_FT_TEMP_TABLE = 1796;
exports.ER_INNODB_FT_WRONG_DOCID_COLUMN = 1797;
exports.ER_INNODB_FT_WRONG_DOCID_INDEX = 1798;
exports.ER_INNODB_ONLINE_LOG_TOO_BIG = 1799;
exports.ER_UNKNOWN_ALTER_ALGORITHM = 1800;
exports.ER_UNKNOWN_ALTER_LOCK = 1801;
exports.ER_MTA_CHANGE_SOURCE_CANT_RUN_WITH_GAPS = 1802;
exports.ER_MTA_RECOVERY_FAILURE = 1803;
exports.ER_MTA_RESET_WORKERS = 1804;
exports.ER_COL_COUNT_DOESNT_MATCH_CORRUPTED_V2 = 1805;
exports.ER_REPLICA_SILENT_RETRY_TRANSACTION = 1806;
exports.ER_DISCARD_FK_CHECKS_RUNNING = 1807;
exports.ER_TABLE_SCHEMA_MISMATCH = 1808;
exports.ER_TABLE_IN_SYSTEM_TABLESPACE = 1809;
exports.ER_IO_READ_ERROR = 1810;
exports.ER_IO_WRITE_ERROR = 1811;
exports.ER_TABLESPACE_MISSING = 1812;
exports.ER_TABLESPACE_EXISTS = 1813;
exports.ER_TABLESPACE_DISCARDED = 1814;
exports.ER_INTERNAL_ERROR = 1815;
exports.ER_INNODB_IMPORT_ERROR = 1816;
exports.ER_INNODB_INDEX_CORRUPT = 1817;
exports.ER_INVALID_YEAR_COLUMN_LENGTH = 1818;
exports.ER_NOT_VALID_PASSWORD = 1819;
exports.ER_MUST_CHANGE_PASSWORD = 1820;
exports.ER_FK_NO_INDEX_CHILD = 1821;
exports.ER_FK_NO_INDEX_PARENT = 1822;
exports.ER_FK_FAIL_ADD_SYSTEM = 1823;
exports.ER_FK_CANNOT_OPEN_PARENT = 1824;
exports.ER_FK_INCORRECT_OPTION = 1825;
exports.ER_FK_DUP_NAME = 1826;
exports.ER_PASSWORD_FORMAT = 1827;
exports.ER_FK_COLUMN_CANNOT_DROP = 1828;
exports.ER_FK_COLUMN_CANNOT_DROP_CHILD = 1829;
exports.ER_FK_COLUMN_NOT_NULL = 1830;
exports.ER_DUP_INDEX = 1831;
exports.ER_FK_COLUMN_CANNOT_CHANGE = 1832;
exports.ER_FK_COLUMN_CANNOT_CHANGE_CHILD = 1833;
exports.ER_UNUSED5 = 1834;
exports.ER_MALFORMED_PACKET = 1835;
exports.ER_READ_ONLY_MODE = 1836;
exports.ER_GTID_NEXT_TYPE_UNDEFINED_GTID = 1837;
exports.ER_VARIABLE_NOT_SETTABLE_IN_SP = 1838;
exports.ER_CANT_SET_GTID_PURGED_WHEN_GTID_MODE_IS_OFF = 1839;
exports.ER_CANT_SET_GTID_PURGED_WHEN_GTID_EXECUTED_IS_NOT_EMPTY = 1840;
exports.ER_CANT_SET_GTID_PURGED_WHEN_OWNED_GTIDS_IS_NOT_EMPTY = 1841;
exports.ER_GTID_PURGED_WAS_CHANGED = 1842;
exports.ER_GTID_EXECUTED_WAS_CHANGED = 1843;
exports.ER_BINLOG_STMT_MODE_AND_NO_REPL_TABLES = 1844;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED = 1845;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON = 1846;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_COPY = 1847;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_PARTITION = 1848;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_FK_RENAME = 1849;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_COLUMN_TYPE = 1850;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_FK_CHECK = 1851;
exports.ER_UNUSED6 = 1852;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_NOPK = 1853;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_AUTOINC = 1854;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_HIDDEN_FTS = 1855;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_CHANGE_FTS = 1856;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_FTS = 1857;
exports.ER_SQL_REPLICA_SKIP_COUNTER_NOT_SETTABLE_IN_GTID_MODE = 1858;
exports.ER_DUP_UNKNOWN_IN_INDEX = 1859;
exports.ER_IDENT_CAUSES_TOO_LONG_PATH = 1860;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_NOT_NULL = 1861;
exports.ER_MUST_CHANGE_PASSWORD_LOGIN = 1862;
exports.ER_ROW_IN_WRONG_PARTITION = 1863;
exports.ER_MTA_EVENT_BIGGER_PENDING_JOBS_SIZE_MAX = 1864;
exports.ER_INNODB_NO_FT_USES_PARSER = 1865;
exports.ER_BINLOG_LOGICAL_CORRUPTION = 1866;
exports.ER_WARN_PURGE_LOG_IN_USE = 1867;
exports.ER_WARN_PURGE_LOG_IS_ACTIVE = 1868;
exports.ER_AUTO_INCREMENT_CONFLICT = 1869;
exports.WARN_ON_BLOCKHOLE_IN_RBR = 1870;
exports.ER_REPLICA_CM_INIT_REPOSITORY = 1871;
exports.ER_REPLICA_AM_INIT_REPOSITORY = 1872;
exports.ER_ACCESS_DENIED_CHANGE_USER_ERROR = 1873;
exports.ER_INNODB_READ_ONLY = 1874;
exports.ER_STOP_REPLICA_SQL_THREAD_TIMEOUT = 1875;
exports.ER_STOP_REPLICA_IO_THREAD_TIMEOUT = 1876;
exports.ER_TABLE_CORRUPT = 1877;
exports.ER_TEMP_FILE_WRITE_FAILURE = 1878;
exports.ER_INNODB_FT_AUX_NOT_HEX_ID = 1879;
exports.ER_OLD_TEMPORALS_UPGRADED = 1880;
exports.ER_INNODB_FORCED_RECOVERY = 1881;
exports.ER_AES_INVALID_IV = 1882;
exports.ER_PLUGIN_CANNOT_BE_UNINSTALLED = 1883;
exports.ER_GTID_UNSAFE_BINLOG_SPLITTABLE_STATEMENT_AND_ASSIGNED_GTID = 1884;
exports.ER_REPLICA_HAS_MORE_GTIDS_THAN_SOURCE = 1885;
exports.ER_MISSING_KEY = 1886;
exports.WARN_NAMED_PIPE_ACCESS_EVERYONE = 1887;
exports.ER_FILE_CORRUPT = 3000;
exports.ER_ERROR_ON_SOURCE = 3001;
exports.ER_INCONSISTENT_ERROR = 3002;
exports.ER_STORAGE_ENGINE_NOT_LOADED = 3003;
exports.ER_GET_STACKED_DA_WITHOUT_ACTIVE_HANDLER = 3004;
exports.ER_WARN_LEGACY_SYNTAX_CONVERTED = 3005;
exports.ER_BINLOG_UNSAFE_FULLTEXT_PLUGIN = 3006;
exports.ER_CANNOT_DISCARD_TEMPORARY_TABLE = 3007;
exports.ER_FK_DEPTH_EXCEEDED = 3008;
exports.ER_COL_COUNT_DOESNT_MATCH_PLEASE_UPDATE_V2 = 3009;
exports.ER_WARN_TRIGGER_DOESNT_HAVE_CREATED = 3010;
exports.ER_REFERENCED_TRG_DOES_NOT_EXIST = 3011;
exports.ER_EXPLAIN_NOT_SUPPORTED = 3012;
exports.ER_INVALID_FIELD_SIZE = 3013;
exports.ER_MISSING_HA_CREATE_OPTION = 3014;
exports.ER_ENGINE_OUT_OF_MEMORY = 3015;
exports.ER_PASSWORD_EXPIRE_ANONYMOUS_USER = 3016;
exports.ER_REPLICA_SQL_THREAD_MUST_STOP = 3017;
exports.ER_NO_FT_MATERIALIZED_SUBQUERY = 3018;
exports.ER_INNODB_UNDO_LOG_FULL = 3019;
exports.ER_INVALID_ARGUMENT_FOR_LOGARITHM = 3020;
exports.ER_REPLICA_CHANNEL_IO_THREAD_MUST_STOP = 3021;
exports.ER_WARN_OPEN_TEMP_TABLES_MUST_BE_ZERO = 3022;
exports.ER_WARN_ONLY_SOURCE_LOG_FILE_NO_POS = 3023;
exports.ER_QUERY_TIMEOUT = 3024;
exports.ER_NON_RO_SELECT_DISABLE_TIMER = 3025;
exports.ER_DUP_LIST_ENTRY = 3026;
exports.ER_SQL_MODE_NO_EFFECT = 3027;
exports.ER_AGGREGATE_ORDER_FOR_UNION = 3028;
exports.ER_AGGREGATE_ORDER_NON_AGG_QUERY = 3029;
exports.ER_REPLICA_WORKER_STOPPED_PREVIOUS_THD_ERROR = 3030;
exports.ER_DONT_SUPPORT_REPLICA_PRESERVE_COMMIT_ORDER = 3031;
exports.ER_SERVER_OFFLINE_MODE = 3032;
exports.ER_GIS_DIFFERENT_SRIDS = 3033;
exports.ER_GIS_UNSUPPORTED_ARGUMENT = 3034;
exports.ER_GIS_UNKNOWN_ERROR = 3035;
exports.ER_GIS_UNKNOWN_EXCEPTION = 3036;
exports.ER_GIS_INVALID_DATA = 3037;
exports.ER_BOOST_GEOMETRY_EMPTY_INPUT_EXCEPTION = 3038;
exports.ER_BOOST_GEOMETRY_CENTROID_EXCEPTION = 3039;
exports.ER_BOOST_GEOMETRY_OVERLAY_INVALID_INPUT_EXCEPTION = 3040;
exports.ER_BOOST_GEOMETRY_TURN_INFO_EXCEPTION = 3041;
exports.ER_BOOST_GEOMETRY_SELF_INTERSECTION_POINT_EXCEPTION = 3042;
exports.ER_BOOST_GEOMETRY_UNKNOWN_EXCEPTION = 3043;
exports.ER_STD_BAD_ALLOC_ERROR = 3044;
exports.ER_STD_DOMAIN_ERROR = 3045;
exports.ER_STD_LENGTH_ERROR = 3046;
exports.ER_STD_INVALID_ARGUMENT = 3047;
exports.ER_STD_OUT_OF_RANGE_ERROR = 3048;
exports.ER_STD_OVERFLOW_ERROR = 3049;
exports.ER_STD_RANGE_ERROR = 3050;
exports.ER_STD_UNDERFLOW_ERROR = 3051;
exports.ER_STD_LOGIC_ERROR = 3052;
exports.ER_STD_RUNTIME_ERROR = 3053;
exports.ER_STD_UNKNOWN_EXCEPTION = 3054;
exports.ER_GIS_DATA_WRONG_ENDIANESS = 3055;
exports.ER_CHANGE_SOURCE_PASSWORD_LENGTH = 3056;
exports.ER_USER_LOCK_WRONG_NAME = 3057;
exports.ER_USER_LOCK_DEADLOCK = 3058;
exports.ER_REPLACE_INACCESSIBLE_ROWS = 3059;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_GIS = 3060;
exports.ER_ILLEGAL_USER_VAR = 3061;
exports.ER_GTID_MODE_OFF = 3062;
exports.ER_UNSUPPORTED_BY_REPLICATION_THREAD = 3063;
exports.ER_INCORRECT_TYPE = 3064;
exports.ER_FIELD_IN_ORDER_NOT_SELECT = 3065;
exports.ER_AGGREGATE_IN_ORDER_NOT_SELECT = 3066;
exports.ER_INVALID_RPL_WILD_TABLE_FILTER_PATTERN = 3067;
exports.ER_NET_OK_PACKET_TOO_LARGE = 3068;
exports.ER_INVALID_JSON_DATA = 3069;
exports.ER_INVALID_GEOJSON_MISSING_MEMBER = 3070;
exports.ER_INVALID_GEOJSON_WRONG_TYPE = 3071;
exports.ER_INVALID_GEOJSON_UNSPECIFIED = 3072;
exports.ER_DIMENSION_UNSUPPORTED = 3073;
exports.ER_REPLICA_CHANNEL_DOES_NOT_EXIST = 3074;
exports.ER_SLAVE_MULTIPLE_CHANNELS_HOST_PORT = 3075;
exports.ER_REPLICA_CHANNEL_NAME_INVALID_OR_TOO_LONG = 3076;
exports.ER_REPLICA_NEW_CHANNEL_WRONG_REPOSITORY = 3077;
exports.ER_SLAVE_CHANNEL_DELETE = 3078;
exports.ER_REPLICA_MULTIPLE_CHANNELS_CMD = 3079;
exports.ER_REPLICA_MAX_CHANNELS_EXCEEDED = 3080;
exports.ER_REPLICA_CHANNEL_MUST_STOP = 3081;
exports.ER_REPLICA_CHANNEL_NOT_RUNNING = 3082;
exports.ER_REPLICA_CHANNEL_WAS_RUNNING = 3083;
exports.ER_REPLICA_CHANNEL_WAS_NOT_RUNNING = 3084;
exports.ER_REPLICA_CHANNEL_SQL_THREAD_MUST_STOP = 3085;
exports.ER_REPLICA_CHANNEL_SQL_SKIP_COUNTER = 3086;
exports.ER_WRONG_FIELD_WITH_GROUP_V2 = 3087;
exports.ER_MIX_OF_GROUP_FUNC_AND_FIELDS_V2 = 3088;
exports.ER_WARN_DEPRECATED_SYSVAR_UPDATE = 3089;
exports.ER_WARN_DEPRECATED_SQLMODE = 3090;
exports.ER_CANNOT_LOG_PARTIAL_DROP_DATABASE_WITH_GTID = 3091;
exports.ER_GROUP_REPLICATION_CONFIGURATION = 3092;
exports.ER_GROUP_REPLICATION_RUNNING = 3093;
exports.ER_GROUP_REPLICATION_APPLIER_INIT_ERROR = 3094;
exports.ER_GROUP_REPLICATION_STOP_APPLIER_THREAD_TIMEOUT = 3095;
exports.ER_GROUP_REPLICATION_COMMUNICATION_LAYER_SESSION_ERROR = 3096;
exports.ER_GROUP_REPLICATION_COMMUNICATION_LAYER_JOIN_ERROR = 3097;
exports.ER_BEFORE_DML_VALIDATION_ERROR = 3098;
exports.ER_PREVENTS_VARIABLE_WITHOUT_RBR = 3099;
exports.ER_RUN_HOOK_ERROR = 3100;
exports.ER_TRANSACTION_ROLLBACK_DURING_COMMIT = 3101;
exports.ER_GENERATED_COLUMN_FUNCTION_IS_NOT_ALLOWED = 3102;
exports.ER_UNSUPPORTED_ALTER_INPLACE_ON_VIRTUAL_COLUMN = 3103;
exports.ER_WRONG_FK_OPTION_FOR_GENERATED_COLUMN = 3104;
exports.ER_NON_DEFAULT_VALUE_FOR_GENERATED_COLUMN = 3105;
exports.ER_UNSUPPORTED_ACTION_ON_GENERATED_COLUMN = 3106;
exports.ER_GENERATED_COLUMN_NON_PRIOR = 3107;
exports.ER_DEPENDENT_BY_GENERATED_COLUMN = 3108;
exports.ER_GENERATED_COLUMN_REF_AUTO_INC = 3109;
exports.ER_FEATURE_NOT_AVAILABLE = 3110;
exports.ER_CANT_SET_GTID_MODE = 3111;
exports.ER_CANT_USE_AUTO_POSITION_WITH_GTID_MODE_OFF = 3112;
exports.ER_CANT_REPLICATE_ANONYMOUS_WITH_AUTO_POSITION = 3113;
exports.ER_CANT_REPLICATE_ANONYMOUS_WITH_GTID_MODE_ON = 3114;
exports.ER_CANT_REPLICATE_GTID_WITH_GTID_MODE_OFF = 3115;
exports.ER_CANT_ENFORCE_GTID_CONSISTENCY_WITH_ONGOING_GTID_VIOLATING_TX = 3116;
exports.ER_ENFORCE_GTID_CONSISTENCY_WARN_WITH_ONGOING_GTID_VIOLATING_TX = 3117;
exports.ER_ACCOUNT_HAS_BEEN_LOCKED = 3118;
exports.ER_WRONG_TABLESPACE_NAME = 3119;
exports.ER_TABLESPACE_IS_NOT_EMPTY = 3120;
exports.ER_WRONG_FILE_NAME = 3121;
exports.ER_BOOST_GEOMETRY_INCONSISTENT_TURNS_EXCEPTION = 3122;
exports.ER_WARN_OPTIMIZER_HINT_SYNTAX_ERROR = 3123;
exports.ER_WARN_BAD_MAX_EXECUTION_TIME = 3124;
exports.ER_WARN_UNSUPPORTED_MAX_EXECUTION_TIME = 3125;
exports.ER_WARN_CONFLICTING_HINT = 3126;
exports.ER_WARN_UNKNOWN_QB_NAME = 3127;
exports.ER_UNRESOLVED_HINT_NAME = 3128;
exports.ER_WARN_ON_MODIFYING_GTID_EXECUTED_TABLE = 3129;
exports.ER_PLUGGABLE_PROTOCOL_COMMAND_NOT_SUPPORTED = 3130;
exports.ER_LOCKING_SERVICE_WRONG_NAME = 3131;
exports.ER_LOCKING_SERVICE_DEADLOCK = 3132;
exports.ER_LOCKING_SERVICE_TIMEOUT = 3133;
exports.ER_GIS_MAX_POINTS_IN_GEOMETRY_OVERFLOWED = 3134;
exports.ER_SQL_MODE_MERGED = 3135;
exports.ER_VTOKEN_PLUGIN_TOKEN_MISMATCH = 3136;
exports.ER_VTOKEN_PLUGIN_TOKEN_NOT_FOUND = 3137;
exports.ER_CANT_SET_VARIABLE_WHEN_OWNING_GTID = 3138;
exports.ER_REPLICA_CHANNEL_OPERATION_NOT_ALLOWED = 3139;
exports.ER_INVALID_JSON_TEXT = 3140;
exports.ER_INVALID_JSON_TEXT_IN_PARAM = 3141;
exports.ER_INVALID_JSON_BINARY_DATA = 3142;
exports.ER_INVALID_JSON_PATH = 3143;
exports.ER_INVALID_JSON_CHARSET = 3144;
exports.ER_INVALID_JSON_CHARSET_IN_FUNCTION = 3145;
exports.ER_INVALID_TYPE_FOR_JSON = 3146;
exports.ER_INVALID_CAST_TO_JSON = 3147;
exports.ER_INVALID_JSON_PATH_CHARSET = 3148;
exports.ER_INVALID_JSON_PATH_WILDCARD = 3149;
exports.ER_JSON_VALUE_TOO_BIG = 3150;
exports.ER_JSON_KEY_TOO_BIG = 3151;
exports.ER_JSON_USED_AS_KEY = 3152;
exports.ER_JSON_VACUOUS_PATH = 3153;
exports.ER_JSON_BAD_ONE_OR_ALL_ARG = 3154;
exports.ER_NUMERIC_JSON_VALUE_OUT_OF_RANGE = 3155;
exports.ER_INVALID_JSON_VALUE_FOR_CAST = 3156;
exports.ER_JSON_DOCUMENT_TOO_DEEP = 3157;
exports.ER_JSON_DOCUMENT_NULL_KEY = 3158;
exports.ER_SECURE_TRANSPORT_REQUIRED = 3159;
exports.ER_NO_SECURE_TRANSPORTS_CONFIGURED = 3160;
exports.ER_DISABLED_STORAGE_ENGINE = 3161;
exports.ER_USER_DOES_NOT_EXIST = 3162;
exports.ER_USER_ALREADY_EXISTS = 3163;
exports.ER_AUDIT_API_ABORT = 3164;
exports.ER_INVALID_JSON_PATH_ARRAY_CELL = 3165;
exports.ER_BUFPOOL_RESIZE_INPROGRESS = 3166;
exports.ER_FEATURE_DISABLED_SEE_DOC = 3167;
exports.ER_SERVER_ISNT_AVAILABLE = 3168;
exports.ER_SESSION_WAS_KILLED = 3169;
exports.ER_CAPACITY_EXCEEDED = 3170;
exports.ER_CAPACITY_EXCEEDED_IN_RANGE_OPTIMIZER = 3171;
exports.ER_TABLE_NEEDS_UPG_PART = 3172;
exports.ER_CANT_WAIT_FOR_EXECUTED_GTID_SET_WHILE_OWNING_A_GTID = 3173;
exports.ER_CANNOT_ADD_FOREIGN_BASE_COL_VIRTUAL = 3174;
exports.ER_CANNOT_CREATE_VIRTUAL_INDEX_CONSTRAINT = 3175;
exports.ER_ERROR_ON_MODIFYING_GTID_EXECUTED_TABLE = 3176;
exports.ER_LOCK_REFUSED_BY_ENGINE = 3177;
exports.ER_UNSUPPORTED_ALTER_ONLINE_ON_VIRTUAL_COLUMN = 3178;
exports.ER_MASTER_KEY_ROTATION_NOT_SUPPORTED_BY_SE = 3179;
exports.ER_MASTER_KEY_ROTATION_ERROR_BY_SE = 3180;
exports.ER_MASTER_KEY_ROTATION_BINLOG_FAILED = 3181;
exports.ER_MASTER_KEY_ROTATION_SE_UNAVAILABLE = 3182;
exports.ER_TABLESPACE_CANNOT_ENCRYPT = 3183;
exports.ER_INVALID_ENCRYPTION_OPTION = 3184;
exports.ER_CANNOT_FIND_KEY_IN_KEYRING = 3185;
exports.ER_CAPACITY_EXCEEDED_IN_PARSER = 3186;
exports.ER_UNSUPPORTED_ALTER_ENCRYPTION_INPLACE = 3187;
exports.ER_KEYRING_UDF_KEYRING_SERVICE_ERROR = 3188;
exports.ER_USER_COLUMN_OLD_LENGTH = 3189;
exports.ER_CANT_RESET_SOURCE = 3190;
exports.ER_GROUP_REPLICATION_MAX_GROUP_SIZE = 3191;
exports.ER_CANNOT_ADD_FOREIGN_BASE_COL_STORED = 3192;
exports.ER_TABLE_REFERENCED = 3193;
exports.ER_PARTITION_ENGINE_DEPRECATED_FOR_TABLE = 3194;
exports.ER_WARN_USING_GEOMFROMWKB_TO_SET_SRID_ZERO = 3195;
exports.ER_WARN_USING_GEOMFROMWKB_TO_SET_SRID = 3196;
exports.ER_XA_RETRY = 3197;
exports.ER_KEYRING_AWS_UDF_AWS_KMS_ERROR = 3198;
exports.ER_BINLOG_UNSAFE_XA = 3199;
exports.ER_UDF_ERROR = 3200;
exports.ER_KEYRING_MIGRATION_FAILURE = 3201;
exports.ER_KEYRING_ACCESS_DENIED_ERROR = 3202;
exports.ER_KEYRING_MIGRATION_STATUS = 3203;
exports.ER_PLUGIN_FAILED_TO_OPEN_TABLES = 3204;
exports.ER_PLUGIN_FAILED_TO_OPEN_TABLE = 3205;
exports.ER_AUDIT_LOG_NO_KEYRING_PLUGIN_INSTALLED = 3206;
exports.ER_AUDIT_LOG_ENCRYPTION_PASSWORD_HAS_NOT_BEEN_SET = 3207;
exports.ER_AUDIT_LOG_COULD_NOT_CREATE_AES_KEY = 3208;
exports.ER_AUDIT_LOG_ENCRYPTION_PASSWORD_CANNOT_BE_FETCHED = 3209;
exports.ER_AUDIT_LOG_JSON_FILTERING_NOT_ENABLED = 3210;
exports.ER_AUDIT_LOG_UDF_INSUFFICIENT_PRIVILEGE = 3211;
exports.ER_AUDIT_LOG_SUPER_PRIVILEGE_REQUIRED = 3212;
exports.ER_COULD_NOT_REINITIALIZE_AUDIT_LOG_FILTERS = 3213;
exports.ER_AUDIT_LOG_UDF_INVALID_ARGUMENT_TYPE = 3214;
exports.ER_AUDIT_LOG_UDF_INVALID_ARGUMENT_COUNT = 3215;
exports.ER_AUDIT_LOG_HAS_NOT_BEEN_INSTALLED = 3216;
exports.ER_AUDIT_LOG_UDF_READ_INVALID_MAX_ARRAY_LENGTH_ARG_TYPE = 3217;
exports.ER_AUDIT_LOG_UDF_READ_INVALID_MAX_ARRAY_LENGTH_ARG_VALUE = 3218;
exports.ER_AUDIT_LOG_JSON_FILTER_PARSING_ERROR = 3219;
exports.ER_AUDIT_LOG_JSON_FILTER_NAME_CANNOT_BE_EMPTY = 3220;
exports.ER_AUDIT_LOG_JSON_USER_NAME_CANNOT_BE_EMPTY = 3221;
exports.ER_AUDIT_LOG_JSON_FILTER_DOES_NOT_EXISTS = 3222;
exports.ER_AUDIT_LOG_USER_FIRST_CHARACTER_MUST_BE_ALPHANUMERIC = 3223;
exports.ER_AUDIT_LOG_USER_NAME_INVALID_CHARACTER = 3224;
exports.ER_AUDIT_LOG_HOST_NAME_INVALID_CHARACTER = 3225;
exports.WARN_DEPRECATED_MAXDB_SQL_MODE_FOR_TIMESTAMP = 3226;
exports.ER_XA_REPLICATION_FILTERS = 3227;
exports.ER_CANT_OPEN_ERROR_LOG = 3228;
exports.ER_GROUPING_ON_TIMESTAMP_IN_DST = 3229;
exports.ER_CANT_START_SERVER_NAMED_PIPE = 3230;
exports.ER_WRITE_SET_EXCEEDS_LIMIT = 3231;
exports.ER_DEPRECATED_TLS_VERSION_SESSION_57 = 3232;
exports.ER_WARN_DEPRECATED_TLS_VERSION_57 = 3233;
exports.ER_WARN_WRONG_NATIVE_TABLE_STRUCTURE = 3234;
exports.ER_AES_INVALID_KDF_NAME = 3235;
exports.ER_AES_INVALID_KDF_ITERATIONS = 3236;
exports.WARN_AES_KEY_SIZE = 3237;
exports.ER_AES_INVALID_KDF_OPTION_SIZE = 3238;
exports.ER_UNSUPPORT_COMPRESSED_TEMPORARY_TABLE = 3500;
exports.ER_ACL_OPERATION_FAILED = 3501;
exports.ER_UNSUPPORTED_INDEX_ALGORITHM = 3502;
exports.ER_NO_SUCH_DB = 3503;
exports.ER_TOO_BIG_ENUM = 3504;
exports.ER_TOO_LONG_SET_ENUM_VALUE = 3505;
exports.ER_INVALID_DD_OBJECT = 3506;
exports.ER_UPDATING_DD_TABLE = 3507;
exports.ER_INVALID_DD_OBJECT_ID = 3508;
exports.ER_INVALID_DD_OBJECT_NAME = 3509;
exports.ER_TABLESPACE_MISSING_WITH_NAME = 3510;
exports.ER_TOO_LONG_ROUTINE_COMMENT = 3511;
exports.ER_SP_LOAD_FAILED = 3512;
exports.ER_INVALID_BITWISE_OPERANDS_SIZE = 3513;
exports.ER_INVALID_BITWISE_AGGREGATE_OPERANDS_SIZE = 3514;
exports.ER_WARN_UNSUPPORTED_HINT = 3515;
exports.ER_UNEXPECTED_GEOMETRY_TYPE = 3516;
exports.ER_SRS_PARSE_ERROR = 3517;
exports.ER_SRS_PROJ_PARAMETER_MISSING = 3518;
exports.ER_WARN_SRS_NOT_FOUND = 3519;
exports.ER_SRS_NOT_CARTESIAN = 3520;
exports.ER_SRS_NOT_CARTESIAN_UNDEFINED = 3521;
exports.ER_PK_INDEX_CANT_BE_INVISIBLE = 3522;
exports.ER_UNKNOWN_AUTHID = 3523;
exports.ER_FAILED_ROLE_GRANT = 3524;
exports.ER_OPEN_ROLE_TABLES = 3525;
exports.ER_FAILED_DEFAULT_ROLES = 3526;
exports.ER_COMPONENTS_NO_SCHEME = 3527;
exports.ER_COMPONENTS_NO_SCHEME_SERVICE = 3528;
exports.ER_COMPONENTS_CANT_LOAD = 3529;
exports.ER_ROLE_NOT_GRANTED = 3530;
exports.ER_FAILED_REVOKE_ROLE = 3531;
exports.ER_RENAME_ROLE = 3532;
exports.ER_COMPONENTS_CANT_ACQUIRE_SERVICE_IMPLEMENTATION = 3533;
exports.ER_COMPONENTS_CANT_SATISFY_DEPENDENCY = 3534;
exports.ER_COMPONENTS_LOAD_CANT_REGISTER_SERVICE_IMPLEMENTATION = 3535;
exports.ER_COMPONENTS_LOAD_CANT_INITIALIZE = 3536;
exports.ER_COMPONENTS_UNLOAD_NOT_LOADED = 3537;
exports.ER_COMPONENTS_UNLOAD_CANT_DEINITIALIZE = 3538;
exports.ER_COMPONENTS_CANT_RELEASE_SERVICE = 3539;
exports.ER_COMPONENTS_UNLOAD_CANT_UNREGISTER_SERVICE = 3540;
exports.ER_COMPONENTS_CANT_UNLOAD = 3541;
exports.ER_WARN_UNLOAD_THE_NOT_PERSISTED = 3542;
exports.ER_COMPONENT_TABLE_INCORRECT = 3543;
exports.ER_COMPONENT_MANIPULATE_ROW_FAILED = 3544;
exports.ER_COMPONENTS_UNLOAD_DUPLICATE_IN_GROUP = 3545;
exports.ER_CANT_SET_GTID_PURGED_DUE_SETS_CONSTRAINTS = 3546;
exports.ER_CANNOT_LOCK_USER_MANAGEMENT_CACHES = 3547;
exports.ER_SRS_NOT_FOUND = 3548;
exports.ER_VARIABLE_NOT_PERSISTED = 3549;
exports.ER_IS_QUERY_INVALID_CLAUSE = 3550;
exports.ER_UNABLE_TO_STORE_STATISTICS = 3551;
exports.ER_NO_SYSTEM_SCHEMA_ACCESS = 3552;
exports.ER_NO_SYSTEM_TABLESPACE_ACCESS = 3553;
exports.ER_NO_SYSTEM_TABLE_ACCESS = 3554;
exports.ER_NO_SYSTEM_TABLE_ACCESS_FOR_DICTIONARY_TABLE = 3555;
exports.ER_NO_SYSTEM_TABLE_ACCESS_FOR_SYSTEM_TABLE = 3556;
exports.ER_NO_SYSTEM_TABLE_ACCESS_FOR_TABLE = 3557;
exports.ER_INVALID_OPTION_KEY = 3558;
exports.ER_INVALID_OPTION_VALUE = 3559;
exports.ER_INVALID_OPTION_KEY_VALUE_PAIR = 3560;
exports.ER_INVALID_OPTION_START_CHARACTER = 3561;
exports.ER_INVALID_OPTION_END_CHARACTER = 3562;
exports.ER_INVALID_OPTION_CHARACTERS = 3563;
exports.ER_DUPLICATE_OPTION_KEY = 3564;
exports.ER_WARN_SRS_NOT_FOUND_AXIS_ORDER = 3565;
exports.ER_NO_ACCESS_TO_NATIVE_FCT = 3566;
exports.ER_RESET_SOURCE_TO_VALUE_OUT_OF_RANGE = 3567;
exports.ER_UNRESOLVED_TABLE_LOCK = 3568;
exports.ER_DUPLICATE_TABLE_LOCK = 3569;
exports.ER_BINLOG_UNSAFE_SKIP_LOCKED = 3570;
exports.ER_BINLOG_UNSAFE_NOWAIT = 3571;
exports.ER_LOCK_NOWAIT = 3572;
exports.ER_CTE_RECURSIVE_REQUIRES_UNION = 3573;
exports.ER_CTE_RECURSIVE_REQUIRES_NONRECURSIVE_FIRST = 3574;
exports.ER_CTE_RECURSIVE_FORBIDS_AGGREGATION = 3575;
exports.ER_CTE_RECURSIVE_FORBIDDEN_JOIN_ORDER = 3576;
exports.ER_CTE_RECURSIVE_REQUIRES_SINGLE_REFERENCE = 3577;
exports.ER_SWITCH_TMP_ENGINE = 3578;
exports.ER_WINDOW_NO_SUCH_WINDOW = 3579;
exports.ER_WINDOW_CIRCULARITY_IN_WINDOW_GRAPH = 3580;
exports.ER_WINDOW_NO_CHILD_PARTITIONING = 3581;
exports.ER_WINDOW_NO_INHERIT_FRAME = 3582;
exports.ER_WINDOW_NO_REDEFINE_ORDER_BY = 3583;
exports.ER_WINDOW_FRAME_START_ILLEGAL = 3584;
exports.ER_WINDOW_FRAME_END_ILLEGAL = 3585;
exports.ER_WINDOW_FRAME_ILLEGAL = 3586;
exports.ER_WINDOW_RANGE_FRAME_ORDER_TYPE = 3587;
exports.ER_WINDOW_RANGE_FRAME_TEMPORAL_TYPE = 3588;
exports.ER_WINDOW_RANGE_FRAME_NUMERIC_TYPE = 3589;
exports.ER_WINDOW_RANGE_BOUND_NOT_CONSTANT = 3590;
exports.ER_WINDOW_DUPLICATE_NAME = 3591;
exports.ER_WINDOW_ILLEGAL_ORDER_BY = 3592;
exports.ER_WINDOW_INVALID_WINDOW_FUNC_USE = 3593;
exports.ER_WINDOW_INVALID_WINDOW_FUNC_ALIAS_USE = 3594;
exports.ER_WINDOW_NESTED_WINDOW_FUNC_USE_IN_WINDOW_SPEC = 3595;
exports.ER_WINDOW_ROWS_INTERVAL_USE = 3596;
exports.ER_WINDOW_NO_GROUP_ORDER = 3597;
exports.ER_WINDOW_EXPLAIN_JSON = 3598;
exports.ER_WINDOW_FUNCTION_IGNORES_FRAME = 3599;
exports.ER_WL9236_NOW = 3600;
exports.ER_INVALID_NO_OF_ARGS = 3601;
exports.ER_FIELD_IN_GROUPING_NOT_GROUP_BY = 3602;
exports.ER_TOO_LONG_TABLESPACE_COMMENT = 3603;
exports.ER_ENGINE_CANT_DROP_TABLE = 3604;
exports.ER_ENGINE_CANT_DROP_MISSING_TABLE = 3605;
exports.ER_TABLESPACE_DUP_FILENAME = 3606;
exports.ER_DB_DROP_RMDIR2 = 3607;
exports.ER_IMP_NO_FILES_MATCHED = 3608;
exports.ER_IMP_SCHEMA_DOES_NOT_EXIST = 3609;
exports.ER_IMP_TABLE_ALREADY_EXISTS = 3610;
exports.ER_IMP_INCOMPATIBLE_MYSQLD_VERSION = 3611;
exports.ER_IMP_INCOMPATIBLE_DD_VERSION = 3612;
exports.ER_IMP_INCOMPATIBLE_SDI_VERSION = 3613;
exports.ER_WARN_INVALID_HINT = 3614;
exports.ER_VAR_DOES_NOT_EXIST = 3615;
exports.ER_LONGITUDE_OUT_OF_RANGE = 3616;
exports.ER_LATITUDE_OUT_OF_RANGE = 3617;
exports.ER_NOT_IMPLEMENTED_FOR_GEOGRAPHIC_SRS = 3618;
exports.ER_ILLEGAL_PRIVILEGE_LEVEL = 3619;
exports.ER_NO_SYSTEM_VIEW_ACCESS = 3620;
exports.ER_COMPONENT_FILTER_FLABBERGASTED = 3621;
exports.ER_PART_EXPR_TOO_LONG = 3622;
exports.ER_UDF_DROP_DYNAMICALLY_REGISTERED = 3623;
exports.ER_UNABLE_TO_STORE_COLUMN_STATISTICS = 3624;
exports.ER_UNABLE_TO_UPDATE_COLUMN_STATISTICS = 3625;
exports.ER_UNABLE_TO_DROP_COLUMN_STATISTICS = 3626;
exports.ER_UNABLE_TO_BUILD_HISTOGRAM = 3627;
exports.ER_MANDATORY_ROLE = 3628;
exports.ER_MISSING_TABLESPACE_FILE = 3629;
exports.ER_PERSIST_ONLY_ACCESS_DENIED_ERROR = 3630;
exports.ER_CMD_NEED_SUPER = 3631;
exports.ER_PATH_IN_DATADIR = 3632;
exports.ER_CLONE_DDL_IN_PROGRESS = 3633;
exports.ER_CLONE_TOO_MANY_CONCURRENT_CLONES = 3634;
exports.ER_APPLIER_LOG_EVENT_VALIDATION_ERROR = 3635;
exports.ER_CTE_MAX_RECURSION_DEPTH = 3636;
exports.ER_NOT_HINT_UPDATABLE_VARIABLE = 3637;
exports.ER_CREDENTIALS_CONTRADICT_TO_HISTORY = 3638;
exports.ER_WARNING_PASSWORD_HISTORY_CLAUSES_VOID = 3639;
exports.ER_CLIENT_DOES_NOT_SUPPORT = 3640;
exports.ER_I_S_SKIPPED_TABLESPACE = 3641;
exports.ER_TABLESPACE_ENGINE_MISMATCH = 3642;
exports.ER_WRONG_SRID_FOR_COLUMN = 3643;
exports.ER_CANNOT_ALTER_SRID_DUE_TO_INDEX = 3644;
exports.ER_WARN_BINLOG_PARTIAL_UPDATES_DISABLED = 3645;
exports.ER_WARN_BINLOG_V1_ROW_EVENTS_DISABLED = 3646;
exports.ER_WARN_BINLOG_PARTIAL_UPDATES_SUGGESTS_PARTIAL_IMAGES = 3647;
exports.ER_COULD_NOT_APPLY_JSON_DIFF = 3648;
exports.ER_CORRUPTED_JSON_DIFF = 3649;
exports.ER_RESOURCE_GROUP_EXISTS = 3650;
exports.ER_RESOURCE_GROUP_NOT_EXISTS = 3651;
exports.ER_INVALID_VCPU_ID = 3652;
exports.ER_INVALID_VCPU_RANGE = 3653;
exports.ER_INVALID_THREAD_PRIORITY = 3654;
exports.ER_DISALLOWED_OPERATION = 3655;
exports.ER_RESOURCE_GROUP_BUSY = 3656;
exports.ER_RESOURCE_GROUP_DISABLED = 3657;
exports.ER_FEATURE_UNSUPPORTED = 3658;
exports.ER_ATTRIBUTE_IGNORED = 3659;
exports.ER_INVALID_THREAD_ID = 3660;
exports.ER_RESOURCE_GROUP_BIND_FAILED = 3661;
exports.ER_INVALID_USE_OF_FORCE_OPTION = 3662;
exports.ER_GROUP_REPLICATION_COMMAND_FAILURE = 3663;
exports.ER_SDI_OPERATION_FAILED = 3664;
exports.ER_MISSING_JSON_TABLE_VALUE = 3665;
exports.ER_WRONG_JSON_TABLE_VALUE = 3666;
exports.ER_TF_MUST_HAVE_ALIAS = 3667;
exports.ER_TF_FORBIDDEN_JOIN_TYPE = 3668;
exports.ER_JT_VALUE_OUT_OF_RANGE = 3669;
exports.ER_JT_MAX_NESTED_PATH = 3670;
exports.ER_PASSWORD_EXPIRATION_NOT_SUPPORTED_BY_AUTH_METHOD = 3671;
exports.ER_INVALID_GEOJSON_CRS_NOT_TOP_LEVEL = 3672;
exports.ER_BAD_NULL_ERROR_NOT_IGNORED = 3673;
exports.WARN_USELESS_SPATIAL_INDEX = 3674;
exports.ER_DISK_FULL_NOWAIT = 3675;
exports.ER_PARSE_ERROR_IN_DIGEST_FN = 3676;
exports.ER_UNDISCLOSED_PARSE_ERROR_IN_DIGEST_FN = 3677;
exports.ER_SCHEMA_DIR_EXISTS = 3678;
exports.ER_SCHEMA_DIR_MISSING = 3679;
exports.ER_SCHEMA_DIR_CREATE_FAILED = 3680;
exports.ER_SCHEMA_DIR_UNKNOWN = 3681;
exports.ER_ONLY_IMPLEMENTED_FOR_SRID_0_AND_4326 = 3682;
exports.ER_BINLOG_EXPIRE_LOG_DAYS_AND_SECS_USED_TOGETHER = 3683;
exports.ER_REGEXP_BUFFER_OVERFLOW = 3684;
exports.ER_REGEXP_ILLEGAL_ARGUMENT = 3685;
exports.ER_REGEXP_INDEX_OUTOFBOUNDS_ERROR = 3686;
exports.ER_REGEXP_INTERNAL_ERROR = 3687;
exports.ER_REGEXP_RULE_SYNTAX = 3688;
exports.ER_REGEXP_BAD_ESCAPE_SEQUENCE = 3689;
exports.ER_REGEXP_UNIMPLEMENTED = 3690;
exports.ER_REGEXP_MISMATCHED_PAREN = 3691;
exports.ER_REGEXP_BAD_INTERVAL = 3692;
exports.ER_REGEXP_MAX_LT_MIN = 3693;
exports.ER_REGEXP_INVALID_BACK_REF = 3694;
exports.ER_REGEXP_LOOK_BEHIND_LIMIT = 3695;
exports.ER_REGEXP_MISSING_CLOSE_BRACKET = 3696;
exports.ER_REGEXP_INVALID_RANGE = 3697;
exports.ER_REGEXP_STACK_OVERFLOW = 3698;
exports.ER_REGEXP_TIME_OUT = 3699;
exports.ER_REGEXP_PATTERN_TOO_BIG = 3700;
exports.ER_CANT_SET_ERROR_LOG_SERVICE = 3701;
exports.ER_EMPTY_PIPELINE_FOR_ERROR_LOG_SERVICE = 3702;
exports.ER_COMPONENT_FILTER_DIAGNOSTICS = 3703;
exports.ER_NOT_IMPLEMENTED_FOR_CARTESIAN_SRS = 3704;
exports.ER_NOT_IMPLEMENTED_FOR_PROJECTED_SRS = 3705;
exports.ER_NONPOSITIVE_RADIUS = 3706;
exports.ER_RESTART_SERVER_FAILED = 3707;
exports.ER_SRS_MISSING_MANDATORY_ATTRIBUTE = 3708;
exports.ER_SRS_MULTIPLE_ATTRIBUTE_DEFINITIONS = 3709;
exports.ER_SRS_NAME_CANT_BE_EMPTY_OR_WHITESPACE = 3710;
exports.ER_SRS_ORGANIZATION_CANT_BE_EMPTY_OR_WHITESPACE = 3711;
exports.ER_SRS_ID_ALREADY_EXISTS = 3712;
exports.ER_WARN_SRS_ID_ALREADY_EXISTS = 3713;
exports.ER_CANT_MODIFY_SRID_0 = 3714;
exports.ER_WARN_RESERVED_SRID_RANGE = 3715;
exports.ER_CANT_MODIFY_SRS_USED_BY_COLUMN = 3716;
exports.ER_SRS_INVALID_CHARACTER_IN_ATTRIBUTE = 3717;
exports.ER_SRS_ATTRIBUTE_STRING_TOO_LONG = 3718;
exports.ER_DEPRECATED_UTF8_ALIAS = 3719;
exports.ER_DEPRECATED_NATIONAL = 3720;
exports.ER_INVALID_DEFAULT_UTF8MB4_COLLATION = 3721;
exports.ER_UNABLE_TO_COLLECT_LOG_STATUS = 3722;
exports.ER_RESERVED_TABLESPACE_NAME = 3723;
exports.ER_UNABLE_TO_SET_OPTION = 3724;
exports.ER_REPLICA_POSSIBLY_DIVERGED_AFTER_DDL = 3725;
exports.ER_SRS_NOT_GEOGRAPHIC = 3726;
exports.ER_POLYGON_TOO_LARGE = 3727;
exports.ER_SPATIAL_UNIQUE_INDEX = 3728;
exports.ER_INDEX_TYPE_NOT_SUPPORTED_FOR_SPATIAL_INDEX = 3729;
exports.ER_FK_CANNOT_DROP_PARENT = 3730;
exports.ER_GEOMETRY_PARAM_LONGITUDE_OUT_OF_RANGE = 3731;
exports.ER_GEOMETRY_PARAM_LATITUDE_OUT_OF_RANGE = 3732;
exports.ER_FK_CANNOT_USE_VIRTUAL_COLUMN = 3733;
exports.ER_FK_NO_COLUMN_PARENT = 3734;
exports.ER_CANT_SET_ERROR_SUPPRESSION_LIST = 3735;
exports.ER_SRS_GEOGCS_INVALID_AXES = 3736;
exports.ER_SRS_INVALID_SEMI_MAJOR_AXIS = 3737;
exports.ER_SRS_INVALID_INVERSE_FLATTENING = 3738;
exports.ER_SRS_INVALID_ANGULAR_UNIT = 3739;
exports.ER_SRS_INVALID_PRIME_MERIDIAN = 3740;
exports.ER_TRANSFORM_SOURCE_SRS_NOT_SUPPORTED = 3741;
exports.ER_TRANSFORM_TARGET_SRS_NOT_SUPPORTED = 3742;
exports.ER_TRANSFORM_SOURCE_SRS_MISSING_TOWGS84 = 3743;
exports.ER_TRANSFORM_TARGET_SRS_MISSING_TOWGS84 = 3744;
exports.ER_TEMP_TABLE_PREVENTS_SWITCH_SESSION_BINLOG_FORMAT = 3745;
exports.ER_TEMP_TABLE_PREVENTS_SWITCH_GLOBAL_BINLOG_FORMAT = 3746;
exports.ER_RUNNING_APPLIER_PREVENTS_SWITCH_GLOBAL_BINLOG_FORMAT = 3747;
exports.ER_CLIENT_GTID_UNSAFE_CREATE_DROP_TEMP_TABLE_IN_TRX_IN_SBR = 3748;
exports.ER_XA_CANT_CREATE_MDL_BACKUP = 3749;
exports.ER_TABLE_WITHOUT_PK = 3750;
exports.ER_WARN_DATA_TRUNCATED_FUNCTIONAL_INDEX = 3751;
exports.ER_WARN_DATA_OUT_OF_RANGE_FUNCTIONAL_INDEX = 3752;
exports.ER_FUNCTIONAL_INDEX_ON_JSON_OR_GEOMETRY_FUNCTION = 3753;
exports.ER_FUNCTIONAL_INDEX_REF_AUTO_INCREMENT = 3754;
exports.ER_CANNOT_DROP_COLUMN_FUNCTIONAL_INDEX = 3755;
exports.ER_FUNCTIONAL_INDEX_PRIMARY_KEY = 3756;
exports.ER_FUNCTIONAL_INDEX_ON_LOB = 3757;
exports.ER_FUNCTIONAL_INDEX_FUNCTION_IS_NOT_ALLOWED = 3758;
exports.ER_FULLTEXT_FUNCTIONAL_INDEX = 3759;
exports.ER_SPATIAL_FUNCTIONAL_INDEX = 3760;
exports.ER_WRONG_KEY_COLUMN_FUNCTIONAL_INDEX = 3761;
exports.ER_FUNCTIONAL_INDEX_ON_FIELD = 3762;
exports.ER_GENERATED_COLUMN_NAMED_FUNCTION_IS_NOT_ALLOWED = 3763;
exports.ER_GENERATED_COLUMN_ROW_VALUE = 3764;
exports.ER_GENERATED_COLUMN_VARIABLES = 3765;
exports.ER_DEPENDENT_BY_DEFAULT_GENERATED_VALUE = 3766;
exports.ER_DEFAULT_VAL_GENERATED_NON_PRIOR = 3767;
exports.ER_DEFAULT_VAL_GENERATED_REF_AUTO_INC = 3768;
exports.ER_DEFAULT_VAL_GENERATED_FUNCTION_IS_NOT_ALLOWED = 3769;
exports.ER_DEFAULT_VAL_GENERATED_NAMED_FUNCTION_IS_NOT_ALLOWED = 3770;
exports.ER_DEFAULT_VAL_GENERATED_ROW_VALUE = 3771;
exports.ER_DEFAULT_VAL_GENERATED_VARIABLES = 3772;
exports.ER_DEFAULT_AS_VAL_GENERATED = 3773;
exports.ER_UNSUPPORTED_ACTION_ON_DEFAULT_VAL_GENERATED = 3774;
exports.ER_GTID_UNSAFE_ALTER_ADD_COL_WITH_DEFAULT_EXPRESSION = 3775;
exports.ER_FK_CANNOT_CHANGE_ENGINE = 3776;
exports.ER_WARN_DEPRECATED_USER_SET_EXPR = 3777;
exports.ER_WARN_DEPRECATED_UTF8MB3_COLLATION = 3778;
exports.ER_WARN_DEPRECATED_NESTED_COMMENT_SYNTAX = 3779;
exports.ER_FK_INCOMPATIBLE_COLUMNS = 3780;
exports.ER_GR_HOLD_WAIT_TIMEOUT = 3781;
exports.ER_GR_HOLD_KILLED = 3782;
exports.ER_GR_HOLD_MEMBER_STATUS_ERROR = 3783;
exports.ER_RPL_ENCRYPTION_FAILED_TO_FETCH_KEY = 3784;
exports.ER_RPL_ENCRYPTION_KEY_NOT_FOUND = 3785;
exports.ER_RPL_ENCRYPTION_KEYRING_INVALID_KEY = 3786;
exports.ER_RPL_ENCRYPTION_HEADER_ERROR = 3787;
exports.ER_RPL_ENCRYPTION_FAILED_TO_ROTATE_LOGS = 3788;
exports.ER_RPL_ENCRYPTION_KEY_EXISTS_UNEXPECTED = 3789;
exports.ER_RPL_ENCRYPTION_FAILED_TO_GENERATE_KEY = 3790;
exports.ER_RPL_ENCRYPTION_FAILED_TO_STORE_KEY = 3791;
exports.ER_RPL_ENCRYPTION_FAILED_TO_REMOVE_KEY = 3792;
exports.ER_RPL_ENCRYPTION_UNABLE_TO_CHANGE_OPTION = 3793;
exports.ER_RPL_ENCRYPTION_MASTER_KEY_RECOVERY_FAILED = 3794;
exports.ER_SLOW_LOG_MODE_IGNORED_WHEN_NOT_LOGGING_TO_FILE = 3795;
exports.ER_GRP_TRX_CONSISTENCY_NOT_ALLOWED = 3796;
exports.ER_GRP_TRX_CONSISTENCY_BEFORE = 3797;
exports.ER_GRP_TRX_CONSISTENCY_AFTER_ON_TRX_BEGIN = 3798;
exports.ER_GRP_TRX_CONSISTENCY_BEGIN_NOT_ALLOWED = 3799;
exports.ER_FUNCTIONAL_INDEX_ROW_VALUE_IS_NOT_ALLOWED = 3800;
exports.ER_RPL_ENCRYPTION_FAILED_TO_ENCRYPT = 3801;
exports.ER_PAGE_TRACKING_NOT_STARTED = 3802;
exports.ER_PAGE_TRACKING_RANGE_NOT_TRACKED = 3803;
exports.ER_PAGE_TRACKING_CANNOT_PURGE = 3804;
exports.ER_RPL_ENCRYPTION_CANNOT_ROTATE_BINLOG_MASTER_KEY = 3805;
exports.ER_BINLOG_MASTER_KEY_RECOVERY_OUT_OF_COMBINATION = 3806;
exports.ER_BINLOG_MASTER_KEY_ROTATION_FAIL_TO_OPERATE_KEY = 3807;
exports.ER_BINLOG_MASTER_KEY_ROTATION_FAIL_TO_ROTATE_LOGS = 3808;
exports.ER_BINLOG_MASTER_KEY_ROTATION_FAIL_TO_REENCRYPT_LOG = 3809;
exports.ER_BINLOG_MASTER_KEY_ROTATION_FAIL_TO_CLEANUP_UNUSED_KEYS = 3810;
exports.ER_BINLOG_MASTER_KEY_ROTATION_FAIL_TO_CLEANUP_AUX_KEY = 3811;
exports.ER_NON_BOOLEAN_EXPR_FOR_CHECK_CONSTRAINT = 3812;
exports.ER_COLUMN_CHECK_CONSTRAINT_REFERENCES_OTHER_COLUMN = 3813;
exports.ER_CHECK_CONSTRAINT_NAMED_FUNCTION_IS_NOT_ALLOWED = 3814;
exports.ER_CHECK_CONSTRAINT_FUNCTION_IS_NOT_ALLOWED = 3815;
exports.ER_CHECK_CONSTRAINT_VARIABLES = 3816;
exports.ER_CHECK_CONSTRAINT_ROW_VALUE = 3817;
exports.ER_CHECK_CONSTRAINT_REFERS_AUTO_INCREMENT_COLUMN = 3818;
exports.ER_CHECK_CONSTRAINT_VIOLATED = 3819;
exports.ER_CHECK_CONSTRAINT_REFERS_UNKNOWN_COLUMN = 3820;
exports.ER_CHECK_CONSTRAINT_NOT_FOUND = 3821;
exports.ER_CHECK_CONSTRAINT_DUP_NAME = 3822;
exports.ER_CHECK_CONSTRAINT_CLAUSE_USING_FK_REFER_ACTION_COLUMN = 3823;
exports.WARN_UNENCRYPTED_TABLE_IN_ENCRYPTED_DB = 3824;
exports.ER_INVALID_ENCRYPTION_REQUEST = 3825;
exports.ER_CANNOT_SET_TABLE_ENCRYPTION = 3826;
exports.ER_CANNOT_SET_DATABASE_ENCRYPTION = 3827;
exports.ER_CANNOT_SET_TABLESPACE_ENCRYPTION = 3828;
exports.ER_TABLESPACE_CANNOT_BE_ENCRYPTED = 3829;
exports.ER_TABLESPACE_CANNOT_BE_DECRYPTED = 3830;
exports.ER_TABLESPACE_TYPE_UNKNOWN = 3831;
exports.ER_TARGET_TABLESPACE_UNENCRYPTED = 3832;
exports.ER_CANNOT_USE_ENCRYPTION_CLAUSE = 3833;
exports.ER_INVALID_MULTIPLE_CLAUSES = 3834;
exports.ER_UNSUPPORTED_USE_OF_GRANT_AS = 3835;
exports.ER_UKNOWN_AUTH_ID_OR_ACCESS_DENIED_FOR_GRANT_AS = 3836;
exports.ER_DEPENDENT_BY_FUNCTIONAL_INDEX = 3837;
exports.ER_PLUGIN_NOT_EARLY = 3838;
exports.ER_INNODB_REDO_LOG_ARCHIVE_START_SUBDIR_PATH = 3839;
exports.ER_INNODB_REDO_LOG_ARCHIVE_START_TIMEOUT = 3840;
exports.ER_INNODB_REDO_LOG_ARCHIVE_DIRS_INVALID = 3841;
exports.ER_INNODB_REDO_LOG_ARCHIVE_LABEL_NOT_FOUND = 3842;
exports.ER_INNODB_REDO_LOG_ARCHIVE_DIR_EMPTY = 3843;
exports.ER_INNODB_REDO_LOG_ARCHIVE_NO_SUCH_DIR = 3844;
exports.ER_INNODB_REDO_LOG_ARCHIVE_DIR_CLASH = 3845;
exports.ER_INNODB_REDO_LOG_ARCHIVE_DIR_PERMISSIONS = 3846;
exports.ER_INNODB_REDO_LOG_ARCHIVE_FILE_CREATE = 3847;
exports.ER_INNODB_REDO_LOG_ARCHIVE_ACTIVE = 3848;
exports.ER_INNODB_REDO_LOG_ARCHIVE_INACTIVE = 3849;
exports.ER_INNODB_REDO_LOG_ARCHIVE_FAILED = 3850;
exports.ER_INNODB_REDO_LOG_ARCHIVE_SESSION = 3851;
exports.ER_STD_REGEX_ERROR = 3852;
exports.ER_INVALID_JSON_TYPE = 3853;
exports.ER_CANNOT_CONVERT_STRING = 3854;
exports.ER_DEPENDENT_BY_PARTITION_FUNC = 3855;
exports.ER_WARN_DEPRECATED_FLOAT_AUTO_INCREMENT = 3856;
exports.ER_RPL_CANT_STOP_REPLICA_WHILE_LOCKED_BACKUP = 3857;
exports.ER_WARN_DEPRECATED_FLOAT_DIGITS = 3858;
exports.ER_WARN_DEPRECATED_FLOAT_UNSIGNED = 3859;
exports.ER_WARN_DEPRECATED_INTEGER_DISPLAY_WIDTH = 3860;
exports.ER_WARN_DEPRECATED_ZEROFILL = 3861;
exports.ER_CLONE_DONOR = 3862;
exports.ER_CLONE_PROTOCOL = 3863;
exports.ER_CLONE_DONOR_VERSION = 3864;
exports.ER_CLONE_OS = 3865;
exports.ER_CLONE_PLATFORM = 3866;
exports.ER_CLONE_CHARSET = 3867;
exports.ER_CLONE_CONFIG = 3868;
exports.ER_CLONE_SYS_CONFIG = 3869;
exports.ER_CLONE_PLUGIN_MATCH = 3870;
exports.ER_CLONE_LOOPBACK = 3871;
exports.ER_CLONE_ENCRYPTION = 3872;
exports.ER_CLONE_DISK_SPACE = 3873;
exports.ER_CLONE_IN_PROGRESS = 3874;
exports.ER_CLONE_DISALLOWED = 3875;
exports.ER_CANNOT_GRANT_ROLES_TO_ANONYMOUS_USER = 3876;
exports.ER_SECONDARY_ENGINE_PLUGIN = 3877;
exports.ER_SECOND_PASSWORD_CANNOT_BE_EMPTY = 3878;
exports.ER_DB_ACCESS_DENIED = 3879;
exports.ER_DA_AUTH_ID_WITH_SYSTEM_USER_PRIV_IN_MANDATORY_ROLES = 3880;
exports.ER_DA_RPL_GTID_TABLE_CANNOT_OPEN = 3881;
exports.ER_GEOMETRY_IN_UNKNOWN_LENGTH_UNIT = 3882;
exports.ER_DA_PLUGIN_INSTALL_ERROR = 3883;
exports.ER_NO_SESSION_TEMP = 3884;
exports.ER_DA_UNKNOWN_ERROR_NUMBER = 3885;
exports.ER_COLUMN_CHANGE_SIZE = 3886;
exports.ER_REGEXP_INVALID_CAPTURE_GROUP_NAME = 3887;
exports.ER_DA_SSL_LIBRARY_ERROR = 3888;
exports.ER_SECONDARY_ENGINE = 3889;
exports.ER_SECONDARY_ENGINE_DDL = 3890;
exports.ER_INCORRECT_CURRENT_PASSWORD = 3891;
exports.ER_MISSING_CURRENT_PASSWORD = 3892;
exports.ER_CURRENT_PASSWORD_NOT_REQUIRED = 3893;
exports.ER_PASSWORD_CANNOT_BE_RETAINED_ON_PLUGIN_CHANGE = 3894;
exports.ER_CURRENT_PASSWORD_CANNOT_BE_RETAINED = 3895;
exports.ER_PARTIAL_REVOKES_EXIST = 3896;
exports.ER_CANNOT_GRANT_SYSTEM_PRIV_TO_MANDATORY_ROLE = 3897;
exports.ER_XA_REPLICATION_FILTERS = 3898;
exports.ER_UNSUPPORTED_SQL_MODE = 3899;
exports.ER_REGEXP_INVALID_FLAG = 3900;
exports.ER_PARTIAL_REVOKE_AND_DB_GRANT_BOTH_EXISTS = 3901;
exports.ER_UNIT_NOT_FOUND = 3902;
exports.ER_INVALID_JSON_VALUE_FOR_FUNC_INDEX = 3903;
exports.ER_JSON_VALUE_OUT_OF_RANGE_FOR_FUNC_INDEX = 3904;
exports.ER_EXCEEDED_MV_KEYS_NUM = 3905;
exports.ER_EXCEEDED_MV_KEYS_SPACE = 3906;
exports.ER_FUNCTIONAL_INDEX_DATA_IS_TOO_LONG = 3907;
exports.ER_WRONG_MVI_VALUE = 3908;
exports.ER_WARN_FUNC_INDEX_NOT_APPLICABLE = 3909;
exports.ER_GRP_RPL_UDF_ERROR = 3910;
exports.ER_UPDATE_GTID_PURGED_WITH_GR = 3911;
exports.ER_GROUPING_ON_TIMESTAMP_IN_DST = 3912;
exports.ER_TABLE_NAME_CAUSES_TOO_LONG_PATH = 3913;
exports.ER_AUDIT_LOG_INSUFFICIENT_PRIVILEGE = 3914;
exports.ER_AUDIT_LOG_PASSWORD_HAS_BEEN_COPIED = 3915;
exports.ER_DA_GRP_RPL_STARTED_AUTO_REJOIN = 3916;
exports.ER_SYSVAR_CHANGE_DURING_QUERY = 3917;
exports.ER_GLOBSTAT_CHANGE_DURING_QUERY = 3918;
exports.ER_GRP_RPL_MESSAGE_SERVICE_INIT_FAILURE = 3919;
exports.ER_CHANGE_SOURCE_WRONG_COMPRESSION_ALGORITHM_CLIENT = 3920;
exports.ER_CHANGE_SOURCE_WRONG_COMPRESSION_LEVEL_CLIENT = 3921;
exports.ER_WRONG_COMPRESSION_ALGORITHM_CLIENT = 3922;
exports.ER_WRONG_COMPRESSION_LEVEL_CLIENT = 3923;
exports.ER_CHANGE_SOURCE_WRONG_COMPRESSION_ALGORITHM_LIST_CLIENT = 3924;
exports.ER_CLIENT_PRIVILEGE_CHECKS_USER_CANNOT_BE_ANONYMOUS = 3925;
exports.ER_CLIENT_PRIVILEGE_CHECKS_USER_DOES_NOT_EXIST = 3926;
exports.ER_CLIENT_PRIVILEGE_CHECKS_USER_CORRUPT = 3927;
exports.ER_CLIENT_PRIVILEGE_CHECKS_USER_NEEDS_RPL_APPLIER_PRIV = 3928;
exports.ER_WARN_DA_PRIVILEGE_NOT_REGISTERED = 3929;
exports.ER_CLIENT_KEYRING_UDF_KEY_INVALID = 3930;
exports.ER_CLIENT_KEYRING_UDF_KEY_TYPE_INVALID = 3931;
exports.ER_CLIENT_KEYRING_UDF_KEY_TOO_LONG = 3932;
exports.ER_CLIENT_KEYRING_UDF_KEY_TYPE_TOO_LONG = 3933;
exports.ER_JSON_SCHEMA_VALIDATION_ERROR_WITH_DETAILED_REPORT = 3934;
exports.ER_DA_UDF_INVALID_CHARSET_SPECIFIED = 3935;
exports.ER_DA_UDF_INVALID_CHARSET = 3936;
exports.ER_DA_UDF_INVALID_COLLATION = 3937;
exports.ER_DA_UDF_INVALID_EXTENSION_ARGUMENT_TYPE = 3938;
exports.ER_MULTIPLE_CONSTRAINTS_WITH_SAME_NAME = 3939;
exports.ER_CONSTRAINT_NOT_FOUND = 3940;
exports.ER_ALTER_CONSTRAINT_ENFORCEMENT_NOT_SUPPORTED = 3941;
exports.ER_TABLE_VALUE_CONSTRUCTOR_MUST_HAVE_COLUMNS = 3942;
exports.ER_TABLE_VALUE_CONSTRUCTOR_CANNOT_HAVE_DEFAULT = 3943;
exports.ER_CLIENT_QUERY_FAILURE_INVALID_NON_ROW_FORMAT = 3944;
exports.ER_REQUIRE_ROW_FORMAT_INVALID_VALUE = 3945;
exports.ER_FAILED_TO_DETERMINE_IF_ROLE_IS_MANDATORY = 3946;
exports.ER_FAILED_TO_FETCH_MANDATORY_ROLE_LIST = 3947;
exports.ER_CLIENT_LOCAL_FILES_DISABLED = 3948;
exports.ER_IMP_INCOMPATIBLE_CFG_VERSION = 3949;
exports.ER_DA_OOM = 3950;
exports.ER_DA_UDF_INVALID_ARGUMENT_TO_SET_CHARSET = 3951;
exports.ER_DA_UDF_INVALID_RETURN_TYPE_TO_SET_CHARSET = 3952;
exports.ER_MULTIPLE_INTO_CLAUSES = 3953;
exports.ER_MISPLACED_INTO = 3954;
exports.ER_USER_ACCESS_DENIED_FOR_USER_ACCOUNT_BLOCKED_BY_PASSWORD_LOCK = 3955;
exports.ER_WARN_DEPRECATED_YEAR_UNSIGNED = 3956;
exports.ER_CLONE_NETWORK_PACKET = 3957;
exports.ER_SDI_OPERATION_FAILED_MISSING_RECORD = 3958;
exports.ER_DEPENDENT_BY_CHECK_CONSTRAINT = 3959;
exports.ER_GRP_OPERATION_NOT_ALLOWED_GR_MUST_STOP = 3960;
exports.ER_WARN_DEPRECATED_JSON_TABLE_ON_ERROR_ON_EMPTY = 3961;
exports.ER_WARN_DEPRECATED_INNER_INTO = 3962;
exports.ER_WARN_DEPRECATED_VALUES_FUNCTION_ALWAYS_NULL = 3963;
exports.ER_WARN_DEPRECATED_SQL_CALC_FOUND_ROWS = 3964;
exports.ER_WARN_DEPRECATED_FOUND_ROWS = 3965;
exports.ER_MISSING_JSON_VALUE = 3966;
exports.ER_MULTIPLE_JSON_VALUES = 3967;
exports.ER_HOSTNAME_TOO_LONG = 3968;
exports.ER_WARN_CLIENT_DEPRECATED_PARTITION_PREFIX_KEY = 3969;
exports.ER_GROUP_REPLICATION_USER_EMPTY_MSG = 3970;
exports.ER_GROUP_REPLICATION_USER_MANDATORY_MSG = 3971;
exports.ER_GROUP_REPLICATION_PASSWORD_LENGTH = 3972;
exports.ER_SUBQUERY_TRANSFORM_REJECTED = 3973;
exports.ER_DA_GRP_RPL_RECOVERY_ENDPOINT_FORMAT = 3974;
exports.ER_DA_GRP_RPL_RECOVERY_ENDPOINT_INVALID = 3975;
exports.ER_WRONG_VALUE_FOR_VAR_PLUS_ACTIONABLE_PART = 3976;
exports.ER_STATEMENT_NOT_ALLOWED_AFTER_START_TRANSACTION = 3977;
exports.ER_FOREIGN_KEY_WITH_ATOMIC_CREATE_SELECT = 3978;
exports.ER_NOT_ALLOWED_WITH_START_TRANSACTION = 3979;
exports.ER_INVALID_JSON_ATTRIBUTE = 3980;
exports.ER_ENGINE_ATTRIBUTE_NOT_SUPPORTED = 3981;
exports.ER_INVALID_USER_ATTRIBUTE_JSON = 3982;
exports.ER_INNODB_REDO_DISABLED = 3983;
exports.ER_INNODB_REDO_ARCHIVING_ENABLED = 3984;
exports.ER_MDL_OUT_OF_RESOURCES = 3985;
exports.ER_IMPLICIT_COMPARISON_FOR_JSON = 3986;
exports.ER_FUNCTION_DOES_NOT_SUPPORT_CHARACTER_SET = 3987;
exports.ER_IMPOSSIBLE_STRING_CONVERSION = 3988;
exports.ER_SCHEMA_READ_ONLY = 3989;
exports.ER_RPL_ASYNC_RECONNECT_GTID_MODE_OFF = 3990;
exports.ER_RPL_ASYNC_RECONNECT_AUTO_POSITION_OFF = 3991;
exports.ER_DISABLE_GTID_MODE_REQUIRES_ASYNC_RECONNECT_OFF = 3992;
exports.ER_DISABLE_AUTO_POSITION_REQUIRES_ASYNC_RECONNECT_OFF = 3993;
exports.ER_INVALID_PARAMETER_USE = 3994;
exports.ER_CHARACTER_SET_MISMATCH = 3995;
exports.ER_WARN_VAR_VALUE_CHANGE_NOT_SUPPORTED = 3996;
exports.ER_INVALID_TIME_ZONE_INTERVAL = 3997;
exports.ER_INVALID_CAST = 3998;
exports.ER_HYPERGRAPH_NOT_SUPPORTED_YET = 3999;
exports.ER_WARN_HYPERGRAPH_EXPERIMENTAL = 4000;
exports.ER_DA_NO_ERROR_LOG_PARSER_CONFIGURED = 4001;
exports.ER_DA_ERROR_LOG_TABLE_DISABLED = 4002;
exports.ER_DA_ERROR_LOG_MULTIPLE_FILTERS = 4003;
exports.ER_DA_CANT_OPEN_ERROR_LOG = 4004;
exports.ER_USER_REFERENCED_AS_DEFINER = 4005;
exports.ER_CANNOT_USER_REFERENCED_AS_DEFINER = 4006;
exports.ER_REGEX_NUMBER_TOO_BIG = 4007;
exports.ER_SPVAR_NONINTEGER_TYPE = 4008;
exports.WARN_UNSUPPORTED_ACL_TABLES_READ = 4009;
exports.ER_BINLOG_UNSAFE_ACL_TABLE_READ_IN_DML_DDL = 4010;
exports.ER_STOP_REPLICA_MONITOR_IO_THREAD_TIMEOUT = 4011;
exports.ER_STARTING_REPLICA_MONITOR_IO_THREAD = 4012;
exports.ER_CANT_USE_ANONYMOUS_TO_GTID_WITH_GTID_MODE_NOT_ON = 4013;
exports.ER_CANT_COMBINE_ANONYMOUS_TO_GTID_AND_AUTOPOSITION = 4014;
exports.ER_ASSIGN_GTIDS_TO_ANONYMOUS_TRANSACTIONS_REQUIRES_GTID_MODE_ON = 4015;
exports.ER_SQL_REPLICA_SKIP_COUNTER_USED_WITH_GTID_MODE_ON = 4016;
exports.ER_USING_ASSIGN_GTIDS_TO_ANONYMOUS_TRANSACTIONS_AS_LOCAL_OR_UUID = 4017;
exports.ER_CANT_SET_ANONYMOUS_TO_GTID_AND_WAIT_UNTIL_SQL_THD_AFTER_GTIDS = 4018;
exports.ER_CANT_SET_SQL_AFTER_OR_BEFORE_GTIDS_WITH_ANONYMOUS_TO_GTID = 4019;
exports.ER_ANONYMOUS_TO_GTID_UUID_SAME_AS_GROUP_NAME = 4020;
exports.ER_CANT_USE_SAME_UUID_AS_GROUP_NAME = 4021;
exports.ER_GRP_RPL_RECOVERY_CHANNEL_STILL_RUNNING = 4022;
exports.ER_INNODB_INVALID_AUTOEXTEND_SIZE_VALUE = 4023;
exports.ER_INNODB_INCOMPATIBLE_WITH_TABLESPACE = 4024;
exports.ER_INNODB_AUTOEXTEND_SIZE_OUT_OF_RANGE = 4025;
exports.ER_CANNOT_USE_AUTOEXTEND_SIZE_CLAUSE = 4026;
exports.ER_ROLE_GRANTED_TO_ITSELF = 4027;
exports.ER_TABLE_MUST_HAVE_A_VISIBLE_COLUMN = 4028;
exports.ER_INNODB_COMPRESSION_FAILURE = 4029;
exports.ER_WARN_ASYNC_CONN_FAILOVER_NETWORK_NAMESPACE = 4030;
exports.ER_CLIENT_INTERACTION_TIMEOUT = 4031;
exports.ER_INVALID_CAST_TO_GEOMETRY = 4032;
exports.ER_INVALID_CAST_POLYGON_RING_DIRECTION = 4033;
exports.ER_GIS_DIFFERENT_SRIDS_AGGREGATION = 4034;
exports.ER_RELOAD_KEYRING_FAILURE = 4035;
exports.ER_SDI_GET_KEYS_INVALID_TABLESPACE = 4036;
exports.ER_CHANGE_RPL_SRC_WRONG_COMPRESSION_ALGORITHM_SIZE = 4037;
exports.ER_WARN_DEPRECATED_TLS_VERSION_FOR_CHANNEL_CLI = 4038;
exports.ER_CANT_USE_SAME_UUID_AS_VIEW_CHANGE_UUID = 4039;
exports.ER_ANONYMOUS_TO_GTID_UUID_SAME_AS_VIEW_CHANGE_UUID = 4040;
exports.ER_GRP_RPL_VIEW_CHANGE_UUID_FAIL_GET_VARIABLE = 4041;
exports.ER_WARN_ADUIT_LOG_MAX_SIZE_AND_PRUNE_SECONDS = 4042;
exports.ER_WARN_ADUIT_LOG_MAX_SIZE_CLOSE_TO_ROTATE_ON_SIZE = 4043;
exports.ER_KERBEROS_CREATE_USER = 4044;
exports.ER_INSTALL_PLUGIN_CONFLICT_CLIENT = 4045;
exports.ER_DA_ERROR_LOG_COMPONENT_FLUSH_FAILED = 4046;
exports.ER_WARN_SQL_AFTER_MTS_GAPS_GAP_NOT_CALCULATED = 4047;
exports.ER_INVALID_ASSIGNMENT_TARGET = 4048;
exports.ER_OPERATION_NOT_ALLOWED_ON_GR_SECONDARY = 4049;
exports.ER_GRP_RPL_FAILOVER_CHANNEL_STATUS_PROPAGATION = 4050;
exports.ER_WARN_AUDIT_LOG_FORMAT_UNIX_TIMESTAMP_ONLY_WHEN_JSON = 4051;
exports.ER_INVALID_MFA_PLUGIN_SPECIFIED = 4052;
exports.ER_IDENTIFIED_BY_UNSUPPORTED = 4053;
exports.ER_INVALID_PLUGIN_FOR_REGISTRATION = 4054;
exports.ER_PLUGIN_REQUIRES_REGISTRATION = 4055;
exports.ER_MFA_METHOD_EXISTS = 4056;
exports.ER_MFA_METHOD_NOT_EXISTS = 4057;
exports.ER_AUTHENTICATION_POLICY_MISMATCH = 4058;
exports.ER_PLUGIN_REGISTRATION_DONE = 4059;
exports.ER_INVALID_USER_FOR_REGISTRATION = 4060;
exports.ER_USER_REGISTRATION_FAILED = 4061;
exports.ER_MFA_METHODS_INVALID_ORDER = 4062;
exports.ER_MFA_METHODS_IDENTICAL = 4063;
exports.ER_INVALID_MFA_OPERATIONS_FOR_PASSWORDLESS_USER = 4064;
exports.ER_CHANGE_REPLICATION_SOURCE_NO_OPTIONS_FOR_GTID_ONLY = 4065;
exports.ER_CHANGE_REP_SOURCE_CANT_DISABLE_REQ_ROW_FORMAT_WITH_GTID_ONLY = 4066;
exports.ER_CHANGE_REP_SOURCE_CANT_DISABLE_AUTO_POSITION_WITH_GTID_ONLY = 4067;
exports.ER_CHANGE_REP_SOURCE_CANT_DISABLE_GTID_ONLY_WITHOUT_POSITIONS = 4068;
exports.ER_CHANGE_REP_SOURCE_CANT_DISABLE_AUTO_POS_WITHOUT_POSITIONS = 4069;
exports.ER_CHANGE_REP_SOURCE_GR_CHANNEL_WITH_GTID_MODE_NOT_ON = 4070;
exports.ER_CANT_USE_GTID_ONLY_WITH_GTID_MODE_NOT_ON = 4071;
exports.ER_WARN_C_DISABLE_GTID_ONLY_WITH_SOURCE_AUTO_POS_INVALID_POS = 4072;
exports.ER_DA_SSL_FIPS_MODE_ERROR = 4073;
exports.ER_VALUE_OUT_OF_RANGE = 4074;
exports.ER_FULLTEXT_WITH_ROLLUP = 4075;
exports.ER_REGEXP_MISSING_RESOURCE = 4076;
exports.ER_WARN_REGEXP_USING_DEFAULT = 4077;
exports.ER_REGEXP_MISSING_FILE = 4078;
exports.ER_WARN_DEPRECATED_COLLATION = 4079;
exports.ER_CONCURRENT_PROCEDURE_USAGE = 4080;
exports.ER_DA_GLOBAL_CONN_LIMIT = 4081;
exports.ER_DA_CONN_LIMIT = 4082;
exports.ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_COLUMN_TYPE_INSTANT = 4083;
exports.ER_WARN_SF_UDF_NAME_COLLISION = 4084;
exports.ER_CANNOT_PURGE_BINLOG_WITH_BACKUP_LOCK = 4085;
exports.ER_TOO_MANY_WINDOWS = 4086;
exports.ER_MYSQLBACKUP_CLIENT_MSG = 4087;
exports.ER_COMMENT_CONTAINS_INVALID_STRING = 4088;
exports.ER_DEFINITION_CONTAINS_INVALID_STRING = 4089;
exports.ER_CANT_EXECUTE_COMMAND_WITH_ASSIGNED_GTID_NEXT = 4090;
exports.ER_XA_TEMP_TABLE = 4091;
exports.ER_INNODB_MAX_ROW_VERSION = 4092;
exports.ER_INNODB_INSTANT_ADD_NOT_SUPPORTED_MAX_SIZE = 4093;
exports.ER_OPERATION_NOT_ALLOWED_WHILE_PRIMARY_CHANGE_IS_RUNNING = 4094;
exports.ER_WARN_DEPRECATED_DATETIME_DELIMITER = 4095;
exports.ER_WARN_DEPRECATED_SUPERFLUOUS_DELIMITER = 4096;
exports.ER_CANNOT_PERSIST_SENSITIVE_VARIABLES = 4097;
exports.ER_WARN_CANNOT_SECURELY_PERSIST_SENSITIVE_VARIABLES = 4098;
exports.ER_WARN_TRG_ALREADY_EXISTS = 4099;
exports.ER_IF_NOT_EXISTS_UNSUPPORTED_TRG_EXISTS_ON_DIFFERENT_TABLE = 4100;
exports.ER_IF_NOT_EXISTS_UNSUPPORTED_UDF_NATIVE_FCT_NAME_COLLISION = 4101;
exports.ER_SET_PASSWORD_AUTH_PLUGIN_ERROR = 4102;
exports.ER_REDUCED_DBLWR_FILE_CORRUPTED = 4103;
exports.ER_REDUCED_DBLWR_PAGE_FOUND = 4104;
exports.ER_SRS_INVALID_LATITUDE_OF_ORIGIN = 4105;
exports.ER_SRS_INVALID_LONGITUDE_OF_ORIGIN = 4106;
exports.ER_SRS_UNUSED_PROJ_PARAMETER_PRESENT = 4107;
exports.ER_GIPK_COLUMN_EXISTS = 4108;
exports.ER_GIPK_FAILED_AUTOINC_COLUMN_EXISTS = 4109;
exports.ER_GIPK_COLUMN_ALTER_NOT_ALLOWED = 4110;
exports.ER_DROP_PK_COLUMN_TO_DROP_GIPK = 4111;
exports.ER_CREATE_SELECT_WITH_GIPK_DISALLOWED_IN_SBR = 4112;
exports.ER_DA_EXPIRE_LOGS_DAYS_IGNORED = 4113;
exports.ER_CTE_RECURSIVE_NOT_UNION = 4114;
exports.ER_COMMAND_BACKEND_FAILED_TO_FETCH_SECURITY_CTX = 4115;
exports.ER_COMMAND_SERVICE_BACKEND_FAILED = 4116;
exports.ER_CLIENT_FILE_PRIVILEGE_FOR_REPLICATION_CHECKS = 4117;
exports.ER_GROUP_REPLICATION_FORCE_MEMBERS_COMMAND_FAILURE = 4118;
exports.ER_WARN_DEPRECATED_IDENT = 4119;
exports.ER_INTERSECT_ALL_MAX_DUPLICATES_EXCEEDED = 4120;
exports.ER_TP_QUERY_THRS_PER_GRP_EXCEEDS_TXN_THR_LIMIT = 4121;
exports.ER_BAD_TIMESTAMP_FORMAT = 4122;
exports.ER_SHAPE_PRIDICTION_UDF = 4123;
exports.ER_SRS_INVALID_HEIGHT = 4124;
exports.ER_SRS_INVALID_SCALING = 4125;
exports.ER_SRS_INVALID_ZONE_WIDTH = 4126;
exports.ER_SRS_INVALID_LATITUDE_POLAR_STERE_VAR_A = 4127;
exports.ER_WARN_DEPRECATED_CLIENT_NO_SCHEMA_OPTION = 4128;
exports.ER_TABLE_NOT_EMPTY = 4129;
exports.ER_TABLE_NO_PRIMARY_KEY = 4130;
exports.ER_TABLE_IN_SHARED_TABLESPACE = 4131;
exports.ER_INDEX_OTHER_THAN_PK = 4132;
exports.ER_LOAD_BULK_DATA_UNSORTED = 4133;
exports.ER_BULK_EXECUTOR_ERROR = 4134;
exports.ER_BULK_READER_LIBCURL_INIT_FAILED = 4135;
exports.ER_BULK_READER_LIBCURL_ERROR = 4136;
exports.ER_BULK_READER_SERVER_ERROR = 4137;
exports.ER_BULK_READER_COMMUNICATION_ERROR = 4138;
exports.ER_BULK_LOAD_DATA_FAILED = 4139;
exports.ER_BULK_LOADER_COLUMN_TOO_BIG_FOR_LEFTOVER_BUFFER = 4140;
exports.ER_BULK_LOADER_COMPONENT_ERROR = 4141;
exports.ER_BULK_LOADER_FILE_CONTAINS_LESS_LINES_THAN_IGNORE_CLAUSE = 4142;
exports.ER_BULK_PARSER_MISSING_ENCLOSED_BY = 4143;
exports.ER_BULK_PARSER_ROW_BUFFER_MAX_TOTAL_COLS_EXCEEDED = 4144;
exports.ER_BULK_PARSER_COPY_BUFFER_SIZE_EXCEEDED = 4145;
exports.ER_BULK_PARSER_UNEXPECTED_END_OF_INPUT = 4146;
exports.ER_BULK_PARSER_UNEXPECTED_ROW_TERMINATOR = 4147;
exports.ER_BULK_PARSER_UNEXPECTED_CHAR_AFTER_ENDING_ENCLOSED_BY = 4148;
exports.ER_BULK_PARSER_UNEXPECTED_CHAR_AFTER_NULL_ESCAPE = 4149;
exports.ER_BULK_PARSER_UNEXPECTED_CHAR_AFTER_COLUMN_TERMINATOR = 4150;
exports.ER_BULK_PARSER_INCOMPLETE_ESCAPE_SEQUENCE = 4151;
exports.ER_LOAD_BULK_DATA_FAILED = 4152;
exports.ER_LOAD_BULK_DATA_WRONG_VALUE_FOR_FIELD = 4153;
exports.ER_LOAD_BULK_DATA_WARN_NULL_TO_NOTNULL = 4154;
exports.ER_REQUIRE_TABLE_PRIMARY_KEY_CHECK_GENERATE_WITH_GR = 4155;
exports.ER_CANT_CHANGE_SYS_VAR_IN_READ_ONLY_MODE = 4156;
exports.ER_INNODB_INSTANT_ADD_DROP_NOT_SUPPORTED_MAX_SIZE = 4157;
exports.ER_INNODB_INSTANT_ADD_NOT_SUPPORTED_MAX_FIELDS = 4158;
exports.ER_CANT_SET_PERSISTED = 4159;
exports.ER_INSTALL_COMPONENT_SET_NULL_VALUE = 4160;
exports.ER_INSTALL_COMPONENT_SET_UNUSED_VALUE = 4161;
exports.ER_WARN_DEPRECATED_USER_DEFINED_COLLATIONS = 4162;

// Lookup-by-number table
exports[1] = 'EE_CANTCREATEFILE';
exports[2] = 'EE_READ';
exports[3] = 'EE_WRITE';
exports[4] = 'EE_BADCLOSE';
exports[5] = 'EE_OUTOFMEMORY';
exports[6] = 'EE_DELETE';
exports[7] = 'EE_LINK';
exports[9] = 'EE_EOFERR';
exports[10] = 'EE_CANTLOCK';
exports[11] = 'EE_CANTUNLOCK';
exports[12] = 'EE_DIR';
exports[13] = 'EE_STAT';
exports[14] = 'EE_CANT_CHSIZE';
exports[15] = 'EE_CANT_OPEN_STREAM';
exports[16] = 'EE_GETWD';
exports[17] = 'EE_SETWD';
exports[18] = 'EE_LINK_WARNING';
exports[19] = 'EE_OPEN_WARNING';
exports[20] = 'EE_DISK_FULL';
exports[21] = 'EE_CANT_MKDIR';
exports[22] = 'EE_UNKNOWN_CHARSET';
exports[23] = 'EE_OUT_OF_FILERESOURCES';
exports[24] = 'EE_CANT_READLINK';
exports[25] = 'EE_CANT_SYMLINK';
exports[26] = 'EE_REALPATH';
exports[27] = 'EE_SYNC';
exports[28] = 'EE_UNKNOWN_COLLATION';
exports[29] = 'EE_FILENOTFOUND';
exports[30] = 'EE_FILE_NOT_CLOSED';
exports[31] = 'EE_CHANGE_OWNERSHIP';
exports[32] = 'EE_CHANGE_PERMISSIONS';
exports[33] = 'EE_CANT_SEEK';
exports[34] = 'EE_CAPACITY_EXCEEDED';
exports[35] = 'EE_DISK_FULL_WITH_RETRY_MSG';
exports[36] = 'EE_FAILED_TO_CREATE_TIMER';
exports[37] = 'EE_FAILED_TO_DELETE_TIMER';
exports[38] = 'EE_FAILED_TO_CREATE_TIMER_QUEUE';
exports[39] = 'EE_FAILED_TO_START_TIMER_NOTIFY_THREAD';
exports[40] = 'EE_FAILED_TO_CREATE_TIMER_NOTIFY_THREAD_INTERRUPT_EVENT';
exports[41] = 'EE_EXITING_TIMER_NOTIFY_THREAD';
exports[42] = 'EE_WIN_LIBRARY_LOAD_FAILED';
exports[43] = 'EE_WIN_RUN_TIME_ERROR_CHECK';
exports[44] = 'EE_FAILED_TO_DETERMINE_LARGE_PAGE_SIZE';
exports[45] = 'EE_FAILED_TO_KILL_ALL_THREADS';
exports[46] = 'EE_FAILED_TO_CREATE_IO_COMPLETION_PORT';
exports[47] = 'EE_FAILED_TO_OPEN_DEFAULTS_FILE';
exports[48] = 'EE_FAILED_TO_HANDLE_DEFAULTS_FILE';
exports[49] = 'EE_WRONG_DIRECTIVE_IN_CONFIG_FILE';
exports[50] = 'EE_SKIPPING_DIRECTIVE_DUE_TO_MAX_INCLUDE_RECURSION';
exports[51] = 'EE_INCORRECT_GRP_DEFINITION_IN_CONFIG_FILE';
exports[52] = 'EE_OPTION_WITHOUT_GRP_IN_CONFIG_FILE';
exports[53] = 'EE_CONFIG_FILE_PERMISSION_ERROR';
exports[54] = 'EE_IGNORE_WORLD_WRITABLE_CONFIG_FILE';
exports[55] = 'EE_USING_DISABLED_OPTION';
exports[56] = 'EE_USING_DISABLED_SHORT_OPTION';
exports[57] = 'EE_USING_PASSWORD_ON_CLI_IS_INSECURE';
exports[58] = 'EE_UNKNOWN_SUFFIX_FOR_VARIABLE';
exports[59] = 'EE_SSL_ERROR_FROM_FILE';
exports[60] = 'EE_SSL_ERROR';
exports[61] = 'EE_NET_SEND_ERROR_IN_BOOTSTRAP';
exports[62] = 'EE_PACKETS_OUT_OF_ORDER';
exports[63] = 'EE_UNKNOWN_PROTOCOL_OPTION';
exports[64] = 'EE_FAILED_TO_LOCATE_SERVER_PUBLIC_KEY';
exports[65] = 'EE_PUBLIC_KEY_NOT_IN_PEM_FORMAT';
exports[66] = 'EE_DEBUG_INFO';
exports[67] = 'EE_UNKNOWN_VARIABLE';
exports[68] = 'EE_UNKNOWN_OPTION';
exports[69] = 'EE_UNKNOWN_SHORT_OPTION';
exports[70] = 'EE_OPTION_WITHOUT_ARGUMENT';
exports[71] = 'EE_OPTION_REQUIRES_ARGUMENT';
exports[72] = 'EE_SHORT_OPTION_REQUIRES_ARGUMENT';
exports[73] = 'EE_OPTION_IGNORED_DUE_TO_INVALID_VALUE';
exports[74] = 'EE_OPTION_WITH_EMPTY_VALUE';
exports[75] = 'EE_FAILED_TO_ASSIGN_MAX_VALUE_TO_OPTION';
exports[76] = 'EE_INCORRECT_BOOLEAN_VALUE_FOR_OPTION';
exports[77] = 'EE_FAILED_TO_SET_OPTION_VALUE';
exports[78] = 'EE_INCORRECT_INT_VALUE_FOR_OPTION';
exports[79] = 'EE_INCORRECT_UINT_VALUE_FOR_OPTION';
exports[80] = 'EE_ADJUSTED_SIGNED_VALUE_FOR_OPTION';
exports[81] = 'EE_ADJUSTED_UNSIGNED_VALUE_FOR_OPTION';
exports[82] = 'EE_ADJUSTED_ULONGLONG_VALUE_FOR_OPTION';
exports[83] = 'EE_ADJUSTED_DOUBLE_VALUE_FOR_OPTION';
exports[84] = 'EE_INVALID_DECIMAL_VALUE_FOR_OPTION';
exports[85] = 'EE_COLLATION_PARSER_ERROR';
exports[86] = 'EE_FAILED_TO_RESET_BEFORE_PRIMARY_IGNORABLE_CHAR';
exports[87] = 'EE_FAILED_TO_RESET_BEFORE_TERTIARY_IGNORABLE_CHAR';
exports[88] = 'EE_SHIFT_CHAR_OUT_OF_RANGE';
exports[89] = 'EE_RESET_CHAR_OUT_OF_RANGE';
exports[90] = 'EE_UNKNOWN_LDML_TAG';
exports[91] = 'EE_FAILED_TO_RESET_BEFORE_SECONDARY_IGNORABLE_CHAR';
exports[92] = 'EE_FAILED_PROCESSING_DIRECTIVE';
exports[93] = 'EE_PTHREAD_KILL_FAILED';
exports[120] = 'HA_ERR_KEY_NOT_FOUND';
exports[121] = 'HA_ERR_FOUND_DUPP_KEY';
exports[122] = 'HA_ERR_INTERNAL_ERROR';
exports[123] = 'HA_ERR_RECORD_CHANGED';
exports[124] = 'HA_ERR_WRONG_INDEX';
exports[125] = 'HA_ERR_ROLLED_BACK';
exports[126] = 'HA_ERR_CRASHED';
exports[127] = 'HA_ERR_WRONG_IN_RECORD';
exports[128] = 'HA_ERR_OUT_OF_MEM';
exports[130] = 'HA_ERR_NOT_A_TABLE';
exports[131] = 'HA_ERR_WRONG_COMMAND';
exports[132] = 'HA_ERR_OLD_FILE';
exports[133] = 'HA_ERR_NO_ACTIVE_RECORD';
exports[134] = 'HA_ERR_RECORD_DELETED';
exports[135] = 'HA_ERR_RECORD_FILE_FULL';
exports[136] = 'HA_ERR_INDEX_FILE_FULL';
exports[137] = 'HA_ERR_END_OF_FILE';
exports[138] = 'HA_ERR_UNSUPPORTED';
exports[139] = 'HA_ERR_TOO_BIG_ROW';
exports[140] = 'HA_WRONG_CREATE_OPTION';
exports[141] = 'HA_ERR_FOUND_DUPP_UNIQUE';
exports[142] = 'HA_ERR_UNKNOWN_CHARSET';
exports[143] = 'HA_ERR_WRONG_MRG_TABLE_DEF';
exports[144] = 'HA_ERR_CRASHED_ON_REPAIR';
exports[145] = 'HA_ERR_CRASHED_ON_USAGE';
exports[146] = 'HA_ERR_LOCK_WAIT_TIMEOUT';
exports[147] = 'HA_ERR_LOCK_TABLE_FULL';
exports[148] = 'HA_ERR_READ_ONLY_TRANSACTION';
exports[149] = 'HA_ERR_LOCK_DEADLOCK';
exports[150] = 'HA_ERR_CANNOT_ADD_FOREIGN';
exports[151] = 'HA_ERR_NO_REFERENCED_ROW';
exports[152] = 'HA_ERR_ROW_IS_REFERENCED';
exports[153] = 'HA_ERR_NO_SAVEPOINT';
exports[154] = 'HA_ERR_NON_UNIQUE_BLOCK_SIZE';
exports[155] = 'HA_ERR_NO_SUCH_TABLE';
exports[156] = 'HA_ERR_TABLE_EXIST';
exports[157] = 'HA_ERR_NO_CONNECTION';
exports[158] = 'HA_ERR_NULL_IN_SPATIAL';
exports[159] = 'HA_ERR_TABLE_DEF_CHANGED';
exports[160] = 'HA_ERR_NO_PARTITION_FOUND';
exports[161] = 'HA_ERR_RBR_LOGGING_FAILED';
exports[162] = 'HA_ERR_DROP_INDEX_FK';
exports[163] = 'HA_ERR_FOREIGN_DUPLICATE_KEY';
exports[164] = 'HA_ERR_TABLE_NEEDS_UPGRADE';
exports[165] = 'HA_ERR_TABLE_READONLY';
exports[166] = 'HA_ERR_AUTOINC_READ_FAILED';
exports[167] = 'HA_ERR_AUTOINC_ERANGE';
exports[168] = 'HA_ERR_GENERIC';
exports[169] = 'HA_ERR_RECORD_IS_THE_SAME';
exports[170] = 'HA_ERR_LOGGING_IMPOSSIBLE';
exports[171] = 'HA_ERR_CORRUPT_EVENT';
exports[172] = 'HA_ERR_NEW_FILE';
exports[173] = 'HA_ERR_ROWS_EVENT_APPLY';
exports[174] = 'HA_ERR_INITIALIZATION';
exports[175] = 'HA_ERR_FILE_TOO_SHORT';
exports[176] = 'HA_ERR_WRONG_CRC';
exports[177] = 'HA_ERR_TOO_MANY_CONCURRENT_TRXS';
exports[178] = 'HA_ERR_NOT_IN_LOCK_PARTITIONS';
exports[179] = 'HA_ERR_INDEX_COL_TOO_LONG';
exports[180] = 'HA_ERR_INDEX_CORRUPT';
exports[181] = 'HA_ERR_UNDO_REC_TOO_BIG';
exports[182] = 'HA_FTS_INVALID_DOCID';
exports[183] = 'HA_ERR_TABLE_IN_FK_CHECK';
exports[184] = 'HA_ERR_TABLESPACE_EXISTS';
exports[185] = 'HA_ERR_TOO_MANY_FIELDS';
exports[186] = 'HA_ERR_ROW_IN_WRONG_PARTITION';
exports[187] = 'HA_ERR_INNODB_READ_ONLY';
exports[188] = 'HA_ERR_FTS_EXCEED_RESULT_CACHE_LIMIT';
exports[189] = 'HA_ERR_TEMP_FILE_WRITE_FAILURE';
exports[190] = 'HA_ERR_INNODB_FORCED_RECOVERY';
exports[191] = 'HA_ERR_FTS_TOO_MANY_WORDS_IN_PHRASE';
exports[192] = 'HA_ERR_FK_DEPTH_EXCEEDED';
exports[193] = 'HA_MISSING_CREATE_OPTION';
exports[194] = 'HA_ERR_SE_OUT_OF_MEMORY';
exports[195] = 'HA_ERR_TABLE_CORRUPT';
exports[196] = 'HA_ERR_QUERY_INTERRUPTED';
exports[197] = 'HA_ERR_TABLESPACE_MISSING';
exports[198] = 'HA_ERR_TABLESPACE_IS_NOT_EMPTY';
exports[199] = 'HA_ERR_WRONG_FILE_NAME';
exports[200] = 'HA_ERR_NOT_ALLOWED_COMMAND';
exports[201] = 'HA_ERR_COMPUTE_FAILED';
exports[202] = 'HA_ERR_ROW_FORMAT_CHANGED';
exports[203] = 'HA_ERR_NO_WAIT_LOCK';
exports[204] = 'HA_ERR_DISK_FULL_NOWAIT';
exports[205] = 'HA_ERR_NO_SESSION_TEMP';
exports[206] = 'HA_ERR_WRONG_TABLE_NAME';
exports[207] = 'HA_ERR_TOO_LONG_PATH';
exports[208] = 'HA_ERR_SAMPLING_INIT_FAILED';
exports[209] = 'HA_ERR_FTS_TOO_MANY_NESTED_EXP';
exports[1000] = 'ER_HASHCHK';
exports[1001] = 'ER_NISAMCHK';
exports[1002] = 'ER_NO';
exports[1003] = 'ER_YES';
exports[1004] = 'ER_CANT_CREATE_FILE';
exports[1005] = 'ER_CANT_CREATE_TABLE';
exports[1006] = 'ER_CANT_CREATE_DB';
exports[1007] = 'ER_DB_CREATE_EXISTS';
exports[1008] = 'ER_DB_DROP_EXISTS';
exports[1009] = 'ER_DB_DROP_DELETE';
exports[1010] = 'ER_DB_DROP_RMDIR';
exports[1011] = 'ER_CANT_DELETE_FILE';
exports[1012] = 'ER_CANT_FIND_SYSTEM_REC';
exports[1013] = 'ER_CANT_GET_STAT';
exports[1014] = 'ER_CANT_GET_WD';
exports[1015] = 'ER_CANT_LOCK';
exports[1016] = 'ER_CANT_OPEN_FILE';
exports[1017] = 'ER_FILE_NOT_FOUND';
exports[1018] = 'ER_CANT_READ_DIR';
exports[1019] = 'ER_CANT_SET_WD';
exports[1020] = 'ER_CHECKREAD';
exports[1021] = 'ER_DISK_FULL';
exports[1022] = 'ER_DUP_KEY';
exports[1023] = 'ER_ERROR_ON_CLOSE';
exports[1024] = 'ER_ERROR_ON_READ';
exports[1025] = 'ER_ERROR_ON_RENAME';
exports[1026] = 'ER_ERROR_ON_WRITE';
exports[1027] = 'ER_FILE_USED';
exports[1028] = 'ER_FILSORT_ABORT';
exports[1029] = 'ER_FORM_NOT_FOUND';
exports[1030] = 'ER_GET_ERRNO';
exports[1031] = 'ER_ILLEGAL_HA';
exports[1032] = 'ER_KEY_NOT_FOUND';
exports[1033] = 'ER_NOT_FORM_FILE';
exports[1034] = 'ER_NOT_KEYFILE';
exports[1035] = 'ER_OLD_KEYFILE';
exports[1036] = 'ER_OPEN_AS_READONLY';
exports[1037] = 'ER_OUTOFMEMORY';
exports[1038] = 'ER_OUT_OF_SORTMEMORY';
exports[1039] = 'ER_UNEXPECTED_EOF';
exports[1040] = 'ER_CON_COUNT_ERROR';
exports[1041] = 'ER_OUT_OF_RESOURCES';
exports[1042] = 'ER_BAD_HOST_ERROR';
exports[1043] = 'ER_HANDSHAKE_ERROR';
exports[1044] = 'ER_DBACCESS_DENIED_ERROR';
exports[1045] = 'ER_ACCESS_DENIED_ERROR';
exports[1046] = 'ER_NO_DB_ERROR';
exports[1047] = 'ER_UNKNOWN_COM_ERROR';
exports[1048] = 'ER_BAD_NULL_ERROR';
exports[1049] = 'ER_BAD_DB_ERROR';
exports[1050] = 'ER_TABLE_EXISTS_ERROR';
exports[1051] = 'ER_BAD_TABLE_ERROR';
exports[1052] = 'ER_NON_UNIQ_ERROR';
exports[1053] = 'ER_SERVER_SHUTDOWN';
exports[1054] = 'ER_BAD_FIELD_ERROR';
exports[1055] = 'ER_WRONG_FIELD_WITH_GROUP';
exports[1056] = 'ER_WRONG_GROUP_FIELD';
exports[1057] = 'ER_WRONG_SUM_SELECT';
exports[1058] = 'ER_WRONG_VALUE_COUNT';
exports[1059] = 'ER_TOO_LONG_IDENT';
exports[1060] = 'ER_DUP_FIELDNAME';
exports[1061] = 'ER_DUP_KEYNAME';
exports[1062] = 'ER_DUP_ENTRY';
exports[1063] = 'ER_WRONG_FIELD_SPEC';
exports[1064] = 'ER_PARSE_ERROR';
exports[1065] = 'ER_EMPTY_QUERY';
exports[1066] = 'ER_NONUNIQ_TABLE';
exports[1067] = 'ER_INVALID_DEFAULT';
exports[1068] = 'ER_MULTIPLE_PRI_KEY';
exports[1069] = 'ER_TOO_MANY_KEYS';
exports[1070] = 'ER_TOO_MANY_KEY_PARTS';
exports[1071] = 'ER_TOO_LONG_KEY';
exports[1072] = 'ER_KEY_COLUMN_DOES_NOT_EXITS';
exports[1073] = 'ER_BLOB_USED_AS_KEY';
exports[1074] = 'ER_TOO_BIG_FIELDLENGTH';
exports[1075] = 'ER_WRONG_AUTO_KEY';
exports[1076] = 'ER_READY';
exports[1077] = 'ER_NORMAL_SHUTDOWN';
exports[1078] = 'ER_GOT_SIGNAL';
exports[1079] = 'ER_SHUTDOWN_COMPLETE';
exports[1080] = 'ER_FORCING_CLOSE';
exports[1081] = 'ER_IPSOCK_ERROR';
exports[1082] = 'ER_NO_SUCH_INDEX';
exports[1083] = 'ER_WRONG_FIELD_TERMINATORS';
exports[1084] = 'ER_BLOBS_AND_NO_TERMINATED';
exports[1085] = 'ER_TEXTFILE_NOT_READABLE';
exports[1086] = 'ER_FILE_EXISTS_ERROR';
exports[1087] = 'ER_LOAD_INFO';
exports[1088] = 'ER_ALTER_INFO';
exports[1089] = 'ER_WRONG_SUB_KEY';
exports[1090] = 'ER_CANT_REMOVE_ALL_FIELDS';
exports[1091] = 'ER_CANT_DROP_FIELD_OR_KEY';
exports[1092] = 'ER_INSERT_INFO';
exports[1093] = 'ER_UPDATE_TABLE_USED';
exports[1094] = 'ER_NO_SUCH_THREAD';
exports[1095] = 'ER_KILL_DENIED_ERROR';
exports[1096] = 'ER_NO_TABLES_USED';
exports[1097] = 'ER_TOO_BIG_SET';
exports[1098] = 'ER_NO_UNIQUE_LOGFILE';
exports[1099] = 'ER_TABLE_NOT_LOCKED_FOR_WRITE';
exports[1100] = 'ER_TABLE_NOT_LOCKED';
exports[1101] = 'ER_BLOB_CANT_HAVE_DEFAULT';
exports[1102] = 'ER_WRONG_DB_NAME';
exports[1103] = 'ER_WRONG_TABLE_NAME';
exports[1104] = 'ER_TOO_BIG_SELECT';
exports[1105] = 'ER_UNKNOWN_ERROR';
exports[1106] = 'ER_UNKNOWN_PROCEDURE';
exports[1107] = 'ER_WRONG_PARAMCOUNT_TO_PROCEDURE';
exports[1108] = 'ER_WRONG_PARAMETERS_TO_PROCEDURE';
exports[1109] = 'ER_UNKNOWN_TABLE';
exports[1110] = 'ER_FIELD_SPECIFIED_TWICE';
exports[1111] = 'ER_INVALID_GROUP_FUNC_USE';
exports[1112] = 'ER_UNSUPPORTED_EXTENSION';
exports[1113] = 'ER_TABLE_MUST_HAVE_COLUMNS';
exports[1114] = 'ER_RECORD_FILE_FULL';
exports[1115] = 'ER_UNKNOWN_CHARACTER_SET';
exports[1116] = 'ER_TOO_MANY_TABLES';
exports[1117] = 'ER_TOO_MANY_FIELDS';
exports[1118] = 'ER_TOO_BIG_ROWSIZE';
exports[1119] = 'ER_STACK_OVERRUN';
exports[1120] = 'ER_WRONG_OUTER_JOIN';
exports[1121] = 'ER_NULL_COLUMN_IN_INDEX';
exports[1122] = 'ER_CANT_FIND_UDF';
exports[1123] = 'ER_CANT_INITIALIZE_UDF';
exports[1124] = 'ER_UDF_NO_PATHS';
exports[1125] = 'ER_UDF_EXISTS';
exports[1126] = 'ER_CANT_OPEN_LIBRARY';
exports[1127] = 'ER_CANT_FIND_DL_ENTRY';
exports[1128] = 'ER_FUNCTION_NOT_DEFINED';
exports[1129] = 'ER_HOST_IS_BLOCKED';
exports[1130] = 'ER_HOST_NOT_PRIVILEGED';
exports[1131] = 'ER_PASSWORD_ANONYMOUS_USER';
exports[1132] = 'ER_PASSWORD_NOT_ALLOWED';
exports[1133] = 'ER_PASSWORD_NO_MATCH';
exports[1134] = 'ER_UPDATE_INFO';
exports[1135] = 'ER_CANT_CREATE_THREAD';
exports[1136] = 'ER_WRONG_VALUE_COUNT_ON_ROW';
exports[1137] = 'ER_CANT_REOPEN_TABLE';
exports[1138] = 'ER_INVALID_USE_OF_NULL';
exports[1139] = 'ER_REGEXP_ERROR';
exports[1140] = 'ER_MIX_OF_GROUP_FUNC_AND_FIELDS';
exports[1141] = 'ER_NONEXISTING_GRANT';
exports[1142] = 'ER_TABLEACCESS_DENIED_ERROR';
exports[1143] = 'ER_COLUMNACCESS_DENIED_ERROR';
exports[1144] = 'ER_ILLEGAL_GRANT_FOR_TABLE';
exports[1145] = 'ER_GRANT_WRONG_HOST_OR_USER';
exports[1146] = 'ER_NO_SUCH_TABLE';
exports[1147] = 'ER_NONEXISTING_TABLE_GRANT';
exports[1148] = 'ER_NOT_ALLOWED_COMMAND';
exports[1149] = 'ER_SYNTAX_ERROR';
exports[1150] = 'ER_UNUSED1';
exports[1151] = 'ER_UNUSED2';
exports[1152] = 'ER_ABORTING_CONNECTION';
exports[1153] = 'ER_NET_PACKET_TOO_LARGE';
exports[1154] = 'ER_NET_READ_ERROR_FROM_PIPE';
exports[1155] = 'ER_NET_FCNTL_ERROR';
exports[1156] = 'ER_NET_PACKETS_OUT_OF_ORDER';
exports[1157] = 'ER_NET_UNCOMPRESS_ERROR';
exports[1158] = 'ER_NET_READ_ERROR';
exports[1159] = 'ER_NET_READ_INTERRUPTED';
exports[1160] = 'ER_NET_ERROR_ON_WRITE';
exports[1161] = 'ER_NET_WRITE_INTERRUPTED';
exports[1162] = 'ER_TOO_LONG_STRING';
exports[1163] = 'ER_TABLE_CANT_HANDLE_BLOB';
exports[1164] = 'ER_TABLE_CANT_HANDLE_AUTO_INCREMENT';
exports[1165] = 'ER_UNUSED3';
exports[1166] = 'ER_WRONG_COLUMN_NAME';
exports[1167] = 'ER_WRONG_KEY_COLUMN';
exports[1168] = 'ER_WRONG_MRG_TABLE';
exports[1169] = 'ER_DUP_UNIQUE';
exports[1170] = 'ER_BLOB_KEY_WITHOUT_LENGTH';
exports[1171] = 'ER_PRIMARY_CANT_HAVE_NULL';
exports[1172] = 'ER_TOO_MANY_ROWS';
exports[1173] = 'ER_REQUIRES_PRIMARY_KEY';
exports[1174] = 'ER_NO_RAID_COMPILED';
exports[1175] = 'ER_UPDATE_WITHOUT_KEY_IN_SAFE_MODE';
exports[1176] = 'ER_KEY_DOES_NOT_EXITS';
exports[1177] = 'ER_CHECK_NO_SUCH_TABLE';
exports[1178] = 'ER_CHECK_NOT_IMPLEMENTED';
exports[1179] = 'ER_CANT_DO_THIS_DURING_AN_TRANSACTION';
exports[1180] = 'ER_ERROR_DURING_COMMIT';
exports[1181] = 'ER_ERROR_DURING_ROLLBACK';
exports[1182] = 'ER_ERROR_DURING_FLUSH_LOGS';
exports[1183] = 'ER_ERROR_DURING_CHECKPOINT';
exports[1184] = 'ER_NEW_ABORTING_CONNECTION';
exports[1185] = 'ER_DUMP_NOT_IMPLEMENTED';
exports[1186] = 'ER_FLUSH_MASTER_BINLOG_CLOSED';
exports[1187] = 'ER_INDEX_REBUILD';
exports[1188] = 'ER_SOURCE';
exports[1189] = 'ER_SOURCE_NET_READ';
exports[1190] = 'ER_SOURCE_NET_WRITE';
exports[1191] = 'ER_FT_MATCHING_KEY_NOT_FOUND';
exports[1192] = 'ER_LOCK_OR_ACTIVE_TRANSACTION';
exports[1193] = 'ER_UNKNOWN_SYSTEM_VARIABLE';
exports[1194] = 'ER_CRASHED_ON_USAGE';
exports[1195] = 'ER_CRASHED_ON_REPAIR';
exports[1196] = 'ER_WARNING_NOT_COMPLETE_ROLLBACK';
exports[1197] = 'ER_TRANS_CACHE_FULL';
exports[1198] = 'ER_SLAVE_MUST_STOP';
exports[1199] = 'ER_REPLICA_NOT_RUNNING';
exports[1200] = 'ER_BAD_REPLICA';
exports[1201] = 'ER_CONNECTION_METADATA';
exports[1202] = 'ER_REPLICA_THREAD';
exports[1203] = 'ER_TOO_MANY_USER_CONNECTIONS';
exports[1204] = 'ER_SET_CONSTANTS_ONLY';
exports[1205] = 'ER_LOCK_WAIT_TIMEOUT';
exports[1206] = 'ER_LOCK_TABLE_FULL';
exports[1207] = 'ER_READ_ONLY_TRANSACTION';
exports[1208] = 'ER_DROP_DB_WITH_READ_LOCK';
exports[1209] = 'ER_CREATE_DB_WITH_READ_LOCK';
exports[1210] = 'ER_WRONG_ARGUMENTS';
exports[1211] = 'ER_NO_PERMISSION_TO_CREATE_USER';
exports[1212] = 'ER_UNION_TABLES_IN_DIFFERENT_DIR';
exports[1213] = 'ER_LOCK_DEADLOCK';
exports[1214] = 'ER_TABLE_CANT_HANDLE_FT';
exports[1215] = 'ER_CANNOT_ADD_FOREIGN';
exports[1216] = 'ER_NO_REFERENCED_ROW';
exports[1217] = 'ER_ROW_IS_REFERENCED';
exports[1218] = 'ER_CONNECT_TO_SOURCE';
exports[1219] = 'ER_QUERY_ON_MASTER';
exports[1220] = 'ER_ERROR_WHEN_EXECUTING_COMMAND';
exports[1221] = 'ER_WRONG_USAGE';
exports[1222] = 'ER_WRONG_NUMBER_OF_COLUMNS_IN_SELECT';
exports[1223] = 'ER_CANT_UPDATE_WITH_READLOCK';
exports[1224] = 'ER_MIXING_NOT_ALLOWED';
exports[1225] = 'ER_DUP_ARGUMENT';
exports[1226] = 'ER_USER_LIMIT_REACHED';
exports[1227] = 'ER_SPECIFIC_ACCESS_DENIED_ERROR';
exports[1228] = 'ER_LOCAL_VARIABLE';
exports[1229] = 'ER_GLOBAL_VARIABLE';
exports[1230] = 'ER_NO_DEFAULT';
exports[1231] = 'ER_WRONG_VALUE_FOR_VAR';
exports[1232] = 'ER_WRONG_TYPE_FOR_VAR';
exports[1233] = 'ER_VAR_CANT_BE_READ';
exports[1234] = 'ER_CANT_USE_OPTION_HERE';
exports[1235] = 'ER_NOT_SUPPORTED_YET';
exports[1236] = 'ER_SOURCE_FATAL_ERROR_READING_BINLOG';
exports[1237] = 'ER_REPLICA_IGNORED_TABLE';
exports[1238] = 'ER_INCORRECT_GLOBAL_LOCAL_VAR';
exports[1239] = 'ER_WRONG_FK_DEF';
exports[1240] = 'ER_KEY_REF_DO_NOT_MATCH_TABLE_REF';
exports[1241] = 'ER_OPERAND_COLUMNS';
exports[1242] = 'ER_SUBQUERY_NO_1_ROW';
exports[1243] = 'ER_UNKNOWN_STMT_HANDLER';
exports[1244] = 'ER_CORRUPT_HELP_DB';
exports[1245] = 'ER_CYCLIC_REFERENCE';
exports[1246] = 'ER_AUTO_CONVERT';
exports[1247] = 'ER_ILLEGAL_REFERENCE';
exports[1248] = 'ER_DERIVED_MUST_HAVE_ALIAS';
exports[1249] = 'ER_SELECT_REDUCED';
exports[1250] = 'ER_TABLENAME_NOT_ALLOWED_HERE';
exports[1251] = 'ER_NOT_SUPPORTED_AUTH_MODE';
exports[1252] = 'ER_SPATIAL_CANT_HAVE_NULL';
exports[1253] = 'ER_COLLATION_CHARSET_MISMATCH';
exports[1254] = 'ER_SLAVE_WAS_RUNNING';
exports[1255] = 'ER_SLAVE_WAS_NOT_RUNNING';
exports[1256] = 'ER_TOO_BIG_FOR_UNCOMPRESS';
exports[1257] = 'ER_ZLIB_Z_MEM_ERROR';
exports[1258] = 'ER_ZLIB_Z_BUF_ERROR';
exports[1259] = 'ER_ZLIB_Z_DATA_ERROR';
exports[1260] = 'ER_CUT_VALUE_GROUP_CONCAT';
exports[1261] = 'ER_WARN_TOO_FEW_RECORDS';
exports[1262] = 'ER_WARN_TOO_MANY_RECORDS';
exports[1263] = 'ER_WARN_NULL_TO_NOTNULL';
exports[1264] = 'ER_WARN_DATA_OUT_OF_RANGE';
exports[1265] = 'WARN_DATA_TRUNCATED';
exports[1266] = 'ER_WARN_USING_OTHER_HANDLER';
exports[1267] = 'ER_CANT_AGGREGATE_2COLLATIONS';
exports[1268] = 'ER_DROP_USER';
exports[1269] = 'ER_REVOKE_GRANTS';
exports[1270] = 'ER_CANT_AGGREGATE_3COLLATIONS';
exports[1271] = 'ER_CANT_AGGREGATE_NCOLLATIONS';
exports[1272] = 'ER_VARIABLE_IS_NOT_STRUCT';
exports[1273] = 'ER_UNKNOWN_COLLATION';
exports[1274] = 'ER_REPLICA_IGNORED_SSL_PARAMS';
exports[1275] = 'ER_SERVER_IS_IN_SECURE_AUTH_MODE';
exports[1276] = 'ER_WARN_FIELD_RESOLVED';
exports[1277] = 'ER_BAD_REPLICA_UNTIL_COND';
exports[1278] = 'ER_MISSING_SKIP_REPLICA';
exports[1279] = 'ER_UNTIL_COND_IGNORED';
exports[1280] = 'ER_WRONG_NAME_FOR_INDEX';
exports[1281] = 'ER_WRONG_NAME_FOR_CATALOG';
exports[1282] = 'ER_WARN_QC_RESIZE';
exports[1283] = 'ER_BAD_FT_COLUMN';
exports[1284] = 'ER_UNKNOWN_KEY_CACHE';
exports[1285] = 'ER_WARN_HOSTNAME_WONT_WORK';
exports[1286] = 'ER_UNKNOWN_STORAGE_ENGINE';
exports[1287] = 'ER_WARN_DEPRECATED_SYNTAX';
exports[1288] = 'ER_NON_UPDATABLE_TABLE';
exports[1289] = 'ER_FEATURE_DISABLED';
exports[1290] = 'ER_OPTION_PREVENTS_STATEMENT';
exports[1291] = 'ER_DUPLICATED_VALUE_IN_TYPE';
exports[1292] = 'ER_TRUNCATED_WRONG_VALUE';
exports[1293] = 'ER_TOO_MUCH_AUTO_TIMESTAMP_COLS';
exports[1294] = 'ER_INVALID_ON_UPDATE';
exports[1295] = 'ER_UNSUPPORTED_PS';
exports[1296] = 'ER_GET_ERRMSG';
exports[1297] = 'ER_GET_TEMPORARY_ERRMSG';
exports[1298] = 'ER_UNKNOWN_TIME_ZONE';
exports[1299] = 'ER_WARN_INVALID_TIMESTAMP';
exports[1300] = 'ER_INVALID_CHARACTER_STRING';
exports[1301] = 'ER_WARN_ALLOWED_PACKET_OVERFLOWED';
exports[1302] = 'ER_CONFLICTING_DECLARATIONS';
exports[1303] = 'ER_SP_NO_RECURSIVE_CREATE';
exports[1304] = 'ER_SP_ALREADY_EXISTS';
exports[1305] = 'ER_SP_DOES_NOT_EXIST';
exports[1306] = 'ER_SP_DROP_FAILED';
exports[1307] = 'ER_SP_STORE_FAILED';
exports[1308] = 'ER_SP_LILABEL_MISMATCH';
exports[1309] = 'ER_SP_LABEL_REDEFINE';
exports[1310] = 'ER_SP_LABEL_MISMATCH';
exports[1311] = 'ER_SP_UNINIT_VAR';
exports[1312] = 'ER_SP_BADSELECT';
exports[1313] = 'ER_SP_BADRETURN';
exports[1314] = 'ER_SP_BADSTATEMENT';
exports[1315] = 'ER_UPDATE_LOG_DEPRECATED_IGNORED';
exports[1316] = 'ER_UPDATE_LOG_DEPRECATED_TRANSLATED';
exports[1317] = 'ER_QUERY_INTERRUPTED';
exports[1318] = 'ER_SP_WRONG_NO_OF_ARGS';
exports[1319] = 'ER_SP_COND_MISMATCH';
exports[1320] = 'ER_SP_NORETURN';
exports[1321] = 'ER_SP_NORETURNEND';
exports[1322] = 'ER_SP_BAD_CURSOR_QUERY';
exports[1323] = 'ER_SP_BAD_CURSOR_SELECT';
exports[1324] = 'ER_SP_CURSOR_MISMATCH';
exports[1325] = 'ER_SP_CURSOR_ALREADY_OPEN';
exports[1326] = 'ER_SP_CURSOR_NOT_OPEN';
exports[1327] = 'ER_SP_UNDECLARED_VAR';
exports[1328] = 'ER_SP_WRONG_NO_OF_FETCH_ARGS';
exports[1329] = 'ER_SP_FETCH_NO_DATA';
exports[1330] = 'ER_SP_DUP_PARAM';
exports[1331] = 'ER_SP_DUP_VAR';
exports[1332] = 'ER_SP_DUP_COND';
exports[1333] = 'ER_SP_DUP_CURS';
exports[1334] = 'ER_SP_CANT_ALTER';
exports[1335] = 'ER_SP_SUBSELECT_NYI';
exports[1336] = 'ER_STMT_NOT_ALLOWED_IN_SF_OR_TRG';
exports[1337] = 'ER_SP_VARCOND_AFTER_CURSHNDLR';
exports[1338] = 'ER_SP_CURSOR_AFTER_HANDLER';
exports[1339] = 'ER_SP_CASE_NOT_FOUND';
exports[1340] = 'ER_FPARSER_TOO_BIG_FILE';
exports[1341] = 'ER_FPARSER_BAD_HEADER';
exports[1342] = 'ER_FPARSER_EOF_IN_COMMENT';
exports[1343] = 'ER_FPARSER_ERROR_IN_PARAMETER';
exports[1344] = 'ER_FPARSER_EOF_IN_UNKNOWN_PARAMETER';
exports[1345] = 'ER_VIEW_NO_EXPLAIN';
exports[1346] = 'ER_FRM_UNKNOWN_TYPE';
exports[1347] = 'ER_WRONG_OBJECT';
exports[1348] = 'ER_NONUPDATEABLE_COLUMN';
exports[1349] = 'ER_VIEW_SELECT_DERIVED';
exports[1350] = 'ER_VIEW_SELECT_CLAUSE';
exports[1351] = 'ER_VIEW_SELECT_VARIABLE';
exports[1352] = 'ER_VIEW_SELECT_TMPTABLE';
exports[1353] = 'ER_VIEW_WRONG_LIST';
exports[1354] = 'ER_WARN_VIEW_MERGE';
exports[1355] = 'ER_WARN_VIEW_WITHOUT_KEY';
exports[1356] = 'ER_VIEW_INVALID';
exports[1357] = 'ER_SP_NO_DROP_SP';
exports[1358] = 'ER_SP_GOTO_IN_HNDLR';
exports[1359] = 'ER_TRG_ALREADY_EXISTS';
exports[1360] = 'ER_TRG_DOES_NOT_EXIST';
exports[1361] = 'ER_TRG_ON_VIEW_OR_TEMP_TABLE';
exports[1362] = 'ER_TRG_CANT_CHANGE_ROW';
exports[1363] = 'ER_TRG_NO_SUCH_ROW_IN_TRG';
exports[1364] = 'ER_NO_DEFAULT_FOR_FIELD';
exports[1365] = 'ER_DIVISION_BY_ZERO';
exports[1366] = 'ER_TRUNCATED_WRONG_VALUE_FOR_FIELD';
exports[1367] = 'ER_ILLEGAL_VALUE_FOR_TYPE';
exports[1368] = 'ER_VIEW_NONUPD_CHECK';
exports[1369] = 'ER_VIEW_CHECK_FAILED';
exports[1370] = 'ER_PROCACCESS_DENIED_ERROR';
exports[1371] = 'ER_RELAY_LOG_FAIL';
exports[1372] = 'ER_PASSWD_LENGTH';
exports[1373] = 'ER_UNKNOWN_TARGET_BINLOG';
exports[1374] = 'ER_IO_ERR_LOG_INDEX_READ';
exports[1375] = 'ER_BINLOG_PURGE_PROHIBITED';
exports[1376] = 'ER_FSEEK_FAIL';
exports[1377] = 'ER_BINLOG_PURGE_FATAL_ERR';
exports[1378] = 'ER_LOG_IN_USE';
exports[1379] = 'ER_LOG_PURGE_UNKNOWN_ERR';
exports[1380] = 'ER_RELAY_LOG_INIT';
exports[1381] = 'ER_NO_BINARY_LOGGING';
exports[1382] = 'ER_RESERVED_SYNTAX';
exports[1383] = 'ER_WSAS_FAILED';
exports[1384] = 'ER_DIFF_GROUPS_PROC';
exports[1385] = 'ER_NO_GROUP_FOR_PROC';
exports[1386] = 'ER_ORDER_WITH_PROC';
exports[1387] = 'ER_LOGGING_PROHIBIT_CHANGING_OF';
exports[1388] = 'ER_NO_FILE_MAPPING';
exports[1389] = 'ER_WRONG_MAGIC';
exports[1390] = 'ER_PS_MANY_PARAM';
exports[1391] = 'ER_KEY_PART_0';
exports[1392] = 'ER_VIEW_CHECKSUM';
exports[1393] = 'ER_VIEW_MULTIUPDATE';
exports[1394] = 'ER_VIEW_NO_INSERT_FIELD_LIST';
exports[1395] = 'ER_VIEW_DELETE_MERGE_VIEW';
exports[1396] = 'ER_CANNOT_USER';
exports[1397] = 'ER_XAER_NOTA';
exports[1398] = 'ER_XAER_INVAL';
exports[1399] = 'ER_XAER_RMFAIL';
exports[1400] = 'ER_XAER_OUTSIDE';
exports[1401] = 'ER_XAER_RMERR';
exports[1402] = 'ER_XA_RBROLLBACK';
exports[1403] = 'ER_NONEXISTING_PROC_GRANT';
exports[1404] = 'ER_PROC_AUTO_GRANT_FAIL';
exports[1405] = 'ER_PROC_AUTO_REVOKE_FAIL';
exports[1406] = 'ER_DATA_TOO_LONG';
exports[1407] = 'ER_SP_BAD_SQLSTATE';
exports[1408] = 'ER_STARTUP';
exports[1409] = 'ER_LOAD_FROM_FIXED_SIZE_ROWS_TO_VAR';
exports[1410] = 'ER_CANT_CREATE_USER_WITH_GRANT';
exports[1411] = 'ER_WRONG_VALUE_FOR_TYPE';
exports[1412] = 'ER_TABLE_DEF_CHANGED';
exports[1413] = 'ER_SP_DUP_HANDLER';
exports[1414] = 'ER_SP_NOT_VAR_ARG';
exports[1415] = 'ER_SP_NO_RETSET';
exports[1416] = 'ER_CANT_CREATE_GEOMETRY_OBJECT';
exports[1417] = 'ER_FAILED_ROUTINE_BREAK_BINLOG';
exports[1418] = 'ER_BINLOG_UNSAFE_ROUTINE';
exports[1419] = 'ER_BINLOG_CREATE_ROUTINE_NEED_SUPER';
exports[1420] = 'ER_EXEC_STMT_WITH_OPEN_CURSOR';
exports[1421] = 'ER_STMT_HAS_NO_OPEN_CURSOR';
exports[1422] = 'ER_COMMIT_NOT_ALLOWED_IN_SF_OR_TRG';
exports[1423] = 'ER_NO_DEFAULT_FOR_VIEW_FIELD';
exports[1424] = 'ER_SP_NO_RECURSION';
exports[1425] = 'ER_TOO_BIG_SCALE';
exports[1426] = 'ER_TOO_BIG_PRECISION';
exports[1427] = 'ER_M_BIGGER_THAN_D';
exports[1428] = 'ER_WRONG_LOCK_OF_SYSTEM_TABLE';
exports[1429] = 'ER_CONNECT_TO_FOREIGN_DATA_SOURCE';
exports[1430] = 'ER_QUERY_ON_FOREIGN_DATA_SOURCE';
exports[1431] = 'ER_FOREIGN_DATA_SOURCE_DOESNT_EXIST';
exports[1432] = 'ER_FOREIGN_DATA_STRING_INVALID_CANT_CREATE';
exports[1433] = 'ER_FOREIGN_DATA_STRING_INVALID';
exports[1434] = 'ER_CANT_CREATE_FEDERATED_TABLE';
exports[1435] = 'ER_TRG_IN_WRONG_SCHEMA';
exports[1436] = 'ER_STACK_OVERRUN_NEED_MORE';
exports[1437] = 'ER_TOO_LONG_BODY';
exports[1438] = 'ER_WARN_CANT_DROP_DEFAULT_KEYCACHE';
exports[1439] = 'ER_TOO_BIG_DISPLAYWIDTH';
exports[1440] = 'ER_XAER_DUPID';
exports[1441] = 'ER_DATETIME_FUNCTION_OVERFLOW';
exports[1442] = 'ER_CANT_UPDATE_USED_TABLE_IN_SF_OR_TRG';
exports[1443] = 'ER_VIEW_PREVENT_UPDATE';
exports[1444] = 'ER_PS_NO_RECURSION';
exports[1445] = 'ER_SP_CANT_SET_AUTOCOMMIT';
exports[1446] = 'ER_MALFORMED_DEFINER';
exports[1447] = 'ER_VIEW_FRM_NO_USER';
exports[1448] = 'ER_VIEW_OTHER_USER';
exports[1449] = 'ER_NO_SUCH_USER';
exports[1450] = 'ER_FORBID_SCHEMA_CHANGE';
exports[1451] = 'ER_ROW_IS_REFERENCED_2';
exports[1452] = 'ER_NO_REFERENCED_ROW_2';
exports[1453] = 'ER_SP_BAD_VAR_SHADOW';
exports[1454] = 'ER_TRG_NO_DEFINER';
exports[1455] = 'ER_OLD_FILE_FORMAT';
exports[1456] = 'ER_SP_RECURSION_LIMIT';
exports[1457] = 'ER_SP_PROC_TABLE_CORRUPT';
exports[1458] = 'ER_SP_WRONG_NAME';
exports[1459] = 'ER_TABLE_NEEDS_UPGRADE';
exports[1460] = 'ER_SP_NO_AGGREGATE';
exports[1461] = 'ER_MAX_PREPARED_STMT_COUNT_REACHED';
exports[1462] = 'ER_VIEW_RECURSIVE';
exports[1463] = 'ER_NON_GROUPING_FIELD_USED';
exports[1464] = 'ER_TABLE_CANT_HANDLE_SPKEYS';
exports[1465] = 'ER_NO_TRIGGERS_ON_SYSTEM_SCHEMA';
exports[1466] = 'ER_REMOVED_SPACES';
exports[1467] = 'ER_AUTOINC_READ_FAILED';
exports[1468] = 'ER_USERNAME';
exports[1469] = 'ER_HOSTNAME';
exports[1470] = 'ER_WRONG_STRING_LENGTH';
exports[1471] = 'ER_NON_INSERTABLE_TABLE';
exports[1472] = 'ER_ADMIN_WRONG_MRG_TABLE';
exports[1473] = 'ER_TOO_HIGH_LEVEL_OF_NESTING_FOR_SELECT';
exports[1474] = 'ER_NAME_BECOMES_EMPTY';
exports[1475] = 'ER_AMBIGUOUS_FIELD_TERM';
exports[1476] = 'ER_FOREIGN_SERVER_EXISTS';
exports[1477] = 'ER_FOREIGN_SERVER_DOESNT_EXIST';
exports[1478] = 'ER_ILLEGAL_HA_CREATE_OPTION';
exports[1479] = 'ER_PARTITION_REQUIRES_VALUES_ERROR';
exports[1480] = 'ER_PARTITION_WRONG_VALUES_ERROR';
exports[1481] = 'ER_PARTITION_MAXVALUE_ERROR';
exports[1482] = 'ER_PARTITION_SUBPARTITION_ERROR';
exports[1483] = 'ER_PARTITION_SUBPART_MIX_ERROR';
exports[1484] = 'ER_PARTITION_WRONG_NO_PART_ERROR';
exports[1485] = 'ER_PARTITION_WRONG_NO_SUBPART_ERROR';
exports[1486] = 'ER_WRONG_EXPR_IN_PARTITION_FUNC_ERROR';
exports[1487] = 'ER_NO_CONST_EXPR_IN_RANGE_OR_LIST_ERROR';
exports[1488] = 'ER_FIELD_NOT_FOUND_PART_ERROR';
exports[1489] = 'ER_LIST_OF_FIELDS_ONLY_IN_HASH_ERROR';
exports[1490] = 'ER_INCONSISTENT_PARTITION_INFO_ERROR';
exports[1491] = 'ER_PARTITION_FUNC_NOT_ALLOWED_ERROR';
exports[1492] = 'ER_PARTITIONS_MUST_BE_DEFINED_ERROR';
exports[1493] = 'ER_RANGE_NOT_INCREASING_ERROR';
exports[1494] = 'ER_INCONSISTENT_TYPE_OF_FUNCTIONS_ERROR';
exports[1495] = 'ER_MULTIPLE_DEF_CONST_IN_LIST_PART_ERROR';
exports[1496] = 'ER_PARTITION_ENTRY_ERROR';
exports[1497] = 'ER_MIX_HANDLER_ERROR';
exports[1498] = 'ER_PARTITION_NOT_DEFINED_ERROR';
exports[1499] = 'ER_TOO_MANY_PARTITIONS_ERROR';
exports[1500] = 'ER_SUBPARTITION_ERROR';
exports[1501] = 'ER_CANT_CREATE_HANDLER_FILE';
exports[1502] = 'ER_BLOB_FIELD_IN_PART_FUNC_ERROR';
exports[1503] = 'ER_UNIQUE_KEY_NEED_ALL_FIELDS_IN_PF';
exports[1504] = 'ER_NO_PARTS_ERROR';
exports[1505] = 'ER_PARTITION_MGMT_ON_NONPARTITIONED';
exports[1506] = 'ER_FOREIGN_KEY_ON_PARTITIONED';
exports[1507] = 'ER_DROP_PARTITION_NON_EXISTENT';
exports[1508] = 'ER_DROP_LAST_PARTITION';
exports[1509] = 'ER_COALESCE_ONLY_ON_HASH_PARTITION';
exports[1510] = 'ER_REORG_HASH_ONLY_ON_SAME_NO';
exports[1511] = 'ER_REORG_NO_PARAM_ERROR';
exports[1512] = 'ER_ONLY_ON_RANGE_LIST_PARTITION';
exports[1513] = 'ER_ADD_PARTITION_SUBPART_ERROR';
exports[1514] = 'ER_ADD_PARTITION_NO_NEW_PARTITION';
exports[1515] = 'ER_COALESCE_PARTITION_NO_PARTITION';
exports[1516] = 'ER_REORG_PARTITION_NOT_EXIST';
exports[1517] = 'ER_SAME_NAME_PARTITION';
exports[1518] = 'ER_NO_BINLOG_ERROR';
exports[1519] = 'ER_CONSECUTIVE_REORG_PARTITIONS';
exports[1520] = 'ER_REORG_OUTSIDE_RANGE';
exports[1521] = 'ER_PARTITION_FUNCTION_FAILURE';
exports[1522] = 'ER_PART_STATE_ERROR';
exports[1523] = 'ER_LIMITED_PART_RANGE';
exports[1524] = 'ER_PLUGIN_IS_NOT_LOADED';
exports[1525] = 'ER_WRONG_VALUE';
exports[1526] = 'ER_NO_PARTITION_FOR_GIVEN_VALUE';
exports[1527] = 'ER_FILEGROUP_OPTION_ONLY_ONCE';
exports[1528] = 'ER_CREATE_FILEGROUP_FAILED';
exports[1529] = 'ER_DROP_FILEGROUP_FAILED';
exports[1530] = 'ER_TABLESPACE_AUTO_EXTEND_ERROR';
exports[1531] = 'ER_WRONG_SIZE_NUMBER';
exports[1532] = 'ER_SIZE_OVERFLOW_ERROR';
exports[1533] = 'ER_ALTER_FILEGROUP_FAILED';
exports[1534] = 'ER_BINLOG_ROW_LOGGING_FAILED';
exports[1535] = 'ER_BINLOG_ROW_WRONG_TABLE_DEF';
exports[1536] = 'ER_BINLOG_ROW_RBR_TO_SBR';
exports[1537] = 'ER_EVENT_ALREADY_EXISTS';
exports[1538] = 'ER_EVENT_STORE_FAILED';
exports[1539] = 'ER_EVENT_DOES_NOT_EXIST';
exports[1540] = 'ER_EVENT_CANT_ALTER';
exports[1541] = 'ER_EVENT_DROP_FAILED';
exports[1542] = 'ER_EVENT_INTERVAL_NOT_POSITIVE_OR_TOO_BIG';
exports[1543] = 'ER_EVENT_ENDS_BEFORE_STARTS';
exports[1544] = 'ER_EVENT_EXEC_TIME_IN_THE_PAST';
exports[1545] = 'ER_EVENT_OPEN_TABLE_FAILED';
exports[1546] = 'ER_EVENT_NEITHER_M_EXPR_NOR_M_AT';
exports[1547] = 'ER_COL_COUNT_DOESNT_MATCH_CORRUPTED';
exports[1548] = 'ER_CANNOT_LOAD_FROM_TABLE';
exports[1549] = 'ER_EVENT_CANNOT_DELETE';
exports[1550] = 'ER_EVENT_COMPILE_ERROR';
exports[1551] = 'ER_EVENT_SAME_NAME';
exports[1552] = 'ER_EVENT_DATA_TOO_LONG';
exports[1553] = 'ER_DROP_INDEX_FK';
exports[1554] = 'ER_WARN_DEPRECATED_SYNTAX_WITH_VER';
exports[1555] = 'ER_CANT_WRITE_LOCK_LOG_TABLE';
exports[1556] = 'ER_CANT_LOCK_LOG_TABLE';
exports[1557] = 'ER_FOREIGN_DUPLICATE_KEY';
exports[1558] = 'ER_COL_COUNT_DOESNT_MATCH_PLEASE_UPDATE';
exports[1559] = 'ER_TEMP_TABLE_PREVENTS_SWITCH_OUT_OF_RBR';
exports[1560] = 'ER_STORED_FUNCTION_PREVENTS_SWITCH_BINLOG_FORMAT';
exports[1561] = 'ER_NDB_CANT_SWITCH_BINLOG_FORMAT';
exports[1562] = 'ER_PARTITION_NO_TEMPORARY';
exports[1563] = 'ER_PARTITION_CONST_DOMAIN_ERROR';
exports[1564] = 'ER_PARTITION_FUNCTION_IS_NOT_ALLOWED';
exports[1565] = 'ER_DDL_LOG_ERROR';
exports[1566] = 'ER_NULL_IN_VALUES_LESS_THAN';
exports[1567] = 'ER_WRONG_PARTITION_NAME';
exports[1568] = 'ER_CANT_CHANGE_TX_CHARACTERISTICS';
exports[1569] = 'ER_DUP_ENTRY_AUTOINCREMENT_CASE';
exports[1570] = 'ER_EVENT_MODIFY_QUEUE_ERROR';
exports[1571] = 'ER_EVENT_SET_VAR_ERROR';
exports[1572] = 'ER_PARTITION_MERGE_ERROR';
exports[1573] = 'ER_CANT_ACTIVATE_LOG';
exports[1574] = 'ER_RBR_NOT_AVAILABLE';
exports[1575] = 'ER_BASE64_DECODE_ERROR';
exports[1576] = 'ER_EVENT_RECURSION_FORBIDDEN';
exports[1577] = 'ER_EVENTS_DB_ERROR';
exports[1578] = 'ER_ONLY_INTEGERS_ALLOWED';
exports[1579] = 'ER_UNSUPORTED_LOG_ENGINE';
exports[1580] = 'ER_BAD_LOG_STATEMENT';
exports[1581] = 'ER_CANT_RENAME_LOG_TABLE';
exports[1582] = 'ER_WRONG_PARAMCOUNT_TO_NATIVE_FCT';
exports[1583] = 'ER_WRONG_PARAMETERS_TO_NATIVE_FCT';
exports[1584] = 'ER_WRONG_PARAMETERS_TO_STORED_FCT';
exports[1585] = 'ER_NATIVE_FCT_NAME_COLLISION';
exports[1586] = 'ER_DUP_ENTRY_WITH_KEY_NAME';
exports[1587] = 'ER_BINLOG_PURGE_EMFILE';
exports[1588] = 'ER_EVENT_CANNOT_CREATE_IN_THE_PAST';
exports[1589] = 'ER_EVENT_CANNOT_ALTER_IN_THE_PAST';
exports[1590] = 'ER_SLAVE_INCIDENT';
exports[1591] = 'ER_NO_PARTITION_FOR_GIVEN_VALUE_SILENT';
exports[1592] = 'ER_BINLOG_UNSAFE_STATEMENT';
exports[1593] = 'ER_BINLOG_FATAL_ERROR';
exports[1594] = 'ER_SLAVE_RELAY_LOG_READ_FAILURE';
exports[1595] = 'ER_SLAVE_RELAY_LOG_WRITE_FAILURE';
exports[1596] = 'ER_SLAVE_CREATE_EVENT_FAILURE';
exports[1597] = 'ER_SLAVE_MASTER_COM_FAILURE';
exports[1598] = 'ER_BINLOG_LOGGING_IMPOSSIBLE';
exports[1599] = 'ER_VIEW_NO_CREATION_CTX';
exports[1600] = 'ER_VIEW_INVALID_CREATION_CTX';
exports[1601] = 'ER_SR_INVALID_CREATION_CTX';
exports[1602] = 'ER_TRG_CORRUPTED_FILE';
exports[1603] = 'ER_TRG_NO_CREATION_CTX';
exports[1604] = 'ER_TRG_INVALID_CREATION_CTX';
exports[1605] = 'ER_EVENT_INVALID_CREATION_CTX';
exports[1606] = 'ER_TRG_CANT_OPEN_TABLE';
exports[1607] = 'ER_CANT_CREATE_SROUTINE';
exports[1608] = 'ER_NEVER_USED';
exports[1609] = 'ER_NO_FORMAT_DESCRIPTION_EVENT_BEFORE_BINLOG_STATEMENT';
exports[1610] = 'ER_REPLICA_CORRUPT_EVENT';
exports[1611] = 'ER_LOAD_DATA_INVALID_COLUMN';
exports[1612] = 'ER_LOG_PURGE_NO_FILE';
exports[1613] = 'ER_XA_RBTIMEOUT';
exports[1614] = 'ER_XA_RBDEADLOCK';
exports[1615] = 'ER_NEED_REPREPARE';
exports[1616] = 'ER_DELAYED_NOT_SUPPORTED';
exports[1617] = 'WARN_NO_CONNECTION_METADATA';
exports[1618] = 'WARN_OPTION_IGNORED';
exports[1619] = 'ER_PLUGIN_DELETE_BUILTIN';
exports[1620] = 'WARN_PLUGIN_BUSY';
exports[1621] = 'ER_VARIABLE_IS_READONLY';
exports[1622] = 'ER_WARN_ENGINE_TRANSACTION_ROLLBACK';
exports[1623] = 'ER_SLAVE_HEARTBEAT_FAILURE';
exports[1624] = 'ER_REPLICA_HEARTBEAT_VALUE_OUT_OF_RANGE';
exports[1625] = 'ER_NDB_REPLICATION_SCHEMA_ERROR';
exports[1626] = 'ER_CONFLICT_FN_PARSE_ERROR';
exports[1627] = 'ER_EXCEPTIONS_WRITE_ERROR';
exports[1628] = 'ER_TOO_LONG_TABLE_COMMENT';
exports[1629] = 'ER_TOO_LONG_FIELD_COMMENT';
exports[1630] = 'ER_FUNC_INEXISTENT_NAME_COLLISION';
exports[1631] = 'ER_DATABASE_NAME';
exports[1632] = 'ER_TABLE_NAME';
exports[1633] = 'ER_PARTITION_NAME';
exports[1634] = 'ER_SUBPARTITION_NAME';
exports[1635] = 'ER_TEMPORARY_NAME';
exports[1636] = 'ER_RENAMED_NAME';
exports[1637] = 'ER_TOO_MANY_CONCURRENT_TRXS';
exports[1638] = 'WARN_NON_ASCII_SEPARATOR_NOT_IMPLEMENTED';
exports[1639] = 'ER_DEBUG_SYNC_TIMEOUT';
exports[1640] = 'ER_DEBUG_SYNC_HIT_LIMIT';
exports[1641] = 'ER_DUP_SIGNAL_SET';
exports[1642] = 'ER_SIGNAL_WARN';
exports[1643] = 'ER_SIGNAL_NOT_FOUND';
exports[1644] = 'ER_SIGNAL_EXCEPTION';
exports[1645] = 'ER_RESIGNAL_WITHOUT_ACTIVE_HANDLER';
exports[1646] = 'ER_SIGNAL_BAD_CONDITION_TYPE';
exports[1647] = 'WARN_COND_ITEM_TRUNCATED';
exports[1648] = 'ER_COND_ITEM_TOO_LONG';
exports[1649] = 'ER_UNKNOWN_LOCALE';
exports[1650] = 'ER_REPLICA_IGNORE_SERVER_IDS';
exports[1651] = 'ER_QUERY_CACHE_DISABLED';
exports[1652] = 'ER_SAME_NAME_PARTITION_FIELD';
exports[1653] = 'ER_PARTITION_COLUMN_LIST_ERROR';
exports[1654] = 'ER_WRONG_TYPE_COLUMN_VALUE_ERROR';
exports[1655] = 'ER_TOO_MANY_PARTITION_FUNC_FIELDS_ERROR';
exports[1656] = 'ER_MAXVALUE_IN_VALUES_IN';
exports[1657] = 'ER_TOO_MANY_VALUES_ERROR';
exports[1658] = 'ER_ROW_SINGLE_PARTITION_FIELD_ERROR';
exports[1659] = 'ER_FIELD_TYPE_NOT_ALLOWED_AS_PARTITION_FIELD';
exports[1660] = 'ER_PARTITION_FIELDS_TOO_LONG';
exports[1661] = 'ER_BINLOG_ROW_ENGINE_AND_STMT_ENGINE';
exports[1662] = 'ER_BINLOG_ROW_MODE_AND_STMT_ENGINE';
exports[1663] = 'ER_BINLOG_UNSAFE_AND_STMT_ENGINE';
exports[1664] = 'ER_BINLOG_ROW_INJECTION_AND_STMT_ENGINE';
exports[1665] = 'ER_BINLOG_STMT_MODE_AND_ROW_ENGINE';
exports[1666] = 'ER_BINLOG_ROW_INJECTION_AND_STMT_MODE';
exports[1667] = 'ER_BINLOG_MULTIPLE_ENGINES_AND_SELF_LOGGING_ENGINE';
exports[1668] = 'ER_BINLOG_UNSAFE_LIMIT';
exports[1669] = 'ER_UNUSED4';
exports[1670] = 'ER_BINLOG_UNSAFE_SYSTEM_TABLE';
exports[1671] = 'ER_BINLOG_UNSAFE_AUTOINC_COLUMNS';
exports[1672] = 'ER_BINLOG_UNSAFE_UDF';
exports[1673] = 'ER_BINLOG_UNSAFE_SYSTEM_VARIABLE';
exports[1674] = 'ER_BINLOG_UNSAFE_SYSTEM_FUNCTION';
exports[1675] = 'ER_BINLOG_UNSAFE_NONTRANS_AFTER_TRANS';
exports[1676] = 'ER_MESSAGE_AND_STATEMENT';
exports[1677] = 'ER_SLAVE_CONVERSION_FAILED';
exports[1678] = 'ER_REPLICA_CANT_CREATE_CONVERSION';
exports[1679] = 'ER_INSIDE_TRANSACTION_PREVENTS_SWITCH_BINLOG_FORMAT';
exports[1680] = 'ER_PATH_LENGTH';
exports[1681] = 'ER_WARN_DEPRECATED_SYNTAX_NO_REPLACEMENT';
exports[1682] = 'ER_WRONG_NATIVE_TABLE_STRUCTURE';
exports[1683] = 'ER_WRONG_PERFSCHEMA_USAGE';
exports[1684] = 'ER_WARN_I_S_SKIPPED_TABLE';
exports[1685] = 'ER_INSIDE_TRANSACTION_PREVENTS_SWITCH_BINLOG_DIRECT';
exports[1686] = 'ER_STORED_FUNCTION_PREVENTS_SWITCH_BINLOG_DIRECT';
exports[1687] = 'ER_SPATIAL_MUST_HAVE_GEOM_COL';
exports[1688] = 'ER_TOO_LONG_INDEX_COMMENT';
exports[1689] = 'ER_LOCK_ABORTED';
exports[1690] = 'ER_DATA_OUT_OF_RANGE';
exports[1691] = 'ER_WRONG_SPVAR_TYPE_IN_LIMIT';
exports[1692] = 'ER_BINLOG_UNSAFE_MULTIPLE_ENGINES_AND_SELF_LOGGING_ENGINE';
exports[1693] = 'ER_BINLOG_UNSAFE_MIXED_STATEMENT';
exports[1694] = 'ER_INSIDE_TRANSACTION_PREVENTS_SWITCH_SQL_LOG_BIN';
exports[1695] = 'ER_STORED_FUNCTION_PREVENTS_SWITCH_SQL_LOG_BIN';
exports[1696] = 'ER_FAILED_READ_FROM_PAR_FILE';
exports[1697] = 'ER_VALUES_IS_NOT_INT_TYPE_ERROR';
exports[1698] = 'ER_ACCESS_DENIED_NO_PASSWORD_ERROR';
exports[1699] = 'ER_SET_PASSWORD_AUTH_PLUGIN';
exports[1700] = 'ER_GRANT_PLUGIN_USER_EXISTS';
exports[1701] = 'ER_TRUNCATE_ILLEGAL_FK';
exports[1702] = 'ER_PLUGIN_IS_PERMANENT';
exports[1703] = 'ER_REPLICA_HEARTBEAT_VALUE_OUT_OF_RANGE_MIN';
exports[1704] = 'ER_REPLICA_HEARTBEAT_VALUE_OUT_OF_RANGE_MAX';
exports[1705] = 'ER_STMT_CACHE_FULL';
exports[1706] = 'ER_MULTI_UPDATE_KEY_CONFLICT';
exports[1707] = 'ER_TABLE_NEEDS_REBUILD';
exports[1708] = 'WARN_OPTION_BELOW_LIMIT';
exports[1709] = 'ER_INDEX_COLUMN_TOO_LONG';
exports[1710] = 'ER_ERROR_IN_TRIGGER_BODY';
exports[1711] = 'ER_ERROR_IN_UNKNOWN_TRIGGER_BODY';
exports[1712] = 'ER_INDEX_CORRUPT';
exports[1713] = 'ER_UNDO_RECORD_TOO_BIG';
exports[1714] = 'ER_BINLOG_UNSAFE_INSERT_IGNORE_SELECT';
exports[1715] = 'ER_BINLOG_UNSAFE_INSERT_SELECT_UPDATE';
exports[1716] = 'ER_BINLOG_UNSAFE_REPLACE_SELECT';
exports[1717] = 'ER_BINLOG_UNSAFE_CREATE_IGNORE_SELECT';
exports[1718] = 'ER_BINLOG_UNSAFE_CREATE_REPLACE_SELECT';
exports[1719] = 'ER_BINLOG_UNSAFE_UPDATE_IGNORE';
exports[1720] = 'ER_PLUGIN_NO_UNINSTALL';
exports[1721] = 'ER_PLUGIN_NO_INSTALL';
exports[1722] = 'ER_BINLOG_UNSAFE_WRITE_AUTOINC_SELECT';
exports[1723] = 'ER_BINLOG_UNSAFE_CREATE_SELECT_AUTOINC';
exports[1724] = 'ER_BINLOG_UNSAFE_INSERT_TWO_KEYS';
exports[1725] = 'ER_TABLE_IN_FK_CHECK';
exports[1726] = 'ER_UNSUPPORTED_ENGINE';
exports[1727] = 'ER_BINLOG_UNSAFE_AUTOINC_NOT_FIRST';
exports[1728] = 'ER_CANNOT_LOAD_FROM_TABLE_V2';
exports[1729] = 'ER_SOURCE_DELAY_VALUE_OUT_OF_RANGE';
exports[1730] = 'ER_ONLY_FD_AND_RBR_EVENTS_ALLOWED_IN_BINLOG_STATEMENT';
exports[1731] = 'ER_PARTITION_EXCHANGE_DIFFERENT_OPTION';
exports[1732] = 'ER_PARTITION_EXCHANGE_PART_TABLE';
exports[1733] = 'ER_PARTITION_EXCHANGE_TEMP_TABLE';
exports[1734] = 'ER_PARTITION_INSTEAD_OF_SUBPARTITION';
exports[1735] = 'ER_UNKNOWN_PARTITION';
exports[1736] = 'ER_TABLES_DIFFERENT_METADATA';
exports[1737] = 'ER_ROW_DOES_NOT_MATCH_PARTITION';
exports[1738] = 'ER_BINLOG_CACHE_SIZE_GREATER_THAN_MAX';
exports[1739] = 'ER_WARN_INDEX_NOT_APPLICABLE';
exports[1740] = 'ER_PARTITION_EXCHANGE_FOREIGN_KEY';
exports[1741] = 'ER_NO_SUCH_KEY_VALUE';
exports[1742] = 'ER_RPL_INFO_DATA_TOO_LONG';
exports[1743] = 'ER_NETWORK_READ_EVENT_CHECKSUM_FAILURE';
exports[1744] = 'ER_BINLOG_READ_EVENT_CHECKSUM_FAILURE';
exports[1745] = 'ER_BINLOG_STMT_CACHE_SIZE_GREATER_THAN_MAX';
exports[1746] = 'ER_CANT_UPDATE_TABLE_IN_CREATE_TABLE_SELECT';
exports[1747] = 'ER_PARTITION_CLAUSE_ON_NONPARTITIONED';
exports[1748] = 'ER_ROW_DOES_NOT_MATCH_GIVEN_PARTITION_SET';
exports[1749] = 'ER_NO_SUCH_PARTITION';
exports[1750] = 'ER_CHANGE_RPL_INFO_REPOSITORY_FAILURE';
exports[1751] = 'ER_WARNING_NOT_COMPLETE_ROLLBACK_WITH_CREATED_TEMP_TABLE';
exports[1752] = 'ER_WARNING_NOT_COMPLETE_ROLLBACK_WITH_DROPPED_TEMP_TABLE';
exports[1753] = 'ER_MTA_FEATURE_IS_NOT_SUPPORTED';
exports[1754] = 'ER_MTA_UPDATED_DBS_GREATER_MAX';
exports[1755] = 'ER_MTA_CANT_PARALLEL';
exports[1756] = 'ER_MTA_INCONSISTENT_DATA';
exports[1757] = 'ER_FULLTEXT_NOT_SUPPORTED_WITH_PARTITIONING';
exports[1758] = 'ER_DA_INVALID_CONDITION_NUMBER';
exports[1759] = 'ER_INSECURE_PLAIN_TEXT';
exports[1760] = 'ER_INSECURE_CHANGE_SOURCE';
exports[1761] = 'ER_FOREIGN_DUPLICATE_KEY_WITH_CHILD_INFO';
exports[1762] = 'ER_FOREIGN_DUPLICATE_KEY_WITHOUT_CHILD_INFO';
exports[1763] = 'ER_SQLTHREAD_WITH_SECURE_REPLICA';
exports[1764] = 'ER_TABLE_HAS_NO_FT';
exports[1765] = 'ER_VARIABLE_NOT_SETTABLE_IN_SF_OR_TRIGGER';
exports[1766] = 'ER_VARIABLE_NOT_SETTABLE_IN_TRANSACTION';
exports[1767] = 'ER_GTID_NEXT_IS_NOT_IN_GTID_NEXT_LIST';
exports[1768] = 'ER_CANT_CHANGE_GTID_NEXT_IN_TRANSACTION';
exports[1769] = 'ER_SET_STATEMENT_CANNOT_INVOKE_FUNCTION';
exports[1770] = 'ER_GTID_NEXT_CANT_BE_AUTOMATIC_IF_GTID_NEXT_LIST_IS_NON_NULL';
exports[1771] = 'ER_SKIPPING_LOGGED_TRANSACTION';
exports[1772] = 'ER_MALFORMED_GTID_SET_SPECIFICATION';
exports[1773] = 'ER_MALFORMED_GTID_SET_ENCODING';
exports[1774] = 'ER_MALFORMED_GTID_SPECIFICATION';
exports[1775] = 'ER_GNO_EXHAUSTED';
exports[1776] = 'ER_BAD_REPLICA_AUTO_POSITION';
exports[1777] = 'ER_AUTO_POSITION_REQUIRES_GTID_MODE_NOT_OFF';
exports[1778] = 'ER_CANT_DO_IMPLICIT_COMMIT_IN_TRX_WHEN_GTID_NEXT_IS_SET';
exports[1779] = 'ER_GTID_MODE_ON_REQUIRES_ENFORCE_GTID_CONSISTENCY_ON';
exports[1780] = 'ER_GTID_MODE_REQUIRES_BINLOG';
exports[1781] = 'ER_CANT_SET_GTID_NEXT_TO_GTID_WHEN_GTID_MODE_IS_OFF';
exports[1782] = 'ER_CANT_SET_GTID_NEXT_TO_ANONYMOUS_WHEN_GTID_MODE_IS_ON';
exports[1783] = 'ER_CANT_SET_GTID_NEXT_LIST_TO_NON_NULL_WHEN_GTID_MODE_IS_OFF';
exports[1784] = 'ER_FOUND_GTID_EVENT_WHEN_GTID_MODE_IS_OFF';
exports[1785] = 'ER_GTID_UNSAFE_NON_TRANSACTIONAL_TABLE';
exports[1786] = 'ER_GTID_UNSAFE_CREATE_SELECT';
exports[1787] = 'ER_GTID_UNSAFE_CREATE_DROP_TEMP_TABLE_IN_TRANSACTION';
exports[1788] = 'ER_GTID_MODE_CAN_ONLY_CHANGE_ONE_STEP_AT_A_TIME';
exports[1789] = 'ER_SOURCE_HAS_PURGED_REQUIRED_GTIDS';
exports[1790] = 'ER_CANT_SET_GTID_NEXT_WHEN_OWNING_GTID';
exports[1791] = 'ER_UNKNOWN_EXPLAIN_FORMAT';
exports[1792] = 'ER_CANT_EXECUTE_IN_READ_ONLY_TRANSACTION';
exports[1793] = 'ER_TOO_LONG_TABLE_PARTITION_COMMENT';
exports[1794] = 'ER_REPLICA_CONFIGURATION';
exports[1795] = 'ER_INNODB_FT_LIMIT';
exports[1796] = 'ER_INNODB_NO_FT_TEMP_TABLE';
exports[1797] = 'ER_INNODB_FT_WRONG_DOCID_COLUMN';
exports[1798] = 'ER_INNODB_FT_WRONG_DOCID_INDEX';
exports[1799] = 'ER_INNODB_ONLINE_LOG_TOO_BIG';
exports[1800] = 'ER_UNKNOWN_ALTER_ALGORITHM';
exports[1801] = 'ER_UNKNOWN_ALTER_LOCK';
exports[1802] = 'ER_MTA_CHANGE_SOURCE_CANT_RUN_WITH_GAPS';
exports[1803] = 'ER_MTA_RECOVERY_FAILURE';
exports[1804] = 'ER_MTA_RESET_WORKERS';
exports[1805] = 'ER_COL_COUNT_DOESNT_MATCH_CORRUPTED_V2';
exports[1806] = 'ER_REPLICA_SILENT_RETRY_TRANSACTION';
exports[1807] = 'ER_DISCARD_FK_CHECKS_RUNNING';
exports[1808] = 'ER_TABLE_SCHEMA_MISMATCH';
exports[1809] = 'ER_TABLE_IN_SYSTEM_TABLESPACE';
exports[1810] = 'ER_IO_READ_ERROR';
exports[1811] = 'ER_IO_WRITE_ERROR';
exports[1812] = 'ER_TABLESPACE_MISSING';
exports[1813] = 'ER_TABLESPACE_EXISTS';
exports[1814] = 'ER_TABLESPACE_DISCARDED';
exports[1815] = 'ER_INTERNAL_ERROR';
exports[1816] = 'ER_INNODB_IMPORT_ERROR';
exports[1817] = 'ER_INNODB_INDEX_CORRUPT';
exports[1818] = 'ER_INVALID_YEAR_COLUMN_LENGTH';
exports[1819] = 'ER_NOT_VALID_PASSWORD';
exports[1820] = 'ER_MUST_CHANGE_PASSWORD';
exports[1821] = 'ER_FK_NO_INDEX_CHILD';
exports[1822] = 'ER_FK_NO_INDEX_PARENT';
exports[1823] = 'ER_FK_FAIL_ADD_SYSTEM';
exports[1824] = 'ER_FK_CANNOT_OPEN_PARENT';
exports[1825] = 'ER_FK_INCORRECT_OPTION';
exports[1826] = 'ER_FK_DUP_NAME';
exports[1827] = 'ER_PASSWORD_FORMAT';
exports[1828] = 'ER_FK_COLUMN_CANNOT_DROP';
exports[1829] = 'ER_FK_COLUMN_CANNOT_DROP_CHILD';
exports[1830] = 'ER_FK_COLUMN_NOT_NULL';
exports[1831] = 'ER_DUP_INDEX';
exports[1832] = 'ER_FK_COLUMN_CANNOT_CHANGE';
exports[1833] = 'ER_FK_COLUMN_CANNOT_CHANGE_CHILD';
exports[1834] = 'ER_UNUSED5';
exports[1835] = 'ER_MALFORMED_PACKET';
exports[1836] = 'ER_READ_ONLY_MODE';
exports[1837] = 'ER_GTID_NEXT_TYPE_UNDEFINED_GTID';
exports[1838] = 'ER_VARIABLE_NOT_SETTABLE_IN_SP';
exports[1839] = 'ER_CANT_SET_GTID_PURGED_WHEN_GTID_MODE_IS_OFF';
exports[1840] = 'ER_CANT_SET_GTID_PURGED_WHEN_GTID_EXECUTED_IS_NOT_EMPTY';
exports[1841] = 'ER_CANT_SET_GTID_PURGED_WHEN_OWNED_GTIDS_IS_NOT_EMPTY';
exports[1842] = 'ER_GTID_PURGED_WAS_CHANGED';
exports[1843] = 'ER_GTID_EXECUTED_WAS_CHANGED';
exports[1844] = 'ER_BINLOG_STMT_MODE_AND_NO_REPL_TABLES';
exports[1845] = 'ER_ALTER_OPERATION_NOT_SUPPORTED';
exports[1846] = 'ER_ALTER_OPERATION_NOT_SUPPORTED_REASON';
exports[1847] = 'ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_COPY';
exports[1848] = 'ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_PARTITION';
exports[1849] = 'ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_FK_RENAME';
exports[1850] = 'ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_COLUMN_TYPE';
exports[1851] = 'ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_FK_CHECK';
exports[1852] = 'ER_UNUSED6';
exports[1853] = 'ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_NOPK';
exports[1854] = 'ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_AUTOINC';
exports[1855] = 'ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_HIDDEN_FTS';
exports[1856] = 'ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_CHANGE_FTS';
exports[1857] = 'ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_FTS';
exports[1858] = 'ER_SQL_REPLICA_SKIP_COUNTER_NOT_SETTABLE_IN_GTID_MODE';
exports[1859] = 'ER_DUP_UNKNOWN_IN_INDEX';
exports[1860] = 'ER_IDENT_CAUSES_TOO_LONG_PATH';
exports[1861] = 'ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_NOT_NULL';
exports[1862] = 'ER_MUST_CHANGE_PASSWORD_LOGIN';
exports[1863] = 'ER_ROW_IN_WRONG_PARTITION';
exports[1864] = 'ER_MTA_EVENT_BIGGER_PENDING_JOBS_SIZE_MAX';
exports[1865] = 'ER_INNODB_NO_FT_USES_PARSER';
exports[1866] = 'ER_BINLOG_LOGICAL_CORRUPTION';
exports[1867] = 'ER_WARN_PURGE_LOG_IN_USE';
exports[1868] = 'ER_WARN_PURGE_LOG_IS_ACTIVE';
exports[1869] = 'ER_AUTO_INCREMENT_CONFLICT';
exports[1870] = 'WARN_ON_BLOCKHOLE_IN_RBR';
exports[1871] = 'ER_REPLICA_CM_INIT_REPOSITORY';
exports[1872] = 'ER_REPLICA_AM_INIT_REPOSITORY';
exports[1873] = 'ER_ACCESS_DENIED_CHANGE_USER_ERROR';
exports[1874] = 'ER_INNODB_READ_ONLY';
exports[1875] = 'ER_STOP_REPLICA_SQL_THREAD_TIMEOUT';
exports[1876] = 'ER_STOP_REPLICA_IO_THREAD_TIMEOUT';
exports[1877] = 'ER_TABLE_CORRUPT';
exports[1878] = 'ER_TEMP_FILE_WRITE_FAILURE';
exports[1879] = 'ER_INNODB_FT_AUX_NOT_HEX_ID';
exports[1880] = 'ER_OLD_TEMPORALS_UPGRADED';
exports[1881] = 'ER_INNODB_FORCED_RECOVERY';
exports[1882] = 'ER_AES_INVALID_IV';
exports[1883] = 'ER_PLUGIN_CANNOT_BE_UNINSTALLED';
exports[1884] = 'ER_GTID_UNSAFE_BINLOG_SPLITTABLE_STATEMENT_AND_ASSIGNED_GTID';
exports[1885] = 'ER_REPLICA_HAS_MORE_GTIDS_THAN_SOURCE';
exports[1886] = 'ER_MISSING_KEY';
exports[1887] = 'WARN_NAMED_PIPE_ACCESS_EVERYONE';
exports[3000] = 'ER_FILE_CORRUPT';
exports[3001] = 'ER_ERROR_ON_SOURCE';
exports[3002] = 'ER_INCONSISTENT_ERROR';
exports[3003] = 'ER_STORAGE_ENGINE_NOT_LOADED';
exports[3004] = 'ER_GET_STACKED_DA_WITHOUT_ACTIVE_HANDLER';
exports[3005] = 'ER_WARN_LEGACY_SYNTAX_CONVERTED';
exports[3006] = 'ER_BINLOG_UNSAFE_FULLTEXT_PLUGIN';
exports[3007] = 'ER_CANNOT_DISCARD_TEMPORARY_TABLE';
exports[3008] = 'ER_FK_DEPTH_EXCEEDED';
exports[3009] = 'ER_COL_COUNT_DOESNT_MATCH_PLEASE_UPDATE_V2';
exports[3010] = 'ER_WARN_TRIGGER_DOESNT_HAVE_CREATED';
exports[3011] = 'ER_REFERENCED_TRG_DOES_NOT_EXIST';
exports[3012] = 'ER_EXPLAIN_NOT_SUPPORTED';
exports[3013] = 'ER_INVALID_FIELD_SIZE';
exports[3014] = 'ER_MISSING_HA_CREATE_OPTION';
exports[3015] = 'ER_ENGINE_OUT_OF_MEMORY';
exports[3016] = 'ER_PASSWORD_EXPIRE_ANONYMOUS_USER';
exports[3017] = 'ER_REPLICA_SQL_THREAD_MUST_STOP';
exports[3018] = 'ER_NO_FT_MATERIALIZED_SUBQUERY';
exports[3019] = 'ER_INNODB_UNDO_LOG_FULL';
exports[3020] = 'ER_INVALID_ARGUMENT_FOR_LOGARITHM';
exports[3021] = 'ER_REPLICA_CHANNEL_IO_THREAD_MUST_STOP';
exports[3022] = 'ER_WARN_OPEN_TEMP_TABLES_MUST_BE_ZERO';
exports[3023] = 'ER_WARN_ONLY_SOURCE_LOG_FILE_NO_POS';
exports[3024] = 'ER_QUERY_TIMEOUT';
exports[3025] = 'ER_NON_RO_SELECT_DISABLE_TIMER';
exports[3026] = 'ER_DUP_LIST_ENTRY';
exports[3027] = 'ER_SQL_MODE_NO_EFFECT';
exports[3028] = 'ER_AGGREGATE_ORDER_FOR_UNION';
exports[3029] = 'ER_AGGREGATE_ORDER_NON_AGG_QUERY';
exports[3030] = 'ER_REPLICA_WORKER_STOPPED_PREVIOUS_THD_ERROR';
exports[3031] = 'ER_DONT_SUPPORT_REPLICA_PRESERVE_COMMIT_ORDER';
exports[3032] = 'ER_SERVER_OFFLINE_MODE';
exports[3033] = 'ER_GIS_DIFFERENT_SRIDS';
exports[3034] = 'ER_GIS_UNSUPPORTED_ARGUMENT';
exports[3035] = 'ER_GIS_UNKNOWN_ERROR';
exports[3036] = 'ER_GIS_UNKNOWN_EXCEPTION';
exports[3037] = 'ER_GIS_INVALID_DATA';
exports[3038] = 'ER_BOOST_GEOMETRY_EMPTY_INPUT_EXCEPTION';
exports[3039] = 'ER_BOOST_GEOMETRY_CENTROID_EXCEPTION';
exports[3040] = 'ER_BOOST_GEOMETRY_OVERLAY_INVALID_INPUT_EXCEPTION';
exports[3041] = 'ER_BOOST_GEOMETRY_TURN_INFO_EXCEPTION';
exports[3042] = 'ER_BOOST_GEOMETRY_SELF_INTERSECTION_POINT_EXCEPTION';
exports[3043] = 'ER_BOOST_GEOMETRY_UNKNOWN_EXCEPTION';
exports[3044] = 'ER_STD_BAD_ALLOC_ERROR';
exports[3045] = 'ER_STD_DOMAIN_ERROR';
exports[3046] = 'ER_STD_LENGTH_ERROR';
exports[3047] = 'ER_STD_INVALID_ARGUMENT';
exports[3048] = 'ER_STD_OUT_OF_RANGE_ERROR';
exports[3049] = 'ER_STD_OVERFLOW_ERROR';
exports[3050] = 'ER_STD_RANGE_ERROR';
exports[3051] = 'ER_STD_UNDERFLOW_ERROR';
exports[3052] = 'ER_STD_LOGIC_ERROR';
exports[3053] = 'ER_STD_RUNTIME_ERROR';
exports[3054] = 'ER_STD_UNKNOWN_EXCEPTION';
exports[3055] = 'ER_GIS_DATA_WRONG_ENDIANESS';
exports[3056] = 'ER_CHANGE_SOURCE_PASSWORD_LENGTH';
exports[3057] = 'ER_USER_LOCK_WRONG_NAME';
exports[3058] = 'ER_USER_LOCK_DEADLOCK';
exports[3059] = 'ER_REPLACE_INACCESSIBLE_ROWS';
exports[3060] = 'ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_GIS';
exports[3061] = 'ER_ILLEGAL_USER_VAR';
exports[3062] = 'ER_GTID_MODE_OFF';
exports[3063] = 'ER_UNSUPPORTED_BY_REPLICATION_THREAD';
exports[3064] = 'ER_INCORRECT_TYPE';
exports[3065] = 'ER_FIELD_IN_ORDER_NOT_SELECT';
exports[3066] = 'ER_AGGREGATE_IN_ORDER_NOT_SELECT';
exports[3067] = 'ER_INVALID_RPL_WILD_TABLE_FILTER_PATTERN';
exports[3068] = 'ER_NET_OK_PACKET_TOO_LARGE';
exports[3069] = 'ER_INVALID_JSON_DATA';
exports[3070] = 'ER_INVALID_GEOJSON_MISSING_MEMBER';
exports[3071] = 'ER_INVALID_GEOJSON_WRONG_TYPE';
exports[3072] = 'ER_INVALID_GEOJSON_UNSPECIFIED';
exports[3073] = 'ER_DIMENSION_UNSUPPORTED';
exports[3074] = 'ER_REPLICA_CHANNEL_DOES_NOT_EXIST';
exports[3075] = 'ER_SLAVE_MULTIPLE_CHANNELS_HOST_PORT';
exports[3076] = 'ER_REPLICA_CHANNEL_NAME_INVALID_OR_TOO_LONG';
exports[3077] = 'ER_REPLICA_NEW_CHANNEL_WRONG_REPOSITORY';
exports[3078] = 'ER_SLAVE_CHANNEL_DELETE';
exports[3079] = 'ER_REPLICA_MULTIPLE_CHANNELS_CMD';
exports[3080] = 'ER_REPLICA_MAX_CHANNELS_EXCEEDED';
exports[3081] = 'ER_REPLICA_CHANNEL_MUST_STOP';
exports[3082] = 'ER_REPLICA_CHANNEL_NOT_RUNNING';
exports[3083] = 'ER_REPLICA_CHANNEL_WAS_RUNNING';
exports[3084] = 'ER_REPLICA_CHANNEL_WAS_NOT_RUNNING';
exports[3085] = 'ER_REPLICA_CHANNEL_SQL_THREAD_MUST_STOP';
exports[3086] = 'ER_REPLICA_CHANNEL_SQL_SKIP_COUNTER';
exports[3087] = 'ER_WRONG_FIELD_WITH_GROUP_V2';
exports[3088] = 'ER_MIX_OF_GROUP_FUNC_AND_FIELDS_V2';
exports[3089] = 'ER_WARN_DEPRECATED_SYSVAR_UPDATE';
exports[3090] = 'ER_WARN_DEPRECATED_SQLMODE';
exports[3091] = 'ER_CANNOT_LOG_PARTIAL_DROP_DATABASE_WITH_GTID';
exports[3092] = 'ER_GROUP_REPLICATION_CONFIGURATION';
exports[3093] = 'ER_GROUP_REPLICATION_RUNNING';
exports[3094] = 'ER_GROUP_REPLICATION_APPLIER_INIT_ERROR';
exports[3095] = 'ER_GROUP_REPLICATION_STOP_APPLIER_THREAD_TIMEOUT';
exports[3096] = 'ER_GROUP_REPLICATION_COMMUNICATION_LAYER_SESSION_ERROR';
exports[3097] = 'ER_GROUP_REPLICATION_COMMUNICATION_LAYER_JOIN_ERROR';
exports[3098] = 'ER_BEFORE_DML_VALIDATION_ERROR';
exports[3099] = 'ER_PREVENTS_VARIABLE_WITHOUT_RBR';
exports[3100] = 'ER_RUN_HOOK_ERROR';
exports[3101] = 'ER_TRANSACTION_ROLLBACK_DURING_COMMIT';
exports[3102] = 'ER_GENERATED_COLUMN_FUNCTION_IS_NOT_ALLOWED';
exports[3103] = 'ER_UNSUPPORTED_ALTER_INPLACE_ON_VIRTUAL_COLUMN';
exports[3104] = 'ER_WRONG_FK_OPTION_FOR_GENERATED_COLUMN';
exports[3105] = 'ER_NON_DEFAULT_VALUE_FOR_GENERATED_COLUMN';
exports[3106] = 'ER_UNSUPPORTED_ACTION_ON_GENERATED_COLUMN';
exports[3107] = 'ER_GENERATED_COLUMN_NON_PRIOR';
exports[3108] = 'ER_DEPENDENT_BY_GENERATED_COLUMN';
exports[3109] = 'ER_GENERATED_COLUMN_REF_AUTO_INC';
exports[3110] = 'ER_FEATURE_NOT_AVAILABLE';
exports[3111] = 'ER_CANT_SET_GTID_MODE';
exports[3112] = 'ER_CANT_USE_AUTO_POSITION_WITH_GTID_MODE_OFF';
exports[3113] = 'ER_CANT_REPLICATE_ANONYMOUS_WITH_AUTO_POSITION';
exports[3114] = 'ER_CANT_REPLICATE_ANONYMOUS_WITH_GTID_MODE_ON';
exports[3115] = 'ER_CANT_REPLICATE_GTID_WITH_GTID_MODE_OFF';
exports[3116] =
  'ER_CANT_ENFORCE_GTID_CONSISTENCY_WITH_ONGOING_GTID_VIOLATING_TX';
exports[3117] =
  'ER_ENFORCE_GTID_CONSISTENCY_WARN_WITH_ONGOING_GTID_VIOLATING_TX';
exports[3118] = 'ER_ACCOUNT_HAS_BEEN_LOCKED';
exports[3119] = 'ER_WRONG_TABLESPACE_NAME';
exports[3120] = 'ER_TABLESPACE_IS_NOT_EMPTY';
exports[3121] = 'ER_WRONG_FILE_NAME';
exports[3122] = 'ER_BOOST_GEOMETRY_INCONSISTENT_TURNS_EXCEPTION';
exports[3123] = 'ER_WARN_OPTIMIZER_HINT_SYNTAX_ERROR';
exports[3124] = 'ER_WARN_BAD_MAX_EXECUTION_TIME';
exports[3125] = 'ER_WARN_UNSUPPORTED_MAX_EXECUTION_TIME';
exports[3126] = 'ER_WARN_CONFLICTING_HINT';
exports[3127] = 'ER_WARN_UNKNOWN_QB_NAME';
exports[3128] = 'ER_UNRESOLVED_HINT_NAME';
exports[3129] = 'ER_WARN_ON_MODIFYING_GTID_EXECUTED_TABLE';
exports[3130] = 'ER_PLUGGABLE_PROTOCOL_COMMAND_NOT_SUPPORTED';
exports[3131] = 'ER_LOCKING_SERVICE_WRONG_NAME';
exports[3132] = 'ER_LOCKING_SERVICE_DEADLOCK';
exports[3133] = 'ER_LOCKING_SERVICE_TIMEOUT';
exports[3134] = 'ER_GIS_MAX_POINTS_IN_GEOMETRY_OVERFLOWED';
exports[3135] = 'ER_SQL_MODE_MERGED';
exports[3136] = 'ER_VTOKEN_PLUGIN_TOKEN_MISMATCH';
exports[3137] = 'ER_VTOKEN_PLUGIN_TOKEN_NOT_FOUND';
exports[3138] = 'ER_CANT_SET_VARIABLE_WHEN_OWNING_GTID';
exports[3139] = 'ER_REPLICA_CHANNEL_OPERATION_NOT_ALLOWED';
exports[3140] = 'ER_INVALID_JSON_TEXT';
exports[3141] = 'ER_INVALID_JSON_TEXT_IN_PARAM';
exports[3142] = 'ER_INVALID_JSON_BINARY_DATA';
exports[3143] = 'ER_INVALID_JSON_PATH';
exports[3144] = 'ER_INVALID_JSON_CHARSET';
exports[3145] = 'ER_INVALID_JSON_CHARSET_IN_FUNCTION';
exports[3146] = 'ER_INVALID_TYPE_FOR_JSON';
exports[3147] = 'ER_INVALID_CAST_TO_JSON';
exports[3148] = 'ER_INVALID_JSON_PATH_CHARSET';
exports[3149] = 'ER_INVALID_JSON_PATH_WILDCARD';
exports[3150] = 'ER_JSON_VALUE_TOO_BIG';
exports[3151] = 'ER_JSON_KEY_TOO_BIG';
exports[3152] = 'ER_JSON_USED_AS_KEY';
exports[3153] = 'ER_JSON_VACUOUS_PATH';
exports[3154] = 'ER_JSON_BAD_ONE_OR_ALL_ARG';
exports[3155] = 'ER_NUMERIC_JSON_VALUE_OUT_OF_RANGE';
exports[3156] = 'ER_INVALID_JSON_VALUE_FOR_CAST';
exports[3157] = 'ER_JSON_DOCUMENT_TOO_DEEP';
exports[3158] = 'ER_JSON_DOCUMENT_NULL_KEY';
exports[3159] = 'ER_SECURE_TRANSPORT_REQUIRED';
exports[3160] = 'ER_NO_SECURE_TRANSPORTS_CONFIGURED';
exports[3161] = 'ER_DISABLED_STORAGE_ENGINE';
exports[3162] = 'ER_USER_DOES_NOT_EXIST';
exports[3163] = 'ER_USER_ALREADY_EXISTS';
exports[3164] = 'ER_AUDIT_API_ABORT';
exports[3165] = 'ER_INVALID_JSON_PATH_ARRAY_CELL';
exports[3166] = 'ER_BUFPOOL_RESIZE_INPROGRESS';
exports[3167] = 'ER_FEATURE_DISABLED_SEE_DOC';
exports[3168] = 'ER_SERVER_ISNT_AVAILABLE';
exports[3169] = 'ER_SESSION_WAS_KILLED';
exports[3170] = 'ER_CAPACITY_EXCEEDED';
exports[3171] = 'ER_CAPACITY_EXCEEDED_IN_RANGE_OPTIMIZER';
exports[3172] = 'ER_TABLE_NEEDS_UPG_PART';
exports[3173] = 'ER_CANT_WAIT_FOR_EXECUTED_GTID_SET_WHILE_OWNING_A_GTID';
exports[3174] = 'ER_CANNOT_ADD_FOREIGN_BASE_COL_VIRTUAL';
exports[3175] = 'ER_CANNOT_CREATE_VIRTUAL_INDEX_CONSTRAINT';
exports[3176] = 'ER_ERROR_ON_MODIFYING_GTID_EXECUTED_TABLE';
exports[3177] = 'ER_LOCK_REFUSED_BY_ENGINE';
exports[3178] = 'ER_UNSUPPORTED_ALTER_ONLINE_ON_VIRTUAL_COLUMN';
exports[3179] = 'ER_MASTER_KEY_ROTATION_NOT_SUPPORTED_BY_SE';
exports[3180] = 'ER_MASTER_KEY_ROTATION_ERROR_BY_SE';
exports[3181] = 'ER_MASTER_KEY_ROTATION_BINLOG_FAILED';
exports[3182] = 'ER_MASTER_KEY_ROTATION_SE_UNAVAILABLE';
exports[3183] = 'ER_TABLESPACE_CANNOT_ENCRYPT';
exports[3184] = 'ER_INVALID_ENCRYPTION_OPTION';
exports[3185] = 'ER_CANNOT_FIND_KEY_IN_KEYRING';
exports[3186] = 'ER_CAPACITY_EXCEEDED_IN_PARSER';
exports[3187] = 'ER_UNSUPPORTED_ALTER_ENCRYPTION_INPLACE';
exports[3188] = 'ER_KEYRING_UDF_KEYRING_SERVICE_ERROR';
exports[3189] = 'ER_USER_COLUMN_OLD_LENGTH';
exports[3190] = 'ER_CANT_RESET_SOURCE';
exports[3191] = 'ER_GROUP_REPLICATION_MAX_GROUP_SIZE';
exports[3192] = 'ER_CANNOT_ADD_FOREIGN_BASE_COL_STORED';
exports[3193] = 'ER_TABLE_REFERENCED';
exports[3194] = 'ER_PARTITION_ENGINE_DEPRECATED_FOR_TABLE';
exports[3195] = 'ER_WARN_USING_GEOMFROMWKB_TO_SET_SRID_ZERO';
exports[3196] = 'ER_WARN_USING_GEOMFROMWKB_TO_SET_SRID';
exports[3197] = 'ER_XA_RETRY';
exports[3198] = 'ER_KEYRING_AWS_UDF_AWS_KMS_ERROR';
exports[3199] = 'ER_BINLOG_UNSAFE_XA';
exports[3200] = 'ER_UDF_ERROR';
exports[3201] = 'ER_KEYRING_MIGRATION_FAILURE';
exports[3202] = 'ER_KEYRING_ACCESS_DENIED_ERROR';
exports[3203] = 'ER_KEYRING_MIGRATION_STATUS';
exports[3204] = 'ER_PLUGIN_FAILED_TO_OPEN_TABLES';
exports[3205] = 'ER_PLUGIN_FAILED_TO_OPEN_TABLE';
exports[3206] = 'ER_AUDIT_LOG_NO_KEYRING_PLUGIN_INSTALLED';
exports[3207] = 'ER_AUDIT_LOG_ENCRYPTION_PASSWORD_HAS_NOT_BEEN_SET';
exports[3208] = 'ER_AUDIT_LOG_COULD_NOT_CREATE_AES_KEY';
exports[3209] = 'ER_AUDIT_LOG_ENCRYPTION_PASSWORD_CANNOT_BE_FETCHED';
exports[3210] = 'ER_AUDIT_LOG_JSON_FILTERING_NOT_ENABLED';
exports[3211] = 'ER_AUDIT_LOG_UDF_INSUFFICIENT_PRIVILEGE';
exports[3212] = 'ER_AUDIT_LOG_SUPER_PRIVILEGE_REQUIRED';
exports[3213] = 'ER_COULD_NOT_REINITIALIZE_AUDIT_LOG_FILTERS';
exports[3214] = 'ER_AUDIT_LOG_UDF_INVALID_ARGUMENT_TYPE';
exports[3215] = 'ER_AUDIT_LOG_UDF_INVALID_ARGUMENT_COUNT';
exports[3216] = 'ER_AUDIT_LOG_HAS_NOT_BEEN_INSTALLED';
exports[3217] = 'ER_AUDIT_LOG_UDF_READ_INVALID_MAX_ARRAY_LENGTH_ARG_TYPE';
exports[3218] = 'ER_AUDIT_LOG_UDF_READ_INVALID_MAX_ARRAY_LENGTH_ARG_VALUE';
exports[3219] = 'ER_AUDIT_LOG_JSON_FILTER_PARSING_ERROR';
exports[3220] = 'ER_AUDIT_LOG_JSON_FILTER_NAME_CANNOT_BE_EMPTY';
exports[3221] = 'ER_AUDIT_LOG_JSON_USER_NAME_CANNOT_BE_EMPTY';
exports[3222] = 'ER_AUDIT_LOG_JSON_FILTER_DOES_NOT_EXISTS';
exports[3223] = 'ER_AUDIT_LOG_USER_FIRST_CHARACTER_MUST_BE_ALPHANUMERIC';
exports[3224] = 'ER_AUDIT_LOG_USER_NAME_INVALID_CHARACTER';
exports[3225] = 'ER_AUDIT_LOG_HOST_NAME_INVALID_CHARACTER';
exports[3226] = 'WARN_DEPRECATED_MAXDB_SQL_MODE_FOR_TIMESTAMP';
exports[3227] = 'ER_XA_REPLICATION_FILTERS';
exports[3228] = 'ER_CANT_OPEN_ERROR_LOG';
exports[3229] = 'ER_GROUPING_ON_TIMESTAMP_IN_DST';
exports[3230] = 'ER_CANT_START_SERVER_NAMED_PIPE';
exports[3231] = 'ER_WRITE_SET_EXCEEDS_LIMIT';
exports[3232] = 'ER_DEPRECATED_TLS_VERSION_SESSION_57';
exports[3233] = 'ER_WARN_DEPRECATED_TLS_VERSION_57';
exports[3234] = 'ER_WARN_WRONG_NATIVE_TABLE_STRUCTURE';
exports[3235] = 'ER_AES_INVALID_KDF_NAME';
exports[3236] = 'ER_AES_INVALID_KDF_ITERATIONS';
exports[3237] = 'WARN_AES_KEY_SIZE';
exports[3238] = 'ER_AES_INVALID_KDF_OPTION_SIZE';
exports[3500] = 'ER_UNSUPPORT_COMPRESSED_TEMPORARY_TABLE';
exports[3501] = 'ER_ACL_OPERATION_FAILED';
exports[3502] = 'ER_UNSUPPORTED_INDEX_ALGORITHM';
exports[3503] = 'ER_NO_SUCH_DB';
exports[3504] = 'ER_TOO_BIG_ENUM';
exports[3505] = 'ER_TOO_LONG_SET_ENUM_VALUE';
exports[3506] = 'ER_INVALID_DD_OBJECT';
exports[3507] = 'ER_UPDATING_DD_TABLE';
exports[3508] = 'ER_INVALID_DD_OBJECT_ID';
exports[3509] = 'ER_INVALID_DD_OBJECT_NAME';
exports[3510] = 'ER_TABLESPACE_MISSING_WITH_NAME';
exports[3511] = 'ER_TOO_LONG_ROUTINE_COMMENT';
exports[3512] = 'ER_SP_LOAD_FAILED';
exports[3513] = 'ER_INVALID_BITWISE_OPERANDS_SIZE';
exports[3514] = 'ER_INVALID_BITWISE_AGGREGATE_OPERANDS_SIZE';
exports[3515] = 'ER_WARN_UNSUPPORTED_HINT';
exports[3516] = 'ER_UNEXPECTED_GEOMETRY_TYPE';
exports[3517] = 'ER_SRS_PARSE_ERROR';
exports[3518] = 'ER_SRS_PROJ_PARAMETER_MISSING';
exports[3519] = 'ER_WARN_SRS_NOT_FOUND';
exports[3520] = 'ER_SRS_NOT_CARTESIAN';
exports[3521] = 'ER_SRS_NOT_CARTESIAN_UNDEFINED';
exports[3522] = 'ER_PK_INDEX_CANT_BE_INVISIBLE';
exports[3523] = 'ER_UNKNOWN_AUTHID';
exports[3524] = 'ER_FAILED_ROLE_GRANT';
exports[3525] = 'ER_OPEN_ROLE_TABLES';
exports[3526] = 'ER_FAILED_DEFAULT_ROLES';
exports[3527] = 'ER_COMPONENTS_NO_SCHEME';
exports[3528] = 'ER_COMPONENTS_NO_SCHEME_SERVICE';
exports[3529] = 'ER_COMPONENTS_CANT_LOAD';
exports[3530] = 'ER_ROLE_NOT_GRANTED';
exports[3531] = 'ER_FAILED_REVOKE_ROLE';
exports[3532] = 'ER_RENAME_ROLE';
exports[3533] = 'ER_COMPONENTS_CANT_ACQUIRE_SERVICE_IMPLEMENTATION';
exports[3534] = 'ER_COMPONENTS_CANT_SATISFY_DEPENDENCY';
exports[3535] = 'ER_COMPONENTS_LOAD_CANT_REGISTER_SERVICE_IMPLEMENTATION';
exports[3536] = 'ER_COMPONENTS_LOAD_CANT_INITIALIZE';
exports[3537] = 'ER_COMPONENTS_UNLOAD_NOT_LOADED';
exports[3538] = 'ER_COMPONENTS_UNLOAD_CANT_DEINITIALIZE';
exports[3539] = 'ER_COMPONENTS_CANT_RELEASE_SERVICE';
exports[3540] = 'ER_COMPONENTS_UNLOAD_CANT_UNREGISTER_SERVICE';
exports[3541] = 'ER_COMPONENTS_CANT_UNLOAD';
exports[3542] = 'ER_WARN_UNLOAD_THE_NOT_PERSISTED';
exports[3543] = 'ER_COMPONENT_TABLE_INCORRECT';
exports[3544] = 'ER_COMPONENT_MANIPULATE_ROW_FAILED';
exports[3545] = 'ER_COMPONENTS_UNLOAD_DUPLICATE_IN_GROUP';
exports[3546] = 'ER_CANT_SET_GTID_PURGED_DUE_SETS_CONSTRAINTS';
exports[3547] = 'ER_CANNOT_LOCK_USER_MANAGEMENT_CACHES';
exports[3548] = 'ER_SRS_NOT_FOUND';
exports[3549] = 'ER_VARIABLE_NOT_PERSISTED';
exports[3550] = 'ER_IS_QUERY_INVALID_CLAUSE';
exports[3551] = 'ER_UNABLE_TO_STORE_STATISTICS';
exports[3552] = 'ER_NO_SYSTEM_SCHEMA_ACCESS';
exports[3553] = 'ER_NO_SYSTEM_TABLESPACE_ACCESS';
exports[3554] = 'ER_NO_SYSTEM_TABLE_ACCESS';
exports[3555] = 'ER_NO_SYSTEM_TABLE_ACCESS_FOR_DICTIONARY_TABLE';
exports[3556] = 'ER_NO_SYSTEM_TABLE_ACCESS_FOR_SYSTEM_TABLE';
exports[3557] = 'ER_NO_SYSTEM_TABLE_ACCESS_FOR_TABLE';
exports[3558] = 'ER_INVALID_OPTION_KEY';
exports[3559] = 'ER_INVALID_OPTION_VALUE';
exports[3560] = 'ER_INVALID_OPTION_KEY_VALUE_PAIR';
exports[3561] = 'ER_INVALID_OPTION_START_CHARACTER';
exports[3562] = 'ER_INVALID_OPTION_END_CHARACTER';
exports[3563] = 'ER_INVALID_OPTION_CHARACTERS';
exports[3564] = 'ER_DUPLICATE_OPTION_KEY';
exports[3565] = 'ER_WARN_SRS_NOT_FOUND_AXIS_ORDER';
exports[3566] = 'ER_NO_ACCESS_TO_NATIVE_FCT';
exports[3567] = 'ER_RESET_SOURCE_TO_VALUE_OUT_OF_RANGE';
exports[3568] = 'ER_UNRESOLVED_TABLE_LOCK';
exports[3569] = 'ER_DUPLICATE_TABLE_LOCK';
exports[3570] = 'ER_BINLOG_UNSAFE_SKIP_LOCKED';
exports[3571] = 'ER_BINLOG_UNSAFE_NOWAIT';
exports[3572] = 'ER_LOCK_NOWAIT';
exports[3573] = 'ER_CTE_RECURSIVE_REQUIRES_UNION';
exports[3574] = 'ER_CTE_RECURSIVE_REQUIRES_NONRECURSIVE_FIRST';
exports[3575] = 'ER_CTE_RECURSIVE_FORBIDS_AGGREGATION';
exports[3576] = 'ER_CTE_RECURSIVE_FORBIDDEN_JOIN_ORDER';
exports[3577] = 'ER_CTE_RECURSIVE_REQUIRES_SINGLE_REFERENCE';
exports[3578] = 'ER_SWITCH_TMP_ENGINE';
exports[3579] = 'ER_WINDOW_NO_SUCH_WINDOW';
exports[3580] = 'ER_WINDOW_CIRCULARITY_IN_WINDOW_GRAPH';
exports[3581] = 'ER_WINDOW_NO_CHILD_PARTITIONING';
exports[3582] = 'ER_WINDOW_NO_INHERIT_FRAME';
exports[3583] = 'ER_WINDOW_NO_REDEFINE_ORDER_BY';
exports[3584] = 'ER_WINDOW_FRAME_START_ILLEGAL';
exports[3585] = 'ER_WINDOW_FRAME_END_ILLEGAL';
exports[3586] = 'ER_WINDOW_FRAME_ILLEGAL';
exports[3587] = 'ER_WINDOW_RANGE_FRAME_ORDER_TYPE';
exports[3588] = 'ER_WINDOW_RANGE_FRAME_TEMPORAL_TYPE';
exports[3589] = 'ER_WINDOW_RANGE_FRAME_NUMERIC_TYPE';
exports[3590] = 'ER_WINDOW_RANGE_BOUND_NOT_CONSTANT';
exports[3591] = 'ER_WINDOW_DUPLICATE_NAME';
exports[3592] = 'ER_WINDOW_ILLEGAL_ORDER_BY';
exports[3593] = 'ER_WINDOW_INVALID_WINDOW_FUNC_USE';
exports[3594] = 'ER_WINDOW_INVALID_WINDOW_FUNC_ALIAS_USE';
exports[3595] = 'ER_WINDOW_NESTED_WINDOW_FUNC_USE_IN_WINDOW_SPEC';
exports[3596] = 'ER_WINDOW_ROWS_INTERVAL_USE';
exports[3597] = 'ER_WINDOW_NO_GROUP_ORDER';
exports[3598] = 'ER_WINDOW_EXPLAIN_JSON';
exports[3599] = 'ER_WINDOW_FUNCTION_IGNORES_FRAME';
exports[3600] = 'ER_WL9236_NOW';
exports[3601] = 'ER_INVALID_NO_OF_ARGS';
exports[3602] = 'ER_FIELD_IN_GROUPING_NOT_GROUP_BY';
exports[3603] = 'ER_TOO_LONG_TABLESPACE_COMMENT';
exports[3604] = 'ER_ENGINE_CANT_DROP_TABLE';
exports[3605] = 'ER_ENGINE_CANT_DROP_MISSING_TABLE';
exports[3606] = 'ER_TABLESPACE_DUP_FILENAME';
exports[3607] = 'ER_DB_DROP_RMDIR2';
exports[3608] = 'ER_IMP_NO_FILES_MATCHED';
exports[3609] = 'ER_IMP_SCHEMA_DOES_NOT_EXIST';
exports[3610] = 'ER_IMP_TABLE_ALREADY_EXISTS';
exports[3611] = 'ER_IMP_INCOMPATIBLE_MYSQLD_VERSION';
exports[3612] = 'ER_IMP_INCOMPATIBLE_DD_VERSION';
exports[3613] = 'ER_IMP_INCOMPATIBLE_SDI_VERSION';
exports[3614] = 'ER_WARN_INVALID_HINT';
exports[3615] = 'ER_VAR_DOES_NOT_EXIST';
exports[3616] = 'ER_LONGITUDE_OUT_OF_RANGE';
exports[3617] = 'ER_LATITUDE_OUT_OF_RANGE';
exports[3618] = 'ER_NOT_IMPLEMENTED_FOR_GEOGRAPHIC_SRS';
exports[3619] = 'ER_ILLEGAL_PRIVILEGE_LEVEL';
exports[3620] = 'ER_NO_SYSTEM_VIEW_ACCESS';
exports[3621] = 'ER_COMPONENT_FILTER_FLABBERGASTED';
exports[3622] = 'ER_PART_EXPR_TOO_LONG';
exports[3623] = 'ER_UDF_DROP_DYNAMICALLY_REGISTERED';
exports[3624] = 'ER_UNABLE_TO_STORE_COLUMN_STATISTICS';
exports[3625] = 'ER_UNABLE_TO_UPDATE_COLUMN_STATISTICS';
exports[3626] = 'ER_UNABLE_TO_DROP_COLUMN_STATISTICS';
exports[3627] = 'ER_UNABLE_TO_BUILD_HISTOGRAM';
exports[3628] = 'ER_MANDATORY_ROLE';
exports[3629] = 'ER_MISSING_TABLESPACE_FILE';
exports[3630] = 'ER_PERSIST_ONLY_ACCESS_DENIED_ERROR';
exports[3631] = 'ER_CMD_NEED_SUPER';
exports[3632] = 'ER_PATH_IN_DATADIR';
exports[3633] = 'ER_CLONE_DDL_IN_PROGRESS';
exports[3634] = 'ER_CLONE_TOO_MANY_CONCURRENT_CLONES';
exports[3635] = 'ER_APPLIER_LOG_EVENT_VALIDATION_ERROR';
exports[3636] = 'ER_CTE_MAX_RECURSION_DEPTH';
exports[3637] = 'ER_NOT_HINT_UPDATABLE_VARIABLE';
exports[3638] = 'ER_CREDENTIALS_CONTRADICT_TO_HISTORY';
exports[3639] = 'ER_WARNING_PASSWORD_HISTORY_CLAUSES_VOID';
exports[3640] = 'ER_CLIENT_DOES_NOT_SUPPORT';
exports[3641] = 'ER_I_S_SKIPPED_TABLESPACE';
exports[3642] = 'ER_TABLESPACE_ENGINE_MISMATCH';
exports[3643] = 'ER_WRONG_SRID_FOR_COLUMN';
exports[3644] = 'ER_CANNOT_ALTER_SRID_DUE_TO_INDEX';
exports[3645] = 'ER_WARN_BINLOG_PARTIAL_UPDATES_DISABLED';
exports[3646] = 'ER_WARN_BINLOG_V1_ROW_EVENTS_DISABLED';
exports[3647] = 'ER_WARN_BINLOG_PARTIAL_UPDATES_SUGGESTS_PARTIAL_IMAGES';
exports[3648] = 'ER_COULD_NOT_APPLY_JSON_DIFF';
exports[3649] = 'ER_CORRUPTED_JSON_DIFF';
exports[3650] = 'ER_RESOURCE_GROUP_EXISTS';
exports[3651] = 'ER_RESOURCE_GROUP_NOT_EXISTS';
exports[3652] = 'ER_INVALID_VCPU_ID';
exports[3653] = 'ER_INVALID_VCPU_RANGE';
exports[3654] = 'ER_INVALID_THREAD_PRIORITY';
exports[3655] = 'ER_DISALLOWED_OPERATION';
exports[3656] = 'ER_RESOURCE_GROUP_BUSY';
exports[3657] = 'ER_RESOURCE_GROUP_DISABLED';
exports[3658] = 'ER_FEATURE_UNSUPPORTED';
exports[3659] = 'ER_ATTRIBUTE_IGNORED';
exports[3660] = 'ER_INVALID_THREAD_ID';
exports[3661] = 'ER_RESOURCE_GROUP_BIND_FAILED';
exports[3662] = 'ER_INVALID_USE_OF_FORCE_OPTION';
exports[3663] = 'ER_GROUP_REPLICATION_COMMAND_FAILURE';
exports[3664] = 'ER_SDI_OPERATION_FAILED';
exports[3665] = 'ER_MISSING_JSON_TABLE_VALUE';
exports[3666] = 'ER_WRONG_JSON_TABLE_VALUE';
exports[3667] = 'ER_TF_MUST_HAVE_ALIAS';
exports[3668] = 'ER_TF_FORBIDDEN_JOIN_TYPE';
exports[3669] = 'ER_JT_VALUE_OUT_OF_RANGE';
exports[3670] = 'ER_JT_MAX_NESTED_PATH';
exports[3671] = 'ER_PASSWORD_EXPIRATION_NOT_SUPPORTED_BY_AUTH_METHOD';
exports[3672] = 'ER_INVALID_GEOJSON_CRS_NOT_TOP_LEVEL';
exports[3673] = 'ER_BAD_NULL_ERROR_NOT_IGNORED';
exports[3674] = 'WARN_USELESS_SPATIAL_INDEX';
exports[3675] = 'ER_DISK_FULL_NOWAIT';
exports[3676] = 'ER_PARSE_ERROR_IN_DIGEST_FN';
exports[3677] = 'ER_UNDISCLOSED_PARSE_ERROR_IN_DIGEST_FN';
exports[3678] = 'ER_SCHEMA_DIR_EXISTS';
exports[3679] = 'ER_SCHEMA_DIR_MISSING';
exports[3680] = 'ER_SCHEMA_DIR_CREATE_FAILED';
exports[3681] = 'ER_SCHEMA_DIR_UNKNOWN';
exports[3682] = 'ER_ONLY_IMPLEMENTED_FOR_SRID_0_AND_4326';
exports[3683] = 'ER_BINLOG_EXPIRE_LOG_DAYS_AND_SECS_USED_TOGETHER';
exports[3684] = 'ER_REGEXP_BUFFER_OVERFLOW';
exports[3685] = 'ER_REGEXP_ILLEGAL_ARGUMENT';
exports[3686] = 'ER_REGEXP_INDEX_OUTOFBOUNDS_ERROR';
exports[3687] = 'ER_REGEXP_INTERNAL_ERROR';
exports[3688] = 'ER_REGEXP_RULE_SYNTAX';
exports[3689] = 'ER_REGEXP_BAD_ESCAPE_SEQUENCE';
exports[3690] = 'ER_REGEXP_UNIMPLEMENTED';
exports[3691] = 'ER_REGEXP_MISMATCHED_PAREN';
exports[3692] = 'ER_REGEXP_BAD_INTERVAL';
exports[3693] = 'ER_REGEXP_MAX_LT_MIN';
exports[3694] = 'ER_REGEXP_INVALID_BACK_REF';
exports[3695] = 'ER_REGEXP_LOOK_BEHIND_LIMIT';
exports[3696] = 'ER_REGEXP_MISSING_CLOSE_BRACKET';
exports[3697] = 'ER_REGEXP_INVALID_RANGE';
exports[3698] = 'ER_REGEXP_STACK_OVERFLOW';
exports[3699] = 'ER_REGEXP_TIME_OUT';
exports[3700] = 'ER_REGEXP_PATTERN_TOO_BIG';
exports[3701] = 'ER_CANT_SET_ERROR_LOG_SERVICE';
exports[3702] = 'ER_EMPTY_PIPELINE_FOR_ERROR_LOG_SERVICE';
exports[3703] = 'ER_COMPONENT_FILTER_DIAGNOSTICS';
exports[3704] = 'ER_NOT_IMPLEMENTED_FOR_CARTESIAN_SRS';
exports[3705] = 'ER_NOT_IMPLEMENTED_FOR_PROJECTED_SRS';
exports[3706] = 'ER_NONPOSITIVE_RADIUS';
exports[3707] = 'ER_RESTART_SERVER_FAILED';
exports[3708] = 'ER_SRS_MISSING_MANDATORY_ATTRIBUTE';
exports[3709] = 'ER_SRS_MULTIPLE_ATTRIBUTE_DEFINITIONS';
exports[3710] = 'ER_SRS_NAME_CANT_BE_EMPTY_OR_WHITESPACE';
exports[3711] = 'ER_SRS_ORGANIZATION_CANT_BE_EMPTY_OR_WHITESPACE';
exports[3712] = 'ER_SRS_ID_ALREADY_EXISTS';
exports[3713] = 'ER_WARN_SRS_ID_ALREADY_EXISTS';
exports[3714] = 'ER_CANT_MODIFY_SRID_0';
exports[3715] = 'ER_WARN_RESERVED_SRID_RANGE';
exports[3716] = 'ER_CANT_MODIFY_SRS_USED_BY_COLUMN';
exports[3717] = 'ER_SRS_INVALID_CHARACTER_IN_ATTRIBUTE';
exports[3718] = 'ER_SRS_ATTRIBUTE_STRING_TOO_LONG';
exports[3719] = 'ER_DEPRECATED_UTF8_ALIAS';
exports[3720] = 'ER_DEPRECATED_NATIONAL';
exports[3721] = 'ER_INVALID_DEFAULT_UTF8MB4_COLLATION';
exports[3722] = 'ER_UNABLE_TO_COLLECT_LOG_STATUS';
exports[3723] = 'ER_RESERVED_TABLESPACE_NAME';
exports[3724] = 'ER_UNABLE_TO_SET_OPTION';
exports[3725] = 'ER_REPLICA_POSSIBLY_DIVERGED_AFTER_DDL';
exports[3726] = 'ER_SRS_NOT_GEOGRAPHIC';
exports[3727] = 'ER_POLYGON_TOO_LARGE';
exports[3728] = 'ER_SPATIAL_UNIQUE_INDEX';
exports[3729] = 'ER_INDEX_TYPE_NOT_SUPPORTED_FOR_SPATIAL_INDEX';
exports[3730] = 'ER_FK_CANNOT_DROP_PARENT';
exports[3731] = 'ER_GEOMETRY_PARAM_LONGITUDE_OUT_OF_RANGE';
exports[3732] = 'ER_GEOMETRY_PARAM_LATITUDE_OUT_OF_RANGE';
exports[3733] = 'ER_FK_CANNOT_USE_VIRTUAL_COLUMN';
exports[3734] = 'ER_FK_NO_COLUMN_PARENT';
exports[3735] = 'ER_CANT_SET_ERROR_SUPPRESSION_LIST';
exports[3736] = 'ER_SRS_GEOGCS_INVALID_AXES';
exports[3737] = 'ER_SRS_INVALID_SEMI_MAJOR_AXIS';
exports[3738] = 'ER_SRS_INVALID_INVERSE_FLATTENING';
exports[3739] = 'ER_SRS_INVALID_ANGULAR_UNIT';
exports[3740] = 'ER_SRS_INVALID_PRIME_MERIDIAN';
exports[3741] = 'ER_TRANSFORM_SOURCE_SRS_NOT_SUPPORTED';
exports[3742] = 'ER_TRANSFORM_TARGET_SRS_NOT_SUPPORTED';
exports[3743] = 'ER_TRANSFORM_SOURCE_SRS_MISSING_TOWGS84';
exports[3744] = 'ER_TRANSFORM_TARGET_SRS_MISSING_TOWGS84';
exports[3745] = 'ER_TEMP_TABLE_PREVENTS_SWITCH_SESSION_BINLOG_FORMAT';
exports[3746] = 'ER_TEMP_TABLE_PREVENTS_SWITCH_GLOBAL_BINLOG_FORMAT';
exports[3747] = 'ER_RUNNING_APPLIER_PREVENTS_SWITCH_GLOBAL_BINLOG_FORMAT';
exports[3748] = 'ER_CLIENT_GTID_UNSAFE_CREATE_DROP_TEMP_TABLE_IN_TRX_IN_SBR';
exports[3749] = 'ER_XA_CANT_CREATE_MDL_BACKUP';
exports[3750] = 'ER_TABLE_WITHOUT_PK';
exports[3751] = 'ER_WARN_DATA_TRUNCATED_FUNCTIONAL_INDEX';
exports[3752] = 'ER_WARN_DATA_OUT_OF_RANGE_FUNCTIONAL_INDEX';
exports[3753] = 'ER_FUNCTIONAL_INDEX_ON_JSON_OR_GEOMETRY_FUNCTION';
exports[3754] = 'ER_FUNCTIONAL_INDEX_REF_AUTO_INCREMENT';
exports[3755] = 'ER_CANNOT_DROP_COLUMN_FUNCTIONAL_INDEX';
exports[3756] = 'ER_FUNCTIONAL_INDEX_PRIMARY_KEY';
exports[3757] = 'ER_FUNCTIONAL_INDEX_ON_LOB';
exports[3758] = 'ER_FUNCTIONAL_INDEX_FUNCTION_IS_NOT_ALLOWED';
exports[3759] = 'ER_FULLTEXT_FUNCTIONAL_INDEX';
exports[3760] = 'ER_SPATIAL_FUNCTIONAL_INDEX';
exports[3761] = 'ER_WRONG_KEY_COLUMN_FUNCTIONAL_INDEX';
exports[3762] = 'ER_FUNCTIONAL_INDEX_ON_FIELD';
exports[3763] = 'ER_GENERATED_COLUMN_NAMED_FUNCTION_IS_NOT_ALLOWED';
exports[3764] = 'ER_GENERATED_COLUMN_ROW_VALUE';
exports[3765] = 'ER_GENERATED_COLUMN_VARIABLES';
exports[3766] = 'ER_DEPENDENT_BY_DEFAULT_GENERATED_VALUE';
exports[3767] = 'ER_DEFAULT_VAL_GENERATED_NON_PRIOR';
exports[3768] = 'ER_DEFAULT_VAL_GENERATED_REF_AUTO_INC';
exports[3769] = 'ER_DEFAULT_VAL_GENERATED_FUNCTION_IS_NOT_ALLOWED';
exports[3770] = 'ER_DEFAULT_VAL_GENERATED_NAMED_FUNCTION_IS_NOT_ALLOWED';
exports[3771] = 'ER_DEFAULT_VAL_GENERATED_ROW_VALUE';
exports[3772] = 'ER_DEFAULT_VAL_GENERATED_VARIABLES';
exports[3773] = 'ER_DEFAULT_AS_VAL_GENERATED';
exports[3774] = 'ER_UNSUPPORTED_ACTION_ON_DEFAULT_VAL_GENERATED';
exports[3775] = 'ER_GTID_UNSAFE_ALTER_ADD_COL_WITH_DEFAULT_EXPRESSION';
exports[3776] = 'ER_FK_CANNOT_CHANGE_ENGINE';
exports[3777] = 'ER_WARN_DEPRECATED_USER_SET_EXPR';
exports[3778] = 'ER_WARN_DEPRECATED_UTF8MB3_COLLATION';
exports[3779] = 'ER_WARN_DEPRECATED_NESTED_COMMENT_SYNTAX';
exports[3780] = 'ER_FK_INCOMPATIBLE_COLUMNS';
exports[3781] = 'ER_GR_HOLD_WAIT_TIMEOUT';
exports[3782] = 'ER_GR_HOLD_KILLED';
exports[3783] = 'ER_GR_HOLD_MEMBER_STATUS_ERROR';
exports[3784] = 'ER_RPL_ENCRYPTION_FAILED_TO_FETCH_KEY';
exports[3785] = 'ER_RPL_ENCRYPTION_KEY_NOT_FOUND';
exports[3786] = 'ER_RPL_ENCRYPTION_KEYRING_INVALID_KEY';
exports[3787] = 'ER_RPL_ENCRYPTION_HEADER_ERROR';
exports[3788] = 'ER_RPL_ENCRYPTION_FAILED_TO_ROTATE_LOGS';
exports[3789] = 'ER_RPL_ENCRYPTION_KEY_EXISTS_UNEXPECTED';
exports[3790] = 'ER_RPL_ENCRYPTION_FAILED_TO_GENERATE_KEY';
exports[3791] = 'ER_RPL_ENCRYPTION_FAILED_TO_STORE_KEY';
exports[3792] = 'ER_RPL_ENCRYPTION_FAILED_TO_REMOVE_KEY';
exports[3793] = 'ER_RPL_ENCRYPTION_UNABLE_TO_CHANGE_OPTION';
exports[3794] = 'ER_RPL_ENCRYPTION_MASTER_KEY_RECOVERY_FAILED';
exports[3795] = 'ER_SLOW_LOG_MODE_IGNORED_WHEN_NOT_LOGGING_TO_FILE';
exports[3796] = 'ER_GRP_TRX_CONSISTENCY_NOT_ALLOWED';
exports[3797] = 'ER_GRP_TRX_CONSISTENCY_BEFORE';
exports[3798] = 'ER_GRP_TRX_CONSISTENCY_AFTER_ON_TRX_BEGIN';
exports[3799] = 'ER_GRP_TRX_CONSISTENCY_BEGIN_NOT_ALLOWED';
exports[3800] = 'ER_FUNCTIONAL_INDEX_ROW_VALUE_IS_NOT_ALLOWED';
exports[3801] = 'ER_RPL_ENCRYPTION_FAILED_TO_ENCRYPT';
exports[3802] = 'ER_PAGE_TRACKING_NOT_STARTED';
exports[3803] = 'ER_PAGE_TRACKING_RANGE_NOT_TRACKED';
exports[3804] = 'ER_PAGE_TRACKING_CANNOT_PURGE';
exports[3805] = 'ER_RPL_ENCRYPTION_CANNOT_ROTATE_BINLOG_MASTER_KEY';
exports[3806] = 'ER_BINLOG_MASTER_KEY_RECOVERY_OUT_OF_COMBINATION';
exports[3807] = 'ER_BINLOG_MASTER_KEY_ROTATION_FAIL_TO_OPERATE_KEY';
exports[3808] = 'ER_BINLOG_MASTER_KEY_ROTATION_FAIL_TO_ROTATE_LOGS';
exports[3809] = 'ER_BINLOG_MASTER_KEY_ROTATION_FAIL_TO_REENCRYPT_LOG';
exports[3810] = 'ER_BINLOG_MASTER_KEY_ROTATION_FAIL_TO_CLEANUP_UNUSED_KEYS';
exports[3811] = 'ER_BINLOG_MASTER_KEY_ROTATION_FAIL_TO_CLEANUP_AUX_KEY';
exports[3812] = 'ER_NON_BOOLEAN_EXPR_FOR_CHECK_CONSTRAINT';
exports[3813] = 'ER_COLUMN_CHECK_CONSTRAINT_REFERENCES_OTHER_COLUMN';
exports[3814] = 'ER_CHECK_CONSTRAINT_NAMED_FUNCTION_IS_NOT_ALLOWED';
exports[3815] = 'ER_CHECK_CONSTRAINT_FUNCTION_IS_NOT_ALLOWED';
exports[3816] = 'ER_CHECK_CONSTRAINT_VARIABLES';
exports[3817] = 'ER_CHECK_CONSTRAINT_ROW_VALUE';
exports[3818] = 'ER_CHECK_CONSTRAINT_REFERS_AUTO_INCREMENT_COLUMN';
exports[3819] = 'ER_CHECK_CONSTRAINT_VIOLATED';
exports[3820] = 'ER_CHECK_CONSTRAINT_REFERS_UNKNOWN_COLUMN';
exports[3821] = 'ER_CHECK_CONSTRAINT_NOT_FOUND';
exports[3822] = 'ER_CHECK_CONSTRAINT_DUP_NAME';
exports[3823] = 'ER_CHECK_CONSTRAINT_CLAUSE_USING_FK_REFER_ACTION_COLUMN';
exports[3824] = 'WARN_UNENCRYPTED_TABLE_IN_ENCRYPTED_DB';
exports[3825] = 'ER_INVALID_ENCRYPTION_REQUEST';
exports[3826] = 'ER_CANNOT_SET_TABLE_ENCRYPTION';
exports[3827] = 'ER_CANNOT_SET_DATABASE_ENCRYPTION';
exports[3828] = 'ER_CANNOT_SET_TABLESPACE_ENCRYPTION';
exports[3829] = 'ER_TABLESPACE_CANNOT_BE_ENCRYPTED';
exports[3830] = 'ER_TABLESPACE_CANNOT_BE_DECRYPTED';
exports[3831] = 'ER_TABLESPACE_TYPE_UNKNOWN';
exports[3832] = 'ER_TARGET_TABLESPACE_UNENCRYPTED';
exports[3833] = 'ER_CANNOT_USE_ENCRYPTION_CLAUSE';
exports[3834] = 'ER_INVALID_MULTIPLE_CLAUSES';
exports[3835] = 'ER_UNSUPPORTED_USE_OF_GRANT_AS';
exports[3836] = 'ER_UKNOWN_AUTH_ID_OR_ACCESS_DENIED_FOR_GRANT_AS';
exports[3837] = 'ER_DEPENDENT_BY_FUNCTIONAL_INDEX';
exports[3838] = 'ER_PLUGIN_NOT_EARLY';
exports[3839] = 'ER_INNODB_REDO_LOG_ARCHIVE_START_SUBDIR_PATH';
exports[3840] = 'ER_INNODB_REDO_LOG_ARCHIVE_START_TIMEOUT';
exports[3841] = 'ER_INNODB_REDO_LOG_ARCHIVE_DIRS_INVALID';
exports[3842] = 'ER_INNODB_REDO_LOG_ARCHIVE_LABEL_NOT_FOUND';
exports[3843] = 'ER_INNODB_REDO_LOG_ARCHIVE_DIR_EMPTY';
exports[3844] = 'ER_INNODB_REDO_LOG_ARCHIVE_NO_SUCH_DIR';
exports[3845] = 'ER_INNODB_REDO_LOG_ARCHIVE_DIR_CLASH';
exports[3846] = 'ER_INNODB_REDO_LOG_ARCHIVE_DIR_PERMISSIONS';
exports[3847] = 'ER_INNODB_REDO_LOG_ARCHIVE_FILE_CREATE';
exports[3848] = 'ER_INNODB_REDO_LOG_ARCHIVE_ACTIVE';
exports[3849] = 'ER_INNODB_REDO_LOG_ARCHIVE_INACTIVE';
exports[3850] = 'ER_INNODB_REDO_LOG_ARCHIVE_FAILED';
exports[3851] = 'ER_INNODB_REDO_LOG_ARCHIVE_SESSION';
exports[3852] = 'ER_STD_REGEX_ERROR';
exports[3853] = 'ER_INVALID_JSON_TYPE';
exports[3854] = 'ER_CANNOT_CONVERT_STRING';
exports[3855] = 'ER_DEPENDENT_BY_PARTITION_FUNC';
exports[3856] = 'ER_WARN_DEPRECATED_FLOAT_AUTO_INCREMENT';
exports[3857] = 'ER_RPL_CANT_STOP_REPLICA_WHILE_LOCKED_BACKUP';
exports[3858] = 'ER_WARN_DEPRECATED_FLOAT_DIGITS';
exports[3859] = 'ER_WARN_DEPRECATED_FLOAT_UNSIGNED';
exports[3860] = 'ER_WARN_DEPRECATED_INTEGER_DISPLAY_WIDTH';
exports[3861] = 'ER_WARN_DEPRECATED_ZEROFILL';
exports[3862] = 'ER_CLONE_DONOR';
exports[3863] = 'ER_CLONE_PROTOCOL';
exports[3864] = 'ER_CLONE_DONOR_VERSION';
exports[3865] = 'ER_CLONE_OS';
exports[3866] = 'ER_CLONE_PLATFORM';
exports[3867] = 'ER_CLONE_CHARSET';
exports[3868] = 'ER_CLONE_CONFIG';
exports[3869] = 'ER_CLONE_SYS_CONFIG';
exports[3870] = 'ER_CLONE_PLUGIN_MATCH';
exports[3871] = 'ER_CLONE_LOOPBACK';
exports[3872] = 'ER_CLONE_ENCRYPTION';
exports[3873] = 'ER_CLONE_DISK_SPACE';
exports[3874] = 'ER_CLONE_IN_PROGRESS';
exports[3875] = 'ER_CLONE_DISALLOWED';
exports[3876] = 'ER_CANNOT_GRANT_ROLES_TO_ANONYMOUS_USER';
exports[3877] = 'ER_SECONDARY_ENGINE_PLUGIN';
exports[3878] = 'ER_SECOND_PASSWORD_CANNOT_BE_EMPTY';
exports[3879] = 'ER_DB_ACCESS_DENIED';
exports[3880] = 'ER_DA_AUTH_ID_WITH_SYSTEM_USER_PRIV_IN_MANDATORY_ROLES';
exports[3881] = 'ER_DA_RPL_GTID_TABLE_CANNOT_OPEN';
exports[3882] = 'ER_GEOMETRY_IN_UNKNOWN_LENGTH_UNIT';
exports[3883] = 'ER_DA_PLUGIN_INSTALL_ERROR';
exports[3884] = 'ER_NO_SESSION_TEMP';
exports[3885] = 'ER_DA_UNKNOWN_ERROR_NUMBER';
exports[3886] = 'ER_COLUMN_CHANGE_SIZE';
exports[3887] = 'ER_REGEXP_INVALID_CAPTURE_GROUP_NAME';
exports[3888] = 'ER_DA_SSL_LIBRARY_ERROR';
exports[3889] = 'ER_SECONDARY_ENGINE';
exports[3890] = 'ER_SECONDARY_ENGINE_DDL';
exports[3891] = 'ER_INCORRECT_CURRENT_PASSWORD';
exports[3892] = 'ER_MISSING_CURRENT_PASSWORD';
exports[3893] = 'ER_CURRENT_PASSWORD_NOT_REQUIRED';
exports[3894] = 'ER_PASSWORD_CANNOT_BE_RETAINED_ON_PLUGIN_CHANGE';
exports[3895] = 'ER_CURRENT_PASSWORD_CANNOT_BE_RETAINED';
exports[3896] = 'ER_PARTIAL_REVOKES_EXIST';
exports[3897] = 'ER_CANNOT_GRANT_SYSTEM_PRIV_TO_MANDATORY_ROLE';
exports[3898] = 'ER_XA_REPLICATION_FILTERS';
exports[3899] = 'ER_UNSUPPORTED_SQL_MODE';
exports[3900] = 'ER_REGEXP_INVALID_FLAG';
exports[3901] = 'ER_PARTIAL_REVOKE_AND_DB_GRANT_BOTH_EXISTS';
exports[3902] = 'ER_UNIT_NOT_FOUND';
exports[3903] = 'ER_INVALID_JSON_VALUE_FOR_FUNC_INDEX';
exports[3904] = 'ER_JSON_VALUE_OUT_OF_RANGE_FOR_FUNC_INDEX';
exports[3905] = 'ER_EXCEEDED_MV_KEYS_NUM';
exports[3906] = 'ER_EXCEEDED_MV_KEYS_SPACE';
exports[3907] = 'ER_FUNCTIONAL_INDEX_DATA_IS_TOO_LONG';
exports[3908] = 'ER_WRONG_MVI_VALUE';
exports[3909] = 'ER_WARN_FUNC_INDEX_NOT_APPLICABLE';
exports[3910] = 'ER_GRP_RPL_UDF_ERROR';
exports[3911] = 'ER_UPDATE_GTID_PURGED_WITH_GR';
exports[3912] = 'ER_GROUPING_ON_TIMESTAMP_IN_DST';
exports[3913] = 'ER_TABLE_NAME_CAUSES_TOO_LONG_PATH';
exports[3914] = 'ER_AUDIT_LOG_INSUFFICIENT_PRIVILEGE';
exports[3915] = 'ER_AUDIT_LOG_PASSWORD_HAS_BEEN_COPIED';
exports[3916] = 'ER_DA_GRP_RPL_STARTED_AUTO_REJOIN';
exports[3917] = 'ER_SYSVAR_CHANGE_DURING_QUERY';
exports[3918] = 'ER_GLOBSTAT_CHANGE_DURING_QUERY';
exports[3919] = 'ER_GRP_RPL_MESSAGE_SERVICE_INIT_FAILURE';
exports[3920] = 'ER_CHANGE_SOURCE_WRONG_COMPRESSION_ALGORITHM_CLIENT';
exports[3921] = 'ER_CHANGE_SOURCE_WRONG_COMPRESSION_LEVEL_CLIENT';
exports[3922] = 'ER_WRONG_COMPRESSION_ALGORITHM_CLIENT';
exports[3923] = 'ER_WRONG_COMPRESSION_LEVEL_CLIENT';
exports[3924] = 'ER_CHANGE_SOURCE_WRONG_COMPRESSION_ALGORITHM_LIST_CLIENT';
exports[3925] = 'ER_CLIENT_PRIVILEGE_CHECKS_USER_CANNOT_BE_ANONYMOUS';
exports[3926] = 'ER_CLIENT_PRIVILEGE_CHECKS_USER_DOES_NOT_EXIST';
exports[3927] = 'ER_CLIENT_PRIVILEGE_CHECKS_USER_CORRUPT';
exports[3928] = 'ER_CLIENT_PRIVILEGE_CHECKS_USER_NEEDS_RPL_APPLIER_PRIV';
exports[3929] = 'ER_WARN_DA_PRIVILEGE_NOT_REGISTERED';
exports[3930] = 'ER_CLIENT_KEYRING_UDF_KEY_INVALID';
exports[3931] = 'ER_CLIENT_KEYRING_UDF_KEY_TYPE_INVALID';
exports[3932] = 'ER_CLIENT_KEYRING_UDF_KEY_TOO_LONG';
exports[3933] = 'ER_CLIENT_KEYRING_UDF_KEY_TYPE_TOO_LONG';
exports[3934] = 'ER_JSON_SCHEMA_VALIDATION_ERROR_WITH_DETAILED_REPORT';
exports[3935] = 'ER_DA_UDF_INVALID_CHARSET_SPECIFIED';
exports[3936] = 'ER_DA_UDF_INVALID_CHARSET';
exports[3937] = 'ER_DA_UDF_INVALID_COLLATION';
exports[3938] = 'ER_DA_UDF_INVALID_EXTENSION_ARGUMENT_TYPE';
exports[3939] = 'ER_MULTIPLE_CONSTRAINTS_WITH_SAME_NAME';
exports[3940] = 'ER_CONSTRAINT_NOT_FOUND';
exports[3941] = 'ER_ALTER_CONSTRAINT_ENFORCEMENT_NOT_SUPPORTED';
exports[3942] = 'ER_TABLE_VALUE_CONSTRUCTOR_MUST_HAVE_COLUMNS';
exports[3943] = 'ER_TABLE_VALUE_CONSTRUCTOR_CANNOT_HAVE_DEFAULT';
exports[3944] = 'ER_CLIENT_QUERY_FAILURE_INVALID_NON_ROW_FORMAT';
exports[3945] = 'ER_REQUIRE_ROW_FORMAT_INVALID_VALUE';
exports[3946] = 'ER_FAILED_TO_DETERMINE_IF_ROLE_IS_MANDATORY';
exports[3947] = 'ER_FAILED_TO_FETCH_MANDATORY_ROLE_LIST';
exports[3948] = 'ER_CLIENT_LOCAL_FILES_DISABLED';
exports[3949] = 'ER_IMP_INCOMPATIBLE_CFG_VERSION';
exports[3950] = 'ER_DA_OOM';
exports[3951] = 'ER_DA_UDF_INVALID_ARGUMENT_TO_SET_CHARSET';
exports[3952] = 'ER_DA_UDF_INVALID_RETURN_TYPE_TO_SET_CHARSET';
exports[3953] = 'ER_MULTIPLE_INTO_CLAUSES';
exports[3954] = 'ER_MISPLACED_INTO';
exports[3955] =
  'ER_USER_ACCESS_DENIED_FOR_USER_ACCOUNT_BLOCKED_BY_PASSWORD_LOCK';
exports[3956] = 'ER_WARN_DEPRECATED_YEAR_UNSIGNED';
exports[3957] = 'ER_CLONE_NETWORK_PACKET';
exports[3958] = 'ER_SDI_OPERATION_FAILED_MISSING_RECORD';
exports[3959] = 'ER_DEPENDENT_BY_CHECK_CONSTRAINT';
exports[3960] = 'ER_GRP_OPERATION_NOT_ALLOWED_GR_MUST_STOP';
exports[3961] = 'ER_WARN_DEPRECATED_JSON_TABLE_ON_ERROR_ON_EMPTY';
exports[3962] = 'ER_WARN_DEPRECATED_INNER_INTO';
exports[3963] = 'ER_WARN_DEPRECATED_VALUES_FUNCTION_ALWAYS_NULL';
exports[3964] = 'ER_WARN_DEPRECATED_SQL_CALC_FOUND_ROWS';
exports[3965] = 'ER_WARN_DEPRECATED_FOUND_ROWS';
exports[3966] = 'ER_MISSING_JSON_VALUE';
exports[3967] = 'ER_MULTIPLE_JSON_VALUES';
exports[3968] = 'ER_HOSTNAME_TOO_LONG';
exports[3969] = 'ER_WARN_CLIENT_DEPRECATED_PARTITION_PREFIX_KEY';
exports[3970] = 'ER_GROUP_REPLICATION_USER_EMPTY_MSG';
exports[3971] = 'ER_GROUP_REPLICATION_USER_MANDATORY_MSG';
exports[3972] = 'ER_GROUP_REPLICATION_PASSWORD_LENGTH';
exports[3973] = 'ER_SUBQUERY_TRANSFORM_REJECTED';
exports[3974] = 'ER_DA_GRP_RPL_RECOVERY_ENDPOINT_FORMAT';
exports[3975] = 'ER_DA_GRP_RPL_RECOVERY_ENDPOINT_INVALID';
exports[3976] = 'ER_WRONG_VALUE_FOR_VAR_PLUS_ACTIONABLE_PART';
exports[3977] = 'ER_STATEMENT_NOT_ALLOWED_AFTER_START_TRANSACTION';
exports[3978] = 'ER_FOREIGN_KEY_WITH_ATOMIC_CREATE_SELECT';
exports[3979] = 'ER_NOT_ALLOWED_WITH_START_TRANSACTION';
exports[3980] = 'ER_INVALID_JSON_ATTRIBUTE';
exports[3981] = 'ER_ENGINE_ATTRIBUTE_NOT_SUPPORTED';
exports[3982] = 'ER_INVALID_USER_ATTRIBUTE_JSON';
exports[3983] = 'ER_INNODB_REDO_DISABLED';
exports[3984] = 'ER_INNODB_REDO_ARCHIVING_ENABLED';
exports[3985] = 'ER_MDL_OUT_OF_RESOURCES';
exports[3986] = 'ER_IMPLICIT_COMPARISON_FOR_JSON';
exports[3987] = 'ER_FUNCTION_DOES_NOT_SUPPORT_CHARACTER_SET';
exports[3988] = 'ER_IMPOSSIBLE_STRING_CONVERSION';
exports[3989] = 'ER_SCHEMA_READ_ONLY';
exports[3990] = 'ER_RPL_ASYNC_RECONNECT_GTID_MODE_OFF';
exports[3991] = 'ER_RPL_ASYNC_RECONNECT_AUTO_POSITION_OFF';
exports[3992] = 'ER_DISABLE_GTID_MODE_REQUIRES_ASYNC_RECONNECT_OFF';
exports[3993] = 'ER_DISABLE_AUTO_POSITION_REQUIRES_ASYNC_RECONNECT_OFF';
exports[3994] = 'ER_INVALID_PARAMETER_USE';
exports[3995] = 'ER_CHARACTER_SET_MISMATCH';
exports[3996] = 'ER_WARN_VAR_VALUE_CHANGE_NOT_SUPPORTED';
exports[3997] = 'ER_INVALID_TIME_ZONE_INTERVAL';
exports[3998] = 'ER_INVALID_CAST';
exports[3999] = 'ER_HYPERGRAPH_NOT_SUPPORTED_YET';
exports[4000] = 'ER_WARN_HYPERGRAPH_EXPERIMENTAL';
exports[4001] = 'ER_DA_NO_ERROR_LOG_PARSER_CONFIGURED';
exports[4002] = 'ER_DA_ERROR_LOG_TABLE_DISABLED';
exports[4003] = 'ER_DA_ERROR_LOG_MULTIPLE_FILTERS';
exports[4004] = 'ER_DA_CANT_OPEN_ERROR_LOG';
exports[4005] = 'ER_USER_REFERENCED_AS_DEFINER';
exports[4006] = 'ER_CANNOT_USER_REFERENCED_AS_DEFINER';
exports[4007] = 'ER_REGEX_NUMBER_TOO_BIG';
exports[4008] = 'ER_SPVAR_NONINTEGER_TYPE';
exports[4009] = 'WARN_UNSUPPORTED_ACL_TABLES_READ';
exports[4010] = 'ER_BINLOG_UNSAFE_ACL_TABLE_READ_IN_DML_DDL';
exports[4011] = 'ER_STOP_REPLICA_MONITOR_IO_THREAD_TIMEOUT';
exports[4012] = 'ER_STARTING_REPLICA_MONITOR_IO_THREAD';
exports[4013] = 'ER_CANT_USE_ANONYMOUS_TO_GTID_WITH_GTID_MODE_NOT_ON';
exports[4014] = 'ER_CANT_COMBINE_ANONYMOUS_TO_GTID_AND_AUTOPOSITION';
exports[4015] =
  'ER_ASSIGN_GTIDS_TO_ANONYMOUS_TRANSACTIONS_REQUIRES_GTID_MODE_ON';
exports[4016] = 'ER_SQL_REPLICA_SKIP_COUNTER_USED_WITH_GTID_MODE_ON';
exports[4017] =
  'ER_USING_ASSIGN_GTIDS_TO_ANONYMOUS_TRANSACTIONS_AS_LOCAL_OR_UUID';
exports[4018] =
  'ER_CANT_SET_ANONYMOUS_TO_GTID_AND_WAIT_UNTIL_SQL_THD_AFTER_GTIDS';
exports[4019] = 'ER_CANT_SET_SQL_AFTER_OR_BEFORE_GTIDS_WITH_ANONYMOUS_TO_GTID';
exports[4020] = 'ER_ANONYMOUS_TO_GTID_UUID_SAME_AS_GROUP_NAME';
exports[4021] = 'ER_CANT_USE_SAME_UUID_AS_GROUP_NAME';
exports[4022] = 'ER_GRP_RPL_RECOVERY_CHANNEL_STILL_RUNNING';
exports[4023] = 'ER_INNODB_INVALID_AUTOEXTEND_SIZE_VALUE';
exports[4024] = 'ER_INNODB_INCOMPATIBLE_WITH_TABLESPACE';
exports[4025] = 'ER_INNODB_AUTOEXTEND_SIZE_OUT_OF_RANGE';
exports[4026] = 'ER_CANNOT_USE_AUTOEXTEND_SIZE_CLAUSE';
exports[4027] = 'ER_ROLE_GRANTED_TO_ITSELF';
exports[4028] = 'ER_TABLE_MUST_HAVE_A_VISIBLE_COLUMN';
exports[4029] = 'ER_INNODB_COMPRESSION_FAILURE';
exports[4030] = 'ER_WARN_ASYNC_CONN_FAILOVER_NETWORK_NAMESPACE';
exports[4031] = 'ER_CLIENT_INTERACTION_TIMEOUT';
exports[4032] = 'ER_INVALID_CAST_TO_GEOMETRY';
exports[4033] = 'ER_INVALID_CAST_POLYGON_RING_DIRECTION';
exports[4034] = 'ER_GIS_DIFFERENT_SRIDS_AGGREGATION';
exports[4035] = 'ER_RELOAD_KEYRING_FAILURE';
exports[4036] = 'ER_SDI_GET_KEYS_INVALID_TABLESPACE';
exports[4037] = 'ER_CHANGE_RPL_SRC_WRONG_COMPRESSION_ALGORITHM_SIZE';
exports[4038] = 'ER_WARN_DEPRECATED_TLS_VERSION_FOR_CHANNEL_CLI';
exports[4039] = 'ER_CANT_USE_SAME_UUID_AS_VIEW_CHANGE_UUID';
exports[4040] = 'ER_ANONYMOUS_TO_GTID_UUID_SAME_AS_VIEW_CHANGE_UUID';
exports[4041] = 'ER_GRP_RPL_VIEW_CHANGE_UUID_FAIL_GET_VARIABLE';
exports[4042] = 'ER_WARN_ADUIT_LOG_MAX_SIZE_AND_PRUNE_SECONDS';
exports[4043] = 'ER_WARN_ADUIT_LOG_MAX_SIZE_CLOSE_TO_ROTATE_ON_SIZE';
exports[4044] = 'ER_KERBEROS_CREATE_USER';
exports[4045] = 'ER_INSTALL_PLUGIN_CONFLICT_CLIENT';
exports[4046] = 'ER_DA_ERROR_LOG_COMPONENT_FLUSH_FAILED';
exports[4047] = 'ER_WARN_SQL_AFTER_MTS_GAPS_GAP_NOT_CALCULATED';
exports[4048] = 'ER_INVALID_ASSIGNMENT_TARGET';
exports[4049] = 'ER_OPERATION_NOT_ALLOWED_ON_GR_SECONDARY';
exports[4050] = 'ER_GRP_RPL_FAILOVER_CHANNEL_STATUS_PROPAGATION';
exports[4051] = 'ER_WARN_AUDIT_LOG_FORMAT_UNIX_TIMESTAMP_ONLY_WHEN_JSON';
exports[4052] = 'ER_INVALID_MFA_PLUGIN_SPECIFIED';
exports[4053] = 'ER_IDENTIFIED_BY_UNSUPPORTED';
exports[4054] = 'ER_INVALID_PLUGIN_FOR_REGISTRATION';
exports[4055] = 'ER_PLUGIN_REQUIRES_REGISTRATION';
exports[4056] = 'ER_MFA_METHOD_EXISTS';
exports[4057] = 'ER_MFA_METHOD_NOT_EXISTS';
exports[4058] = 'ER_AUTHENTICATION_POLICY_MISMATCH';
exports[4059] = 'ER_PLUGIN_REGISTRATION_DONE';
exports[4060] = 'ER_INVALID_USER_FOR_REGISTRATION';
exports[4061] = 'ER_USER_REGISTRATION_FAILED';
exports[4062] = 'ER_MFA_METHODS_INVALID_ORDER';
exports[4063] = 'ER_MFA_METHODS_IDENTICAL';
exports[4064] = 'ER_INVALID_MFA_OPERATIONS_FOR_PASSWORDLESS_USER';
exports[4065] = 'ER_CHANGE_REPLICATION_SOURCE_NO_OPTIONS_FOR_GTID_ONLY';
exports[4066] =
  'ER_CHANGE_REP_SOURCE_CANT_DISABLE_REQ_ROW_FORMAT_WITH_GTID_ONLY';
exports[4067] =
  'ER_CHANGE_REP_SOURCE_CANT_DISABLE_AUTO_POSITION_WITH_GTID_ONLY';
exports[4068] = 'ER_CHANGE_REP_SOURCE_CANT_DISABLE_GTID_ONLY_WITHOUT_POSITIONS';
exports[4069] = 'ER_CHANGE_REP_SOURCE_CANT_DISABLE_AUTO_POS_WITHOUT_POSITIONS';
exports[4070] = 'ER_CHANGE_REP_SOURCE_GR_CHANNEL_WITH_GTID_MODE_NOT_ON';
exports[4071] = 'ER_CANT_USE_GTID_ONLY_WITH_GTID_MODE_NOT_ON';
exports[4072] = 'ER_WARN_C_DISABLE_GTID_ONLY_WITH_SOURCE_AUTO_POS_INVALID_POS';
exports[4073] = 'ER_DA_SSL_FIPS_MODE_ERROR';
exports[4074] = 'ER_VALUE_OUT_OF_RANGE';
exports[4075] = 'ER_FULLTEXT_WITH_ROLLUP';
exports[4076] = 'ER_REGEXP_MISSING_RESOURCE';
exports[4077] = 'ER_WARN_REGEXP_USING_DEFAULT';
exports[4078] = 'ER_REGEXP_MISSING_FILE';
exports[4079] = 'ER_WARN_DEPRECATED_COLLATION';
exports[4080] = 'ER_CONCURRENT_PROCEDURE_USAGE';
exports[4081] = 'ER_DA_GLOBAL_CONN_LIMIT';
exports[4082] = 'ER_DA_CONN_LIMIT';
exports[4083] = 'ER_ALTER_OPERATION_NOT_SUPPORTED_REASON_COLUMN_TYPE_INSTANT';
exports[4084] = 'ER_WARN_SF_UDF_NAME_COLLISION';
exports[4085] = 'ER_CANNOT_PURGE_BINLOG_WITH_BACKUP_LOCK';
exports[4086] = 'ER_TOO_MANY_WINDOWS';
exports[4087] = 'ER_MYSQLBACKUP_CLIENT_MSG';
exports[4088] = 'ER_COMMENT_CONTAINS_INVALID_STRING';
exports[4089] = 'ER_DEFINITION_CONTAINS_INVALID_STRING';
exports[4090] = 'ER_CANT_EXECUTE_COMMAND_WITH_ASSIGNED_GTID_NEXT';
exports[4091] = 'ER_XA_TEMP_TABLE';
exports[4092] = 'ER_INNODB_MAX_ROW_VERSION';
exports[4093] = 'ER_INNODB_INSTANT_ADD_NOT_SUPPORTED_MAX_SIZE';
exports[4094] = 'ER_OPERATION_NOT_ALLOWED_WHILE_PRIMARY_CHANGE_IS_RUNNING';
exports[4095] = 'ER_WARN_DEPRECATED_DATETIME_DELIMITER';
exports[4096] = 'ER_WARN_DEPRECATED_SUPERFLUOUS_DELIMITER';
exports[4097] = 'ER_CANNOT_PERSIST_SENSITIVE_VARIABLES';
exports[4098] = 'ER_WARN_CANNOT_SECURELY_PERSIST_SENSITIVE_VARIABLES';
exports[4099] = 'ER_WARN_TRG_ALREADY_EXISTS';
exports[4100] = 'ER_IF_NOT_EXISTS_UNSUPPORTED_TRG_EXISTS_ON_DIFFERENT_TABLE';
exports[4101] = 'ER_IF_NOT_EXISTS_UNSUPPORTED_UDF_NATIVE_FCT_NAME_COLLISION';
exports[4102] = 'ER_SET_PASSWORD_AUTH_PLUGIN_ERROR';
exports[4103] = 'ER_REDUCED_DBLWR_FILE_CORRUPTED';
exports[4104] = 'ER_REDUCED_DBLWR_PAGE_FOUND';
exports[4105] = 'ER_SRS_INVALID_LATITUDE_OF_ORIGIN';
exports[4106] = 'ER_SRS_INVALID_LONGITUDE_OF_ORIGIN';
exports[4107] = 'ER_SRS_UNUSED_PROJ_PARAMETER_PRESENT';
exports[4108] = 'ER_GIPK_COLUMN_EXISTS';
exports[4109] = 'ER_GIPK_FAILED_AUTOINC_COLUMN_EXISTS';
exports[4110] = 'ER_GIPK_COLUMN_ALTER_NOT_ALLOWED';
exports[4111] = 'ER_DROP_PK_COLUMN_TO_DROP_GIPK';
exports[4112] = 'ER_CREATE_SELECT_WITH_GIPK_DISALLOWED_IN_SBR';
exports[4113] = 'ER_DA_EXPIRE_LOGS_DAYS_IGNORED';
exports[4114] = 'ER_CTE_RECURSIVE_NOT_UNION';
exports[4115] = 'ER_COMMAND_BACKEND_FAILED_TO_FETCH_SECURITY_CTX';
exports[4116] = 'ER_COMMAND_SERVICE_BACKEND_FAILED';
exports[4117] = 'ER_CLIENT_FILE_PRIVILEGE_FOR_REPLICATION_CHECKS';
exports[4118] = 'ER_GROUP_REPLICATION_FORCE_MEMBERS_COMMAND_FAILURE';
exports[4119] = 'ER_WARN_DEPRECATED_IDENT';
exports[4120] = 'ER_INTERSECT_ALL_MAX_DUPLICATES_EXCEEDED';
exports[4121] = 'ER_TP_QUERY_THRS_PER_GRP_EXCEEDS_TXN_THR_LIMIT';
exports[4122] = 'ER_BAD_TIMESTAMP_FORMAT';
exports[4123] = 'ER_SHAPE_PRIDICTION_UDF';
exports[4124] = 'ER_SRS_INVALID_HEIGHT';
exports[4125] = 'ER_SRS_INVALID_SCALING';
exports[4126] = 'ER_SRS_INVALID_ZONE_WIDTH';
exports[4127] = 'ER_SRS_INVALID_LATITUDE_POLAR_STERE_VAR_A';
exports[4128] = 'ER_WARN_DEPRECATED_CLIENT_NO_SCHEMA_OPTION';
exports[4129] = 'ER_TABLE_NOT_EMPTY';
exports[4130] = 'ER_TABLE_NO_PRIMARY_KEY';
exports[4131] = 'ER_TABLE_IN_SHARED_TABLESPACE';
exports[4132] = 'ER_INDEX_OTHER_THAN_PK';
exports[4133] = 'ER_LOAD_BULK_DATA_UNSORTED';
exports[4134] = 'ER_BULK_EXECUTOR_ERROR';
exports[4135] = 'ER_BULK_READER_LIBCURL_INIT_FAILED';
exports[4136] = 'ER_BULK_READER_LIBCURL_ERROR';
exports[4137] = 'ER_BULK_READER_SERVER_ERROR';
exports[4138] = 'ER_BULK_READER_COMMUNICATION_ERROR';
exports[4139] = 'ER_BULK_LOAD_DATA_FAILED';
exports[4140] = 'ER_BULK_LOADER_COLUMN_TOO_BIG_FOR_LEFTOVER_BUFFER';
exports[4141] = 'ER_BULK_LOADER_COMPONENT_ERROR';
exports[4142] = 'ER_BULK_LOADER_FILE_CONTAINS_LESS_LINES_THAN_IGNORE_CLAUSE';
exports[4143] = 'ER_BULK_PARSER_MISSING_ENCLOSED_BY';
exports[4144] = 'ER_BULK_PARSER_ROW_BUFFER_MAX_TOTAL_COLS_EXCEEDED';
exports[4145] = 'ER_BULK_PARSER_COPY_BUFFER_SIZE_EXCEEDED';
exports[4146] = 'ER_BULK_PARSER_UNEXPECTED_END_OF_INPUT';
exports[4147] = 'ER_BULK_PARSER_UNEXPECTED_ROW_TERMINATOR';
exports[4148] = 'ER_BULK_PARSER_UNEXPECTED_CHAR_AFTER_ENDING_ENCLOSED_BY';
exports[4149] = 'ER_BULK_PARSER_UNEXPECTED_CHAR_AFTER_NULL_ESCAPE';
exports[4150] = 'ER_BULK_PARSER_UNEXPECTED_CHAR_AFTER_COLUMN_TERMINATOR';
exports[4151] = 'ER_BULK_PARSER_INCOMPLETE_ESCAPE_SEQUENCE';
exports[4152] = 'ER_LOAD_BULK_DATA_FAILED';
exports[4153] = 'ER_LOAD_BULK_DATA_WRONG_VALUE_FOR_FIELD';
exports[4154] = 'ER_LOAD_BULK_DATA_WARN_NULL_TO_NOTNULL';
exports[4155] = 'ER_REQUIRE_TABLE_PRIMARY_KEY_CHECK_GENERATE_WITH_GR';
exports[4156] = 'ER_CANT_CHANGE_SYS_VAR_IN_READ_ONLY_MODE';
exports[4157] = 'ER_INNODB_INSTANT_ADD_DROP_NOT_SUPPORTED_MAX_SIZE';
exports[4158] = 'ER_INNODB_INSTANT_ADD_NOT_SUPPORTED_MAX_FIELDS';
exports[4159] = 'ER_CANT_SET_PERSISTED';
exports[4160] = 'ER_INSTALL_COMPONENT_SET_NULL_VALUE';
exports[4161] = 'ER_INSTALL_COMPONENT_SET_UNUSED_VALUE';
exports[4162] = 'ER_WARN_DEPRECATED_USER_DEFINED_COLLATIONS';


/***/ },

/***/ 4637
(__unused_webpack_module, exports) {



// Manually extracted from mysql-5.5.23/include/mysql_com.h
exports.NOT_NULL = 1; /* Field can't be NULL */
exports.PRI_KEY = 2; /* Field is part of a primary key */
exports.UNIQUE_KEY = 4; /* Field is part of a unique key */
exports.MULTIPLE_KEY = 8; /* Field is part of a key */
exports.BLOB = 16; /* Field is a blob */
exports.UNSIGNED = 32; /* Field is unsigned */
exports.ZEROFILL = 64; /* Field is zerofill */
exports.BINARY = 128; /* Field is binary   */

/* The following are only sent to new clients */
exports.ENUM = 256; /* field is an enum */
exports.AUTO_INCREMENT = 512; /* field is a autoincrement field */
exports.TIMESTAMP = 1024; /* Field is a timestamp */
exports.SET = 2048; /* field is a set */
exports.NO_DEFAULT_VALUE = 4096; /* Field doesn't have default value */
exports.ON_UPDATE_NOW = 8192; /* Field is set to NOW on UPDATE */
exports.NUM = 32768; /* Field is num (for clients) */


/***/ },

/***/ 7703
(__unused_webpack_module, exports) {

var __webpack_unused_export__;


// MariaDB-specific extended capability flags.
//
// MariaDB servers (10.2+) do not set the CLIENT_MYSQL (LONG_PASSWORD)
// capability and instead use 4 reserved bytes of the initial handshake packet
// to advertise these flags. Clients answer with their own extended
// capabilities in the last 4 reserved bytes of the handshake response
// (the server only reads them when the client leaves CLIENT_MYSQL unset).
//
// The flags below are the lower 32 bits shifted down, i.e.
// MARIADB_CLIENT_PROGRESS is documented as 1 << 32.
// https://mariadb.com/docs/server/reference/clientserver-protocol/1-connecting/connection
__webpack_unused_export__ = 0x00000001;
__webpack_unused_export__ = 0x00000002; /* deprecated */
__webpack_unused_export__ = 0x00000004;
exports.MARIADB_CLIENT_EXTENDED_METADATA = 0x00000008;
__webpack_unused_export__ = 0x00000010;
__webpack_unused_export__ = 0x00000020;


/***/ },

/***/ 2127
(__unused_webpack_module, exports) {

var __webpack_unused_export__;


// Manually extracted from mysql-5.5.23/include/mysql_com.h

/**
  Is raised when a multi-statement transaction
  has been started, either explicitly, by means
  of BEGIN or COMMIT AND CHAIN, or
  implicitly, by the first transactional
  statement, when autocommit=off.
*/
__webpack_unused_export__ = 1;
__webpack_unused_export__ = 2; /* Server in auto_commit mode */
exports.SERVER_MORE_RESULTS_EXISTS = 8; /* Multi query - next query exists */
__webpack_unused_export__ = 16;
__webpack_unused_export__ = 32;
/**
  The server was able to fulfill the clients request and opened a
  read-only non-scrollable cursor for a query. This flag comes
  in reply to COM_STMT_EXECUTE and COM_STMT_FETCH commands.
*/
__webpack_unused_export__ = 64;
/**
  This flag is sent when a read-only cursor is exhausted, in reply to
  COM_STMT_FETCH command.
*/
__webpack_unused_export__ = 128;
__webpack_unused_export__ = 256; /* A database was dropped */
__webpack_unused_export__ = 512;
/**
  Sent to the client if after a prepared statement reprepare
  we discovered that the new statement returns a different
  number of result set columns.
*/
__webpack_unused_export__ = 1024;
__webpack_unused_export__ = 2048;

/**
  To mark ResultSet containing output parameter values.
*/
__webpack_unused_export__ = 4096;

__webpack_unused_export__ = 0x2000; // in a read-only transaction
exports.SERVER_SESSION_STATE_CHANGED = 0x4000;


/***/ },

/***/ 3485
(__unused_webpack_module, exports) {

var __webpack_unused_export__;


exports.SYSTEM_VARIABLES = 0;
exports.SCHEMA = 1;
exports.STATE_CHANGE = 2;
exports.STATE_GTIDS = 3;
__webpack_unused_export__ = 4;
exports.Ry = 5;

__webpack_unused_export__ = exports.SYSTEM_VARIABLES;
__webpack_unused_export__ = exports.Ry;


/***/ },

/***/ 4632
(__unused_webpack_module, exports, __webpack_require__) {



const awsCaBundle = __webpack_require__(1304);

/**
 * @deprecated
 * Please, use [**aws-ssl-profiles**](https://github.com/mysqljs/aws-ssl-profiles).
 */
exports["Amazon RDS"] = {
  ca: awsCaBundle.ca,
};


/***/ },

/***/ 80
(module) {



module.exports = {
  0x00: 'DECIMAL', // aka DECIMAL
  0x01: 'TINY', // aka TINYINT, 1 byte
  0x02: 'SHORT', // aka SMALLINT, 2 bytes
  0x03: 'LONG', // aka INT, 4 bytes
  0x04: 'FLOAT', // aka FLOAT, 4-8 bytes
  0x05: 'DOUBLE', // aka DOUBLE, 8 bytes
  0x06: 'NULL', // NULL (used for prepared statements, I think)
  0x07: 'TIMESTAMP', // aka TIMESTAMP
  0x08: 'LONGLONG', // aka BIGINT, 8 bytes
  0x09: 'INT24', // aka MEDIUMINT, 3 bytes
  0x0a: 'DATE', // aka DATE
  0x0b: 'TIME', // aka TIME
  0x0c: 'DATETIME', // aka DATETIME
  0x0d: 'YEAR', // aka YEAR, 1 byte (don't ask)
  0x0e: 'NEWDATE', // aka ?
  0x0f: 'VARCHAR', // aka VARCHAR (?)
  0x10: 'BIT', // aka BIT, 1-8 byte
  0xf2: 'VECTOR',
  0xf5: 'JSON',
  0xf6: 'NEWDECIMAL', // aka DECIMAL
  0xf7: 'ENUM', // aka ENUM
  0xf8: 'SET', // aka SET
  0xf9: 'TINY_BLOB', // aka TINYBLOB, TINYTEXT
  0xfa: 'MEDIUM_BLOB', // aka MEDIUMBLOB, MEDIUMTEXT
  0xfb: 'LONG_BLOB', // aka LONGBLOG, LONGTEXT
  0xfc: 'BLOB', // aka BLOB, TEXT
  0xfd: 'VAR_STRING', // aka VARCHAR, VARBINARY
  0xfe: 'STRING', // aka CHAR, BINARY
  0xff: 'GEOMETRY', // aka GEOMETRY
};

// Manually extracted from mysql-5.5.23/include/mysql_com.h
// some more info here: http://dev.mysql.com/doc/refman/5.5/en/c-api-prepared-statement-type-codes.html
module.exports.DECIMAL = 0x00; // aka DECIMAL (http://dev.mysql.com/doc/refman/5.0/en/precision-math-decimal-changes.html)
module.exports.TINY = 0x01; // aka TINYINT, 1 byte
module.exports.SHORT = 0x02; // aka SMALLINT, 2 bytes
module.exports.LONG = 0x03; // aka INT, 4 bytes
module.exports.FLOAT = 0x04; // aka FLOAT, 4-8 bytes
module.exports.DOUBLE = 0x05; // aka DOUBLE, 8 bytes
module.exports.NULL = 0x06; // NULL (used for prepared statements, I think)
module.exports.TIMESTAMP = 0x07; // aka TIMESTAMP
module.exports.LONGLONG = 0x08; // aka BIGINT, 8 bytes
module.exports.INT24 = 0x09; // aka MEDIUMINT, 3 bytes
module.exports.DATE = 0x0a; // aka DATE
module.exports.TIME = 0x0b; // aka TIME
module.exports.DATETIME = 0x0c; // aka DATETIME
module.exports.YEAR = 0x0d; // aka YEAR, 1 byte (don't ask)
module.exports.NEWDATE = 0x0e; // aka ?
module.exports.VARCHAR = 0x0f; // aka VARCHAR (?)
module.exports.BIT = 0x10; // aka BIT, 1-8 byte
module.exports.VECTOR = 0xf2;
module.exports.JSON = 0xf5;
module.exports.NEWDECIMAL = 0xf6; // aka DECIMAL
module.exports.ENUM = 0xf7; // aka ENUM
module.exports.SET = 0xf8; // aka SET
module.exports.TINY_BLOB = 0xf9; // aka TINYBLOB, TINYTEXT
module.exports.MEDIUM_BLOB = 0xfa; // aka MEDIUMBLOB, MEDIUMTEXT
module.exports.LONG_BLOB = 0xfb; // aka LONGBLOG, LONGTEXT
module.exports.BLOB = 0xfc; // aka BLOB, TEXT
module.exports.VAR_STRING = 0xfd; // aka VARCHAR, VARBINARY
module.exports.STRING = 0xfe; // aka CHAR, BINARY
module.exports.GEOMETRY = 0xff; // aka GEOMETRY


/***/ },

/***/ 5850
(module, __unused_webpack_exports, __webpack_require__) {



const Connection = __webpack_require__(3875);
const ConnectionConfig = __webpack_require__(2928);

function createConnection(opts) {
  return new Connection({ config: new ConnectionConfig(opts) });
}

module.exports = createConnection;


/***/ },

/***/ 8640
(module, __unused_webpack_exports, __webpack_require__) {



const Pool = __webpack_require__(917);
const PoolConfig = __webpack_require__(9798);

function createPool(config) {
  return new Pool({ config: new PoolConfig(config) });
}

module.exports = createPool;


/***/ },

/***/ 5849
(module, __unused_webpack_exports, __webpack_require__) {



const PoolCluster = __webpack_require__(2876);

function createPoolCluster(config) {
  return new PoolCluster(config);
}

module.exports = createPoolCluster;


/***/ },

/***/ 2030
(__unused_webpack_module, exports) {

var __webpack_unused_export__;


/*

  this seems to be not only shorter, but faster than
  string.replace(/\\\\/g, '\\\\\\\\').
            replace(/\\u0008/g, '\\\\b').
            replace(/\\t/g, '\\\\t').
            replace(/\\n/g, '\\\\n').
            replace(/\\f/g, '\\\\f').
            replace(/\\r/g, '\\\\r').
            replace(/'/g, '\\\\\\'').
            replace(/"/g, '\\\\"');
  or string.replace(/[\\-\\[\\]\\/\\{\\}\\(\\)\\*\\+\\?\\.\\\\\\^\\$\\|]/g, "\\\\$&")
  see http://jsperf.com/string-escape-regexp-vs-json-stringify
  */
function srcEscape(str) {
  return JSON.stringify({
    [str]: 1,
  }).slice(1, -3);
}

exports.srcEscape = srcEscape;

let highlightFn;
let cardinalRecommended = false;
try {
  // the purpose of this is to prevent projects using Webpack from displaying a warning during runtime if cardinal is not a dependency
  const REQUIRE_TERMINATOR = '';
  highlightFn = Object(function webpackMissingModule() { const e = new Error("Cannot find module 'cardinal'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
} catch {
  highlightFn = (text) => {
    if (!cardinalRecommended) {
      console.log('For nicer debug output consider install cardinal@^2.0.0');
      cardinalRecommended = true;
    }
    return text;
  };
}

/**
 * Prints debug message with code frame, will try to use \`cardinal\` if available.
 */
function printDebugWithCode(msg, code) {
  console.log(\`\\n\\n\${msg}:\\n\`);
  console.log(\`\${highlightFn(code)}\\n\`);
}

exports.printDebugWithCode = printDebugWithCode;

/**
 * checks whether the \`type\` is in the \`list\`
 */
function typeMatch(type, list, Types) {
  if (Array.isArray(list)) {
    return list.some((t) => type === Types[t]);
  }

  return !!list;
}

exports.typeMatch = typeMatch;

const privateObjectProps = new Set([
  '__defineGetter__',
  '__defineSetter__',
  '__lookupGetter__',
  '__lookupSetter__',
  '__proto__',
]);

__webpack_unused_export__ = privateObjectProps;

const fieldEscape = (field, isEval = true) => {
  if (privateObjectProps.has(field)) {
    throw new Error(
      \`The field name (\${field}) can't be the same as an object's private property.\`
    );
  }

  return isEval ? srcEscape(field) : field;
};
exports.fieldEscape = fieldEscape;


/***/ },

/***/ 7593
(module, __unused_webpack_exports, __webpack_require__) {



const Packet = __webpack_require__(5777);

const MAX_PACKET_LENGTH = 16777215;

function readPacketLength(b, off) {
  const b0 = b[off];
  const b1 = b[off + 1];
  const b2 = b[off + 2];
  if (b1 + b2 === 0) {
    return b0;
  }
  return b0 + (b1 << 8) + (b2 << 16);
}

class PacketParser {
  constructor(onPacket, packetHeaderLength) {
    // 4 for normal packets, 7 for comprssed protocol packets
    if (typeof packetHeaderLength === 'undefined') {
      packetHeaderLength = 4;
    }
    // array of last payload chunks
    // only used when current payload is not complete
    this.buffer = [];
    // total length of chunks on buffer
    this.bufferLength = 0;
    this.packetHeaderLength = packetHeaderLength;
    // incomplete header state: number of header bytes received
    this.headerLen = 0;
    // expected payload length
    this.length = 0;
    this.largePacketParts = [];
    this.firstPacketSequenceId = 0;
    this.onPacket = onPacket;
    // complete packets are handed to onPacket through this single mutable
    // instance; consumers that keep a packet past the synchronous callback
    // (e.g. a paused connection) must clone() it
    this._reusablePacket = new Packet(0, Buffer.allocUnsafe(4), 0, 4);
    this.execute = PacketParser.prototype.executeStart;
    this._flushLargePacket =
      packetHeaderLength === 7
        ? this._flushLargePacket7
        : this._flushLargePacket4;
  }

  _flushLargePacket4() {
    const numPackets = this.largePacketParts.length;
    this.largePacketParts.unshift(Buffer.from([0, 0, 0, 0])); // insert header
    const body = Buffer.concat(this.largePacketParts);
    const packet = new Packet(this.firstPacketSequenceId, body, 0, body.length);
    this.largePacketParts.length = 0;
    packet.numPackets = numPackets;
    this.onPacket(packet);
  }

  _flushLargePacket7() {
    const numPackets = this.largePacketParts.length;
    this.largePacketParts.unshift(Buffer.from([0, 0, 0, 0, 0, 0, 0])); // insert header
    const body = Buffer.concat(this.largePacketParts);
    this.largePacketParts.length = 0;
    const packet = new Packet(this.firstPacketSequenceId, body, 0, body.length);
    packet.numPackets = numPackets;
    this.onPacket(packet);
  }

  executeStart(chunk) {
    let start = 0;
    const end = chunk.length;
    while (end - start >= 3) {
      this.length = readPacketLength(chunk, start);
      if (end - start >= this.length + this.packetHeaderLength) {
        // at least one full packet
        const sequenceId = chunk[start + 3];
        if (
          this.length < MAX_PACKET_LENGTH &&
          this.largePacketParts.length === 0
        ) {
          const packet = this._reusablePacket;
          packet.sequenceId = sequenceId;
          packet.numPackets = 1;
          packet.buffer = chunk;
          packet.start = start;
          packet.offset = start + 4;
          packet.end = start + this.packetHeaderLength + this.length;
          this.onPacket(packet);
        } else {
          // first large packet - remember it's id
          if (this.largePacketParts.length === 0) {
            this.firstPacketSequenceId = sequenceId;
          }
          this.largePacketParts.push(
            chunk.slice(
              start + this.packetHeaderLength,
              start + this.packetHeaderLength + this.length
            )
          );
          if (this.length < MAX_PACKET_LENGTH) {
            this._flushLargePacket();
          }
        }
        start += this.packetHeaderLength + this.length;
      } else {
        // payload is incomplete
        this.buffer = [chunk.slice(start + 3, end)];
        this.bufferLength = end - start - 3;
        this.execute = PacketParser.prototype.executePayload;
        return;
      }
    }
    if (end - start > 0) {
      // there is start of length header, but it's not full 3 bytes
      this.headerLen = end - start; // 1 or 2 bytes
      this.length = chunk[start];
      if (this.headerLen === 2) {
        this.length = chunk[start] + (chunk[start + 1] << 8);
        this.execute = PacketParser.prototype.executeHeader3;
      } else {
        this.execute = PacketParser.prototype.executeHeader2;
      }
    }
  }

  executePayload(chunk) {
    let start = 0;
    const end = chunk.length;
    const remainingPayload =
      this.length - this.bufferLength + this.packetHeaderLength - 3;
    if (end - start >= remainingPayload) {
      // last chunk for payload
      const payload = Buffer.allocUnsafe(this.length + this.packetHeaderLength);
      let offset = 3;
      for (let i = 0; i < this.buffer.length; ++i) {
        this.buffer[i].copy(payload, offset);
        offset += this.buffer[i].length;
      }
      chunk.copy(payload, offset, start, start + remainingPayload);
      const sequenceId = payload[3];
      if (
        this.length < MAX_PACKET_LENGTH &&
        this.largePacketParts.length === 0
      ) {
        const packet = this._reusablePacket;
        packet.sequenceId = sequenceId;
        packet.numPackets = 1;
        packet.buffer = payload;
        packet.start = 0;
        packet.offset = 4;
        packet.end = this.length + this.packetHeaderLength;
        this.onPacket(packet);
      } else {
        // first large packet - remember it's id
        if (this.largePacketParts.length === 0) {
          this.firstPacketSequenceId = sequenceId;
        }
        this.largePacketParts.push(
          payload.slice(
            this.packetHeaderLength,
            this.packetHeaderLength + this.length
          )
        );
        if (this.length < MAX_PACKET_LENGTH) {
          this._flushLargePacket();
        }
      }
      this.buffer = [];
      this.bufferLength = 0;
      this.execute = PacketParser.prototype.executeStart;
      start += remainingPayload;
      if (end - start > 0) {
        return this.execute(chunk.slice(start, end));
      }
    } else {
      this.buffer.push(chunk);
      this.bufferLength += chunk.length;
    }
    return null;
  }

  executeHeader2(chunk) {
    this.length += chunk[0] << 8;
    if (chunk.length > 1) {
      this.length += chunk[1] << 16;
      this.execute = PacketParser.prototype.executePayload;
      return this.executePayload(chunk.slice(2));
    }
    this.execute = PacketParser.prototype.executeHeader3;

    return null;
  }

  executeHeader3(chunk) {
    this.length += chunk[0] << 16;
    this.execute = PacketParser.prototype.executePayload;
    return this.executePayload(chunk.slice(1));
  }
}

module.exports = PacketParser;


/***/ },

/***/ 7045
(module, __unused_webpack_exports, __webpack_require__) {

// Copyright (c) 2021, Oracle and/or its affiliates.



const Packet = __webpack_require__(5777);

class AuthNextFactor {
  constructor(opts) {
    this.pluginName = opts.pluginName;
    this.pluginData = opts.pluginData;
  }

  toPacket(encoding) {
    const length = 6 + this.pluginName.length + this.pluginData.length;
    const buffer = Buffer.allocUnsafe(length);
    const packet = new Packet(0, buffer, 0, length);
    packet.offset = 4;
    packet.writeInt8(0x02);
    packet.writeNullTerminatedString(this.pluginName, encoding);
    packet.writeBuffer(this.pluginData);
    return packet;
  }

  static fromPacket(packet, encoding) {
    packet.readInt8(); // marker
    const name = packet.readNullTerminatedString(encoding);
    const data = packet.readBuffer();
    return new AuthNextFactor({
      pluginName: name,
      pluginData: data,
    });
  }
}

module.exports = AuthNextFactor;


/***/ },

/***/ 9944
(module, __unused_webpack_exports, __webpack_require__) {



// http://dev.mysql.com/doc/internals/en/connection-phase-packets.html#packet-Protocol::AuthSwitchRequest

const Packet = __webpack_require__(5777);

class AuthSwitchRequest {
  constructor(opts) {
    this.pluginName = opts.pluginName;
    this.pluginData = opts.pluginData;
  }

  toPacket() {
    const length = 6 + this.pluginName.length + this.pluginData.length;
    const buffer = Buffer.allocUnsafe(length);
    const packet = new Packet(0, buffer, 0, length);
    packet.offset = 4;
    packet.writeInt8(0xfe);
    // TODO: use server encoding
    packet.writeNullTerminatedString(this.pluginName, 'cesu8');
    packet.writeBuffer(this.pluginData);
    return packet;
  }

  static fromPacket(packet) {
    packet.readInt8(); // marker
    // assert marker == 0xfe?
    // TODO: use server encoding
    const name = packet.readNullTerminatedString('cesu8');
    const data = packet.readBuffer();
    return new AuthSwitchRequest({
      pluginName: name,
      pluginData: data,
    });
  }
}

module.exports = AuthSwitchRequest;


/***/ },

/***/ 7705
(module, __unused_webpack_exports, __webpack_require__) {



// http://dev.mysql.com/doc/internals/en/connection-phase-packets.html#packet-Protocol::AuthSwitchRequest

const Packet = __webpack_require__(5777);

class AuthSwitchRequestMoreData {
  constructor(data) {
    this.data = data;
  }

  toPacket() {
    const length = 5 + this.data.length;
    const buffer = Buffer.allocUnsafe(length);
    const packet = new Packet(0, buffer, 0, length);
    packet.offset = 4;
    packet.writeInt8(0x01);
    packet.writeBuffer(this.data);
    return packet;
  }

  static fromPacket(packet) {
    packet.readInt8(); // marker
    const data = packet.readBuffer();
    return new AuthSwitchRequestMoreData(data);
  }

  static verifyMarker(packet) {
    return packet.peekByte() === 0x01;
  }
}

module.exports = AuthSwitchRequestMoreData;


/***/ },

/***/ 3778
(module, __unused_webpack_exports, __webpack_require__) {



// http://dev.mysql.com/doc/internals/en/connection-phase-packets.html#packet-Protocol::AuthSwitchRequest

const Packet = __webpack_require__(5777);

class AuthSwitchResponse {
  constructor(data) {
    if (!Buffer.isBuffer(data)) {
      data = Buffer.from(data);
    }
    this.data = data;
  }

  toPacket() {
    const length = 4 + this.data.length;
    const buffer = Buffer.allocUnsafe(length);
    const packet = new Packet(0, buffer, 0, length);
    packet.offset = 4;
    packet.writeBuffer(this.data);
    return packet;
  }

  static fromPacket(packet) {
    const data = packet.readBuffer();
    return new AuthSwitchResponse(data);
  }
}

module.exports = AuthSwitchResponse;


/***/ },

/***/ 7619
(module, __unused_webpack_exports, __webpack_require__) {



const Types = __webpack_require__(80);
const Packet = __webpack_require__(5777);

const binaryReader = new Array(256);

class BinaryRow {
  constructor(columns) {
    this.columns = columns || [];
  }

  static toPacket(columns, encoding) {
    // throw new Error('Not implemented');
    const sequenceId = 0; // TODO remove, this is calculated now in connection
    let length = 0;
    columns.forEach((val) => {
      if (val === null || typeof val === 'undefined') {
        ++length;
        return;
      }
      length += Packet.lengthCodedStringLength(val.toString(10), encoding);
    });

    length = length + 2;

    const buffer = Buffer.allocUnsafe(length + 4);
    const packet = new Packet(sequenceId, buffer, 0, length + 4);
    packet.offset = 4;

    packet.writeInt8(0);

    let bitmap = 0;
    let bitValue = 1;
    columns.forEach((parameter) => {
      if (parameter.type === Types.NULL) {
        bitmap += bitValue;
      }
      bitValue *= 2;
      if (bitValue === 256) {
        packet.writeInt8(bitmap);
        bitmap = 0;
        bitValue = 1;
      }
    });
    if (bitValue !== 1) {
      packet.writeInt8(bitmap);
    }

    columns.forEach((val) => {
      if (val === null) {
        packet.writeNull();
        return;
      }
      if (typeof val === 'undefined') {
        packet.writeInt8(0);
        return;
      }
      packet.writeLengthCodedString(val.toString(10), encoding);
    });
    return packet;
  }

  // TODO: complete list of types...
  static fromPacket(fields, packet) {
    const columns = new Array(fields.length);
    packet.readInt8(); // TODO check it's 0
    const nullBitmapLength = Math.floor((fields.length + 7 + 2) / 8);
    // TODO: read and interpret null bitmap
    packet.skip(nullBitmapLength);
    for (let i = 0; i < columns.length; ++i) {
      columns[i] = binaryReader[fields[i].columnType].apply(packet);
    }
    return new BinaryRow(columns);
  }
}

// TODO: replace with constants.MYSQL_TYPE_*
binaryReader[Types.DECIMAL] = Packet.prototype.readLengthCodedString;
binaryReader[1] = Packet.prototype.readInt8; // tiny
binaryReader[2] = Packet.prototype.readInt16; // short
binaryReader[3] = Packet.prototype.readInt32; // long
binaryReader[4] = Packet.prototype.readFloat; // float
binaryReader[5] = Packet.prototype.readDouble; // double
binaryReader[6] = Packet.prototype.assertInvalid; // null, should be skipped via null bitmap
binaryReader[7] = Packet.prototype.readTimestamp; // timestamp, http://dev.mysql.com/doc/internals/en/prepared-statements.html#packet-ProtocolBinary::MYSQL_TYPE_TIMESTAMP
binaryReader[8] = Packet.prototype.readInt64; // long long
binaryReader[9] = Packet.prototype.readInt32; // int24
binaryReader[10] = Packet.prototype.readTimestamp; // date
binaryReader[11] = Packet.prototype.readTime; // time, http://dev.mysql.com/doc/internals/en/prepared-statements.html#packet-ProtocolBinary::MYSQL_TYPE_TIME
binaryReader[12] = Packet.prototype.readDateTime; // datetime, http://dev.mysql.com/doc/internals/en/prepared-statements.html#packet-ProtocolBinary::MYSQL_TYPE_DATETIME
binaryReader[13] = Packet.prototype.readInt16; // year
binaryReader[Types.VAR_STRING] = Packet.prototype.readLengthCodedString; // var string

module.exports = BinaryRow;


/***/ },

/***/ 8309
(module, __unused_webpack_exports, __webpack_require__) {



// http://dev.mysql.com/doc/internals/en/com-binlog-dump.html#packet-COM_BINLOG_DUMP

const Packet = __webpack_require__(5777);
const CommandCodes = __webpack_require__(7015);

// TODO: add flag to constants
// 0x01 - BINLOG_DUMP_NON_BLOCK
// send EOF instead of blocking
class BinlogDump {
  constructor(opts) {
    this.binlogPos = opts.binlogPos || 0;
    this.serverId = opts.serverId || 0;
    this.flags = opts.flags || 0;
    this.filename = opts.filename || '';
  }

  toPacket() {
    const length = 15 + Buffer.byteLength(this.filename, 'utf8'); // TODO: should be ascii?
    const buffer = Buffer.allocUnsafe(length);
    const packet = new Packet(0, buffer, 0, length);
    packet.offset = 4;
    packet.writeInt8(CommandCodes.BINLOG_DUMP);
    packet.writeInt32(this.binlogPos);
    packet.writeInt16(this.flags);
    packet.writeInt32(this.serverId);
    packet.writeString(this.filename);
    return packet;
  }
}

module.exports = BinlogDump;


/***/ },

/***/ 894
(module) {



// http://dev.mysql.com/doc/internals/en/query-event.html

const keys = {
  FLAGS2: 0,
  SQL_MODE: 1,
  CATALOG: 2,
  AUTO_INCREMENT: 3,
  CHARSET: 4,
  TIME_ZONE: 5,
  CATALOG_NZ: 6,
  LC_TIME_NAMES: 7,
  CHARSET_DATABASE: 8,
  TABLE_MAP_FOR_UPDATE: 9,
  MASTER_DATA_WRITTEN: 10,
  INVOKERS: 11,
  UPDATED_DB_NAMES: 12,
  MICROSECONDS: 3,
};

module.exports = function parseStatusVars(buffer) {
  const result = {};
  let offset = 0;
  let key, length, prevOffset;
  while (offset < buffer.length) {
    key = buffer[offset++];
    switch (key) {
      case keys.FLAGS2:
        result.flags = buffer.readUInt32LE(offset);
        offset += 4;
        break;
      case keys.SQL_MODE:
        // value is 8 bytes, but all documented flags are in first 4 bytes
        result.sqlMode = buffer.readUInt32LE(offset);
        offset += 8;
        break;
      case keys.CATALOG:
        length = buffer[offset++];
        result.catalog = buffer.toString('utf8', offset, offset + length);
        offset += length + 1; // null byte after string
        break;
      case keys.CHARSET:
        result.clientCharset = buffer.readUInt16LE(offset);
        result.connectionCollation = buffer.readUInt16LE(offset + 2);
        result.serverCharset = buffer.readUInt16LE(offset + 4);
        offset += 6;
        break;
      case keys.TIME_ZONE:
        length = buffer[offset++];
        result.timeZone = buffer.toString('utf8', offset, offset + length);
        offset += length; // no null byte
        break;
      case keys.CATALOG_NZ:
        length = buffer[offset++];
        result.catalogNz = buffer.toString('utf8', offset, offset + length);
        offset += length; // no null byte
        break;
      case keys.LC_TIME_NAMES:
        result.lcTimeNames = buffer.readUInt16LE(offset);
        offset += 2;
        break;
      case keys.CHARSET_DATABASE:
        result.schemaCharset = buffer.readUInt16LE(offset);
        offset += 2;
        break;
      case keys.TABLE_MAP_FOR_UPDATE:
        result.mapForUpdate1 = buffer.readUInt32LE(offset);
        result.mapForUpdate2 = buffer.readUInt32LE(offset + 4);
        offset += 8;
        break;
      case keys.MASTER_DATA_WRITTEN:
        result.masterDataWritten = buffer.readUInt32LE(offset);
        offset += 4;
        break;
      case keys.INVOKERS:
        length = buffer[offset++];
        result.invokerUsername = buffer.toString(
          'utf8',
          offset,
          offset + length
        );
        offset += length;
        length = buffer[offset++];
        result.invokerHostname = buffer.toString(
          'utf8',
          offset,
          offset + length
        );
        offset += length;
        break;
      case keys.UPDATED_DB_NAMES:
        length = buffer[offset++];
        // length - number of null-terminated strings
        result.updatedDBs = []; // we'll store them as array here
        for (; length; --length) {
          prevOffset = offset;
          // fast forward to null terminating byte
          while (buffer[offset++] && offset < buffer.length) {
            // empty body, everything inside while condition
          }
          result.updatedDBs.push(
            buffer.toString('utf8', prevOffset, offset - 1)
          );
        }
        break;
      case keys.MICROSECONDS:
        result.microseconds =
          // REVIEW: INVALID UNKNOWN VARIABLE!
          buffer.readInt16LE(offset) + (buffer[offset + 2] << 16);
        offset += 3;
    }
  }
  return result;
};


/***/ },

/***/ 2955
(module, __unused_webpack_exports, __webpack_require__) {



const CommandCode = __webpack_require__(7015);
const ClientConstants = __webpack_require__(3930);
const Packet = __webpack_require__(5777);
const auth41 = __webpack_require__(3247);
const CharsetToEncoding = __webpack_require__(3160);

// https://dev.mysql.com/doc/internals/en/com-change-user.html#packet-COM_CHANGE_USER
class ChangeUser {
  constructor(opts) {
    this.flags = opts.flags;
    this.user = opts.user || '';
    this.database = opts.database || '';
    this.password = opts.password || '';
    this.passwordSha1 = opts.passwordSha1;
    this.authPluginData1 = opts.authPluginData1;
    this.authPluginData2 = opts.authPluginData2;
    this.connectAttributes = opts.connectAttributes || {};
    let authToken;
    if (this.passwordSha1) {
      authToken = auth41.calculateTokenFromPasswordSha(
        this.passwordSha1,
        this.authPluginData1,
        this.authPluginData2
      );
    } else {
      authToken = auth41.calculateToken(
        this.password,
        this.authPluginData1,
        this.authPluginData2
      );
    }
    this.authToken = authToken;
    this.charsetNumber = opts.charsetNumber;
  }

  // TODO
  // ChangeUser.fromPacket = function(packet)
  // };
  serializeToBuffer(buffer) {
    const isSet = (flag) => this.flags & ClientConstants[flag];
    const packet = new Packet(0, buffer, 0, buffer.length);
    packet.offset = 4;
    const encoding = CharsetToEncoding[this.charsetNumber];
    packet.writeInt8(CommandCode.CHANGE_USER);
    packet.writeNullTerminatedString(this.user, encoding);
    if (isSet('SECURE_CONNECTION')) {
      packet.writeInt8(this.authToken.length);
      packet.writeBuffer(this.authToken);
    } else {
      packet.writeBuffer(this.authToken);
      packet.writeInt8(0);
    }
    packet.writeNullTerminatedString(this.database, encoding);
    packet.writeInt16(this.charsetNumber);
    if (isSet('PLUGIN_AUTH')) {
      // TODO: read this from parameters
      packet.writeNullTerminatedString('mysql_native_password', 'latin1');
    }
    if (isSet('CONNECT_ATTRS')) {
      const connectAttributes = this.connectAttributes;
      const attrNames = Object.keys(connectAttributes);
      let keysLength = 0;
      for (let k = 0; k < attrNames.length; ++k) {
        keysLength += Packet.lengthCodedStringLength(attrNames[k], encoding);
        keysLength += Packet.lengthCodedStringLength(
          connectAttributes[attrNames[k]],
          encoding
        );
      }
      packet.writeLengthCodedNumber(keysLength);
      for (let k = 0; k < attrNames.length; ++k) {
        packet.writeLengthCodedString(attrNames[k], encoding);
        packet.writeLengthCodedString(
          connectAttributes[attrNames[k]],
          encoding
        );
      }
    }
    return packet;
  }

  toPacket() {
    if (typeof this.user !== 'string') {
      throw new Error('"user" connection config property must be a string');
    }
    if (typeof this.database !== 'string') {
      throw new Error('"database" connection config property must be a string');
    }
    // dry run: calculate resulting packet length
    const p = this.serializeToBuffer(Packet.MockBuffer());
    return this.serializeToBuffer(Buffer.allocUnsafe(p.offset));
  }
}

module.exports = ChangeUser;


/***/ },

/***/ 7371
(module, __unused_webpack_exports, __webpack_require__) {



const Packet = __webpack_require__(5777);
const CommandCodes = __webpack_require__(7015);

class CloseStatement {
  constructor(id) {
    this.id = id;
  }

  // note: no response sent back
  toPacket() {
    const packet = new Packet(0, Buffer.allocUnsafe(9), 0, 9);
    packet.offset = 4;
    packet.writeInt8(CommandCodes.STMT_CLOSE);
    packet.writeInt32(this.id);
    return packet;
  }
}

module.exports = CloseStatement;


/***/ },

/***/ 5019
(module, __unused_webpack_exports, __webpack_require__) {



const Packet = __webpack_require__(5777);
const StringParser = __webpack_require__(5623);
const CharsetToEncoding = __webpack_require__(3160);

const fields = ['catalog', 'schema', 'table', 'orgTable', 'name', 'orgName'];

// creating JS string is relatively expensive (compared to
// reading few bytes from buffer) because all string properties
// except for name are unlikely to be used we postpone
// string conversion until property access
//
// TODO: watch for integration benchmarks (one with real network buffer)
// there could be bad side effect as keeping reference to a buffer makes it
// sit in the memory longer (usually until final .query() callback)
// Latest v8 perform much better in regard to bufferer -> string conversion,
// at some point of time this optimisation might become unnecessary
// see https://github.com/sidorares/node-mysql2/pull/137
//
class ColumnDefinition {
  constructor(packet, clientEncoding, mariadbExtendedMetadata) {
    this._buf = packet.buffer;
    this._clientEncoding = clientEncoding;
    this._catalogLength = packet.readLengthCodedNumber();
    this._catalogStart = packet.offset;
    packet.offset += this._catalogLength;
    this._schemaLength = packet.readLengthCodedNumber();
    this._schemaStart = packet.offset;
    packet.offset += this._schemaLength;
    this._tableLength = packet.readLengthCodedNumber();
    this._tableStart = packet.offset;
    packet.offset += this._tableLength;
    this._orgTableLength = packet.readLengthCodedNumber();
    this._orgTableStart = packet.offset;
    packet.offset += this._orgTableLength;
    // name is always used, don't make it lazy
    const _nameLength = packet.readLengthCodedNumber();
    const _nameStart = packet.offset;
    packet.offset += _nameLength;
    this._orgNameLength = packet.readLengthCodedNumber();
    this._orgNameStart = packet.offset;
    packet.offset += this._orgNameLength;
    // MariaDB-specific column types (UUID, INET4, INET6, VECTOR and the JSON
    // alias) are sent as standard string/blob types on the wire; the real
    // type is only visible here, in the extended metadata block negotiated
    // via the MARIADB_CLIENT_EXTENDED_METADATA capability (parsed out of
    // line and with prototype defaults to keep this hot constructor small)
    if (mariadbExtendedMetadata) {
      this._parseMariadbExtendedMetadata(packet);
    }
    packet.skip(1); //  length of the following fields (always 0x0c)
    this.characterSet = packet.readInt16();
    this.encoding = CharsetToEncoding[this.characterSet];
    this.name = StringParser.decode(
      this._buf,
      this.encoding === 'binary' ? this._clientEncoding : this.encoding,
      _nameStart,
      _nameStart + _nameLength
    );
    this.columnLength = packet.readInt32();
    this.columnType = packet.readInt8();
    this.type = this.columnType;
    this.flags = packet.readInt16();
    this.decimals = packet.readInt8();
  }

  _parseMariadbExtendedMetadata(packet) {
    // length-encoded block of { int<1> id, string<lenenc> value } pairs
    const extendedMetadataLength = packet.readLengthCodedNumber() || 0;
    const extendedMetadataEnd = Math.min(
      packet.offset + extendedMetadataLength,
      packet.end
    );
    while (packet.offset < extendedMetadataEnd) {
      const id = packet.readInt8();
      const value = packet.readLengthCodedString('ascii');
      if (id === 0) {
        this.extendedTypeName = value; // e.g. 'uuid', 'inet4', 'inet6', 'point'
      } else if (id === 1) {
        this.extendedFormat = value; // e.g. 'json'
      }
    }
    // a malformed entry could read past the block; resynchronise so the
    // fixed column definition fields that follow parse from the right offset
    packet.offset = extendedMetadataEnd;
  }

  inspect() {
    return {
      catalog: this.catalog,
      schema: this.schema,
      name: this.name,
      orgName: this.orgName,
      table: this.table,
      orgTable: this.orgTable,
      characterSet: this.characterSet,
      encoding: this.encoding,
      columnLength: this.columnLength,
      type: this.columnType,
      flags: this.flags,
      decimals: this.decimals,
    };
  }

  [Symbol.for('nodejs.util.inspect.custom')](depth, inspectOptions, inspect) {
    const Types = __webpack_require__(80);
    const typeNames = [];
    for (const t in Types) {
      typeNames[Types[t]] = t;
    }
    const fiedFlags = __webpack_require__(4637);
    const flagNames = [];
    // TODO: respect inspectOptions.showHidden
    //const inspectFlags = inspectOptions.showHidden ? this.flags : this.flags & ~fiedFlags.PRI_KEY;
    const inspectFlags = this.flags;
    for (const f in fiedFlags) {
      if (inspectFlags & fiedFlags[f]) {
        if (f === 'PRI_KEY') {
          flagNames.push('PRIMARY KEY');
        } else if (f === 'NOT_NULL') {
          flagNames.push('NOT NULL');
        } else if (f === 'BINARY') {
          // ignore flag for now
        } else if (f === 'MULTIPLE_KEY') {
          // not sure if that should be part of inspection.
          // in the schema usually this is part of index definition
          // example: UNIQUE KEY \`my_uniq_id\` (\`id_box_elements\`,\`id_router\`)
          // note that only first column has MULTIPLE_KEY flag set in this case
          // so there is no good way of knowing that this is part of index just
          // by looking at indifidual field flags
        } else if (f === 'NO_DEFAULT_VALUE') {
          // almost the same as NOT_NULL?
        } else if (f === 'BLOB') {
          // included in the type
        } else if (f === 'UNSIGNED') {
          // this should be first after type
        } else if (f === 'TIMESTAMP') {
          // timestamp flag is redundant for inspection - already included in type
        } else if (f === 'ON_UPDATE_NOW') {
          flagNames.push('ON UPDATE CURRENT_TIMESTAMP');
        } else {
          flagNames.push(f);
        }
      }
    }

    if (depth > 1) {
      return inspect({
        ...this.inspect(),
        typeName: typeNames[this.columnType],
        flags: flagNames,
      });
    }

    const isUnsigned = this.flags & fiedFlags.UNSIGNED;

    let typeName = typeNames[this.columnType];
    if (typeName === 'BLOB') {
      // TODO: check for non-utf8mb4 encoding
      if (this.columnLength === 4294967295) {
        typeName = 'LONGTEXT';
      } else if (this.columnLength === 67108860) {
        typeName = 'MEDIUMTEXT';
      } else if (this.columnLength === 262140) {
        typeName = 'TEXT';
      } else if (this.columnLength === 1020) {
        // 255*4
        typeName = 'TINYTEXT';
      } else {
        typeName = \`BLOB(\${this.columnLength})\`;
      }
    } else if (typeName === 'VAR_STRING') {
      // TODO: check for non-utf8mb4 encoding
      typeName = \`VARCHAR(\${Math.ceil(this.columnLength / 4)})\`;
    } else if (typeName === 'TINY') {
      if (
        (this.columnLength === 3 && isUnsigned) ||
        (this.columnLength === 4 && !isUnsigned)
      ) {
        typeName = 'TINYINT';
      } else {
        typeName = \`TINYINT(\${this.columnLength})\`;
      }
    } else if (typeName === 'LONGLONG') {
      if (this.columnLength === 20) {
        typeName = 'BIGINT';
      } else {
        typeName = \`BIGINT(\${this.columnLength})\`;
      }
    } else if (typeName === 'SHORT') {
      if (isUnsigned && this.columnLength === 5) {
        typeName = 'SMALLINT';
      } else if (!isUnsigned && this.columnLength === 6) {
        typeName = 'SMALLINT';
      } else {
        typeName = \`SMALLINT(\${this.columnLength})\`;
      }
    } else if (typeName === 'LONG') {
      if (isUnsigned && this.columnLength === 10) {
        typeName = 'INT';
      } else if (!isUnsigned && this.columnLength === 11) {
        typeName = 'INT';
      } else {
        typeName = \`INT(\${this.columnLength})\`;
      }
    } else if (typeName === 'INT24') {
      if (isUnsigned && this.columnLength === 8) {
        typeName = 'MEDIUMINT';
      } else if (!isUnsigned && this.columnLength === 9) {
        typeName = 'MEDIUMINT';
      } else {
        typeName = \`MEDIUMINT(\${this.columnLength})\`;
      }
    } else if (typeName === 'DOUBLE') {
      // DOUBLE without modifiers is reported as DOUBLE(22, 31)
      if (this.columnLength === 22 && this.decimals === 31) {
        typeName = 'DOUBLE';
      } else {
        typeName = \`DOUBLE(\${this.columnLength},\${this.decimals})\`;
      }
    } else if (typeName === 'FLOAT') {
      // FLOAT without modifiers is reported as FLOAT(12, 31)
      if (this.columnLength === 12 && this.decimals === 31) {
        typeName = 'FLOAT';
      } else {
        typeName = \`FLOAT(\${this.columnLength},\${this.decimals})\`;
      }
    } else if (typeName === 'NEWDECIMAL') {
      if (this.columnLength === 11 && this.decimals === 0) {
        typeName = 'DECIMAL';
      } else if (this.decimals === 0) {
        // not sure why, but DECIMAL(13) is reported as DECIMAL(14, 0)
        // and DECIMAL(13, 9) is reported as NEWDECIMAL(15, 9)
        if (isUnsigned) {
          typeName = \`DECIMAL(\${this.columnLength})\`;
        } else {
          typeName = \`DECIMAL(\${this.columnLength - 1})\`;
        }
      } else {
        typeName = \`DECIMAL(\${this.columnLength - 2},\${this.decimals})\`;
      }
    } else {
      typeName = \`\${typeNames[this.columnType]}(\${this.columnLength})\`;
    }

    if (isUnsigned) {
      typeName += ' UNSIGNED';
    }

    // TODO respect colors option
    return \`\\\`\${this.name}\\\` \${[typeName, ...flagNames].join(' ')}\`;
  }

  static toPacket(column, sequenceId) {
    let length = 17; // = 4 padding + 1 + 12 for the rest
    fields.forEach((field) => {
      length += Packet.lengthCodedStringLength(
        column[field],
        CharsetToEncoding[column.characterSet]
      );
    });
    const buffer = Buffer.allocUnsafe(length);

    const packet = new Packet(sequenceId, buffer, 0, length);
    function writeField(name) {
      packet.writeLengthCodedString(
        column[name],
        CharsetToEncoding[column.characterSet]
      );
    }
    packet.offset = 4;
    fields.forEach(writeField);
    packet.writeInt8(0x0c);
    packet.writeInt16(column.characterSet);
    packet.writeInt32(column.columnLength);
    packet.writeInt8(column.columnType);
    packet.writeInt16(column.flags);
    packet.writeInt8(column.decimals);
    packet.writeInt16(0); // filler
    return packet;
  }

  // node-mysql compatibility: alias "db" to "schema"
  get db() {
    return this.schema;
  }
}

const addString = function (name) {
  const cacheKey = \`_\${name}Value\`;
  const startKey = \`_\${name}Start\`;
  const lengthKey = \`_\${name}Length\`;
  ColumnDefinition.prototype[cacheKey] = undefined;
  Object.defineProperty(ColumnDefinition.prototype, name, {
    get: function () {
      const cached = this[cacheKey];
      if (cached !== undefined) {
        return cached;
      }
      const start = this[startKey];
      const end = start + this[lengthKey];
      const val = StringParser.decode(
        this._buf,
        this.encoding === 'binary' ? this._clientEncoding : this.encoding,
        start,
        end
      );
      this[cacheKey] = val;
      return val;
    },
  });
};

addString('catalog');
addString('schema');
addString('table');
addString('orgTable');
addString('orgName');

// MariaDB extended metadata defaults; instances only carry own values when
// the server actually tagged the column
ColumnDefinition.prototype.extendedTypeName = undefined;
ColumnDefinition.prototype.extendedFormat = undefined;

module.exports = ColumnDefinition;


/***/ },

/***/ 4275
(module, __unused_webpack_exports, __webpack_require__) {



const Types = __webpack_require__(80);
const Packet = __webpack_require__(5777);
const StringParser = __webpack_require__(5623);
const {
  TypedParameter,
  encodeTypedParameter,
  integerHint,
} = __webpack_require__(9621);
const FieldFlags = __webpack_require__(4637);

function isJSON(value) {
  return (
    Array.isArray(value) ||
    value.constructor === Object ||
    (typeof value.toJSON === 'function' && !Buffer.isBuffer(value))
  );
}

function toParameter(value, encoding, timezone, jsonAsString, hint) {
  if (value instanceof TypedParameter) {
    return encodeTypedParameter(value, encoding, timezone, jsonAsString);
  }
  if (hint) {
    const hinted = integerHint(
      value,
      hint.columnType,
      Boolean(hint.flags & FieldFlags.UNSIGNED)
    );
    if (hinted) {
      return encodeTypedParameter(hinted, encoding, timezone, jsonAsString);
    }
  }
  let type = Types.VAR_STRING;
  let length;
  let writer = Packet.prototype.writeLengthCodedBuffer;
  if (value !== null) {
    switch (typeof value) {
      case 'undefined':
        throw new TypeError('Bind parameters must not contain undefined');

      case 'number':
        type = Types.DOUBLE;
        length = 8;
        writer = Packet.prototype.writeDouble;
        break;

      case 'boolean':
        value = value | 0;
        type = Types.TINY;
        length = 1;
        writer = Packet.prototype.writeInt8;
        break;

      case 'object':
        if (Object.prototype.toString.call(value) === '[object Date]') {
          type = Types.DATETIME;
          length = 12;
          writer = function (value) {
            return Packet.prototype.writeDate.call(this, value, timezone);
          };
        } else if (isJSON(value)) {
          value = JSON.stringify(value);
          // MariaDB rejects the JSON parameter type with "Incorrect
          // arguments to mysqld_stmt_execute"; it expects JSON values
          // as plain strings
          if (!jsonAsString) {
            type = Types.JSON;
          }
        } else if (Buffer.isBuffer(value)) {
          // send buffers as BLOB so servers treat the value as binary data
          // rather than a string in the connection charset (MariaDB converts
          // string parameters when storing into binary columns such as
          // VECTOR, corrupting the value)
          type = Types.BLOB;
          length = Packet.lengthCodedNumberLength(value.length) + value.length;
          writer = Packet.prototype.writeLengthCodedBuffer;
        }
        break;

      default:
        value = value.toString();
    }
  } else {
    value = '';
    type = Types.NULL;
    length = 0;
    writer = writeNothing;
  }
  let byteLength;
  if (length === undefined) {
    // a non-string here (e.g. a Uint8Array) keeps the Buffer.from coercion
    // inside StringParser.encode
    if (
      typeof value === 'string' &&
      StringParser.hasFastUtf8Write &&
      (encoding === 'utf8' || encoding === 'utf-8')
    ) {
      byteLength = Buffer.byteLength(value, 'utf8');
      length = Packet.lengthCodedNumberLength(byteLength) + byteLength;
      writer = Packet.prototype.writeLengthCodedUtf8String;
    } else {
      value = StringParser.encode(value, encoding);
      length = Packet.lengthCodedNumberLength(value.length) + value.length;
    }
  }
  return {
    value,
    type,
    length,
    byteLength,
    writer,
    unsigned: false,
    isNull: type === Types.NULL,
  };
}

function writeNothing() {}

module.exports = { toParameter, ...void (isJSON) };


/***/ },

/***/ 6990
(module, __unused_webpack_exports, __webpack_require__) {



const CursorType = __webpack_require__(7903);
const CommandCodes = __webpack_require__(7015);
const ClientConstants = __webpack_require__(3930);
const Types = __webpack_require__(80);
const Packet = __webpack_require__(5777);
const StringParser = __webpack_require__(5623);
const CharsetToEncoding = __webpack_require__(3160);
const { toParameter } = __webpack_require__(4275);

class Execute {
  constructor(
    id,
    parameters,
    charsetNumber,
    timezone,
    attributes,
    clientFlags,
    jsonAsString,
    parameterDefinitions
  ) {
    this.id = id;
    this.parameters = parameters;
    this.encoding = CharsetToEncoding[charsetNumber];
    this.timezone = timezone;
    this.attributes = attributes;
    this.clientFlags = clientFlags || 0;
    this.jsonAsString = jsonAsString || false;
    this.parameterDefinitions = parameterDefinitions || [];
  }

  static fromPacket(packet, encoding) {
    const stmtId = packet.readInt32();
    const flags = packet.readInt8();
    const iterationCount = packet.readInt32();

    let i = packet.offset;
    while (i < packet.end - 1) {
      if (
        (packet.buffer[i + 1] === Types.VAR_STRING ||
          packet.buffer[i + 1] === Types.BLOB ||
          packet.buffer[i + 1] === Types.NULL ||
          packet.buffer[i + 1] === Types.DOUBLE ||
          packet.buffer[i + 1] === Types.TINY ||
          packet.buffer[i + 1] === Types.DATETIME ||
          packet.buffer[i + 1] === Types.JSON) &&
        packet.buffer[i] === 1 &&
        packet.buffer[i + 2] === 0
      ) {
        break;
      } else {
        packet.readInt8();
      }
      i++;
    }

    const types = [];

    for (let i = packet.offset + 1; i < packet.end - 1; i++) {
      if (
        (packet.buffer[i] === Types.VAR_STRING ||
          packet.buffer[i] === Types.BLOB ||
          packet.buffer[i] === Types.NULL ||
          packet.buffer[i] === Types.DOUBLE ||
          packet.buffer[i] === Types.TINY ||
          packet.buffer[i] === Types.DATETIME ||
          packet.buffer[i] === Types.JSON) &&
        packet.buffer[i + 1] === 0
      ) {
        types.push(packet.buffer[i]);
        packet.skip(2);
      }
    }

    packet.skip(1);

    const values = [];
    for (let i = 0; i < types.length; i++) {
      if (types[i] === Types.VAR_STRING) {
        values.push(packet.readLengthCodedString(encoding));
      } else if (types[i] === Types.BLOB) {
        values.push(packet.readLengthCodedBuffer());
      } else if (types[i] === Types.DOUBLE) {
        values.push(packet.readDouble());
      } else if (types[i] === Types.TINY) {
        values.push(packet.readInt8());
      } else if (types[i] === Types.DATETIME) {
        values.push(packet.readDateTime());
      } else if (types[i] === Types.JSON) {
        values.push(JSON.parse(packet.readLengthCodedString(encoding)));
      }
      if (types[i] === Types.NULL) {
        values.push(null);
      }
    }

    return { stmtId, flags, iterationCount, values };
  }

  toPacket() {
    const useQueryAttributes =
      this.clientFlags & ClientConstants.CLIENT_QUERY_ATTRIBUTES;

    const attrNames =
      useQueryAttributes && this.attributes ? Object.keys(this.attributes) : [];
    const numParams = this.parameters ? this.parameters.length : 0;
    const numAttrs = attrNames.length;
    const totalParams = numParams + numAttrs;

    // packet header, command, statement id, cursor flags, iteration count
    let length = 14;
    if (useQueryAttributes) {
      length += Packet.lengthCodedNumberLength(totalParams);
    }

    let allParams = null;
    let attrNameBuffers = null;
    if (totalParams > 0) {
      allParams = new Array(totalParams);
      for (let i = 0; i < numParams; i++) {
        allParams[i] = toParameter(
          this.parameters[i],
          this.encoding,
          this.timezone,
          this.jsonAsString,
          this.parameterDefinitions[i]
        );
      }
      for (let i = 0; i < numAttrs; i++) {
        allParams[numParams + i] = toParameter(
          this.attributes[attrNames[i]],
          this.encoding,
          this.timezone
        );
      }

      // null bitmap, new-params-bound flag, type and unsigned byte per parameter
      length += ((totalParams + 7) >> 3) + 1 + totalParams * 2;
      if (useQueryAttributes) {
        // one empty length-coded name per bind parameter
        length += numParams;
        attrNameBuffers = new Array(numAttrs);
        for (let i = 0; i < numAttrs; i++) {
          const name = StringParser.encode(attrNames[i], this.encoding);
          attrNameBuffers[i] = name;
          length += Packet.lengthCodedNumberLength(name.length) + name.length;
        }
      }
      for (let i = 0; i < totalParams; i++) {
        if (!allParams[i].isNull) {
          length += allParams[i].length;
        }
      }
    }

    const packet = new Packet(0, Buffer.allocUnsafe(length), 0, length);
    packet.offset = 4;
    packet.writeInt8(CommandCodes.STMT_EXECUTE);
    packet.writeInt32(this.id);

    let cursorFlags = CursorType.NO_CURSOR;
    if (useQueryAttributes) {
      cursorFlags |= CursorType.PARAMETER_COUNT_AVAILABLE;
    }
    packet.writeInt8(cursorFlags);
    packet.writeInt32(1); // iteration-count, always 1

    if (useQueryAttributes) {
      packet.writeLengthCodedNumber(totalParams);
    }

    if (totalParams > 0) {
      let bitmap = 0;
      let bitValue = 1;
      for (let i = 0; i < totalParams; i++) {
        if (allParams[i].isNull) {
          bitmap |= bitValue;
        }
        bitValue *= 2;
        if (bitValue === 256) {
          packet.writeInt8(bitmap);
          bitmap = 0;
          bitValue = 1;
        }
      }
      if (bitValue !== 1) {
        packet.writeInt8(bitmap);
      }

      packet.writeInt8(1); // new-params-bound-flag

      for (let i = 0; i < totalParams; i++) {
        const parameter = allParams[i];
        packet.writeInt8(parameter.type);
        packet.writeInt8(parameter.unsigned ? 0x80 : 0);
        if (useQueryAttributes) {
          if (i < numParams) {
            packet.writeInt8(0); // bind parameters have an empty name
          } else {
            packet.writeLengthCodedBuffer(attrNameBuffers[i - numParams]);
          }
        }
      }

      for (let i = 0; i < totalParams; i++) {
        const parameter = allParams[i];
        if (!parameter.isNull) {
          parameter.writer.call(packet, parameter.value, parameter.byteLength);
        }
      }
    }

    if (packet.offset !== length) {
      throw new Error(
        \`Internal error: COM_STMT_EXECUTE serialized \${packet.offset - 4} bytes, expected \${length - 4}\`
      );
    }
    return packet;
  }
}

module.exports = Execute;


/***/ },

/***/ 1708
(module, __unused_webpack_exports, __webpack_require__) {



const Packet = __webpack_require__(5777);
const ClientConstants = __webpack_require__(3930);

// https://dev.mysql.com/doc/internals/en/connection-phase-packets.html#packet-Protocol::Handshake

class Handshake {
  constructor(args) {
    this.protocolVersion = args.protocolVersion;
    this.serverVersion = args.serverVersion;
    this.capabilityFlags = args.capabilityFlags;
    this.connectionId = args.connectionId;
    this.authPluginData1 = args.authPluginData1;
    this.authPluginData2 = args.authPluginData2;
    this.characterSet = args.characterSet;
    this.statusFlags = args.statusFlags;
    this.authPluginName = args.authPluginName;
    this.mariadbExtendedCapabilityFlags = args.mariadbExtendedCapabilityFlags;
  }

  setScrambleData(cb) {
    __webpack_require__(6982).randomBytes(20, (err, data) => {
      if (err) {
        cb(err);
        return;
      }
      this.authPluginData1 = data.slice(0, 8);
      this.authPluginData2 = data.slice(8, 20);
      cb();
    });
  }

  toPacket(sequenceId) {
    const length = 68 + Buffer.byteLength(this.serverVersion, 'utf8');
    const buffer = Buffer.alloc(length + 4, 0); // zero fill, 10 bytes filler later needs to contain zeros
    const packet = new Packet(sequenceId, buffer, 0, length + 4);
    packet.offset = 4;
    packet.writeInt8(this.protocolVersion);
    packet.writeString(this.serverVersion, 'cesu8');
    packet.writeInt8(0);
    packet.writeInt32(this.connectionId);
    packet.writeBuffer(this.authPluginData1);
    packet.writeInt8(0);
    const capabilityFlagsBuffer = Buffer.allocUnsafe(4);
    capabilityFlagsBuffer.writeUInt32LE(this.capabilityFlags, 0);
    packet.writeBuffer(capabilityFlagsBuffer.slice(0, 2));
    packet.writeInt8(this.characterSet);
    packet.writeInt16(this.statusFlags);
    packet.writeBuffer(capabilityFlagsBuffer.slice(2, 4));
    packet.writeInt8(21); // authPluginDataLength
    packet.skip(10);
    packet.writeBuffer(this.authPluginData2);
    packet.writeInt8(0);
    packet.writeString('mysql_native_password', 'latin1');
    packet.writeInt8(0);
    return packet;
  }

  static fromPacket(packet) {
    const args = {};
    args.protocolVersion = packet.readInt8();
    args.serverVersion = packet.readNullTerminatedString('cesu8');
    args.connectionId = packet.readInt32();
    args.authPluginData1 = packet.readBuffer(8);
    packet.skip(1);
    const capabilityFlagsBuffer = Buffer.allocUnsafe(4);
    capabilityFlagsBuffer[0] = packet.readInt8();
    capabilityFlagsBuffer[1] = packet.readInt8();
    if (packet.haveMoreData()) {
      args.characterSet = packet.readInt8();
      args.statusFlags = packet.readInt16();
      // upper 2 bytes
      capabilityFlagsBuffer[2] = packet.readInt8();
      capabilityFlagsBuffer[3] = packet.readInt8();
      args.capabilityFlags = capabilityFlagsBuffer.readUInt32LE(0);
      if (args.capabilityFlags & ClientConstants.PLUGIN_AUTH) {
        args.authPluginDataLength = packet.readInt8();
      } else {
        args.authPluginDataLength = 0;
        packet.skip(1);
      }
      packet.skip(6);
      if (args.capabilityFlags & ClientConstants.LONG_PASSWORD) {
        // CLIENT_MYSQL (LONG_PASSWORD) set: a MySQL server, the remaining
        // 4 reserved bytes are filler
        packet.skip(4);
        args.mariadbExtendedCapabilityFlags = 0;
      } else {
        // MariaDB servers (10.2+) leave CLIENT_MYSQL unset and use these
        // 4 bytes to advertise MariaDB-specific capabilities
        args.mariadbExtendedCapabilityFlags = packet.readInt32();
      }
    } else {
      args.capabilityFlags = capabilityFlagsBuffer.readUInt16LE(0);
      args.mariadbExtendedCapabilityFlags = 0;
    }

    const isSecureConnection =
      args.capabilityFlags & ClientConstants.SECURE_CONNECTION;
    if (isSecureConnection) {
      const authPluginDataLength = args.authPluginDataLength;
      if (authPluginDataLength === 0) {
        // for Secure Password Authentication
        args.authPluginDataLength = 20;
        args.authPluginData2 = packet.readBuffer(12);
        packet.skip(1);
      } else {
        // length > 0
        // for Custom Auth Plugin (PLUGIN_AUTH)
        const len = Math.max(13, authPluginDataLength - 8);
        args.authPluginData2 = packet.readBuffer(len);
      }
    }

    if (args.capabilityFlags & ClientConstants.PLUGIN_AUTH) {
      args.authPluginName = packet.readNullTerminatedString('ascii');
    }

    return new Handshake(args);
  }
}

module.exports = Handshake;


/***/ },

/***/ 8716
(module, __unused_webpack_exports, __webpack_require__) {



const ClientConstants = __webpack_require__(3930);
const CharsetToEncoding = __webpack_require__(3160);
const Packet = __webpack_require__(5777);

const auth41 = __webpack_require__(3247);

class HandshakeResponse {
  constructor(handshake) {
    this.user = handshake.user || '';
    this.database = handshake.database || '';
    this.password = handshake.password || '';
    this.passwordSha1 = handshake.passwordSha1;
    this.authPluginData1 = handshake.authPluginData1;
    this.authPluginData2 = handshake.authPluginData2;
    this.compress = handshake.compress;
    this.clientFlags = handshake.flags;
    this.mariadbExtendedClientFlags = handshake.mariadbExtendedClientFlags || 0;

    // Accept pre-calculated authToken and authPluginName from caller
    // This allows the caller to optimize by using the server's preferred auth method
    if (
      handshake.authToken !== undefined &&
      handshake.authPluginName !== undefined
    ) {
      // Validate types to fail fast with clear errors
      if (!Buffer.isBuffer(handshake.authToken)) {
        throw new TypeError(
          'HandshakeResponse authToken must be a Buffer when provided'
        );
      }
      if (typeof handshake.authPluginName !== 'string') {
        throw new TypeError(
          'HandshakeResponse authPluginName must be a string when provided'
        );
      }
      this.authToken = handshake.authToken;
      this.authPluginName = handshake.authPluginName;
    } else {
      // Fallback to legacy behavior: calculate mysql_native_password token
      // TODO: pre-4.1 auth support
      let authToken;
      if (this.passwordSha1) {
        authToken = auth41.calculateTokenFromPasswordSha(
          this.passwordSha1,
          this.authPluginData1,
          this.authPluginData2
        );
      } else {
        authToken = auth41.calculateToken(
          this.password,
          this.authPluginData1,
          this.authPluginData2
        );
      }
      this.authToken = authToken;
      this.authPluginName = 'mysql_native_password';
    }

    this.charsetNumber = handshake.charsetNumber;
    this.encoding = CharsetToEncoding[handshake.charsetNumber];
    this.connectAttributes = handshake.connectAttributes;
  }

  serializeResponse(buffer) {
    const isSet = (flag) => this.clientFlags & ClientConstants[flag];
    const packet = new Packet(0, buffer, 0, buffer.length);
    packet.offset = 4;
    packet.writeInt32(this.clientFlags);
    packet.writeInt32(0); // max packet size. todo: move to config
    packet.writeInt8(this.charsetNumber);
    // the last 4 of the 23 reserved bytes carry the MariaDB extended client
    // capabilities (zero when not negotiated, i.e. plain filler)
    packet.skip(19);
    packet.writeInt32(this.mariadbExtendedClientFlags);
    const encoding = this.encoding;
    packet.writeNullTerminatedString(this.user, encoding);
    let k;
    if (isSet('PLUGIN_AUTH_LENENC_CLIENT_DATA')) {
      packet.writeLengthCodedNumber(this.authToken.length);
      packet.writeBuffer(this.authToken);
    } else if (isSet('SECURE_CONNECTION')) {
      packet.writeInt8(this.authToken.length);
      packet.writeBuffer(this.authToken);
    } else {
      packet.writeBuffer(this.authToken);
      packet.writeInt8(0);
    }
    if (isSet('CONNECT_WITH_DB')) {
      packet.writeNullTerminatedString(this.database, encoding);
    }
    if (isSet('PLUGIN_AUTH')) {
      // Use the auth plugin name specified by the caller (optimized for server's preference)
      // or fall back to mysql_native_password for backward compatibility
      packet.writeNullTerminatedString(
        this.authPluginName || 'mysql_native_password',
        'latin1'
      );
    }
    if (isSet('CONNECT_ATTRS')) {
      const connectAttributes = this.connectAttributes || {};
      const attrNames = Object.keys(connectAttributes);
      let keysLength = 0;
      for (k = 0; k < attrNames.length; ++k) {
        keysLength += Packet.lengthCodedStringLength(attrNames[k], encoding);
        keysLength += Packet.lengthCodedStringLength(
          connectAttributes[attrNames[k]],
          encoding
        );
      }
      packet.writeLengthCodedNumber(keysLength);
      for (k = 0; k < attrNames.length; ++k) {
        packet.writeLengthCodedString(attrNames[k], encoding);
        packet.writeLengthCodedString(
          connectAttributes[attrNames[k]],
          encoding
        );
      }
    }
    return packet;
  }

  toPacket() {
    if (typeof this.user !== 'string') {
      throw new Error('"user" connection config property must be a string');
    }
    if (typeof this.database !== 'string') {
      throw new Error('"database" connection config property must be a string');
    }
    // dry run: calculate resulting packet length
    const p = this.serializeResponse(Packet.MockBuffer());
    return this.serializeResponse(Buffer.alloc(p.offset));
  }
  static fromPacket(packet, serverFlags = 0xffffffff) {
    const args = {};
    args.clientFlags = packet.readInt32();
    function isSet(flag) {
      return args.clientFlags & serverFlags & ClientConstants[flag];
    }
    args.maxPacketSize = packet.readInt32();
    args.charsetNumber = packet.readInt8();
    const encoding = CharsetToEncoding[args.charsetNumber];
    args.encoding = encoding;
    packet.skip(23);
    args.user = packet.readNullTerminatedString(encoding);
    let authTokenLength;
    if (isSet('PLUGIN_AUTH_LENENC_CLIENT_DATA')) {
      authTokenLength = packet.readLengthCodedNumber(encoding);
      args.authToken = packet.readBuffer(authTokenLength);
    } else if (isSet('SECURE_CONNECTION')) {
      authTokenLength = packet.readInt8();
      args.authToken = packet.readBuffer(authTokenLength);
    } else {
      args.authToken = packet.readNullTerminatedString(encoding);
    }
    if (isSet('CONNECT_WITH_DB')) {
      args.database = packet.readNullTerminatedString(encoding);
    }
    if (isSet('PLUGIN_AUTH')) {
      args.authPluginName = packet.readNullTerminatedString(encoding);
    }
    if (isSet('CONNECT_ATTRS')) {
      const keysLength = packet.readLengthCodedNumber(encoding);
      const keysEnd = packet.offset + keysLength;
      const attrs = {};
      while (packet.offset < keysEnd) {
        attrs[packet.readLengthCodedString(encoding)] =
          packet.readLengthCodedString(encoding);
      }
      args.connectAttributes = attrs;
    }
    return args;
  }
}

module.exports = HandshakeResponse;


/***/ },

/***/ 3205
(module, exports, __webpack_require__) {

// This file was modified by Oracle on June 1, 2021.
// A utility method was introduced to generate an Error instance from a
// binary server packet.
// Modifications copyright (c) 2021, Oracle and/or its affiliates.

// This file was modified by Oracle on September 21, 2021.
// The new AuthNextFactor packet is now available.
// Modifications copyright (c) 2021, Oracle and/or its affiliates.



const process = __webpack_require__(932);

const AuthNextFactor = __webpack_require__(7045);
const AuthSwitchRequest = __webpack_require__(9944);
const AuthSwitchRequestMoreData = __webpack_require__(7705);
const AuthSwitchResponse = __webpack_require__(3778);
const BinaryRow = __webpack_require__(7619);
const BinlogDump = __webpack_require__(8309);
const ChangeUser = __webpack_require__(2955);
const CloseStatement = __webpack_require__(7371);
const ColumnDefinition = __webpack_require__(5019);
const Execute = __webpack_require__(6990);
const Handshake = __webpack_require__(1708);
const HandshakeResponse = __webpack_require__(8716);
const PrepareStatement = __webpack_require__(2708);
const PreparedStatementHeader = __webpack_require__(5920);
const Query = __webpack_require__(9997);
const RegisterSlave = __webpack_require__(3216);
const ResetConnection = __webpack_require__(4097);
const ResultSetHeader = __webpack_require__(2564);
const SSLRequest = __webpack_require__(7445);
const TextRow = __webpack_require__(7549);

const ctorMap = {
  AuthNextFactor,
  AuthSwitchRequest,
  AuthSwitchRequestMoreData,
  AuthSwitchResponse,
  BinaryRow,
  BinlogDump,
  ChangeUser,
  CloseStatement,
  ColumnDefinition,
  Execute,
  Handshake,
  HandshakeResponse,
  PrepareStatement,
  PreparedStatementHeader,
  Query,
  RegisterSlave,
  ResetConnection,
  ResultSetHeader,
  SSLRequest,
  TextRow,
};
Object.entries(ctorMap).forEach(([name, ctor]) => {
  module.exports[name] = ctor;
  // monkey-patch it to include name if debug is on
  if (process.env.NODE_DEBUG) {
    if (ctor.prototype.toPacket) {
      const old = ctor.prototype.toPacket;
      ctor.prototype.toPacket = function () {
        const p = old.call(this);
        p._name = name;
        return p;
      };
    }
  }
});

// simple packets:
const Packet = __webpack_require__(5777);
exports.Packet = Packet;

class OK {
  static toPacket(args, encoding) {
    args = args || {};
    const affectedRows = args.affectedRows || 0;
    const insertId = args.insertId || 0;
    const serverStatus = args.serverStatus || 0;
    const warningCount = args.warningCount || 0;
    const message = args.message || '';

    let length = 9 + Packet.lengthCodedNumberLength(affectedRows);
    length += Packet.lengthCodedNumberLength(insertId);

    const buffer = Buffer.allocUnsafe(length);
    const packet = new Packet(0, buffer, 0, length);
    packet.offset = 4;
    packet.writeInt8(0);
    packet.writeLengthCodedNumber(affectedRows);
    packet.writeLengthCodedNumber(insertId);
    packet.writeInt16(serverStatus);
    packet.writeInt16(warningCount);
    packet.writeString(message, encoding);
    packet._name = 'OK';
    return packet;
  }
}

exports.OK = OK;

// warnings, statusFlags
class EOF {
  static toPacket(warnings, statusFlags) {
    if (typeof warnings === 'undefined') {
      warnings = 0;
    }
    if (typeof statusFlags === 'undefined') {
      statusFlags = 0;
    }
    const packet = new Packet(0, Buffer.allocUnsafe(9), 0, 9);
    packet.offset = 4;
    packet.writeInt8(0xfe);
    packet.writeInt16(warnings);
    packet.writeInt16(statusFlags);
    packet._name = 'EOF';
    return packet;
  }
}

exports.EOF = EOF;

class Error {
  static toPacket(args, encoding) {
    const length = 13 + Buffer.byteLength(args.message, 'utf8');
    const packet = new Packet(0, Buffer.allocUnsafe(length), 0, length);
    packet.offset = 4;
    packet.writeInt8(0xff);
    packet.writeInt16(args.code);
    // TODO: sql state parameter
    packet.writeString('#_____', encoding);
    packet.writeString(args.message, encoding);
    packet._name = 'Error';
    return packet;
  }

  static fromPacket(packet) {
    packet.readInt8(); // marker
    const code = packet.readInt16();
    packet.readString(1, 'ascii'); // sql state marker
    // The SQL state of the ERR_Packet which is always 5 bytes long.
    // https://dev.mysql.com/doc/dev/mysql-server/8.0.11/page_protocol_basic_dt_strings.html#sect_protocol_basic_dt_string_fix
    packet.readString(5, 'ascii'); // sql state (ignore for now)
    const message = packet.readNullTerminatedString('utf8');
    const error = new Error();
    error.message = message;
    error.code = code;
    return error;
  }
}

exports.Error = Error;


/***/ },

/***/ 5777
(module, __unused_webpack_exports, __webpack_require__) {

// This file was modified by Oracle on June 1, 2021.
// A comment describing some changes in the strict default SQL mode regarding
// non-standard dates was introduced.
// Modifications copyright (c) 2021, Oracle and/or its affiliates.



const ErrorCodeToName = __webpack_require__(5014);
const NativeBuffer = (__webpack_require__(181).Buffer);
const Long = __webpack_require__(2016);
const StringParser = __webpack_require__(5623);
const Types = __webpack_require__(80);
const ZERO_DATE = '0000-00-00';

// this is nearly duplicate of previous function so generated code is not slower
// due to "if (dateStrings)" branching
const pad = '000000000000';
function leftPad(num, value) {
  const s = value.toString();
  // if we don't need to pad
  if (s.length >= num) {
    return s;
  }
  return (pad + s).slice(-num);
}

// The whole reason parse* function below exist
// is because String creation is relatively expensive (at least with V8), and if we have
// a buffer with "12345" content ideally we would like to bypass intermediate
// "12345" string creation and directly build 12345 number out of
// <Buffer 31 32 33 34 35> data.
// In my benchmarks the difference is ~25M 8-digit numbers per second vs
// 4.5 M using Number(packet.readLengthCodedString())
// not used when size is close to max precision as series of *10 accumulate error
// and approximate result might be different from (approximate as well) Number(bigNumStringValue))
// In the future node version if speed difference is smaller parse* functions might be removed
// don't consider them as Packet public API

const minus = '-'.charCodeAt(0);
const plus = '+'.charCodeAt(0);

// JSON.parse source access: proposal-json-parse-with-source,
// Node.js 22+ / V8 12.2
const jsonSourceAccessSupported = (() => {
  let supported = false;
  JSON.parse('0', (key, value, context) => {
    supported = context !== undefined && typeof context.source === 'string';
    return value;
  });
  return supported;
})();

// 16 digits is the shortest numeral that can exceed Number.MAX_SAFE_INTEGER
const jsonBigNumeral = /\\d{16}/;
const jsonIntegerSource = /^-?\\d+$/;

function jsonBigNumberReviver(key, value, context) {
  if (
    typeof value === 'number' &&
    !Number.isSafeInteger(value) &&
    context !== undefined &&
    jsonIntegerSource.test(context.source)
  ) {
    return context.source;
  }
  return value;
}

// TODO: handle E notation
const dot = '.'.charCodeAt(0);
const exponent = 'e'.charCodeAt(0);
const exponentCapital = 'E'.charCodeAt(0);
const colon = ':'.charCodeAt(0);

// '+HH:MM' / '-HH:MM' -> signed minutes, memoized on the last seen value
// (the timezone is a per-connection constant in practice)
let lastTimezone;
let lastTimezoneOffset = null;
function timezoneOffsetMinutes(timezone) {
  if (timezone === lastTimezone) {
    return lastTimezoneOffset;
  }
  let offset = null;
  if (/^[+-]\\d{2}:\\d{2}$/.test(timezone)) {
    offset =
      (timezone[0] === '-' ? -1 : 1) *
      (parseInt(timezone.substring(1, 3), 10) * 60 +
        parseInt(timezone.substring(4), 10));
  }
  lastTimezone = timezone;
  lastTimezoneOffset = offset;
  return offset;
}

class Packet {
  constructor(id, buffer, start, end) {
    // hot path, enable checks when testing only
    // if (!Buffer.isBuffer(buffer) || typeof start == 'undefined' || typeof end == 'undefined')
    //  throw new Error('invalid packet');
    this.sequenceId = id;
    this.numPackets = 1;
    this.buffer = buffer;
    this.start = start;
    this.offset = start + 4;
    this.end = end;
  }

  // ==============================
  // readers
  // ==============================
  reset() {
    this.offset = this.start + 4;
  }

  length() {
    return this.end - this.start;
  }

  slice() {
    return this.buffer.slice(this.start, this.end);
  }

  dump() {
    console.log(
      [this.buffer.asciiSlice(this.start, this.end)],
      this.buffer.slice(this.start, this.end),
      this.length(),
      this.sequenceId
    );
  }

  haveMoreData() {
    return this.end > this.offset;
  }

  skip(num) {
    this.offset += num;
  }

  readInt8() {
    return this.buffer[this.offset++];
  }

  readInt16() {
    this.offset += 2;
    return this.buffer.readUInt16LE(this.offset - 2);
  }

  readInt24() {
    return this.readInt16() + (this.readInt8() << 16);
  }

  readInt32() {
    this.offset += 4;
    return this.buffer.readUInt32LE(this.offset - 4);
  }

  readSInt8() {
    return this.buffer.readInt8(this.offset++);
  }

  readSInt16() {
    this.offset += 2;
    return this.buffer.readInt16LE(this.offset - 2);
  }

  readSInt32() {
    this.offset += 4;
    return this.buffer.readInt32LE(this.offset - 4);
  }

  readInt64JSNumber() {
    const word0 = this.readInt32();
    const word1 = this.readInt32();
    // same value Long.toNumber() would produce, without the allocation
    return word0 + 0x100000000 * word1;
  }

  readSInt64JSNumber() {
    const word0 = this.readInt32();
    const word1 = this.readInt32();
    return word0 + 0x100000000 * (word1 | 0);
  }

  readInt64String() {
    const word0 = this.readInt32();
    const word1 = this.readInt32();
    const res = new Long(word0, word1, true);
    return res.toString();
  }

  readSInt64String() {
    const word0 = this.readInt32();
    const word1 = this.readInt32();
    const res = new Long(word0, word1, false);
    return res.toString();
  }

  readInt64() {
    const word0 = this.readInt32();
    const word1 = this.readInt32();
    const resNumber = word0 + 0x100000000 * word1;
    if (Number.isSafeInteger(resNumber)) {
      return resNumber;
    }
    return new Long(word0, word1, true).toString();
  }

  readSInt64() {
    const word0 = this.readInt32();
    const word1 = this.readInt32();
    const resNumber = word0 + 0x100000000 * (word1 | 0);
    if (Number.isSafeInteger(resNumber)) {
      return resNumber;
    }
    return new Long(word0, word1, false).toString();
  }

  isEOF() {
    return this.buffer[this.offset] === 0xfe && this.length() < 13;
  }

  eofStatusFlags() {
    return this.buffer.readInt16LE(this.offset + 3);
  }

  eofWarningCount() {
    return this.buffer.readInt16LE(this.offset + 1);
  }

  readLengthCodedNumber(bigNumberStrings, signed) {
    const byte1 = this.buffer[this.offset++];
    if (byte1 < 251) {
      return byte1;
    }
    return this.readLengthCodedNumberExt(byte1, bigNumberStrings, signed);
  }

  readLengthCodedNumberSigned(bigNumberStrings) {
    return this.readLengthCodedNumber(bigNumberStrings, true);
  }

  readLengthCodedNumberExt(tag, bigNumberStrings, signed) {
    let word0, word1;
    let res;
    if (tag === 0xfb) {
      return null;
    }
    if (tag === 0xfc) {
      return this.readInt8() + (this.readInt8() << 8);
    }
    if (tag === 0xfd) {
      return this.readInt8() + (this.readInt8() << 8) + (this.readInt8() << 16);
    }
    if (tag === 0xfe) {
      // TODO: check version
      // Up to MySQL 3.22, 0xfe was followed by a 4-byte integer.
      word0 = this.readInt32();
      word1 = this.readInt32();
      if (word1 === 0) {
        return word0; // don't convert to float if possible
      }
      if (word1 < 2097152) {
        // max exact float point int, 2^52 / 2^32
        return word1 * 0x100000000 + word0;
      }
      res = new Long(word0, word1, !signed); // Long need unsigned
      const resNumber = res.toNumber();
      const resString = res.toString();
      if (bigNumberStrings || !Number.isSafeInteger(resNumber)) {
        return resString;
      }
      return resNumber;
    }

    console.trace();
    throw new Error(\`Should not reach here: \${tag}\`);
  }

  readFloat() {
    const res = this.buffer.readFloatLE(this.offset);
    this.offset += 4;
    return res;
  }

  readDouble() {
    const res = this.buffer.readDoubleLE(this.offset);
    this.offset += 8;
    return res;
  }

  readBuffer(len) {
    if (typeof len === 'undefined') {
      len = this.end - this.offset;
    }
    this.offset += len;
    return this.buffer.slice(this.offset - len, this.offset);
  }

  // DATE, DATETIME and TIMESTAMP
  readDateTime(timezone) {
    if (!timezone || timezone === 'Z' || timezone === 'local') {
      const length = this.readInt8();
      if (length === 0xfb) {
        return null;
      }
      let y = 0;
      let m = 0;
      let d = 0;
      let H = 0;
      let M = 0;
      let S = 0;
      let ms = 0;
      if (length > 3) {
        y = this.readInt16();
        m = this.readInt8();
        d = this.readInt8();
      }
      if (length > 6) {
        H = this.readInt8();
        M = this.readInt8();
        S = this.readInt8();
      }
      if (length > 10) {
        ms = this.readInt32() / 1000;
      }
      // NO_ZERO_DATE mode and NO_ZERO_IN_DATE mode are part of the strict
      // default SQL mode used by MySQL 8.0. This means that non-standard
      // dates like '0000-00-00' become NULL. For older versions and other
      // possible MySQL flavours we still need to account for the
      // non-standard behaviour.
      if (y + m + d + H + M + S + ms === 0) {
        return new Date(NaN);
      }
      if (timezone === 'Z') {
        return new Date(Date.UTC(y, m - 1, d, H, M, S, ms));
      }
      return new Date(y, m - 1, d, H, M, S, ms);
    }
    let str = this.readDateTimeString(6, 'T', null);
    if (str.startsWith(ZERO_DATE)) {
      // fresh instance: Date is mutable, a shared invalid-date singleton
      // could be corrupted by callers (see the parseDateTime tests)
      return new Date(NaN);
    }
    if (str.length === 10) {
      str += 'T00:00:00';
    }
    return new Date(str + timezone);
  }

  readDateTimeString(decimals, timeSep, columnType) {
    const length = this.readInt8();
    let y = 0;
    let m = 0;
    let d = 0;
    let H = 0;
    let M = 0;
    let S = 0;
    let ms = 0;
    let str = ZERO_DATE;
    if (length > 3) {
      y = this.readInt16();
      m = this.readInt8();
      d = this.readInt8();
      str = [leftPad(4, y), leftPad(2, m), leftPad(2, d)].join('-');
    }
    if (length > 6) {
      H = this.readInt8();
      M = this.readInt8();
      S = this.readInt8();
      str += \`\${timeSep || ' '}\${[
        leftPad(2, H),
        leftPad(2, M),
        leftPad(2, S),
      ].join(':')}\`;
    } else if (
      columnType === Types.DATETIME ||
      columnType === Types.TIMESTAMP
    ) {
      str += ' 00:00:00';
    }
    if (length > 10) {
      ms = this.readInt32();
      str += '.';
      if (decimals) {
        ms = leftPad(6, ms);
        if (ms.length > decimals) {
          ms = ms.substring(0, decimals); // rounding is done at the MySQL side, only 0 are here
        }
      }
      str += ms;
    }
    return str;
  }

  // TIME - value as a string, Can be negative
  readTimeString(convertTtoMs) {
    const length = this.readInt8();
    if (length === 0) {
      return '00:00:00';
    }
    const sign = this.readInt8() ? -1 : 1; // 'isNegative' flag byte
    let d = 0;
    let H = 0;
    let M = 0;
    let S = 0;
    let ms = 0;
    if (length > 6) {
      d = this.readInt32();
      H = this.readInt8();
      M = this.readInt8();
      S = this.readInt8();
    }
    if (length > 10) {
      ms = this.readInt32();
    }
    if (convertTtoMs) {
      H += d * 24;
      M += H * 60;
      S += M * 60;
      ms += S * 1000;
      ms *= sign;
      return ms;
    }
    // Format follows mySQL TIME format ([-][h]hh:mm:ss[.u[u[u[u[u[u]]]]]])
    // For positive times below 24 hours, this makes it equal to ISO 8601 times
    return (
      (sign === -1 ? '-' : '') +
      [leftPad(2, d * 24 + H), leftPad(2, M), leftPad(2, S)].join(':') +
      (ms ? \`.\${leftPad(6, ms)}\`.replace(/0+$/, '') : '')
    );
  }

  readLengthCodedString(encoding) {
    const len = this.readLengthCodedNumber();
    // TODO: check manually first byte here to avoid polymorphic return type?
    if (len === null) {
      return null;
    }
    this.offset += len;
    // TODO: Use characterSetCode to get proper encoding
    // https://github.com/sidorares/node-mysql2/pull/374
    return StringParser.decode(
      this.buffer,
      encoding,
      this.offset - len,
      this.offset
    );
  }

  readLengthCodedBuffer() {
    const len = this.readLengthCodedNumber();
    if (len === null) {
      return null;
    }
    return this.readBuffer(len);
  }

  readNullTerminatedString(encoding) {
    const start = this.offset;
    let end = this.offset;
    while (end < this.end && this.buffer[end] !== 0x00) {
      end = end + 1;
    }
    this.offset = end + 1;
    return StringParser.decode(this.buffer, encoding, start, end);
  }

  // TODO reuse?
  readString(len, encoding) {
    if (typeof len === 'string' && typeof encoding === 'undefined') {
      encoding = len;
      len = undefined;
    }
    if (typeof len === 'undefined') {
      len = this.end - this.offset;
    }
    this.offset += len;
    return StringParser.decode(
      this.buffer,
      encoding,
      this.offset - len,
      this.offset
    );
  }

  parseInt(len, supportBigNumbers) {
    if (len === null) {
      return null;
    }
    if (len >= 14 && !supportBigNumbers) {
      const s = this.buffer.toString('ascii', this.offset, this.offset + len);
      this.offset += len;
      return Number(s);
    }
    let result = 0;
    const start = this.offset;
    const end = this.offset + len;
    let sign = 1;
    if (len === 0) {
      return 0; // TODO: assert? exception?
    }
    if (this.buffer[this.offset] === minus) {
      this.offset++;
      sign = -1;
    }
    // max precise int is 9007199254740992
    let str;
    const numDigits = end - this.offset;
    if (supportBigNumbers) {
      if (numDigits >= 15) {
        str = this.readString(end - this.offset, 'binary');
        result = parseInt(str, 10);
        if (Number.isSafeInteger(sign * result)) {
          return sign * result;
        }
        return sign === -1 ? \`-\${str}\` : str;
      }
      if (numDigits > 16) {
        str = this.readString(end - this.offset);
        return sign === -1 ? \`-\${str}\` : str;
      }
    }
    if (this.buffer[this.offset] === plus) {
      this.offset++; // just ignore
    }
    while (this.offset < end) {
      result *= 10;
      result += this.buffer[this.offset] - 48;
      this.offset++;
    }
    const num = result * sign;
    if (!supportBigNumbers) {
      return num;
    }
    if (Number.isSafeInteger(num)) {
      return num;
    }
    return this.buffer.toString('ascii', start, end);
  }

  // note that if value of inputNumberAsString is bigger than MAX_SAFE_INTEGER
  // ( or smaller than MIN_SAFE_INTEGER ) the parseIntNoBigCheck result might be
  // different from what you would get from Number(inputNumberAsString)
  // String(parseIntNoBigCheck) <> String(Number(inputNumberAsString)) <> inputNumberAsString
  parseIntNoBigCheck(len) {
    if (len === null) {
      return null;
    }
    let result = 0;
    const end = this.offset + len;
    let sign = 1;
    if (len === 0) {
      return 0; // TODO: assert? exception?
    }
    if (this.buffer[this.offset] === minus) {
      this.offset++;
      sign = -1;
    }
    if (this.buffer[this.offset] === plus) {
      this.offset++; // just ignore
    }
    while (this.offset < end) {
      result *= 10;
      result += this.buffer[this.offset] - 48;
      this.offset++;
    }
    return result * sign;
  }

  // adapted from https://github.com/mysqljs/mysql/blob/dc9c152a87ec51a1f647447268917243d2eab1fd/lib/protocol/Parser.js
  parseGeometryValue() {
    const buffer = this.readLengthCodedBuffer();
    let offset = 4;
    if (buffer === null || !buffer.length) {
      return null;
    }
    const bufferLength = buffer.length;
    function parseGeometry() {
      let x, y, i, j, numPoints, numRings, num, line;
      let result = null;
      if (offset + 5 > bufferLength) {
        return null;
      }
      const byteOrder = buffer.readUInt8(offset);
      offset += 1;
      const wkbType = byteOrder
        ? buffer.readUInt32LE(offset)
        : buffer.readUInt32BE(offset);
      offset += 4;
      switch (wkbType) {
        case 1: // WKBPoint
          if (offset + 16 > bufferLength) {
            return null;
          }
          x = byteOrder
            ? buffer.readDoubleLE(offset)
            : buffer.readDoubleBE(offset);
          offset += 8;
          y = byteOrder
            ? buffer.readDoubleLE(offset)
            : buffer.readDoubleBE(offset);
          offset += 8;
          result = { x: x, y: y };
          break;
        case 2: // WKBLineString
          if (offset + 4 > bufferLength) {
            return null;
          }
          numPoints = byteOrder
            ? buffer.readUInt32LE(offset)
            : buffer.readUInt32BE(offset);
          offset += 4;
          if (numPoints > (bufferLength - offset) / 16) {
            return null;
          }
          result = [];
          for (i = numPoints; i > 0; i--) {
            if (offset + 16 > bufferLength) {
              break;
            }
            x = byteOrder
              ? buffer.readDoubleLE(offset)
              : buffer.readDoubleBE(offset);
            offset += 8;
            y = byteOrder
              ? buffer.readDoubleLE(offset)
              : buffer.readDoubleBE(offset);
            offset += 8;
            result.push({ x: x, y: y });
          }
          break;
        case 3: // WKBPolygon
          if (offset + 4 > bufferLength) {
            return null;
          }
          numRings = byteOrder
            ? buffer.readUInt32LE(offset)
            : buffer.readUInt32BE(offset);
          offset += 4;
          if (numRings > (bufferLength - offset) / 4) {
            return null;
          }
          result = [];
          for (i = numRings; i > 0; i--) {
            if (offset + 4 > bufferLength) {
              break;
            }
            numPoints = byteOrder
              ? buffer.readUInt32LE(offset)
              : buffer.readUInt32BE(offset);
            offset += 4;
            line = [];
            for (j = numPoints; j > 0; j--) {
              if (offset + 16 > bufferLength) {
                break;
              }
              x = byteOrder
                ? buffer.readDoubleLE(offset)
                : buffer.readDoubleBE(offset);
              offset += 8;
              y = byteOrder
                ? buffer.readDoubleLE(offset)
                : buffer.readDoubleBE(offset);
              offset += 8;
              line.push({ x: x, y: y });
            }
            result.push(line);
          }
          break;
        case 4: // WKBMultiPoint
        case 5: // WKBMultiLineString
        case 6: // WKBMultiPolygon
        case 7: // WKBGeometryCollection
          if (offset + 4 > bufferLength) {
            return null;
          }
          num = byteOrder
            ? buffer.readUInt32LE(offset)
            : buffer.readUInt32BE(offset);
          offset += 4;
          if (num > (bufferLength - offset) / 9) {
            return null;
          }
          result = [];
          for (i = num; i > 0; i--) {
            result.push(parseGeometry());
          }
          break;
      }
      return result;
    }
    return parseGeometry();
  }

  parseVector() {
    const bufLen = this.readLengthCodedNumber();
    const vectorEnd = this.offset + bufLen;
    const result = [];
    while (this.offset < vectorEnd && this.offset < this.end) {
      result.push(this.readFloat());
    }
    return result;
  }

  // With supportBigNumbers, unsafe integers become exact strings,
  // mirroring the option's behaviour for BIGINT columns
  parseJson(encoding, supportBigNumbers) {
    const str = this.readLengthCodedString(encoding);
    if (
      supportBigNumbers &&
      jsonSourceAccessSupported &&
      str !== null &&
      jsonBigNumeral.test(str)
    ) {
      return JSON.parse(str, jsonBigNumberReviver);
    }
    return JSON.parse(str);
  }

  parseDate(timezone) {
    const strLen = this.readLengthCodedNumber();
    if (strLen === null) {
      return null;
    }
    if (strLen !== 10) {
      // we expect only YYYY-MM-DD here.
      // if for some reason it's not the case return invalid date
      return new Date(NaN);
    }
    const y = this.parseInt(4);
    this.offset++; // -
    const m = this.parseInt(2);
    this.offset++; // -
    const d = this.parseInt(2);
    if (!timezone || timezone === 'local') {
      return new Date(y, m - 1, d);
    }
    if (timezone === 'Z') {
      return new Date(Date.UTC(y, m - 1, d));
    }
    return new Date(
      \`\${leftPad(4, y)}-\${leftPad(2, m)}-\${leftPad(2, d)}T00:00:00\${timezone}\`
    );
  }

  parseDateTime(timezone) {
    const len = this.readLengthCodedNumber();
    if (len === null) {
      return null;
    }
    const b = this.buffer;
    const s = this.offset;
    // fast path for the wire format 'YYYY-MM-DD[ HH:MM:SS[.ffffff]]';
    // parses digits straight from the buffer, avoiding both the intermediate
    // string and the much slower Date-from-string constructor
    if (
      len >= 19 &&
      b[s + 4] === minus &&
      b[s + 7] === minus &&
      b[s + 13] === colon &&
      b[s + 16] === colon
    ) {
      const y =
        (b[s] - 48) * 1000 +
        (b[s + 1] - 48) * 100 +
        (b[s + 2] - 48) * 10 +
        (b[s + 3] - 48);
      const mo = (b[s + 5] - 48) * 10 + (b[s + 6] - 48);
      const d = (b[s + 8] - 48) * 10 + (b[s + 9] - 48);
      if (mo === 0 || d === 0 || mo > 12 || d > 31) {
        // matches Date-from-string behaviour for zero/invalid dates
        this.offset += len;
        return new Date(NaN);
      }
      if (y < 100) {
        // new Date(y, ...) maps years 0-99 to 1900+y; let the string
        // constructor handle this (out of MySQL's documented range anyway)
        const str = StringParser.decode(b, 'binary', s, s + len);
        this.offset += len;
        return !timezone || timezone === 'local'
          ? new Date(str)
          : new Date(\`\${str}\${timezone}\`);
      }
      const h = (b[s + 11] - 48) * 10 + (b[s + 12] - 48);
      const mi = (b[s + 14] - 48) * 10 + (b[s + 15] - 48);
      const se = (b[s + 17] - 48) * 10 + (b[s + 18] - 48);
      let ms = 0;
      if (len > 20) {
        // fractional part: Date resolution is ms, use the first 3 digits
        let scale = 100;
        for (let i = s + 20; i < s + len && scale >= 1; i++) {
          ms += (b[i] - 48) * scale;
          scale /= 10;
        }
      }
      this.offset += len;
      if (!timezone || timezone === 'local') {
        return new Date(y, mo - 1, d, h, mi, se, ms);
      }
      const utc = Date.UTC(y, mo - 1, d, h, mi, se, ms);
      if (timezone === 'Z') {
        return new Date(utc);
      }
      const offsetMinutes = timezoneOffsetMinutes(timezone);
      if (offsetMinutes !== null) {
        return new Date(utc - offsetMinutes * 60000);
      }
      // not a fixed '+HH:MM' offset: preserve the legacy string behaviour
      // (V8 accepts some timezone abbreviations in Date-from-string)
      return new Date(
        \`\${StringParser.decode(b, 'binary', s, s + len)}\${timezone}\`
      );
    }
    const str = StringParser.decode(b, 'binary', s, s + len);
    this.offset += len;
    if (!timezone || timezone === 'local') {
      return new Date(str);
    }
    return new Date(\`\${str}\${timezone}\`);
  }

  parseFloat(len) {
    if (len === null) {
      return null;
    }
    if (len === 0) {
      return 0; // TODO: assert? exception?
    }

    // For numbers with many digits (>17), use built-in parseFloat to avoid
    // precision loss from accumulated rounding errors in repeated *10 operations.
    // This fixes issues #2928 (MAX_VALUE doubles) and #3690 (DECIMAL(36,18))
    // where very large numbers or numbers with many fractional digits lose precision.
    // The threshold of 17 is based on IEEE 754 double precision (~15-17 significant digits).
    // Testing shows minimal performance impact as most real-world numbers are shorter.
    if (len > 17) {
      const str = this.buffer.toString('utf8', this.offset, this.offset + len);
      this.offset += len;
      return Number.parseFloat(str);
    }

    let result = 0;
    const end = this.offset + len;
    let factor = 1;
    let pastDot = false;
    let charCode = 0;
    if (this.buffer[this.offset] === minus) {
      this.offset++;
      factor = -1;
    }
    if (this.buffer[this.offset] === plus) {
      this.offset++; // just ignore
    }
    while (this.offset < end) {
      charCode = this.buffer[this.offset];
      if (charCode === dot) {
        pastDot = true;
        this.offset++;
      } else if (charCode === exponent || charCode === exponentCapital) {
        // Scientific notation detected - bail out to parseFloat for exact match.
        // Manual calculation with Math.pow(10, exp) cannot match parseFloat()
        // exactly for most non-zero exponents due to accumulated rounding errors.
        const start = end - len;
        const str = this.buffer.toString('utf8', start, end);
        this.offset = end;
        return Number.parseFloat(str);
      } else {
        result *= 10;
        result += this.buffer[this.offset] - 48;
        this.offset++;
        if (pastDot) {
          factor = factor * 10;
        }
      }
    }
    return result / factor;
  }

  parseLengthCodedIntNoBigCheck() {
    return this.parseIntNoBigCheck(this.readLengthCodedNumber());
  }

  parseLengthCodedInt(supportBigNumbers) {
    return this.parseInt(this.readLengthCodedNumber(), supportBigNumbers);
  }

  parseLengthCodedIntString() {
    return this.readLengthCodedString('binary');
  }

  parseLengthCodedFloat() {
    return this.parseFloat(this.readLengthCodedNumber());
  }

  peekByte() {
    return this.buffer[this.offset];
  }

  // OxFE is often used as "Alt" flag - not ok, not error.
  // For example, it's first byte of AuthSwitchRequest
  isAlt() {
    return this.peekByte() === 0xfe;
  }

  isError() {
    return this.peekByte() === 0xff;
  }

  asError(encoding) {
    this.reset();
    this.readInt8(); // fieldCount
    const errorCode = this.readInt16();
    let sqlState = '';
    if (this.buffer[this.offset] === 0x23) {
      this.skip(1);
      sqlState = this.readBuffer(5).toString();
    }
    const message = this.readString(undefined, encoding);
    const err = new Error(message);
    err.code = ErrorCodeToName[errorCode];
    err.errno = errorCode;
    err.sqlState = sqlState;
    err.sqlMessage = message;
    return err;
  }

  writeInt32(n) {
    this.buffer.writeUInt32LE(n, this.offset);
    this.offset += 4;
  }

  writeInt24(n) {
    this.writeInt8(n & 0xff);
    this.writeInt16(n >> 8);
  }

  writeInt16(n) {
    this.buffer.writeUInt16LE(n, this.offset);
    this.offset += 2;
  }

  writeInt8(n) {
    this.buffer.writeUInt8(n, this.offset);
    this.offset++;
  }

  writeDouble(n) {
    this.buffer.writeDoubleLE(n, this.offset);
    this.offset += 8;
  }

  writeFloat(n) {
    this.buffer.writeFloatLE(n, this.offset);
    this.offset += 4;
  }

  writeUIntLE(n, bytes) {
    if (bytes === 8) {
      this.buffer.writeBigUInt64LE(n, this.offset);
    } else {
      this.buffer.writeUIntLE(Number(n), this.offset, bytes);
    }
    this.offset += bytes;
  }

  // must match writeTime's choice of encoding byte for byte
  static timeLength({ days, hours, minutes, seconds, microseconds }) {
    if (!days && !hours && !minutes && !seconds && !microseconds) {
      return 1;
    }
    return microseconds ? 13 : 9;
  }

  writeTime({ negative, days, hours, minutes, seconds, microseconds }) {
    if (!days && !hours && !minutes && !seconds && !microseconds) {
      this.writeInt8(0);
      return;
    }
    this.writeInt8(microseconds ? 12 : 8);
    this.writeInt8(negative ? 1 : 0);
    this.writeInt32(days);
    this.writeInt8(hours);
    this.writeInt8(minutes);
    this.writeInt8(seconds);
    if (microseconds) {
      this.writeInt32(microseconds);
    }
  }

  writeBuffer(b) {
    b.copy(this.buffer, this.offset);
    this.offset += b.length;
  }

  writeNull() {
    this.buffer[this.offset] = 0xfb;
    this.offset++;
  }

  // TODO: refactor following three?
  writeNullTerminatedString(s, encoding) {
    const buf = StringParser.encode(s, encoding);
    this.buffer.length && buf.copy(this.buffer, this.offset);
    this.offset += buf.length;
    this.writeInt8(0);
  }

  writeString(s, encoding) {
    if (s === null) {
      this.writeInt8(0xfb);
      return;
    }
    if (s.length === 0) {
      return;
    }
    // const bytes = Buffer.byteLength(s, 'utf8');
    // this.buffer.write(s, this.offset, bytes, 'utf8');
    // this.offset += bytes;
    const buf = StringParser.encode(s, encoding);
    this.buffer.length && buf.copy(this.buffer, this.offset);
    this.offset += buf.length;
  }

  writeLengthCodedString(s, encoding) {
    const buf = StringParser.encode(s, encoding);
    this.writeLengthCodedNumber(buf.length);
    this.buffer.length && buf.copy(this.buffer, this.offset);
    this.offset += buf.length;
  }

  // byteLength, when the caller sized the packet, must be
  // Buffer.byteLength(string, 'utf8'); only used where
  // Buffer.prototype.utf8Write exists
  writeLengthCodedUtf8String(string, byteLength) {
    if (byteLength === undefined) {
      byteLength = Buffer.byteLength(string, 'utf8');
    }
    this.writeLengthCodedNumber(byteLength);
    this.buffer.utf8Write(string, this.offset, byteLength);
    this.offset += byteLength;
  }

  writeLengthCodedBuffer(b) {
    this.writeLengthCodedNumber(b.length);
    b.copy(this.buffer, this.offset);
    this.offset += b.length;
  }

  writeLengthCodedNumber(n) {
    if (n < 0xfb) {
      return this.writeInt8(n);
    }
    if (n < 0xffff) {
      this.writeInt8(0xfc);
      return this.writeInt16(n);
    }
    if (n < 0xffffff) {
      this.writeInt8(0xfd);
      return this.writeInt24(n);
    }
    if (n === null) {
      return this.writeInt8(0xfb);
    }
    this.writeInt8(0xfe);
    this.buffer.writeUInt32LE(n >>> 0, this.offset);
    this.offset += 4;
    this.buffer.writeUInt32LE(Math.floor(n / 0x100000000), this.offset);
    this.offset += 4;
    return this.offset;
  }

  writeDate(d, timezone) {
    this.buffer.writeUInt8(11, this.offset);
    if (!timezone || timezone === 'local') {
      this.buffer.writeUInt16LE(d.getFullYear(), this.offset + 1);
      this.buffer.writeUInt8(d.getMonth() + 1, this.offset + 3);
      this.buffer.writeUInt8(d.getDate(), this.offset + 4);
      this.buffer.writeUInt8(d.getHours(), this.offset + 5);
      this.buffer.writeUInt8(d.getMinutes(), this.offset + 6);
      this.buffer.writeUInt8(d.getSeconds(), this.offset + 7);
      this.buffer.writeUInt32LE(d.getMilliseconds() * 1000, this.offset + 8);
    } else {
      if (timezone !== 'Z') {
        const offset =
          (timezone[0] === '-' ? -1 : 1) *
          (parseInt(timezone.substring(1, 3), 10) * 60 +
            parseInt(timezone.substring(4), 10));
        if (offset !== 0) {
          d = new Date(d.getTime() + 60000 * offset);
        }
      }
      this.buffer.writeUInt16LE(d.getUTCFullYear(), this.offset + 1);
      this.buffer.writeUInt8(d.getUTCMonth() + 1, this.offset + 3);
      this.buffer.writeUInt8(d.getUTCDate(), this.offset + 4);
      this.buffer.writeUInt8(d.getUTCHours(), this.offset + 5);
      this.buffer.writeUInt8(d.getUTCMinutes(), this.offset + 6);
      this.buffer.writeUInt8(d.getUTCSeconds(), this.offset + 7);
      this.buffer.writeUInt32LE(d.getUTCMilliseconds() * 1000, this.offset + 8);
    }
    this.offset += 12;
  }

  writeHeader(sequenceId) {
    const offset = this.offset;
    this.offset = 0;
    this.writeInt24(this.buffer.length - 4);
    this.writeInt8(sequenceId);
    this.offset = offset;
  }

  clone() {
    return new Packet(this.sequenceId, this.buffer, this.start, this.end);
  }

  type() {
    if (this.isEOF()) {
      return 'EOF';
    }
    if (this.isError()) {
      return 'Error';
    }
    if (this.buffer[this.offset] === 0) {
      return 'maybeOK'; // could be other packet types as well
    }
    return '';
  }

  static lengthCodedNumberLength(n) {
    if (n < 0xfb) {
      return 1;
    }
    if (n < 0xffff) {
      return 3;
    }
    if (n < 0xffffff) {
      return 4;
    }
    return 9;
  }

  static lengthCodedStringLength(str, encoding) {
    const buf = StringParser.encode(str, encoding);
    const slen = buf.length;
    return Packet.lengthCodedNumberLength(slen) + slen;
  }

  static MockBuffer() {
    if (Packet._mockBuffer) {
      return Packet._mockBuffer;
    }
    const noop = function () {};
    const res = Buffer.alloc(0);
    for (const op in NativeBuffer.prototype) {
      if (typeof res[op] === 'function') {
        res[op] = noop;
      }
    }
    Packet._mockBuffer = res;
    return res;
  }
}

module.exports = Packet;


/***/ },

/***/ 2708
(module, __unused_webpack_exports, __webpack_require__) {



const Packet = __webpack_require__(5777);
const CommandCodes = __webpack_require__(7015);
const StringParser = __webpack_require__(5623);
const CharsetToEncoding = __webpack_require__(3160);

class PrepareStatement {
  constructor(sql, charsetNumber) {
    this.query = sql;
    this.charsetNumber = charsetNumber;
    this.encoding = CharsetToEncoding[charsetNumber];
  }

  toPacket() {
    if (
      StringParser.hasFastUtf8Write &&
      (this.encoding === 'utf8' || this.encoding === 'utf-8')
    ) {
      const length = 5 + Buffer.byteLength(this.query, 'utf8');
      const buffer = Buffer.allocUnsafe(length);
      buffer[4] = CommandCodes.STMT_PREPARE;
      buffer.utf8Write(this.query, 5, length - 5);
      const packet = new Packet(0, buffer, 0, length);
      packet.offset = length;
      return packet;
    }
    const buf = StringParser.encode(this.query, this.encoding);
    const length = 5 + buf.length;
    const buffer = Buffer.allocUnsafe(length);
    const packet = new Packet(0, buffer, 0, length);
    packet.offset = 4;
    packet.writeInt8(CommandCodes.STMT_PREPARE);
    packet.writeBuffer(buf);
    return packet;
  }
}

module.exports = PrepareStatement;


/***/ },

/***/ 5920
(module) {



class PreparedStatementHeader {
  constructor(packet) {
    packet.skip(1); // should be 0
    this.id = packet.readInt32();
    this.fieldCount = packet.readInt16();
    this.parameterCount = packet.readInt16();
    packet.skip(1); // should be 0
    this.warningCount = packet.readInt16();
  }
}

// TODO: toPacket

module.exports = PreparedStatementHeader;


/***/ },

/***/ 9997
(module, __unused_webpack_exports, __webpack_require__) {



const Packet = __webpack_require__(5777);
const CommandCode = __webpack_require__(7015);
const StringParser = __webpack_require__(5623);
const CharsetToEncoding = __webpack_require__(3160);
const ClientConstants = __webpack_require__(3930);
const { toParameter } = __webpack_require__(4275);

const { hasFastUtf8Write } = StringParser;

function toQueryPacket(buffer, headerLength, length) {
  buffer[4] = CommandCode.QUERY;
  if (headerLength === 7) {
    buffer[5] = 0; // parameter_count
    buffer[6] = 1; // parameter_set_count, always 1
  }
  const packet = new Packet(0, buffer, 0, length);
  packet.offset = length;
  return packet;
}

class Query {
  constructor(sql, charsetNumber, attributes, clientFlags) {
    this.query = sql;
    this.charsetNumber = charsetNumber;
    this.encoding = CharsetToEncoding[charsetNumber];
    this.attributes = attributes;
    this.clientFlags = clientFlags || 0;
  }

  toPacket() {
    const useQueryAttributes =
      this.clientFlags & ClientConstants.CLIENT_QUERY_ATTRIBUTES;
    const attributeCount =
      useQueryAttributes && this.attributes
        ? Object.keys(this.attributes).length
        : 0;

    if (attributeCount === 0) {
      // fast path: no attribute values to serialize, so the packet is the
      // header plus the encoded SQL
      const headerLength = useQueryAttributes ? 7 : 5;
      if (
        hasFastUtf8Write &&
        (this.encoding === 'utf8' || this.encoding === 'utf-8')
      ) {
        const length = headerLength + Buffer.byteLength(this.query, 'utf8');
        const buffer = Buffer.allocUnsafe(length);
        buffer.utf8Write(this.query, headerLength, length - headerLength);
        return toQueryPacket(buffer, headerLength, length);
      }
      if (Buffer.isEncoding(this.encoding)) {
        const length =
          headerLength + Buffer.byteLength(this.query, this.encoding);
        const buffer = Buffer.allocUnsafe(length);
        buffer.write(this.query, headerLength, this.encoding);
        return toQueryPacket(buffer, headerLength, length);
      }
      const sqlBuffer = StringParser.encode(this.query, this.encoding);
      const length = headerLength + sqlBuffer.length;
      const buffer = Buffer.allocUnsafe(length);
      sqlBuffer.copy(buffer, headerLength);
      return toQueryPacket(buffer, headerLength, length);
    }

    const names = Object.keys(this.attributes);
    const parameters = new Array(attributeCount);
    const nameBuffers = new Array(attributeCount);

    // packet header, command, parameter count, parameter_set_count (always
    // the single-byte form), null bitmap, new_params_bind_flag, type and
    // unsigned byte per parameter
    let length =
      5 +
      Packet.lengthCodedNumberLength(attributeCount) +
      1 +
      ((attributeCount + 7) >> 3) +
      1 +
      attributeCount * 2;
    for (let i = 0; i < attributeCount; i++) {
      parameters[i] = toParameter(
        this.attributes[names[i]],
        this.encoding,
        'local'
      );
      const name = StringParser.encode(names[i], this.encoding);
      nameBuffers[i] = name;
      length += Packet.lengthCodedNumberLength(name.length) + name.length;
      if (!parameters[i].isNull) {
        length += parameters[i].length;
      }
    }
    const sqlBuffer = StringParser.encode(this.query, this.encoding);
    length += sqlBuffer.length;

    const packet = new Packet(0, Buffer.allocUnsafe(length), 0, length);
    packet.offset = 4;
    packet.writeInt8(CommandCode.QUERY);
    packet.writeLengthCodedNumber(attributeCount);
    packet.writeLengthCodedNumber(1); // parameter_set_count, always 1

    let bitmap = 0;
    let bitValue = 1;
    for (let i = 0; i < attributeCount; i++) {
      if (parameters[i].isNull) {
        bitmap |= bitValue;
      }
      bitValue *= 2;
      if (bitValue === 256) {
        packet.writeInt8(bitmap);
        bitmap = 0;
        bitValue = 1;
      }
    }
    if (bitValue !== 1) {
      packet.writeInt8(bitmap);
    }

    packet.writeInt8(1); // new_params_bind_flag

    for (let i = 0; i < attributeCount; i++) {
      packet.writeInt8(parameters[i].type);
      packet.writeInt8(parameters[i].unsigned ? 0x80 : 0);
      packet.writeLengthCodedBuffer(nameBuffers[i]);
    }

    for (let i = 0; i < attributeCount; i++) {
      if (!parameters[i].isNull) {
        parameters[i].writer.call(
          packet,
          parameters[i].value,
          parameters[i].byteLength
        );
      }
    }

    packet.writeBuffer(sqlBuffer);

    if (packet.offset !== length) {
      throw new Error(
        \`Internal error: COM_QUERY serialized \${packet.offset - 4} bytes, expected \${length - 4}\`
      );
    }
    return packet;
  }
}

module.exports = Query;


/***/ },

/***/ 3216
(module, __unused_webpack_exports, __webpack_require__) {



// http://dev.mysql.com/doc/internals/en/com-register-slave.html
// note that documentation is incorrect, for example command code is actually 0x15 but documented as 0x14

const Packet = __webpack_require__(5777);
const CommandCodes = __webpack_require__(7015);

class RegisterSlave {
  constructor(opts) {
    this.serverId = opts.serverId || 0;
    this.slaveHostname = opts.slaveHostname || '';
    this.slaveUser = opts.slaveUser || '';
    this.slavePassword = opts.slavePassword || '';
    this.slavePort = opts.slavePort || 0;
    this.replicationRank = opts.replicationRank || 0;
    this.masterId = opts.masterId || 0;
  }

  toPacket() {
    const length =
      15 + // TODO: should be ascii?
      Buffer.byteLength(this.slaveHostname, 'utf8') +
      Buffer.byteLength(this.slaveUser, 'utf8') +
      Buffer.byteLength(this.slavePassword, 'utf8') +
      3 +
      4;
    const buffer = Buffer.allocUnsafe(length);
    const packet = new Packet(0, buffer, 0, length);
    packet.offset = 4;
    packet.writeInt8(CommandCodes.REGISTER_SLAVE);
    packet.writeInt32(this.serverId);
    packet.writeInt8(Buffer.byteLength(this.slaveHostname, 'utf8'));
    packet.writeString(this.slaveHostname);
    packet.writeInt8(Buffer.byteLength(this.slaveUser, 'utf8'));
    packet.writeString(this.slaveUser);
    packet.writeInt8(Buffer.byteLength(this.slavePassword, 'utf8'));
    packet.writeString(this.slavePassword);
    packet.writeInt16(this.slavePort);
    packet.writeInt32(this.replicationRank);
    packet.writeInt32(this.masterId);
    return packet;
  }
}

module.exports = RegisterSlave;


/***/ },

/***/ 4097
(module, __unused_webpack_exports, __webpack_require__) {



const Packet = __webpack_require__(5777);
const CommandCodes = __webpack_require__(7015);

class ResetConnection {
  constructor() {}

  toPacket() {
    const packet = new Packet(0, Buffer.alloc(5), 0, 5);
    packet.offset = 4;
    packet.writeInt8(CommandCodes.RESET_CONNECTION);
    return packet;
  }
}

module.exports = ResetConnection;


/***/ },

/***/ 2564
(module, __unused_webpack_exports, __webpack_require__) {



// TODO: rename to OK packet
// https://dev.mysql.com/doc/internals/en/packet-OK_Packet.html

const Packet = __webpack_require__(5777);
const ClientConstants = __webpack_require__(3930);
const ServerSatusFlags = __webpack_require__(2127);

const EncodingToCharset = __webpack_require__(1351);
const sessionInfoTypes = __webpack_require__(3485);

class ResultSetHeader {
  constructor(packet, connection) {
    const bigNumberStrings = connection.config.bigNumberStrings;
    const encoding = connection.serverEncoding;
    const flags = connection._handshakePacket.capabilityFlags;
    const isSet = function (flag) {
      return flags & ClientConstants[flag];
    };
    if (packet.buffer[packet.offset] !== 0) {
      this.fieldCount = packet.readLengthCodedNumber();
      if (this.fieldCount === null) {
        this.infileName = packet.readString(undefined, encoding);
      }
      return;
    }
    this.fieldCount = packet.readInt8(); // skip OK byte
    this.affectedRows = packet.readLengthCodedNumber(bigNumberStrings);
    this.insertId = packet.readLengthCodedNumberSigned(bigNumberStrings);
    this.info = '';
    if (isSet('PROTOCOL_41')) {
      this.serverStatus = packet.readInt16();
      this.warningStatus = packet.readInt16();
    } else if (isSet('TRANSACTIONS')) {
      this.serverStatus = packet.readInt16();
    }
    let stateChanges = null;
    if (isSet('SESSION_TRACK') && packet.offset < packet.end) {
      this.info = packet.readLengthCodedString(encoding);

      if (this.serverStatus & ServerSatusFlags.SERVER_SESSION_STATE_CHANGED) {
        // session change info record - see
        // https://dev.mysql.com/doc/internals/en/packet-OK_Packet.html#cs-sect-packet-ok-sessioninfo
        let len =
          packet.offset < packet.end ? packet.readLengthCodedNumber() : 0;
        const end = packet.offset + len;
        let type, key, stateEnd;
        if (len > 0) {
          stateChanges = {
            systemVariables: {},
            schema: null,
            gtids: [],
            trackStateChange: null,
          };
        }
        while (packet.offset < end) {
          type = packet.readInt8();
          len = packet.readLengthCodedNumber();
          stateEnd = packet.offset + len;
          if (type === sessionInfoTypes.SYSTEM_VARIABLES) {
            key = packet.readLengthCodedString(encoding);
            const val = packet.readLengthCodedString(encoding);
            stateChanges.systemVariables[key] = val;
            if (key === 'character_set_client') {
              const charsetNumber = EncodingToCharset[val];
              // TODO - better api for driver users to handle unknown encodings?
              // maybe custom converter in the config?
              // For now just ignore character_set_client command if there is
              // no known mapping from reported encoding to a charset code
              if (typeof charsetNumber !== 'undefined') {
                connection.config.charsetNumber = charsetNumber;
              }
            }
          } else if (type === sessionInfoTypes.SCHEMA) {
            key = packet.readLengthCodedString(encoding);
            stateChanges.schema = key;
          } else if (type === sessionInfoTypes.STATE_CHANGE) {
            stateChanges.trackStateChange =
              packet.readLengthCodedString(encoding);
          } else if (type === sessionInfoTypes.STATE_GTIDS) {
            // TODO: find if the first length coded string means anything. Usually comes as empty
            const _unknownString = packet.readLengthCodedString(encoding);
            const gtid = packet.readLengthCodedString(encoding);
            stateChanges.gtids = gtid.split(',');
          } else {
            // unsupported session track type. For now just ignore
          }
          packet.offset = stateEnd;
        }
      }
    } else {
      this.info = packet.readString(undefined, encoding);
    }
    if (stateChanges) {
      this.stateChanges = stateChanges;
    }
    const m = this.info.match(/\\schanged:\\s*(\\d+)/i);
    if (m !== null) {
      this.changedRows = parseInt(m[1], 10);
    } else {
      this.changedRows = 0;
    }
  }

  // TODO: should be consistent instance member, but it's just easier here to have just function
  static toPacket(fieldCount, insertId) {
    let length = 4 + Packet.lengthCodedNumberLength(fieldCount);
    if (typeof insertId !== 'undefined') {
      length += Packet.lengthCodedNumberLength(insertId);
    }
    const buffer = Buffer.allocUnsafe(length);
    const packet = new Packet(0, buffer, 0, length);
    packet.offset = 4;
    packet.writeLengthCodedNumber(fieldCount);
    if (typeof insertId !== 'undefined') {
      packet.writeLengthCodedNumber(insertId);
    }
    return packet;
  }
}

module.exports = ResultSetHeader;


/***/ },

/***/ 7445
(module, __unused_webpack_exports, __webpack_require__) {



const ClientConstants = __webpack_require__(3930);
const Packet = __webpack_require__(5777);

class SSLRequest {
  constructor(flags, charset, mariadbExtendedClientFlags) {
    this.clientFlags = flags | ClientConstants.SSL;
    this.charset = charset;
    this.mariadbExtendedClientFlags = mariadbExtendedClientFlags || 0;
  }

  toPacket() {
    const length = 36;
    const buffer = Buffer.allocUnsafe(length);
    const packet = new Packet(0, buffer, 0, length);
    buffer.fill(0);
    packet.offset = 4;
    packet.writeInt32(this.clientFlags);
    packet.writeInt32(0); // max packet size. todo: move to config
    packet.writeInt8(this.charset);
    // the last 4 of the 23 reserved bytes carry the MariaDB extended client
    // capabilities (zero when not negotiated, i.e. plain filler)
    packet.skip(19);
    packet.writeInt32(this.mariadbExtendedClientFlags);
    return packet;
  }
}

module.exports = SSLRequest;


/***/ },

/***/ 7549
(module, __unused_webpack_exports, __webpack_require__) {



const Packet = __webpack_require__(5777);

class TextRow {
  constructor(columns) {
    this.columns = columns || [];
  }

  static fromPacket(packet) {
    // packet.reset(); // set offset to starting point?
    const columns = [];
    while (packet.haveMoreData()) {
      columns.push(packet.readLengthCodedString());
    }
    return new TextRow(columns);
  }

  static toPacket(columns, encoding) {
    const sequenceId = 0; // TODO remove, this is calculated now in connection
    let length = 0;
    columns.forEach((val) => {
      if (val === null || typeof val === 'undefined') {
        ++length;
        return;
      }
      length += Packet.lengthCodedStringLength(val.toString(10), encoding);
    });
    const buffer = Buffer.allocUnsafe(length + 4);
    const packet = new Packet(sequenceId, buffer, 0, length + 4);
    packet.offset = 4;
    columns.forEach((val) => {
      if (val === null) {
        packet.writeNull();
        return;
      }
      if (typeof val === 'undefined') {
        packet.writeInt8(0);
        return;
      }
      packet.writeLengthCodedString(val.toString(10), encoding);
    });
    return packet;
  }
}

module.exports = TextRow;


/***/ },

/***/ 9621
(module, __unused_webpack_exports, __webpack_require__) {



const Types = __webpack_require__(80);
const Packet = __webpack_require__(5777);
const StringParser = __webpack_require__(5623);

const INTEGER_BYTES = {
  [Types.TINY]: 1,
  [Types.SHORT]: 2,
  [Types.YEAR]: 2,
  [Types.INT24]: 4,
  [Types.LONG]: 4,
  [Types.LONGLONG]: 8,
};

const TEMPORAL = [Types.DATE, Types.DATETIME, Types.TIMESTAMP];

// MySQL rejects INT24, YEAR, ENUM, SET, BIT and GEOMETRY as bind types, and
// MariaDB rejects JSON and VECTOR. Each is transmitted as the narrowest type
// both servers accept, which carries the same value.
const WIRE_TYPE = {
  [Types.INT24]: Types.LONG,
  [Types.YEAR]: Types.SHORT,
  [Types.ENUM]: Types.STRING,
  [Types.SET]: Types.STRING,
  [Types.VECTOR]: Types.BLOB,
};

// Only these may be adopted from a server hint: they are valid bind types on
// every server, so upgrading can never make a working statement fail.
const HINT_UPGRADABLE = new Set([
  Types.TINY,
  Types.SHORT,
  Types.LONG,
  Types.LONGLONG,
]);

const LENGTH_CODED = [
  Types.DECIMAL,
  Types.NEWDECIMAL,
  Types.VARCHAR,
  Types.VAR_STRING,
  Types.STRING,
  Types.ENUM,
  Types.SET,
  Types.JSON,
  Types.VECTOR,
  Types.TINY_BLOB,
  Types.MEDIUM_BLOB,
  Types.LONG_BLOB,
  Types.BLOB,
];

function writeNothing() {}

const TIME_PATTERN = /^(-)?(\\d+):([0-5]?\\d):([0-5]?\\d)(?:\\.(\\d{1,6}))?$/;

class TypedParameter {
  constructor(type, value, unsigned) {
    this.type = type;
    this.value = value;
    this.unsigned = unsigned;
  }

  [Symbol.for('nodejs.util.inspect.custom')]() {
    const name = Types[this.type] || \`0x\${this.type.toString(16)}\`;
    return \`\${name}\${this.unsigned ? ' UNSIGNED' : ''}(\${String(this.value)})\`;
  }
}

function toInteger(value, name) {
  switch (typeof value) {
    case 'bigint':
      return value;
    case 'boolean':
      return value ? 1n : 0n;
    case 'number':
      if (!Number.isInteger(value)) {
        throw new TypeError(
          \`\${name} parameter must be an integer, got \${value}\`
        );
      }
      if (!Number.isSafeInteger(value)) {
        throw new RangeError(
          \`\${name} parameter \${value} exceeds Number.MAX_SAFE_INTEGER and has already lost precision; pass a string or BigInt instead\`
        );
      }
      return BigInt(value);
    case 'string':
      try {
        return BigInt(value.trim());
      } catch (cause) {
        throw new TypeError(
          \`\${name} parameter must be an integer, got \${JSON.stringify(value)}\`,
          { cause }
        );
      }
    default:
      throw new TypeError(
        \`\${name} parameter must be an integer, got \${typeof value}\`
      );
  }
}

function checkedInteger(value, type, bytes, unsigned) {
  const name = Types[type];
  const bits = BigInt(bytes * 8);
  const n = toInteger(value, name);
  const min = unsigned ? 0n : -(1n << (bits - 1n));
  const max = unsigned ? (1n << bits) - 1n : (1n << (bits - 1n)) - 1n;
  if (n < min || n > max) {
    throw new RangeError(
      \`\${name}\${unsigned ? ' UNSIGNED' : ''} parameter out of range: \${n} is not within \${min}..\${max}\`
    );
  }
  return n;
}

// The server reports an integer type whenever it knows a placeholder holds one,
// and MySQL rejects a DOUBLE in some of those positions. Adopting the hint is
// only safe when the value is already an integer that fits, so every other case
// returns null and keeps the type inferred from JavaScript.
function integerHint(value, type, unsigned) {
  const bytes = INTEGER_BYTES[type];
  if (!bytes || !HINT_UPGRADABLE.has(type)) {
    return null;
  }
  let n;
  if (typeof value === 'bigint') {
    n = value;
  } else if (typeof value === 'boolean') {
    n = value ? 1n : 0n;
  } else if (typeof value === 'number' && Number.isSafeInteger(value)) {
    n = BigInt(value);
  } else {
    return null;
  }
  const bits = BigInt(bytes * 8);
  const min = unsigned ? 0n : -(1n << (bits - 1n));
  const max = unsigned ? (1n << bits) - 1n : (1n << (bits - 1n)) - 1n;
  if (n < min || n > max) {
    return null;
  }
  return new TypedParameter(type, n, unsigned);
}

function wireType(type, jsonAsString) {
  if (type === Types.JSON && jsonAsString) {
    return Types.VAR_STRING;
  }
  return WIRE_TYPE[type] || type;
}

function integerEncoder(type, bytes) {
  return (value, unsigned) => {
    const wire = BigInt.asUintN(
      bytes * 8,
      checkedInteger(value, type, bytes, unsigned)
    );
    return {
      value: bytes === 8 ? wire : Number(wire),
      length: bytes,
      writer(v) {
        this.writeUIntLE(v, bytes);
      },
    };
  };
}

function toDate(value, name) {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) {
    throw new TypeError(
      \`\${name} parameter must be a valid Date, got \${String(value)}\`
    );
  }
  return date;
}

function temporalEncoder(type, timezone) {
  const name = Types[type];
  return (value) => ({
    value: toDate(value, name),
    length: 12,
    writer(v) {
      this.writeDate(v, timezone);
    },
  });
}

function toTimeParts(value) {
  if (typeof value === 'number') {
    const negative = value < 0;
    let rest = Math.abs(value);
    const microseconds = Math.round((rest % 1000) * 1000);
    rest = Math.floor(rest / 1000);
    const seconds = rest % 60;
    const minutes = Math.floor(rest / 60) % 60;
    const totalHours = Math.floor(rest / 3600);
    return {
      negative,
      days: Math.floor(totalHours / 24),
      hours: totalHours % 24,
      minutes,
      seconds,
      microseconds,
    };
  }
  const match = TIME_PATTERN.exec(String(value));
  if (!match) {
    throw new TypeError(
      \`TIME parameter must be 'HH:MM:SS[.ffffff]' or milliseconds, got \${JSON.stringify(String(value))}\`
    );
  }
  const hours = Number(match[2]);
  return {
    negative: Boolean(match[1]),
    days: Math.floor(hours / 24),
    hours: hours % 24,
    minutes: Number(match[3]),
    seconds: Number(match[4]),
    microseconds: match[5] ? Number(match[5].padEnd(6, '0')) : 0,
  };
}

function timeEncoder() {
  return (value) => {
    const parts = toTimeParts(value);
    return {
      value: parts,
      length: Packet.timeLength(parts),
      writer(v) {
        this.writeTime(v);
      },
    };
  };
}

function lengthCodedEncoder(encoding) {
  return (value) => {
    if (!Buffer.isBuffer(value)) {
      const string = typeof value === 'string' ? value : String(value);
      if (
        StringParser.hasFastUtf8Write &&
        (encoding === 'utf8' || encoding === 'utf-8')
      ) {
        const byteLength = Buffer.byteLength(string, 'utf8');
        return {
          value: string,
          length: Packet.lengthCodedNumberLength(byteLength) + byteLength,
          byteLength,
          writer: Packet.prototype.writeLengthCodedUtf8String,
        };
      }
      value = StringParser.encode(string, encoding);
    }
    return {
      value,
      length: Packet.lengthCodedNumberLength(value.length) + value.length,
      writer: Packet.prototype.writeLengthCodedBuffer,
    };
  };
}

function jsonEncoder(encoding) {
  const encodeText = lengthCodedEncoder(encoding);
  return (value) =>
    encodeText(
      typeof value === 'string' || Buffer.isBuffer(value)
        ? value
        : JSON.stringify(value)
    );
}

function encoderFor(type, encoding, timezone) {
  if (INTEGER_BYTES[type]) {
    return integerEncoder(type, INTEGER_BYTES[type]);
  }
  if (type === Types.DOUBLE) {
    return (value) => ({
      value: Number(value),
      length: 8,
      writer: Packet.prototype.writeDouble,
    });
  }
  if (type === Types.FLOAT) {
    return (value) => ({
      value: Number(value),
      length: 4,
      writer: Packet.prototype.writeFloat,
    });
  }
  if (TEMPORAL.includes(type)) {
    return temporalEncoder(type, timezone);
  }
  if (type === Types.TIME) {
    return timeEncoder();
  }
  if (type === Types.JSON) {
    return jsonEncoder(encoding);
  }
  if (LENGTH_CODED.includes(type)) {
    return lengthCodedEncoder(encoding);
  }
  throw new TypeError(
    \`No parameter encoder for MySQL type 0x\${type.toString(16)}\`
  );
}

function encodeTypedParameter(parameter, encoding, timezone, jsonAsString) {
  if (parameter.value === null || parameter.type === Types.NULL) {
    return {
      value: '',
      type: wireType(parameter.type, jsonAsString),
      length: 0,
      writer: writeNothing,
      unsigned: parameter.unsigned,
      isNull: true,
    };
  }
  const encoded = encoderFor(
    parameter.type,
    encoding,
    timezone
  )(parameter.value, parameter.unsigned);
  return {
    ...encoded,
    type: wireType(parameter.type, jsonAsString),
    unsigned: parameter.unsigned,
  };
}

const ALIASES = {
  MEDIUMTEXT: 'MEDIUM_BLOB',
  LONGTEXT: 'LONG_BLOB',
  TINYINT: 'TINY',
  SMALLINT: 'SHORT',
  MEDIUMINT: 'INT24',
  INT: 'LONG',
  INTEGER: 'LONG',
  BIGINT: 'LONGLONG',
  REAL: 'DOUBLE',
  CHAR: 'STRING',
  VARBINARY: 'VAR_STRING',
  BINARY: 'STRING',
  TEXT: 'BLOB',
};

const SUPPORTED = [
  ...Object.keys(INTEGER_BYTES),
  Types.FLOAT,
  Types.DOUBLE,
  Types.TIME,
  ...TEMPORAL,
  ...LENGTH_CODED,
].map(Number);

const types = Object.create(null);

for (const type of SUPPORTED) {
  const name = Types[type];
  const bytes = INTEGER_BYTES[type];
  const build = bytes
    ? (value, unsigned) =>
        new TypedParameter(
          type,
          value === null ? null : checkedInteger(value, type, bytes, unsigned),
          unsigned
        )
    : (value, unsigned) => new TypedParameter(type, value, unsigned);
  const factory = (value) => build(value, false);
  if (bytes) {
    factory.unsigned = (value) => build(value, true);
  }
  types[name] = factory;
}

types.NULL = () => new TypedParameter(Types.NULL, null, false);

for (const [alias, target] of Object.entries(ALIASES)) {
  if (types[target] && !types[alias]) {
    types[alias] = types[target];
  }
}

module.exports = {
  TypedParameter,
  encodeTypedParameter,
  integerHint,
  g: types,
};


/***/ },

/***/ 4137
(module, __unused_webpack_exports, __webpack_require__) {



const FieldFlags = __webpack_require__(4637);
const Charsets = __webpack_require__(660);
const Types = __webpack_require__(80);
const helpers = __webpack_require__(2030);
const genFunc = __webpack_require__(783);
const parserCache = __webpack_require__(7432);
const typeNames = [];
for (const t in Types) {
  typeNames[Types[t]] = t;
}

function readCodeFor(field, config, options, fieldNum) {
  const supportBigNumbers = Boolean(
    options.supportBigNumbers || config.supportBigNumbers
  );
  const bigNumberStrings = Boolean(
    options.bigNumberStrings || config.bigNumberStrings
  );
  const timezone = options.timezone || config.timezone;
  const dateStrings = options.dateStrings || config.dateStrings;
  const unsigned = field.flags & FieldFlags.UNSIGNED;
  // MariaDB sends JSON values as LONGTEXT; the JSON type is only visible in
  // the extended metadata (MARIADB_CLIENT_EXTENDED_METADATA capability)
  if (field.extendedFormat === 'json') {
    return config.jsonStrings
      ? \`packet.readLengthCodedString(fields[\${fieldNum}].encoding)\`
      : \`packet.parseJson(fields[\${fieldNum}].encoding, \${supportBigNumbers});\`;
  }
  switch (field.columnType) {
    case Types.TINY:
      return unsigned ? 'packet.readInt8();' : 'packet.readSInt8();';
    case Types.SHORT:
      return unsigned ? 'packet.readInt16();' : 'packet.readSInt16();';
    case Types.LONG:
    case Types.INT24: // in binary protocol int24 is encoded in 4 bytes int32
      return unsigned ? 'packet.readInt32();' : 'packet.readSInt32();';
    case Types.YEAR:
      return 'packet.readInt16()';
    case Types.FLOAT:
      return 'packet.readFloat();';
    case Types.DOUBLE:
      return 'packet.readDouble();';
    case Types.NULL:
      return 'null;';
    case Types.DATE:
    case Types.DATETIME:
    case Types.TIMESTAMP:
    case Types.NEWDATE:
      if (helpers.typeMatch(field.columnType, dateStrings, Types)) {
        return \`packet.readDateTimeString(\${parseInt(field.decimals, 10)}, \${null}, \${field.columnType});\`;
      }
      return \`packet.readDateTime(\${helpers.srcEscape(timezone)});\`;
    case Types.TIME:
      return 'packet.readTimeString()';
    case Types.DECIMAL:
    case Types.NEWDECIMAL:
      if (config.decimalNumbers) {
        return 'packet.parseLengthCodedFloat();';
      }
      return 'packet.readLengthCodedString("ascii");';
    case Types.GEOMETRY:
      return 'packet.parseGeometryValue();';
    case Types.VECTOR:
      return 'packet.parseVector()';
    case Types.JSON:
      // Since for JSON columns mysql always returns charset 63 (BINARY),
      // we have to handle it according to JSON specs and use "utf8",
      // see https://github.com/sidorares/node-mysql2/issues/409
      return config.jsonStrings
        ? 'packet.readLengthCodedString("utf8")'
        : \`packet.parseJson("utf8", \${supportBigNumbers});\`;
    case Types.LONGLONG:
      if (!supportBigNumbers) {
        return unsigned
          ? 'packet.readInt64JSNumber();'
          : 'packet.readSInt64JSNumber();';
      }
      if (bigNumberStrings) {
        return unsigned
          ? 'packet.readInt64String();'
          : 'packet.readSInt64String();';
      }
      return unsigned ? 'packet.readInt64();' : 'packet.readSInt64();';

    default:
      if (field.characterSet === Charsets.BINARY) {
        return 'packet.readLengthCodedBuffer();';
      }
      return \`packet.readLengthCodedString(fields[\${fieldNum}].encoding)\`;
  }
}

function compile(fields, options, config) {
  const parserFn = genFunc();
  const nullBitmapLength = Math.floor((fields.length + 7 + 2) / 8);

  function fieldMetadata(field) {
    return {
      type: typeNames[field.columnType],
      extendedTypeName: field.extendedTypeName,
      extendedFormat: field.extendedFormat,
      length: field.columnLength,
      db: field.schema,
      table: field.table,
      name: field.name,
    };
  }

  function wrap(field, packet) {
    return {
      ...fieldMetadata(field),
      string: function (encoding = field.encoding) {
        if (field.columnType === Types.JSON && encoding === field.encoding) {
          // Since for JSON columns mysql always returns charset 63 (BINARY),
          // we have to handle it according to JSON specs and use "utf8",
          // see https://github.com/sidorares/node-mysql2/issues/1661
          console.warn(
            \`typeCast: JSON column "\${field.name}" is interpreted as BINARY by default, recommended to manually set utf8 encoding: \\\`field.string("utf8")\\\`\`
          );
        }

        if (
          [Types.DATETIME, Types.NEWDATE, Types.TIMESTAMP, Types.DATE].includes(
            field.columnType
          )
        ) {
          return packet.readDateTimeString(
            parseInt(field.decimals, 10),
            ' ',
            field.columnType
          );
        }

        if (field.columnType === Types.TINY) {
          const unsigned = field.flags & FieldFlags.UNSIGNED;

          return String(unsigned ? packet.readInt8() : packet.readSInt8());
        }

        if (field.columnType === Types.TIME) {
          return packet.readTimeString();
        }

        return packet.readLengthCodedString(encoding);
      },
      buffer: function () {
        return packet.readLengthCodedBuffer();
      },
      geometry: function () {
        return packet.parseGeometryValue();
      },
    };
  }

  /** A NULL value carries no bytes in the binary row packet, so the accessors return null without reading from it. */
  function wrapNull(field) {
    return {
      ...fieldMetadata(field),
      string: function () {
        return null;
      },
      buffer: function () {
        return null;
      },
      geometry: function () {
        return null;
      },
    };
  }

  parserFn('(function(){');
  parserFn('return class BinaryRow {');
  parserFn('constructor() {');
  parserFn('}');

  parserFn('next(packet, fields, options) {');
  if (options.rowsAsArray) {
    parserFn(\`const result = new Array(\${fields.length});\`);
  } else {
    parserFn('const result = {};');
  }

  // Global typeCast
  if (
    typeof config.typeCast === 'function' &&
    typeof options.typeCast !== 'function'
  ) {
    options.typeCast = config.typeCast;
  }

  parserFn('packet.readInt8();'); // status byte
  for (let i = 0; i < nullBitmapLength; ++i) {
    parserFn(\`const nullBitmaskByte\${i} = packet.readInt8();\`);
  }

  let lvalue = '';
  let currentFieldNullBit = 4;
  let nullByteIndex = 0;
  let fieldName = '';
  let tableName = '';

  for (let i = 0; i < fields.length; i++) {
    fieldName = helpers.fieldEscape(fields[i].name);
    // parserFn(\`// \${fieldName}: \${typeNames[fields[i].columnType]}\`);

    if (typeof options.nestTables === 'string') {
      lvalue = \`result[\${helpers.fieldEscape(fields[i].table + options.nestTables + fields[i].name)}]\`;
    } else if (options.nestTables === true) {
      tableName = helpers.fieldEscape(fields[i].table);

      parserFn(\`if (!result[\${tableName}]) result[\${tableName}] = {};\`);
      lvalue = \`result[\${tableName}][\${fieldName}]\`;
    } else if (options.rowsAsArray) {
      lvalue = \`result[\${i.toString(10)}]\`;
    } else {
      lvalue = \`result[\${fieldName}]\`;
    }

    parserFn(\`if (nullBitmaskByte\${nullByteIndex} & \${currentFieldNullBit}) {\`);
    if (typeof options.typeCast === 'function') {
      const nullWrapperVar = \`nullWrapper\${i}\`;
      parserFn(\`const \${nullWrapperVar} = wrapNull(fields[\${i}]);\`);
      parserFn(
        \`\${lvalue} = options.typeCast(\${nullWrapperVar}, function() { return null; });\`
      );
    } else {
      parserFn(\`\${lvalue} = null;\`);
    }
    parserFn('} else {');

    if (options.typeCast === false) {
      parserFn(\`\${lvalue} = packet.readLengthCodedBuffer();\`);
    } else {
      const readCode = readCodeFor(fields[i], config, options, i);

      if (typeof options.typeCast === 'function') {
        const fieldWrapperVar = \`fieldWrapper\${i}\`;
        parserFn(\`const \${fieldWrapperVar} = wrap(fields[\${i}], packet);\`);
        parserFn(
          \`\${lvalue} = options.typeCast(\${fieldWrapperVar}, function() { return \${readCode} });\`
        );
      } else {
        parserFn(\`\${lvalue} = \${readCode};\`);
      }
    }
    parserFn('}');

    currentFieldNullBit *= 2;
    if (currentFieldNullBit === 0x100) {
      currentFieldNullBit = 1;
      nullByteIndex++;
    }
  }

  parserFn('return result;');
  parserFn('}');
  parserFn('};')('})()');

  if (config.debug) {
    helpers.printDebugWithCode(
      'Compiled binary protocol row parser',
      parserFn.toString()
    );
  }
  return parserFn.toFunction({ wrap, wrapNull });
}

function getBinaryParser(fields, options, config) {
  return parserCache.getParser('binary', fields, options, config, compile);
}

module.exports = getBinaryParser;


/***/ },

/***/ 7432
(module, __unused_webpack_exports, __webpack_require__) {



const { createLRU } = __webpack_require__(7438);

const parserCache = createLRU({
  max: 15000,
});

// the fixed-size options head keeps JSON.stringify (cheap for a flat array,
// and it normalizes exotic values the same way as before); the per-field part
// is built by hand with length-prefixed strings, so no delimiter collision is
// possible and no throwaway nested arrays are allocated per query
function appendString(key, value) {
  if (value === undefined || value === null) {
    return \`\${key}u/\`;
  }
  return \`\${key}\${value.length}#\${value}/\`;
}

function keyFromFields(type, fields, options, config) {
  let key = JSON.stringify([
    type,
    typeof options.nestTables,
    options.nestTables,
    Boolean(options.rowsAsArray),
    Boolean(options.supportBigNumbers || config.supportBigNumbers),
    Boolean(options.bigNumberStrings || config.bigNumberStrings),
    typeof options.typeCast === 'boolean'
      ? options.typeCast
      : typeof options.typeCast,
    options.timezone || config.timezone,
    Boolean(options.decimalNumbers),
    options.dateStrings,
    Boolean(config.jsonStrings),
  ]);

  for (let i = 0; i < fields.length; ++i) {
    const field = fields[i];
    key = appendString(key, field.name);
    key += \`\${field.columnType}/\${field.length}/\`;
    key = appendString(key, field.schema);
    key = appendString(key, field.table);
    key += \`\${field.flags}/\${field.characterSet}/\`;
    key = appendString(key, field.extendedTypeName);
    key = appendString(key, field.extendedFormat);
  }

  return key;
}

function getParser(type, fields, options, config, compiler) {
  const key = keyFromFields(type, fields, options, config);
  let parser = parserCache.get(key);

  if (parser) {
    return parser;
  }

  parser = compiler(fields, options, config);
  parserCache.set(key, parser);
  return parser;
}

function setMaxCache(max) {
  parserCache.resize(max);
}

function clearCache() {
  parserCache.clear();
}

module.exports = {
  getParser: getParser,
  setMaxCache: setMaxCache,
  clearCache: clearCache,
  ...(/* unused pure expression */ null && (keyFromFields)),
};


/***/ },

/***/ 3918
(module, __unused_webpack_exports, __webpack_require__) {



const FieldFlags = __webpack_require__(4637);
const Charsets = __webpack_require__(660);
const Types = __webpack_require__(80);
const helpers = __webpack_require__(2030);

const typeNames = [];
for (const t in Types) {
  typeNames[Types[t]] = t;
}

function getBinaryParser(fields, _options, config) {
  function readCode(field, config, options, fieldNum, packet) {
    const supportBigNumbers = Boolean(
      options.supportBigNumbers || config.supportBigNumbers
    );
    const bigNumberStrings = Boolean(
      options.bigNumberStrings || config.bigNumberStrings
    );
    const timezone = options.timezone || config.timezone;
    const dateStrings = options.dateStrings || config.dateStrings;
    const unsigned = field.flags & FieldFlags.UNSIGNED;

    // MariaDB sends JSON values as LONGTEXT; the JSON type is only visible in
    // the extended metadata (MARIADB_CLIENT_EXTENDED_METADATA capability)
    if (field.extendedFormat === 'json') {
      return config.jsonStrings
        ? packet.readLengthCodedString(field.encoding)
        : packet.parseJson(field.encoding, supportBigNumbers);
    }

    switch (field.columnType) {
      case Types.TINY:
        return unsigned ? packet.readInt8() : packet.readSInt8();
      case Types.SHORT:
        return unsigned ? packet.readInt16() : packet.readSInt16();
      case Types.LONG:
      case Types.INT24: // in binary protocol int24 is encoded in 4 bytes int32
        return unsigned ? packet.readInt32() : packet.readSInt32();
      case Types.YEAR:
        return packet.readInt16();
      case Types.FLOAT:
        return packet.readFloat();
      case Types.DOUBLE:
        return packet.readDouble();
      case Types.NULL:
        return null;
      case Types.DATE:
      case Types.DATETIME:
      case Types.TIMESTAMP:
      case Types.NEWDATE:
        return helpers.typeMatch(field.columnType, dateStrings, Types)
          ? packet.readDateTimeString(
              parseInt(field.decimals, 10),
              null,
              field.columnType
            )
          : packet.readDateTime(timezone);
      case Types.TIME:
        return packet.readTimeString();
      case Types.DECIMAL:
      case Types.NEWDECIMAL:
        return config.decimalNumbers
          ? packet.parseLengthCodedFloat()
          : packet.readLengthCodedString('ascii');
      case Types.GEOMETRY:
        return packet.parseGeometryValue();
      case Types.VECTOR:
        return packet.parseVector();
      case Types.JSON:
        // Since for JSON columns mysql always returns charset 63 (BINARY),
        // we have to handle it according to JSON specs and use "utf8",
        // see https://github.com/sidorares/node-mysql2/issues/409
        return config.jsonStrings
          ? packet.readLengthCodedString('utf8')
          : packet.parseJson('utf8', supportBigNumbers);
      case Types.LONGLONG:
        if (!supportBigNumbers)
          return unsigned
            ? packet.readInt64JSNumber()
            : packet.readSInt64JSNumber();
        return bigNumberStrings
          ? unsigned
            ? packet.readInt64String()
            : packet.readSInt64String()
          : unsigned
            ? packet.readInt64()
            : packet.readSInt64();
      default:
        return field.characterSet === Charsets.BINARY
          ? packet.readLengthCodedBuffer()
          : packet.readLengthCodedString(fields[fieldNum].encoding);
    }
  }

  /** A NULL value carries no bytes in the binary row packet, so the accessors return null without reading from it. */
  function wrapNull(field) {
    return {
      type: typeNames[field.columnType],
      extendedTypeName: field.extendedTypeName,
      extendedFormat: field.extendedFormat,
      length: field.columnLength,
      db: field.schema,
      table: field.table,
      name: field.name,
      string: function () {
        return null;
      },
      buffer: function () {
        return null;
      },
      geometry: function () {
        return null;
      },
    };
  }

  return class BinaryRow {
    constructor() {}

    next(packet, fields, options) {
      packet.readInt8(); // status byte

      const nullBitmapLength = Math.floor((fields.length + 7 + 2) / 8);
      const nullBitmaskBytes = new Array(nullBitmapLength);

      for (let i = 0; i < nullBitmapLength; i++) {
        nullBitmaskBytes[i] = packet.readInt8();
      }

      const result = options.rowsAsArray ? new Array(fields.length) : {};
      let currentFieldNullBit = 4;
      let nullByteIndex = 0;

      for (let i = 0; i < fields.length; i++) {
        const field = fields[i];
        const typeCast =
          options.typeCast !== undefined ? options.typeCast : config.typeCast;

        let value;
        if (nullBitmaskBytes[nullByteIndex] & currentFieldNullBit) {
          value =
            typeof typeCast === 'function'
              ? typeCast(wrapNull(field), () => null)
              : null;
        } else if (options.typeCast === false) {
          value = packet.readLengthCodedBuffer();
        } else {
          const next = () => readCode(field, config, options, i, packet);
          value =
            typeof typeCast === 'function'
              ? typeCast(
                  {
                    type: typeNames[field.columnType],
                    extendedTypeName: field.extendedTypeName,
                    extendedFormat: field.extendedFormat,
                    length: field.columnLength,
                    db: field.schema,
                    table: field.table,
                    name: field.name,
                    string: function (encoding = field.encoding) {
                      if (
                        field.columnType === Types.JSON &&
                        encoding === field.encoding
                      ) {
                        // Since for JSON columns mysql always returns charset 63 (BINARY),
                        // we have to handle it according to JSON specs and use "utf8",
                        // see https://github.com/sidorares/node-mysql2/issues/1661
                        console.warn(
                          \`typeCast: JSON column "\${field.name}" is interpreted as BINARY by default, recommended to manually set utf8 encoding: \\\`field.string("utf8")\\\`\`
                        );
                      }

                      if (
                        [
                          Types.DATETIME,
                          Types.NEWDATE,
                          Types.TIMESTAMP,
                          Types.DATE,
                        ].includes(field.columnType)
                      ) {
                        return packet.readDateTimeString(
                          parseInt(field.decimals, 10),
                          ' ',
                          field.columnType
                        );
                      }

                      if (field.columnType === Types.TINY) {
                        const unsigned = field.flags & FieldFlags.UNSIGNED;

                        return String(
                          unsigned ? packet.readInt8() : packet.readSInt8()
                        );
                      }

                      if (field.columnType === Types.TIME) {
                        return packet.readTimeString();
                      }

                      return packet.readLengthCodedString(encoding);
                    },
                    buffer: function () {
                      return packet.readLengthCodedBuffer();
                    },
                    geometry: function () {
                      return packet.parseGeometryValue();
                    },
                  },
                  next
                )
              : next();
        }

        if (options.rowsAsArray) {
          result[i] = value;
        } else if (typeof options.nestTables === 'string') {
          const key = helpers.fieldEscape(
            field.table + options.nestTables + field.name,
            false
          );
          result[key] = value;
        } else if (options.nestTables === true) {
          const tableName = helpers.fieldEscape(field.table, false);
          if (!result[tableName]) {
            result[tableName] = {};
          }
          const fieldName = helpers.fieldEscape(field.name, false);
          result[tableName][fieldName] = value;
        } else {
          const key = helpers.fieldEscape(field.name, false);
          result[key] = value;
        }

        currentFieldNullBit *= 2;
        if (currentFieldNullBit === 0x100) {
          currentFieldNullBit = 1;
          nullByteIndex++;
        }
      }

      return result;
    }
  };
}

module.exports = getBinaryParser;


/***/ },

/***/ 1624
(module, __unused_webpack_exports, __webpack_require__) {



const Types = __webpack_require__(80);
const Charsets = __webpack_require__(660);
const helpers = __webpack_require__(2030);

const typeNames = [];
for (const t in Types) {
  typeNames[Types[t]] = t;
}

function readField({
  packet,
  field,
  type,
  charset,
  encoding,
  config,
  options,
}) {
  const supportBigNumbers = Boolean(
    options.supportBigNumbers || config.supportBigNumbers
  );
  const bigNumberStrings = Boolean(
    options.bigNumberStrings || config.bigNumberStrings
  );
  const timezone = options.timezone || config.timezone;
  const dateStrings = options.dateStrings || config.dateStrings;

  // MariaDB sends JSON values as LONGTEXT; the JSON type is only visible in
  // the extended metadata (MARIADB_CLIENT_EXTENDED_METADATA capability)
  if (field.extendedFormat === 'json') {
    return config.jsonStrings
      ? packet.readLengthCodedString(encoding)
      : packet.parseJson(encoding, supportBigNumbers);
  }

  switch (type) {
    case Types.TINY:
    case Types.SHORT:
    case Types.LONG:
    case Types.INT24:
    case Types.YEAR:
      return packet.parseLengthCodedIntNoBigCheck();
    case Types.LONGLONG:
      if (supportBigNumbers && bigNumberStrings) {
        return packet.parseLengthCodedIntString();
      }
      return packet.parseLengthCodedInt(supportBigNumbers);
    case Types.FLOAT:
    case Types.DOUBLE:
      return packet.parseLengthCodedFloat();
    case Types.NULL:
    case Types.DECIMAL:
    case Types.NEWDECIMAL:
      if (config.decimalNumbers) {
        return packet.parseLengthCodedFloat();
      }
      return packet.readLengthCodedString('ascii');
    case Types.DATE:
      if (helpers.typeMatch(type, dateStrings, Types)) {
        return packet.readLengthCodedString('ascii');
      }
      return packet.parseDate(timezone);
    case Types.DATETIME:
    case Types.TIMESTAMP:
      if (helpers.typeMatch(type, dateStrings, Types)) {
        return packet.readLengthCodedString('ascii');
      }
      return packet.parseDateTime(timezone);
    case Types.TIME:
      return packet.readLengthCodedString('ascii');
    case Types.GEOMETRY:
      return packet.parseGeometryValue();
    case Types.VECTOR:
      return packet.parseVector();
    case Types.JSON:
      // Since for JSON columns mysql always returns charset 63 (BINARY),
      // we have to handle it according to JSON specs and use "utf8",
      // see https://github.com/sidorares/node-mysql2/issues/409
      return config.jsonStrings
        ? packet.readLengthCodedString('utf8')
        : packet.parseJson('utf8', supportBigNumbers);
    default:
      if (charset === Charsets.BINARY) {
        return packet.readLengthCodedBuffer();
      }
      return packet.readLengthCodedString(encoding);
  }
}

function createTypecastField(field, packet) {
  return {
    type: typeNames[field.columnType],
    extendedTypeName: field.extendedTypeName,
    extendedFormat: field.extendedFormat,
    length: field.columnLength,
    db: field.schema,
    table: field.table,
    name: field.name,
    string: function (encoding = field.encoding) {
      if (field.columnType === Types.JSON && encoding === field.encoding) {
        // Since for JSON columns mysql always returns charset 63 (BINARY),
        // we have to handle it according to JSON specs and use "utf8",
        // see https://github.com/sidorares/node-mysql2/issues/1661
        console.warn(
          \`typeCast: JSON column "\${field.name}" is interpreted as BINARY by default, recommended to manually set utf8 encoding: \\\`field.string("utf8")\\\`\`
        );
      }
      return packet.readLengthCodedString(encoding);
    },
    buffer: function () {
      return packet.readLengthCodedBuffer();
    },
    geometry: function () {
      return packet.parseGeometryValue();
    },
  };
}

function getTextParser(_fields, _options, config) {
  return {
    next(packet, fields, options) {
      const result = options.rowsAsArray ? [] : {};
      for (let i = 0; i < fields.length; i++) {
        const field = fields[i];
        const typeCast = options.typeCast ? options.typeCast : config.typeCast;
        const next = () =>
          readField({
            packet,
            field,
            type: field.columnType,
            encoding: field.encoding,
            charset: field.characterSet,
            config,
            options,
          });

        let value;

        if (options.typeCast === false) {
          value = packet.readLengthCodedBuffer();
        } else if (typeof typeCast === 'function') {
          value = typeCast(createTypecastField(field, packet), next);
        } else {
          value = next();
        }

        if (options.rowsAsArray) {
          result.push(value);
        } else if (typeof options.nestTables === 'string') {
          result[
            \`\${helpers.fieldEscape(field.table, false)}\${options.nestTables}\${helpers.fieldEscape(field.name, false)}\`
          ] = value;
        } else if (options.nestTables) {
          const tableName = helpers.fieldEscape(field.table, false);
          if (!result[tableName]) {
            result[tableName] = {};
          }
          result[tableName][helpers.fieldEscape(field.name, false)] = value;
        } else {
          result[helpers.fieldEscape(field.name, false)] = value;
        }
      }

      return result;
    },
  };
}

module.exports = getTextParser;


/***/ },

/***/ 5623
(__unused_webpack_module, exports, __webpack_require__) {



const Iconv = __webpack_require__(Object(function webpackMissingModule() { const e = new Error("Cannot find module 'iconv-lite'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const { createLRU } = __webpack_require__(7438);

const decoderCache = createLRU({
  max: 500,
});

// Direct slice methods skip the per-call encoding normalization and dispatch
// inside buffer.toString(); they have been stable Node internals for years
// but fall back gracefully where missing (other runtimes)
const hasFastSlices =
  typeof Buffer.prototype.utf8Slice === 'function' &&
  typeof Buffer.prototype.latin1Slice === 'function' &&
  typeof Buffer.prototype.asciiSlice === 'function';

// utf8Write skips the per-call encoding normalization and dispatch inside
// buffer.write(); same stability story as the slice methods above
exports.hasFastUtf8Write = typeof Buffer.prototype.utf8Write === 'function';

exports.decode = function (buffer, encoding, start, end, options) {
  if (hasFastSlices) {
    // replicate buffer.toString() bounds coercion exactly (the *Slice
    // methods throw on anything out of range): negative, NaN, fractional
    // and oversized offsets all clamp instead of throwing
    const len = buffer.length;
    if (start <= 0) {
      start = 0;
    } else if (start >= len) {
      return '';
    } else {
      start |= 0;
    }
    if (end === undefined || end > len) {
      end = len;
    } else {
      end |= 0;
    }
    if (end <= start) {
      return '';
    }
    switch (encoding) {
      case 'utf8':
      case 'utf-8':
        return buffer.utf8Slice(start, end);
      case 'latin1':
      case 'binary':
        return buffer.latin1Slice(start, end);
      case 'ascii':
        return buffer.asciiSlice(start, end);
      default:
        break;
    }
  }
  if (Buffer.isEncoding(encoding)) {
    return buffer.toString(encoding, start, end);
  }

  // Optimize for common case: encoding="short_string", options=undefined.
  let decoder;
  if (!options) {
    decoder = decoderCache.get(encoding);
    if (!decoder) {
      decoder = Iconv.getDecoder(encoding);
      decoderCache.set(encoding, decoder);
    }
  } else {
    const decoderArgs = { encoding, options };
    const decoderKey = JSON.stringify(decoderArgs);
    decoder = decoderCache.get(decoderKey);
    if (!decoder) {
      decoder = Iconv.getDecoder(decoderArgs.encoding, decoderArgs.options);
      decoderCache.set(decoderKey, decoder);
    }
  }

  const res = decoder.write(buffer.slice(start, end));
  const trail = decoder.end();

  return trail ? res + trail : res;
};

exports.encode = function (string, encoding, options) {
  if (Buffer.isEncoding(encoding)) {
    return Buffer.from(string, encoding);
  }

  const encoder = Iconv.getEncoder(encoding, options || {});

  const res = encoder.write(string);
  const trail = encoder.end();

  return trail && trail.length > 0 ? Buffer.concat([res, trail]) : res;
};


/***/ },

/***/ 6267
(module, __unused_webpack_exports, __webpack_require__) {



const Types = __webpack_require__(80);
const Charsets = __webpack_require__(660);
const helpers = __webpack_require__(2030);
const genFunc = __webpack_require__(783);
const parserCache = __webpack_require__(7432);

const typeNames = [];
for (const t in Types) {
  typeNames[Types[t]] = t;
}

function readCodeFor(field, encodingExpr, config, options) {
  const type = field.columnType;
  const charset = field.characterSet;
  const supportBigNumbers = Boolean(
    options.supportBigNumbers || config.supportBigNumbers
  );
  const bigNumberStrings = Boolean(
    options.bigNumberStrings || config.bigNumberStrings
  );
  const timezone = options.timezone || config.timezone;
  const dateStrings = options.dateStrings || config.dateStrings;

  // MariaDB sends JSON values as LONGTEXT; the JSON type is only visible in
  // the extended metadata (MARIADB_CLIENT_EXTENDED_METADATA capability)
  if (field.extendedFormat === 'json') {
    return config.jsonStrings
      ? \`packet.readLengthCodedString(\${encodingExpr})\`
      : \`packet.parseJson(\${encodingExpr}, \${supportBigNumbers})\`;
  }

  switch (type) {
    case Types.TINY:
    case Types.SHORT:
    case Types.LONG:
    case Types.INT24:
    case Types.YEAR:
      return 'packet.parseLengthCodedIntNoBigCheck()';
    case Types.LONGLONG:
      if (supportBigNumbers && bigNumberStrings) {
        return 'packet.parseLengthCodedIntString()';
      }
      return \`packet.parseLengthCodedInt(\${supportBigNumbers})\`;
    case Types.FLOAT:
    case Types.DOUBLE:
      return 'packet.parseLengthCodedFloat()';
    case Types.NULL:
      return 'packet.readLengthCodedNumber()';
    case Types.DECIMAL:
    case Types.NEWDECIMAL:
      if (config.decimalNumbers) {
        return 'packet.parseLengthCodedFloat()';
      }
      return 'packet.readLengthCodedString("ascii")';
    case Types.DATE:
      if (helpers.typeMatch(type, dateStrings, Types)) {
        return 'packet.readLengthCodedString("ascii")';
      }
      return \`packet.parseDate(\${helpers.srcEscape(timezone)})\`;
    case Types.DATETIME:
    case Types.TIMESTAMP:
      if (helpers.typeMatch(type, dateStrings, Types)) {
        return 'packet.readLengthCodedString("ascii")';
      }
      return \`packet.parseDateTime(\${helpers.srcEscape(timezone)})\`;
    case Types.TIME:
      return 'packet.readLengthCodedString("ascii")';
    case Types.GEOMETRY:
      return 'packet.parseGeometryValue()';
    case Types.VECTOR:
      return 'packet.parseVector()';
    case Types.JSON:
      // Since for JSON columns mysql always returns charset 63 (BINARY),
      // we have to handle it according to JSON specs and use "utf8",
      // see https://github.com/sidorares/node-mysql2/issues/409
      return config.jsonStrings
        ? 'packet.readLengthCodedString("utf8")'
        : \`packet.parseJson("utf8", \${supportBigNumbers})\`;
    default:
      if (charset === Charsets.BINARY) {
        return 'packet.readLengthCodedBuffer()';
      }
      return \`packet.readLengthCodedString(\${encodingExpr})\`;
  }
}

function compile(fields, options, config) {
  // use global typeCast if current query doesn't specify one
  if (
    typeof config.typeCast === 'function' &&
    typeof options.typeCast !== 'function'
  ) {
    options.typeCast = config.typeCast;
  }

  function wrap(field, _this) {
    return {
      type: typeNames[field.columnType],
      extendedTypeName: field.extendedTypeName,
      extendedFormat: field.extendedFormat,
      length: field.columnLength,
      db: field.schema,
      table: field.table,
      name: field.name,
      string: function (encoding = field.encoding) {
        if (field.columnType === Types.JSON && encoding === field.encoding) {
          // Since for JSON columns mysql always returns charset 63 (BINARY),
          // we have to handle it according to JSON specs and use "utf8",
          // see https://github.com/sidorares/node-mysql2/issues/1661
          console.warn(
            \`typeCast: JSON column "\${field.name}" is interpreted as BINARY by default, recommended to manually set utf8 encoding: \\\`field.string("utf8")\\\`\`
          );
        }

        return _this.packet.readLengthCodedString(encoding);
      },
      buffer: function () {
        return _this.packet.readLengthCodedBuffer();
      },
      geometry: function () {
        return _this.packet.parseGeometryValue();
      },
    };
  }

  const parserFn = genFunc();

  parserFn('(function () {')('return class TextRow {');

  // constructor method
  parserFn('constructor(fields) {');
  // node-mysql typeCast compatibility wrapper
  // see https://github.com/mysqljs/mysql/blob/96fdd0566b654436624e2375c7b6604b1f50f825/lib/protocol/packets/Field.js
  if (typeof options.typeCast === 'function') {
    parserFn('const _this = this;');
    parserFn('for(let i=0; i<fields.length; ++i) {');
    parserFn('this[\`wrap\${i}\`] = wrap(fields[i], _this);');
    parserFn('}');
  }
  parserFn('}');

  // next method
  parserFn('next(packet, fields, options) {');
  parserFn('this.packet = packet;');
  if (options.rowsAsArray) {
    parserFn(\`const result = new Array(\${fields.length});\`);
  } else {
    parserFn('const result = {};');
  }

  const resultTables = {};
  let resultTablesArray = [];

  if (options.nestTables === true) {
    for (let i = 0; i < fields.length; i++) {
      resultTables[fields[i].table] = 1;
    }
    resultTablesArray = Object.keys(resultTables);
    for (let i = 0; i < resultTablesArray.length; i++) {
      parserFn(\`result[\${helpers.fieldEscape(resultTablesArray[i])}] = {};\`);
    }
  }

  let lvalue = '';
  let fieldName = '';
  let tableName = '';
  for (let i = 0; i < fields.length; i++) {
    fieldName = helpers.fieldEscape(fields[i].name);
    // parserFn(\`// \${fieldName}: \${typeNames[fields[i].columnType]}\`);

    if (typeof options.nestTables === 'string') {
      lvalue = \`result[\${helpers.fieldEscape(fields[i].table + options.nestTables + fields[i].name)}]\`;
    } else if (options.nestTables === true) {
      tableName = helpers.fieldEscape(fields[i].table);

      parserFn(\`if (!result[\${tableName}]) result[\${tableName}] = {};\`);
      lvalue = \`result[\${tableName}][\${fieldName}]\`;
    } else if (options.rowsAsArray) {
      lvalue = \`result[\${i.toString(10)}]\`;
    } else {
      lvalue = \`result[\${fieldName}]\`;
    }
    if (options.typeCast === false) {
      parserFn(\`\${lvalue} = packet.readLengthCodedBuffer();\`);
    } else {
      const encodingExpr = \`fields[\${i}].encoding\`;
      const readCode = readCodeFor(fields[i], encodingExpr, config, options);
      if (typeof options.typeCast === 'function') {
        parserFn(
          \`\${lvalue} = options.typeCast(this.wrap\${i}, function() { return \${readCode} });\`
        );
      } else {
        parserFn(\`\${lvalue} = \${readCode};\`);
      }
    }
  }

  parserFn('return result;');
  parserFn('}');
  parserFn('};')('})()');

  if (config.debug) {
    helpers.printDebugWithCode(
      'Compiled text protocol row parser',
      parserFn.toString()
    );
  }
  if (typeof options.typeCast === 'function') {
    return parserFn.toFunction({ wrap });
  }
  return parserFn.toFunction();
}

function getTextParser(fields, options, config) {
  return parserCache.getParser('text', fields, options, config, compile);
}

module.exports = getTextParser;


/***/ },

/***/ 917
(module, __unused_webpack_exports, __webpack_require__) {



const BasePool = __webpack_require__(8599);

class Pool extends BasePool {
  promise(promiseImpl) {
    const PromisePool = __webpack_require__(2539);
    return new PromisePool(this, promiseImpl);
  }
}

module.exports = Pool;


/***/ },

/***/ 2876
(module, __unused_webpack_exports, __webpack_require__) {



const process = __webpack_require__(932);

const Pool = __webpack_require__(917);
const PoolConfig = __webpack_require__(9798);
const Connection = __webpack_require__(3875);
const EventEmitter = (__webpack_require__(4434).EventEmitter);

/**
 * Selector
 */
const makeSelector = {
  RR() {
    let index = 0;
    return (clusterIds) => clusterIds[index++ % clusterIds.length];
  },
  RANDOM() {
    return (clusterIds) =>
      clusterIds[Math.floor(Math.random() * clusterIds.length)];
  },
  ORDER() {
    return (clusterIds) => clusterIds[0];
  },
};

const getMonotonicMilliseconds = function () {
  let ms;

  if (typeof process.hrtime === 'function') {
    ms = process.hrtime();
    ms = ms[0] * 1e3 + ms[1] * 1e-6;
  } else {
    ms = process.uptime() * 1000;
  }

  return Math.floor(ms);
};

const patternRegExp = function (pattern) {
  if (pattern instanceof RegExp) {
    return pattern;
  }

  const source = pattern
    .replace(/([.+?^=!:\${}()|[\\]/\\\\])/g, '\\\\$1')
    .replace(/\\*/g, '.*');

  return new RegExp(\`^\${source}$\`);
};

class PoolNamespace {
  constructor(cluster, pattern, selector) {
    this._cluster = cluster;
    this._pattern = pattern;
    this._selector = makeSelector[selector]();
  }

  getConnection(cb) {
    const clusterNode = this._getClusterNode();
    if (clusterNode === null) {
      let err = new Error('Pool does Not exist.');
      err.code = 'POOL_NOEXIST';

      if (this._cluster._findNodeIds(this._pattern, true).length !== 0) {
        err = new Error('Pool does Not have online node.');
        err.code = 'POOL_NONEONLINE';
      }

      return cb(err);
    }
    return this._cluster._getConnection(clusterNode, (err, connection) => {
      if (err) {
        if (
          this._cluster._canRetry &&
          this._cluster._findNodeIds(this._pattern).length !== 0
        ) {
          this._cluster.emit('warn', err);
          return this.getConnection(cb);
        }

        return cb(err);
      }
      return cb(null, connection);
    });
  }

  /**
   * pool cluster query
   * @param {*} sql
   * @param {*} values
   * @param {*} cb
   * @returns query
   */
  query(sql, values, cb) {
    const query = Connection.createQuery(sql, values, cb, {});
    this.getConnection((err, conn) => {
      if (err) {
        if (typeof query.onResult === 'function') {
          query.onResult(err);
        } else {
          query.emit('error', err);
        }
        return;
      }
      try {
        conn.query(query).once('end', () => {
          conn.release();
        });
      } catch (e) {
        conn.release();
        throw e;
      }
    });
    return query;
  }

  /**
   * pool cluster execute
   * @param {*} sql
   * @param {*} values
   * @param {*} cb
   */
  execute(sql, values, cb) {
    if (typeof values === 'function') {
      cb = values;
      values = [];
    }
    this.getConnection((err, conn) => {
      if (err) {
        return cb(err);
      }
      try {
        conn.execute(sql, values, cb).once('end', () => {
          conn.release();
        });
      } catch (e) {
        conn.release();
        throw e;
      }
    });
  }

  get trace() {
    const nodeIds = this._cluster._findNodeIds(this._pattern, true);
    for (let i = 0; i < nodeIds.length; i++) {
      const node = this._cluster._getNode(nodeIds[i]);
      if (node?.pool.config.connectionConfig.trace) {
        return true;
      }
    }
    return nodeIds.length === 0;
  }

  _getClusterNode() {
    const foundNodeIds = this._cluster._findNodeIds(this._pattern);
    if (foundNodeIds.length === 0) {
      return null;
    }
    const nodeId =
      foundNodeIds.length === 1
        ? foundNodeIds[0]
        : this._selector(foundNodeIds);
    return this._cluster._getNode(nodeId);
  }
}

class PoolCluster extends EventEmitter {
  constructor(config) {
    super();
    config = config || {};
    this._canRetry =
      typeof config.canRetry === 'undefined' ? true : config.canRetry;
    this._removeNodeErrorCount = config.removeNodeErrorCount || 5;
    this._restoreNodeTimeout = config.restoreNodeTimeout || 0;
    this._defaultSelector = config.defaultSelector || 'RR';
    this._closed = false;
    this._lastId = 0;
    this._nodes = {};
    this._serviceableNodeIds = [];
    this._namespaces = {};
    this._findCaches = {};
  }

  of(pattern, selector) {
    pattern = pattern || '*';
    selector = selector || this._defaultSelector;
    selector = selector.toUpperCase();
    if (!makeSelector[selector] === 'undefined') {
      selector = this._defaultSelector;
    }
    const key = pattern + selector;
    if (typeof this._namespaces[key] === 'undefined') {
      this._namespaces[key] = new PoolNamespace(this, pattern, selector);
    }
    return this._namespaces[key];
  }

  add(id, config) {
    if (typeof id === 'object') {
      config = id;
      id = \`CLUSTER::\${++this._lastId}\`;
    }
    if (typeof this._nodes[id] === 'undefined') {
      this._nodes[id] = {
        id: id,
        errorCount: 0,
        pool: new Pool({ config: new PoolConfig(config) }),
        _offlineUntil: 0,
      };
      this._serviceableNodeIds.push(id);
      this._clearFindCaches();
    }
  }

  remove(pattern) {
    const foundNodeIds = this._findNodeIds(pattern, true);

    for (let i = 0; i < foundNodeIds.length; i++) {
      const node = this._getNode(foundNodeIds[i]);

      if (node) {
        this._removeNode(node);
      }
    }
  }

  getConnection(pattern, selector, cb) {
    let namespace;
    if (typeof pattern === 'function') {
      cb = pattern;
      namespace = this.of();
    } else {
      if (typeof selector === 'function') {
        cb = selector;
        selector = this._defaultSelector;
      }
      namespace = this.of(pattern, selector);
    }
    namespace.getConnection(cb);
  }

  [Symbol.dispose]() {
    if (!this._closed) {
      this.end();
    }
  }

  end(callback) {
    const cb =
      callback !== undefined
        ? callback
        : (err) => {
            if (err) {
              throw err;
            }
          };
    if (this._closed) {
      process.nextTick(cb);
      return;
    }

    this._closed = true;

    let calledBack = false;
    let waitingClose = 0;
    const onEnd = (err) => {
      if (!calledBack && (err || --waitingClose <= 0)) {
        calledBack = true;
        return cb(err);
      }
    };

    for (const id in this._nodes) {
      waitingClose++;
      this._nodes[id].pool.end(onEnd);
    }

    if (waitingClose === 0) {
      process.nextTick(onEnd);
    }
  }

  _findNodeIds(pattern, includeOffline) {
    let currentTime = 0;
    let foundNodeIds = this._findCaches[pattern];

    if (foundNodeIds === undefined) {
      const expression = patternRegExp(pattern);

      foundNodeIds = this._serviceableNodeIds.filter((id) =>
        id.match(expression)
      );
    }

    this._findCaches[pattern] = foundNodeIds;

    if (includeOffline) {
      return foundNodeIds;
    }

    return foundNodeIds.filter((nodeId) => {
      const node = this._getNode(nodeId);

      if (!node._offlineUntil) {
        return true;
      }

      if (!currentTime) {
        currentTime = getMonotonicMilliseconds();
      }

      return node._offlineUntil <= currentTime;
    });
  }

  _getNode(id) {
    return this._nodes[id] || null;
  }

  _increaseErrorCount(node) {
    const errorCount = ++node.errorCount;

    if (this._removeNodeErrorCount > errorCount) {
      return;
    }

    if (this._restoreNodeTimeout > 0) {
      node._offlineUntil =
        getMonotonicMilliseconds() + this._restoreNodeTimeout;
      this.emit('offline', node.id);
      return;
    }

    this._removeNode(node);
    this.emit('remove', node.id);
  }

  _decreaseErrorCount(node) {
    let errorCount = node.errorCount;

    if (errorCount > this._removeNodeErrorCount) {
      errorCount = this._removeNodeErrorCount;
    }

    if (errorCount < 1) {
      errorCount = 1;
    }

    node.errorCount = errorCount - 1;

    if (node._offlineUntil) {
      node._offlineUntil = 0;
      this.emit('online', node.id);
    }
  }

  _getConnection(node, cb) {
    node.pool.getConnection((err, connection) => {
      if (err) {
        this._increaseErrorCount(node);
        return cb(err);
      }
      this._decreaseErrorCount(node);

      connection._clusterId = node.id;
      return cb(null, connection);
    });
  }

  _removeNode(node) {
    const index = this._serviceableNodeIds.indexOf(node.id);
    if (index !== -1) {
      this._serviceableNodeIds.splice(index, 1);
      delete this._nodes[node.id];
      this._clearFindCaches();
      node.pool.end();
    }
  }

  _clearFindCaches() {
    this._findCaches = {};
  }
}

module.exports = PoolCluster;


/***/ },

/***/ 9798
(module, __unused_webpack_exports, __webpack_require__) {



const ConnectionConfig = __webpack_require__(2928);

class PoolConfig {
  constructor(options) {
    if (typeof options === 'string') {
      options = ConnectionConfig.parseUrl(options);
    }
    this.connectionConfig = new ConnectionConfig(options);
    this.waitForConnections =
      options.waitForConnections === undefined
        ? true
        : Boolean(options.waitForConnections);
    this.connectionLimit = isNaN(options.connectionLimit)
      ? 10
      : Number(options.connectionLimit);
    this.maxIdle = isNaN(options.maxIdle)
      ? this.connectionLimit
      : Number(options.maxIdle);
    this.idleTimeout = isNaN(options.idleTimeout)
      ? 60000
      : Number(options.idleTimeout);
    this.queueLimit = isNaN(options.queueLimit)
      ? 0
      : Number(options.queueLimit);
    this.resetOnRelease =
      options.resetOnRelease === undefined
        ? false
        : Boolean(options.resetOnRelease);
  }
}

module.exports = PoolConfig;


/***/ },

/***/ 8148
(module, __unused_webpack_exports, __webpack_require__) {



const Connection = __webpack_require__(3875);

class PoolConnection extends Connection {
  constructor(pool, options) {
    super(options);
    this._pool = pool;
    this._released = false;
    this.lastActiveTime = Date.now();
    this.once('end', () => {
      this._removeFromPool();
    });
    this.once('error', () => {
      this._removeFromPool();
    });
  }

  release() {
    if (this._released) {
      return;
    }
    if (!this._pool || this._pool._closed) {
      return;
    }
    this._released = true;
    this.lastActiveTime = Date.now();
    this._pool.releaseConnection(this);
  }

  [Symbol.dispose]() {
    this.release();
  }

  end(callback) {
    if (this.config.gracefulEnd) {
      this._removeFromPool();
      super.end(callback);

      return;
    }

    const err = new Error(
      'Calling conn.end() to release a pooled connection is ' +
        'deprecated. In next version calling conn.end() will be ' +
        'restored to default conn.end() behavior. Use ' +
        'conn.release() instead.'
    );
    this.emit('warn', err);
    console.warn(err.message);
    this.release();
    if (typeof callback === 'function') {
      callback();
    }
  }

  destroy() {
    this._removeFromPool();
    super.destroy();
  }

  _removeFromPool() {
    if (!this._pool || this._pool._closed) {
      return;
    }
    const pool = this._pool;
    this._pool = null;
    pool._removeConnection(this);
  }

  promise(promiseImpl) {
    const PromisePoolConnection = __webpack_require__(6854);
    return new PromisePoolConnection(this, promiseImpl);
  }
}

PoolConnection.statementKey = Connection.statementKey;
module.exports = PoolConnection;

// TODO: Remove this when we are removing PoolConnection#end
PoolConnection.prototype._realEnd = Connection.prototype.end;


/***/ },

/***/ 6551
(module) {



/** @param {Function} constructorOpt Passed to Error.captureStackTrace (omit this frame from stacks). */
function captureStackHolder(constructorOpt) {
  const holder = {};
  Error.captureStackTrace(holder, constructorOpt);
  return holder;
}

/**
 * Replace \`err.stack\` frames with the capture from \`holder\`, keeping the
 * callback error instance and its MySQL fields.
 *
 * @param {Error} err
 * @param {{ stack?: string }} holder
 */
function applyCapturedStack(err, holder) {
  const stack = holder && holder.stack;
  if (typeof stack !== 'string' || !stack) return;
  const lines = stack.split('\\n');
  lines[0] = \`\${err.name}: \${err.message}\`;
  err.stack = lines.join('\\n');
}

module.exports = { captureStackHolder, applyCapturedStack };


/***/ },

/***/ 8173
(module, __unused_webpack_exports, __webpack_require__) {



const EventEmitter = (__webpack_require__(4434).EventEmitter);
const PromisePreparedStatementInfo = __webpack_require__(9797);
const {
  captureStackHolder,
  applyCapturedStack,
} = __webpack_require__(6551);
const makeDoneCb = __webpack_require__(3548);
const inheritEvents = __webpack_require__(8608);
const BaseConnection = __webpack_require__(2041);

class PromiseConnection extends EventEmitter {
  constructor(connection, promiseImpl) {
    super();
    this.connection = connection;
    this.Promise = promiseImpl || Promise;
    inheritEvents(connection, this, [
      'error',
      'drain',
      'connect',
      'end',
      'enqueue',
    ]);
  }

  release() {
    this.connection.release();
  }

  query(query, params) {
    const c = this.connection;
    const stackHolder = c.config.trace
      ? captureStackHolder(PromiseConnection.prototype.query)
      : undefined;
    if (typeof params === 'function') {
      throw new Error(
        'Callback function is not available with promise clients.'
      );
    }
    return new this.Promise((resolve, reject) => {
      const done = makeDoneCb(resolve, reject, stackHolder);
      if (params !== undefined) {
        c.query(query, params, done);
      } else {
        c.query(query, done);
      }
    });
  }

  execute(query, params) {
    const c = this.connection;
    const stackHolder = c.config.trace
      ? captureStackHolder(PromiseConnection.prototype.execute)
      : undefined;
    if (typeof params === 'function') {
      throw new Error(
        'Callback function is not available with promise clients.'
      );
    }
    return new this.Promise((resolve, reject) => {
      const done = makeDoneCb(resolve, reject, stackHolder);
      if (params !== undefined) {
        c.execute(query, params, done);
      } else {
        c.execute(query, done);
      }
    });
  }

  end() {
    return new this.Promise((resolve) => {
      this.connection.end(resolve);
    });
  }

  async [Symbol.asyncDispose]() {
    if (!this.connection._closing) {
      await this.end();
    }
  }

  beginTransaction() {
    const c = this.connection;
    const stackHolder = c.config.trace
      ? captureStackHolder(PromiseConnection.prototype.beginTransaction)
      : undefined;
    return new this.Promise((resolve, reject) => {
      const done = makeDoneCb(resolve, reject, stackHolder);
      c.beginTransaction(done);
    });
  }

  commit() {
    const c = this.connection;
    const stackHolder = c.config.trace
      ? captureStackHolder(PromiseConnection.prototype.commit)
      : undefined;
    return new this.Promise((resolve, reject) => {
      const done = makeDoneCb(resolve, reject, stackHolder);
      c.commit(done);
    });
  }

  rollback() {
    const c = this.connection;
    const stackHolder = c.config.trace
      ? captureStackHolder(PromiseConnection.prototype.rollback)
      : undefined;
    return new this.Promise((resolve, reject) => {
      const done = makeDoneCb(resolve, reject, stackHolder);
      c.rollback(done);
    });
  }

  ping() {
    const c = this.connection;
    const stackHolder = c.config.trace
      ? captureStackHolder(PromiseConnection.prototype.ping)
      : undefined;
    return new this.Promise((resolve, reject) => {
      c.ping((err) => {
        if (err) {
          applyCapturedStack(err, stackHolder);
          reject(err);
        } else {
          resolve(true);
        }
      });
    });
  }

  reset() {
    const c = this.connection;
    const stackHolder = c.config.trace
      ? captureStackHolder(PromiseConnection.prototype.reset)
      : undefined;
    return new this.Promise((resolve, reject) => {
      c.reset((err) => {
        if (err) {
          applyCapturedStack(err, stackHolder);
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  connect() {
    const c = this.connection;
    const stackHolder = c.config.trace
      ? captureStackHolder(PromiseConnection.prototype.connect)
      : undefined;
    return new this.Promise((resolve, reject) => {
      c.connect((err, param) => {
        if (err) {
          applyCapturedStack(err, stackHolder);
          reject(err);
        } else {
          resolve(param);
        }
      });
    });
  }

  prepare(options) {
    const c = this.connection;
    const promiseImpl = this.Promise;
    const stackHolder = c.config.trace
      ? captureStackHolder(PromiseConnection.prototype.prepare)
      : undefined;
    return new this.Promise((resolve, reject) => {
      c.prepare(options, (err, statement) => {
        if (err) {
          applyCapturedStack(err, stackHolder);
          reject(err);
        } else {
          const wrappedStatement = new PromisePreparedStatementInfo(
            statement,
            promiseImpl
          );
          resolve(wrappedStatement);
        }
      });
    });
  }

  changeUser(options) {
    const c = this.connection;
    const stackHolder = c.config.trace
      ? captureStackHolder(PromiseConnection.prototype.changeUser)
      : undefined;
    return new this.Promise((resolve, reject) => {
      c.changeUser(options, (err) => {
        if (err) {
          applyCapturedStack(err, stackHolder);
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  get config() {
    return this.connection.config;
  }

  get threadId() {
    return this.connection.threadId;
  }
}
// patching PromiseConnection
// create facade functions for prototype functions on "Connection" that are not yet
// implemented with PromiseConnection

// proxy synchronous functions only
(function (functionsToWrap) {
  for (let i = 0; functionsToWrap && i < functionsToWrap.length; i++) {
    const func = functionsToWrap[i];

    if (
      typeof BaseConnection.prototype[func] === 'function' &&
      PromiseConnection.prototype[func] === undefined
    ) {
      PromiseConnection.prototype[func] = (function factory(funcName) {
        return function () {
          return BaseConnection.prototype[funcName].apply(
            this.connection,
            arguments
          );
        };
      })(func);
    }
  }
})([
  // synchronous functions
  'close',
  'createBinlogStream',
  'destroy',
  'escape',
  'escapeId',
  'format',
  'pause',
  'pipe',
  'resume',
  'unprepare',
]);

module.exports = PromiseConnection;


/***/ },

/***/ 8608
(module) {



function inheritEvents(source, target, events) {
  const listeners = {};
  target
    .on('newListener', (eventName) => {
      if (events.indexOf(eventName) >= 0 && !target.listenerCount(eventName)) {
        source.on(
          eventName,
          (listeners[eventName] = function () {
            const args = [].slice.call(arguments);
            args.unshift(eventName);

            target.emit.apply(target, args);
          })
        );
      }
    })
    .on('removeListener', (eventName) => {
      if (events.indexOf(eventName) >= 0 && !target.listenerCount(eventName)) {
        source.removeListener(eventName, listeners[eventName]);
        delete listeners[eventName];
      }
    });
}

module.exports = inheritEvents;


/***/ },

/***/ 3548
(module, __unused_webpack_exports, __webpack_require__) {



const { applyCapturedStack } = __webpack_require__(6551);

function makeDoneCb(resolve, reject, stackHolder) {
  return function (err, rows, fields) {
    if (err) {
      applyCapturedStack(err, stackHolder);
      reject(err);
    } else {
      resolve([rows, fields]);
    }
  };
}

module.exports = makeDoneCb;


/***/ },

/***/ 2539
(module, __unused_webpack_exports, __webpack_require__) {



const EventEmitter = (__webpack_require__(4434).EventEmitter);
const {
  captureStackHolder,
  applyCapturedStack,
} = __webpack_require__(6551);
const makeDoneCb = __webpack_require__(3548);
const PromisePoolConnection = __webpack_require__(6854);
const inheritEvents = __webpack_require__(8608);
const BasePool = __webpack_require__(8599);

class PromisePool extends EventEmitter {
  constructor(pool, thePromise) {
    super();
    this.pool = pool;
    this.Promise = thePromise || Promise;
    inheritEvents(pool, this, ['acquire', 'connection', 'enqueue', 'release']);
  }

  getConnection() {
    const corePool = this.pool;
    return new this.Promise((resolve, reject) => {
      corePool.getConnection((err, coreConnection) => {
        if (err) {
          reject(err);
        } else {
          resolve(new PromisePoolConnection(coreConnection, this.Promise));
        }
      });
    });
  }

  releaseConnection(connection) {
    if (connection instanceof PromisePoolConnection) connection.release();
  }

  query(sql, args) {
    const corePool = this.pool;
    const stackHolder = corePool.config.connectionConfig.trace
      ? captureStackHolder(PromisePool.prototype.query)
      : undefined;
    if (typeof args === 'function') {
      throw new Error(
        'Callback function is not available with promise clients.'
      );
    }
    return new this.Promise((resolve, reject) => {
      const done = makeDoneCb(resolve, reject, stackHolder);
      if (args !== undefined) {
        corePool.query(sql, args, done);
      } else {
        corePool.query(sql, done);
      }
    });
  }

  execute(sql, args) {
    const corePool = this.pool;
    const stackHolder = corePool.config.connectionConfig.trace
      ? captureStackHolder(PromisePool.prototype.execute)
      : undefined;
    if (typeof args === 'function') {
      throw new Error(
        'Callback function is not available with promise clients.'
      );
    }
    return new this.Promise((resolve, reject) => {
      const done = makeDoneCb(resolve, reject, stackHolder);
      if (args) {
        corePool.execute(sql, args, done);
      } else {
        corePool.execute(sql, done);
      }
    });
  }

  end() {
    const corePool = this.pool;
    const stackHolder = corePool.config.connectionConfig.trace
      ? captureStackHolder(PromisePool.prototype.end)
      : undefined;
    return new this.Promise((resolve, reject) => {
      corePool.end((err) => {
        if (err) {
          applyCapturedStack(err, stackHolder);
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  async [Symbol.asyncDispose]() {
    if (!this.pool._closed) {
      await this.end();
    }
  }
}

(function (functionsToWrap) {
  for (let i = 0; functionsToWrap && i < functionsToWrap.length; i++) {
    const func = functionsToWrap[i];

    if (
      typeof BasePool.prototype[func] === 'function' &&
      PromisePool.prototype[func] === undefined
    ) {
      PromisePool.prototype[func] = (function factory(funcName) {
        return function () {
          return BasePool.prototype[funcName].apply(this.pool, arguments);
        };
      })(func);
    }
  }
})([
  // synchronous functions
  'escape',
  'escapeId',
  'format',
]);

module.exports = PromisePool;


/***/ },

/***/ 1474
(module, __unused_webpack_exports, __webpack_require__) {



const { captureStackHolder } = __webpack_require__(6551);
const PromisePoolConnection = __webpack_require__(6854);
const makeDoneCb = __webpack_require__(3548);

class PromisePoolNamespace {
  constructor(poolNamespace, thePromise) {
    this.poolNamespace = poolNamespace;
    this.Promise = thePromise || Promise;
  }

  getConnection() {
    const corePoolNamespace = this.poolNamespace;
    return new this.Promise((resolve, reject) => {
      corePoolNamespace.getConnection((err, coreConnection) => {
        if (err) {
          reject(err);
        } else {
          resolve(new PromisePoolConnection(coreConnection, this.Promise));
        }
      });
    });
  }

  query(sql, values) {
    const corePoolNamespace = this.poolNamespace;
    const stackHolder = corePoolNamespace.trace
      ? captureStackHolder(PromisePoolNamespace.prototype.query)
      : undefined;
    if (typeof values === 'function') {
      throw new Error(
        'Callback function is not available with promise clients.'
      );
    }
    return new this.Promise((resolve, reject) => {
      const done = makeDoneCb(resolve, reject, stackHolder);
      corePoolNamespace.query(sql, values, done);
    });
  }

  execute(sql, values) {
    const corePoolNamespace = this.poolNamespace;
    const stackHolder = corePoolNamespace.trace
      ? captureStackHolder(PromisePoolNamespace.prototype.execute)
      : undefined;
    if (typeof values === 'function') {
      throw new Error(
        'Callback function is not available with promise clients.'
      );
    }
    return new this.Promise((resolve, reject) => {
      const done = makeDoneCb(resolve, reject, stackHolder);
      corePoolNamespace.execute(sql, values, done);
    });
  }
}

module.exports = PromisePoolNamespace;


/***/ },

/***/ 6854
(module, __unused_webpack_exports, __webpack_require__) {



const PromiseConnection = __webpack_require__(8173);

class PromisePoolConnection extends PromiseConnection {
  constructor(connection, promiseImpl) {
    super(connection, promiseImpl);
  }

  destroy() {
    return this.connection.destroy();
  }

  async [Symbol.asyncDispose]() {
    this.release();
  }
}

module.exports = PromisePoolConnection;


/***/ },

/***/ 9797
(module, __unused_webpack_exports, __webpack_require__) {



const { captureStackHolder } = __webpack_require__(6551);
const makeDoneCb = __webpack_require__(3548);

class PromisePreparedStatementInfo {
  constructor(statement, promiseImpl) {
    this.statement = statement;
    this.Promise = promiseImpl;
  }

  execute(parameters) {
    const s = this.statement;
    const stackHolder = s._connection.config.trace
      ? captureStackHolder(PromisePreparedStatementInfo.prototype.execute)
      : undefined;
    return new this.Promise((resolve, reject) => {
      const done = makeDoneCb(resolve, reject, stackHolder);
      if (parameters) {
        s.execute(parameters, done);
      } else {
        s.execute(done);
      }
    });
  }

  close() {
    return new this.Promise((resolve) => {
      this.statement.close();
      resolve();
    });
  }
}

module.exports = PromisePreparedStatementInfo;


/***/ },

/***/ 1469
(module) {

/**
 * Simplified abstraction adapted from denque (https://github.com/invertase/denque/tree/539105bb57854e997dd469221cdc52a0ad80e0a2)
 * License: Apache-2.0 (https://github.com/invertase/denque/blob/master/LICENSE)
 */



const MIN_SHRINK_TAIL = 10000;

class RingQueue {
  constructor() {
    this._list = new Array(4);
    this._mask = 3;
    this._head = 0;
    this._tail = 0;
  }

  get length() {
    return (this._tail - this._head) & this._mask;
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this._head === this._tail;
  }

  push(item) {
    // biome-ignore lint/correctness/noUndeclaredVariables: arguments distinguishes push() from push(undefined)
    if (arguments.length === 0) {
      return this.length;
    }

    this._list[this._tail] = item;
    this._tail = (this._tail + 1) & this._mask;

    if (this._tail === this._head) {
      this._grow();
    }

    return this.length;
  }

  unshift(item) {
    // biome-ignore lint/correctness/noUndeclaredVariables: arguments distinguishes unshift() from unshift(undefined)
    if (arguments.length === 0) {
      return this.length;
    }

    this._head = (this._head - 1) & this._mask;
    this._list[this._head] = item;

    if (this._tail === this._head) {
      this._grow();
    }

    return this.length;
  }

  shift() {
    const head = this._head;

    if (head === this._tail) {
      return undefined;
    }

    const item = this._list[head];
    this._list[head] = undefined;
    this._head = (head + 1) & this._mask;

    if (
      head < 2 &&
      this._tail > MIN_SHRINK_TAIL &&
      this._tail <= this._list.length >>> 2
    ) {
      this._shrink();
    }

    return item;
  }

  pop() {
    const tail = this._tail;

    if (tail === this._head) {
      return undefined;
    }

    const capacity = this._list.length;
    this._tail = (tail - 1) & this._mask;

    const item = this._list[this._tail];
    this._list[this._tail] = undefined;

    if (this._head < 2 && tail > MIN_SHRINK_TAIL && tail <= capacity >>> 2) {
      this._shrink();
    }

    return item;
  }

  peekAt(index) {
    if (index !== (index | 0)) {
      return undefined;
    }

    if (index >= 0) {
      if (index >= this.length) {
        return undefined;
      }

      return this._list[(this._head + index) & this._mask];
    }

    const size = this.length;

    if (index < -size) {
      return undefined;
    }

    return this._list[(this._head + index + size) & this._mask];
  }

  get(index) {
    return this.peekAt(index);
  }

  peek() {
    if (this._head === this._tail) {
      return undefined;
    }

    return this._list[this._head];
  }

  peekFront() {
    return this.peek();
  }

  peekBack() {
    return this.peekAt(-1);
  }

  removeOne(index) {
    if (index !== (index | 0)) {
      return undefined;
    }

    const size = this.length;

    if (index >= size || index < -size) {
      return undefined;
    }

    if (index < 0) {
      index += size;
    }

    const mask = this._mask;
    let slot = (this._head + index) & mask;
    const item = this._list[slot];
    const isCloserToHead = index < size / 2;

    if (isCloserToHead) {
      for (let moves = index; moves > 0; moves--) {
        const previous = (slot - 1) & mask;
        this._list[slot] = this._list[previous];
        slot = previous;
      }

      this._list[slot] = undefined;
      this._head = (this._head + 1) & mask;
    } else {
      for (let moves = size - 1 - index; moves > 0; moves--) {
        const next = (slot + 1) & mask;
        this._list[slot] = this._list[next];
        slot = next;
      }

      this._list[slot] = undefined;
      this._tail = (this._tail - 1) & mask;
    }

    return item;
  }

  remove(index, count) {
    if (index !== (index | 0)) {
      return undefined;
    }

    if (this._head === this._tail) {
      return undefined;
    }

    const size = this.length;

    if (index >= size || index < -size || count < 1) {
      return undefined;
    }

    if (index < 0) {
      index += size;
    }

    if (count === 1 || !count) {
      return [this.removeOne(index)];
    }

    if (count !== (count | 0)) {
      return undefined;
    }

    if (index + count > size) {
      count = size - index;
    }

    const items = this.toArray();
    const removed = items.splice(index, count);
    this._rebuild(items);

    return removed;
  }

  splice(index, count, ...newItems) {
    if (index !== (index | 0)) {
      return undefined;
    }

    const size = this.length;

    if (index < 0) {
      index += size;
    }

    if (index > size) {
      return undefined;
    }

    if (newItems.length === 0) {
      return this.remove(index, count);
    }

    if (index < 0) {
      return undefined;
    }

    const removalCount = count === undefined ? 1 : count;

    if (removalCount !== (removalCount | 0) || removalCount < 0) {
      return undefined;
    }

    const items = this.toArray();
    let removed;

    if (removalCount === 0) {
      removed = [];
      items.splice(index, 0, ...newItems);
    } else if (index >= size) {
      removed = undefined;
      items.splice(index, 0, ...newItems);
    } else {
      removed = items.splice(index, removalCount, ...newItems);
    }

    this._rebuild(items);

    return removed;
  }

  clear() {
    this._list = new Array(this._list.length);
    this._head = 0;
    this._tail = 0;
  }

  toArray() {
    const head = this._head;
    const tail = this._tail;

    if (head <= tail) {
      return this._list.slice(head, tail);
    }

    const capacity = this._list.length;
    const items = new Array(this.length);
    let count = 0;

    for (let slot = head; slot < capacity; slot++) {
      items[count++] = this._list[slot];
    }

    for (let slot = 0; slot < tail; slot++) {
      items[count++] = this._list[slot];
    }

    return items;
  }

  _grow() {
    const list = this._list;
    const capacity = list.length;

    if (this._head === 0) {
      this._tail = capacity;
      list.length = capacity << 1;
    } else {
      const grown = new Array(capacity << 1);
      let count = 0;

      for (let slot = this._head; slot < capacity; slot++) {
        grown[count++] = list[slot];
      }

      for (let slot = 0; slot < this._tail; slot++) {
        grown[count++] = list[slot];
      }

      this._list = grown;
      this._head = 0;
      this._tail = capacity;
    }

    this._mask = (this._mask << 1) | 1;
  }

  _shrink() {
    this._list.length >>>= 1;
    this._mask >>>= 1;
  }

  _rebuild(items) {
    let capacity = this._list.length;

    while (items.length >= capacity) {
      capacity <<= 1;
    }

    this._list = new Array(capacity);
    this._mask = capacity - 1;
    this._head = 0;
    this._tail = items.length;

    for (let i = 0; i < items.length; i++) {
      this._list[i] = items[i];
    }
  }
}

module.exports = RingQueue;


/***/ },

/***/ 5385
(module, __unused_webpack_exports, __webpack_require__) {



const process = __webpack_require__(932);

// Safe load: use getBuiltinModule if available, fallback to require, catch if unavailable
const dc = (() => {
  try {
    return 'getBuiltinModule' in process
      ? process.getBuiltinModule('node:diagnostics_channel')
      : __webpack_require__(3053);
  } catch {
    return undefined;
  }
})();

const hasTracingChannel = typeof dc?.tracingChannel === 'function';

const queryChannel = hasTracingChannel
  ? dc.tracingChannel('mysql2:query')
  : undefined;

const executeChannel = hasTracingChannel
  ? dc.tracingChannel('mysql2:execute')
  : undefined;

const connectChannel = hasTracingChannel
  ? dc.tracingChannel('mysql2:connect')
  : undefined;

const poolConnectChannel = hasTracingChannel
  ? dc.tracingChannel('mysql2:pool:connect')
  : undefined;

function getServerContext(config) {
  if (config.socketPath) {
    return { serverAddress: config.socketPath, serverPort: undefined };
  }
  return {
    serverAddress: config.host || 'localhost',
    serverPort: config.port || 3306,
  };
}

// Node 20+: TracingChannel has an aggregated hasSubscribers getter.
// Node 18.x: that getter is missing (undefined), fall back to start sub-channel.
function shouldTrace(channel) {
  if (channel === undefined || channel === null) {
    return false;
  }
  return channel.hasSubscribers ?? channel.start?.hasSubscribers ?? false;
}

// Generic traceCallback wrapper \u2014 calls fn synchronously, wraps the callback
// at args[position] to emit asyncStart/asyncEnd/error. No promises involved.
function traceCallback(channel, fn, position, context, thisArg, ...args) {
  if (shouldTrace(channel)) {
    return channel.traceCallback(fn, position, context(), thisArg, ...args);
  }
  return fn.apply(thisArg, args);
}

// tracePromise for operations that are inherently async (connection handshake)
function tracePromise(channel, fn, contextFactory) {
  if (shouldTrace(channel)) {
    return channel.tracePromise(fn, contextFactory());
  }
  return fn();
}

module.exports = {
  ...void (dc),
  ...void (hasTracingChannel),
  shouldTrace,
  queryChannel,
  executeChannel,
  connectChannel,
  poolConnectChannel,
  getServerContext,
  traceCallback,
  tracePromise,
};


/***/ },

/***/ 7262
(__unused_webpack_module, exports, __webpack_require__) {



const SqlString = __webpack_require__(2263);
const EventEmitter = (__webpack_require__(4434).EventEmitter);
const parserCache = __webpack_require__(7432);
const PoolCluster = __webpack_require__(2876);
const createConnection = __webpack_require__(5850);
const createPool = __webpack_require__(8640);
const createPoolCluster = __webpack_require__(5849);
const PromiseConnection = __webpack_require__(8173);
const PromisePool = __webpack_require__(2539);
const {
  captureStackHolder,
  applyCapturedStack,
} = __webpack_require__(6551);
const makeDoneCb = __webpack_require__(3548);
const PromisePoolConnection = __webpack_require__(6854);
const inheritEvents = __webpack_require__(8608);
const PromisePoolNamespace = __webpack_require__(1474);

function createConnectionPromise(opts) {
  const coreConnection = createConnection(opts);
  const stackHolder = captureStackHolder(createConnectionPromise);
  const thePromise = opts.Promise || Promise;
  if (!thePromise) {
    throw new Error(
      'no Promise implementation available.' +
        'Use promise-enabled node version or pass userland Promise' +
        " implementation as parameter, for example: { Promise: require('bluebird') }"
    );
  }
  return new thePromise((resolve, reject) => {
    coreConnection.once('connect', () => {
      resolve(new PromiseConnection(coreConnection, thePromise));
    });
    coreConnection.once('error', (err) => {
      applyCapturedStack(err, stackHolder);
      reject(err);
    });
  });
}

// note: the callback of "changeUser" is not called on success
// hence there is no possibility to call "resolve"

function createPromisePool(opts) {
  const corePool = createPool(opts);
  const thePromise = opts.Promise || Promise;
  if (!thePromise) {
    throw new Error(
      'no Promise implementation available.' +
        'Use promise-enabled node version or pass userland Promise' +
        " implementation as parameter, for example: { Promise: require('bluebird') }"
    );
  }

  return new PromisePool(corePool, thePromise);
}

class PromisePoolCluster extends EventEmitter {
  constructor(poolCluster, thePromise) {
    super();
    this.poolCluster = poolCluster;
    this.Promise = thePromise || Promise;
    inheritEvents(poolCluster, this, ['warn', 'remove', 'online', 'offline']);
  }

  getConnection(pattern, selector) {
    const corePoolCluster = this.poolCluster;
    return new this.Promise((resolve, reject) => {
      corePoolCluster.getConnection(
        pattern,
        selector,
        (err, coreConnection) => {
          if (err) {
            reject(err);
          } else {
            resolve(new PromisePoolConnection(coreConnection, this.Promise));
          }
        }
      );
    });
  }

  query(sql, args) {
    const corePoolCluster = this.poolCluster;
    const stackHolder = captureStackHolder(PromisePoolCluster.prototype.query);
    if (typeof args === 'function') {
      throw new Error(
        'Callback function is not available with promise clients.'
      );
    }
    return new this.Promise((resolve, reject) => {
      const done = makeDoneCb(resolve, reject, stackHolder);
      corePoolCluster.query(sql, args, done);
    });
  }

  execute(sql, args) {
    const corePoolCluster = this.poolCluster;
    const stackHolder = captureStackHolder(
      PromisePoolCluster.prototype.execute
    );
    if (typeof args === 'function') {
      throw new Error(
        'Callback function is not available with promise clients.'
      );
    }
    return new this.Promise((resolve, reject) => {
      const done = makeDoneCb(resolve, reject, stackHolder);
      corePoolCluster.execute(sql, args, done);
    });
  }

  of(pattern, selector) {
    return new PromisePoolNamespace(
      this.poolCluster.of(pattern, selector),
      this.Promise
    );
  }

  end() {
    const corePoolCluster = this.poolCluster;
    const stackHolder = captureStackHolder(PromisePoolCluster.prototype.end);
    return new this.Promise((resolve, reject) => {
      corePoolCluster.end((err) => {
        if (err) {
          applyCapturedStack(err, stackHolder);
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  async [Symbol.asyncDispose]() {
    if (!this.poolCluster._closed) {
      await this.end();
    }
  }
}

/**
 * proxy poolCluster synchronous functions
 */
(function (functionsToWrap) {
  for (let i = 0; functionsToWrap && i < functionsToWrap.length; i++) {
    const func = functionsToWrap[i];

    if (
      typeof PoolCluster.prototype[func] === 'function' &&
      PromisePoolCluster.prototype[func] === undefined
    ) {
      PromisePoolCluster.prototype[func] = (function factory(funcName) {
        return function () {
          return PoolCluster.prototype[funcName].apply(
            this.poolCluster,
            arguments
          );
        };
      })(func);
    }
  }
})(['add', 'remove']);

function createPromisePoolCluster(opts) {
  const corePoolCluster = createPoolCluster(opts);
  const thePromise = (opts && opts.Promise) || Promise;
  if (!thePromise) {
    throw new Error(
      'no Promise implementation available.' +
        'Use promise-enabled node version or pass userland Promise' +
        " implementation as parameter, for example: { Promise: require('bluebird') }"
    );
  }
  return new PromisePoolCluster(corePoolCluster, thePromise);
}

exports.createConnection = createConnectionPromise;
exports.createPool = createPromisePool;
exports.createPoolCluster = createPromisePoolCluster;
exports.escape = SqlString.escape;
exports.escapeId = SqlString.escapeId;
exports.format = SqlString.format;
exports.raw = SqlString.raw;
exports.Connection = PromiseConnection;
exports.PoolConnection = PromisePoolConnection;
exports.PromisePool = PromisePool;
exports.PromiseConnection = PromiseConnection;
exports.PromisePoolConnection = PromisePoolConnection;

exports.__defineGetter__('Types', () => __webpack_require__(80));

exports.__defineGetter__(
  'TypedParameter',
  () => (__webpack_require__(9621)/* .types */ .g)
);

exports.__defineGetter__('Charsets', () =>
  __webpack_require__(660)
);

exports.__defineGetter__('CharsetToEncoding', () =>
  __webpack_require__(3160)
);

exports.setMaxParserCache = function (max) {
  parserCache.setMaxCache(max);
};

exports.clearParserCache = function () {
  parserCache.clearCache();
};


/***/ },

/***/ 2161
(module, __unused_webpack_exports, __webpack_require__) {



// based on code from Brian White @mscdex mariasql library - https://github.com/mscdex/node-mariasql/blob/master/lib/Client.js#L272-L332
// License: https://github.com/mscdex/node-mariasql/blob/master/LICENSE

const RE_PARAM = /(?:\\?)|(?::(\\d+|(?:[a-zA-Z][a-zA-Z0-9_]*)))/g,
  DQUOTE = 34,
  SQUOTE = 39,
  BSLASH = 92;

function parse(query) {
  let ppos = RE_PARAM.exec(query);
  let curpos = 0;
  let start = 0;
  let end;
  const parts = [];
  let inQuote = false;
  let escape = false;
  let qchr;
  const tokens = [];
  let qcnt = 0;
  let lastTokenEndPos = 0;
  let i;

  if (ppos) {
    do {
      for (i = curpos, end = ppos.index; i < end; ++i) {
        const chr = query.charCodeAt(i);
        if (chr === BSLASH) escape = !escape;
        else {
          if (escape) {
            escape = false;
            continue;
          }
          if (inQuote && chr === qchr) {
            if (query.charCodeAt(i + 1) === qchr) {
              // quote escaped via "" or ''
              ++i;
              continue;
            }
            inQuote = false;
          } else if (!inQuote && (chr === DQUOTE || chr === SQUOTE)) {
            inQuote = true;
            qchr = chr;
          }
        }
      }
      if (!inQuote) {
        parts.push(query.substring(start, end));
        tokens.push(ppos[0].length === 1 ? qcnt++ : ppos[1]);
        start = end + ppos[0].length;
        lastTokenEndPos = start;
      }
      curpos = end + ppos[0].length;
    } while ((ppos = RE_PARAM.exec(query)));

    if (tokens.length) {
      if (curpos < query.length) {
        parts.push(query.substring(lastTokenEndPos));
      }
      return [parts, tokens];
    }
  }
  return [query];
}

function createCompiler(config) {
  if (!config) config = {};
  if (!config.placeholder) {
    config.placeholder = '?';
  }
  let ncache = 100;
  let cache;
  if (typeof config.cache === 'number') {
    ncache = config.cache;
  }
  if (typeof config.cache === 'object') {
    cache = config.cache;
  }
  if (config.cache !== false && !cache) {
    cache = (__webpack_require__(7438).createLRU)({ max: ncache });
  }

  function toArrayParams(tree, params) {
    const arr = [];
    if (tree.length === 1) {
      return [tree[0], []];
    }

    if (typeof params === 'undefined')
      throw new Error(
        'Named query contains placeholders, but parameters object is undefined'
      );

    const tokens = tree[1];
    for (let i = 0; i < tokens.length; ++i) {
      arr.push(params[tokens[i]]);
    }
    return [tree[0], arr];
  }

  function noTailingSemicolon(s) {
    if (s.slice(-1) === ':') {
      return s.slice(0, -1);
    }
    return s;
  }

  function join(tree) {
    if (tree.length === 1) {
      return tree;
    }

    let unnamed = noTailingSemicolon(tree[0][0]);
    for (let i = 1; i < tree[0].length; ++i) {
      if (tree[0][i - 1].slice(-1) === ':') {
        unnamed += config.placeholder;
      }
      unnamed += config.placeholder;
      unnamed += noTailingSemicolon(tree[0][i]);
    }

    const last = tree[0][tree[0].length - 1];
    if (tree[0].length === tree[1].length) {
      if (last.slice(-1) === ':') {
        unnamed += config.placeholder;
      }
      unnamed += config.placeholder;
    }
    return [unnamed, tree[1]];
  }

  function compile(query, paramsObj) {
    let tree;
    if (cache && (tree = cache.get(query))) {
      return toArrayParams(tree, paramsObj);
    }
    tree = join(parse(query));
    if (cache) {
      cache.set(query, tree);
    }
    return toArrayParams(tree, paramsObj);
  }

  compile.parse = parse;
  return compile;
}

// named :one :two to postgres-style numbered $1 $2 $3
function toNumbered(q, params) {
  const tree = parse(q);
  const paramsArr = [];
  if (tree.length === 1) {
    return [tree[0], paramsArr];
  }

  const pIndexes = {};
  let pLastIndex = 0;
  let qs = '';
  let varIndex;
  const varNames = [];
  for (let i = 0; i < tree[0].length; ++i) {
    varIndex = pIndexes[tree[1][i]];
    if (!varIndex) {
      varIndex = ++pLastIndex;
      pIndexes[tree[1][i]] = varIndex;
    }
    if (tree[1][i]) {
      varNames[varIndex - 1] = tree[1][i];
      qs += \`\${tree[0][i]}$\${varIndex}\`;
    } else {
      qs += tree[0][i];
    }
  }
  return [qs, varNames.map((n) => params[n])];
}

module.exports = createCompiler;
module.exports.toNumbered = toNumbered;


/***/ },

/***/ 2263
(__unused_webpack_module, exports, __webpack_require__) {

var __webpack_unused_export__;

/**
 * Adapted from https://github.com/mysqljs/sqlstring/blob/cd528556b4b6bcf300c3db515026935dedf7cfa1/lib/SqlString.js
 * MIT LICENSE: https://github.com/mysqljs/sqlstring/blob/cd528556b4b6bcf300c3db515026935dedf7cfa1/LICENSE
 */
__webpack_unused_export__ = ({ value: true });
exports.raw = exports.format = exports.escape = exports.Vx = exports.JR = exports.zX = exports.escapeId = exports.B7 = exports.$T = void 0;
const node_buffer_1 = __webpack_require__(4573);
const CONTEXT_TRIGGER = new Uint8Array(128);
const SET_CLAUSE_TERMINATORS_BY_FIRST = {};
const SET_CLAUSE_TERMINATORS = [
    'where',
    'order',
    'group',
    'having',
    'limit',
    'union',
    'returning',
    'into',
    'for',
    'lock',
    'offset',
    'window',
    'procedure',
    'on',
];
const regex = {
    backtick: /\`/g,
    dot: /\\./g,
    timezone: /([+\\-\\s])(\\d\\d):?(\\d\\d)?/,
    escapeChars: /[\\0\\b\\t\\n\\r\\x1a"'\\\\]/g,
};
const charCode = {
    singleQuote: 39,
    backtick: 96,
    backslash: 92,
    dash: 45,
    slash: 47,
    asterisk: 42,
    exclamation: 33,
    plus: 43,
    questionMark: 63,
    comma: 44,
    openParen: 40,
    closeParen: 41,
    semicolon: 59,
    newline: 10,
    space: 32,
    tab: 9,
    carriageReturn: 13,
};
// Chars that open a string, identifier, or comment
CONTEXT_TRIGGER[charCode.singleQuote] = 1;
CONTEXT_TRIGGER[charCode.backtick] = 1;
CONTEXT_TRIGGER[charCode.dash] = 1;
CONTEXT_TRIGGER[charCode.slash] = 1;
// Bucket terminators by their first character
for (const word of SET_CLAUSE_TERMINATORS) {
    const first = word.charCodeAt(0);
    const bucket = SET_CLAUSE_TERMINATORS_BY_FIRST[first];
    if (bucket)
        bucket.push(word);
    else
        SET_CLAUSE_TERMINATORS_BY_FIRST[first] = [word];
}
const hasOwnProperty = Object.prototype.hasOwnProperty;
const isRecord = (value) => typeof value === 'object' &&
    value !== null &&
    !Array.isArray(value) &&
    !(value instanceof Set) &&
    !(value instanceof Map);
const isWordChar = (code) => (code >= 65 && code <= 90) ||
    (code >= 97 && code <= 122) ||
    (code >= 48 && code <= 57) ||
    code === 95;
const isWhitespace = (code) => code === charCode.space ||
    code === charCode.tab ||
    code === charCode.newline ||
    code === charCode.carriageReturn;
const toLower = (code) => code | 32;
const matchesWord = (sql, position, word, length) => {
    const wordLength = word.length;
    for (let offset = 0; offset < wordLength; offset++)
        if (toLower(sql.charCodeAt(position + offset)) !== word.charCodeAt(offset))
            return false;
    return ((position === 0 || !isWordChar(sql.charCodeAt(position - 1))) &&
        (position + wordLength >= length ||
            !isWordChar(sql.charCodeAt(position + wordLength))));
};
const skipSqlContext = (sql, position) => {
    const currentChar = sql.charCodeAt(position);
    const nextChar = sql.charCodeAt(position + 1);
    if (currentChar === charCode.singleQuote) {
        for (let cursor = position + 1; cursor < sql.length; cursor++) {
            if (sql.charCodeAt(cursor) === charCode.backslash)
                cursor++;
            else if (sql.charCodeAt(cursor) === charCode.singleQuote)
                return cursor + 1;
        }
        return sql.length;
    }
    if (currentChar === charCode.backtick) {
        const length = sql.length;
        for (let cursor = position + 1; cursor < length; cursor++) {
            if (sql.charCodeAt(cursor) !== charCode.backtick)
                continue;
            if (sql.charCodeAt(cursor + 1) === charCode.backtick) {
                cursor++;
                continue;
            }
            return cursor + 1;
        }
        return length;
    }
    if (currentChar === charCode.dash && nextChar === charCode.dash) {
        const afterDash = sql.charCodeAt(position + 2);
        if (Number.isNaN(afterDash) || afterDash <= charCode.space) {
            const lineBreak = sql.indexOf('\\n', position + 2);
            return lineBreak === -1 ? sql.length : lineBreak + 1;
        }
        return -1;
    }
    if (currentChar === charCode.slash && nextChar === charCode.asterisk) {
        const markerChar = sql.charCodeAt(position + 2);
        if (markerChar === charCode.exclamation || markerChar === charCode.plus)
            return -1;
        const commentEnd = sql.indexOf('*/', position + 2);
        return commentEnd === -1 ? sql.length : commentEnd + 2;
    }
    return -1;
};
const findNextPlaceholder = (sql, start) => {
    const sqlLength = sql.length;
    for (let position = start; position < sqlLength; position++) {
        const code = sql.charCodeAt(position);
        if (code === charCode.questionMark)
            return position;
        if (code < 128 && CONTEXT_TRIGGER[code]) {
            const contextEnd = skipSqlContext(sql, position);
            if (contextEnd !== -1)
                position = contextEnd - 1;
        }
    }
    return -1;
};
const isInSetAssignmentList = (sql, setEnd, placeholderPosition) => {
    const length = sql.length;
    let depth = 0;
    let sawContent = false;
    let lastWasComma = false;
    for (let i = setEnd; i < placeholderPosition;) {
        const code = sql.charCodeAt(i);
        if (code < 128 && CONTEXT_TRIGGER[code]) {
            const contextEnd = skipSqlContext(sql, i);
            if (contextEnd !== -1) {
                i = contextEnd;
                sawContent = true;
                lastWasComma = false;
                continue;
            }
        }
        if (isWhitespace(code)) {
            i++;
            continue;
        }
        if (code === charCode.openParen) {
            depth++;
            sawContent = true;
            lastWasComma = false;
            i++;
            continue;
        }
        if (code === charCode.closeParen) {
            if (--depth < 0)
                return false;
            sawContent = true;
            lastWasComma = false;
            i++;
            continue;
        }
        if (isWordChar(code)) {
            if (depth === 0 && !(code >= 48 && code <= 57)) {
                const bucket = SET_CLAUSE_TERMINATORS_BY_FIRST[code | 32];
                if (bucket)
                    for (let t = 0; t < bucket.length; t++)
                        if (matchesWord(sql, i, bucket[t], length))
                            return false;
            }
            do {
                i++;
            } while (i < placeholderPosition && isWordChar(sql.charCodeAt(i)));
            sawContent = true;
            lastWasComma = false;
            continue;
        }
        if (depth === 0) {
            if (code === charCode.semicolon)
                return false;
            if (code === charCode.comma) {
                lastWasComma = true;
                sawContent = true;
                i++;
                continue;
            }
        }
        sawContent = true;
        lastWasComma = false;
        i++;
    }
    return depth === 0 && (!sawContent || lastWasComma);
};
const findSetKeyword = (sql, startFrom = 0) => {
    const length = sql.length;
    for (let position = startFrom; position < length; position++) {
        const code = sql.charCodeAt(position);
        if (code < 128 && CONTEXT_TRIGGER[code]) {
            const contextEnd = skipSqlContext(sql, position);
            if (contextEnd !== -1) {
                position = contextEnd - 1;
                continue;
            }
        }
        const lower = code | 32;
        if (lower === 115 && matchesWord(sql, position, 'set', length))
            return position + 3;
        if (lower === 107 && matchesWord(sql, position, 'key', length)) {
            let cursor = position + 3;
            while (cursor < length && isWhitespace(sql.charCodeAt(cursor)))
                cursor++;
            if (matchesWord(sql, cursor, 'update', length))
                return cursor + 6;
        }
    }
    return -1;
};
const isDate = (value) => Object.prototype.toString.call(value) === '[object Date]';
const isTemporal = (value) => Object.prototype.toString.call(value).startsWith('[object Temporal.');
const hasSqlString = (value) => typeof value === 'object' &&
    value !== null &&
    'toSqlString' in value &&
    typeof value.toSqlString === 'function';
const escapeString = (value) => {
    const escapeChars = regex.escapeChars;
    escapeChars.lastIndex = 0;
    const first = escapeChars.exec(value);
    if (first === null)
        return \`'\${value}'\`;
    const length = value.length;
    let result = "'" + value.slice(0, first.index);
    let chunkStart = first.index;
    for (let i = first.index; i < length; i++) {
        let escaped;
        switch (value.charCodeAt(i)) {
            case 0:
                escaped = '\\\\0';
                break;
            case 8:
                escaped = '\\\\b';
                break;
            case 9:
                escaped = '\\\\t';
                break;
            case 10:
                escaped = '\\\\n';
                break;
            case 13:
                escaped = '\\\\r';
                break;
            case 26:
                escaped = '\\\\Z';
                break;
            case 34:
                escaped = '\\\\"';
                break;
            case 39:
                escaped = "\\\\'";
                break;
            case 92:
                escaped = '\\\\\\\\';
                break;
            default:
                continue;
        }
        result += value.slice(chunkStart, i) + escaped;
        chunkStart = i + 1;
    }
    return result + value.slice(chunkStart) + "'";
};
const pad2 = (value) => (value < 10 ? '0' + value : '' + value);
const pad3 = (value) => value < 10 ? '00' + value : value < 100 ? '0' + value : '' + value;
const pad4 = (value) => value < 10
    ? '000' + value
    : value < 100
        ? '00' + value
        : value < 1000
            ? '0' + value
            : '' + value;
const convertTimezone = (tz) => {
    if (tz === 'Z')
        return 0;
    const timezoneMatch = tz.match(regex.timezone);
    if (timezoneMatch)
        return ((timezoneMatch[1] === '-' ? -1 : 1) *
            (Number.parseInt(timezoneMatch[2], 10) +
                (timezoneMatch[3] ? Number.parseInt(timezoneMatch[3], 10) : 0) / 60) *
            60);
    return false;
};
const dateToString = (date, timezone) => {
    if (Number.isNaN(date.getTime()))
        return 'NULL';
    let year;
    let month;
    let day;
    let hour;
    let minute;
    let second;
    let millisecond;
    if (timezone === 'local') {
        year = date.getFullYear();
        month = date.getMonth() + 1;
        day = date.getDate();
        hour = date.getHours();
        minute = date.getMinutes();
        second = date.getSeconds();
        millisecond = date.getMilliseconds();
    }
    else {
        const timezoneOffsetMinutes = convertTimezone(timezone);
        let time = date.getTime();
        if (timezoneOffsetMinutes !== false && timezoneOffsetMinutes !== 0)
            time += timezoneOffsetMinutes * 60000;
        const adjustedDate = new Date(time);
        year = adjustedDate.getUTCFullYear();
        month = adjustedDate.getUTCMonth() + 1;
        day = adjustedDate.getUTCDate();
        hour = adjustedDate.getUTCHours();
        minute = adjustedDate.getUTCMinutes();
        second = adjustedDate.getUTCSeconds();
        millisecond = adjustedDate.getUTCMilliseconds();
    }
    // YYYY-MM-DD HH:mm:ss.mmm
    return escapeString(pad4(year) +
        '-' +
        pad2(month) +
        '-' +
        pad2(day) +
        ' ' +
        pad2(hour) +
        ':' +
        pad2(minute) +
        ':' +
        pad2(second) +
        '.' +
        pad3(millisecond));
};
exports.$T = dateToString;
const temporalToString = (value, timezone) => {
    if (typeof value.epochMilliseconds === 'number')
        return (0, exports.$T)(new Date(value.epochMilliseconds), timezone || 'local');
    if (value[Symbol.toStringTag] === 'Temporal.PlainDateTime')
        return escapeString(value.toString().replace('T', ' '));
    return escapeString(value.toString());
};
exports.B7 = temporalToString;
const escapeId = (value, forbidQualified) => {
    if (Array.isArray(value)) {
        const length = value.length;
        let sql = '';
        for (let i = 0; i < length; i++) {
            if (i > 0)
                sql += ', ';
            sql += (0, exports.escapeId)(value[i], forbidQualified);
        }
        return sql;
    }
    const identifier = String(value);
    const hasJsonOperator = !forbidQualified && identifier.indexOf('->') !== -1;
    if (forbidQualified || hasJsonOperator) {
        if (identifier.indexOf('\`') === -1)
            return \`\\\`\${identifier}\\\`\`;
        return \`\\\`\${identifier.replace(regex.backtick, '\`\`')}\\\`\`;
    }
    if (identifier.indexOf('\`') === -1 && identifier.indexOf('.') === -1)
        return \`\\\`\${identifier}\\\`\`;
    return \`\\\`\${identifier
        .replace(regex.backtick, '\`\`')
        .replace(regex.dot, '\`.\`')}\\\`\`;
};
exports.escapeId = escapeId;
const objectToValues = (object, timezone) => {
    let sql = '';
    if (object instanceof Map) {
        for (const [key, value] of object) {
            if (typeof value === 'function')
                continue;
            if (sql.length > 0)
                sql += ', ';
            sql += (0, exports.escapeId)(String(key));
            sql += ' = ';
            sql += (0, exports.escape)(value, true, timezone);
        }
        return sql;
    }
    for (const key in object) {
        if (!hasOwnProperty.call(object, key))
            continue;
        const value = object[key];
        if (typeof value === 'function')
            continue;
        if (sql.length > 0)
            sql += ', ';
        sql += (0, exports.escapeId)(key);
        sql += ' = ';
        sql += (0, exports.escape)(value, true, timezone);
    }
    return sql;
};
exports.zX = objectToValues;
const bufferToString = (buffer) => \`X\${escapeString(buffer.toString('hex'))}\`;
exports.JR = bufferToString;
const arrayToList = (array, timezone) => {
    const length = array.length;
    let sql = '';
    for (let i = 0; i < length; i++) {
        if (i > 0)
            sql += ', ';
        const value = array[i];
        if (Array.isArray(value))
            sql += \`(\${(0, exports.Vx)(value, timezone)})\`;
        else if (value instanceof Set)
            sql += \`(\${(0, exports.Vx)(Array.from(value), timezone)})\`;
        else
            sql += (0, exports.escape)(value, true, timezone);
    }
    return sql;
};
exports.Vx = arrayToList;
const escape = (value, stringifyObjects, timezone) => {
    if (value === undefined || value === null)
        return 'NULL';
    switch (typeof value) {
        case 'boolean':
            return value ? 'true' : 'false';
        case 'number':
        case 'bigint':
            return value + '';
        case 'object': {
            if (isDate(value))
                return (0, exports.$T)(value, timezone || 'local');
            if (isTemporal(value))
                return (0, exports.B7)(value, timezone);
            if (Array.isArray(value))
                return (0, exports.Vx)(value, timezone);
            if (value instanceof Set)
                return (0, exports.Vx)(Array.from(value), timezone);
            if (node_buffer_1.Buffer.isBuffer(value))
                return (0, exports.JR)(value);
            if (value instanceof Uint8Array)
                return (0, exports.JR)(node_buffer_1.Buffer.from(value));
            if (hasSqlString(value))
                return String(value.toSqlString());
            if (!(stringifyObjects === undefined || stringifyObjects === null))
                return escapeString(String(value));
            if (isRecord(value) || value instanceof Map)
                return (0, exports.zX)(value, timezone);
            return escapeString(String(value));
        }
        case 'string':
            return escapeString(value);
        default:
            return escapeString(String(value));
    }
};
exports.escape = escape;
const format = (sql, values, stringifyObjects, timezone) => {
    if (values === undefined || values === null)
        return sql;
    const valuesArray = Array.isArray(values) ? values : [values];
    const length = valuesArray.length;
    let setIndex = -2; // -2 = not yet computed, -1 = no SET found
    let nextSetIndex = -1; // -1 = no SET after setIndex
    let result = '';
    let chunkIndex = 0;
    let valuesIndex = 0;
    let placeholderPosition = findNextPlaceholder(sql, 0);
    while (valuesIndex < length && placeholderPosition !== -1) {
        // Count consecutive question marks to detect ? vs ?? vs ???+
        let placeholderEnd = placeholderPosition + 1;
        let escapedValue;
        while (sql.charCodeAt(placeholderEnd) === 63)
            placeholderEnd++;
        const placeholderLength = placeholderEnd - placeholderPosition;
        const currentValue = valuesArray[valuesIndex];
        if (placeholderLength > 2) {
            placeholderPosition = findNextPlaceholder(sql, placeholderEnd);
            continue;
        }
        if (placeholderLength === 2)
            escapedValue = (0, exports.escapeId)(currentValue);
        else if (typeof currentValue === 'number' ||
            typeof currentValue === 'bigint')
            escapedValue = \`\${currentValue}\`;
        else if (typeof currentValue === 'object' &&
            currentValue !== null &&
            !stringifyObjects) {
            const expandable = !(Array.isArray(currentValue) ||
                currentValue instanceof Uint8Array ||
                currentValue instanceof Date ||
                hasSqlString(currentValue) ||
                isDate(currentValue)) &&
                (isRecord(currentValue) || currentValue instanceof Map);
            if (expandable) {
                // A SET assignment follows the keyword (a letter) or a comma continuing the list
                let previous = placeholderPosition - 1;
                while (previous >= chunkIndex && isWhitespace(sql.charCodeAt(previous)))
                    previous--;
                const previousChar = previous >= chunkIndex ? toLower(sql.charCodeAt(previous)) : 0;
                if ((previousChar < 97 || previousChar > 122) &&
                    previousChar !== charCode.comma)
                    escapedValue = (0, exports.escape)(currentValue, true, timezone);
                else {
                    // Lazy: resolve the first SET and its successor once
                    if (setIndex === -2) {
                        setIndex = findSetKeyword(sql);
                        nextSetIndex = setIndex === -1 ? -1 : findSetKeyword(sql, setIndex);
                    }
                    // Nearest: advance to the SET closest before this placeholder
                    while (nextSetIndex !== -1 && nextSetIndex <= placeholderPosition) {
                        setIndex = nextSetIndex;
                        nextSetIndex = findSetKeyword(sql, nextSetIndex);
                    }
                    if (setIndex !== -1 &&
                        setIndex <= placeholderPosition &&
                        isInSetAssignmentList(sql, setIndex, placeholderPosition))
                        escapedValue = (0, exports.zX)(currentValue, timezone);
                    else
                        escapedValue = (0, exports.escape)(currentValue, true, timezone);
                }
            }
            else
                escapedValue = (0, exports.escape)(currentValue, true, timezone);
        }
        else
            escapedValue = (0, exports.escape)(currentValue, stringifyObjects, timezone);
        result += sql.slice(chunkIndex, placeholderPosition);
        result += escapedValue;
        chunkIndex = placeholderEnd;
        valuesIndex++;
        placeholderPosition = findNextPlaceholder(sql, placeholderEnd);
    }
    if (chunkIndex === 0)
        return sql;
    if (chunkIndex < sql.length)
        return result + sql.slice(chunkIndex);
    return result;
};
exports.format = format;
const raw = (sql) => {
    if (typeof sql !== 'string')
        throw new TypeError('argument sql must be a string');
    return {
        toSqlString: () => sql,
    };
};
exports.raw = raw;


/***/ },

/***/ 2706
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Nw: () => (/* binding */ searchData)
/* harmony export */ });
/* unused harmony exports isEqualArray, isEqualObject, queryData, sortData */
/* unused harmony import specifier */ var getValueFromObject;
/* unused harmony import specifier */ var isValidDate;


function isEqualArray(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (!isEqualValue(arr1[i], arr2[i])) {
      return false;
    }
  }
  return true;
}
function isEqualObject(obj1, obj2) {
  if (Object.is(obj1, obj2)) return true;
  if (!obj1 || !obj2 || typeof obj1 !== "object" || typeof obj2 !== "object") {
    return false;
  }
  if (obj1 instanceof Date || obj2 instanceof Date) {
    return obj1 instanceof Date && obj2 instanceof Date && obj1.getTime() === obj2.getTime();
  }
  if (Array.isArray(obj1) || Array.isArray(obj2)) {
    return isEqualArray(obj1, obj2);
  }
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    if (!Object.prototype.hasOwnProperty.call(obj2, key) || !isEqualValue(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
}
function isEqualValue(value1, value2) {
  if (Object.is(value1, value2)) return true;
  if (Array.isArray(value1) || Array.isArray(value2)) {
    return isEqualArray(value1, value2);
  }
  if (value1 && value2 && typeof value1 === "object" && typeof value2 === "object") {
    return isEqualObject(value1, value2);
  }
  return false;
}
function queryMatch(data, query) {
  for (let key of Object.keys(query)) {
    let dataValue;
    try {
      dataValue = getValueFromObject(data, key, true);
    } catch (error) {
      return false;
    }
    if (typeof query[key] === "string" || typeof query[key] === "number" || typeof query[key] === "boolean") {
      if (Array.isArray(dataValue)) return dataValue.includes(query[key]);
      else return dataValue === query[key];
    } else if (Array.isArray(query[key])) {
      if (Array.isArray(dataValue)) {
        return isEqualArray(dataValue, query[key]);
      } else {
        return false;
      }
    } else {
      for (let property of Object.keys(query[key])) {
        if (property === "$options") continue;
        if (!property.startsWith("$")) {
          if (typeof dataValue !== "object") {
            return false;
          } else
            return queryMatch(
              { [property]: getValueFromObject(dataValue, property) },
              { [property]: query[key][property] }
            );
        } else {
          let queryValue = query[key][property];
          if (isValidDate(queryValue) && isValidDate(dataValue)) {
            queryValue = new Date(queryValue);
            dataValue = new Date(dataValue);
          }
          let queryStatus = false;
          switch (property) {
            case "$eq":
              queryStatus = isEqualValue(dataValue, queryValue);
              break;
            case "$ne":
              queryStatus = !isEqualValue(dataValue, queryValue);
              break;
            case "$not":
              queryStatus = !queryMatch(data, {
                [key]: query[key]["$not"]
              });
              break;
            case "$lt":
              queryStatus = dataValue < queryValue;
              break;
            case "$lte":
              queryStatus = dataValue <= queryValue;
              break;
            case "$gt":
              queryStatus = dataValue > queryValue;
              break;
            case "$gte":
              queryStatus = dataValue >= queryValue;
              break;
            case "$in":
              if (Array.isArray(dataValue)) {
                queryStatus = dataValue.some(
                  (element) => queryValue.includes(element)
                );
              } else {
                queryStatus = queryValue.includes(dataValue);
              }
              break;
            case "$nin":
              if (Array.isArray(dataValue)) {
                queryStatus = !dataValue.some(
                  (element) => queryValue.includes(element)
                );
              } else {
                queryStatus = !queryValue.includes(dataValue);
              }
              break;
            case "$all":
              if (Array.isArray(dataValue) && Array.isArray(queryValue)) {
                queryStatus = queryValue.every(
                  (element) => dataValue.includes(element)
                );
              }
              break;
            case "$elemMatch":
              if (Array.isArray(data[key])) {
                queryStatus = data[key].some(
                  (element) => queryMatch(element, query[key][property])
                );
              }
              break;
            case "$size":
              if (Array.isArray(dataValue)) {
                queryStatus = dataValue.length === queryValue;
              }
              break;
            case "$exists":
              queryStatus = queryValue ? data.hasOwnProperty(key) : !data.hasOwnProperty(key);
              break;
            case "$regex":
              if (typeof dataValue === "string") {
                let regexFlag = query[key]["$options"] || "";
                let regex = new RegExp(queryValue, regexFlag);
                queryStatus = regex.test(dataValue);
              }
              break;
            case "$type":
              let dataType = typeof dataValue;
              if (Array.isArray(dataValue)) {
                dataType = "array";
              }
              queryStatus = dataType === queryValue;
              break;
            case "$mod":
              if (typeof dataValue === "number" && Array.isArray(queryValue) && queryValue.length === 2) {
                const [divisor, remainder] = queryValue;
                queryStatus = dataValue % divisor === remainder;
              }
              break;
            case "$where":
              if (typeof queryValue === "function") {
                try {
                } catch (error) {
                  console.error(
                    "Error in queryData $where function:",
                    error
                  );
                }
              }
              break;
            default:
              console.log("unknown operator");
              break;
          }
          if (!queryStatus) return false;
        }
      }
      return true;
    }
  }
}
function queryData(data, query) {
  if (!query) return true;
  if (query.$and) {
    for (let i = 0; i < query.$and.length; i++) {
      if (!queryData(data, query.$and[i])) return false;
    }
  }
  if (query.$nor) {
    for (let i = 0; i < query.$nor.length; i++) {
      if (queryData(data, query.$nor[i])) return false;
    }
  }
  for (let key of Object.keys(query)) {
    if (key === "$and" || key === "$or") continue;
    if (!queryMatch(data, { [key]: query[key] })) return false;
  }
  if (query.$or) {
    for (let i = 0; i < query.$or.length; i++) {
      if (queryData(data, query.$or[i])) return true;
    }
  }
  return true;
}
function searchData(data, search) {
  if (!search) return true;
  if (!Array.isArray(search)) search = [search];
  for (let i = 0; i < search.length; i++) {
    let searchValue = search[i].value;
    if (!Array.isArray(searchValue)) searchValue = [searchValue];
    for (let key in data) {
      let value = data[key];
      let status = false;
      switch (typeof value) {
        case "number":
          value = value.toString();
          break;
        case "object":
          value = JSON.stringify(value);
          break;
        case "function":
          value = value.toString();
          break;
      }
      if (search[i].caseSensitive != "true" || search[i].caseSensitive != true)
        value = value.toLowerCase();
      for (let i2 = 0; i2 < searchValue.length; i2++) {
        let searchString = searchValue[i2];
        if (search[i2].caseSensitive != "true" || search[i2].caseSensitive != true)
          searchString = searchString.toLowerCase();
        if (searchString === "" && search[i2].operator === "and") {
          if (value !== "") return false;
        }
        if (value.indexOf(searchString) > -1) status = true;
        if (status) return true;
        else if (search[i2].operator == "and") return false;
      }
    }
    if (search[i].value.length && search[i].operator == "or") return false;
  }
  return true;
}
function sortData(data, sort) {
  return data.sort((a, b) => {
    for (let i = 0; i < sort.length; i++) {
      let key = sort[i].key;
      if (a[key] == null && b[key] == null) continue;
      if (a[key] == null) return sort[i].direction === "desc" ? -1 : 1;
      if (b[key] == null) return sort[i].direction === "desc" ? 1 : -1;
      if (typeof a[key] !== typeof b[key]) {
        return typeof a[key] < typeof b[key] ? -1 : 1;
      }
      if (a[key] !== b[key]) {
        if (typeof a[key] === "string") {
          return sort[i].direction === "desc" ? b[key].localeCompare(a[key]) : a[key].localeCompare(b[key]);
        } else {
          return sort[i].direction === "desc" ? b[key] - a[key] : a[key] - b[key];
        }
      }
    }
    return 0;
  });
}


/***/ },

/***/ 8625
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   O: () => (/* binding */ dotNotationToObject)
/* harmony export */ });
function dotNotationToObject(data = {}, obj = {}) {
  try {
    data ??= {};
    obj ??= {};
    let arrayGroup = {};
    for (const key of Object.keys(data)) {
      let value = data[key];
      let newObject = obj;
      let oldObject = new Object(obj);
      let keys = key.split(".");
      let length = keys.length - 1;
      for (let i = 0; i < keys.length; i++) {
        if (keys[i].endsWith("]")) {
          if (keys[i].endsWith("[]")) {
            let baseKey = keys[i].slice(0, -2);
            if (!Array.isArray(newObject[baseKey])) {
              newObject[baseKey] = [];
            }
            if (length == i) {
              if (Array.isArray(value)) {
                newObject[baseKey].push(...value);
              } else {
                newObject[baseKey].push(value);
              }
            }
          } else if (/\\[([0-9]+)\\]/g.test(keys[i])) {
            let [k, index] = keys[i].split("[");
            index = index.slice(0, -1);
            if (!Array.isArray(newObject[k])) {
              newObject[k] = [];
            }
            if (length == i) {
              if (value === void 0) {
                newObject[k].splice(index, 1);
              } else {
                newObject[k][index] = value;
              }
            } else {
              newObject[k][index] = oldObject[k][index] || {};
              newObject = newObject[k][index];
              oldObject = oldObject[k][index];
            }
          } else if (/\\[\\w\\]/g.test(keys[i])) {
            let [k, group] = keys[i].split("[");
            group = group.slice(0, -1);
            if (!Array.isArray(newObject[k])) {
              newObject[k] = [];
            }
            let index;
            if (arrayGroup[keys.slice(0, i + 1).join(".")]) {
              index = arrayGroup[keys.slice(0, i + 1).join(".")];
            } else {
              index = newObject[k].length;
              arrayGroup[keys.slice(0, i + 1).join(".")] = index;
              newObject[k][index] = {};
            }
            if (length == i) {
              newObject[k][index] = value;
            } else {
              newObject = newObject[k][index];
            }
          }
        } else {
          if (length == i) {
            if (value === void 0) {
              delete newObject[keys[i]];
            } else {
              newObject[keys[i]] = value;
            }
          } else {
            newObject[keys[i]] = oldObject[keys[i]] || {};
            newObject = newObject[keys[i]];
            oldObject = oldObject[keys[i]];
          }
        }
      }
    }
    return obj;
  } catch (error) {
    console.log("Error converting dot notation to object", error);
    return false;
  }
}


/***/ },

/***/ 1610
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8223);


function array(method, data) {
  const storageName = data.storageConfig?.name;
  return new Promise(
    async (resolve, reject) => {
      let type = "array";
      let arrayArray = [];
      try {
        const pool = await (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__/* .dbClient */ .KC)(data);
        if (!pool || pool.status === false) return resolve(data);
        if (data.request) data.array = data.request;
        let databases = data.database;
        if (!Array.isArray(databases)) databases = [databases];
        let databasesLength = databases.length;
        for (let database of databases) {
          if (method === "read") {
            const sql = "SHOW TABLES;";
            process.emit("usage", {
              type: "egress",
              data: { sql },
              organization_id: data.organization_id
            });
            const [rows] = await pool.query(sql);
            process.emit("usage", {
              type: "ingress",
              data: rows,
              organization_id: data.organization_id
            });
            for (let row of rows) {
              const tableName = Object.values(row)[0];
              const tableObj = { name: tableName };
              if (data.$filter && data.$filter.query) {
                let isFilter = queryData(tableObj, data.$filter.query);
                if (isFilter) {
                  arrayArray.push({
                    name: tableName,
                    database,
                    storage: storageName
                  });
                }
              } else {
                arrayArray.push({
                  name: tableName,
                  database,
                  storage: storageName
                });
              }
            }
            databasesLength -= 1;
            if (!databasesLength) {
              data = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__/* .createData */ .vd)(data, arrayArray, type);
              resolve(data);
            }
          } else {
            let arrays = data.array;
            if (method === "update") arrays = Object.entries(data.array);
            if (!Array.isArray(arrays)) arrays = [arrays];
            let arraysLength = arrays.length;
            for (let array2 of arrays) {
              if (method === "create") {
                const sql = \`
                                    CREATE TABLE IF NOT EXISTS \\\`\${array2.replace(/\`/g, "")}\\\` (
                                        _id VARCHAR(50) PRIMARY KEY,
                                        organization_id VARCHAR(50),
                                        data JSON,
                                        created JSON,
                                        updated JSON
                                    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
                                \`;
                process.emit("usage", {
                  type: "egress",
                  data: { sql },
                  organization_id: data.organization_id
                });
                await pool.query(sql);
                arrayArray.push({
                  name: array2,
                  database,
                  storage: storageName
                });
                arraysLength -= 1;
                if (!arraysLength) databasesLength -= 1;
                if (!databasesLength && !arraysLength) {
                  data = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__/* .createData */ .vd)(data, arrayArray, type);
                  resolve(data);
                }
              } else {
                if (method === "update") {
                  let [oldName, newName] = array2;
                  const sql = \`ALTER TABLE \\\`\${oldName.replace(/\`/g, "")}\\\` RENAME TO \\\`\${newName.replace(/\`/g, "")}\\\`;\`;
                  process.emit("usage", {
                    type: "egress",
                    data: { sql },
                    organization_id: data.organization_id
                  });
                  await pool.query(sql);
                  arrayArray.push({
                    name: newName,
                    oldName,
                    database,
                    storage: storageName
                  });
                  arraysLength -= 1;
                  if (!arraysLength) databasesLength -= 1;
                  if (!databasesLength && !arraysLength) {
                    data = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__/* .createData */ .vd)(data, arrayArray, type);
                    resolve(data);
                  }
                }
                if (method === "delete") {
                  const sql = \`DROP TABLE IF EXISTS \\\`\${array2.replace(/\`/g, "")}\\\`;\`;
                  process.emit("usage", {
                    type: "egress",
                    data: { sql },
                    organization_id: data.organization_id
                  });
                  await pool.query(sql);
                  arrayArray.push({
                    name: array2,
                    database,
                    storage: storageName
                  });
                  arraysLength -= 1;
                  if (!arraysLength) databasesLength -= 1;
                  if (!databasesLength && !arraysLength) {
                    data = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__/* .createData */ .vd)(data, arrayArray, type);
                    resolve(data);
                  }
                }
              }
            }
          }
        }
      } catch (error) {
        ;(0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__/* .errorHandler */ .r_)(data, error);
        console.log(method, "error", error);
        resolve(data);
      }
    }
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (array);

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 6106
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8223);


function database(method, data) {
  const storageName = data.storageConfig?.name;
  return new Promise(
    async (resolve, reject) => {
      let type = "database";
      let databaseArray = [];
      try {
        const pool = await (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__/* .dbClient */ .KC)(data);
        if (!pool || pool.status === false) return resolve(data);
        if (method === "read") {
          const sql = "SHOW DATABASES;";
          process.emit("usage", {
            type: "egress",
            data: { sql },
            organization_id: data.organization_id
          });
          const [rows] = await pool.query(sql);
          process.emit("usage", {
            type: "ingress",
            data: rows,
            organization_id: data.organization_id
          });
          for (let row of rows) {
            const dbName = row.Database || row.database || Object.values(row)[0];
            const dbObj = { name: dbName };
            if (data.$filter && data.$filter.query) {
              let isFilter = queryData(dbObj, data.$filter.query);
              if (isFilter) {
                databaseArray.push({
                  database: dbObj,
                  storage: storageName
                });
              }
            } else {
              databaseArray.push({
                database: dbObj,
                storage: storageName
              });
            }
          }
          resolve((0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__/* .createData */ .vd)(data, databaseArray, type));
        }
        if (method === "delete") {
          const dbName = data.database;
          const sql = \`DROP DATABASE IF EXISTS \\\`\${dbName.replace(/\`/g, "")}\\\`;\`;
          process.emit("usage", {
            type: "egress",
            data: { sql },
            organization_id: data.organization_id
          });
          const [result] = await pool.query(sql);
          process.emit("usage", {
            type: "ingress",
            data: result,
            organization_id: data.organization_id
          });
          resolve({ status: true });
        }
      } catch (error) {
        ;(0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__/* .errorHandler */ .r_)(data, error);
        console.log(method, "error", error);
        resolve(data);
      }
    }
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (database);

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 7631
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export send */
/* harmony import */ var _database_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6106);
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1610);
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9968);



async function send(data) {
  if (!data || !data.method) {
    throw new Error("Invalid request: missing method property.");
  }
  const [type, method] = data.method.split(".");
  if (type === "database") return await (0,_database_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(method, data);
  if (type === "array") return await (0,_array_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(method, data);
  if (type === "object") return await (0,_object_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(method, data);
  throw new Error(\`Unsupported query target type: "\${type}" in method "\${data.method}"\`);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ send });

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 9968
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _cocreate_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8625);
/* harmony import */ var _cocreate_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2706);
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8223);


function object(method, data) {
  const storageName = data.storageConfig?.name;
  return new Promise(
    async (resolve, reject) => {
      try {
        const pool = await (0,_utilities_js__WEBPACK_IMPORTED_MODULE_2__/* .dbClient */ .KC)(data);
        if (!pool || pool.status === false) return resolve(data);
        let type = "object";
        let documents = [];
        if (!data["timeStamp"]) {
          data["timeStamp"] = (/* @__PURE__ */ new Date()).toISOString();
        }
        let databases = data.database;
        if (!Array.isArray(databases)) databases = [databases];
        for (let database of databases) {
          let arrays = data.array;
          if (!Array.isArray(arrays)) arrays = [arrays];
          for (let array of arrays) {
            const reference = {
              $storage: storageName,
              $database: database,
              $array: array
            };
            if (!data[type]) data[type] = [];
            else if (typeof data[type] === "string")
              data[type] = [{ _id: data[type] }];
            else if (!Array.isArray(data[type]))
              data[type] = [data[type]];
            let isFilter = !!data.$filter;
            if (isFilter && !data[type].length || data.isFilter) {
              data[type].splice(0, 0, { isFilter: "isEmptyObjectFilter" });
            }
            for (let i = 0; i < data[type].length; i++) {
              let $storage = data[type][i].$storage || [];
              let $database = data[type][i].$database || [];
              let $array = data[type][i].$array || [];
              if (!Array.isArray($storage)) $storage = [data[type][i].$storage];
              if (!Array.isArray($database)) $database = [data[type][i].$database];
              if (!Array.isArray($array)) $array = [data[type][i].$array];
              if (!$storage.includes(storageName)) $storage.push(storageName);
              if (!$database.includes(database)) $database.push(database);
              if (!$array.includes(array)) $array.push(array);
              delete data[type][i].$storage;
              delete data[type][i].$database;
              delete data[type][i].$array;
              let queryFilter = isFilter ? data.$filter : data[type][i].$filter || null;
              let { sqlWhere, params } = compileFilterToSQL(queryFilter, data.organization_id);
              if (method === "create") {
                data[type][i] = replaceArray(data[type][i]);
                data[type][i] = (0,_cocreate_utils__WEBPACK_IMPORTED_MODULE_0__/* .dotNotationToObject */ .O)(data[type][i]);
                const id = data[type][i]._id || \`row_\${Date.now()}_\${Math.random().toString(36).substr(2, 9)}\`;
                const orgId = data.organization_id;
                const created = {
                  on: new Date(data.timeStamp),
                  by: data.user_id || data.clientId
                };
                const recordPayload = { ...data[type][i] };
                delete recordPayload._id;
                delete recordPayload.organization_id;
                const sql = \`
                                    INSERT INTO \\\`\${array.replace(/\`/g, "")}\\\` (_id, organization_id, data, created, updated)
                                    VALUES (?, ?, ?, ?, NULL);
                                \`;
                const queryParams = [id, orgId, JSON.stringify(recordPayload), JSON.stringify(created)];
                process.emit("usage", {
                  type: "egress",
                  data: { sql, queryParams },
                  organization_id: data.organization_id
                });
                await pool.query(sql, queryParams);
                const selectSql = \`SELECT * FROM \\\`\${array.replace(/\`/g, "")}\\\` WHERE _id = ? AND organization_id = ?\`;
                const [createdDocs] = await pool.query(selectSql, [id, orgId]);
                if (createdDocs.length > 0) {
                  const formattedDoc = parseSqlRow(createdDocs[0]);
                  data[type][i] = { ...formattedDoc, $storage, $database, $array };
                }
              } else if (method === "read") {
                let sql = \`SELECT * FROM \\\`\${array.replace(/\`/g, "")}\\\` \${sqlWhere}\`;
                if (data.$filter && data.$filter.sort) {
                  const sortClauses = data.$filter.sort.map((s) => {
                    let dir = s.direction === -1 || s.direction === "desc" ? "DESC" : "ASC";
                    if (["_id", "organization_id"].includes(s.key)) {
                      return \`\\\`\${s.key}\\\` \${dir}\`;
                    }
                    return \`JSON_UNQUOTE(JSON_EXTRACT(data, '$.\${s.key}')) \${dir}\`;
                  });
                  sql += \` ORDER BY \${sortClauses.join(", ")}\`;
                }
                if (data.$filter && typeof data.$filter.limit === "number") {
                  sql += \` LIMIT \${data.$filter.limit}\`;
                }
                if (data.$filter && typeof data.$filter.index === "number") {
                  sql += \` OFFSET \${data.$filter.index}\`;
                }
                if (data[type][i]._id && !isFilter) {
                  sql = \`SELECT * FROM \\\`\${array.replace(/\`/g, "")}\\\` WHERE _id = ? AND organization_id = ?\`;
                  params = [data[type][i]._id, data.organization_id];
                }
                process.emit("usage", {
                  type: "egress",
                  data: { sql, params },
                  organization_id: data.organization_id
                });
                const [rows] = await pool.query(sql, params);
                process.emit("usage", {
                  type: "ingress",
                  data: rows,
                  organization_id: data.organization_id
                });
                if (isFilter) {
                  for (let row of rows) {
                    const parsedRow = parseSqlRow(row);
                    if (data.$filter && data.$filter.search) {
                      let isMatch = (0,_cocreate_utils__WEBPACK_IMPORTED_MODULE_1__/* .searchData */ .Nw)(parsedRow, data.$filter.search);
                      if (!isMatch) continue;
                    }
                    documents.push({
                      ...parsedRow,
                      ...reference
                    });
                  }
                } else if (rows.length > 0) {
                  let dbRecord = parseSqlRow(rows[0]);
                  if ($storage.length && data[type][i].updated && data[type][i].updated.on) {
                    let clientTime = new Date(data[type][i].updated.on);
                    let dbTime = new Date(dbRecord.updated ? dbRecord.updated.on : 0);
                    if (clientTime > dbTime) {
                      const updatedRecord = { ...dbRecord, ...data[type][i] };
                      const savedRecord = await executeUpdateTransaction(pool, array, data[type][i]._id, updatedRecord, data);
                      data[type][i] = { ...savedRecord, $storage, $database, $array };
                    } else {
                      data[type][i] = { ...data[type][i], ...dbRecord, $storage, $database, $array };
                    }
                  } else {
                    data[type][i] = {
                      ...data[type][i],
                      ...dbRecord,
                      $storage,
                      $database,
                      $array
                    };
                  }
                } else {
                  data[type].splice(i, 1);
                  i--;
                }
              } else if (method === "update") {
                const updatePayload = { ...data[type][i] };
                delete updatePayload._id;
                delete updatePayload.$filter;
                if (data[type][i]._id) {
                  const updatedDoc = await executeUpdateTransaction(pool, array, data[type][i]._id, updatePayload, data);
                  if (updatedDoc) {
                    data[type][i] = { ...updatedDoc, $storage, $database, $array };
                  }
                } else if (isFilter) {
                  const selectSql = \`SELECT _id FROM \\\`\${array.replace(/\`/g, "")}\\\` \${sqlWhere}\`;
                  process.emit("usage", {
                    type: "egress",
                    data: { selectSql, params },
                    organization_id: data.organization_id
                  });
                  const [selectRows] = await pool.query(selectSql, params);
                  for (let row of selectRows) {
                    const updatedDoc = await executeUpdateTransaction(pool, array, row._id, updatePayload, data);
                    if (updatedDoc) {
                      documents.push({ ...updatedDoc, ...reference });
                    }
                  }
                }
              } else if (method === "delete") {
                let sql, queryParams;
                if (data[type][i]._id) {
                  sql = \`DELETE FROM \\\`\${array.replace(/\`/g, "")}\\\` WHERE _id = ? AND organization_id = ?;\`;
                  queryParams = [data[type][i]._id, data.organization_id];
                } else if (isFilter) {
                  sql = \`DELETE FROM \\\`\${array.replace(/\`/g, "")}\\\` \${sqlWhere};\`;
                  queryParams = params;
                }
                if (sql) {
                  process.emit("usage", {
                    type: "egress",
                    data: { sql, queryParams },
                    organization_id: data.organization_id
                  });
                  const [runResult] = await pool.query(sql, queryParams);
                  process.emit("usage", {
                    type: "ingress",
                    data: runResult,
                    organization_id: data.organization_id
                  });
                  if (isFilter) {
                    documents.push({ _id: data[type][i]._id, ...reference });
                  } else {
                    data[type][i] = { _id: data[type][i]._id, $storage, $database, $array };
                  }
                }
              }
            }
          }
        }
        data = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_2__/* .createData */ .vd)(data, documents, type);
        resolve(data);
      } catch (error) {
        ;(0,_utilities_js__WEBPACK_IMPORTED_MODULE_2__/* .errorHandler */ .r_)(data, error);
        console.log(method, "error", error);
        resolve(data);
      }
    }
  );
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (object);

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ ]);


/***/ },

/***/ 8223
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KC: () => (/* binding */ dbClient),
/* harmony export */   r_: () => (/* binding */ errorHandler),
/* harmony export */   vd: () => (/* binding */ createData)
/* harmony export */ });
/* unused harmony import specifier */ var queryData;
/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7262);


const organizations = {};
async function dbClient(data) {
  const storageUrl = data.storageConfig?.url;
  if (storageUrl) {
    if (!organizations[data.organization_id]) {
      organizations[data.organization_id] = {};
    }
    try {
      if (!organizations[data.organization_id][storageUrl]) {
        const poolPromise = (async () => {
          const pool = mysql2_promise__WEBPACK_IMPORTED_MODULE_0__.createPool({
            uri: storageUrl,
            connectionLimit: 10,
            idleTimeout: 3e4,
            connectTimeout: 5e3,
            enableKeepAlive: true,
            keepAliveInitialDelay: 1e4
          });
          const connection = await pool.getConnection();
          connection.release();
          return pool;
        })();
        organizations[data.organization_id][storageUrl] = poolPromise;
      }
      return await organizations[data.organization_id][storageUrl];
    } catch (error) {
      console.error(
        \`\${data.organization_id}: storageUrl \${storageUrl} failed to connect to MySQL/MariaDB\`
      );
      errorHandler(data, error);
      return { status: false };
    }
  }
  errorHandler(data, "missing StorageUrl");
  return;
}
process.on("orgDeleted", (organization_id) => {
  const orgPools = organizations[organization_id];
  if (orgPools) {
    console.log(\`[MySQL Utilities] Cleanup Scheduled: Initiating 5-second grace period for Org: \${organization_id}\`);
    setTimeout(async () => {
      const currentPools = organizations[organization_id];
      if (!currentPools) return;
      console.log(\`[MySQL Utilities] Cleanup Executing: Closing connection pools for Org: \${organization_id}\`);
      const poolPromises = Object.values(currentPools);
      for (const poolPromise of poolPromises) {
        try {
          const pool = await poolPromise;
          if (pool && typeof pool.end === "function") {
            await pool.end();
          }
        } catch (err) {
          console.error(\`[MySQL Utilities] Error closing connection pool for Org \${organization_id}:\`, err);
        }
      }
      delete organizations[organization_id];
      console.log(\`[MySQL Utilities] Memory Cleared: Registry freed for Org: \${organization_id}\`);
    }, 5e3);
  }
});
async function executeUpdateTransaction(pool, arrayName, docId, rawUpdateInput, requestData) {
  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction();
    const selectSql = \`SELECT * FROM \\\`\${arrayName.replace(/\`/g, "")}\\\` WHERE _id = ? AND organization_id = ? FOR UPDATE;\`;
    const [selectRows] = await connection.query(selectSql, [docId, requestData.organization_id]);
    let currentRecord = selectRows.length > 0 ? parseSqlRow(selectRows[0]) : null;
    if (!currentRecord) {
      if (requestData.upsert || rawUpdateInput.upsert || rawUpdateInput.$upsert) {
        currentRecord = { _id: docId, organization_id: requestData.organization_id };
      } else {
        await connection.rollback();
        return null;
      }
    }
    const updated = {
      on: new Date(requestData.timeStamp),
      by: requestData.user_id || requestData.clientId
    };
    const updatedPayload = applyMongoUpdate(currentRecord, rawUpdateInput);
    const savePayload = { ...updatedPayload };
    delete savePayload._id;
    delete savePayload.organization_id;
    delete savePayload.created;
    delete savePayload.updated;
    const updateSql = \`
			UPDATE \\\`\${arrayName.replace(/\`/g, "")}\\\`
			SET data = ?,
			    updated = ?
			WHERE _id = ? AND organization_id = ?;
		\`;
    const updateParams = [JSON.stringify(savePayload), JSON.stringify(updated), docId, requestData.organization_id];
    process.emit("usage", {
      type: "egress",
      data: { sql: updateSql, updateParams },
      organization_id: requestData.organization_id
    });
    await connection.query(updateSql, updateParams);
    await connection.commit();
    const [finalRecordRaw] = await pool.query(\`SELECT * FROM \\\`\${arrayName.replace(/\`/g, "")}\\\` WHERE _id = ? AND organization_id = ?\`, [docId, requestData.organization_id]);
    return parseSqlRow(finalRecordRaw[0]);
  } catch (error) {
    await connection.rollback();
    throw error;
  } finally {
    connection.release();
  }
}
function applyMongoUpdate(record, updatePayload) {
  let target = { ...record };
  Object.keys(updatePayload).forEach((rawKey) => {
    if (rawKey.startsWith("$")) return;
    let cleanKey = rawKey.replace(/\\[(\\d+)\\]/g, ".$1");
    setNestedValue(target, cleanKey, updatePayload[rawKey]);
  });
  if (updatePayload.$set) {
    Object.keys(updatePayload.$set).forEach((key) => {
      let cleanKey = key.replace(/\\[(\\d+)\\]/g, ".$1");
      setNestedValue(target, cleanKey, updatePayload.$set[key]);
    });
  }
  if (updatePayload.$unset) {
    Object.keys(updatePayload.$unset).forEach((key) => {
      let cleanKey = key.replace(/\\[(\\d+)\\]/g, ".$1");
      deleteNestedValue(target, cleanKey);
    });
  }
  if (updatePayload.$inc) {
    Object.keys(updatePayload.$inc).forEach((key) => {
      let cleanKey = key.replace(/\\[(\\d+)\\]/g, ".$1");
      let currentVal = getNestedValue(target, cleanKey) || 0;
      setNestedValue(target, cleanKey, Number(currentVal) + Number(updatePayload.$inc[key]));
    });
  }
  if (updatePayload.$push) {
    Object.keys(updatePayload.$push).forEach((key) => {
      let cleanKey = key.replace(/\\[(\\d+)\\]/g, ".$1");
      let arr = getNestedValue(target, cleanKey);
      if (!Array.isArray(arr)) arr = [];
      const pushValue = updatePayload.$push[key];
      if (pushValue && pushValue.$each) {
        let valuesToPush = pushValue.$each;
        let position = typeof pushValue.$position === "number" ? pushValue.$position : arr.length;
        arr.splice(position, 0, ...valuesToPush);
      } else {
        arr.push(pushValue);
      }
      setNestedValue(target, cleanKey, arr);
    });
  }
  if (updatePayload.$pull) {
    Object.keys(updatePayload.$pull).forEach((key) => {
      let cleanKey = key.replace(/\\[(\\d+)\\]/g, ".$1");
      let arr = getNestedValue(target, cleanKey);
      if (Array.isArray(arr)) {
        const filterVal = updatePayload.$pull[key];
        arr = arr.filter((item) => {
          if (typeof filterVal === "object" && filterVal !== null) {
            return !queryData(item, filterVal);
          }
          return item !== filterVal;
        });
        setNestedValue(target, cleanKey, arr);
      }
    });
  }
  if (updatePayload.$addToSet) {
    Object.keys(updatePayload.$addToSet).forEach((key) => {
      let cleanKey = key.replace(/\\[(\\d+)\\]/g, ".$1");
      let arr = getNestedValue(target, cleanKey);
      if (!Array.isArray(arr)) arr = [];
      const addValue = updatePayload.$addToSet[key];
      if (addValue && addValue.$each) {
        addValue.$each.forEach((item) => {
          if (!arr.includes(item)) arr.push(item);
        });
      } else {
        if (!arr.includes(addValue)) arr.push(addValue);
      }
      setNestedValue(target, cleanKey, arr);
    });
  }
  return target;
}
function compileFilterToSQL(filter, organizationId) {
  let clauses = ["organization_id = ?"];
  let params = [organizationId];
  if (filter && filter.query) {
    const parseConditionGroup = (queryObj, isOrJoin = false) => {
      let localClauses = [];
      if (queryObj.$or && Array.isArray(queryObj.$or)) {
        let orClauses = queryObj.$or.map((subQuery) => parseConditionGroup(subQuery)).filter((c) => c.length);
        if (orClauses.length) {
          localClauses.push("(" + orClauses.join(" OR ") + ")");
        }
      }
      if (queryObj.$and && Array.isArray(queryObj.$and)) {
        let andClauses = queryObj.$and.map((subQuery) => parseConditionGroup(subQuery)).filter((c) => c.length);
        if (andClauses.length) {
          localClauses.push("(" + andClauses.join(" AND ") + ")");
        }
      }
      for (let key in queryObj) {
        if (["$or", "$and"].includes(key)) continue;
        let value = queryObj[key];
        const targetField = ["_id", "organization_id"].includes(key) ? \`\\\`\${key}\\\`\` : \`JSON_UNQUOTE(JSON_EXTRACT(data, '$.\${key}'))\`;
        if (value && typeof value === "object" && !Array.isArray(value)) {
          for (let op in value) {
            let operand = value[op];
            params.push(operand);
            if (op === "$gt") localClauses.push(\`\${targetField} > ?\`);
            else if (op === "$gte") localClauses.push(\`\${targetField} >= ?\`);
            else if (op === "$lt") localClauses.push(\`\${targetField} < ?\`);
            else if (op === "$lte") localClauses.push(\`\${targetField} <= ?\`);
            else if (op === "$ne") localClauses.push(\`\${targetField} != ?\`);
            else if (op === "$in") {
              params.pop();
              const placeholders = operand.map(() => "?").join(", ");
              operand.forEach((o) => params.push(o));
              localClauses.push(\`\${targetField} IN (\${placeholders})\`);
            }
          }
        } else {
          params.push(value);
          localClauses.push(\`\${targetField} = ?\`);
        }
      }
      return localClauses.join(isOrJoin ? " OR " : " AND ");
    };
    const processedQuery = parseConditionGroup(filter.query);
    if (processedQuery) {
      clauses.push(processedQuery);
    }
  }
  return {
    sqlWhere: clauses.length > 0 ? "WHERE " + clauses.join(" AND ") : "",
    params
  };
}
function parseSqlRow(row) {
  if (!row) return null;
  const recordData = typeof row.data === "string" ? JSON.parse(row.data) : row.data || {};
  return {
    _id: row._id,
    organization_id: row.organization_id,
    created: typeof row.created === "string" ? JSON.parse(row.created) : row.created,
    updated: typeof row.updated === "string" ? JSON.parse(row.updated) : row.updated,
    ...recordData
  };
}
function replaceArray(data = {}) {
  let object = {};
  Object.keys(data).forEach((key) => {
    object[key.replace(/\\[(\\d+)\\]/g, ".$1")] = data[key];
  });
  return object;
}
function getNestedValue(obj, path) {
  return path.split(".").reduce((acc, part) => acc && acc[part], obj);
}
function setNestedValue(obj, path, value) {
  const parts = path.split(".");
  const last = parts.pop();
  const target = parts.reduce((acc, part) => acc[part] = acc[part] || {}, obj);
  target[last] = value;
}
function deleteNestedValue(obj, path) {
  const parts = path.split(".");
  const last = parts.pop();
  const target = parts.reduce((acc, part) => acc && acc[part], obj);
  if (target) delete target[last];
}
function createData(data, array, type) {
  if (data[type] && data[type][0] && data[type][0].isFilter === "isEmptyObjectFilter") {
    data[type].shift();
    data.isFilter = true;
  }
  let key = type !== "object" ? "name" : "_id";
  if (!Array.isArray(data[type])) {
    console.log("data[type] is not an array", type);
  } else {
    for (let i = 0; i < array.length; i++) {
      const matchIndex = data[type].findIndex((item) => item[key] === array[i][key]);
      if (matchIndex !== -1) {
        for (let $type of ["$storage", "$database", "$array"]) {
          if (!data[type][matchIndex][$type]) data[type][matchIndex][$type] = [];
          if (!Array.isArray(data[type][matchIndex][$type])) {
            data[type][matchIndex][$type] = [data[type][matchIndex][$type]];
          }
          if (!data[type][matchIndex][$type].includes(array[i][$type])) {
            data[type][matchIndex][$type].push(array[i][$type]);
          }
          delete array[i][$type];
        }
        data[type][matchIndex] = { ...data[type][matchIndex], ...array[i] };
      } else {
        data[type].push(array[i]);
      }
    }
  }
  return data;
}
function errorHandler(data, error, database, array) {
  let errorMessage = typeof error === "object" && error.message ? error.message : error;
  let errorObject = {
    message: errorMessage,
    storage: "mysql"
  };
  if (database) errorObject.database = database;
  if (array) errorObject.array = array;
  if (Array.isArray(data.error)) {
    data.error.push(errorObject);
  } else {
    data.error = [errorObject];
  }
}



/***/ },

/***/ 181
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("buffer");

/***/ },

/***/ 6982
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("crypto");

/***/ },

/***/ 4434
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("events");

/***/ },

/***/ 9278
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("net");

/***/ },

/***/ 4573
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("node:buffer");

/***/ },

/***/ 3053
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("node:diagnostics_channel");

/***/ },

/***/ 932
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("process");

/***/ },

/***/ 2203
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("stream");

/***/ },

/***/ 3557
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("timers");

/***/ },

/***/ 4756
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("tls");

/***/ },

/***/ 7016
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("url");

/***/ },

/***/ 9023
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("util");

/***/ },

/***/ 3106
(module) {

module.exports = __WEBPACK_EXTERNAL_createRequire_require("zlib");

/***/ },

/***/ 5604
(module) {

module.exports = {"version":"3.24.2"};

/***/ }

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ const __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	const cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	const module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ // define getter/value functions for harmony exports
/******/ __webpack_require__.d = (exports, definition) => {
/******/ 	if(Array.isArray(definition)) {
/******/ 		var i = 0;
/******/ 		while(i < definition.length) {
/******/ 			var key = definition[i++];
/******/ 			var binding = definition[i++];
/******/ 			var descriptor = binding === 0 ? { enumerable: true, value: definition[i++] } : { enumerable: true, get: binding };
/******/ 			if(!__webpack_require__.o(exports, key)) Object.defineProperty(exports, key, descriptor);
/******/ 		}
/******/ 	} else {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	}
/******/ };
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ __webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 
/************************************************************************/
let __webpack_exports__ = {};
/* harmony import */ var _cocreate_mysql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7631);

const send = (data) => {
  return _cocreate_mysql__WEBPACK_IMPORTED_MODULE_0__/* ["default"].send */ .A.send(data);
};
/* harmony default export */ const src = ({ send });

/* harmony export */ __webpack_require__.d(__webpack_exports__, [
/* harmony export */   "A", 0, /* export default binding */ src,
/* harmony export */   "t", 0, /* binding */ send
/* harmony export */ ]);

const __webpack_exports__default = __webpack_exports__.A;
export { __webpack_exports__default as default, send };
`,extractDatabase(){try{const n=s.join(process.cwd(),".storages"),e=s.join(n,"tidb.js");t.existsSync(n)||t.mkdirSync(n,{recursive:!0}),t.existsSync(e)?console.log(`[Storage Boot] TiDB module present on disk at: ${e}`):this.payload?(console.log(`[Storage Boot] Extracting embedded database payload to: ${e}`),t.writeFileSync(e,this.payload,"utf8"),console.log("[Storage Boot] Database extraction complete.")):console.log("[Storage Boot] Database file missing, but no embedded payload present.")}catch(n){console.error("[Storage Boot Error] Failed to extract database payload:",n.message)}finally{this.payload=null}}};r&&(r.extractDatabase(),r=null);
