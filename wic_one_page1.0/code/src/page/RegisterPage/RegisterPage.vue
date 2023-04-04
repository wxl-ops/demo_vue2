<template>
  <div class="register-wrapper">
    <div class="register-header"><h1>注册</h1></div>

    <div class="register-form">
      <p class="register-tip"><span>*</span>为必填项</p>
      <div class="register-form-wrapper" v-if="areaOptionsList.length">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="130px"
          class="register-ruleForm"
        >
          <el-form-item label="机构信息" class="form-title"> </el-form-item>
          <el-form-item label="机构全称" prop="OrganizationName">
            <el-input
              v-model="ruleForm.organizationName"
              placeholder="请输入单位全称"
            ></el-input>
          </el-form-item>
          <el-form-item label="成立时间" prop="setupDate">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.setupDate"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
          <el-form-item label="法人代表">
            <el-input v-model="ruleForm.legalName"></el-input>
          </el-form-item>
          <el-form-item label="是否上市" prop="isOnMarket">
            <el-radio-group v-model="ruleForm.isOnMarket">
              <el-radio-button label="否"></el-radio-button>
              <el-radio-button label="是"></el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="所在地区-国家" prop="region">
            <el-select v-model="ruleForm.countryName" placeholder="请选择">
              <el-option
                v-for="areaOption in areaOptionsList"
                :key="areaOption.country_id"
                :label="areaOption.title"
                :value="areaOption.title"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="所在地区-省" prop="region">
            <el-select v-model="ruleForm.provinceName" placeholder="请选择">
              <el-option
                v-for="(province, index) in areaOptionsList[0].province"
                :key="province.province_id"
                :label="province.title"
                :value="province.title"
                @click.native="handleProvinceChange(index)"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="所在地区-市" prop="region">
            <el-select v-model="ruleForm.cityName" placeholder="请选择">
              <el-option
                v-for="city in areaOptionsList[0].province[currentProvince]
                  .city"
                :key="city.city_id"
                :label="city.title"
                :value="city.title"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="详细地址" prop="detailAddress">
            <el-input
              v-model="ruleForm.detailAddress"
              placeholder="请输入详细地址"
            ></el-input>
          </el-form-item>
          <el-form-item label="机构官网">
            <el-input
              v-model="ruleForm.officialWebsite"
              placeholder="请输入机构官网"
            ></el-input>
          </el-form-item>
          <el-form-item label="机构简介" prop="organizationDesc">
            <el-input
              type="textarea"
              v-model="ruleForm.organizationDesc"
              maxlength="200"
              show-word-limit
            ></el-input>
          </el-form-item>
          <el-form-item label="机构性质" prop="organizationNature">
            <el-select
              v-model="ruleForm.organizationNature"
              placeholder="请选择"
            >
              <el-option
                v-for="nature in organizationNatureList"
                :key="nature.id"
                :label="nature.title"
                :value="nature.title"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="所属行业" prop="industryDesc">
            <el-select v-model="ruleForm.industryDesc" placeholder="请选择">
              <el-option
                v-for="industryDesc in industryDescList"
                :key="industryDesc.id"
                :label="industryDesc.title"
                :value="industryDesc.title"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >立即创建</el-button
            >
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import apis from "../../apis/index";
export default {
  name: "RegisterPage",
  created() {
    apis.getAreaOptionsList().then((res) => {
      this.areaOptionsList = res.data.data;
    });
  },
  data() {
    return {
      areaOptionsList: [],
      currentProvince: 0,
      organizationNatureList: [
        {
          id: "1",
          title: "国有企业 ",
        },
        {
          id: "2",
          title: "民营企业",
        },
        {
          id: "3",
          title: "外资企业",
        },
        {
          id: "4",
          title: "股份制企业",
        },
        {
          id: "5",
          title: "政府公共事业单位",
        },
        {
          id: "6",
          title: "其他",
        },
      ],
      industryDescList: [
        {
          id: "1",
          title: "农、林、牧、渔业",
        },
        {
          id: "2",
          title: "采矿业",
        },
        {
          id: "3",
          title: "制造业",
        },
        {
          id: "4",
          title: "电力、热力、燃气及水生产和供应业",
        },
        {
          id: "5",
          title: "建筑业",
        },
        {
          id: "6",
          title: "批发和零售业",
        },
        {
          id: "7",
          title: "交通运输、仓储和邮政业",
        },
        {
          id: "8",
          title: "住宿和餐饮业",
        },
        {
          id: "9",
          title: "信息传输、软件和信息技术服务业",
        },
        {
          id: "10",
          title: "金融业",
        },
        {
          id: "11",
          title: "房地产业",
        },
        {
          id: "12",
          title: "租赁和商务服务业",
        },
        {
          id: "13",
          title: "科学研究和技术服务业",
        },
        {
          id: "14",
          title: "水利、环境和公共设施管理业",
        },
        {
          id: "15",
          title: "居民服务、修理和其他服务业",
        },
        {
          id: "16",
          title: "教育",
        },
        {
          id: "17",
          title: "卫生和社会工作",
        },
        {
          id: "18",
          title: "文化、体育和娱乐业",
        },
        {
          id: "19",
          title: "公共管理、社会保障和社会组织",
        },
        {
          id: "20",
          title: "国际组织",
        },
      ],
      ruleForm: {
        organizationName: "",
        setupDate: "",
        legalName: "",
        isOnMarket: "",
        countryName: "中国",
        provinceName: "北京",
        cityName: "北京",
        detailAddress: "",
        officialWebsite: "",
        organizationDesc: "",
        organizationNature: "",
        industryDesc: "",
      },
      rules: {
        OrganizationName: [
          { required: true, message: "请输入单位全称", trigger: "blur" },
        ],
        setupDate: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        legalName: [
          { required: true, message: "请输入单位全称", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
      },
    };
  },
  methods: {
    //获取一下选择省份时的index，来确认市这个options框显示内容,并且把城市选择清空
    handleProvinceChange(index) {
      this.ruleForm.cityName = "";
      this.currentProvince = index;
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>

<style lang='scss' scoped>
.register-wrapper {
  background: #f7f7f7;
  .register-header {
    height: 130px;
    padding-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      color: initial;
    }
  }

  .register-form {
    width: 750px;
    margin: 0 auto;
    padding: 50px 78px;
    background: #fff;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.06);
    position: relative;
    .register-tip {
      position: absolute;
      right: 10px;
      top: 10px;
      font-size: 14px;
      text-align: right;
      color: #ccc;
      span {
        color: red;
      }
    }
    .register-form-wrapper {
      .register-ruleForm {
        padding: 0 43px;
        /deep/ .el-form-item__label {
          font-size: 16px;

          color: #999 !important;
        }
        .form-title {
          /deep/ .el-form-item__label {
            font-size: 20px;
            font-weight: 500;
            color: #4a68b4 !important;

            line-height: 1;
            width: unset !important;
          }
        }
      }
    }
  }
}
</style>