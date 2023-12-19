const RegURL = (/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/);
const RegName = /^[А-ЯA-Zё\s-]+$/imu;
const RegNumber = /^\d{10}$/;

function checkingPatternEmail(value) {
//чтобы не горела ошибка при отрисовке
    if (value === undefined){
        return {message : "", invalid : true} 
    }

    if (!RegURL.test(value)) {
        return { message: "email не соответствует шаблону электронной почты", invalid : true}
      }
      return {message : "", invalid : false}
}

function checkingPatternName(value) {

    if (!RegName.test(value)) {
        return { message: "Имя может содержать только латиницу, кириллицу, дефис и пробел", invalid : true}
    }
    return {message : "", invalid : false}
}

function checkingPatternNumber(value) {
    if (value === undefined){
        return {message : "", invalid : true} 
    }

    if (!RegNumber.test(value)) {
        return { message: "Номер телефона должен иметь 11 цифр и начинаться с +7", invalid : true}
    }
    return {message : "", invalid : false}
}

export { checkingPatternEmail,checkingPatternName, checkingPatternNumber };