import { Container } from "../../components/Container";
import { GenericHtml } from "../../components/GenericHtml";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Heading>❌ Erro 404</Heading>

          <h2>🚧 Página não encontrada</h2>

          <p>
            Ops! Parece que a página que você tentou acessar não foi encontrada.
            Ela pode ter sido removida, movida para outro endereço ou o link
            pode estar incorreto.
          </p>

          <p>Isso pode acontecer por alguns motivos:</p>

          <ul>
            <li>🔗 O link que você acessou está quebrado ou desatualizado.</li>
            <li>⌨️ O endereço da página foi digitado incorretamente.</li>
            <li>🛠️ A página foi removida ou mudou de localização.</li>
          </ul>

          <p>
            Mas não se preocupe! Você pode voltar para a página inicial e
            continuar navegando pelo site.
          </p>

          <p>
            🏠 <a href="/">Voltar para a página inicial</a>
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}
