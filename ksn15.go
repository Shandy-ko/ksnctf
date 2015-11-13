package main

import (
	"bytes"
	"crypto/aes"
	"crypto/cipher"
	"crypto/sha256"
	"encoding/hex"
	"fmt"
	"io/ioutil"
)

func sha256Enc(data []byte) string {
	sha := sha256.New()
	sha.Write([]byte(data))
	return hex.EncodeToString(sha.Sum(nil))
}

func PKCS5Padding(src []byte, blockSize int) []byte {
	padding := blockSize - len(src)%blockSize
	pad := bytes.Repeat([]byte{byte(padding)}, padding)
	return append(src, pad...)
}

func main() {
	var secretKey []byte

	for i := 0; i < 9999999; i++ {
		key := []byte("99999991" + fmt.Sprintf("%07d", i))
		result := sha256Enc(key)
		if result == "356280a58d3c437a45268a0b226d8cccad7b5dd28f5d1b37abf1873cc426a8a5" {
			secretKey = append([]byte("!"), key...)
			break
		}
	}
	fmt.Printf("AES Secret Key: %v\n", string(secretKey))

	iv := []byte("kLwC29iMc4nRMuE5")
	bytes1, _ := ioutil.ReadFile("jewel_c.png")

	block, _ := aes.NewCipher(secretKey)
	padBytes1 := PKCS5Padding(bytes1, block.BlockSize())
	aes := cipher.NewCBCDecrypter(block, iv)
	result := padBytes1
	aes.CryptBlocks(result, padBytes1)

	ioutil.WriteFile("flag.png", result, 0777)
	fmt.Printf("output: flag.png\n")
}
