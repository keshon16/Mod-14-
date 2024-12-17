const ErrorPage = () => {
// const error = useRouteError();
const error = useRouteError();
console.error(error);
if (error.status === 404) {
}


  return (
    <section>
      <h1>404: Page Not Found</h1>
      <h1> ¯\_(ツ)_/¯</h1>
    </section>
  );
};

export default ErrorPage;
