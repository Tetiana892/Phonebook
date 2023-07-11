import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Section } from './Layout.styled';
import Menu from '../../components/Menu/Menu';
import Loader from '../../components/Loader/Loader';

export default function Layout() {
  return (
    <>
      <Header>
        <Container>
          <Menu />
        </Container>
      </Header>
      <main>
        <Section>
          <Container>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Container>
        </Section>
      </main>
    </>
  );
}
