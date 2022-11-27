import Head from 'next/head';

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Dia de los Recuerdos</title>
        <meta
          name="description"
          content=" Dia de los Muertos es el dia de los Recuerdos. Recuerd a tu ser
          querido con un altar de muertos en la nube."
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center prose">
        <h1>Día de los Recuerdos</h1>

        <p className="mt-3 ">
          El Día de los Recuerdos es un espacio en la nube para recordar a
          nuestros seres queridos. Podrás crear un altar del Día de los Muertos
          de manera virtual. Es decir, un altar en el Metaverso.
        </p>
      </main>
    </div>
  );
};

export default Home;
