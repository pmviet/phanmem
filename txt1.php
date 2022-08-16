<?php
$urlweb=$_SERVER['HTTP_HOST'];
$root=$_SERVER['DOCUMENT_ROOT'];
if(isset($_POST['formdoc'])){
    $link=$_POST['linkfile'];
    $txt = $_POST['formdoc'];
    $myfile = fopen("$root$link", "w") or die("Không thể mở file!");
    fwrite($myfile, $txt);
    fclose($myfile);
}else{
$link=$_GET['link'];
$duoifile = pathinfo($link, PATHINFO_EXTENSION);

if(($duoifile=='php')||($duoifile=='js')||($duoifile=='css')||($duoifile=='html')||($duoifile=='txt')||($duoifile=='py')||($duoifile=='json')||($duoifile=='json')||($duoifile=='json')){
$fp = fopen("$root/$link", "r");
echo '<input name="linkfile" id="linkfile" value="'.$link.'" style="display:none"><textarea class="form-control" id="formdoc" rows="3" style="width:100%; height: calc(100vh - 30px);" >';
while (! feof ($fp)) {
    $c = fgetc($fp);
    echo $c;
}
echo '</textarea>';
fclose($fp);
?>
<p style="padding:10px;"><a download="" target="_blank" href="<?php echo $link; ?>"><button type="button" class="btn btn-primary btn-sm">Tải xuống</button></a> <button type="button" onclick="save();" class="btn btn-primary btn-sm">Lưu</button></p>
<style>
.fancybox-content{
    width:90%;
}
</style>
<?php
}else{
    ?>
    <style>
    .fancybox-content{
        height:100%;
    }
    </style>
    <?php
    echo "<center><h2>Không thể đọc được định dạng này, quý khách vui lòng tải xuống để xem</h2><a download='' target='_blank' href='$link'><button type='button' class='btn btn-primary btn-sm'>Tải xuống</button></a></center>";
}
}
?>