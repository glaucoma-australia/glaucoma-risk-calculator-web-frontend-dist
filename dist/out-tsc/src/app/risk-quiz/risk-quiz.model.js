import { risk_from_study, risks_from_study, s_col_to_s } from 'glaucoma-risk-quiz-engine';
var RiskQuiz = (function () {
    function RiskQuiz(age, gender, ethnicity, ocular_disease_history, ocular_surgery_history, other_info, family_history_of_glaucoma, email) {
        this.age = age;
        this.gender = gender;
        this.ethnicity = ethnicity;
        this.ocular_disease_history = ocular_disease_history;
        this.ocular_surgery_history = ocular_surgery_history;
        this.other_info = other_info;
        this.family_history_of_glaucoma = family_history_of_glaucoma;
        this.email = email;
    }
    RiskQuiz.prototype.calcRisk = function (risk_json) {
        console.info('calcRisk::risk_json =', risk_json);
        var ethnicity = s_col_to_s(this.ethnicity);
        var input = {
            study: ethnicity,
            age: this.age,
            gender: this.gender
        };
        this.risk = risk_from_study(risk_json, input);
        this.risks = risks_from_study(risk_json, input);
    };
    return RiskQuiz;
}());
export { RiskQuiz };
//# sourceMappingURL=/home/samuel/repos/glaucoma-australia/glaucoma-risk-calc-web-frontend/src/src/app/risk-quiz/risk-quiz.model.js.map