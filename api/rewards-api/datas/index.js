const users = [{"id":"C001","name":"hhh","rewards":0},{"id":"C002","name":"kkk","rewards":0},{"id":"C003","name":"www","rewards":0}]; // 假设一个简单的内存数据库
const transactions =[
    { "transactionId": "T001", "customerId": "C001", "date": "2024-01-15", "amount": 120 },
    { "transactionId": "T002", "customerId": "C001", "date": "2024-01-20", "amount": 60 },
    { "transactionId": "T003", "customerId": "C001", "date": "2024-02-10", "amount": 75 },
    { "transactionId": "T004", "customerId": "C001", "date": "2024-02-15", "amount": 200 },
    { "transactionId": "T005", "customerId": "C001", "date": "2024-03-05", "amount": 50 },
    { "transactionId": "T006", "customerId": "C001", "date": "2024-03-10", "amount": 120 },
    { "transactionId": "T007", "customerId": "C002", "date": "2024-01-17", "amount": 55 },
    { "transactionId": "T008", "customerId": "C002", "date": "2024-01-25", "amount": 110 },
    { "transactionId": "T009", "customerId": "C002", "date": "2024-02-14", "amount": 90 },
    { "transactionId": "T010", "customerId": "C002", "date": "2024-02-18", "amount": 150 },
    { "transactionId": "T011", "customerId": "C002", "date": "2024-03-01", "amount": 45 },
    { "transactionId": "T012", "customerId": "C002", "date": "2024-03-20", "amount": 130 },
    { "transactionId": "T013", "customerId": "C003", "date": "2024-01-10", "amount": 95 },
    { "transactionId": "T014", "customerId": "C003", "date": "2024-01-20", "amount": 85 },
    { "transactionId": "T015", "customerId": "C003", "date": "2024-02-10", "amount": 40 },
    { "transactionId": "T016", "customerId": "C003", "date": "2024-02-22", "amount": 130 },
    { "transactionId": "T017", "customerId": "C003", "date": "2024-03-15", "amount": 200 },
    { "transactionId": "T018", "customerId": "C003", "date": "2024-03-25", "amount": 110 },
    { "transactionId": "T019", "customerId": "C004", "date": "2024-01-05", "amount": 150 },
    { "transactionId": "T020", "customerId": "C004", "date": "2024-01-30", "amount": 90 },
    { "transactionId": "T021", "customerId": "C004", "date": "2024-02-11", "amount": 60 },
    { "transactionId": "T022", "customerId": "C004", "date": "2024-02-25", "amount": 210 },
    { "transactionId": "T023", "customerId": "C004", "date": "2024-03-02", "amount": 80 },
    { "transactionId": "T024", "customerId": "C004", "date": "2024-03-18", "amount": 120 }
  ]
module.exports = {users,transactions}