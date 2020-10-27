$(function () {
    //submit button decoration
    $("#btn").on("mouseover", function () {
        $this = $(this);
        $this.addClass('btn2');
        $this.removeClass('btn1');
        $this.removeClass('btn3');
    });
    $("#btn").on("mouseleave", function () {
        $this = $(this);
        $this.addClass('btn1');
        $this.removeClass('btn3');
        $this.removeClass('btn2');
    });
    $("#btn").on("mousedown", function () {
        $this = $(this);
        $this.addClass('btn3');
        $this.removeClass('btn1');
        $this.removeClass('btn2');
    });
    $("#btn").on("mouseup", function () {
        $this = $(this);
        $this.addClass('btn2');
        $this.removeClass('btn1');
        $this.removeClass('btn3');
    });
    $("#btn").on("click", function () {
        if ($('input[name="name"]').val() == "") {
            alert('尚未填寫天體名稱，不能新增。');
        } else {
            let name = $('input[name="name"]').val();
            let type = $('select[name="type"]').val();
            let magnitude = $('input[name="magnitude"]').val();
            location.href = `/stars/Galaxy/Inc?name=${name}&type=${type}&magnitude=${magnitude}`;
        }
    });


    //delete button decoration
    $("img").on("mouseover", function () {
        $(this).attr('src', 'cross_big.png');
    });
    $("img").on("mouseleave", function () {
        $(this).attr('src', 'cross.png');
    });
    $("img").on("mousedown", function () {
        $(this).attr('src', 'cross_big_pressed.png');
    });
    $("img").on("mouseup", function () {
        $(this).attr('src', 'cross_big.png');
    });
    $("img").on("click", function () {
        if (confirm('確定要刪除"' + $(this).parents('tr').children('.starName').attr('name') + '"嗎?')) {
            let dataID = $(this).parents('tr').attr('data-id');
            location.href = `/stars/Galaxy/Del?dataID=${dataID}`;
        }
    });
});

