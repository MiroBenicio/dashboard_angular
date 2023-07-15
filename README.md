<h1>Projeto Front-End Angular - Versão 13</h1>

<p>Este é um projeto front-end desenvolvido em Angular versão 13, seguindo boas práticas e padrões de desenvolvimento. O projeto possui a seguinte estrutura:</p>

<ul>
  <li><strong>App model:</strong> Este módulo importa todas as entidades utilizadas pela aplicação e configura o Router para o funcionamento no modelo de single-page application.</li>
</ul>

<p>O projeto utiliza uma interface TypeScript para a tipagem da entidade principal do CRUD, garantindo uma melhor organização e segurança do código.</p>

<p>Os componentes estão organizados da seguinte maneira:</p>

<h2>Auth Component</h2>
<p>O Auth Component é responsável pela autenticação do usuário. Ele utiliza um serviço de autenticação para realizar interações com a API e realizar o login.</p>

<h2>Dialog Component</h2>
<p>O Dialog Component cria um formulário para o cadastro e atualização da entidade Influencer. Ele se relaciona com o componente Influencer, que exporta os serviços utilizados pelo Dialog para realizar as requisições POST e PUT dessa entidade na API.</p>

<h2>Influencer Component</h2>
<p>O Influencer Component utiliza o serviço para realizar a listagem e exclusão da entidade Influencer na tela de listagem. Ele trabalha em conjunto com o Dialog Component para garantir a integração completa do CRUD.</p>

<p>Além disso, o projeto utiliza o LocalStorage service para armazenar o token JWT, necessário para autenticar as requisições HTTP relacionadas à entidade Influencer. Esse serviço é compartilhado por todos os componentes, exceto pelo componente de autenticação (Auth).</p>

<p>Para a estilização dos componentes, foi utilizado o Angular Material, uma biblioteca que oferece um conjunto de componentes prontos e estilizados, seguindo as diretrizes de Material Design.</p>

<p>Destaca-se que durante o desenvolvimento, foram aplicadas boas práticas e padrões recomendados pelo Angular para garantir um código limpo, de fácil manutenção e escalabilidade.</p>
