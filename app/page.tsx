export default function Home() {
  return (
    <main>
      <div>
        <h1>Login</h1>
        <form>
          <label htmlFor="email">email</label>
          <input id="email" type="text" />
          <label htmlFor="password">password</label>
          <input id="password" type="text" />
        </form>
      </div>
    </main>
  );
}
