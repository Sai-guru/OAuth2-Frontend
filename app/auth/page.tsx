"use client";

import { AuthForm } from "@/components/AuthForm";
import {  Container } from "@mantine/core";


export default function AuthPage() {
  return (
    <Container size={420} my={40}>
      <AuthForm />
    </Container>
  );
}
