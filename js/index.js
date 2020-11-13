$(function(){
    let record = [];

    let detail = {
        "A": {
            "total": 0,
            "name": $('#Aname').val(),
        },
        "B": {
            "total": 0,
            "name": $('#Bname').val(),
        },
        "C": {
            "total": 0,
            "name": $('#Cname').val(),
        },
        "D": {
            "total": 0,
            "name": $('#Dname').val(),
        },
    };

    $('#addPoint').click(function(){
        if(!$.isNumeric($('#Apoint').val()) || !$.isNumeric($('#Bpoint').val()) || !$.isNumeric($('#Cpoint').val()) || !$.isNumeric($('#Dpoint').val())){
            alert('分數必須為數字！');
            return;
        }

        let A = parseInt($('#Apoint').val());
        let B = parseInt($('#Bpoint').val());
        let C = parseInt($('#Cpoint').val());
        let D = parseInt($('#Dpoint').val());

        let sum = A + B + C + D;

        if(sum != 0){
            alert('每回合加總必須為0！');
        }else{
            record.push([record.length + 1, A, B, C, D, sum]);
            
            console.log(record);

            showData();

            $('#Apoint').val(0);
            $('#Bpoint').val(0);
            $('#Cpoint').val(0);
            $('#Dpoint').val(0);
        }
    });

    function showData(){
        let showTable = [];

        detail.A.total = 0;
        detail.B.total = 0;
        detail.C.total = 0;
        detail.D.total = 0;
        for(let i = 0; i < record.length; i++){
            showTable.push(record[i]);

            detail.A.total += record[i][1];
            detail.B.total += record[i][2];
            detail.C.total += record[i][3];
            detail.D.total += record[i][4];
        }
        showTable.push(["總分", detail.A.total, detail.B.total, detail.C.total, detail.D.total, 0]);

        $("#tableData").find('tbody').html("");
        for(let i = 0; i < showTable.length; i++){
            let rowHtml = "<td>" + showTable[i][0] + "</td><td>" + showTable[i][1] + "</td><td>" + showTable[i][2] + "</td><td>" + showTable[i][3] + "</td><td>" + showTable[i][4] + "</td><td>" + showTable[i][5] + "</td>";
            $("#tableData").find('tbody').append($('<tr>').append(
                rowHtml
            ));
        }
    }

    $('#reset').click(function(){
        let x = confirm("是否確定要重置整個計分？");
        if(x) {
            record = [];
            $("#tableData").find('tbody').html("");
            showData();
        }
    });

    $('#delete').click(function(){
        if(record.length == 0){
            alert("已經沒有紀錄可以刪除了");
        }else{
            record.pop();
        }
        showData();
    });

    $('#Aname')[0].addEventListener('input', updateValue);
    $('#Bname')[0].addEventListener('input', updateValue);
    $('#Cname')[0].addEventListener('input', updateValue);
    $('#Dname')[0].addEventListener('input', updateValue);

    function updateValue(e){
        if(e.target.id == "Aname"){
            detail.A.name = e.target.value;
        } else if(e.target.id == "Bname"){
            detail.B.name = e.target.value;
        } else if(e.target.id == "Cname"){
            detail.C.name = e.target.value;
        } else if(e.target.id == "Dname"){
            detail.D.name = e.target.value;
        }

        showName();
    }

    function showName(){
        $('.Aname').text(detail.A.name);
        $('.Bname').text(detail.B.name);
        $('.Cname').text(detail.C.name);
        $('.Dname').text(detail.D.name);
    }
    
    showName();
});