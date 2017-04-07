/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var region_init = function(_region_p, _region_c, _region_d, _region_p_default, _region_c_default, _region_d_default) {
    var region_p = document.getElementById(_region_p);
    var region_c = document.getElementById(_region_c);
    var region_d = document.getElementById(_region_d);

    function option_items_select(cmb, value) {
        for (var i = 0; i < cmb.options.length; i++) {
            if (cmb.options[i].value == value) {
                cmb.selectedIndex = i;
                //selectedIndex ���Կ����û򷵻������б��б�ѡѡ��������š�
                return;

            }
        }
    }

    //����value��text
    function option_items_add(cmb, value, text, obj, i) {
        var option = document.createElement("OPTION");
        cmb.options.add(option);
        option.innerHTML = text;
        option.value = text; //��id
        option.obj = obj;
    }

    function region_c_change() {
        region_d.options.length = 0;
        if (region_c.selectedIndex == -1)
            return;
        var item = region_c.options[region_c.selectedIndex].obj;
        for (var i = 0; i < item.district.length; i++) {
            option_items_add(region_d, item.district[i].id, item.district[i].name, null, i);
        }
        option_items_select(region_d, _region_d_default);
    }

    //ʡ�ݱ仯����
    function region_p_change() {
        region_c.options.length = 0;
        region_c.onchange = null;
        if (region_p.selectedIndex == -1)
            return;
        //ȡѡ��ʡ�ݵ�����
        var item = region_p.options[region_p.selectedIndex].obj;

        //��ʼ����
        for (var i = 0; i < item.city.length; i++) {
            option_items_add(region_c, item.city[i].id, item.city[i].name, item.city[i], i);
        }

        //�趨Ĭ��ֵ
        option_items_select(region_c, _region_c_default);

        //�����б仯�¼�
        region_c_change();

        //���б仯�¼�
        region_c.onchange = region_c_change;
    }

    //��ʼ��ʡ��
    for (var i = 0; i < province_enum.length; i++) {
        option_items_add(region_p, province_enum[i].id, province_enum[i].name, province_enum[i]);
    }
    //�趨Ĭ��ֵ
    option_items_select(region_p, _region_p_default);

    //����ʡ�ݱ仯����
    region_p_change();

    //��ʡ�ݱ仯�¼�
    region_p.onchange = region_p_change;
}


var province_enum = [
    {id: 1, name: '����', city: [
        {id: 1, name: '������', district: [
            {id: 1, name: '������'},
            {id: 2, name: '������'},
            {id: 3, name: '������'},
            {id: 4, name: '������'},
            {id: 5, name: '������'},
            {id: 6, name: '��̨��'},
            {id: 7, name: 'ʯ��ɽ��'},
            {id: 8, name: '������'},
            {id: 9, name: '��ͷ����'},
            {id: 10, name: '��ɽ��'},
            {id: 11, name: 'ͨ����'},
            {id: 12, name: '˳����'},
            {id: 13, name: '��ƽ��'},
            {id: 14, name: '������'},
            {id: 15, name: '������'},
            {id: 16, name: 'ƽ����'},
            {id: 17, name: '������'},
            {id: 18, name: '������'}
        ]}
    ]},
    {id: 2, name: '���', city: [
        {id: 2, name: '�����', district: [
            {id: 19, name: '��ƽ��'},
            {id: 20, name: '�Ӷ���'},
            {id: 21, name: '������'},
            {id: 22, name: '�Ͽ���'},
            {id: 23, name: '�ӱ���'},
            {id: 24, name: '������'},
            {id: 25, name: '������'},
            {id: 26, name: '������'},
            {id: 27, name: '�����'},
            {id: 28, name: '������'},
            {id: 29, name: '������'},
            {id: 30, name: '������'},
            {id: 31, name: '������'},
            {id: 32, name: '������'},
            {id: 33, name: '������'},
            {id: 34, name: '������'},
            {id: 35, name: '������'},
            {id: 36, name: '����'}
        ]}
    ]},
    {id: 3, name: '�ӱ�', city: [
        {id: 3, name: 'ʯ��ׯ��', district: [
            {id: 37, name: '������'},
            {id: 38, name: '�Ŷ���'},
            {id: 39, name: '������'},
            {id: 40, name: '�»���'},
            {id: 41, name: '�������'},
            {id: 42, name: 'ԣ����'},
            {id: 43, name: '������'},
            {id: 44, name: '������'},
            {id: 45, name: '�����'},
            {id: 46, name: '������'},
            {id: 47, name: '������'},
            {id: 48, name: '������'},
            {id: 49, name: '������'},
            {id: 50, name: '�޻���'},
            {id: 51, name: '�޼���'},
            {id: 52, name: 'ƽɽ��'},
            {id: 53, name: 'Ԫ����'},
            {id: 54, name: '����'},
            {id: 55, name: '������'},
            {id: 56, name: '޻����'},
            {id: 57, name: '������'},
            {id: 58, name: '������'},
            {id: 59, name: '¹Ȫ��'}
        ]},
        {id: 4, name: '��ɽ��', district: [
            {id: 60, name: '·����'},
            {id: 61, name: '·����'},
            {id: 62, name: '��ұ��'},
            {id: 63, name: '��ƽ��'},
            {id: 64, name: '������'},
            {id: 65, name: '������'},
            {id: 66, name: '����'},
            {id: 67, name: '������'},
            {id: 68, name: '��ͤ��'},
            {id: 69, name: 'Ǩ����'},
            {id: 70, name: '������'},
            {id: 71, name: '�ƺ���'},
            {id: 72, name: '����'},
            {id: 73, name: 'Ǩ����'}
        ]},
        {id: 5, name: '�ػʵ���', district: [
            {id: 74, name: '������'},
            {id: 75, name: 'ɽ������'},
            {id: 76, name: '��������'},
            {id: 77, name: '��������������'},
            {id: 78, name: '������'},
            {id: 79, name: '������'},
            {id: 80, name: '¬����'}
        ]},
        {id: 6, name: '������', district: [
            {id: 81, name: '��ɽ��'},
            {id: 82, name: '��̨��'},
            {id: 83, name: '������'},
            {id: 84, name: '������'},
            {id: 85, name: '������'},
            {id: 86, name: '������'},
            {id: 87, name: '�ɰ���'},
            {id: 88, name: '������'},
            {id: 89, name: '����'},
            {id: 90, name: '����'},
            {id: 91, name: '������'},
            {id: 92, name: '������'},
            {id: 93, name: '����'},
            {id: 94, name: '������'},
            {id: 95, name: '��ƽ��'},
            {id: 96, name: '������'},
            {id: 97, name: 'κ��'},
            {id: 98, name: '������'},
            {id: 99, name: '�䰲��'}
        ]},
        {id: 7, name: '��̨��', district: [
            {id: 100, name: '�Ŷ���'},
            {id: 101, name: '������'},
            {id: 102, name: '��̨��'},
            {id: 103, name: '�ٳ���'},
            {id: 104, name: '������'},
            {id: 105, name: '������'},
            {id: 106, name: '¡Ң��'},
            {id: 107, name: '����'},
            {id: 108, name: '�Ϻ���'},
            {id: 109, name: '������'},
            {id: 110, name: '��¹��'},
            {id: 111, name: '�º���'},
            {id: 112, name: '������'},
            {id: 113, name: 'ƽ����'},
            {id: 114, name: '����'},
            {id: 115, name: '�����'},
            {id: 116, name: '������'},
            {id: 117, name: '�Ϲ���'},
            {id: 118, name: 'ɳ����'}
        ]},
        {id: 8, name: '������', district: [
            {id: 119, name: '������'},
            {id: 120, name: '������'},
            {id: 121, name: '������'},
            {id: 122, name: '������'},
            {id: 123, name: '��Է��'},
            {id: 124, name: '�ˮ��'},
            {id: 125, name: '��ƽ��'},
            {id: 126, name: '��ˮ��'},
            {id: 127, name: '������'},
            {id: 128, name: '����'},
            {id: 129, name: '������'},
            {id: 130, name: '�ݳ���'},
            {id: 131, name: '�Դ��'},
            {id: 132, name: '������'},
            {id: 133, name: '������'},
            {id: 134, name: '����'},
            {id: 135, name: '������'},
            {id: 136, name: '���'},
            {id: 137, name: '˳ƽ��'},
            {id: 138, name: '��Ұ��'},
            {id: 139, name: '����'},
            {id: 140, name: '������'},
            {id: 141, name: '������'},
            {id: 142, name: '������'},
            {id: 143, name: '�߱�����'}
        ]},
        {id: 9, name: '�żҿ���', district: [
            {id: 144, name: '�Ŷ���'},
            {id: 145, name: '������'},
            {id: 146, name: '������'},
            {id: 147, name: '�»�԰��'},
            {id: 148, name: '������'},
            {id: 149, name: '�ű���'},
            {id: 150, name: '������'},
            {id: 151, name: '��Դ��'},
            {id: 152, name: '������'},
            {id: 153, name: 'ε��'},
            {id: 154, name: '��ԭ��'},
            {id: 155, name: '������'},
            {id: 156, name: '��ȫ��'},
            {id: 157, name: '������'},
            {id: 158, name: '��¹��'},
            {id: 159, name: '�����'},
            {id: 160, name: '������'}
        ]},
        {id: 10, name: '�е���', district: [
            {id: 161, name: '˫����'},
            {id: 162, name: '˫����'},
            {id: 163, name: 'ӥ��Ӫ�ӿ���'},
            {id: 164, name: '�е���'},
            {id: 165, name: '��¡��'},
            {id: 166, name: 'ƽȪ��'},
            {id: 167, name: '��ƽ��'},
            {id: 168, name: '¡����'},
            {id: 169, name: '��������������'},
            {id: 170, name: '�������������'},
            {id: 171, name: 'Χ�������ɹ���������'}
        ]},
        {id: 11, name: '������', district: [
            {id: 172, name: '�»���'},
            {id: 173, name: '�˺���'},
            {id: 174, name: '����'},
            {id: 175, name: '����'},
            {id: 176, name: '������'},
            {id: 177, name: '������'},
            {id: 178, name: '��ɽ��'},
            {id: 179, name: '������'},
            {id: 180, name: '��Ƥ��'},
            {id: 181, name: '������'},
            {id: 182, name: '����'},
            {id: 183, name: '�ϴ����������'},
            {id: 184, name: '��ͷ��'},
            {id: 185, name: '������'},
            {id: 186, name: '������'},
            {id: 187, name: '�Ӽ���'}
        ]},
        {id: 12, name: '�ȷ���', district: [
            {id: 188, name: '������'},
            {id: 189, name: '������'},
            {id: 190, name: '�̰���'},
            {id: 191, name: '������'},
            {id: 192, name: '�����'},
            {id: 193, name: '�����'},
            {id: 194, name: '�İ���'},
            {id: 195, name: '�󳧻���������'},
            {id: 196, name: '������'},
            {id: 197, name: '������'}
        ]},
        {id: 13, name: '��ˮ��', district: [
            {id: 198, name: '�ҳ���'},
            {id: 199, name: '��ǿ��'},
            {id: 200, name: '������'},
            {id: 201, name: '��ǿ��'},
            {id: 202, name: '������'},
            {id: 203, name: '��ƽ��'},
            {id: 204, name: '�ʳ���'},
            {id: 205, name: '����'},
            {id: 206, name: '������'},
            {id: 207, name: '������'},
            {id: 208, name: '������'}
        ]}
    ]},
    {id: 4, name: 'ɽ��', city: [
        {id: 14, name: '̫ԭ��', district: [
            {id: 209, name: 'С����'},
            {id: 210, name: 'ӭ����'},
            {id: 211, name: '�ӻ�����'},
            {id: 212, name: '���ƺ��'},
            {id: 213, name: '�������'},
            {id: 214, name: '��Դ��'},
            {id: 215, name: '������'},
            {id: 216, name: '������'},
            {id: 217, name: '¦����'},
            {id: 218, name: '�Ž���'}
        ]},
        {id: 15, name: '��ͬ��', district: [
            {id: 219, name: '����'},
            {id: 220, name: '����'},
            {id: 221, name: '�Ͻ���'},
            {id: 222, name: '������'},
            {id: 223, name: '������'},
            {id: 224, name: '������'},
            {id: 225, name: '������'},
            {id: 226, name: '������'},
            {id: 227, name: '��Դ��'},
            {id: 228, name: '������'},
            {id: 229, name: '��ͬ��'}
        ]},
        {id: 16, name: '��Ȫ��', district: [
            {id: 230, name: '����'},
            {id: 231, name: '����'},
            {id: 232, name: '����'},
            {id: 233, name: 'ƽ����'},
            {id: 234, name: '����'}
        ]},
        {id: 17, name: '������', district: [
            {id: 235, name: '����'},
            {id: 236, name: '����'},
            {id: 237, name: '������'},
            {id: 238, name: '��ԫ��'},
            {id: 239, name: '������'},
            {id: 240, name: 'ƽ˳��'},
            {id: 241, name: '�����'},
            {id: 242, name: '������'},
            {id: 243, name: '������'},
            {id: 244, name: '������'},
            {id: 245, name: '����'},
            {id: 246, name: '��Դ��'},
            {id: 247, name: 'º����'}
        ]},
        {id: 18, name: '������', district: [
            {id: 248, name: '����'},
            {id: 249, name: '��ˮ��'},
            {id: 250, name: '������'},
            {id: 251, name: '�괨��'},
            {id: 252, name: '������'},
            {id: 253, name: '��ƽ��'}
        ]},
        {id: 19, name: '˷����', district: [
            {id: 254, name: '˷����'},
            {id: 255, name: 'ƽ³��'},
            {id: 256, name: 'ɽ����'},
            {id: 257, name: 'Ӧ��'},
            {id: 258, name: '������'},
            {id: 259, name: '������'}
        ]},
        {id: 20, name: '������', district: [
            {id: 260, name: '�ܴ���'},
            {id: 261, name: '������'},
            {id: 262, name: '��Ȩ��'},
            {id: 263, name: '��˳��'},
            {id: 264, name: '������'},
            {id: 265, name: '������'},
            {id: 266, name: '̫����'},
            {id: 267, name: '����'},
            {id: 268, name: 'ƽң��'},
            {id: 269, name: '��ʯ��'},
            {id: 270, name: '������'}
        ]},
        {id: 21, name: '�˳���', district: [
            {id: 271, name: '�κ���'},
            {id: 272, name: '�����'},
            {id: 273, name: '������'},
            {id: 274, name: '��ϲ��'},
            {id: 275, name: '�ɽ��'},
            {id: 276, name: '�����'},
            {id: 277, name: '���'},
            {id: 278, name: 'ԫ����'},
            {id: 279, name: '����'},
            {id: 280, name: 'ƽ½��'},
            {id: 281, name: '�ǳ���'},
            {id: 282, name: '������'},
            {id: 283, name: '�ӽ���'}
        ]},
        {id: 22, name: '������', district: [
            {id: 284, name: '�ø���'},
            {id: 285, name: '������'},
            {id: 286, name: '��̨��'},
            {id: 287, name: '����'},
            {id: 288, name: '������'},
            {id: 289, name: '������'},
            {id: 290, name: '������'},
            {id: 291, name: '�����'},
            {id: 292, name: '��կ��'},
            {id: 293, name: '����'},
            {id: 294, name: '������'},
            {id: 295, name: '������'},
            {id: 296, name: 'ƫ����'},
            {id: 297, name: 'ԭƽ��'}
        ]},
        {id: 23, name: '�ٷ���', district: [
            {id: 298, name: 'Ң����'},
            {id: 299, name: '������'},
            {id: 300, name: '�����'},
            {id: 301, name: '�����'},
            {id: 302, name: '�鶴��'},
            {id: 303, name: '����'},
            {id: 304, name: '������'},
            {id: 305, name: '��ɽ��'},
            {id: 306, name: '����'},
            {id: 307, name: '������'},
            {id: 308, name: '������'},
            {id: 309, name: '����'},
            {id: 310, name: '������'},
            {id: 311, name: '����'},
            {id: 312, name: '������'},
            {id: 313, name: '������'},
            {id: 314, name: '������'}
        ]},
        {id: 24, name: '������', district: [
            {id: 315, name: '��ʯ��'},
            {id: 316, name: '��ˮ��'},
            {id: 317, name: '������'},
            {id: 318, name: '����'},
            {id: 319, name: '����'},
            {id: 320, name: '������'},
            {id: 321, name: 'ʯ¥��'},
            {id: 322, name: '���'},
            {id: 323, name: '��ɽ��'},
            {id: 324, name: '������'},
            {id: 325, name: '������'},
            {id: 326, name: 'Т����'},
            {id: 327, name: '������'}
        ]}
    ]},
    {id: 5, name: '���ɹ�', city: [
        {id: 25, name: '���ͺ�����', district: [
            {id: 328, name: '�³���'},
            {id: 329, name: '������'},
            {id: 330, name: '��Ȫ��'},
            {id: 331, name: '������'},
            {id: 332, name: '��Ĭ������'},
            {id: 333, name: '�п�����'},
            {id: 334, name: '���ָ����'},
            {id: 335, name: '��ˮ����'},
            {id: 336, name: '�䴨��'}
        ]},
        {id: 26, name: '��ͷ��', district: [
            {id: 337, name: '������'},
            {id: 338, name: '��������'},
            {id: 339, name: '��ɽ��'},
            {id: 340, name: 'ʯ����'},
            {id: 341, name: '���ƿ���'},
            {id: 342, name: '��ԭ��'},
            {id: 343, name: '��Ĭ������'},
            {id: 344, name: '������'},
            {id: 345, name: '�����ï����������'}
        ]},
        {id: 27, name: '�ں���', district: [
            {id: 346, name: '��������'},
            {id: 347, name: '������'},
            {id: 348, name: '�ڴ���'}
        ]},
        {id: 28, name: '�����', district: [
            {id: 349, name: '��ɽ��'},
            {id: 350, name: 'Ԫ��ɽ��'},
            {id: 351, name: '��ɽ��'},
            {id: 352, name: '��³�ƶ�����'},
            {id: 353, name: '��������'},
            {id: 354, name: '��������'},
            {id: 355, name: '������'},
            {id: 356, name: '��ʲ������'},
            {id: 357, name: '��ţ����'},
            {id: 358, name: '��������'},
            {id: 359, name: '������'},
            {id: 360, name: '������'}
        ]},
        {id: 29, name: 'ͨ����', district: [
            {id: 361, name: '�ƶ�����'},
            {id: 362, name: '�ƶ�����������'},
            {id: 363, name: '�ƶ����������'},
            {id: 364, name: '��³��'},
            {id: 365, name: '������'},
            {id: 366, name: '������'},
            {id: 367, name: '��³����'},
            {id: 368, name: '���ֹ�����'}
        ]},
        {id: 30, name: '������˹��', district: [
            {id: 369, name: '��ʤ��'},
            {id: 370, name: '��������'},
            {id: 371, name: '׼�����'},
            {id: 372, name: '���п�ǰ��'},
            {id: 373, name: '���п���'},
            {id: 374, name: '������'},
            {id: 375, name: '������'},
            {id: 376, name: '���������'}
        ]},
        {id: 31, name: '���ױ�����', district: [
            {id: 377, name: '��������'},
            {id: 378, name: '������'},
            {id: 379, name: 'Ī�����ߴ��Ӷ���������'},
            {id: 380, name: '���״�������'},
            {id: 381, name: '���¿���������'},
            {id: 382, name: '�°Ͷ�����'},
            {id: 383, name: '�°Ͷ�������'},
            {id: 384, name: '�°Ͷ�������'},
            {id: 385, name: '��������'},
            {id: 386, name: '����ʯ��'},
            {id: 387, name: '��������'},
            {id: 388, name: '���������'},
            {id: 389, name: '������'}
        ]},
        {id: 32, name: '�����׶���', district: [
            {id: 390, name: '�ٺ���'},
            {id: 391, name: '��ԭ��'},
            {id: 392, name: '�����'},
            {id: 393, name: '������ǰ��'},
            {id: 394, name: '����������'},
            {id: 395, name: '�����غ���'},
            {id: 396, name: '��������'}
        ]},
        {id: 33, name: '�����첼��', district: [
            {id: 397, name: '������'},
            {id: 398, name: '׿����'},
            {id: 399, name: '������'},
            {id: 400, name: '�̶���'},
            {id: 401, name: '�˺���'},
            {id: 402, name: '������'},
            {id: 403, name: '���������ǰ��'},
            {id: 404, name: '�������������'},
            {id: 405, name: '������������'},
            {id: 406, name: '��������'},
            {id: 407, name: '������'}
        ]},
        {id: 34, name: '�˰���', district: [
            {id: 408, name: '����������'},
            {id: 409, name: '����ɽ��'},
            {id: 410, name: '�ƶ�������ǰ��'},
            {id: 411, name: '�ƶ�����������'},
            {id: 412, name: '��������'},
            {id: 413, name: 'ͻȪ��'}
        ]},
        {id: 35, name: '���ֹ�����', district: [
            {id: 414, name: '����������'},
            {id: 415, name: '���ֺ�����'},
            {id: 416, name: '���͸���'},
            {id: 417, name: '����������'},
            {id: 418, name: '����������'},
            {id: 419, name: '������������'},
            {id: 420, name: '������������'},
            {id: 421, name: '̫������'},
            {id: 422, name: '�����'},
            {id: 423, name: '�������'},
            {id: 424, name: '������'},
            {id: 425, name: '������'}
        ]},
        {id: 36, name: '��������', district: [
            {id: 426, name: '����������'},
            {id: 427, name: '����������'},
            {id: 428, name: '�������'}
        ]}
    ]},
    {id: 6, name: '����', city: [
        {id: 37, name: '������', district: [
            {id: 429, name: '��ƽ��'},
            {id: 430, name: '�����'},
            {id: 431, name: '����'},
            {id: 432, name: '�ʹ���'},
            {id: 433, name: '������'},
            {id: 434, name: '�ռ�����'},
            {id: 435, name: '������'},
            {id: 436, name: '�³�����'},
            {id: 437, name: '�ں���'},
            {id: 438, name: '������'},
            {id: 439, name: '��ƽ��'},
            {id: 440, name: '������'},
            {id: 441, name: '������'}
        ]},
        {id: 38, name: '������', district: [
            {id: 442, name: '��ɽ��'},
            {id: 443, name: '������'},
            {id: 444, name: 'ɳ�ӿ���'},
            {id: 445, name: '�ʾ�����'},
            {id: 446, name: '��˳����'},
            {id: 447, name: '������'},
            {id: 448, name: '������'},
            {id: 449, name: '�߷�����'},
            {id: 450, name: '��������'},
            {id: 451, name: 'ׯ����'}
        ]},
        {id: 39, name: '��ɽ��', district: [
            {id: 452, name: '������'},
            {id: 453, name: '������'},
            {id: 454, name: '��ɽ��'},
            {id: 455, name: 'ǧɽ��'},
            {id: 456, name: '̨����'},
            {id: 457, name: '�������������'},
            {id: 458, name: '������'}
        ]},
        {id: 40, name: '��˳��', district: [
            {id: 459, name: '�¸���'},
            {id: 460, name: '������'},
            {id: 461, name: '������'},
            {id: 462, name: '˳����'},
            {id: 463, name: '��˳��'},
            {id: 464, name: '�±�����������'},
            {id: 465, name: '��ԭ����������'}
        ]},
        {id: 41, name: '��Ϫ��', district: [
            {id: 466, name: 'ƽɽ��'},
            {id: 467, name: 'Ϫ����'},
            {id: 468, name: '��ɽ��'},
            {id: 469, name: '�Ϸ���'},
            {id: 470, name: '��Ϫ����������'},
            {id: 471, name: '��������������'}
        ]},
        {id: 42, name: '������', district: [
            {id: 472, name: 'Ԫ����'},
            {id: 473, name: '������'},
            {id: 474, name: '����'},
            {id: 475, name: '�������������'},
            {id: 476, name: '������'},
            {id: 477, name: '�����'}
        ]},
        {id: 43, name: '������', district: [
            {id: 478, name: '������'},
            {id: 479, name: '�����'},
            {id: 480, name: '̫����'},
            {id: 481, name: '��ɽ��'},
            {id: 482, name: '����'},
            {id: 483, name: '�躣��'},
            {id: 484, name: '������'}
        ]},
        {id: 44, name: 'Ӫ����', district: [
            {id: 485, name: 'վǰ��'},
            {id: 486, name: '������'},
            {id: 487, name: '����Ȧ��'},
            {id: 488, name: '�ϱ���'},
            {id: 489, name: '������'},
            {id: 490, name: '��ʯ����'}
        ]},
        {id: 45, name: '������', district: [
            {id: 491, name: '������'},
            {id: 492, name: '������'},
            {id: 493, name: '̫ƽ��'},
            {id: 494, name: '�������'},
            {id: 495, name: 'ϸ����'},
            {id: 496, name: '�����ɹ���������'},
            {id: 497, name: '������'}
        ]},
        {id: 46, name: '������', district: [
            {id: 498, name: '������'},
            {id: 499, name: '��ʥ��'},
            {id: 500, name: '��ΰ��'},
            {id: 501, name: '��������'},
            {id: 502, name: '̫�Ӻ���'},
            {id: 503, name: '������'},
            {id: 504, name: '������'}
        ]},
        {id: 47, name: '�̽���', district: [
            {id: 505, name: '˫̨����'},
            {id: 506, name: '��¡̨��'},
            {id: 507, name: '������'},
            {id: 508, name: '��ɽ��'}
        ]},
        {id: 48, name: '������', district: [
            {id: 509, name: '������'},
            {id: 510, name: '�����'},
            {id: 511, name: '������'},
            {id: 512, name: '������'},
            {id: 513, name: '��ͼ��'},
            {id: 514, name: '����ɽ��'},
            {id: 515, name: '��ԭ��'}
        ]},
        {id: 49, name: '������', district: [
            {id: 516, name: '˫����'},
            {id: 517, name: '������'},
            {id: 518, name: '������'},
            {id: 519, name: '��ƽ��'},
            {id: 520, name: '�����������ɹ���������'},
            {id: 521, name: '��Ʊ��'},
            {id: 522, name: '��Դ��'}
        ]},
        {id: 50, name: '��«����', district: [
            {id: 523, name: '��ɽ��'},
            {id: 524, name: '������'},
            {id: 525, name: '��Ʊ��'},
            {id: 526, name: '������'},
            {id: 527, name: '������'},
            {id: 528, name: '�˳���'}
        ]}
    ]},
    {id: 7, name: '����', city: [
        {id: 51, name: '������', district: [
            {id: 529, name: '�Ϲ���'},
            {id: 530, name: '�����'},
            {id: 531, name: '������'},
            {id: 532, name: '������'},
            {id: 533, name: '��԰��'},
            {id: 534, name: '˫����'},
            {id: 535, name: 'ũ����'},
            {id: 536, name: '��̨��'},
            {id: 537, name: '������'},
            {id: 538, name: '�»���'}
        ]},
        {id: 52, name: '������', district: [
            {id: 539, name: '������'},
            {id: 540, name: '��̶��'},
            {id: 541, name: '��Ӫ��'},
            {id: 542, name: '������'},
            {id: 543, name: '������'},
            {id: 544, name: '�Ժ���'},
            {id: 545, name: '�����'},
            {id: 546, name: '������'},
            {id: 547, name: '��ʯ��'}
        ]},
        {id: 53, name: '��ƽ��', district: [
            {id: 548, name: '������'},
            {id: 549, name: '������'},
            {id: 550, name: '������'},
            {id: 551, name: '��ͨ����������'},
            {id: 552, name: '��������'},
            {id: 553, name: '˫����'}
        ]},
        {id: 54, name: '��Դ��', district: [
            {id: 554, name: '��ɽ��'},
            {id: 555, name: '������'},
            {id: 556, name: '������'},
            {id: 557, name: '������'}
        ]},
        {id: 55, name: 'ͨ����', district: [
            {id: 558, name: '������'},
            {id: 559, name: '��������'},
            {id: 560, name: 'ͨ����'},
            {id: 561, name: '������'},
            {id: 562, name: '������'},
            {id: 563, name: '÷�ӿ���'},
            {id: 564, name: '������'}
        ]},
        {id: 56, name: '��ɽ��', district: [
            {id: 565, name: '�˵�����'},
            {id: 566, name: '������'},
            {id: 567, name: '������'},
            {id: 568, name: '���׳�����������'},
            {id: 569, name: '��Դ��'},
            {id: 570, name: '�ٽ���'}
        ]},
        {id: 57, name: '��ԭ��', district: [
            {id: 571, name: '������'},
            {id: 572, name: 'ǰ������˹�ɹ���������'},
            {id: 573, name: '������'},
            {id: 574, name: 'Ǭ����'},
            {id: 575, name: '������'}
        ]},
        {id: 58, name: '�׳���', district: [
            {id: 576, name: '䬱���'},
            {id: 577, name: '������'},
            {id: 578, name: 'ͨ����'},
            {id: 579, name: '�����'},
            {id: 580, name: '����'}
        ]},
        {id: 59, name: '�ӱ�', district: [
            {id: 581, name: '�Ӽ���'},
            {id: 582, name: 'ͼ����'},
            {id: 583, name: '�ػ���'},
            {id: 584, name: '������'},
            {id: 585, name: '������'},
            {id: 586, name: '������'},
            {id: 587, name: '������'},
            {id: 588, name: '��ͼ��'}
        ]}
    ]},
    {id: 8, name: '������', city: [
        {id: 60, name: '��������', district: [
            {id: 589, name: '������'},
            {id: 590, name: '�ϸ���'},
            {id: 591, name: '������'},
            {id: 592, name: '�㷻��'},
            {id: 593, name: '������'},
            {id: 594, name: 'ƽ����'},
            {id: 595, name: '�ɱ���'},
            {id: 596, name: '������'},
            {id: 597, name: '������'},
            {id: 598, name: '������'},
            {id: 599, name: '����'},
            {id: 600, name: '������'},
            {id: 601, name: 'ľ����'},
            {id: 602, name: 'ͨ����'},
            {id: 603, name: '������'},
            {id: 604, name: '������'},
            {id: 605, name: '˫����'},
            {id: 606, name: '��־��'},
            {id: 607, name: '�峣��'}
        ]},
        {id: 61, name: '���������', district: [
            {id: 608, name: '��ɳ��'},
            {id: 609, name: '������'},
            {id: 610, name: '������'},
            {id: 611, name: '����Ϫ��'},
            {id: 612, name: '����������'},
            {id: 613, name: '����ɽ��'},
            {id: 614, name: '÷��˹���Ӷ�����'},
            {id: 615, name: '������'},
            {id: 616, name: '������'},
            {id: 617, name: '̩����'},
            {id: 618, name: '������'},
            {id: 619, name: '��ԣ��'},
            {id: 620, name: '��ɽ��'},
            {id: 621, name: '�˶���'},
            {id: 622, name: '��Ȫ��'},
            {id: 623, name: 'ګ����'}
        ]},
        {id: 62, name: '������', district: [
            {id: 624, name: '������'},
            {id: 625, name: '��ɽ��'},
            {id: 626, name: '�ε���'},
            {id: 627, name: '������'},
            {id: 628, name: '���Ӻ���'},
            {id: 629, name: '��ɽ��'},
            {id: 630, name: '������'},
            {id: 631, name: '������'},
            {id: 632, name: '��ɽ��'}
        ]},
        {id: 63, name: '�׸���', district: [
            {id: 633, name: '������'},
            {id: 634, name: '��ũ��'},
            {id: 635, name: '��ɽ��'},
            {id: 636, name: '�˰���'},
            {id: 637, name: '��ɽ��'},
            {id: 638, name: '��ɽ��'},
            {id: 639, name: '�ܱ���'},
            {id: 640, name: '�����'}
        ]},
        {id: 64, name: '˫Ѽɽ��', district: [
            {id: 641, name: '��ɽ��'},
            {id: 642, name: '�붫��'},
            {id: 643, name: '�ķ�̨��'},
            {id: 644, name: '��ɽ��'},
            {id: 645, name: '������'},
            {id: 646, name: '������'},
            {id: 647, name: '������'},
            {id: 648, name: '�ĺ���'}
        ]},
        {id: 65, name: '������', district: [
            {id: 649, name: '����ͼ��'},
            {id: 650, name: '������'},
            {id: 651, name: '�ú�·��'},
            {id: 652, name: '�����'},
            {id: 653, name: '��ͬ��'},
            {id: 654, name: '������'},
            {id: 655, name: '��Դ��'},
            {id: 656, name: '�ֵ���'},
            {id: 657, name: '�Ŷ������ɹ���������'}
        ]},
        {id: 66, name: '������', district: [
            {id: 658, name: '������'},
            {id: 659, name: '�ϲ���'},
            {id: 660, name: '�Ѻ���'},
            {id: 661, name: '������'},
            {id: 662, name: '������'},
            {id: 663, name: '������'},
            {id: 664, name: '��Ϫ��'},
            {id: 665, name: '��ɽ����'},
            {id: 666, name: '��Ӫ��'},
            {id: 667, name: '�������'},
            {id: 668, name: '��������'},
            {id: 669, name: '������'},
            {id: 670, name: '��������'},
            {id: 671, name: '������'},
            {id: 672, name: '�ϸ�����'},
            {id: 673, name: '������'},
            {id: 674, name: '������'}
        ]},
        {id: 67, name: '��ľ˹��', district: [
            {id: 675, name: '������'},
            {id: 676, name: '������'},
            {id: 677, name: 'ǰ����'},
            {id: 678, name: '������'},
            {id: 679, name: '����'},
            {id: 680, name: '������'},
            {id: 681, name: '�봨��'},
            {id: 682, name: '��ԭ��'},
            {id: 683, name: '��Զ��'},
            {id: 684, name: 'ͬ����'},
            {id: 685, name: '������'}
        ]},
        {id: 68, name: '��̨����', district: [
            {id: 686, name: '������'},
            {id: 687, name: '��ɽ��'},
            {id: 688, name: '���Ӻ���'},
            {id: 689, name: '������'}
        ]},
        {id: 69, name: 'ĵ������', district: [
            {id: 690, name: '������'},
            {id: 691, name: '������'},
            {id: 692, name: '������'},
            {id: 693, name: '������'},
            {id: 694, name: '������'},
            {id: 695, name: '�ֿ���'},
            {id: 696, name: '��Һ���'},
            {id: 697, name: '������'},
            {id: 698, name: '������'},
            {id: 699, name: '������'}
        ]},
        {id: 70, name: '�ں���', district: [
            {id: 700, name: '������'},
            {id: 701, name: '�۽���'},
            {id: 702, name: 'ѷ����'},
            {id: 703, name: '������'},
            {id: 704, name: '������'},
            {id: 705, name: '���������'}
        ]},
        {id: 71, name: '�绯��', district: [
            {id: 706, name: '������'},
            {id: 707, name: '������'},
            {id: 708, name: '������'},
            {id: 709, name: '�����'},
            {id: 710, name: '�찲��'},
            {id: 711, name: '��ˮ��'},
            {id: 712, name: '������'},
            {id: 713, name: '������'},
            {id: 714, name: '�ض���'},
            {id: 715, name: '������'}
        ]},
        {id: 72, name: '���˰������', district: [
            {id: 716, name: '������'},
            {id: 717, name: '������'},
            {id: 718, name: 'Į����'}
        ]}
    ]},
    {id: 9, name: '�Ϻ�', city: [
        {id: 73, name: '�Ϻ���', district: [
            {id: 719, name: '������'},
            {id: 720, name: '¬����'},
            {id: 721, name: '�����'},
            {id: 722, name: '������'},
            {id: 723, name: '������'},
            {id: 724, name: '������'},
            {id: 725, name: 'բ����'},
            {id: 726, name: '�����'},
            {id: 727, name: '������'},
            {id: 728, name: '������'},
            {id: 729, name: '��ɽ��'},
            {id: 730, name: '�ζ���'},
            {id: 731, name: '�ֶ�����'},
            {id: 732, name: '��ɽ��'},
            {id: 733, name: '�ɽ���'},
            {id: 734, name: '������'},
            {id: 735, name: '�ϻ���'},
            {id: 736, name: '������'},
            {id: 737, name: '������'}
        ]}
    ]},
    {id: 10, name: '����', city: [
        {id: 74, name: '�Ͼ���', district: [
            {id: 738, name: '������'},
            {id: 739, name: '������'},
            {id: 740, name: '�ػ���'},
            {id: 741, name: '������'},
            {id: 742, name: '��¥��'},
            {id: 743, name: '�¹���'},
            {id: 744, name: '�ֿ���'},
            {id: 745, name: '��ϼ��'},
            {id: 746, name: '�껨̨��'},
            {id: 747, name: '������'},
            {id: 748, name: '������'},
            {id: 749, name: '��ˮ��'},
            {id: 750, name: '�ߴ���'}
        ]},
        {id: 75, name: '������', district: [
            {id: 751, name: '�簲��'},
            {id: 752, name: '�ϳ���'},
            {id: 753, name: '������'},
            {id: 754, name: '��ɽ��'},
            {id: 755, name: '��ɽ��'},
            {id: 756, name: '������'},
            {id: 757, name: '������'},
            {id: 758, name: '������'}
        ]},
        {id: 76, name: '������', district: [
            {id: 759, name: '��¥��'},
            {id: 760, name: '������'},
            {id: 761, name: '������'},
            {id: 762, name: '������'},
            {id: 763, name: 'Ȫɽ��'},
            {id: 764, name: '����'},
            {id: 765, name: '����'},
            {id: 766, name: 'ͭɽ��'},
            {id: 767, name: '�����'},
            {id: 768, name: '������'},
            {id: 769, name: '������'}
        ]},
        {id: 77, name: '������', district: [
            {id: 770, name: '������'},
            {id: 771, name: '��¥��'},
            {id: 772, name: '��������'},
            {id: 773, name: '�±���'},
            {id: 774, name: '�����'},
            {id: 775, name: '������'},
            {id: 776, name: '��̳��'}
        ]},
        {id: 78, name: '������', district: [
            {id: 777, name: '������'},
            {id: 778, name: 'ƽ����'},
            {id: 779, name: '������'},
            {id: 780, name: '������'},
            {id: 781, name: '������'},
            {id: 782, name: '�����'},
            {id: 783, name: '������'},
            {id: 784, name: '�żҸ���'},
            {id: 785, name: '��ɽ��'},
            {id: 786, name: '�⽭��'},
            {id: 787, name: '̫����'}
        ]},
        {id: 79, name: '��ͨ��', district: [
            {id: 788, name: '�紨��'},
            {id: 789, name: '��բ��'},
            {id: 790, name: '������'},
            {id: 791, name: '�綫��'},
            {id: 792, name: '������'},
            {id: 793, name: '�����'},
            {id: 794, name: 'ͨ����'},
            {id: 795, name: '������'}
        ]},
        {id: 80, name: '���Ƹ���', district: [
            {id: 796, name: '������'},
            {id: 797, name: '������'},
            {id: 798, name: '������'},
            {id: 799, name: '������'},
            {id: 800, name: '������'},
            {id: 801, name: '������'},
            {id: 802, name: '������'}
        ]},
        {id: 81, name: '������', district: [
            {id: 803, name: '�����'},
            {id: 804, name: '������'},
            {id: 805, name: '������'},
            {id: 806, name: '������'},
            {id: 807, name: '��ˮ��'},
            {id: 808, name: '������'},
            {id: 809, name: '������'},
            {id: 810, name: '�����'}
        ]},
        {id: 82, name: '�γ���', district: [
            {id: 811, name: 'ͤ����'},
            {id: 812, name: '�ζ���'},
            {id: 813, name: '��ˮ��'},
            {id: 814, name: '������'},
            {id: 815, name: '������'},
            {id: 816, name: '������'},
            {id: 817, name: '������'},
            {id: 818, name: '��̨��'},
            {id: 819, name: '�����'}
        ]},
        {id: 83, name: '������', district: [
            {id: 820, name: '������'},
            {id: 821, name: '������'},
            {id: 822, name: 'ά����'},
            {id: 823, name: '��Ӧ��'},
            {id: 824, name: '������'},
            {id: 825, name: '������'},
            {id: 826, name: '������'}
        ]},
        {id: 84, name: '����', district: [
            {id: 827, name: '������'},
            {id: 828, name: '������'},
            {id: 829, name: '��ͽ��'},
            {id: 830, name: '������'},
            {id: 831, name: '������'},
            {id: 832, name: '������'}
        ]},
        {id: 85, name: '̩����', district: [
            {id: 833, name: '������'},
            {id: 834, name: '�߸���'},
            {id: 835, name: '�˻���'},
            {id: 836, name: '������'},
            {id: 837, name: '̩����'},
            {id: 838, name: '������'}
        ]},
        {id: 86, name: '��Ǩ��', district: [
            {id: 839, name: '�޳���'},
            {id: 840, name: '��ԥ��'},
            {id: 841, name: '������'},
            {id: 842, name: '������'},
            {id: 843, name: '������'}
        ]}
    ]},
    {id: 11, name: '�㽭', city: [
        {id: 87, name: '������', district: [
            {id: 844, name: '�ϳ���'},
            {id: 845, name: '�³���'},
            {id: 846, name: '������'},
            {id: 847, name: '������'},
            {id: 848, name: '������'},
            {id: 849, name: '������'},
            {id: 850, name: '��ɽ��'},
            {id: 851, name: '�ຼ��'},
            {id: 852, name: 'ͩ®��'},
            {id: 853, name: '������'},
            {id: 854, name: '������'},
            {id: 855, name: '������'},
            {id: 856, name: '�ٰ���'}
        ]},
        {id: 88, name: '������', district: [
            {id: 857, name: '������'},
            {id: 858, name: '������'},
            {id: 859, name: '������'},
            {id: 860, name: '������'},
            {id: 861, name: '����'},
            {id: 862, name: '۴����'},
            {id: 863, name: '��ɽ��'},
            {id: 864, name: '������'},
            {id: 865, name: '��Ҧ��'},
            {id: 866, name: '��Ϫ��'},
            {id: 867, name: '���'}
        ]},
        {id: 89, name: '������', district: [
            {id: 868, name: '¹����'},
            {id: 869, name: '������'},
            {id: 870, name: '걺���'},
            {id: 871, name: '��ͷ��'},
            {id: 872, name: '������'},
            {id: 873, name: 'ƽ����'},
            {id: 874, name: '������'},
            {id: 875, name: '�ĳ���'},
            {id: 876, name: '̩˳��'},
            {id: 877, name: '����'},
            {id: 878, name: '������'}
        ]},
        {id: 90, name: '������', district: [
            {id: 879, name: '�����'},
            {id: 880, name: '������'},
            {id: 881, name: '������'},
            {id: 882, name: '������'},
            {id: 883, name: '������'},
            {id: 884, name: 'ƽ����'},
            {id: 885, name: 'ͩ����'}
        ]},
        {id: 91, name: '������', district: [
            {id: 886, name: '������'},
            {id: 887, name: '�����'},
            {id: 888, name: '������'},
            {id: 889, name: '������'},
            {id: 890, name: '������'}
        ]},
        {id: 92, name: '������', district: [
            {id: 891, name: 'Խ����'},
            {id: 892, name: '������'},
            {id: 893, name: '�²���'},
            {id: 894, name: '������'},
            {id: 895, name: '������'},
            {id: 896, name: '������'}
        ]},
        {id: 93, name: '����', district: [
            {id: 897, name: '�ĳ���'},
            {id: 898, name: '����'},
            {id: 899, name: '������'},
            {id: 900, name: '�ֽ���'},
            {id: 901, name: '�Ͱ���'},
            {id: 902, name: '��Ϫ��'},
            {id: 903, name: '������'},
            {id: 904, name: '������'},
            {id: 905, name: '������'}
        ]},
        {id: 94, name: '������', district: [
            {id: 906, name: '�³���'},
            {id: 907, name: '�齭��'},
            {id: 908, name: '��ɽ��'},
            {id: 909, name: '������'},
            {id: 910, name: '������'},
            {id: 911, name: '��ɽ��'}
        ]},
        {id: 95, name: '��ɽ��', district: [
            {id: 912, name: '������'},
            {id: 913, name: '������'},
            {id: 914, name: '�ɽ��'},
            {id: 915, name: '������'}
        ]},
        {id: 96, name: '̨����', district: [
            {id: 916, name: '������'},
            {id: 917, name: '������'},
            {id: 918, name: '·����'},
            {id: 919, name: '����'},
            {id: 920, name: '������'},
            {id: 921, name: '��̨��'},
            {id: 922, name: '�ɾ���'},
            {id: 923, name: '������'},
            {id: 924, name: '�ٺ���'}
        ]},
        {id: 97, name: '��ˮ��', district: [
            {id: 925, name: '������'},
            {id: 926, name: '������'},
            {id: 927, name: '������'},
            {id: 928, name: '�����'},
            {id: 929, name: '������'},
            {id: 930, name: '�ƺ���'},
            {id: 931, name: '��Ԫ��'},
            {id: 932, name: '�������������'},
            {id: 933, name: '��Ȫ��'}
        ]}
    ]},
    {id: 12, name: '����', city: [
        {id: 98, name: '�Ϸ���', district: [
            {id: 934, name: '������'},
            {id: 935, name: '®����'},
            {id: 936, name: '��ɽ��'},
            {id: 937, name: '������'},
            {id: 938, name: '������'},
            {id: 939, name: '�ʶ���'},
            {id: 940, name: '������'}
        ]},
        {id: 99, name: '�ߺ���', district: [
            {id: 941, name: '������'},
            {id: 942, name: '������'},
            {id: 943, name: '������'},
            {id: 944, name: '𯽭��'},
            {id: 945, name: '�ߺ���'},
            {id: 946, name: '������'},
            {id: 947, name: '������'}
        ]},
        {id: 100, name: '������', district: [
            {id: 948, name: '���Ӻ���'},
            {id: 949, name: '��ɽ��'},
            {id: 950, name: '�����'},
            {id: 951, name: '������'},
            {id: 952, name: '��Զ��'},
            {id: 953, name: '�����'},
            {id: 954, name: '������'}
        ]},
        {id: 101, name: '������', district: [
            {id: 955, name: '��ͨ��'},
            {id: 956, name: '�������'},
            {id: 957, name: 'л�Ҽ���'},
            {id: 958, name: '�˹�ɽ��'},
            {id: 959, name: '�˼���'},
            {id: 960, name: '��̨��'}
        ]},
        {id: 102, name: '��ɽ��', district: [
            {id: 961, name: '���ׯ��'},
            {id: 962, name: '��ɽ��'},
            {id: 963, name: '��ɽ��'},
            {id: 964, name: '��Ϳ��'}
        ]},
        {id: 103, name: '������', district: [
            {id: 965, name: '�ż���'},
            {id: 966, name: '��ɽ��'},
            {id: 967, name: '��ɽ��'},
            {id: 968, name: '�Ϫ��'}
        ]},
        {id: 104, name: 'ͭ����', district: [
            {id: 969, name: 'ͭ��ɽ��'},
            {id: 970, name: 'ʨ��ɽ��'},
            {id: 971, name: '����'},
            {id: 972, name: 'ͭ����'}
        ]},
        {id: 105, name: '������', district: [
            {id: 973, name: 'ӭ����'},
            {id: 974, name: '�����'},
            {id: 975, name: '����'},
            {id: 976, name: '������'},
            {id: 977, name: '������'},
            {id: 978, name: 'Ǳɽ��'},
            {id: 979, name: '̫����'},
            {id: 980, name: '������'},
            {id: 981, name: '������'},
            {id: 982, name: '������'},
            {id: 983, name: 'ͩ����'}
        ]},
        {id: 106, name: '��ɽ��', district: [
            {id: 984, name: '��Ϫ��'},
            {id: 985, name: '��ɽ��'},
            {id: 986, name: '������'},
            {id: 987, name: '���'},
            {id: 988, name: '������'},
            {id: 989, name: '����'},
            {id: 990, name: '������'}
        ]},
        {id: 107, name: '������', district: [
            {id: 991, name: '������'},
            {id: 992, name: '������'},
            {id: 993, name: '������'},
            {id: 994, name: 'ȫ����'},
            {id: 995, name: '��Զ��'},
            {id: 996, name: '������'},
            {id: 997, name: '�쳤��'},
            {id: 998, name: '������'}
        ]},
        {id: 108, name: '������', district: [
            {id: 999, name: '�����'},
            {id: 1000, name: '򣶫��'},
            {id: 1001, name: '�Ȫ��'},
            {id: 1002, name: '��Ȫ��'},
            {id: 1003, name: '̫����'},
            {id: 1004, name: '������'},
            {id: 1005, name: '�����'},
            {id: 1006, name: '������'}
        ]},
        {id: 109, name: '������', district: [
            {id: 1007, name: '������'},
            {id: 1008, name: '�ɽ��'},
            {id: 1009, name: '����'},
            {id: 1010, name: '�����'},
            {id: 1011, name: '����'}
        ]},
        {id: 110, name: '������', district: [
            {id: 1012, name: '�ӳ���'},
            {id: 1013, name: '®����'},
            {id: 1014, name: '��Ϊ��'},
            {id: 1015, name: '��ɽ��'},
            {id: 1016, name: '����'}
        ]},
        {id: 111, name: '������', district: [
            {id: 1017, name: '����'},
            {id: 1018, name: 'ԣ����'},
            {id: 1019, name: '����'},
            {id: 1020, name: '������'},
            {id: 1021, name: '�����'},
            {id: 1022, name: '��կ��'},
            {id: 1023, name: '��ɽ��'}
        ]},
        {id: 112, name: '������', district: [
            {id: 1024, name: '�۳���'},
            {id: 1025, name: '������'},
            {id: 1026, name: '�ɳ���'},
            {id: 1027, name: '������'}
        ]},
        {id: 113, name: '������', district: [
            {id: 1028, name: '�����'},
            {id: 1029, name: '������'},
            {id: 1030, name: 'ʯ̨��'},
            {id: 1031, name: '������'}
        ]},
        {id: 114, name: '������', district: [
            {id: 1032, name: '������'},
            {id: 1033, name: '��Ϫ��'},
            {id: 1034, name: '�����'},
            {id: 1035, name: '����'},
            {id: 1036, name: '��Ϫ��'},
            {id: 1037, name: '캵���'},
            {id: 1038, name: '������'}
        ]}
    ]},
    {id: 13, name: '����', city: [
        {id: 115, name: '������', district: [
            {id: 1039, name: '��¥��'},
            {id: 1040, name: '̨����'},
            {id: 1041, name: '��ɽ��'},
            {id: 1042, name: '��β��'},
            {id: 1043, name: '������'},
            {id: 1044, name: '������'},
            {id: 1045, name: '������'},
            {id: 1046, name: '��Դ��'},
            {id: 1047, name: '������'},
            {id: 1048, name: '��̩��'},
            {id: 1049, name: 'ƽ̶��'},
            {id: 1050, name: '������'},
            {id: 1051, name: '������'}
        ]},
        {id: 116, name: '������', district: [
            {id: 1052, name: '˼����'},
            {id: 1053, name: '������'},
            {id: 1054, name: '������'},
            {id: 1055, name: '������'},
            {id: 1056, name: 'ͬ����'},
            {id: 1057, name: '�谲��'}
        ]},
        {id: 117, name: '������', district: [
            {id: 1058, name: '������'},
            {id: 1059, name: '������'},
            {id: 1060, name: '�����'},
            {id: 1061, name: '������'},
            {id: 1062, name: '������'}
        ]},
        {id: 118, name: '������', district: [
            {id: 1063, name: '÷����'},
            {id: 1064, name: '��Ԫ��'},
            {id: 1065, name: '��Ϫ��'},
            {id: 1066, name: '������'},
            {id: 1067, name: '������'},
            {id: 1068, name: '������'},
            {id: 1069, name: '��Ϫ��'},
            {id: 1070, name: 'ɳ��'},
            {id: 1071, name: '������'},
            {id: 1072, name: '̩����'},
            {id: 1073, name: '������'},
            {id: 1074, name: '������'}
        ]},
        {id: 119, name: 'Ȫ����', district: [
            {id: 1075, name: '�����'},
            {id: 1076, name: '������'},
            {id: 1077, name: '�彭��'},
            {id: 1078, name: 'Ȫ����'},
            {id: 1079, name: '�ݰ���'},
            {id: 1080, name: '��Ϫ��'},
            {id: 1081, name: '������'},
            {id: 1082, name: '�»���'},
            {id: 1083, name: '������'},
            {id: 1084, name: 'ʯʨ��'},
            {id: 1085, name: '������'},
            {id: 1086, name: '�ϰ���'}
        ]},
        {id: 120, name: '������', district: [
            {id: 1087, name: 'ܼ����'},
            {id: 1088, name: '������'},
            {id: 1089, name: '������'},
            {id: 1090, name: '������'},
            {id: 1091, name: 'گ����'},
            {id: 1092, name: '��̩��'},
            {id: 1093, name: '��ɽ��'},
            {id: 1094, name: '�Ͼ���'},
            {id: 1095, name: 'ƽ����'},
            {id: 1096, name: '������'},
            {id: 1097, name: '������'}
        ]},
        {id: 121, name: '��ƽ��', district: [
            {id: 1098, name: '��ƽ��'},
            {id: 1099, name: '˳����'},
            {id: 1100, name: '�ֳ���'},
            {id: 1101, name: '������'},
            {id: 1102, name: '��Ϫ��'},
            {id: 1103, name: '������'},
            {id: 1104, name: '������'},
            {id: 1105, name: '����ɽ��'},
            {id: 1106, name: '�����'},
            {id: 1107, name: '������'}
        ]},
        {id: 122, name: '������', district: [
            {id: 1108, name: '������'},
            {id: 1109, name: '��͡��'},
            {id: 1110, name: '������'},
            {id: 1111, name: '�Ϻ���'},
            {id: 1112, name: '��ƽ��'},
            {id: 1113, name: '������'},
            {id: 1114, name: '��ƽ��'}
        ]},
        {id: 123, name: '������', district: [
            {id: 1115, name: '������'},
            {id: 1116, name: 'ϼ����'},
            {id: 1117, name: '������'},
            {id: 1118, name: '������'},
            {id: 1119, name: '������'},
            {id: 1120, name: '������'},
            {id: 1121, name: '������'},
            {id: 1122, name: '������'},
            {id: 1123, name: '������'}
        ]}
    ]},
    {id: 14, name: '����', city: [
        {id: 124, name: '�ϲ���', district: [
            {id: 1124, name: '������'},
            {id: 1125, name: '������'},
            {id: 1126, name: '��������'},
            {id: 1127, name: '������'},
            {id: 1128, name: '��ɽ����'},
            {id: 1129, name: '�ϲ���'},
            {id: 1130, name: '�½���'},
            {id: 1131, name: '������'},
            {id: 1132, name: '������'}
        ]},
        {id: 125, name: '��������', district: [
            {id: 1133, name: '������'},
            {id: 1134, name: '��ɽ��'},
            {id: 1135, name: '������'},
            {id: 1136, name: '��ƽ��'}
        ]},
        {id: 126, name: 'Ƽ����', district: [
            {id: 1137, name: '��Դ��'},
            {id: 1138, name: '�涫��'},
            {id: 1139, name: '������'},
            {id: 1140, name: '������'},
            {id: 1141, name: '«Ϫ��'}
        ]},
        {id: 127, name: '�Ž���', district: [
            {id: 1142, name: '®ɽ��'},
            {id: 1143, name: '�����'},
            {id: 1144, name: '�Ž���'},
            {id: 1145, name: '������'},
            {id: 1146, name: '��ˮ��'},
            {id: 1147, name: '������'},
            {id: 1148, name: '�°���'},
            {id: 1149, name: '������'},
            {id: 1150, name: '������'},
            {id: 1151, name: '������'},
            {id: 1152, name: '������'},
            {id: 1153, name: '�����'}
        ]},
        {id: 128, name: '������', district: [
            {id: 1154, name: '��ˮ��'},
            {id: 1155, name: '������'}
        ]},
        {id: 129, name: 'ӥ̶��', district: [
            {id: 1156, name: '�º���'},
            {id: 1157, name: '�཭��'},
            {id: 1158, name: '��Ϫ��'}
        ]},
        {id: 130, name: '������', district: [
            {id: 1159, name: '�¹���'},
            {id: 1160, name: '����'},
            {id: 1161, name: '�ŷ���'},
            {id: 1162, name: '������'},
            {id: 1163, name: '������'},
            {id: 1164, name: '������'},
            {id: 1165, name: '��Զ��'},
            {id: 1166, name: '������'},
            {id: 1167, name: '������'},
            {id: 1168, name: 'ȫ����'},
            {id: 1169, name: '������'},
            {id: 1170, name: '�ڶ���'},
            {id: 1171, name: '�˹���'},
            {id: 1172, name: '�����'},
            {id: 1173, name: 'Ѱ����'},
            {id: 1174, name: 'ʯ����'},
            {id: 1175, name: '�����'},
            {id: 1176, name: '�Ͽ���'}
        ]},
        {id: 131, name: '������', district: [
            {id: 1177, name: '������'},
            {id: 1178, name: '��ԭ��'},
            {id: 1179, name: '������'},
            {id: 1180, name: '��ˮ��'},
            {id: 1181, name: 'Ͽ����'},
            {id: 1182, name: '�¸���'},
            {id: 1183, name: '������'},
            {id: 1184, name: '̩����'},
            {id: 1185, name: '�촨��'},
            {id: 1186, name: '����'},
            {id: 1187, name: '������'},
            {id: 1188, name: '������'},
            {id: 1189, name: '����ɽ��'}
        ]},
        {id: 132, name: '�˴���', district: [
            {id: 1190, name: 'Ԭ����'},
            {id: 1191, name: '������'},
            {id: 1192, name: '������'},
            {id: 1193, name: '�ϸ���'},
            {id: 1194, name: '�˷���'},
            {id: 1195, name: '������'},
            {id: 1196, name: 'ͭ����'},
            {id: 1197, name: '�����'},
            {id: 1198, name: '������'},
            {id: 1199, name: '�߰���'}
        ]},
        {id: 133, name: '������', district: [
            {id: 1200, name: '�ٴ���'},
            {id: 1201, name: '�ϳ���'},
            {id: 1202, name: '�质��'},
            {id: 1203, name: '�Ϸ���'},
            {id: 1204, name: '������'},
            {id: 1205, name: '�ְ���'},
            {id: 1206, name: '�˻���'},
            {id: 1207, name: '��Ϫ��'},
            {id: 1208, name: '��Ϫ��'},
            {id: 1209, name: '������'},
            {id: 1210, name: '�����'}
        ]},
        {id: 134, name: '������', district: [
            {id: 1211, name: '������'},
            {id: 1212, name: '������'},
            {id: 1213, name: '�����'},
            {id: 1214, name: '��ɽ��'},
            {id: 1215, name: 'Ǧɽ��'},
            {id: 1216, name: '�����'},
            {id: 1217, name: '߮����'},
            {id: 1218, name: '�����'},
            {id: 1219, name: '۶����'},
            {id: 1220, name: '������'},
            {id: 1221, name: '��Դ��'},
            {id: 1222, name: '������'}
        ]}
    ]},
    {id: 15, name: 'ɽ��', city: [
        {id: 135, name: '������', district: [
            {id: 1223, name: '������'},
            {id: 1224, name: '������'},
            {id: 1225, name: '������'},
            {id: 1226, name: '������'},
            {id: 1227, name: '������'},
            {id: 1228, name: '������'},
            {id: 1229, name: 'ƽ����'},
            {id: 1230, name: '������'},
            {id: 1231, name: '�̺���'},
            {id: 1232, name: '������'}
        ]},
        {id: 136, name: '�ൺ��', district: [
            {id: 1233, name: '������'},
            {id: 1234, name: '�б���'},
            {id: 1235, name: '�ķ���'},
            {id: 1236, name: '�Ƶ���'},
            {id: 1237, name: '��ɽ��'},
            {id: 1238, name: '�����'},
            {id: 1239, name: '������'},
            {id: 1240, name: '������'},
            {id: 1241, name: '��ī��'},
            {id: 1242, name: 'ƽ����'},
            {id: 1243, name: '������'},
            {id: 1244, name: '������'}
        ]},
        {id: 137, name: '�Ͳ���', district: [
            {id: 1245, name: '�ʹ���'},
            {id: 1246, name: '�ŵ���'},
            {id: 1247, name: '��ɽ��'},
            {id: 1248, name: '������'},
            {id: 1249, name: '�ܴ���'},
            {id: 1250, name: '��̨��'},
            {id: 1251, name: '������'},
            {id: 1252, name: '��Դ��'}
        ]},
        {id: 138, name: '��ׯ��', district: [
            {id: 1253, name: '������'},
            {id: 1254, name: 'Ѧ����'},
            {id: 1255, name: 'ỳ���'},
            {id: 1256, name: '̨��ׯ��'},
            {id: 1257, name: 'ɽͤ��'},
            {id: 1258, name: '������'}
        ]},
        {id: 139, name: '��Ӫ��', district: [
            {id: 1259, name: '��Ӫ��'},
            {id: 1260, name: '�ӿ���'},
            {id: 1261, name: '������'},
            {id: 1262, name: '������'},
            {id: 1263, name: '������'}
        ]},
        {id: 140, name: '��̨��', district: [
            {id: 1264, name: '֥���'},
            {id: 1265, name: '��ɽ��'},
            {id: 1266, name: 'Ĳƽ��'},
            {id: 1267, name: '��ɽ��'},
            {id: 1268, name: '������'},
            {id: 1269, name: '������'},
            {id: 1270, name: '������'},
            {id: 1271, name: '������'},
            {id: 1272, name: '������'},
            {id: 1273, name: '��Զ��'},
            {id: 1274, name: '��ϼ��'},
            {id: 1275, name: '������'}
        ]},
        {id: 141, name: 'Ϋ����', district: [
            {id: 1276, name: 'Ϋ����'},
            {id: 1277, name: '��ͤ��'},
            {id: 1278, name: '������'},
            {id: 1279, name: '������'},
            {id: 1280, name: '������'},
            {id: 1281, name: '������'},
            {id: 1282, name: '������'},
            {id: 1283, name: '�����'},
            {id: 1284, name: '�ٹ���'},
            {id: 1285, name: '������'},
            {id: 1286, name: '������'},
            {id: 1287, name: '������'}
        ]},
        {id: 142, name: '������', district: [
            {id: 1288, name: '������'},
            {id: 1289, name: '�γ���'},
            {id: 1290, name: '΢ɽ��'},
            {id: 1291, name: '��̨��'},
            {id: 1292, name: '������'},
            {id: 1293, name: '������'},
            {id: 1294, name: '������'},
            {id: 1295, name: '��ˮ��'},
            {id: 1296, name: '��ɽ��'},
            {id: 1297, name: '������'},
            {id: 1298, name: '������'},
            {id: 1299, name: '�޳���'}
        ]},
        {id: 143, name: '̩����', district: [
            {id: 1300, name: '̩ɽ��'},
            {id: 1301, name: '�����'},
            {id: 1302, name: '������'},
            {id: 1303, name: '��ƽ��'},
            {id: 1304, name: '��̩��'},
            {id: 1305, name: '�ʳ���'}
        ]},
        {id: 144, name: '������', district: [
            {id: 1306, name: '������'},
            {id: 1307, name: '�ĵ���'},
            {id: 1308, name: '�ٳ���'},
            {id: 1309, name: '��ɽ��'}
        ]},
        {id: 145, name: '������', district: [
            {id: 1310, name: '������'},
            {id: 1311, name: '�ɽ��'},
            {id: 1312, name: '������'},
            {id: 1313, name: '����'}
        ]},
        {id: 146, name: '������', district: [
            {id: 1314, name: '������'},
            {id: 1315, name: '�ֳ���'}
        ]},
        {id: 147, name: '������', district: [
            {id: 1316, name: '��ɽ��'},
            {id: 1317, name: '��ׯ��'},
            {id: 1318, name: '�Ӷ���'},
            {id: 1319, name: '������'},
            {id: 1320, name: '۰����'},
            {id: 1321, name: '��ˮ��'},
            {id: 1322, name: '��ɽ��'},
            {id: 1323, name: '����'},
            {id: 1324, name: 'ƽ����'},
            {id: 1325, name: '������'},
            {id: 1326, name: '������'},
            {id: 1327, name: '������'}
        ]},
        {id: 148, name: '������', district: [
            {id: 1328, name: '�³���'},
            {id: 1329, name: '����'},
            {id: 1330, name: '������'},
            {id: 1331, name: '������'},
            {id: 1332, name: '������'},
            {id: 1333, name: '�����'},
            {id: 1334, name: 'ƽԭ��'},
            {id: 1335, name: '�Ľ���'},
            {id: 1336, name: '�����'},
            {id: 1337, name: '������'},
            {id: 1338, name: '�����'}
        ]},
        {id: 149, name: '�ĳ���', district: [
            {id: 1339, name: '��������'},
            {id: 1340, name: '������'},
            {id: 1341, name: 'ݷ��'},
            {id: 1342, name: '��ƽ��'},
            {id: 1343, name: '������'},
            {id: 1344, name: '����'},
            {id: 1345, name: '������'},
            {id: 1346, name: '������'}
        ]},
        {id: 150, name: '������', district: [
            {id: 1347, name: '������'},
            {id: 1348, name: '������'},
            {id: 1349, name: '������'},
            {id: 1350, name: '�����'},
            {id: 1351, name: 'մ����'},
            {id: 1352, name: '������'},
            {id: 1353, name: '��ƽ��'}
        ]},
        {id: 151, name: '������', district: [
            {id: 1354, name: 'ĵ����'},
            {id: 1355, name: '����'},
            {id: 1356, name: '����'},
            {id: 1357, name: '������'},
            {id: 1358, name: '��Ұ��'},
            {id: 1359, name: '۩����'},
            {id: 1360, name: '۲����'},
            {id: 1361, name: '������'},
            {id: 1362, name: '������'}
        ]}
    ]},
    {id: 16, name: '����', city: [
        {id: 152, name: '֣����', district: [
            {id: 1363, name: '��ԭ��'},
            {id: 1364, name: '������'},
            {id: 1365, name: '�ܳǻ�����'},
            {id: 1366, name: '��ˮ��'},
            {id: 1367, name: '�Ͻ���'},
            {id: 1368, name: '�ݼ���'},
            {id: 1369, name: '��Ĳ��'},
            {id: 1370, name: '������'},
            {id: 1371, name: '������'},
            {id: 1372, name: '������'},
            {id: 1373, name: '��֣��'},
            {id: 1374, name: '�Ƿ���'}
        ]},
        {id: 153, name: '������', district: [
            {id: 1375, name: '��ͤ��'},
            {id: 1376, name: '˳�ӻ�����'},
            {id: 1377, name: '��¥��'},
            {id: 1378, name: '�Ϲ���'},
            {id: 1379, name: '����'},
            {id: 1380, name: '���'},
            {id: 1381, name: 'ͨ����'},
            {id: 1382, name: 'ξ����'},
            {id: 1383, name: '������'},
            {id: 1384, name: '������'}
        ]},
        {id: 154, name: '������', district: [
            {id: 1385, name: '�ϳ���'},
            {id: 1386, name: '������'},
            {id: 1387, name: '�ܺӻ�����'},
            {id: 1388, name: '������'},
            {id: 1389, name: '������'},
            {id: 1390, name: '������'},
            {id: 1391, name: '�Ͻ���'},
            {id: 1392, name: '�°���'},
            {id: 1393, name: '�ﴨ��'},
            {id: 1394, name: '����'},
            {id: 1395, name: '������'},
            {id: 1396, name: '������'},
            {id: 1397, name: '������'},
            {id: 1398, name: '������'},
            {id: 1399, name: '��ʦ��'}
        ]},
        {id: 155, name: 'ƽ��ɽ��', district: [
            {id: 1400, name: '�»���'},
            {id: 1401, name: '������'},
            {id: 1402, name: 'ʯ����'},
            {id: 1403, name: 'տ����'},
            {id: 1404, name: '������'},
            {id: 1405, name: 'Ҷ��'},
            {id: 1406, name: '³ɽ��'},
            {id: 1407, name: 'ۣ��'},
            {id: 1408, name: '�����'},
            {id: 1409, name: '������'}
        ]},
        {id: 156, name: '������', district: [
            {id: 1410, name: '�ķ���'},
            {id: 1411, name: '������'},
            {id: 1412, name: '����'},
            {id: 1413, name: '������'},
            {id: 1414, name: '������'},
            {id: 1415, name: '������'},
            {id: 1416, name: '����'},
            {id: 1417, name: '�ڻ���'},
            {id: 1418, name: '������'}
        ]},
        {id: 157, name: '�ױ���', district: [
            {id: 1419, name: '��ɽ��'},
            {id: 1420, name: 'ɽ����'},
            {id: 1421, name: '俱���'},
            {id: 1422, name: '����'},
            {id: 1423, name: '���'}
        ]},
        {id: 158, name: '������', district: [
            {id: 1424, name: '������'},
            {id: 1425, name: '������'},
            {id: 1426, name: '��Ȫ��'},
            {id: 1427, name: '��Ұ��'},
            {id: 1428, name: '������'},
            {id: 1429, name: '�����'},
            {id: 1430, name: 'ԭ����'},
            {id: 1431, name: '�ӽ���'},
            {id: 1432, name: '������'},
            {id: 1433, name: '��ԫ��'},
            {id: 1434, name: '������'},
            {id: 1435, name: '������'}
        ]},
        {id: 159, name: '������', district: [
            {id: 1436, name: '�����'},
            {id: 1437, name: '��վ��'},
            {id: 1438, name: '�����'},
            {id: 1439, name: 'ɽ����'},
            {id: 1440, name: '������'},
            {id: 1441, name: '������'},
            {id: 1442, name: '������'},
            {id: 1443, name: '����'},
            {id: 1444, name: '��Դ��'},
            {id: 1445, name: '������'},
            {id: 1446, name: '������'}
        ]},
        {id: 160, name: '�����', district: [
            {id: 1447, name: '������'},
            {id: 1448, name: '�����'},
            {id: 1449, name: '������'},
            {id: 1450, name: '����'},
            {id: 1451, name: '̨ǰ��'},
            {id: 1452, name: '�����'}
        ]},
        {id: 161, name: '�����', district: [
            {id: 1453, name: 'κ����'},
            {id: 1454, name: '�����'},
            {id: 1455, name: '۳����'},
            {id: 1456, name: '�����'},
            {id: 1457, name: '������'},
            {id: 1458, name: '������'}
        ]},
        {id: 162, name: '�����', district: [
            {id: 1459, name: 'Դ����'},
            {id: 1460, name: '۱����'},
            {id: 1461, name: '������'},
            {id: 1462, name: '������'},
            {id: 1463, name: '�����'}
        ]},
        {id: 163, name: '����Ͽ��', district: [
            {id: 1464, name: '��Ͻ��'},
            {id: 1465, name: '������'},
            {id: 1466, name: '�ų���'},
            {id: 1467, name: '����'},
            {id: 1468, name: '¬����'},
            {id: 1469, name: '������'},
            {id: 1470, name: '�鱦��'}
        ]},
        {id: 164, name: '������', district: [
            {id: 1471, name: '�����'},
            {id: 1472, name: '������'},
            {id: 1473, name: '������'},
            {id: 1474, name: '������'},
            {id: 1475, name: '��Ͽ��'},
            {id: 1476, name: '��ƽ��'},
            {id: 1477, name: '������'},
            {id: 1478, name: '������'},
            {id: 1479, name: '������'},
            {id: 1480, name: '�ƺ���'},
            {id: 1481, name: '��Ұ��'},
            {id: 1482, name: 'ͩ����'},
            {id: 1483, name: '������'}
        ]},
        {id: 165, name: '������', district: [
            {id: 1484, name: '��԰��'},
            {id: 1485, name: '�����'},
            {id: 1486, name: '��Ȩ��'},
            {id: 1487, name: '���'},
            {id: 1488, name: '������'},
            {id: 1489, name: '�ϳ���'},
            {id: 1490, name: '�ݳ���'},
            {id: 1491, name: '������'},
            {id: 1492, name: '������'}
        ]},
        {id: 166, name: '������', district: [
            {id: 1493, name: '������'},
            {id: 1494, name: 'ƽ����'},
            {id: 1495, name: '��ɽ��'},
            {id: 1496, name: '��ɽ��'},
            {id: 1497, name: '����'},
            {id: 1498, name: '�̳���'},
            {id: 1499, name: '��ʼ��'},
            {id: 1500, name: '�괨��'},
            {id: 1501, name: '������'},
            {id: 1502, name: 'Ϣ��'}
        ]},
        {id: 167, name: '�ܿ���', district: [
            {id: 1503, name: '������'},
            {id: 1504, name: '������'},
            {id: 1505, name: '������'},
            {id: 1506, name: '��ˮ��'},
            {id: 1507, name: '������'},
            {id: 1508, name: '������'},
            {id: 1509, name: '������'},
            {id: 1510, name: '̫����'},
            {id: 1511, name: '¹����'},
            {id: 1512, name: '�����'}
        ]},
        {id: 168, name: 'פ�����', district: [
            {id: 1513, name: '�����'},
            {id: 1514, name: '��ƽ��'},
            {id: 1515, name: '�ϲ���'},
            {id: 1516, name: 'ƽ����'},
            {id: 1517, name: '������'},
            {id: 1518, name: 'ȷɽ��'},
            {id: 1519, name: '������'},
            {id: 1520, name: '������'},
            {id: 1521, name: '��ƽ��'},
            {id: 1522, name: '�²���'}
        ]}
    ]},
    {id: 17, name: '����', city: [
        {id: 169, name: '�人��', district: [
            {id: 1523, name: '������'},
            {id: 1524, name: '������'},
            {id: 1525, name: '�~����'},
            {id: 1526, name: '������'},
            {id: 1527, name: '�����'},
            {id: 1528, name: '��ɽ��'},
            {id: 1529, name: '��ɽ��'},
            {id: 1530, name: '��������'},
            {id: 1531, name: '������'},
            {id: 1532, name: '�̵���'},
            {id: 1533, name: '������'},
            {id: 1534, name: '������'},
            {id: 1535, name: '������'}
        ]},
        {id: 170, name: '��ʯ��', district: [
            {id: 1536, name: '��ʯ����'},
            {id: 1537, name: '����ɽ��'},
            {id: 1538, name: '��½��'},
            {id: 1539, name: '��ɽ��'},
            {id: 1540, name: '������'},
            {id: 1541, name: '��ұ��'}
        ]},
        {id: 171, name: 'ʮ����', district: [
            {id: 1542, name: 'é����'},
            {id: 1543, name: '������'},
            {id: 1544, name: '����'},
            {id: 1545, name: '������'},
            {id: 1546, name: '��ɽ��'},
            {id: 1547, name: '��Ϫ��'},
            {id: 1548, name: '����'},
            {id: 1549, name: '��������'}
        ]},
        {id: 172, name: '�˲���', district: [
            {id: 1550, name: '������'},
            {id: 1551, name: '��Ҹ���'},
            {id: 1552, name: '�����'},
            {id: 1553, name: '�Vͤ��'},
            {id: 1554, name: '������'},
            {id: 1555, name: 'Զ����'},
            {id: 1556, name: '��ɽ��'},
            {id: 1557, name: '������'},
            {id: 1558, name: '����������������'},
            {id: 1559, name: '���������������'},
            {id: 1560, name: '�˶���'},
            {id: 1561, name: '������'},
            {id: 1562, name: '֦����'}
        ]},
        {id: 173, name: '�差��', district: [
            {id: 1563, name: '�����'},
            {id: 1564, name: '������'},
            {id: 1565, name: '������'},
            {id: 1566, name: '������'},
            {id: 1567, name: '�ȳ���'},
            {id: 1568, name: '������'},
            {id: 1569, name: '�Ϻӿ���'},
            {id: 1570, name: '������'},
            {id: 1571, name: '�˳���'}
        ]},
        {id: 174, name: '������', district: [
            {id: 1572, name: '���Ӻ���'},
            {id: 1573, name: '������'},
            {id: 1574, name: '������'}
        ]},
        {id: 175, name: '������', district: [
            {id: 1575, name: '������'},
            {id: 1576, name: '�޵���'},
            {id: 1577, name: '��ɽ��'},
            {id: 1578, name: 'ɳ����'},
            {id: 1579, name: '������'}
        ]},
        {id: 176, name: 'Т����', district: [
            {id: 1580, name: 'Т����'},
            {id: 1581, name: 'Т����'},
            {id: 1582, name: '������'},
            {id: 1583, name: '������'},
            {id: 1584, name: 'Ӧ����'},
            {id: 1585, name: '��½��'},
            {id: 1586, name: '������'}
        ]},
        {id: 177, name: '������', district: [
            {id: 1587, name: 'ɳ����'},
            {id: 1588, name: '������'},
            {id: 1589, name: '������'},
            {id: 1590, name: '������'},
            {id: 1591, name: '������'},
            {id: 1592, name: 'ʯ����'},
            {id: 1593, name: '�����'},
            {id: 1594, name: '������'}
        ]},
        {id: 178, name: '�Ƹ���', district: [
            {id: 1595, name: '������'},
            {id: 1596, name: '�ŷ���'},
            {id: 1597, name: '�찲��'},
            {id: 1598, name: '������'},
            {id: 1599, name: 'Ӣɽ��'},
            {id: 1600, name: '�ˮ��'},
            {id: 1601, name: 'ޭ����'},
            {id: 1602, name: '��÷��'},
            {id: 1603, name: '�����'},
            {id: 1604, name: '��Ѩ��'}
        ]},
        {id: 179, name: '������', district: [
            {id: 1605, name: '�̰���'},
            {id: 1606, name: '������'},
            {id: 1607, name: 'ͨ����'},
            {id: 1608, name: '������'},
            {id: 1609, name: 'ͨɽ��'},
            {id: 1610, name: '�����'}
        ]},
        {id: 180, name: '������', district: [
            {id: 1611, name: '������'},
            {id: 1612, name: '��ˮ��'}
        ]},
        {id: 181, name: '��ʩ', district: [
            {id: 1613, name: '��ʩ��'},
            {id: 1614, name: '������'},
            {id: 1615, name: '��ʼ��'},
            {id: 1616, name: '�Ͷ���'},
            {id: 1617, name: '������'},
            {id: 1618, name: '�̷���'},
            {id: 1619, name: '������'},
            {id: 1620, name: '�׷���'}
        ]},
        {id: 182, name: '��ũ��', district: [
            {id: 1621, name: '������'},
            {id: 1622, name: 'Ǳ����'},
            {id: 1623, name: '������'},
            {id: 1624, name: '��ũ������'}
        ]}
    ]},
    {id: 18, name: '����', city: [
        {id: 183, name: '��ɳ��', district: [
            {id: 1625, name: 'ܽ����'},
            {id: 1626, name: '������'},
            {id: 1627, name: '��´��'},
            {id: 1628, name: '������'},
            {id: 1629, name: '�껨��'},
            {id: 1630, name: '��ɳ��'},
            {id: 1631, name: '������'},
            {id: 1632, name: '������'},
            {id: 1633, name: '�����'}
        ]},
        {id: 184, name: '������', district: [
            {id: 1634, name: '������'},
            {id: 1635, name: '«����'},
            {id: 1636, name: 'ʯ����'},
            {id: 1637, name: '��Ԫ��'},
            {id: 1638, name: '������'},
            {id: 1639, name: '����'},
            {id: 1640, name: '������'},
            {id: 1641, name: '������'},
            {id: 1642, name: '������'}
        ]},
        {id: 185, name: '��̶��', district: [
            {id: 1643, name: '�����'},
            {id: 1644, name: '������'},
            {id: 1645, name: '��̶��'},
            {id: 1646, name: '������'},
            {id: 1647, name: '��ɽ��'}
        ]},
        {id: 186, name: '������', district: [
            {id: 1648, name: '������'},
            {id: 1649, name: '�����'},
            {id: 1650, name: 'ʯ����'},
            {id: 1651, name: '������'},
            {id: 1652, name: '������'},
            {id: 1653, name: '������'},
            {id: 1654, name: '������'},
            {id: 1655, name: '��ɽ��'},
            {id: 1656, name: '�ⶫ��'},
            {id: 1657, name: '���'},
            {id: 1658, name: '������'},
            {id: 1659, name: '������'}
        ]},
        {id: 187, name: '������', district: [
            {id: 1660, name: '˫����'},
            {id: 1661, name: '������'},
            {id: 1662, name: '������'},
            {id: 1663, name: '�۶���'},
            {id: 1664, name: '������'},
            {id: 1665, name: '������'},
            {id: 1666, name: '¡����'},
            {id: 1667, name: '������'},
            {id: 1668, name: '������'},
            {id: 1669, name: '������'},
            {id: 1670, name: '�ǲ�����������'},
            {id: 1671, name: '�����'}
        ]},
        {id: 188, name: '������', district: [
            {id: 1672, name: '����¥��'},
            {id: 1673, name: '��Ϫ��'},
            {id: 1674, name: '��ɽ��'},
            {id: 1675, name: '������'},
            {id: 1676, name: '������'},
            {id: 1677, name: '������'},
            {id: 1678, name: 'ƽ����'},
            {id: 1679, name: '������'},
            {id: 1680, name: '������'}
        ]},
        {id: 189, name: '������', district: [
            {id: 1681, name: '������'},
            {id: 1682, name: '������'},
            {id: 1683, name: '������'},
            {id: 1684, name: '������'},
            {id: 1685, name: '���'},
            {id: 1686, name: '�����'},
            {id: 1687, name: '��Դ��'},
            {id: 1688, name: 'ʯ����'},
            {id: 1689, name: '������'}
        ]},
        {id: 190, name: '�żҽ���', district: [
            {id: 1690, name: '������'},
            {id: 1691, name: '����Դ��'},
            {id: 1692, name: '������'},
            {id: 1693, name: 'ɣֲ��'}
        ]},
        {id: 191, name: '������', district: [
            {id: 1694, name: '������'},
            {id: 1695, name: '��ɽ��'},
            {id: 1696, name: '����'},
            {id: 1697, name: '�ҽ���'},
            {id: 1698, name: '������'},
            {id: 1699, name: '�佭��'}
        ]},
        {id: 192, name: '������', district: [
            {id: 1700, name: '������'},
            {id: 1701, name: '������'},
            {id: 1702, name: '������'},
            {id: 1703, name: '������'},
            {id: 1704, name: '������'},
            {id: 1705, name: '�κ���'},
            {id: 1706, name: '������'},
            {id: 1707, name: '�����'},
            {id: 1708, name: '����'},
            {id: 1709, name: '������'},
            {id: 1710, name: '������'}
        ]},
        {id: 193, name: '������', district: [
            {id: 1711, name: '֥ɽ��'},
            {id: 1712, name: '��ˮ̲��'},
            {id: 1713, name: '������'},
            {id: 1714, name: '������'},
            {id: 1715, name: '˫����'},
            {id: 1716, name: '����'},
            {id: 1717, name: '������'},
            {id: 1718, name: '��Զ��'},
            {id: 1719, name: '��ɽ��'},
            {id: 1720, name: '������'},
            {id: 1721, name: '��������������'}
        ]},
        {id: 194, name: '������', district: [
            {id: 1722, name: '�׳���'},
            {id: 1723, name: '�з���'},
            {id: 1724, name: '������'},
            {id: 1725, name: '��Ϫ��'},
            {id: 1726, name: '������'},
            {id: 1727, name: '��ͬ��'},
            {id: 1728, name: '��������������'},
            {id: 1729, name: '�»ζ���������'},
            {id: 1730, name: '�ƽ�����������'},
            {id: 1731, name: '�������嶱��������'},
            {id: 1732, name: 'ͨ������������'},
            {id: 1733, name: '�齭��'}
        ]},
        {id: 195, name: '¦����', district: [
            {id: 1734, name: '¦����'},
            {id: 1735, name: '˫����'},
            {id: 1736, name: '�»���'},
            {id: 1737, name: '��ˮ����'},
            {id: 1738, name: '��Դ��'}
        ]},
        {id: 196, name: '����', district: [
            {id: 1739, name: '������'},
            {id: 1740, name: '��Ϫ��'},
            {id: 1741, name: '�����'},
            {id: 1742, name: '��ԫ��'},
            {id: 1743, name: '������'},
            {id: 1744, name: '������'},
            {id: 1745, name: '��˳��'},
            {id: 1746, name: '��ɽ��'}
        ]}
    ]},
    {id: 19, name: '�㶫', city: [
        {id: 197, name: '������', district: [
            {id: 1747, name: '��ɽ��'},
            {id: 1748, name: '������'},
            {id: 1749, name: 'Խ����'},
            {id: 1750, name: '������'},
            {id: 1751, name: '�����'},
            {id: 1752, name: '������'},
            {id: 1753, name: '������'},
            {id: 1754, name: '������'},
            {id: 1755, name: '��خ��'},
            {id: 1756, name: '������'},
            {id: 1757, name: '������'},
            {id: 1758, name: '�ӻ���'}
        ]},
        {id: 198, name: '�ع���', district: [
            {id: 1759, name: '�佭��'},
            {id: 1760, name: '䥽���'},
            {id: 1761, name: '������'},
            {id: 1762, name: 'ʼ����'},
            {id: 1763, name: '�ʻ���'},
            {id: 1764, name: '��Դ��'},
            {id: 1765, name: '��Դ����������'},
            {id: 1766, name: '�·���'},
            {id: 1767, name: '�ֲ���'},
            {id: 1768, name: '������'}
        ]},
        {id: 199, name: '������', district: [
            {id: 1769, name: '�޺���'},
            {id: 1770, name: '������'},
            {id: 1771, name: '��ɽ��'},
            {id: 1772, name: '������'},
            {id: 1773, name: '������'},
            {id: 1774, name: '������'}
        ]},
        {id: 200, name: '�麣��', district: [
            {id: 1775, name: '������'},
            {id: 1776, name: '������'},
            {id: 1777, name: '������'}
        ]},
        {id: 201, name: '��ͷ��', district: [
            {id: 1778, name: '������'},
            {id: 1779, name: '��ƽ��'},
            {id: 1780, name: '婽���'},
            {id: 1781, name: '������'},
            {id: 1782, name: '������'},
            {id: 1783, name: '�κ���'},
            {id: 1784, name: '�ϰ���'}
        ]},
        {id: 202, name: '��ɽ��', district: [
            {id: 1785, name: '������'},
            {id: 1786, name: '�Ϻ���'},
            {id: 1787, name: '˳����'},
            {id: 1788, name: '��ˮ��'},
            {id: 1789, name: '������'}
        ]},
        {id: 203, name: '������', district: [
            {id: 1790, name: '���'},
            {id: 1791, name: '������'},
            {id: 1792, name: '�»���'},
            {id: 1793, name: '̨ɽ��'},
            {id: 1794, name: '��ƽ��'},
            {id: 1795, name: '��ɽ��'},
            {id: 1796, name: '��ƽ��'}
        ]},
        {id: 204, name: 'տ����', district: [
            {id: 1797, name: '�࿲��'},
            {id: 1798, name: 'ϼɽ��'},
            {id: 1799, name: '��ͷ��'},
            {id: 1800, name: '������'},
            {id: 1801, name: '��Ϫ��'},
            {id: 1802, name: '������'},
            {id: 1803, name: '������'},
            {id: 1804, name: '������'},
            {id: 1805, name: '�⴨��'}
        ]},
        {id: 205, name: 'ï����', district: [
            {id: 1806, name: 'ï����'},
            {id: 1807, name: 'ï����'},
            {id: 1808, name: '�����'},
            {id: 1809, name: '������'},
            {id: 1810, name: '������'},
            {id: 1811, name: '������'}
        ]},
        {id: 206, name: '������', district: [
            {id: 1812, name: '������'},
            {id: 1813, name: '������'},
            {id: 1814, name: '������'},
            {id: 1815, name: '������'},
            {id: 1816, name: '�⿪��'},
            {id: 1817, name: '������'},
            {id: 1818, name: '��Ҫ��'},
            {id: 1819, name: '�Ļ���'}
        ]},
        {id: 207, name: '������', district: [
            {id: 1820, name: '�ݳ���'},
            {id: 1821, name: '������'},
            {id: 1822, name: '������'},
            {id: 1823, name: '�ݶ���'},
            {id: 1824, name: '������'}
        ]},
        {id: 208, name: '÷����', district: [
            {id: 1825, name: '÷����'},
            {id: 1826, name: '÷��'},
            {id: 1827, name: '������'},
            {id: 1828, name: '��˳��'},
            {id: 1829, name: '�廪��'},
            {id: 1830, name: 'ƽԶ��'},
            {id: 1831, name: '������'},
            {id: 1832, name: '������'}
        ]},
        {id: 209, name: '��β��', district: [
            {id: 1833, name: '����'},
            {id: 1834, name: '������'},
            {id: 1835, name: '½����'},
            {id: 1836, name: '½����'}
        ]},
        {id: 210, name: '��Դ��', district: [
            {id: 1837, name: 'Դ����'},
            {id: 1838, name: '�Ͻ���'},
            {id: 1839, name: '������'},
            {id: 1840, name: '��ƽ��'},
            {id: 1841, name: '��ƽ��'},
            {id: 1842, name: '��Դ��'}
        ]},
        {id: 211, name: '������', district: [
            {id: 1843, name: '������'},
            {id: 1844, name: '������'},
            {id: 1845, name: '������'},
            {id: 1846, name: '������'}
        ]},
        {id: 212, name: '��Զ��', district: [
            {id: 1847, name: '�����'},
            {id: 1848, name: '�����'},
            {id: 1849, name: '��ɽ��'},
            {id: 1850, name: '��ɽ׳������������'},
            {id: 1851, name: '��������������'},
            {id: 1852, name: '������'},
            {id: 1853, name: 'Ӣ����'},
            {id: 1854, name: '������'}
        ]},
        {id: 213, name: '��ݸ��', district: []},
        {id: 214, name: '��ɽ��', district: []},
        {id: 215, name: '������', district: [
            {id: 1855, name: '������'},
            {id: 1856, name: '������'},
            {id: 1857, name: '��ƽ��'}
        ]},
        {id: 216, name: '������', district: [
            {id: 1858, name: '�ų���'},
            {id: 1859, name: '�Ҷ���'},
            {id: 1860, name: '������'},
            {id: 1861, name: '������'},
            {id: 1862, name: '������'}
        ]},
        {id: 217, name: '�Ƹ���', district: [
            {id: 1863, name: '�Ƴ���'},
            {id: 1864, name: '������'},
            {id: 1865, name: '������'},
            {id: 1866, name: '�ư���'},
            {id: 1867, name: '�޶���'}
        ]}
    ]},
    {id: 20, name: '����', city: [
        {id: 218, name: '������', district: [
            {id: 1868, name: '������'},
            {id: 1869, name: '������'},
            {id: 1870, name: '������'},
            {id: 1871, name: '��������'},
            {id: 1872, name: '������'},
            {id: 1873, name: '������'},
            {id: 1874, name: '������'},
            {id: 1875, name: '¡����'},
            {id: 1876, name: '��ɽ��'},
            {id: 1877, name: '������'},
            {id: 1878, name: '������'},
            {id: 1879, name: '����'}
        ]},
        {id: 219, name: '������', district: [
            {id: 1880, name: '������'},
            {id: 1881, name: '�����'},
            {id: 1882, name: '������'},
            {id: 1883, name: '������'},
            {id: 1884, name: '������'},
            {id: 1885, name: '������'},
            {id: 1886, name: '¹կ��'},
            {id: 1887, name: '�ڰ���'},
            {id: 1888, name: '��ˮ����������'},
            {id: 1889, name: '��������������'}
        ]},
        {id: 220, name: '������', district: [
            {id: 1890, name: '�����'},
            {id: 1891, name: '������'},
            {id: 1892, name: '��ɽ��'},
            {id: 1893, name: '������'},
            {id: 1894, name: '��ɽ��'},
            {id: 1895, name: '��˷��'},
            {id: 1896, name: '�ٹ���'},
            {id: 1897, name: '�鴨��'},
            {id: 1898, name: 'ȫ����'},
            {id: 1899, name: '�˰���'},
            {id: 1900, name: '������'},
            {id: 1901, name: '������'},
            {id: 1902, name: '��ʤ����������'},
            {id: 1903, name: '��Դ��'},
            {id: 1904, name: 'ƽ����'},
            {id: 1905, name: '������'},
            {id: 1906, name: '��������������'}
        ]},
        {id: 221, name: '������', district: [
            {id: 1907, name: '������'},
            {id: 1908, name: '��ɽ��'},
            {id: 1909, name: '������'},
            {id: 1910, name: '������'},
            {id: 1911, name: '����'},
            {id: 1912, name: '��ɽ��'},
            {id: 1913, name: '�Ϫ��'}
        ]},
        {id: 222, name: '������', district: [
            {id: 1914, name: '������'},
            {id: 1915, name: '������'},
            {id: 1916, name: '��ɽ����'},
            {id: 1917, name: '������'}
        ]},
        {id: 223, name: '���Ǹ���', district: [
            {id: 1918, name: '�ۿ���'},
            {id: 1919, name: '������'},
            {id: 1920, name: '��˼��'},
            {id: 1921, name: '������'}
        ]},
        {id: 224, name: '������', district: [
            {id: 1922, name: '������'},
            {id: 1923, name: '�ձ���'},
            {id: 1924, name: '��ɽ��'},
            {id: 1925, name: '�ֱ���'}
        ]},
        {id: 225, name: '�����', district: [
            {id: 1926, name: '�۱���'},
            {id: 1927, name: '������'},
            {id: 1928, name: '������'},
            {id: 1929, name: 'ƽ����'},
            {id: 1930, name: '��ƽ��'}
        ]},
        {id: 226, name: '������', district: [
            {id: 1931, name: '������'},
            {id: 1932, name: '����'},
            {id: 1933, name: '½����'},
            {id: 1934, name: '������'},
            {id: 1935, name: '��ҵ��'},
            {id: 1936, name: '������'}
        ]},
        {id: 227, name: '��ɫ��', district: [
            {id: 1937, name: '�ҽ���'},
            {id: 1938, name: '������'},
            {id: 1939, name: '�ﶫ��'},
            {id: 1940, name: 'ƽ����'},
            {id: 1941, name: '�±���'},
            {id: 1942, name: '������'},
            {id: 1943, name: '������'},
            {id: 1944, name: '������'},
            {id: 1945, name: '��ҵ��'},
            {id: 1946, name: '������'},
            {id: 1947, name: '������'},
            {id: 1948, name: '¡�ָ���������'}
        ]},
        {id: 228, name: '������', district: [
            {id: 1949, name: '�˲���'},
            {id: 1950, name: '��ƽ��'},
            {id: 1951, name: '��ɽ��'},
            {id: 1952, name: '��������������'}
        ]},
        {id: 229, name: '�ӳ���', district: [
            {id: 1953, name: '��ǽ���'},
            {id: 1954, name: '�ϵ���'},
            {id: 1955, name: '�����'},
            {id: 1956, name: '��ɽ��'},
            {id: 1957, name: '������'},
            {id: 1958, name: '�޳�������������'},
            {id: 1959, name: '����ë����������'},
            {id: 1960, name: '��������������'},
            {id: 1961, name: '��������������'},
            {id: 1962, name: '������������'},
            {id: 1963, name: '������'}
        ]},
        {id: 230, name: '������', district: [
            {id: 1964, name: '�˱���'},
            {id: 1965, name: '�ó���'},
            {id: 1966, name: '������'},
            {id: 1967, name: '������'},
            {id: 1968, name: '��������������'},
            {id: 1969, name: '��ɽ��'}
        ]},
        {id: 231, name: '������', district: [
            {id: 1970, name: '������'},
            {id: 1971, name: '������'},
            {id: 1972, name: '������'},
            {id: 1973, name: '������'},
            {id: 1974, name: '������'},
            {id: 1975, name: '�����'},
            {id: 1976, name: 'ƾ����'}
        ]}
    ]},
    {id: 21, name: '����', city: [
        {id: 232, name: '������', district: [
            {id: 1977, name: '��Ӣ��'},
            {id: 1978, name: '������'},
            {id: 1979, name: '��ɽ��'},
            {id: 1980, name: '������'}
        ]},
        {id: 233, name: '������', district: [
            {id: 1981, name: '��ָɽ��'},
            {id: 1982, name: '����'},
            {id: 1983, name: '������'},
            {id: 1984, name: '�Ĳ���'},
            {id: 1985, name: '������'},
            {id: 1986, name: '������'},
            {id: 1987, name: '������'},
            {id: 1988, name: '�Ͳ���'},
            {id: 1989, name: '������'},
            {id: 1990, name: '�ٸ���'},
            {id: 1991, name: '��ɳ����������'},
            {id: 1992, name: '��������������'},
            {id: 1993, name: '�ֶ�����������'},
            {id: 1994, name: '��ˮ����������'},
            {id: 1995, name: '��ͤ��������������'},
            {id: 1996, name: '������������������'},
            {id: 1997, name: '��ɳȺ��'},
            {id: 1998, name: '��ɳȺ��'},
            {id: 1999, name: '��ɳȺ���ĵ������亣��'}
        ]}
    ]},
    {id: 22, name: '����', city: [
        {id: 234, name: '������', district: [
            {id: 2000, name: '������'},
            {id: 2001, name: '������'},
            {id: 2002, name: '������'},
            {id: 2003, name: '��ɿ���'},
            {id: 2004, name: '������'},
            {id: 2005, name: 'ɳƺ����'},
            {id: 2006, name: '��������'},
            {id: 2007, name: '�ϰ���'},
            {id: 2008, name: '������'},
            {id: 2009, name: '��ʢ��'},
            {id: 2010, name: '˫����'},
            {id: 2011, name: '�山��'},
            {id: 2012, name: '������'},
            {id: 2013, name: 'ǭ����'},
            {id: 2014, name: '������'},
            {id: 2015, name: '�뽭��'},
            {id: 2016, name: '������'},
            {id: 2017, name: 'ͭ����'},
            {id: 2018, name: '������'},
            {id: 2019, name: '�ٲ���'},
            {id: 2020, name: '�ɽ��'},
            {id: 2021, name: '��ƽ��'},
            {id: 2022, name: '�ǿ���'},
            {id: 2023, name: '�ᶼ��'},
            {id: 2024, name: '�潭��'},
            {id: 2025, name: '��¡��'},
            {id: 2026, name: '����'},
            {id: 2027, name: '����'},
            {id: 2028, name: '������'},
            {id: 2029, name: '�����'},
            {id: 2030, name: '��ɽ��'},
            {id: 2031, name: '��Ϫ��'},
            {id: 2032, name: 'ʯ��������������'},
            {id: 2033, name: '��ɽ����������������'},
            {id: 2034, name: '��������������������'},
            {id: 2035, name: '��ˮ����������������'},
            {id: 2036, name: '������'},
            {id: 2037, name: '�ϴ���'},
            {id: 2038, name: '������'},
            {id: 2039, name: '�ϴ���'}
        ]}
    ]},
    {id: 23, name: '�Ĵ�', city: [
        {id: 235, name: '�ɶ���', district: [
            {id: 2040, name: '������'},
            {id: 2041, name: '������'},
            {id: 2042, name: '��ţ��'},
            {id: 2043, name: '�����'},
            {id: 2044, name: '�ɻ���'},
            {id: 2045, name: '��Ȫ����'},
            {id: 2046, name: '��׽���'},
            {id: 2047, name: '�¶���'},
            {id: 2048, name: '�½���'},
            {id: 2049, name: '������'},
            {id: 2050, name: '˫����'},
            {id: 2051, name: 'ۯ��'},
            {id: 2052, name: '������'},
            {id: 2053, name: '�ѽ���'},
            {id: 2054, name: '�½���'},
            {id: 2055, name: '��������'},
            {id: 2056, name: '������'},
            {id: 2057, name: '������'},
            {id: 2058, name: '������'}
        ]},
        {id: 236, name: '�Թ���', district: [
            {id: 2059, name: '��������'},
            {id: 2060, name: '������'},
            {id: 2061, name: '����'},
            {id: 2062, name: '��̲��'},
            {id: 2063, name: '����'},
            {id: 2064, name: '��˳��'}
        ]},
        {id: 237, name: '��֦����', district: [
            {id: 2065, name: '����'},
            {id: 2066, name: '����'},
            {id: 2067, name: '�ʺ���'},
            {id: 2068, name: '������'},
            {id: 2069, name: '�α���'}
        ]},
        {id: 238, name: '������', district: [
            {id: 2070, name: '������'},
            {id: 2071, name: '��Ϫ��'},
            {id: 2072, name: '����̶��'},
            {id: 2073, name: '����'},
            {id: 2074, name: '�Ͻ���'},
            {id: 2075, name: '������'},
            {id: 2076, name: '������'}
        ]},
        {id: 239, name: '������', district: [
            {id: 2077, name: '�����'},
            {id: 2078, name: '�н���'},
            {id: 2079, name: '�޽���'},
            {id: 2080, name: '�㺺��'},
            {id: 2081, name: 'ʲ����'},
            {id: 2082, name: '������'}
        ]},
        {id: 240, name: '������', district: [
            {id: 2083, name: '������'},
            {id: 2084, name: '������'},
            {id: 2085, name: '��̨��'},
            {id: 2086, name: '��ͤ��'},
            {id: 2087, name: '����'},
            {id: 2088, name: '������'},
            {id: 2089, name: '����Ǽ��������'},
            {id: 2090, name: 'ƽ����'},
            {id: 2091, name: '������'}
        ]},
        {id: 241, name: '��Ԫ��', district: [
            {id: 2092, name: '������'},
            {id: 2093, name: 'Ԫ����'},
            {id: 2094, name: '������'},
            {id: 2095, name: '������'},
            {id: 2096, name: '�ന��'},
            {id: 2097, name: '������'},
            {id: 2098, name: '��Ϫ��'}
        ]},
        {id: 242, name: '������', district: [
            {id: 2099, name: '��ɽ��'},
            {id: 2100, name: '������'},
            {id: 2101, name: '��Ϫ��'},
            {id: 2102, name: '�����'},
            {id: 2103, name: '��Ӣ��'}
        ]},
        {id: 243, name: '�ڽ���', district: [
            {id: 2104, name: '������'},
            {id: 2105, name: '������'},
            {id: 2106, name: '��Զ��'},
            {id: 2107, name: '������'},
            {id: 2108, name: '¡����'}
        ]},
        {id: 244, name: '��ɽ��', district: [
            {id: 2109, name: '������'},
            {id: 2110, name: 'ɳ����'},
            {id: 2111, name: '��ͨ����'},
            {id: 2112, name: '��ں���'},
            {id: 2113, name: '��Ϊ��'},
            {id: 2114, name: '������'},
            {id: 2115, name: '�н���'},
            {id: 2116, name: '�崨��'},
            {id: 2117, name: '�������������'},
            {id: 2118, name: '�������������'},
            {id: 2119, name: '��üɽ��'}
        ]},
        {id: 245, name: '�ϳ���', district: [
            {id: 2120, name: '˳����'},
            {id: 2121, name: '��ƺ��'},
            {id: 2122, name: '������'},
            {id: 2123, name: '�ϲ���'},
            {id: 2124, name: 'Ӫɽ��'},
            {id: 2125, name: '���'},
            {id: 2126, name: '��¤��'},
            {id: 2127, name: '������'},
            {id: 2128, name: '������'}
        ]},
        {id: 246, name: 'üɽ��', district: [
            {id: 2129, name: '������'},
            {id: 2130, name: '������'},
            {id: 2131, name: '��ɽ��'},
            {id: 2132, name: '������'},
            {id: 2133, name: '������'},
            {id: 2134, name: '������'}
        ]},
        {id: 247, name: '�˱���', district: [
            {id: 2135, name: '������'},
            {id: 2136, name: '�˱���'},
            {id: 2137, name: '��Ϫ��'},
            {id: 2138, name: '������'},
            {id: 2139, name: '������'},
            {id: 2140, name: '����'},
            {id: 2141, name: '����'},
            {id: 2142, name: '������'},
            {id: 2143, name: '������'},
            {id: 2144, name: '��ɽ��'}
        ]},
        {id: 248, name: '�㰲��', district: [
            {id: 2145, name: '�㰲��'},
            {id: 2146, name: '������'},
            {id: 2147, name: '��ʤ��'},
            {id: 2148, name: '��ˮ��'},
            {id: 2149, name: '������'}
        ]},
        {id: 249, name: '������', district: [
            {id: 2150, name: 'ͨ����'},
            {id: 2151, name: '����'},
            {id: 2152, name: '������'},
            {id: 2153, name: '������'},
            {id: 2154, name: '������'},
            {id: 2155, name: '����'},
            {id: 2156, name: '��Դ��'}
        ]},
        {id: 250, name: '�Ű���', district: [
            {id: 2157, name: '�����'},
            {id: 2158, name: '��ɽ��'},
            {id: 2159, name: '������'},
            {id: 2160, name: '��Դ��'},
            {id: 2161, name: 'ʯ����'},
            {id: 2162, name: '��ȫ��'},
            {id: 2163, name: '«ɽ��'},
            {id: 2164, name: '������'}
        ]},
        {id: 251, name: '������', district: [
            {id: 2165, name: '������'},
            {id: 2166, name: 'ͨ����'},
            {id: 2167, name: '�Ͻ���'},
            {id: 2168, name: 'ƽ����'}
        ]},
        {id: 252, name: '������', district: [
            {id: 2169, name: '�㽭��'},
            {id: 2170, name: '������'},
            {id: 2171, name: '������'},
            {id: 2172, name: '������'}
        ]},
        {id: 253, name: '����', district: [
            {id: 2173, name: '�봨��'},
            {id: 2174, name: '����'},
            {id: 2175, name: 'ï��'},
            {id: 2176, name: '������'},
            {id: 2177, name: '��կ����'},
            {id: 2178, name: '����'},
            {id: 2179, name: 'С����'},
            {id: 2180, name: '��ˮ��'},
            {id: 2181, name: '�������'},
            {id: 2182, name: '������'},
            {id: 2183, name: '������'},
            {id: 2184, name: '��������'},
            {id: 2185, name: '��ԭ��'}
        ]},
        {id: 254, name: '����', district: [
            {id: 2186, name: '������'},
            {id: 2187, name: '����'},
            {id: 2188, name: '������'},
            {id: 2189, name: '������'},
            {id: 2190, name: '�Ž���'},
            {id: 2191, name: '������'},
            {id: 2192, name: '¯����'},
            {id: 2193, name: '������'},
            {id: 2194, name: '������'},
            {id: 2195, name: '�¸���'},
            {id: 2196, name: '������'},
            {id: 2197, name: 'ʯ����'},
            {id: 2198, name: 'ɫ����'},
            {id: 2199, name: '������'},
            {id: 2200, name: '������'},
            {id: 2201, name: '�����'},
            {id: 2202, name: '������'},
            {id: 2203, name: '������'}
        ]},
        {id: 255, name: '��ɽ', district: [
            {id: 2204, name: '������'},
            {id: 2205, name: 'ľ�����������'},
            {id: 2206, name: '��Դ��'},
            {id: 2207, name: '�²���'},
            {id: 2208, name: '������'},
            {id: 2209, name: '�ᶫ��'},
            {id: 2210, name: '������'},
            {id: 2211, name: '�ո���'},
            {id: 2212, name: '������'},
            {id: 2213, name: '������'},
            {id: 2214, name: '�Ѿ���'},
            {id: 2215, name: 'ϲ����'},
            {id: 2216, name: '������'},
            {id: 2217, name: 'Խ����'},
            {id: 2218, name: '������'},
            {id: 2219, name: '������'},
            {id: 2220, name: '�ײ���'}
        ]}
    ]},
    {id: 24, name: '����', city: [
        {id: 256, name: '������', district: [
            {id: 2221, name: '������'},
            {id: 2222, name: '������'},
            {id: 2223, name: '��Ϫ��'},
            {id: 2224, name: '�ڵ���'},
            {id: 2225, name: '������'},
            {id: 2226, name: 'С����'},
            {id: 2227, name: '������'},
            {id: 2228, name: 'Ϣ����'},
            {id: 2229, name: '������'},
            {id: 2230, name: '������'}
        ]},
        {id: 257, name: '����ˮ��', district: [
            {id: 2231, name: '��ɽ��'},
            {id: 2232, name: '��֦����'},
            {id: 2233, name: 'ˮ����'},
            {id: 2234, name: '����'}
        ]},
        {id: 258, name: '������', district: [
            {id: 2235, name: '�컨����'},
            {id: 2236, name: '�㴨��'},
            {id: 2237, name: '������'},
            {id: 2238, name: 'ͩ����'},
            {id: 2239, name: '������'},
            {id: 2240, name: '������'},
            {id: 2241, name: '��������������������'},
            {id: 2242, name: '������������������'},
            {id: 2243, name: '�����'},
            {id: 2244, name: '��̶��'},
            {id: 2245, name: '������'},
            {id: 2246, name: 'ϰˮ��'},
            {id: 2247, name: '��ˮ��'},
            {id: 2248, name: '�ʻ���'}
        ]},
        {id: 259, name: '��˳��', district: [
            {id: 2249, name: '������'},
            {id: 2250, name: 'ƽ����'},
            {id: 2251, name: '�ն���'},
            {id: 2252, name: '��������������������'},
            {id: 2253, name: '���벼��������������'},
            {id: 2254, name: '�������岼����������'}
        ]},
        {id: 260, name: 'ͭ�ʵ���', district: [
            {id: 2255, name: 'ͭ����'},
            {id: 2256, name: '������'},
            {id: 2257, name: '��������������'},
            {id: 2258, name: 'ʯ����'},
            {id: 2259, name: '˼����'},
            {id: 2260, name: 'ӡ������������������'},
            {id: 2261, name: '�½���'},
            {id: 2262, name: '�غ�������������'},
            {id: 2263, name: '��������������'},
            {id: 2264, name: '��ɽ����'}
        ]},
        {id: 261, name: 'ǭ��', district: [
            {id: 2265, name: '������'},
            {id: 2266, name: '������'},
            {id: 2267, name: '�հ���'},
            {id: 2268, name: '��¡��'},
            {id: 2269, name: '�����'},
            {id: 2270, name: '������'},
            {id: 2271, name: '�����'},
            {id: 2272, name: '������'}
        ]},
        {id: 262, name: '�Ͻڵ���', district: [
            {id: 2273, name: '�Ͻ���'},
            {id: 2274, name: '����'},
            {id: 2275, name: 'ǭ����'},
            {id: 2276, name: '��ɳ��'},
            {id: 2277, name: '֯����'},
            {id: 2278, name: '��Ӻ��'},
            {id: 2279, name: '���������������������'},
            {id: 2280, name: '������'}
        ]},
        {id: 263, name: 'ǭ��', district: [
            {id: 2281, name: '������'},
            {id: 2282, name: '��ƽ��'},
            {id: 2283, name: 'ʩ����'},
            {id: 2284, name: '������'},
            {id: 2285, name: '��Զ��'},
            {id: 2286, name: '᯹���'},
            {id: 2287, name: '������'},
            {id: 2288, name: '������'},
            {id: 2289, name: '������'},
            {id: 2290, name: '̨����'},
            {id: 2291, name: '��ƽ��'},
            {id: 2292, name: '�Ž���'},
            {id: 2293, name: '�ӽ���'},
            {id: 2294, name: '��ɽ��'},
            {id: 2295, name: '�齭��'},
            {id: 2296, name: '��կ��'}
        ]},
        {id: 264, name: 'ǭ��', district: [
            {id: 2297, name: '������'},
            {id: 2298, name: '��Ȫ��'},
            {id: 2299, name: '����'},
            {id: 2300, name: '����'},
            {id: 2301, name: '�Ͱ���'},
            {id: 2302, name: '��ɽ��'},
            {id: 2303, name: 'ƽ����'},
            {id: 2304, name: '�޵���'},
            {id: 2305, name: '��˳��'},
            {id: 2306, name: '������'},
            {id: 2307, name: '��ˮ��'},
            {id: 2308, name: '����ˮ��������'}
        ]}
    ]},
    {id: 25, name: '����', city: [
        {id: 265, name: '������', district: [
            {id: 2309, name: '�廪��'},
            {id: 2310, name: '������'},
            {id: 2311, name: '�ٶ���'},
            {id: 2312, name: '��ɽ��'},
            {id: 2313, name: '������'},
            {id: 2314, name: '�ʹ���'},
            {id: 2315, name: '������'},
            {id: 2316, name: '������'},
            {id: 2317, name: '������'},
            {id: 2318, name: 'ʯ������������'},
            {id: 2319, name: '������'},
            {id: 2320, name: '»Ȱ��������������'},
            {id: 2321, name: 'Ѱ���������������'},
            {id: 2322, name: '������'}
        ]},
        {id: 266, name: '������', district: [
            {id: 2323, name: '������'},
            {id: 2324, name: '������'},
            {id: 2325, name: '½����'},
            {id: 2326, name: 'ʦ����'},
            {id: 2327, name: '��ƽ��'},
            {id: 2328, name: '��Դ��'},
            {id: 2329, name: '������'},
            {id: 2330, name: 'մ����'},
            {id: 2331, name: '������'}
        ]},
        {id: 267, name: '��Ϫ��', district: [
            {id: 2332, name: '������'},
            {id: 2333, name: '������'},
            {id: 2334, name: '�ν���'},
            {id: 2335, name: 'ͨ����'},
            {id: 2336, name: '������'},
            {id: 2337, name: '������'},
            {id: 2338, name: '��ɽ����������'},
            {id: 2339, name: '��ƽ�������������'},
            {id: 2340, name: 'Ԫ���������������������'}
        ]},
        {id: 268, name: '��ɽ��', district: [
            {id: 2341, name: '¡����'},
            {id: 2342, name: 'ʩ����'},
            {id: 2343, name: '�ڳ���'},
            {id: 2344, name: '������'},
            {id: 2345, name: '������'}
        ]},
        {id: 269, name: '��ͨ��', district: [
            {id: 2346, name: '������'},
            {id: 2347, name: '³����'},
            {id: 2348, name: '�ɼ���'},
            {id: 2349, name: '�ν���'},
            {id: 2350, name: '�����'},
            {id: 2351, name: '������'},
            {id: 2352, name: '�罭��'},
            {id: 2353, name: '������'},
            {id: 2354, name: '������'},
            {id: 2355, name: '������'},
            {id: 2356, name: 'ˮ����'}
        ]},
        {id: 270, name: '������', district: [
            {id: 2357, name: '�ų���'},
            {id: 2358, name: '����������������'},
            {id: 2359, name: '��ʤ��'},
            {id: 2360, name: '��ƺ��'},
            {id: 2361, name: '��������������'}
        ]},
        {id: 271, name: '˼é��', district: [
            {id: 2362, name: '������'},
            {id: 2363, name: '�ն�����������������'},
            {id: 2364, name: 'ī��������������'},
            {id: 2365, name: '��������������'},
            {id: 2366, name: '���ȴ�������������'},
            {id: 2367, name: '�������������������������'},
            {id: 2368, name: '���ǹ���������������'},
            {id: 2369, name: '������������������������'},
            {id: 2370, name: '����������������'},
            {id: 2371, name: '��������������'}
        ]},
        {id: 272, name: '�ٲ���', district: [
            {id: 2372, name: '������'},
            {id: 2373, name: '������'},
            {id: 2374, name: '����'},
            {id: 2375, name: '������'},
            {id: 2376, name: '����'},
            {id: 2377, name: '˫�����������岼�������������'},
            {id: 2378, name: '�����������������'},
            {id: 2379, name: '��Դ����������'}
        ]},
        {id: 273, name: '����', district: [
            {id: 2380, name: '������'},
            {id: 2381, name: '˫����'},
            {id: 2382, name: 'Ĳ����'},
            {id: 2383, name: '�ϻ���'},
            {id: 2384, name: 'Ҧ����'},
            {id: 2385, name: '��Ҧ��'},
            {id: 2386, name: '������'},
            {id: 2387, name: 'Ԫı��'},
            {id: 2388, name: '�䶨��'},
            {id: 2389, name: '»����'}
        ]},
        {id: 274, name: '���', district: [
            {id: 2390, name: '������'},
            {id: 2391, name: '��Զ��'},
            {id: 2392, name: '������'},
            {id: 2393, name: '��������������'},
            {id: 2394, name: '��ˮ��'},
            {id: 2395, name: 'ʯ����'},
            {id: 2396, name: '������'},
            {id: 2397, name: '������'},
            {id: 2398, name: 'Ԫ����'},
            {id: 2399, name: '�����'},
            {id: 2400, name: '��ƽ�����������������'},
            {id: 2401, name: '�̴���'},
            {id: 2402, name: '�ӿ�����������'}
        ]},
        {id: 275, name: '��ɽ', district: [
            {id: 2403, name: '��ɽ��'},
            {id: 2404, name: '��ɽ��'},
            {id: 2405, name: '������'},
            {id: 2406, name: '��������'},
            {id: 2407, name: '�����'},
            {id: 2408, name: '����'},
            {id: 2409, name: '������'},
            {id: 2410, name: '������'}
        ]},
        {id: 276, name: '��˫����', district: [
            {id: 2411, name: '������'},
            {id: 2412, name: '�º���'},
            {id: 2413, name: '������'}
        ]},
        {id: 277, name: '����', district: [
            {id: 2414, name: '������'},
            {id: 2415, name: '�������������'},
            {id: 2416, name: '������'},
            {id: 2417, name: '������'},
            {id: 2418, name: '�ֶ���'},
            {id: 2419, name: '�Ͻ�����������'},
            {id: 2420, name: 'Ρɽ�������������'},
            {id: 2421, name: '��ƽ��'},
            {id: 2422, name: '������'},
            {id: 2423, name: '��Դ��'},
            {id: 2424, name: '������'},
            {id: 2425, name: '������'}
        ]},
        {id: 278, name: '�º�', district: [
            {id: 2426, name: '������'},
            {id: 2427, name: 'º����'},
            {id: 2428, name: '������'},
            {id: 2429, name: 'ӯ����'},
            {id: 2430, name: '¤����'}
        ]},
        {id: 279, name: 'ŭ��', district: [
            {id: 2431, name: '��ˮ��'},
            {id: 2432, name: '������'},
            {id: 2433, name: '��ɽ������ŭ��������'},
            {id: 2434, name: '��ƺ����������������'}
        ]},
        {id: 280, name: '����', district: [
            {id: 2435, name: '���������'},
            {id: 2436, name: '������'},
            {id: 2437, name: 'ά��������������'}
        ]}
    ]},
    {id: 26, name: '����', city: [
        {id: 281, name: '������', district: [
            {id: 2438, name: '�ǹ���'},
            {id: 2439, name: '������'},
            {id: 2440, name: '������'},
            {id: 2441, name: '��ľ��'},
            {id: 2442, name: '��ˮ��'},
            {id: 2443, name: '����������'},
            {id: 2444, name: '������'},
            {id: 2445, name: 'ī�񹤿���'}
        ]},
        {id: 282, name: '��������', district: [
            {id: 2446, name: '������'},
            {id: 2447, name: '������'},
            {id: 2448, name: '������'},
            {id: 2449, name: '��������'},
            {id: 2450, name: '������'},
            {id: 2451, name: '������'},
            {id: 2452, name: '������'},
            {id: 2453, name: '����'},
            {id: 2454, name: 'â����'},
            {id: 2455, name: '��¡��'},
            {id: 2456, name: '�߰���'}
        ]},
        {id: 283, name: 'ɽ�ϵ���', district: [
            {id: 2457, name: '�˶���'},
            {id: 2458, name: '������'},
            {id: 2459, name: '������'},
            {id: 2460, name: 'ɣ����'},
            {id: 2461, name: '�����'},
            {id: 2462, name: '������'},
            {id: 2463, name: '������'},
            {id: 2464, name: '������'},
            {id: 2465, name: '�Ӳ���'},
            {id: 2466, name: '¡����'},
            {id: 2467, name: '������'},
            {id: 2468, name: '�˿�����'}
        ]},
        {id: 284, name: '�տ������', district: [
            {id: 2469, name: '�տ�����'},
            {id: 2470, name: '��ľ����'},
            {id: 2471, name: '������'},
            {id: 2472, name: '������'},
            {id: 2473, name: '������'},
            {id: 2474, name: '������'},
            {id: 2475, name: '������'},
            {id: 2476, name: 'лͨ����'},
            {id: 2477, name: '������'},
            {id: 2478, name: '�ʲ���'},
            {id: 2479, name: '������'},
            {id: 2480, name: '������'},
            {id: 2481, name: '�ٰ���'},
            {id: 2482, name: '�Ƕ���'},
            {id: 2483, name: '��¡��'},
            {id: 2484, name: '����ľ��'},
            {id: 2485, name: '������'},
            {id: 2486, name: '�ڰ���'}
        ]},
        {id: 285, name: '��������', district: [
            {id: 2487, name: '������'},
            {id: 2488, name: '������'},
            {id: 2489, name: '������'},
            {id: 2490, name: '������'},
            {id: 2491, name: '������'},
            {id: 2492, name: '������'},
            {id: 2493, name: '����'},
            {id: 2494, name: '�����'},
            {id: 2495, name: '������'},
            {id: 2496, name: '������'}
        ]},
        {id: 286, name: '�������', district: [
            {id: 2497, name: '������'},
            {id: 2498, name: '������'},
            {id: 2499, name: '������'},
            {id: 2500, name: '������'},
            {id: 2501, name: '�Ｊ��'},
            {id: 2502, name: '������'},
            {id: 2503, name: '������'}
        ]},
        {id: 287, name: '��֥����', district: [
            {id: 2504, name: '��֥��'},
            {id: 2505, name: '����������'},
            {id: 2506, name: '������'},
            {id: 2507, name: 'ī����'},
            {id: 2508, name: '������'},
            {id: 2509, name: '������'},
            {id: 2510, name: '����'}
        ]}
    ]},
    {id: 27, name: '����', city: [
        {id: 288, name: '������', district: [
            {id: 2511, name: '�³���'},
            {id: 2512, name: '������'},
            {id: 2513, name: '������'},
            {id: 2514, name: '�����'},
            {id: 2515, name: 'δ����'},
            {id: 2516, name: '������'},
            {id: 2517, name: '������'},
            {id: 2518, name: '������'},
            {id: 2519, name: '������'},
            {id: 2520, name: '������'},
            {id: 2521, name: '������'},
            {id: 2522, name: '����'},
            {id: 2523, name: '������'}
        ]},
        {id: 289, name: 'ͭ����', district: [
            {id: 2524, name: '������'},
            {id: 2525, name: 'ӡ̨��'},
            {id: 2526, name: 'ҫ����'},
            {id: 2527, name: '�˾���'}
        ]},
        {id: 290, name: '������', district: [
            {id: 2528, name: 'μ����'},
            {id: 2529, name: '��̨��'},
            {id: 2530, name: '�²���'},
            {id: 2531, name: '������'},
            {id: 2532, name: '�ɽ��'},
            {id: 2533, name: '������'},
            {id: 2534, name: 'ü��'},
            {id: 2535, name: '¤��'},
            {id: 2536, name: 'ǧ����'},
            {id: 2537, name: '������'},
            {id: 2538, name: '����'},
            {id: 2539, name: '̫����'}
        ]},
        {id: 291, name: '������', district: [
            {id: 2540, name: '�ض���'},
            {id: 2541, name: '������'},
            {id: 2542, name: 'μ����'},
            {id: 2543, name: '��ԭ��'},
            {id: 2544, name: '������'},
            {id: 2545, name: 'Ǭ��'},
            {id: 2546, name: '��Ȫ��'},
            {id: 2547, name: '������'},
            {id: 2548, name: '����'},
            {id: 2549, name: '������'},
            {id: 2550, name: 'Ѯ����'},
            {id: 2551, name: '������'},
            {id: 2552, name: '�书��'},
            {id: 2553, name: '��ƽ��'}
        ]},
        {id: 292, name: 'μ����', district: [
            {id: 2554, name: '��μ��'},
            {id: 2555, name: '����'},
            {id: 2556, name: '������'},
            {id: 2557, name: '������'},
            {id: 2558, name: '������'},
            {id: 2559, name: '�γ���'},
            {id: 2560, name: '�ѳ���'},
            {id: 2561, name: '��ˮ��'},
            {id: 2562, name: '��ƽ��'},
            {id: 2563, name: '������'},
            {id: 2564, name: '������'}
        ]},
        {id: 293, name: '�Ӱ���', district: [
            {id: 2565, name: '������'},
            {id: 2566, name: '�ӳ���'},
            {id: 2567, name: '�Ӵ���'},
            {id: 2568, name: '�ӳ���'},
            {id: 2569, name: '������'},
            {id: 2570, name: '־����'},
            {id: 2571, name: '������'},
            {id: 2572, name: '��Ȫ��'},
            {id: 2573, name: '����'},
            {id: 2574, name: '�崨��'},
            {id: 2575, name: '�˴���'},
            {id: 2576, name: '������'},
            {id: 2577, name: '������'}
        ]},
        {id: 294, name: '������', district: [
            {id: 2578, name: '��̨��'},
            {id: 2579, name: '��֣��'},
            {id: 2580, name: '�ǹ���'},
            {id: 2581, name: '����'},
            {id: 2582, name: '������'},
            {id: 2583, name: '����'},
            {id: 2584, name: '��ǿ��'},
            {id: 2585, name: '������'},
            {id: 2586, name: '�����'},
            {id: 2587, name: '������'},
            {id: 2588, name: '��ƺ��'}
        ]},
        {id: 295, name: '������', district: [
            {id: 2589, name: '������'},
            {id: 2590, name: '��ľ��'},
            {id: 2591, name: '������'},
            {id: 2592, name: '��ɽ��'},
            {id: 2593, name: '������'},
            {id: 2594, name: '������'},
            {id: 2595, name: '�����'},
            {id: 2596, name: '��֬��'},
            {id: 2597, name: '����'},
            {id: 2598, name: '�Ɽ��'},
            {id: 2599, name: '�彧��'},
            {id: 2600, name: '������'}
        ]},
        {id: 296, name: '������', district: [
            {id: 2601, name: '������'},
            {id: 2602, name: '������'},
            {id: 2603, name: 'ʯȪ��'},
            {id: 2604, name: '������'},
            {id: 2605, name: '������'},
            {id: 2606, name: '᰸���'},
            {id: 2607, name: 'ƽ����'},
            {id: 2608, name: '��ƺ��'},
            {id: 2609, name: 'Ѯ����'},
            {id: 2610, name: '�׺���'}
        ]},
        {id: 297, name: '������', district: [
            {id: 2611, name: '������'},
            {id: 2612, name: '������'},
            {id: 2613, name: '������'},
            {id: 2614, name: '������'},
            {id: 2615, name: 'ɽ����'},
            {id: 2616, name: '����'},
            {id: 2617, name: '��ˮ��'}
        ]}
    ]},
    {id: 28, name: '����', city: [
        {id: 298, name: '������', district: [
            {id: 2618, name: '�ǹ���'},
            {id: 2619, name: '�������'},
            {id: 2620, name: '������'},
            {id: 2621, name: '������'},
            {id: 2622, name: '�����'},
            {id: 2623, name: '������'},
            {id: 2624, name: '������'},
            {id: 2625, name: '������'}
        ]},
        {id: 299, name: '��������', district: []},
        {id: 300, name: '�����', district: [
            {id: 2626, name: '����'},
            {id: 2627, name: '������'}
        ]},
        {id: 301, name: '������', district: [
            {id: 2628, name: '������'},
            {id: 2629, name: 'ƽ����'},
            {id: 2630, name: '��Զ��'},
            {id: 2631, name: '������'},
            {id: 2632, name: '��̩��'}
        ]},
        {id: 302, name: '��ˮ��', district: [
            {id: 2633, name: '�س���'},
            {id: 2634, name: '������'},
            {id: 2635, name: '��ˮ��'},
            {id: 2636, name: '�ذ���'},
            {id: 2637, name: '�ʹ���'},
            {id: 2638, name: '��ɽ��'},
            {id: 2639, name: '�żҴ�����������'}
        ]},
        {id: 303, name: '������', district: [
            {id: 2640, name: '������'},
            {id: 2641, name: '������'},
            {id: 2642, name: '������'},
            {id: 2643, name: '��ף����������'}
        ]},
        {id: 304, name: '��Ҵ��', district: [
            {id: 2644, name: '������'},
            {id: 2645, name: '����ԣ����������'},
            {id: 2646, name: '������'},
            {id: 2647, name: '������'},
            {id: 2648, name: '��̨��'},
            {id: 2649, name: 'ɽ����'}
        ]},
        {id: 305, name: 'ƽ����', district: [
            {id: 2650, name: '�����'},
            {id: 2651, name: '������'},
            {id: 2652, name: '��̨��'},
            {id: 2653, name: '������'},
            {id: 2654, name: '��ͤ��'},
            {id: 2655, name: 'ׯ����'},
            {id: 2656, name: '������'}
        ]},
        {id: 306, name: '��Ȫ��', district: [
            {id: 2657, name: '������'},
            {id: 2658, name: '������'},
            {id: 2659, name: '������'},
            {id: 2660, name: '�౱�ɹ���������'},
            {id: 2661, name: '��������������������'},
            {id: 2662, name: '������'},
            {id: 2663, name: '�ػ���'}
        ]},
        {id: 307, name: '������', district: [
            {id: 2664, name: '������'},
            {id: 2665, name: '�����'},
            {id: 2666, name: '����'},
            {id: 2667, name: '������'},
            {id: 2668, name: '��ˮ��'},
            {id: 2669, name: '������'},
            {id: 2670, name: '����'},
            {id: 2671, name: '��ԭ��'}
        ]},
        {id: 308, name: '������', district: [
            {id: 2672, name: '������'},
            {id: 2673, name: 'ͨμ��'},
            {id: 2674, name: '¤����'},
            {id: 2675, name: 'μԴ��'},
            {id: 2676, name: '�����'},
            {id: 2677, name: '����'},
            {id: 2678, name: '���'}
        ]},
        {id: 309, name: '¤����', district: [
            {id: 2679, name: '�䶼��'},
            {id: 2680, name: '����'},
            {id: 2681, name: '����'},
            {id: 2682, name: '崲���'},
            {id: 2683, name: '����'},
            {id: 2684, name: '������'},
            {id: 2685, name: '����'},
            {id: 2686, name: '����'},
            {id: 2687, name: '������'}
        ]},
        {id: 310, name: '����', district: [
            {id: 2688, name: '������'},
            {id: 2689, name: '������'},
            {id: 2690, name: '������'},
            {id: 2691, name: '������'},
            {id: 2692, name: '�����'},
            {id: 2693, name: '������'},
            {id: 2694, name: '������������'},
            {id: 2695, name: '��ʯɽ�����嶫����������������'}
        ]},
        {id: 311, name: '����', district: [
            {id: 2696, name: '������'},
            {id: 2697, name: '��̶��'},
            {id: 2698, name: '׿����'},
            {id: 2699, name: '������'},
            {id: 2700, name: '������'},
            {id: 2701, name: '������'},
            {id: 2702, name: 'µ����'},
            {id: 2703, name: '�ĺ���'}
        ]}
    ]},
    {id: 29, name: '�ຣ', city: [
        {id: 312, name: '������', district: [
            {id: 2704, name: '�Ƕ���'},
            {id: 2705, name: '������'},
            {id: 2706, name: '������'},
            {id: 2707, name: '�Ǳ���'},
            {id: 2708, name: '��ͨ��������������'},
            {id: 2709, name: '������'},
            {id: 2710, name: '��Դ��'}
        ]},
        {id: 313, name: '��������', district: [
            {id: 2711, name: 'ƽ����'},
            {id: 2712, name: '��ͻ�������������'},
            {id: 2713, name: '�ֶ���'},
            {id: 2714, name: '��������������'},
            {id: 2715, name: '��¡����������'},
            {id: 2716, name: 'ѭ��������������'}
        ]},
        {id: 314, name: '����', district: [
            {id: 2717, name: '��Դ����������'},
            {id: 2718, name: '������'},
            {id: 2719, name: '������'},
            {id: 2720, name: '�ղ���'}
        ]},
        {id: 315, name: '����', district: [
            {id: 2721, name: 'ͬ����'},
            {id: 2722, name: '������'},
            {id: 2723, name: '�����'},
            {id: 2724, name: '�����ɹ���������'}
        ]},
        {id: 316, name: '����', district: [
            {id: 2725, name: '������'},
            {id: 2726, name: 'ͬ����'},
            {id: 2727, name: '�����'},
            {id: 2728, name: '�˺���'},
            {id: 2729, name: '������'}
        ]},
        {id: 317, name: '����', district: [
            {id: 2730, name: '������'},
            {id: 2731, name: '������'},
            {id: 2732, name: '�ʵ���'},
            {id: 2733, name: '������'},
            {id: 2734, name: '������'},
            {id: 2735, name: '�����'}
        ]},
        {id: 318, name: '����', district: [
            {id: 2736, name: '������'},
            {id: 2737, name: '�Ӷ���'},
            {id: 2738, name: '�ƶ���'},
            {id: 2739, name: '�ζ���'},
            {id: 2740, name: '��ǫ��'},
            {id: 2741, name: '��������'}
        ]},
        {id: 319, name: '����', district: [
            {id: 2742, name: '���ľ��'},
            {id: 2743, name: '�������'},
            {id: 2744, name: '������'},
            {id: 2745, name: '������'},
            {id: 2746, name: '�����'}
        ]}
    ]},
    {id: 30, name: '����', city: [
        {id: 320, name: '������', district: [
            {id: 2747, name: '������'},
            {id: 2748, name: '������'},
            {id: 2749, name: '�����'},
            {id: 2750, name: '������'},
            {id: 2751, name: '������'},
            {id: 2752, name: '������'}
        ]},
        {id: 321, name: 'ʯ��ɽ��', district: [
            {id: 2753, name: '�������'},
            {id: 2754, name: '��ũ��'},
            {id: 2755, name: 'ƽ����'}
        ]},
        {id: 322, name: '������', district: [
            {id: 2756, name: '��ͨ��'},
            {id: 2757, name: '�γ���'},
            {id: 2758, name: 'ͬ����'},
            {id: 2759, name: '��ͭϿ��'}
        ]},
        {id: 323, name: '��ԭ��', district: [
            {id: 2760, name: 'ԭ����'},
            {id: 2761, name: '������'},
            {id: 2762, name: '¡����'},
            {id: 2763, name: '��Դ��'},
            {id: 2764, name: '������'}
        ]},
        {id: 324, name: '������', district: [
            {id: 2765, name: 'ɳ��ͷ��'},
            {id: 2766, name: '������'},
            {id: 2767, name: '��ԭ��'}
        ]}
    ]},
    {id: 31, name: '�½�', city: [
        {id: 325, name: '��³ľ����', district: [
            {id: 2768, name: '��ɽ��'},
            {id: 2769, name: 'ɳ���Ϳ���'},
            {id: 2770, name: '������'},
            {id: 2771, name: 'ˮĥ����'},
            {id: 2772, name: 'ͷ�ͺ���'},
            {id: 2773, name: '�������'},
            {id: 2774, name: '��ɽ��'},
            {id: 2775, name: '��³ľ����'}
        ]},
        {id: 326, name: '����������', district: [
            {id: 2776, name: '��ɽ����'},
            {id: 2777, name: '����������'},
            {id: 2778, name: '�׼�̲��'},
            {id: 2779, name: '�ڶ�����'}
        ]},
        {id: 327, name: '��³������', district: [
            {id: 2780, name: '��³����'},
            {id: 2781, name: '۷����'},
            {id: 2782, name: '�п�ѷ��'}
        ]},
        {id: 328, name: '���ܵ���', district: [
            {id: 2783, name: '������'},
            {id: 2784, name: '������������������'},
            {id: 2785, name: '������'}
        ]},
        {id: 329, name: '����', district: [
            {id: 2786, name: '������'},
            {id: 2787, name: '������'},
            {id: 2788, name: '��Ȫ��'},
            {id: 2789, name: '��ͼ����'},
            {id: 2790, name: '����˹��'},
            {id: 2791, name: '��̨��'},
            {id: 2792, name: '��ľ������'},
            {id: 2793, name: 'ľ�ݹ�����������'}
        ]},
        {id: 330, name: '��������', district: [
            {id: 2794, name: '������'},
            {id: 2795, name: '������'},
            {id: 2796, name: '��Ȫ��'}
        ]},
        {id: 331, name: '��������', district: [
            {id: 2797, name: '�������'},
            {id: 2798, name: '��̨��'},
            {id: 2799, name: 'ξ����'},
            {id: 2800, name: '��Ǽ��'},
            {id: 2801, name: '��ĩ��'},
            {id: 2802, name: '���Ȼ���������'},
            {id: 2803, name: '�;���'},
            {id: 2804, name: '��˶��'},
            {id: 2805, name: '������'}
        ]},
        {id: 332, name: '�����յ���', district: [
            {id: 2806, name: '��������'},
            {id: 2807, name: '������'},
            {id: 2808, name: '�⳵��'},
            {id: 2809, name: 'ɳ����'},
            {id: 2810, name: '�º���'},
            {id: 2811, name: '�ݳ���'},
            {id: 2812, name: '��ʲ��'},
            {id: 2813, name: '��������'},
            {id: 2814, name: '��ƺ��'}
        ]},
        {id: 333, name: '�������տ¶�����', district: [
            {id: 2815, name: '��ͼʲ��'},
            {id: 2816, name: '��������'},
            {id: 2817, name: '��������'},
            {id: 2818, name: '��ǡ��'}
        ]},
        {id: 334, name: '��ʲ����', district: [
            {id: 2819, name: '��ʲ��'},
            {id: 2820, name: '�踽��'},
            {id: 2821, name: '������'},
            {id: 2822, name: 'Ӣ��ɳ��'},
            {id: 2823, name: '������'},
            {id: 2824, name: 'ɯ����'},
            {id: 2825, name: 'Ҷ����'},
            {id: 2826, name: '�������'},
            {id: 2827, name: '���պ���'},
            {id: 2828, name: '٤ʦ��'},
            {id: 2829, name: '�ͳ���'},
            {id: 2830, name: '��ʲ�����������������'}
        ]},
        {id: 335, name: '�������', district: [
            {id: 2831, name: '������'},
            {id: 2832, name: '������'},
            {id: 2833, name: 'ī����'},
            {id: 2834, name: 'Ƥɽ��'},
            {id: 2835, name: '������'},
            {id: 2836, name: '������'},
            {id: 2837, name: '������'},
            {id: 2838, name: '�����'}
        ]},
        {id: 336, name: '���������', district: [
            {id: 2839, name: '������'},
            {id: 2840, name: '������'},
            {id: 2841, name: '������'},
            {id: 2842, name: '�첼�������������'},
            {id: 2843, name: '������'},
            {id: 2844, name: '������'},
            {id: 2845, name: '��Դ��'},
            {id: 2846, name: '������'},
            {id: 2847, name: '�ؿ�˹��'},
            {id: 2848, name: '���տ���'}
        ]},
        {id: 337, name: '���ǵ���', district: [
            {id: 2849, name: '������'},
            {id: 2850, name: '������'},
            {id: 2851, name: '������'},
            {id: 2852, name: 'ɳ����'},
            {id: 2853, name: '������'},
            {id: 2854, name: 'ԣ����'},
            {id: 2855, name: '�Ͳ��������ɹ�������'}
        ]},
        {id: 338, name: '����̩����', district: [
            {id: 2856, name: '����̩��'},
            {id: 2857, name: '��������'},
            {id: 2858, name: '������'},
            {id: 2859, name: '������'},
            {id: 2860, name: '���ͺ���'},
            {id: 2861, name: '�����'},
            {id: 2862, name: '��ľ����'}
        ]},
        {id: 339, name: 'ʯ������', district: []},
        {id: 340, name: '��������', district: []},
        {id: 341, name: 'ͼľ�����', district: []},
        {id: 342, name: '�������', district: []}
    ]},
    {id: 32, name: '���', city: [
        {id: 343, name: '���', district: []}
    ]},
    {id: 33, name: '����', city: [
        {id: 344, name: '����', district: []}
    ]},
    {id: 34, name: '̨��', city: [
        {id: 345, name: '̨��', district: []}
    ]}
]