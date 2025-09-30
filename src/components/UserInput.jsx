import Input from "../components/Input";
import { formatLabel } from "../util/investment";

const UserInput = ({ userInput, onChangeInput }) => {
  const keys = Object.keys(userInput);

  return (
    <section id="user-input">
      <div className="input-group">
        {keys.map((key, i) => (
          <Input
            key={`${key}${i}`}
            id={key}
            label={formatLabel(key)}
            value={userInput[key]}
            onChange={onChangeInput}
          />
        ))}
      </div>
    </section>
  );
};

export default UserInput;
