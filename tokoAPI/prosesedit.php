<?php
        include 'conn.php';
        $_POST=json_decode(file_get_contents("php://input"),true);
        $id=$_POST['id'];
        $namaProduk=$_POST['namaProduk'];
        $deskripsi=$_POST['deskripsi'];
        $harga=$_POST['harga'];
        $stok=$_POST['stok'];

        $result='';

        $sql=$conn->query("UPDATE produk SET nama_produk='$namaProduk',deskripsi='$deskripsi',harga=$harga,stok=$stok WHERE id=$id");

        if(mysqli_query($conn,$sql)){
            $result="Update Berhasil";
        }else{
            $result="GAGAL UPDATE " . mysqli_error($conn);
        }
        echo json_encode($result);
        mysqli_close(conn);
?>