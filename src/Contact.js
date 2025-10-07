import { useState, useEffect } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate({ email, message });
    setFormErrors(errors);
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      alert("送出成功");
    }
  }, [formErrors, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "請輸入電子郵件";
    } else if (!regex.test(values.email)) {
      errors.email = "電子郵件格式不正確";
    }

    if (!values.message) {
      errors.message = "請輸入內容";
    } else if (values.message.length < 5) {
      errors.message = "內容至少需要 5 個字";
    }

    return errors;
  };

  return (
    <div className="contact">
      <h3>聯絡我們</h3>

      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">送出成功</div>
      ) : null}

      <form onSubmit={handleSubmit}>
        <label>
          <span>電子郵件：</span>
          <input
            type="text"
            name="email"
            value={email}
            placeholder="請輸入電子郵件"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <div className="error">{formErrors.email}</div>

        <label>
          <span>內容：</span>
          <textarea
            name="message"
            value={message}
            placeholder="請輸入內容"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </label>
        <div className="error">{formErrors.message}</div>

        <button>送出</button>
      </form>
    </div>
  );
}
