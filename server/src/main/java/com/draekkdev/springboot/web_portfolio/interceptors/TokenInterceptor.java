package com.draekkdev.springboot.web_portfolio.interceptors;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
public class TokenInterceptor implements HandlerInterceptor {

  @Value("${api.secret.token}")
  private String secretToken;

  @SuppressWarnings("null")
  @Override
  public boolean preHandle(
    HttpServletRequest request,
    HttpServletResponse response,
    Object handler
  ) throws Exception {
    if ("GET".equalsIgnoreCase(request.getMethod())) {
      return true;
    }

    String token = request.getHeader("Authorization");

    if (token == null || !token.equals(secretToken)) {
      response.setStatus(HttpStatus.UNAUTHORIZED.value());
      response.getWriter().write("Unauthorized: Invalid Token.");
      return false;
    }
    return true;
  }
}
