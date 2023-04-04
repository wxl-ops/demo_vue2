<!--
 * @Author: Lucky
 * @Date: 2022-03-31 17:31:27
 * @LastEditors: Lucky
 * @LastEditTime: 2022-03-31 17:31:28
 * @Description: 请填写简介
-->
<template>
  <div class="register">
    <div id="check-code" class="tx-code"></div>
    <div class="header">
      <div class="left">
        <img src="../../assets/logo_zc.png" class="logo" />
        <div v-show="configInfo.session" class="title">第{{configInfo.session}}届世界智能大会双边会谈系统</div>
      </div>
      <div class="right">
        <span style="cursor: pointer;" @click="goNav">返回首页</span>
        <Icon type="ios-arrow-forward" />
      </div>
    </div>
    <div class="welcome">欢迎注册世界智能大会双边会谈系统</div>
    <div class="steps">
      <Steps :current="current">
        <Step title="邀请验证"></Step>
        <Step title="填写信息"></Step>
        <Step title="创建用户"></Step>
        <Step title="提交注册"></Step>
      </Steps>
    </div>
    <div class="form">
      <Form ref="form" :model="form" :rules="ruleValidate" :label-width="140">
        <!-- 第一步 -->
        <div v-if="current == 0">
          <!-- <FormItem label="证件照片：" prop="legal_certificate_positive">
            <div class="ImgUpLoad">
              <ImgUpLoad
                id="legal_certificate_positive"
                :value="form.legal_certificate_positive"
                tips="上传人像面"
                :fixed="true"
                :is-operation-location="true"
                @onUploadImage="onUploadImage"
              ></ImgUpLoad>
              <ImgUpLoad
                id="legal_certificate_reverse"
                :value="form.legal_certificate_reverse"
                tips="上传国徽面"
                :fixed="true"
                :is-operation-location="true"
                @onUploadImage="onUploadImage"
                style="margin-left:30px"
              ></ImgUpLoad>
            </div>
            <div class="imgTips">
              请上传大小不超过3M的 png、jpg、jpeg格式的图片。
            </div>
          </FormItem>
          <FormItem label="营业执照：" prop="business_license">
            <div class="ImgUpLoad">
              <ImgUpLoad
                id="business_license"
                :value="form.business_license"
                tips="上传营业执照"
                :fixed="true"
                :is-operation-location="true"
                @onUploadImage="onUploadImage"
                style="margin-left:0"
              ></ImgUpLoad>
            </div>
            <div class="imgTips">
              请上传大小不超过3M的 png、jpg、jpeg格式的图片。
            </div>
          </FormItem>
          <FormItem>
            <Checkbox v-model="single"></Checkbox>
            我已阅读并同意<span class="agreement" @click="agreement = true"
              >《用户服务协议》</span
            >文件
          </FormItem> -->
          <FormItem label="邀请码" prop="code">
            <Input
              v-model="form.code"
              placeholder="请输入邀请码"
              style="width: 100%"
            />
          </FormItem>
          <FormItem
            ><Icon type="ios-alert" color="red" /><span style="color: #ccc"
              >企业注册，需要验证大会主办方发放的邀请码</span
            ></FormItem
          >
        </div>
        <div v-if="current == 1" prop="name">
          <FormItem label="企业名称" prop="name">
            <Input
              v-model="form.name"
              placeholder="请输入企业名称"
              style="width: 100%"
            />
          </FormItem>
          <FormItem label="企业注册地址" prop="address">
            <Input
              v-model="form.address"
              placeholder="请输入企业注册地址"
              maxlength="30"
              show-word-limit
              style="width: 100%"
            />
          </FormItem>
          <FormItem label="企业类型" prop="business_type">
            <Select v-model="form.business_type" multiple style="width: 100%">
              <Option
                v-for="item in type"
                :value="item.value"
                :key="item.value"
                >{{ item.label }}</Option
              >
            </Select>
          </FormItem>
          <FormItem label="统一社会信用代码" prop="register_no">
            <Input
              v-model="form.register_no"
              placeholder="请输入统一社会信用代码"
              maxlength="18"
              show-word-limit
              style="width: 100%"
            />
          </FormItem>
          <FormItem label="营业执照：" prop="business_license">
            <div class="ImgUpLoad">
              <ImgUpLoad
                id="business_license"
                :value="form.business_license"
                tips="上传营业执照"
                :fixed="true"
                :is-operation-location="true"
                @onUploadImage="onUploadImage"
                style="margin-left: 0"
              ></ImgUpLoad>
            </div>
            <div class="imgTips">
              请上传大小不超过3M的 png、jpg、jpeg格式的图片。
            </div>
          </FormItem>
          <FormItem label="企业负责人姓名" prop="legal_contacts">
            <Input
              v-model="form.legal_contacts"
              placeholder="请输入企业负责人姓名"
              style="width: 100%"
              maxlength="30"
              show-word-limit
            />
          </FormItem>
          <FormItem label="负责人证件类型" prop="legal_certificate_type">
            <RadioGroup v-model="form.legal_certificate_type">
              <Radio
                style="margin-right: 45px"
                v-for="(item, idx) in idType"
                :key="idx"
                :label="item.value"
                >{{ item.label }}</Radio
              >
            </RadioGroup>
          </FormItem>

          <FormItem label="负责人证件号码" prop="legal_certificate_code">
            <Input
              v-model="form.legal_certificate_code"
              placeholder="请输入负责人证件号码"
              :maxlength="form.legal_certificate_type === 1 ? 18 : 9"
              show-word-limit
              style="width: 100%"
            />
          </FormItem>
          <FormItem label="证件照片：" prop="legal_certificate_positive">
            <div class="ImgUpLoad">
              <ImgUpLoad
                id="legal_certificate_positive"
                :value="form.legal_certificate_positive"
                tips="上传人像面"
                :fixed="true"
                :is-operation-location="true"
                @onUploadImage="onUploadImage"
              ></ImgUpLoad>
              <ImgUpLoad
                id="legal_certificate_reverse"
                :value="form.legal_certificate_reverse"
                tips="上传国徽面"
                :fixed="true"
                :is-operation-location="true"
                @onUploadImage="onUploadImage"
                style="margin-left: 30px"
              ></ImgUpLoad>
            </div>
            <div class="imgTips">
              请上传大小不超过3M的 png、jpg、jpeg格式的图片。
            </div>
          </FormItem>
          <FormItem label="企业联系人" prop="contact_name">
            <Input
              v-model="form.contact_name"
              placeholder="请输入企业联系人姓名"
              maxlength="30"
              show-word-limit
              style="width: 100%"
            />
          </FormItem>
          <!-- <FormItem label="邀请码" prop="code">
            <Input
              v-model="form.code"
              placeholder="请输入邀请码"
              style="width: 100%"
            />
          </FormItem> -->
          <div class="bottomTitle">
            <Icon type="ios-alert" color="red" />
            <span style="color: #cccccc"
              >请确保提交信息的真实性以及联系方式的正确性，否则将影响企业注册信息审核</span
            >
          </div>
        </div>
        <div v-if="current == 2">
          <FormItem label="用户名" prop="user_name">
            <Input
              v-model="form.user_name"
              placeholder="长度为8-20个字符，并且以字母开头,支持数字和字母的组合"
              min="8"
              maxlength="20"
              show-word-limit
              style="width: 100%"
            />
          </FormItem>
          <FormItem label="密码" prop="password">
            <Input
              v-model="form.password"
              placeholder="请输入8-18字符，支持数字和字母的组合"
              type="password"
              maxlength="18"
              show-word-limit
              style="width: 100%"
            />
          </FormItem>
          <FormItem label="确认密码" prop="confirm_password">
            <Input
              v-model="form.confirm_password"
              type="password"
              maxlength="18"
              show-word-limit
              placeholder="请再次输入密码"
              style="width: 100%"
            />
          </FormItem>
          <FormItem label="联系手机号码" prop="phone">
            <Input
              v-model="form.phone"
              placeholder="请输入联系手机号码"
              style="width: 100%"
            />
            <div style="color: #cccccc">
              手机号码将用于平台系统登录，并接收平台的通知信息
            </div>
          </FormItem>
          <FormItem label="短信验证码" prop="short_message">
            <div class="short_message">
              <Input
                v-model="form.short_message"
                prefix="ios-mail-outline"
                placeholder="请输入短信验证码"
                style="width: 450px"
              />
              <Button
                :disabled="shortMessage"
                @click="checkPhone"
                style="height: 36px"
                >{{
                  shortMessage ? `${countDown}后重新获取` : "获取验证码"
                }}</Button
              >
            </div>
          </FormItem>
          <FormItem>
            <Checkbox v-model="single"></Checkbox>
            我已阅读并同意<span class="agreement" @click="agreement = true"
              >《用户服务协议及隐私政策》</span
            >
          </FormItem>
        </div>
      </Form>
      <div v-if="current == 3" class="loginSuccess">
        <div class="flex-box">
          <div class="successIcon">
            <Icon type="md-checkmark" class="icon" size="12" color="#fff" />
          </div>
          <div class="successTips">
            注册信息提交成功，扫码关注公众号，获取会谈预约通知
          </div>
        </div>
        <div style="margin-top:32px" class="last-tip-box">
          <div style="text-align: center;margin-bottom:40px">
            <img src="../../assets/code_pic.jpg" width="160px" />
          </div>
          <p>1、请您耐心等待注册审核，审核结果将通过短信通知</p>
          <p>
            2、请扫码关注并绑定世界智能大会的微信公众号，可用于接收双边会谈预约信息及变更通知，操作步骤如下：
          </p>
          <ul>
            <li>第一步：请使用微信扫码并关注公众号</li>
            <li>
              第二步：关注成功后，<span style="color:red"
                >将企业注册时绑定的手机号发送给公众号</span
              >
              ，请务必确保手机号的正确性
            </li>
            <li>若您收到公众号发送的绑定成功的通知消息，即为绑定成功</li>
          </ul>
        </div>
        <div>
          <Button
            type="primary"
            style="width: 300px;margin:63px 0"
            @click="goLogin"
            >返回登录页</Button
          >
        </div>
      </div>
      <div style="display: flex; justify-content: center; margin-bottom: 30px">
        <Button
          v-if="current !== 0 && current !== 3"
          type="primary"
          class="btn"
          @click="stepUp"
          >上一步</Button
        >
        <Button
          v-if="current !== 2 && current !== 3"
          style="margin-left: 20px"
          type="primary"
          class="btn"
          @click="next"
          >下一步</Button
        >
        <Button
          v-if="current === 2"
          type="primary"
          class="btn"
          @click="handleSubmit"
          style="margin-left: 20px"
          >提交</Button
        >
      </div>
    </div>
    <Modal v-model="agreement" width="1000">
      <p slot="header" style="text-align: center">
        <span>用户服务协议</span>
      </p>
      <div style="height: 700px" class="agreementContent">
        <pre>
<h3>用户服务协议</h3>
    世界智能大会组委会（下称“组委会”）在此特别提醒您（下称“用户”）认真阅读、充分理解本《软件许可及用户服务协议》（下称本协议），除非您接受本协议所有条款，否则您无权注册、登录或使用本协议所涉相关服务。您的注册、登录、使用等行为将视为对本协议的接受。
您对本协议的接受即受本协议全部条款的约束，包括接受组委会对任一服务条款随时所做的任何修改。本协议可随时更新，更新后的协议条款一旦公布即代替原来的协议条款，恕不再另行通知，用户可在相关服务页面查阅最新版协议条款。如果您不接受修改后的条款，请立即停止使用本服务，用户继续使用将被视为已接受了修改后的协议。
一、协议适用主体范围
1.1本协议是用户与组委会之间关于用户下载、安装、使用、复制软件（下称“本软件”），以及使用相关服务所订立的协议。
1.2“用户”是指注册、登录、使用、浏览本服务的个人或组织。
1.3本协议内容同时包括组委会可能不断发布的关于本服务的相关协议、业务规则等内容。上述内容一经正式发布，即为本协议不可分割的组成部分，您同样应当遵守。
二、关于本服务
2.1 本服务的形式
本服务客户端软件提供包括第五届世界智能大会相关信息化产品，包括但不限于相关网站、APP、H5小程序等线上产品（以下称为“本软件”），用户必须选择与所安装终端设备相匹配的软件版本。
2.2 本服务许可的范围
2.2.1 组委会给予您一项个人的、不可转让及非排他性的许可，以使用本软件。
2.2.2 本条及本协议其他条款未明示授权的其他一切权利仍由组委会保留，您在行使这些权利时须另外取得组委会的书面许可。组委会如果未行使前述任何权利，并不构成对该权利的放弃。
三、软件的获取
3.1 您可以从得到组委会授权的第三方处获取。
3.2 如果您从未经组委会授权的第三方获取本软件或与本软件名称相同的安装程序，组委会无法保证该软件能够正常使用，并对因此给您造成的损失不予负责。
四、用户个人信息保护
4.1 保护用户个人信息是组委会的一项基本原则，组委会将会采取合理的措施保护用户的个人信息。除法律法规规定的情形外，未经用户许可组委会不会向第三方共享、转让、公开披露用户个人信息，但法律法规另有规定或协议另有约定的除外。
4.2 您在注册帐号或使用本服务的过程中，需要提供一些必要的信息，例如：为向您提供帐号注册服务或进行用户身份识别，需要您填写手机号码等。若国家法律法规或政策有特殊规定的，您需要提供真实的身份信息。若您提供的信息不完整，则无法使用本服务或在使用过程中受到限制。
4.3组委会对相关信息采用专业加密存储与传输方式，保障用户个人信息的安全。
组委会将运用各种安全技术和程序建立完善的管理制度来保护您的个人信息，以免遭受未经授权的访问、使用或披露。
4.4组委会非常重视对未成年人个人信息的保护。若您是18周岁以下的未成年人，在使用服务前，应事先取得您家长或法定监护人的书面同意。
五、主权利义务条款
5.1 帐号使用规范
5.1.1 您在使用本服务前需要注册一个帐号。
5.1.2本软件帐号的所有权归组委会所有，用户完成申请注册手续后，仅获得帐号的使用权，且该使用权仅属于初始申请注册人。
5.1.3 用户有责任妥善保管注册帐户信息及帐户密码的安全，用户需要对注册帐户以及密码下的行为承担法律责任。用户同意在任何情况下不向他人透露帐户及密码信息。当在您怀疑他人在使用您的帐号时，您应立即通知组委会。
5.1.4用户注册本软件帐号后如果长期不登录该帐号，组委会有权回收该帐号，以免造成资源浪费，由此带来的任何损失均由用户自行承担。
5.2 用户注意事项
5.2.1 您理解并同意：为了向您提供有效的服务，本软件会利用您终端设备的处理器和带宽等资源。本软件使用过程中可能产生数据流量的费用，用户需自行向运营商了解相关资费信息，并自行承担相关费用。
5.2.2 您在使用本软件某一特定服务时，该服务可能会另有单独的协议、相关业务规则等（以下统称为“单独协议”），您在使用该项服务前请阅读并同意相关的单独协议；您使用前述特定服务，即视为您接受相关单独协议。
5.2.3 您理解并同意组委会将会尽其商业上的合理努力保障您在本软件及服务中的数据存储安全，但是，组委会并不能就此提供完全保证，包括但不限于以下情形：
5.2.3.1 组委会不对您在本软件及服务中相关数据的删除或储存失败负责；
5.2.3.2组委会有权根据实际情况自行决定单个用户在本软件及服务中数据的最长储存期限，并在服务器上为其分配数据最大存储空间等。您可根据自己的需要自行备份本软件及服务中的相关数据；
5.2.3.3 如果您停止使用本软件及服务或服务被终止或取消，组委会可以从服务器上永久地删除您的数据。服务停止、终止或取消后，组委会没有义务向您返还任何数据。
5.2.4 用户在使用本软件及服务时，须自行承担如下来自组委会不可掌控的风险内容，包括但不限于：
5.2.4.1 由于不可抗拒因素可能引起的个人信息丢失、泄漏等风险；
5.2.4.2 用户必须选择与所安装终端设备相匹配的软件版本，否则，由于软件与终端设备型号不相匹配所导致的任何问题或损害，均由用户自行承担；
5.2.4.3 用户在使用本软件访问第三方网站时，因第三方网站及相关内容所可能导致的风险，由用户自行承担；
5.2.4.4 用户发布的内容被他人转发、分享，因此等传播可能带来的风险和责任；
5.2.4.5 由于无线网络信号不稳定、无线网络带宽小等原因，所引起的登录失败、资料同步不完整、页面打开速度慢等风险。
5.3 第三方产品和服务
5.3.1 您在使用本软件第三方提供的产品或服务时，除遵守本协议约定外，还应遵守第三方的用户协议。
5.3.2 因用户使用本软件或要求组委会提供特定服务时，本软件可能会调用第三方系统或者通过第三方支持用户的使用或访问，组委会不保证通过第三方提供服务及内容的安全性、准确性、有效性及其他不确定的风险，由此若引发的任何争议及损害，与组委会无关，组委会不承担任何责任。
六、用户行为规范
6.1 信息内容规范
6.1.1 您理解并同意，组委会一直致力于为用户提供文明健康、规范有序的网络环境，您不得利用本软件帐号或本软件及服务制作、复制、发布、传播如下干扰组委会正常运营，以及侵犯其他用户或第三方合法权益的内容，包括但不限于：
6.1.1.1 发布、传送、传播、储存违反国家法律法规禁止的内容：
（1）违反宪法确定的基本原则的；
（2）危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；
（3）损害国家荣誉和利益的；
（4）煽动民族仇恨、民族歧视，破坏民族团结的；
（5）破坏国家宗教政策，宣扬邪教和封建迷信的；
（6）散布谣言，扰乱社会秩序，破坏社会稳定的；
（7）散布淫秽、色情、赌博、暴力、恐怖或者教唆犯罪的；
（8）侮辱或者诽谤他人，侵害他人合法权益的；
（9）煽动非法集会、结社、游行、示威、聚众扰乱社会秩序；
（10）以非法民间组织名义活动的；
（11）不符合遵守法律法规、社会主义制度、国家利益、公民合法利益、公共秩序、社会道德风尚和信息真实性等“七条底线”要求的；
（12）含有法律、行政法规禁止的其他内容的。
6.1.1.2 发布、传送、传播、储存侵害他人名誉权、肖像权、知识产权、商业秘密等合法权利的内容；
6.1.1.3 涉及他人隐私、个人信息或资料的；
6.1.1.4 发表、传送、传播骚扰、广告信息、过度营销信息及垃圾信息或含有任何性或性暗示的；
6.1.1.5 其他违反法律法规、政策及公序良俗、社会公德或干扰组委会正常运营和侵犯其他用户或第三方合法权益内容的信息。
6.2 对自己行为负责
    你充分了解并同意，你必须为自己注册帐号下的一切行为负责，包括你所发表的任何内容以及由此产生的任何后果。你应对本服务中的内容自行加以判断，并承担因使用内容而引起的所有风险，包括因对内容的正确性、完整性或实用性的依赖而产生的风险。组委会无法且不会对因前述风险而导致的任何损失或损害承担责任。
6.3违约处理
6.3.1 如果组委会发现或收到他人举报或投诉用户违反本协议约定的，组委会有权不经通知随时对相关内容进行删除、屏蔽，并视情节对违规帐号处以包括但不限于警告、限制或禁止使用部分或全部功能、帐号封禁直至注销的处罚，并公告处理结果。
6.3.2 您理解并同意，组委会有权依合理判断对违反有关法律法规或本协议规定的行为进行处罚，对违法违规的任何用户采取适当的法律行动，并依据法律法规保存有关信息向有关部门报告等，用户应独自承担由此而产生的一切法律责任。
6.3.3 您理解并同意，因您违反本协议或相关服务条款的规定，导致或产生第三方主张的任何索赔、要求或损失，您应当独立承担责任；组委会因此遭受损失的，您也应当一并赔偿。
七、知识产权声明
7.1组委会是本软件的知识产权权利人。本软件的一切著作权、商标权、专利权、商业秘密等知识产权，以及与本软件相关的所有信息内容（包括但不限于文字、图片、音频、视频、图表、界面设计、版面框架、有关数据或电子文档等）均受中华人民共和国法律法规和相应的国际条约保护，组委会享有上述知识产权，但相关权利人依照法律规定应享有的权利
除外。
7.2 未经组委会或相关权利人书面同意，您不得为任何商业或非商业目的自行或许可任何第三方实施、利用、转让上述知识产权。
八、终端安全责任
8.1 您理解并同意，本软件同大多数互联网软件一样，可能会受多种因素影响，包括但不限于用户原因、网络服务质量、社会环境等；也可能会受各种安全问题的侵扰，包括但不限于他人非法利用用户资料，进行现实中的骚扰；用户下载安装的其他软件或访问的其他网站中可能含有病毒、木马程序或其他恶意程序，威胁您的终端设备信息和数据安全，继而影响本软件的正常使用等。因此，您应加强信息安全及个人信息的保护意识，注意密码保护，以免遭受损失。
8.2 您不得制作、发布、使用、传播用于窃取本软件帐号及他人个人信息、财产的恶意程序。
8.3 维护软件安全与正常使用是组委会和您的共同责任，组委会将按照行业标准合理审慎地采取必要技术措施保护您的终端设备信息和数据安全，但是您承认和同意，组委会并不能就此提供完全保证。
8.4 在任何情况下，您不应轻信借款、索要密码或其他涉及财产的网络信息。涉及财产操作的，请一定先核实对方身份，并请经常留意有关防范诈骗犯罪的提示。
九、其他
9.1 组委会郑重提醒用户注意本协议中免除组委会责任和加重用户义务的条款，请用户仔细阅读，自主考虑风险。
9.2 本协议所定的任何条款无论因何种原因部分或全部无效或不可执行，不影响其它条款的效力。
9.3本协议自您同意并成功注册为本软件用户之日起生效，除非组委会终止本协议或者您丧失用户资格，否则本协议始终有效。本协议终止并不免除用户根据本协议或其他有关协议、规则所应承担的义务和责任。
9.4本协议所有条款的标题仅为阅读方便，本身并无实际涵义，不能作为本协议涵义解释的依据。
9.5 本协议签订地为天津市滨海新区。本协议的解释、效力及纠纷的解决，适用于中华人民共和国法律大陆地区法律（不包括冲突法）。若用户和组委会之间发生任何纠纷或争议，首先应友好协商解决；协商不成的，你同意将纠纷或争议提交本协议签订地有管辖权的人民法院管辖。
<h3 style="margin-top:20px">隐私政策</h3>
    世界智能大会组委会（以下称我们）非常重视用户的隐私和个人信息保护。您在使用我们的产品与/或服务时，我们可能会收集和使用您的相关信息。我们希望通过《隐私政策》（以下称本隐私政策）向您做如下说明。
    希望您在使用我们的产品与/或服务前仔细阅读并确认您已经充分理解本隐私政策所写明的内容，并让您可以按照本隐私政策的指引做出您认为适当的选择。您使用或在我们更新本隐私政策后继续使用我们的产品与/或服务，即意味着您同意本隐私政策(含更新版本)内容。
一、我们收集信息的范围及使用信息的规则
(一)收集信息的范围
    当您使用本网站产品与/或服务的过程中，我们会按照如下方式收集您在使用产品与/或服务时主动提供或产生的信息，用以向您提供服务以及保障您的账号安全。
1、当您注册帐号时，个人身份信息（如身份证号码、护照号码等）、企业基本资料（如统一社会信用代码或注册号、法定代表人、法定代表人身份信息、企业地址、企业联系电话等）、账号密码。收集这些信息是为了帮助您完成帐号的注册，保护您的帐号安全。手机号码属于敏感信息，收集此类信息是为了满足相关法律、法规关于网络实名制要求。若您不提供这类信息，您可能无法正常使用我们的服务。
2、当您使用本网站服务时，为保障您正常使用我们的服务，维护我们服务的正常运行，改进及优化我们的服务体验以及保障您的帐号安全，我们会收集您的设备型号、操作系统、设备Mac地址、唯一设备标识符、应用ID、登陆IP地址、接入网络的方式、类型和状态、网络质量数据、操作日志、服务日志信息（如您在阅读功能下的浏览历史、服务故障信息等信息）等日志信息，这类信息是为提供服务必须收集的基础信息。
3、当您使用本网站上传信息（包括图片、视频）、拍摄或编辑图片或视频时，为了向您提供该服务，我们会在获得您的明示同意后，访问您的相册。上述信息属于敏感信息，拒绝提供该信息不影响您正常使用本网站的其他功能。
4、当您使用本网站语音输入、语音通话功能时，我们会收集您的语音内容，因为收集是实现上述功能所必需的。我们实时处理之后，向您返回处理结果，不会保存您的数据。
5、当您使用本网站相关功能时，您发布的文字、照片、视频等信息以及互动信息会存储在我们的服务器中，因为存储是实现这一功能所必需的。我们会以加密的方式存储，您也可以随时删除这些信息。除非经您自主选择或遵从相关法律法规要求或服务协议的约定，我们不会对外提供上述信息，或者将其用于该功能以外的其他用途。
6、当您使用本网站相关功能时，我们会在获得您的明示同意后，记录您的地理位置信息，目的是为了向您提供该服务。该信息属于敏感信息，拒绝提供该信息仅会使您无法使用上述功能，但不影响您正常使用本网站的其他功能。
7、当您使用本网站搜索等功能时，我们会收集您的搜索记录、阅读记录、观看历史和评论等信息，目的是为了向您提供更加精准和个性化的服务和内容。
（二）使用信息的规则
1、我们会根据本隐私政策的约定并为实现我们的产品与/或服务功能对所收集的个人信息进行使用。
2、请您注意，您在使用我们的产品与/或服务时所提供的所有个人信息，除非您删除或通过系统设置拒绝我们收集，否则将在您使用我们的产品与/或服务期间持续授权我们使用。在您注销账号时，我们将停止使用并删除您的个人信息。
3、当我们要将您的个人信息用于本隐私政策未载明的其它用途时，或基于特定目的收集而来的信息用于其他目的时，会通过您主动做出勾选的形式事先征求您的同意。
您充分知晓，以下情形中，我们收集、使用个人信息无需征得您的授权同意：
1、与国家安全、国防安全有关的；
2、与公共安全、公共卫生、重大公共利益有关的；
3、与犯罪侦查、起诉、审判和判决执行等有关的；
4、出于维护个人信息主体或其他个人的生命、财产等重大合法权益但又很难得到本人同意的；
5、所收集的个人信息是个人信息主体或监护人自行向社会公众公开的；
6、从合法公开披露的信息中收集的您的个人信息的，如合法的新闻报道、政府信息公开等渠道；
7、根据您的要求签订合同所必需的；
8、用于维护所提供的产品与/或服务的安全稳定运行所必需的，例如发现、处置产品与/或服务的故障；
9、为合法的新闻报道所必需的；
10、学术研究机构基于公共利益开展统计或学术研究所必要，且对外提供学术研究或描述的结果时，对结果中所包含的个人信息进行去标识化处理的；
11、法律法规规定的其他情形。
    请您理解，我们向您提供的功能和服务是不断更新和发展的，如果某一功能或服务未在前述说明中且收集了您的信息，我们会通过页面提示、交互流程、网站公告等方式另行向您说明信息收集的内容、范围和目的，以征得您的同意。
二、我们如何共享、转让、公开披露您的个人信息
    我们不会向任何第三方共享、转让、公开披露您的个人信息，但以下情况除外
1、事先获得您明确的同意或授权；
2、根据适用的法律法规、法律程序的要求、强制性的行政或司法要求所必须的情况下进行提供；
3、在法律法规允许的范围内，为维护贵我双方或社会公众利益、财产或安全免遭损害而有必要提供；
4、只有共享您的个人信息，才能实现我们的产品与/或服务的核心功能或提供您需要的服务； 5、应您需求为您处理您与他人的纠纷或争议；
6、符合与您签署的相关协议（包括在线签署的电子协议以及相应的平台规则）或其他的法律文件约定所提供；
7、基于学术研究而使用；
8、基于符合法律法规的社会公共利益而使用。
三、信息安全
（一 ）我们努力保障信息安全，以防信息的丢失、不当使用、未经授权阅览或披露。
1、我们使用各种安全技术以保障信息的安全。例如，我们将通过服务器多备份、密码加密等安全措施，防止信息泄露、毁损、丢失。
2、我们建立严格的管理制度和流程以保障信息的安全。例如，我们严格限制访问信息的人员范围，并进行审核，要求他们承诺遵守保密义务。
3、我们重视信息安全合规工作，并通过众多国际和国内的安全认证，如网络安全等级保护认证等，以业界先进的解决方案充分保障您的信息安全。 但请您理解，由于技术的限制以及可能存在的各种恶意手段，在互联网环境下，即便竭尽所能加强安全措施，也不可能始终保证信息百分之百的安全。您需要了解，您接入我们的服务所用的系统和通讯网络，有可能因我们可控范围外的因素而出现问题。
若发生个人信息泄露等安全事件，我们会启动应急预案，阻止安全事件扩大，按照《国家网络安全事件应急预案》等有关规定及时上报，并以发送邮件、推送通知、公告等形式告知您相关情况，并向您给出安全建议。
（二）为更有效的保障您的信息安全，我们也希望您能够加强自我保护意识。我们仅在本网站直接导致您个人信息泄露的范围内承担责任，因此，请您妥善保管您的账号及密码信息，避免您的个人信息泄露。除非您判断认为必要的情形下，否则，不向任何第三人提供您的账号密码等个人信息。
四、访问与控制
（一）您可以在使用我们服务的过程中，访问、修改和删除您的相关信息。如您需要修改或删除信息，请到本网站相关页面进行操作。
（二） 如您发现我们违反法律法规的规定或者本政策内容非正常收集、使用您的信息，您可以要求我们删除。如您发现我们收集、存储的您的信息有错误的，且无法自行更正的，您也可以要求我们更正。
（三）基于法律法规要求、保障信息安全等正当事由，您的部分信息可能无法访问、修改和删除。
五、未成年人保护
我们非常重视对未成年人个人信息的保护。根据相关法律法规的规定，若您是18周岁以下的未成年人，在使用本网站服务前，应事先取得您的家长或法定监护人的书面同意。若您是未成年人的监护人，当您对您所监护的未成年人的个人信息有相关疑问时，请通过第八节中的联系方式与我们联系。
六、隐私政策的更新
我们可能适时修订本隐私政策的条款，该等修订构成本隐私政策的一部分。如可能造成您在本隐私政策下权利的实质减少或扩大收集、使用信息的范围等重要规则变更时，我们将在修订生效前通过在主页上显著位置提示通知您。在该种情况下，若您继续使用我们的服务，即表示同意受经修订的本隐私政策的约束。
七、联系我们
如您对本政策及其他相关事宜有疑问，您可以通过来电进行咨询。我们将在1-3个工作日内审核所涉问题，并在验证您的用户身份后予以回复。
八、投诉举报
如您存在相关质疑，您可拨打 400-019-0516 进行投诉举报。
        </pre>
      </div>
      <div slot="footer"></div>
    </Modal>
  </div>
</template>

<script>
import api from "@/api/common.js";
import cookies from "@/utils/cookies";
import ImgUpLoad from "../../components/imgUpload";
import apis from "@/api/common.js";

export default {

  name: "basicDetail",
  components: {
    ImgUpLoad
  },
  data() {
    return {
      configInfo:{},
      txData: null,
      code_url: "",
      redictUrl: "",
      current: 0,
      timer: "",
      agreement: false,
      single: false,
      idType: [
        { value: 1, label: "身份证" },
        { value: 2, label: "护照" },
        { value: 3, label: "港澳通行证" },
        { value: 4, label: "台胞证" }
      ],
      address: [],
      type: [
        { value: 1, label: "智能制造" },
        { value: 2, label: "智能农业" },
        { value: 3, label: "智能交通" },
        { value: 4, label: "智能城市" },
        { value: 5, label: "智能医疗与健康" },
        { value: 6, label: "智能文化创意" },
        { value: 7, label: "智能商贸物流" },
        { value: 8, label: "智能科技领域军民融合" },
        { value: 9, label: "人工智能科技创新" },
        { value: 10, label: "其他" }
      ],
      checkCode: true,
      shortMessage: false,
      countDown: 60,
      t1: "",
      city: [],
      area: [],
      form: {
        legal_certificate_positive: "",
        legal_certificate_reverse: "",
        business_license: "",
        name: "",
        register_no: "",
        legal_contacts: "",
        business_type: [],
        legal_certificate_type: 1,
        legal_certificate_code: "",
        phone: "",
        code: "",
        short_message: null,
        address: "",
        contact_name: "",
        user_name: "",
        password: "",
        confirm_password: ""
      },
      ruleValidate: {
        legal_certificate_positive: [
          {
            required: true,
            validator: (rule, value, callback) => {
              console.log(this.form);
              if (!this.form.legal_certificate_positive && this.current === 1) {
                callback(new Error("请上传证件照片"));
              } else if (
                !this.form.legal_certificate_reverse &&
                this.current === 1
              ) {
                callback(new Error("请上传证件照片"));
              } else {
                callback();
              }
            }
          }
        ],
        business_license: [
          {
            required: true,
            validator: (rule, value, callback) => {
              if (!this.form.business_license && this.current === 1) {
                callback(new Error("请上传营业执照"));
              } else {
                callback();
              }
            }
          }
        ],
        name: [
          {
            required: true,
            trigger: "blur",
            validator: (rule, value, callback) => {
              if (!this.form.name && this.current === 1) {
                callback(new Error("请输入企业名称"));
              } else if (this.form.name.length < 1 && this.current === 1) {
                callback(new Error("请输入企业名称"));
              } else {
                callback();
              }
            }
          }
        ],
        register_no: [
          {
            required: true,
            trigger: "blur",
            validator: (rule, value, callback) => {
              const reg = /^[0-9A-Za-z]{18}$/;
              if (!this.form.register_no && this.current === 1) {
                callback(new Error("请输入企业统一社会信用代码"));
              } else {
                if (reg.test(value) && this.current === 1) {
                  callback();
                } else {
                  return callback(
                    new Error("请输入18位数字或字母组合的企业统一社会信用代码")
                  );
                }
              }
            }
          }
        ],
        legal_contacts: [
          {
            required: true,
            trigger: "blur",
            validator: (rule, value, callback) => {
              if (!this.form.legal_contacts && this.current === 1) {
                callback(new Error("请输入企业负责人姓名"));
              } else if (
                this.form.legal_contacts.length < 1 &&
                this.current === 1
              ) {
                callback(new Error("请输入企业负责人姓名"));
              } else {
                callback();
              }
            }
          }
        ],
        legal_certificate_type: [
          {
            required: true,
            trigger: "blur",
            validator: (rule, value, callback) => {
              if (!this.form.legal_certificate_type && this.current === 1) {
                callback(new Error("请选择证件类型"));
              } else {
                callback();
              }
            }
          }
        ],
        legal_certificate_code: [
          {
            required: true,
            trigger: "blur",
            validator: (rule, value, callback) => {
              if (!this.form.legal_certificate_code && this.current === 1) {
                callback(new Error("请输入负责人证件号码"));
              } else if (
                this.form.legal_certificate_code.length !== 18 &&
                this.form.legal_certificate_type == 1 &&
                this.current === 1
              ) {
                callback(new Error("请输入18位负责人证件号码"));
              } else if (
                this.form.legal_certificate_code.length !== 9 &&
                this.form.legal_certificate_type !== 1 &&
                this.current === 1
              ) {
                callback(new Error("请输入9位负责人证件号码"));
              } else {
                callback();
              }
            }
          }
        ],
        phone: [
          {
            required: true,
            trigger: "blur",
            validator: (rule, value, callback) => {
              const reg = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;
              if (!this.form.phone && this.current === 2) {
                callback(new Error("请输入负责人联系电话"));
              } else {
                if (reg.test(value)) {
                  callback();
                } else {
                  return callback(new Error("请输入正确的手机号"));
                }
              }
            }
          }
        ],
        short_message: [
          {
            required: true,
            trigger: "blur",
            validator: (rule, value, callback) => {
              if (!this.form.short_message && this.current === 2) {
                callback(new Error("请输入短信验证码"));
              } else {
                callback();
              }
            }
          }
        ],
        code: [
          {
            required: true,
            trigger: "blur",
            validator: (rule, value, callback) => {
              if (!this.form.code && this.current === 0) {
                callback(new Error("请输入邀请码"));
              } else {
                callback();
              }
            }
          }
        ],
        address: [
          {
            required: true,
            trigger: "blur",
            validator: (rule, value, callback) => {
              if (!this.form.address && this.current === 1) {
                callback(new Error("请输入企业注册地址"));
              } else if (this.form.address.length < 1 && this.current === 1) {
                callback(new Error("请输入企业注册地址"));
              } else {
                callback();
              }
            }
          }
        ],
        contact_name: [
          {
            required: true,
            trigger: "blur",
            validator: (rule, value, callback) => {
              if (!this.form.contact_name && this.current === 1) {
                callback(new Error("请输入企业联系人姓名"));
              } else {
                callback();
              }
            }
          }
        ],
        business_type: [
          {
            required: true,
            validator: (rule, value, callback) => {
              if (!this.form.business_type[0] && this.current === 1) {
                callback(new Error("请选择企业类型"));
              } else {
                callback();
              }
            }
          }
        ],
        user_name: [
          {
            required: true,
            trigger: "blur",
            validator: (rule, value, callback) => {
              if (!this.form.user_name && this.current === 2) {
                callback(new Error("请输入用户名"));
              } else if (
                this.form.user_name.length > 20 ||
                this.form.user_name.length < 8
              ) {
                callback(
                  new Error(
                    "长度为8-20个字符，并且以字母开头,支持数字和字母的组合"
                  )
                );
              } else {
                callback();
              }
            }
          }
        ],
        password: [
          {
            required: true,
            trigger: "blur",
            validator: (rule, value, callback) => {
              const reg = /^[a-zA-Z0-9]{8,18}$/;
              if (!this.form.password && this.current === 2) {
                callback(new Error("请输入密码"));
              } else {
                if (reg.test(value)) {
                  callback();
                } else {
                  return callback(
                    new Error("请输入6-18位数字和字母组合的密码")
                  );
                }
              }
            }
          }
        ],
        confirm_password: [
          {
            required: true,
            trigger: "blur",
            validator: (rule, value, callback) => {
              if (!this.form.confirm_password && this.current === 2) {
                callback(new Error("请输入确认密码"));
              } else if (
                this.form.confirm_password !== this.form.password &&
                this.current === 2
              ) {
                callback(new Error("两次输入密码不一致"));
              } else {
                callback();
              }
            }
          }
        ]
      }
    };
  },
  created() {
      apis.GetTimeRange().then(res => {
      this.configInfo = res.data;
      console.log('this.configInfo',this.configInfo)
        if(this.configInfo.session){
          document.title=`第${this.configInfo.session}届世界智能大会双边会谈系统`
        }
    })
    .catch(err => {
    // this.$message.error(err.data.message || "获取配置失败!");
    });
    // this.getCity();
  },
  mounted() {
    this.initCheckCode();
  },
  methods: {
    goNav() {
      if (
        process.env.NODE_ENV === "development" ||
        window.location.hostname === "t-meeting.wicongress.org.cn"
      ) {
        window.location.href =
          "https://t-meeting.wicongress.org.cn/register/nav";
      } else {
        window.location.href = "https://meeting.wicongress.org.cn/register/nav";
      }
    },
    checkPhone() {
      this.$refs.form.validateField("phone", errMsg => {
        if (!errMsg) {
          this.txCode.show();
        }
      });
    },
    initCheckCode() {
      const dom = document.getElementById("check-code");
      this.txCode = new TencentCaptcha(dom, "2055301417", res => {
        console.log(res);
        if (res.ret !== 0) {
          return;
        }
        this.txData = {
          randstr: res.randstr,
          ticket: res.ticket
        };
        this.getShortMessage();
      });
    },
    // 获取省份列表
    getCity() {
      // console.log('22222')
      api
        .GetCityList()
        .then(res => {
          this.address = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 获取城市列表
    handlerCity(data) {
      console.log(data);
      api.GetProvinceList({ province_id: data }).then(res => {
        console.log(res);
        this.city = res.data;
      });
    },
    // 获取区域
    handlerProvince(data) {
      console.log(data);
      api.GetAreaList({ city_id: data }).then(res => {
        console.log(res);
        this.area = res.data;
      });
    },
    // 步骤条下一步
    async next() {
      // if (this.single) {
      if (this.current === 0) {
        const res = await api.GetCheckCode({ code: this.form.code });
        if (res.ret == 0) {
          this.checkCode = true;
        } else {
          this.checkCode = false;
          this.$Message.error("请输入正确的邀请码！");
        }
      }
      this.$refs.form.validate(validate => {
        console.log(validate);
        if (validate && this.checkCode) {
          if (this.current == 3) {
            this.current = 0;
          } else if (this.current === 1) {
            api.isRegister({ registerNo: this.form.register_no }).then(res => {
              if (res.ret !== 0) {
                this.$Message.error(res.msg);
                return this.current === 1;
              } else {
                this.current += 1;
              }
            });
          } else {
            this.current += 1;
          }
        }
      });
      // } else {
      //   this.$Message.warning("请勾选“我已阅读并同意《用户服务协议》");
      // }
    },
    // 步骤上一步
    stepUp() {
      this.current -= 1;
    },
    // 获取上传后的图片地址
    onUploadImage(url, id) {
      console.log(url, id);
      this.form[id] = url;
    },
    // 表单提交
    handleSubmit() {
      if (this.single) {
        this.$refs.form.validate(valid => {
          this.form.phone = this.form.phone + "";
          if (valid) {
            this.$Spin.show();
            api
              .SaveForm(this.form)
              .then(res => {
                if (res.ret === 0) {
                  this.redictUrl = res.data.redictUrl;
                  this.current += 1;
                  // this.getPic();

                  // this.$Spin.hide();
                } else {
                  this.$Message.error({ content: res.msg, duration: 5 });
                }
                this.$Spin.hide();
              })
              .catch(err => {
                console.log(err);
                this.$Spin.hide();
              });
          }
        });
      } else {
        this.$Message.warning("请勾选“我已阅读并同意《用户服务协议》");
      }
    },
    // 返回登录页
    goLogin() {
      window.location.href = this.redictUrl;
    },
    // 获取公众号二维码图片
    getPic() {
      api.getCodePic().then(res => {
        this.code_url = res.data.image_url;
      });
    },
    // 获取短信验证码
    getShortMessage() {
      // this.countDown = 60;
      // this.t1 = setInterval(() => {
      //   console.log(this.countDown);
      //   this.countDown -= 1;
      //   if (this.countDown == 0) {
      //     this.shortMessage = false;
      //     clearInterval(this.t1);
      //   }
      // }, 1000);
      const params = {
        phone: this.form.phone,
        ...this.txData
      };
      api
        .GetVerificationCode(params)
        .then(res => {
          if (res.ret === 0) {
            this.shortMessage = true;
            this.shortMessage = true;
            this.countDown = 60;
            this.t1 = setInterval(() => {
              console.log(this.countDown);
              this.countDown -= 1;
              if (this.countDown == 0) {
                this.shortMessage = false;
                clearInterval(this.t1);
              }
            }, 1000);
          } else {
            this.shortMessage = false;
            this.$Message.error(res.msg);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>
<style lang="scss" scoped>
.demo-spin-icon-load {
  animation: ani-demo-spin 1s linear infinite;
}
/deep/.ivu-steps .ivu-steps-title {
  height: 26px;
  line-height: 26px;
}
.agreementContent {
  overflow: auto;
  padding: 0 40px;
}
.bottomTitle {
  margin: 15px 0 50px 130px;
  span {
    margin-left: 5px;
  }
  .bottomTitleImg {
    vertical-align: text-bottom;
    margin-right: 5px;
  }
}
.agreement {
  color: #3399ff;
  cursor: pointer;
}
.register {
  width: 100%;
  height: 100%;
  .header {
    font-weight: 400;
    overflow: hidden;
    display: flex;
    height: 82px;
    color: #fff;
    align-items: center;
    background: #3a4369;
    box-sizing: border-box;
    padding: 0 40px;
    .left {
      display: flex;
      flex: 1;
      .title {
        font-weight: 500;
        color: #ffffff;
        line-height: 25px;
        font-size: 25px;
        display: flex;
        align-items: center;
        margin-left: 20px;
      }
    }
    .right {
      width: 70px;
      display: flex;
      align-items: center;
      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
  .welcome {
    height: 25px;
    font-size: 25px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #222222;
    line-height: 25px;
    text-align: center;
    margin-top: 144px;
    margin-bottom: 80px;
  }
  .steps {
    width: 900px;
    margin: 20px auto 30px;
  }
  .btn {
    width: 120px;
    height: 40px;
  }
  .loginSuccess {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin-top: 52px;
    .flex-box {
      display: flex;
      align-items: center;
      .successIcon {
        width: 22px;
        height: 22px;
        line-height: 50px;
        border-radius: 50%;
        background-color: #67c23a;
        margin-right: 16px;
        position: relative;
        top: -2px;
        .icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .successTips {
        font-size: 18px;
        color: #2a2c2e;
      }
    }
  }
}
.form {
  width: 700px;
  margin: 0 auto;
  .ImgUpLoad {
    display: flex;
    justify-content: start;
  }
  .imgTips {
    text-align: left;
    color: slategrey;
  }
}
.short_message {
  display: flex;
  justify-content: space-between;
}
pre {
  // 兼容多个浏览器
  text-align: left;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  *word-wrap: break-word;
  *white-space: normal;
}
.ivu-form-item-content {
  span {
    margin-left: 5px;
  }
}
.last-tip-box {
  font-size: 14px;
  color: #555555;
  line-height: 14px;
  p {
    margin-bottom: 20px;
  }
  ul {
    li {
      margin-left: 40px;
      list-style-type: disc;
      margin-bottom: 20px;
      &:nth-last-child(1) {
        margin-bottom: 0;
      }
    }
  }
}
</style>
