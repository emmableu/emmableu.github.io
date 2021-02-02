<template>
    <info image-src="img/violin.jpg">
        <template  v-slot:body>
            <p  style="font-size: 14px; font-weight: 300; color:#0e0e0e">
                I am interested in classical violin. I learned violin from Prof. Enxiao Chen (2000 - 2013)
                in <a href = "http://english.zjcm.edu.cn/">Zhejiang Conservatory of Music</a> and Mr. Wenqiang Lu (2013 - 2016) from
                <a href="http://www.zjso.org/yy/en/index.html">Zhejiang Symphony Orchestra</a>.

             <br>

                During my undergraduate study in Zhejiang University, I played as a first violin in <a href = "http://www.tyys.zju.edu.cn/wqys/">Wenqin Philarmonic Orchestra</a>.
            <br>
                During my graduate study in NC State University, I played as first and second violins in  <a href = "https://raleighcivicsymphony.com/">Raleigh Civic Symphony</a>
                and <a href = "https://raleighcivicsymphony.com/">Raleigh Civic Chamber Orchestra</a>.

            </p>
        </template>
    </info>
</template>
<script>
    import info from './info';

    export default {
        name: 'interests',
        components:{
            info
        },
        data: () => ({
        }),
    }
</script>
