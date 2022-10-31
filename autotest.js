// autotest for method api.hh.ru/employers/5008932


//Проверка кода состояния объекта
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});


//Является ли код состояния одним из набора
pm.test("Successful POST request", () => {
  pm.expect(pm.response.code).to.be.oneOf([201,202]);
});


//Проверка на то, что строка содержит текст
pm.test("Body contains string",() => {
  pm.expect(pm.response.text()).to.include("customer_id");
});


//Проверка на то, соответствует ли ответ строке
pm.test("Body is string", function () {
  pm.response.to.have.body("whole-body-text");
});

//Проверка, что время ответа менее 50 миллисекунд
pm.test("Response time is less than 50", function () {
    pm.expect(pm.response.responseTime).to.be.below(50);
});


//Проверка значений в теле ответа
pm.test("Person is Pavel", () => {
  const responseJson = pm.response.json();
  pm.expect(responseJson.name).to.eql("Pavel");
  pm.expect(responseJson.age).to.eql(30);
});


//Тестирование наличия заголовка ответа
pm.test("Content-Type header is present", () => {
  pm.response.to.have.header("Content-Type");
});


//Проверка конкретного типа заголовка
pm.test("Content-Type header is application/json", () => {
  pm.expect(pm.response.headers.get('Content-Type')).to.eql('application/json');
});


//Проверка, присутствует ли файл cookie 
pm.test("Cookie JSESSIONID is present", () => {
  pm.expect(pm.cookies.has('JSESSIONID')).to.be.true;
});


//Проверка определенного значения в файле Cookie
pm.test("Cookie isLoggedIn has value 1", () => {
  pm.expect(pm.cookies.get('isLoggedIn')).to.eql('1');
});


//Проверка, имеет ли свойство ответа то же значение, что и переменная
pm.test("Response property matches environment variable", function () {
  pm.expect(pm.response.json().name).to.eql(pm.environment.get("name"));
});