
//account business logic
function Account(){
  this.user = [];
  this.id = 0;
}

Account.prototype.assignId = function() {
  this.id ++;
  return this.id;
}

Account.prototype.createAccount = function(user){
  user.id = this.assignId();
  this.user.push(user)
}



Account.prototype.deposit = function(id, depo){
  console.log(this.user.deposit);
  if(depo >= 0){
        this.user[id].deposit += depo;
      }

}
Account.prototype.withdraw = function(id, draw){
  if(draw >= 0){
        this.user[id].deposit -= draw;
  }
}

//user business logic
function User(userName, accountNumber, deposit) {
  this.userName = userName,
  this.accountNumber = accountNumber,
  this.deposit = deposit;
}

Account.prototype.printAccount = function(id2, userA){
    var showName = userA[0].userName;
    var showAmount = userA[0].deposit;
    var showNum = userA[0].accountNumber;

  console.log(showName);
  console.log(showAmount);
  console.log(showNum);

  $('#show-name').text(showName);
  $('#show-account').text(showNum);
  $('#show-bal').text(showAmount);
}



Account.prototype.findAccount = function(){
  var findNum = parseInt($('#accNum').val());


  for(var i = 0; i < this.user.length; i++){
    if(this.user[i]){
      if(this.user[i].accountNumber == findNum){

        console.log(this.user[i].id);
        return this.user[i].id;
      }
    }
  }
  return false;
}
// function findAccount(findAcc, arrAcc){
//       for(var i = 0; i < arrAcc.length; i++){
//         if(findAcc === arrAcc[i]){
//           return i + 1;
//         }
//       }
// };



var account = new Account();
var arrAcc = [];
var idA = 0;
$(function(){
  $('#input-accounts').submit(function(event){
    event.preventDefault();

    var name = $('#name').val();
    var initial = parseFloat($('#initial').val());
    var accNum =  Math.floor(Math.random() * 350) + 100;
    var findAcc = parseInt($('#accNum').val());
    arrAcc.push(accNum);
    console.log(arrAcc);

    var newUser = new User(name, accNum, initial);
    account.createAccount(newUser);
    idA = account.findAccount(newUser);
    account.printAccount(idA, account.user)
    console.log(account.user);
    $('button#btn-with').click(function(){
      console.log(account.user);

      var depo = parseInt($('#deposit').val());
      var draw = parseInt($('#withdraw').val());
      account.deposit(idA, depo);
      account.withdraw(idA, draw);
    });
    console.log(newUser);
  })


})
