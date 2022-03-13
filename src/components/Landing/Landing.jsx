import styled from './Landing.module.scss';

export default function Landing () {
  return (
    <div className={styled.Landing}>
      <Card>

        <form>
          <input type="text" name="email"/>
          <input type="text" name="password"/>
          <button>Submit</button>
        </form>
      </Card>
    </div>
  );
}
