import styles from "./SignUp.module.scss";

export default function SignUp() {
  return (
    <form>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" />
      <button type="submit">Sign Up</button>
    </form>
  );
}
