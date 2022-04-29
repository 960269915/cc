<template>
  <van-address-edit
    :area-list="areaList"
    show-delete
    @save="onSave"
    @delete="onDelete"
  />
</template>

<script>
import AreaList from "../api/area";
import { Toast } from "vant";
export default {
  name: "AddressNew",
  data() {
    return {
      areaList: AreaList,
    };
  },
  methods: {
    onSave(item) {
      let obj = {
        name: item.name,
        tel: item.tel,
        province: item.province,
        city: item.city,
        county: item.county,
        areaCode: item.areaCode,
        addressDetails: item.addressDetail,
      };
      const _this = this;
      axios
        .post("http://localhost:8181/address/create", obj)
        .then(function(resp) {
          if (resp.data.code == 1) {
            let instance = Toast("添加成功");
            setTimeout(() => {
              instance.close();
              _this.$router.push("/addressList");
            }, 1000);
          }
        });
    },
    onDelete() {
      history.go(-1);
    },
  },
};
</script>

<style scoped></style>
