package com.draekkdev.springboot.web_portfolio.services;

import com.draekkdev.springboot.web_portfolio.models.dtos.ContactRequestDto;

public interface EmailService {

  void sendContactEmail(ContactRequestDto request);
}
