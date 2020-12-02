package com.sohe.rest.webservices.restfulwebservices;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class BcryptEncoderTest {

	public static void main(String[] args) {
		
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		
		for (int i = 0; i <= 10; i++) {
			//String encodedString = encoder.encode("password@!23@#!");
			String encodedString = encoder.encode("dummy");
			System.out.println(encodedString);
		}
		
	}

}
