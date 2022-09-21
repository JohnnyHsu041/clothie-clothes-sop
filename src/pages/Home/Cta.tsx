import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";
import s from "../../styles/css/Cta.module.css";

const Cta: React.FC = () => {
    return (
        <section className={`container ${s.cta}`}>
            <div className={s["cta-container"]}>
                <h2 className={s["cta-title"]}>
                    sign up, to start elegant life.
                </h2>
                <div className={s["cta-client"]}>
                    <div className={s["cta-img"]}></div>
                    <div className={s["cta-input"]}>
                        <form>
                            <Input
                                id="email"
                                type="type"
                                title="電子郵件"
                                style={{ marginBottom: "1.6rem" }}
                            />
                            <Input
                                id="password"
                                type="password"
                                title="密碼"
                                style={{ marginBottom: "0.4rem" }}
                            />
                            <Input
                                id="password-again"
                                type="password"
                                title="再次輸入密碼"
                                style={{ marginBottom: "3.2rem" }}
                            />
                            <Button type="submit">註冊</Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cta;
