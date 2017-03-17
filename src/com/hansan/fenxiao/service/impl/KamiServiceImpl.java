package com.hansan.fenxiao.service.impl;

import com.hansan.fenxiao.entities.Kami;
import com.hansan.fenxiao.service.IKamiService;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Repository;

@Repository("kamiService")
@Scope("prototype")
public class KamiServiceImpl<T extends Kami> extends BaseServiceImpl<T>
  implements IKamiService<T>
{
}