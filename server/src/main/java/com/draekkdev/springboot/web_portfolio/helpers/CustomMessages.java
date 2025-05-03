package com.draekkdev.springboot.web_portfolio.helpers;

import lombok.Getter;
import org.springframework.http.HttpStatus;

@Getter
public enum CustomMessages {
  CREATED(HttpStatus.CREATED.value(), "The item was created successfully."),
  UPDATED(HttpStatus.ACCEPTED.value(), "The item was updated successfully."),
  FOUND(HttpStatus.OK.value(), "Item(s) found correctly."),
  DELETED(HttpStatus.ACCEPTED.value(), "The item was deleted successfully."),
  UNAUTHORIZED(HttpStatus.UNAUTHORIZED.value(), "Unauthorized. Invalid token."),
  SENT(HttpStatus.OK.value(), "The email was sent successfully."),
  NOT_SENT(HttpStatus.NOT_ACCEPTABLE.value(), "Invalid: Email not sent.");

  private int status;
  private String message;

  private CustomMessages(int status, String message) {
    this.status = status;
    this.message = message;
  }
}
