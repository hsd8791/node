/**
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/
/**
* @param {ListNode} head
* @return {ListNode}
*/
deleteDuplicates = function(head){

	var first={
		next:head
	}
	var newHead
	reptL=repeatValue(head)
	for(let i=0;i<reptL.length;i++){
		deleteSingle(first,reptL[i])
	}
	return first.next
}

var deleteSingle=function(head,val){
	var crnt=head

	while(crnt!==null){
		if(crnt.next===null){

		}else if(crnt.next.val===val){
			crnt.next=crnt.next.next
		}
		crnt=crnt.next
	}
	return head
}

var repeatValue=function(head){
	var reptList=[],crnt=head
	if(crnt===null){
		return reptList
	}
	while(crnt.next!==null){
		if(crnt.val===crnt.next.val){
			reptList.push(crnt.val)
		}
		crnt=crnt.next
	}
	return reptList
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function createAarry(array,head){
	head=new ListNode(array[0])
	var crnt=head
	for(let i=1;i<array.length;i++){
		crnt.next=new ListNode(array[i])
		crnt=crnt.next
	}
	return head
}

function showVal(head){
	var a=[]
	var crnt=head
	while(crnt!==null){
		a.push(crnt.val)
		crnt=crnt.next
	}
	console.log(a);
}

var testHead=createAarry([1,1,1,2],head)
showVal(testHead)

deleteDuplicates(testHead)
showVal(testHead)