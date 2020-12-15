<?php
        include 'conn.php';

        $id=$_GET['id'];

        $sql=$conn->query("SELECT * FROM produk WHERE id=$id");

        $data=$sql->fetch_assoc();

        echo json_encode($data);

        mysqli_close($conn);
?>