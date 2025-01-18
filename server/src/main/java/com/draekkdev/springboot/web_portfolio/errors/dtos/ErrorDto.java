package com.draekkdev.springboot.web_portfolio.errors.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class ErrorDto {
    
    private String name;

    private String message;

    private Integer status;

    public ErrorDto(String message, Integer status) {
        this.message = message;
        this.status = status;
    }

}