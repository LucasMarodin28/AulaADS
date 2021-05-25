$(document).ready(
    function(){
        $.ajax({
            type:"GET",
            url:"http://192.168.10.94:9000/users",
            success: function(data){
                
                $.each(data, function(i, user){
                    console.log(user.name)
                    $("#09_aula").append(
                        "<tr>" +
                        "<td>" + user.nome + "</td>" +
                        "<td>" +  user.cpf + "</td>" +
                        "<td>" +  user.idade + "</td>" +
                        "</tr>"
                    )
                })
            },
            error: function(data){
                console.log(data)
            }
        })
    }
)

