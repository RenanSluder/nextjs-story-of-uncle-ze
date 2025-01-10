import React from 'react';

const Home = () => {
  return (
    <div>
      <header style={styles.header}>
        <h1>A História do Tio Zé</h1>
      </header>
      <main style={styles.main}>
        <section style={styles.section}>
          <h2>Quem é o Tio Zé?</h2>
          <p>
            <span style={styles.highlight}>José Araujo Costa Sobrinho</span>, carinhosamente conhecido como Tio Zé, é um
            verdadeiro exemplo de superação, determinação e amor pelo esporte. Após enfrentar a doença de Chagas, ele
            transformou sua vida por meio da corrida.
          </p>
          <img
            src="/img/image_1.jpg"
            alt="Tio Zé ao lado de seu quadro de medalhas"
            style={styles.image}
          />
        </section>
        <section style={styles.section}>
          <h2>A Corrida de São Silvestre</h2>
          <p>
            Com o apoio da equipe médica do Instituto Dante Pazzanese de Cardiologia, Tio Zé participou de sua primeira{' '}
            <span style={styles.highlight}>Corrida de São Silvestre</span>. Ele correu em 17 edições consecutivas dessa
            prova icônica, acumulando reconhecimento e medalhas.
          </p>
          <img
            src="/img/image_2.jpg"
            alt="Certificado de participação na Corrida de São Silvestre"
            style={styles.image}
          />
        </section>
        <section style={{ ...styles.section, ...styles.support }}>
          <h2>Como você pode ajudar</h2>
          <p>
            Aos quase 80 anos, Tio Zé precisa de apoio para realizar o tratamento necessário e voltar a correr. Apoiar
            Tio Zé é promover superação, saúde e esporte.
          </p>
          <p>Junte-se a essa jornada inspiradora!</p>
        </section>
        <section style={styles.section}>
          <h2>Galeria</h2>
          <img
            src="/img/image_3.jpg"
            alt="Tio Zé em seu quarto com as medalhas"
            style={styles.image}
          />
        </section>
      </main>
      <footer style={styles.footer}>
        <p>© 2025 A História do Tio Zé</p>
      </footer>
    </div>
  );
};

const styles = {
  header: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '1rem 0',
    textAlign: 'center',
  },
  main: {
    fontFamily: 'Arial, sans-serif',
    lineHeight: 1.6,
    color: '#333',
  },
  section: {
    padding: '2rem',
    maxWidth: '800px',
    margin: 'auto',
  },
  highlight: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    display: 'block',
    margin: '1rem 0',
  },
  support: {
    backgroundColor: '#f9f9f9',
    border: '1px solid #ddd',
    textAlign: 'center',
  },
  footer: {
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '1rem 0',
    marginTop: '2rem',
  },
};

export default Home;

export async function getStaticProps() {
  return {
    props: {}, // Props can be added here if needed in the future
  };
}
