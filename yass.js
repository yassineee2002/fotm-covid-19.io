function test() {
    alpha=/^[A-Za-z]+$/;
    num = /[^0-9]/;
    //name
    x=document.getElementById('name').value;
    if (x.length<3 || !(x.match(alpha))){
        alert("Votre prénom n'est pas valide");
        return false;
    }
    //last name 
    y=document.getElementById('lname').value; 
    if (y.length<3 || !(y.match(alpha))) 
    {
        alert("votre nom n'est pas valide");
        return false;
    }
    //age
    a=document.getElementById('age').value;
    if (a.length==0 || parseInt(a)<=0 || a.match(alpha) ) {
        alert("Votre age n'est pas valide");
        return false;
    }
    //email
    m=document.getElementById('email').value;
    if ((m.length==0) || (m.length>50) || (m.indexOf("@")>m.lastIndexOf(".")) || (m.indexOf("@")==-1)) {
        alert("Votre email n'est pas valide");
        return false;
      }
    //adress
    z=document.getElementById('adress').value.length;
    if (z<10) {
        alert("Votre adresse n'est pas valide");
        return false;
    }
    //number
    n=document.getElementById('pnum').value;
    if ((n.match(alpha)) || (n.length!=8)|| ((n.charAt(0).toString())=="0") || ((n.charAt(0).toString())=="1")) {
        alert("Votre numéro n'est pas valide");
        return false;
    }

  }