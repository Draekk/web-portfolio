package com.draekkdev.springboot.web_portfolio.models.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class ContactRequestDto {

    @NotBlank(message = "The name is required.")
    private String name;

    @Email(message = "The email is not valid.")
    @NotBlank(message = "The email is required.")
    private String email;

    @NotBlank(message = "The message cannot be empty.")
    private String message;
}
