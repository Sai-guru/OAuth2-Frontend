import {
  Anchor,
  Button,
  Checkbox,
  Divider,
  Group,
  Paper,
  PaperProps,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from '@mantine/core';
import Link from 'next/link';
// import { useForm } from '@mantine/form';
// import { upperFirst, useToggle } from '@mantine/hooks';
import { GoogleButton } from './GoogleButton';
// import { TwitterButton } from './TwitterButton';

export function AuthForm(props: PaperProps) {

  return (
    <Paper radius="md" p="lg" withBorder {...props}>
    <Link href="/"><Button variant="subtle" mb="md">← Home</Button></Link>

      <Text size="lg" fw={500}>
        Welcome to Mantine, Login with
      </Text>

      <Group grow mb="md" mt="md">
        <GoogleButton radius="xl">Google</GoogleButton>
        {/* <TwitterButton radius="xl">Twitter</TwitterButton> */}
      </Group>
    </Paper>
  );
}