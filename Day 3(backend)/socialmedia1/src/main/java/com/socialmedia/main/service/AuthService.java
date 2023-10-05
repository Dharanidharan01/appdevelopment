package com.socialmedia.main.service;

import com.socialmedia.main.dto.request.AuthenticationRequest;
import com.socialmedia.main.dto.request.RegisterRequest;
import com.socialmedia.main.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);

}
