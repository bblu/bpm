/**
 * Created by admin on 2017/4/26.
 */
$(function(){
    $('.btn').on('click',function(){
        var IP=$('#IP').val();
        var num=$(this).parents('.container').attr('id').slice(6);
        var url=IP+$('#url'+num).val();
        var method=$('#method'+num).val();
        try {
            var body = $('#body' + num).val() ? JSON.parse($('#body' + num).val()) : $('#body' + num).val();
            if(url && method) {
                $.ajax({
                    type: method,
                    url: url,
                    data: body,
                    contentType:"application/json",
                    success: function (data) {
                        $('#result' + num).val(JSON.stringify(data));
                    },
                    error:function(error){
                        $('#result' + num).val(JSON.stringify(error));
                    }
                })
            }else{
                alert('请输入url和请求方式！');
            }
        }catch(error){
            alert('body中的json格式可能不正确！');
        }
    })
});