{
            var d = new Date();
            var date = d.getDate();
            var year = d.getFullYear();
            var month = d.getMonth();
            var monthArr = ["Janeiro", "Fevereiro","Março", "Abril", "maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro","Dezembro"];
            month = monthArr[month];
            document.getElementById("date").innerHTML="Jundiaí, "+date+" de "+month+" de "+year+".";
        }