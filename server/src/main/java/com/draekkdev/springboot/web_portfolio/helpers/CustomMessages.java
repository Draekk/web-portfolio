package com.draekkdev.springboot.web_portfolio.helpers;

import org.springframework.http.HttpStatus;

import lombok.Getter;

@Getter
public enum CustomMessages {

    CREATED(HttpStatus.CREATED.value(), "The item was created successfully."),
    UPDATED(HttpStatus.ACCEPTED.value(), "The item was updated successfully."),
    FOUND(HttpStatus.OK.value(), "Item(s) found correctly."),
    DELETED(HttpStatus.ACCEPTED.value(), "The item was deleted successfully.");

    private int status;
    private String message;

    private CustomMessages(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
