1 读取csv文件
什么是csv https://baike.baidu.com/item/CSV/10739


Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension,
function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
}

	$.ajax({
            type : "GET",
            url : "chart.csv",
            dataType : "text",
            success : 
        function(data)
            {
                console.log(data)
                
            }
        });
        
 2 使用 tomcat 或者appache
 
 3考虑局部刷新
 http://jsfiddle.net/gh/get/library/pure/highcharts/highcharts/tree/master/samples/highcharts/chart/events-redraw/
 https://stackoverflow.com/questions/14100011/highcharts-redraw-vs-new-highcharts-chart
 
