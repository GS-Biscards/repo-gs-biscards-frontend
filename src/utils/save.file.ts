import FileSaver from "file-saver";
import { User } from "@/models/user.model";

export const saveContact = (user: User) => {
    var file = new Blob(
        [`BEGIN:VCARD\nVERSION:3.0\nFN;CHARSET=UTF-8:${user.firstName} ${''} ${user.lastName}}\nN;CHARSET=UTF-8:${''};${''};${''};;\nEMAIL;CHARSET=UTF-8;type=WORK,INTERNET:${user.email}\nTEL;TYPE=WORK,VOICE:${user.personalPhone}\nTEL;TYPE=WORK,VOICE:${user.workPhone}\nLABEL;CHARSET=UTF-8;TYPE=WORK:${''}}\nADR;CHARSET=UTF-8;TYPE=WORK:;;;;;;\nROLE;CHARSET=UTF-8:${user.description}\nORG;CHARSET=UTF-8:${''}\nURL;type=WORK;CHARSET=UTF-8:${window.location.href}\nREV:2020-08-31T03:41:09.870Z\nEND:VCARD`],
        { type: "text/vcard;charset=utf-8" }
    );
    FileSaver.saveAs(
        file,
        `${user.firstName}_${user.lastName}.vcf`,
        true
    );
}