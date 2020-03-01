$(document).ready(function () {
    //add product
    $('#btn-click-save').click(function () {
        // khai báo biến dùng từ khóa : let,var,const
        //$('#txt-title'): gọi đến phần tử trong DOM(file html)
        // dùng hàm val() để lấy giá trị
        let txtTitle = $('#txt-title').val();
        let txtCategory = $('#txt-category').val();
        let txtPublisher = $('#txt-publisher').val();
        let txtYear = $('#txt-year').val();
        //
        $.ajax({
            // đường dẫn đến file xử lý
            url: "san-pham-add.php",
            //phương thức gửi
            method: "post",
            //dữ liệu gửi theo kiểu json {key:value}
            data: {
                txtTitle: txtTitle,
                txtCategory: txtCategory,
                txtPublisher: txtPublisher,
                txtYear: txtYear
            },
            success: function (data) {
                //đổ dữ liệu
                $('#list-product').html(data);
                //đóng modal
                $('#modelId').modal('hide');
            }
        });
    });
    //search prolet search = $(thisu.val
    // search keyup() khi nhập bàn sẽ gọi ajax luôn
    $('#txt-search').keyup(function () {
        let search = $(this).val();
        if (search !== ''){
            $.ajax({
                url:"san-pham-search.php",
                method:"post",
                data:{search:search},
                success: function (data) {
                    $('#list-product').html(data);
                }
            })
        }
    });

	$('#btSave').click(function () {
        // khai báo biến dùng từ khóa : let,var,const
        //$('#txt-title'): gọi đến phần tử trong DOM(file html)
        // dùng hàm val() để lấy giá trị

        var tbAuthorName = $('#tbAuthorName').val();
        var tbMoreInfo = $('#tbMoreInfo').val();
        //
        $.ajax({
            // đường dẫn đến file xử lý
            url: "tac-gia-add.php",
            //phương thức gửi
            method: "post",
            //dữ liệu gửi theo kiểu json {key:value}
            data: {
                tbAuthorName: tbAuthorName,
                tbMoreInfo: tbMoreInfo
            },
            success: function (data) {
                //đổ dữ liệu
                $('#list-author').html(data);
                //đóng modal
                $('#modelId').modal('hide');
            }
        });
    });
	
	$('#tbSearch').keyup(function () {
        let search = $(this).val();
        if (search !== ''){
            $.ajax({
                url:"tac-gia-search.php",
                method:"post",
                data:{search:search},
                success: function (data) {
                    $('#list-author').html(data);
                }
            })
        }
    });
	
	// Xóa
	$(document).on('click', '#btDelete', function(){
      let id = $(this).attr('name');

      $.ajax({
        url: 'tac-gia-delete.php',
        type: 'POST',
        data: {
          id: id
        },
        success: function(data){
          //đổ dữ liệu
          $('#list-author').html(data);
        }
      });
    })
});