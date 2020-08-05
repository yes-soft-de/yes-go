<?php

namespace App\Repository;

use App\Entity\CommentEntity;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method CommentEntity|null find($id, $lockMode = null, $lockVersion = null)
 * @method CommentEntity|null findOneBy(array $criteria, array $orderBy = null)
 * @method CommentEntity[]    findAll()
 * @method CommentEntity[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CommentEntityRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CommentEntity::class);
    }

    // /**
    //  * @return CommentEntity[] Returns an array of CommentEntity objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */


    public function findCommentById($id): ?CommentEntity
    {
        return $this->createQueryBuilder('comment')
            ->andWhere('comment.id =id')
            ->setParameter('id', $id)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    public function findCustomerComments($id): array
    {
        return $this->createQueryBuilder('comment')
            ->andWhere('comment.customer =id')
            ->setParameter('id', $id)
            ->groupBy('comment.customer')
            ->getQuery()
            ->getResult()
            ;
    }
    public function findEmployeeComments($id): array
    {
        return $this->createQueryBuilder('comment')
            ->select('comment.id','comment.body','comment.date','comment.details','customer.clientName'
                ,'customer.image')
            ->from('App:CustomerEntity','customer')
            ->andWhere('comment.employee =:id')
            ->andWhere('comment.customer=customer.id')
            ->setParameter('id', $id)
            ->groupBy('comment.id')
            ->getQuery()
            ->getResult()
            ;
    }
    public function getAll():array
    {
    return $this->createQueryBuilder('comment')
    ->orderBy('comment.id')
    ->getQuery()
    ->getResult() ;
    }
}
