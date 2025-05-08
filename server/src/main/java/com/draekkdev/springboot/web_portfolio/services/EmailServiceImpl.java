package com.draekkdev.springboot.web_portfolio.services;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.draekkdev.springboot.web_portfolio.models.dtos.ContactRequestDto;

@Service
public class EmailServiceImpl implements EmailService {

  private final JavaMailSender mailSender;
  private final String fromAddress;

  public EmailServiceImpl(JavaMailSender mailSender, @Value("${MAIL_USERNAME}") String fromAddress) {
    this.mailSender = mailSender;
    this.fromAddress = fromAddress;
  }

  @Override
  public void sendContactEmail(ContactRequestDto request) {

    SimpleMailMessage message = new SimpleMailMessage();
    message.setFrom(fromAddress);
    message.setTo(fromAddress);
    message.setSubject("Nuevo mensaje de [" + request.getName() + "] desde tu Portafolio.");
    message.setReplyTo(request.getEmail());

    String body = new StringBuilder()
        .append("De: ").append(request.getName())
        .append(" <").append(request.getEmail()).append(">\n\n")
        .append(request.getMessage())
        .toString();

    message.setText(body);

    mailSender.send(message);

  }

}
