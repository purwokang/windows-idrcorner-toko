<?php
        include "conn.php";
        $id=$_GET['id'];
        $sql="DELETE FROM produk WHERE id=$id";
        $result="";
        if($conn->query($sql)===TRUE){
                $result="Hapus data Berhasil";
        }else{
                $result="Gagal Hapus Data" . $conn->error;
        }

        echo json_encode($result);
        $conn->close();
        
?>